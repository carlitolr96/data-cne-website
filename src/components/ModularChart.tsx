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
    const { ctx, data, scales } = chart;
    ctx.save();
    
    data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      
      meta.data.forEach((bar, index) => {
        const value = dataset.data[index] as number;
        
        ctx.fillStyle = "#000000";
        ctx.font = "bold 16px Montserrat";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        
        ctx.fillText(
          value.toString(),
          bar.x,
          bar.y - 10
        );
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
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.color || "#000000"),
        borderWidth: 0,
        borderRadius: 0,
        barThickness: 60,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',
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
        afterFit: function(axis) {
          axis.width = 50;
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    layout: {
      padding: {
        top: 30,
        right: 20,
        bottom: 0,
        left: 20
      }
    }
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