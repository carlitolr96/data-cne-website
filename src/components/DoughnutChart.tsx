"use client";

import React, { useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  Chart,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface DoughnutChartProps {
  data: { label: string; value: number; color: string }[];
  title?: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, title }) => {
  const chartRef = useRef<Chart<"doughnut">>(null);
  const [hiddenSegments, setHiddenSegments] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        data: data.map((d, i) => hiddenSegments[i] ? 0 : d.value),
        backgroundColor: data.map((d) => d.color),
        borderWidth: 2,
        borderColor: "#fff",
        cutout: "65%", 
      },
    ],
  };

  const toggleSegment = (index: number) => {
    const newHiddenSegments = [...hiddenSegments];
    newHiddenSegments[index] = !newHiddenSegments[index];
    setHiddenSegments(newHiddenSegments);
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { 
        enabled: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = data[context.dataIndex].value;
            // Solo mostrar el valor, sin porcentaje
            return `${label}: ${value}`;
          }
        }
      },
      title: {
        display: !!title,
        text: title,
        color: "#144C84",
        font: { size: 16, weight: "bold", family: "Montserrat" },
      },
      datalabels: {
        display: false, // ← Esto desactiva completamente los datalabels
      },
    },
  };

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-center items-start gap-8 p-4">
      <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px] mx-auto">
        <Doughnut 
          ref={chartRef}
          data={chartData} 
          options={options}
        />
      </div>

      <div className="flex flex-col max-w-2xl mx-auto">
        <div>
          {data.slice(0, 5).map((item, index) => {
            const percentage = ((item.value / total) * 100).toFixed(1) + "%";
            const isHidden = hiddenSegments[index];
            
            return (
              <div 
                key={index} 
                className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-all ${
                  isHidden ? 'opacity-40' : 'hover:bg-gray-100'
                }`}
                onClick={() => toggleSegment(index)}
              >
                <div 
                  className="w-4 h-4 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex justify-between items-center flex-1 min-w-0">
                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>
                  {/* <span className="text-sm font-bold text-gray-900 ml-4">
                    {percentage}
                  </span> */}
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {data.slice(5).map((item, index) => {
            const actualIndex = index + 5;
            const percentage = ((item.value / total) * 100).toFixed(1) + "%";
            const isHidden = hiddenSegments[actualIndex];
            
            return (
              <div 
                key={actualIndex} 
                className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-all ${
                  isHidden ? 'opacity-40' : 'hover:bg-gray-100'
                }`}
                onClick={() => toggleSegment(actualIndex)}
              >
                <div 
                  className="w-4 h-4 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex justify-between items-center flex-1 min-w-0">
                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>
                  {/* <span className="text-sm font-bold text-gray-900 ml-4">
                    {percentage}
                  </span> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;