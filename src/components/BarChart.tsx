// En BarChart.tsx
"use client";

import { useRef, useEffect, useCallback } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { animateChartsTwo, resetCharts } from "../utils/animations";

interface BarData {
  value: number;
  label: string;
  color?: string;
}

interface BarChartProps {
  data: BarData[];
  heightFactor?: number;
}

export default function BarChart({ data, heightFactor = 1.5 }: BarChartProps) {
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reinicializar arrays cuando los datos cambien
  useEffect(() => {
    barsRef.current = [];
    numbersRef.current = [];
  }, [data]);

  // Funciones para establecer referencias
  const setBarRef = useCallback((el: HTMLDivElement | null, index: number) => {
    barsRef.current[index] = el;
  }, []);

  const setNumberRef = useCallback((el: HTMLSpanElement | null, index: number) => {
    numbersRef.current[index] = el;
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Pasar las referencias completas
            resetCharts({ barsRef, numbersRef });
            animateChartsTwo({ data, barsRef, numbersRef, heightFactor });
          } else {
            resetCharts({ barsRef, numbersRef });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [data, heightFactor]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-end justify-center space-x-10 h-64"
    >
      {data.map((item, i) => (
        <div key={item.label} className="relative flex flex-col items-center">
          <span
            ref={(el) => setNumberRef(el, i)}
            className="mb-1 text-primary text-xl font-medium"
          >
            0 MW
          </span>
          <div
            ref={(el) => setBarRef(el, i)}
            className="w-16 bg-primary relative z-10"
            style={{
              backgroundColor: item.color || "#000000",
              height: "0px",
            }}
          ></div>
          <span className="mt-2 text-primary text-lg font-bold">
            {item.label}
          </span>
        </div>
      ))}

      <div className="flex flex-col md:flex-row items-center justify-center ml-6">
        <div className="flex flex-col items-center">
          <span className="flex items-center text-4xl font-extrabold text-primary">
            13.9%
            <Image
              src={assets.ArrowUpWideIcon}
              alt="CNE Arrow Up Wide"
              width={30}
              height={30}
              className="ml-2"
            />
          </span>
          <span className="text-sm font-bold text-primary">DE AUMENTO</span>
        </div>
      </div>
    </div>
  );
}