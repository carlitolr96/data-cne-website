import {
  Chart as ChartJS,
  ChartDataset,
  ChartOptions,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Chart,
  ActiveElement,
} from "chart.js";
import { useRef, useEffect } from "react";

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
  showValues?: boolean;
  animate?: boolean;
  barPercentage?: number;
  categoryPercentage?: number;
}

export default function StackedLineBar({
  data,
  className = "",
  showValues = false,
  animate = true,
  barPercentage = 0.9,
  categoryPercentage = 0.8,
}: ModularChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartInstance.current) chartInstance.current.destroy();

    const chartData = {
      labels: data.map((item) => item.label),
      datasets: [
        {
          data: data.map((item) => item.value),
          backgroundColor: data.map((item) => item.color || "#6366f1"),
          borderColor: data.map((item) => item.color || "#6366f1"),
          borderWidth: 0,
          borderRadius: 0,
          barPercentage,
          categoryPercentage,
        },
      ],
    };

    const options: ChartOptions<"bar"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          mode: "index",
          intersect: false,
          backgroundColor: "rgba(17, 24, 39, 0.95)",
          titleColor: "#f3f4f6",
          bodyColor: "#f3f4f6",
          borderColor: "rgba(255,255,255,0.1)",
          borderWidth: 1,
          padding: 12,
          callbacks: {
            title: (tooltipItems) => tooltipItems[0].label,
            label: (context) => `Valor: ${context.parsed.y}`,
          },
        },
        datalabels: { display: false },
      },
      scales: {
        x: {
          type: "category",
          grid: { display: false },
          ticks: {
            color: "#ffffff",
            font: { size: 11, weight: 900 },
            maxRotation: 45,
            minRotation: 0,
          },
        },
        y: {
          display: false,
          grid: { display: true },
          beginAtZero: true,
          suggestedMax: Math.max(...data.map((item) => item.value)) * 1.1,
        },
      },
      animation: {
        duration: animate ? 1500 : 0,
        easing: "easeOutQuart",
      },
      layout: {
        padding: { top: showValues ? 30 : 20, bottom: 15, left: 10, right: 10 },
      },
    };

    const valuePlugin = {
      id: "valuePlugin",
      afterDatasetsDraw: (chart: Chart<"bar">) => {
        if (!showValues) return;
        const ctx = chart.ctx;
        ctx.save();

        chart.data.datasets.forEach(
          (
            dataset: ChartDataset<"bar", (number | [number, number] | null)[]>,
            i: number
          ) => {
            const meta = chart.getDatasetMeta(i);

            meta.data.forEach((bar: ActiveElement | any, index: number) => {
              const value = dataset.data[index];

              // Convertir tupla [number, number] a texto legible
              const displayValue = Array.isArray(value)
                ? value.join(" - ")
                : value;

              const x = bar.x;
              const y = bar.y - 10;

              ctx.font = '900 14px "Montserrat", sans-serif';
              ctx.textAlign = "center";
              ctx.textBaseline = "bottom";
              ctx.fillStyle = "#ffffff";
              ctx.fillText(displayValue?.toString() ?? "", x, y);
            });
          }
        );

        ctx.restore();
      },
    };

    chartInstance.current = new ChartJS(canvasRef.current, {
      type: "bar",
      data: chartData,
      options,
      plugins: [valuePlugin],
    });

    return () => chartInstance.current?.destroy();
  }, [data, animate, barPercentage, categoryPercentage, showValues]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-64 md:h-72 lg:h-80 ${className}`}
    />
  );
}
