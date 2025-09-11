"use client";

import { useRef, useEffect, useCallback } from "react";

interface BarData {
  value: number;
  label: string;
  color?: string;
}

interface ModularChartProps {
  data: BarData[];
  heightFactor?: number;
  barWidth?: string;
  className?: string; 
}

export default function ModularChart({
  data,
  heightFactor = 0.8,
  barWidth = "w-17",
  className = "",
}: ModularChartProps) {
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    data.forEach((item, i) => {
      const bar = barsRef.current[i];
      const number = numbersRef.current[i];
      if (bar && number) {
        bar.style.height = `${item.value * heightFactor}px`;
        number.textContent = `${item.value}`;
      }
    });
  }, [data, heightFactor]);

  const setBarRef = useCallback((el: HTMLDivElement | null, i: number) => {
    barsRef.current[i] = el;
  }, []);

  const setNumberRef = useCallback((el: HTMLSpanElement | null, i: number) => {
    numbersRef.current[i] = el;
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col-reverse md:flex-row items-center justify-center md:space-x-10 h-auto md:h-64 ${className}`}
    >
      <div className="flex gap-5 justify-center md:justify-start">
        {data.map((item, i) => (
          <div
            key={item.label}
            className="relative flex flex-col items-center justify-end"
          >
            <span
              ref={(el) => setNumberRef(el, i)}
              className="mb-1 text-primary text-sm md:text-xl font-bold whitespace-nowrap"
            >
              0
            </span>

            <div
              ref={(el) => setBarRef(el, i)}
              className={`${barWidth} relative z-0`}
              style={{
                backgroundColor: item.color || "#000000",
                height: "0px",
                transformOrigin: "bottom",
                transition: "height 1s ease-in-out",
              }}
            />

            <span className="mt-2 text-primary text-lg font-bold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
