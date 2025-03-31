import React from "react";

const MarketInfo = ({ marketData, sma5, sma20 }) => {
  return (
    <div className="market-info-container">
      <div className="market-info-box">
        <p>Current Price: ${marketData[marketData.length - 1].close.toFixed(2)}</p>
      </div>
      <div className="market-info-box">
        <p>5-Period SMA: ${sma5[sma5.length - 1].toFixed(2)}</p>
      </div>
      <div className="market-info-box">
        <p>20-Period SMA: ${sma20[sma20.length - 1].toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MarketInfo;
