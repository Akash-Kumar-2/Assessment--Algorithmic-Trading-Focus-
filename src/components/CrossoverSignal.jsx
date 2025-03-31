import React from "react";

const CrossoverSignal = ({ crossoverPoints, marketData }) => {
  if (!crossoverPoints.length) return null;

  const latestSignal = crossoverPoints[crossoverPoints.length - 1];

  return (
    <div className="latest-signal-container">
      <h3 className="latest-text">Latest Signal:</h3>
      <p
        className="latest-signal"
        style={latestSignal.action === "Buy" ? { color: "green" } : { color: "red" }}
      >
        {latestSignal.action} at{" "}
        {new Date(marketData[latestSignal.index].time).toLocaleTimeString()}
      </p>
    </div>
  );
};

export default CrossoverSignal;
