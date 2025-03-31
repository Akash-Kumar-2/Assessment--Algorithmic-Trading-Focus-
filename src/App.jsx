import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MarketChart from "./components/MarketChart";
import MarketInfo from "./components/MarketInfo";
import CrossoverSignal from "./components/CrossoverSignal";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const App = () => {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [theme] = useState(localStorage.getItem("theme") || "dark");
  const [showGraph, setShowGraph] = useState(false);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/klines",
          {
            params: { symbol: "BTCUSDT", interval: "1m", limit: 100 },
          }
        );

        const data = response.data.map((item) => ({
          time: new Date(item[0]),
          close: parseFloat(item[4]),
        }));

        setMarketData(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch market data");
        setLoading(false);
      }
    };

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 60000);
    return () => clearInterval(interval);
  }, []);

  const calculateSMA = (data, period) => {
    let sma = [];
    for (let i = period - 1; i < data.length; i++) {
      const window = data.slice(i - period + 1, i + 1);
      const average = window.reduce((sum, value) => sum + value, 0) / window.length;
      sma.push(average);
    }
    return sma;
  };

  const detectCrossovers = (sma5, sma20) => {
    let crossoverPoints = [];
    for (let i = 1; i < sma5.length; i++) {
      if (sma5[i] > sma20[i] && sma5[i - 1] <= sma20[i - 1]) {
        crossoverPoints.push({ action: "Buy", index: i + 19 });
      } else if (sma5[i] < sma20[i] && sma5[i - 1] >= sma20[i - 1]) {
        crossoverPoints.push({ action: "Sell", index: i + 19 });
      }
    }
    return crossoverPoints;
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const closePrices = marketData.map((data) => data.close);
  const sma5 = calculateSMA(closePrices, 5);
  const sma20 = calculateSMA(closePrices, 20);
  const crossoverPoints = detectCrossovers(sma5, sma20);

  const chartData = {
    labels: marketData.slice(19).map((data) => data.time.toLocaleTimeString()),
    datasets: [
      {
        label: "Close Price",
        data: closePrices.slice(19),
        borderColor: "blue",
        fill: false,
        pointRadius: 0,
      },
      {
        label: "5-period SMA",
        data: sma5,
        borderColor: "green",
        fill: false,
        pointRadius: 0,
      },
      {
        label: "20-period SMA",
        data: sma20,
        borderColor: "red",
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const scroller = () => {
    setShowGraph(true);
    setTimeout(() => {
      document.querySelector("#chart").scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className={`App ${theme}`}>
      <Header />
      <HeroSection scroller={scroller} />
      <div id="chart">
        {showGraph && (
          <>
            <MarketInfo marketData={marketData} sma5={sma5} sma20={sma20} />
            <CrossoverSignal crossoverPoints={crossoverPoints} marketData={marketData} />
            <MarketChart chartData={chartData} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
