import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line, Doughnut } from "react-chartjs-2";

import "./analyticgraph.css";

import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const foodLabels = ["Pizza", "Burger", "Pasta", "Sandwich", "Fries"];

const BarChart = () => {
  return (
    <div className="App">
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: foodLabels,
            datasets: [
              {
                label: "Food Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Food Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return `${value / 1000}K`; // Convert values to 3K, 5K, etc.
                  },
                },
              },
            },
            plugins: {
              title: {
                text: "Monthly Food Revenue & Cost",
              },
            },
          }}
        />
      </div>

      <div className="dataCard customerCard">
        <Line
          data={{
            labels: foodLabels,
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                borderColor: "rgba(43, 63, 229, 0.8)",
                backgroundColor: "rgba(43, 63, 229, 0.3)",
                fill: true,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Food Revenue Sources",
              },
            },
          }}
        />
      </div>

      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: foodLabels,
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Food Revenue Sources",
              },
            },
          }}
        />
      </div>  
    </div>
  );
};

export default BarChart;
