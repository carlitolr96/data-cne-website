"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface CircularBarProps {
  data: number[];
  labels: string[];
  colors?: string[];
  title?: string;
}

const CircularBar: React.FC<CircularBarProps> = ({
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
        backgroundColor: colors || ["#00b4fc", "#005bc5", "#012677", "#001449"],
        borderColor: "#ffffff",
        borderWidth: 0.5,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ffffff",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: !!title,
        text: title,
        color: "#ffffff",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return (
    <div className="w-75 h-75 mx-auto">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default CircularBar;
