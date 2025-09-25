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
  data: { label: string; value: number; color: string }[];
  title?: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, title }) => {
  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        data: data.map((d) => d.value),
        backgroundColor: data.map((d) => d.color),
        borderWidth: 2,
        borderColor: "#fff",
        cutout: "65%", 
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "rect",
          padding: 16,
          color: "#333",
          font: {
            size: 13,
            weight: "normal",
          },
        },
      },
      tooltip: { enabled: false },
      title: {
        display: !!title,
        text: title,
        color: "#144C84",
        font: { size: 16, weight: "bold" },
      },
      datalabels: {
        color: "#000",
        formatter: (value: number, ctx) => {
          const rawData = ctx.chart.data.datasets[0].data as number[];
          const total = rawData.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(1) + " %";
          return percentage;
        },
        font: {
          weight: "bold",
          size: 12,
        },
        anchor: "end",
        align: "end",
        offset: 8, 
      },
    },
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[420px] h-[300px] sm:h-[400px] md:h-[300px] lg:h-[350px]">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
