// components/ScatterChart.js

import React from "react";
import { Scatter } from "react-chartjs-2";

function ScatterChart({ chartData, options }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Scatter Chart</h2>
      <Scatter data={chartData} options={options} />
    </div>
  );
}

export default ScatterChart;
