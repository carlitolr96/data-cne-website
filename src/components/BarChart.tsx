"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import Image from "next/image";
import { assets } from "@/assets/assets";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

interface BarData {
  value: number;
  label: string;
  color?: string;
}

interface BarChartProps {
  data: BarData[];
  heightFactor?: number;
}

export default function BarChart({ data, heightFactor = 1 }: BarChartProps) {
  if (data.length < 2) return null;

  const startValue = data[0].value;
  const endValue = data[data.length - 1].value;
  const percentage = ((endValue - startValue) / startValue) * 100;

  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        data: data.map((d) => d.value),
        backgroundColor: data.map((d) => d.color || "#17447a"),
        borderRadius: 0,
        barThickness: 60,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value: number) => `${value.toLocaleString("en-US")} MW`,
        font: {
          weight: "bold",
          family: "Montserrat",
          size: 14,
        },
        color: "#17447a",
      },
      title: {
        display: false,
        font: {
          size: 18,
          weight: "bold",
          family: "Montserrat",
        },
        color: "#17447a",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
            weight: "bold",
            family: "Montserrat",
          },
          color: "#17447a",
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="w-64 h-64">
        <Bar data={chartData} options={options} />
      </div>

      <div className="flex flex-col items-center mt-6 md:mt-0">
        <span className="flex items-center text-4xl font-extrabold text-primary">
          {percentage.toFixed(1)}%
          <Image
            src={assets.ArrowUpWideIcon}
            alt="Arrow Up"
            width={30}
            height={30}
            className="ml-2"
          />
        </span>
        <span className="text-sm font-bold text-primary">DE AUMENTO</span>
      </div>
    </div>
  );
}
