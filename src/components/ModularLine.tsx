"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Plugin,
  Chart,
} from "chart.js";
import { Line } from "react-chartjs-2";

const valuePlugin: Plugin<"line"> = {
  id: "valuePlugin",
  afterDatasetsDraw: (chart: Chart<"line">) => {
    const { ctx } = chart;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      if (!meta.hidden) {
        const lastPoint = meta.data[meta.data.length - 1] as { x: number; y: number };
        const value = dataset.data[dataset.data.length - 1];
        if (lastPoint) {
          ctx.save();
          ctx.fillStyle = "#183B6B";
          ctx.font = '900 14px "Montserrat", sans-serif';
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillText(`${value}`, lastPoint.x + 10, lastPoint.y - 10);

          ctx.beginPath();
          ctx.moveTo(lastPoint.x, lastPoint.y);
          ctx.lineTo(lastPoint.x + 20, lastPoint.y - 20);
          ctx.strokeStyle = "#FF8C00";
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(lastPoint.x + 20, lastPoint.y - 20);
          ctx.lineTo(lastPoint.x + 15, lastPoint.y - 15);
          ctx.lineTo(lastPoint.x + 25, lastPoint.y - 15);
          ctx.closePath();
          ctx.fillStyle = "#FF8C00";
          ctx.fill();

          ctx.restore();
        }
      }
    });
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  valuePlugin
);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: true, width: 3, color: "#183B6B" },
      ticks: {
        color: "#183B6B",
        font: { weight: "bold" },
        callback: function (val) {
          const label = this.getLabelForValue(val as number);
          return label === "2019" || label === "2025" ? label : "";
        },
      },
    },
    y: {
      grid: { display: false },
      border: { display: true, width: 3, color: "#183B6B" },
      ticks: { display: false },
    },
  },
};

const data: ChartData<"line"> = {
  labels: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
  datasets: [
    {
      label: "Valores",
      data: [0, 8, 15, 10, 20, 30, 25],
      borderColor: "#FF8C00",
      backgroundColor: "#FF8C00",
      pointBackgroundColor: "#FF8C00",
      pointBorderColor: "#FFFFFF",
      pointBorderWidth: 2,
      borderWidth: 3,
      tension: 0,
    },
  ],
};

const ModularLine: React.FC = () => {
  return (
    <div className="w-[80%] h-[350px]">
      <Line options={options} data={data} />
    </div>
  );
};

export default ModularLine;
