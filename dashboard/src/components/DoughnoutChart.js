import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: { size: 11 },
        color: "#666",
        padding: 12,
      },
    },
    tooltip: {
      callbacks: {
        label: (ctx) => ` ${ctx.label}: ${ctx.raw} stocks`,
      },
    },
  },
  cutout: "65%",
};

export function DoughnutChart({ data }) {
  return (
    <div style={{ height: "200px", width: "100%", padding: "10px 0" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}