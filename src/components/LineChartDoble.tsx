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
  TooltipItem,
  Legend,
  Filler,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export interface DataPoint {
  year: number;
  green: number;
  red: number;
}

interface LineChartDobleProps {
  data: DataPoint[];
}

const LineChartDoble: React.FC<LineChartDobleProps> = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.year),
    datasets: [
      {
        label: "Incentivos Verdes",
        data: data.map((d) => d.green),
        borderColor: "#23b53e",
        backgroundColor: "#23b53e",
        pointBackgroundColor: "#23b53e",
        pointBorderColor: "#fff",
        borderWidth: 3,
        tension: 0,
      },
      {
        label: "Incentivos Rojos",
        data: data.map((d) => d.red),
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        pointBackgroundColor: "#ef4444",
        pointBorderColor: "#fff",
        borderWidth: 3,
        tension: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"line">) =>
            `${ctx.dataset.label}: ${ctx.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: true },
        border: { display: true, width: 3, color: "#183B6B" },
        ticks: {
          color: "#183B6B",
          font: { weight: "bold", size: 16 },
          callback: function (val, index) {
            const label = this.getLabelForValue(val as number);
            return label === "2020" || label === "2024" ? label : "";
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

  return (
    <div className="relative w-full h-[260px] sm:h-[300px] md:h-[360px] lg:h-[470px]">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChartDoble;
