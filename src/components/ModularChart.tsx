"use client";

import { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarData {
  value: number;
  label: string;
  color?: string;
}

interface ModularChartProps {
  data: BarData[];
  className?: string;
}

const valuePlugin: Plugin<"bar"> = {
  id: "valuePlugin",
  afterDatasetsDraw(chart) {
    const { ctx, data } = chart;
    ctx.save();

    data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);

      meta.data.forEach((bar, index) => {
        const value = dataset.data[index] as number;

        // 👉 aplicar formato con comas (ejemplo: 12,345)
        const formattedValue = value.toLocaleString("en-US");

        ctx.fillStyle = "#000000";
        ctx.font = "bold 16px Montserrat";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        ctx.fillText(formattedValue, bar.x, bar.y - 15);
      });
    });

    ctx.restore();
  },
};

export default function ModularChart({
  data,
  className = "",
}: ModularChartProps) {
  const chartRef = useRef<ChartJS<"bar">>(null);

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color || "#000000"),
        borderWidth: 0,
        borderRadius: 0,
        maxBarThickness: 60,
        categoryPercentage: 0.6,
        barPercentage: 0.8,
        datalabels: {
          display: false,
        },
      },
    ],
  };
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "x",
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#1B4C84",
          font: { size: 14, weight: "bold", family: "Montserrat" },
        },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { display: false },
        border: { display: false },
        afterFit: function (axis) {
          axis.height = axis.height + 30;
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return `Valor: ${context.parsed.y}`;
          },
        },
      },
      datalabels: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 40,
        right: 20,
        bottom: 0,
        left: 20,
      },
    },
  };

  return (
    <div className={`relative w-full h-full min-h-[300px] ${className}`}>
      <Bar
        ref={chartRef}
        data={chartData}
        options={options}
        plugins={[valuePlugin]}
      />
    </div>
  );
}
