"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  colors?: string[];
  title?: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  labels,
  colors,
  title,
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors || ["#A7D4FB", "#4AB6F5", "#0094F0"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "right", 
        labels: {
          usePointStyle: true,
          pointStyle: "rect",
          padding: 20,
          color: "#144C84",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: { enabled: false },
      title: {
        display: !!title,
        text: title,
        color: "#333",
        font: { size: 16, weight: "bold" },
      },
      datalabels: {
        color: "#333",
        formatter: (value: number, ctx) => {
          const rawData = ctx.chart.data.datasets[0].data as number[];
          const total = rawData.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(0) + "%";
          return percentage;
        },
        font: {
          weight: "bold",
          size: 12,
        },
        anchor: "end",
        align: "end",
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;
