"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

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
  const barsRef = useRef<HTMLDivElement[]>([]);
  const numbersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    barsRef.current = [];
    numbersRef.current = [];
  }, [data]);

  const animateCharts = useCallback(() => {
    data.forEach((item, i) => {
      const bar = barsRef.current[i];
      const number = numbersRef.current[i];

      if (bar && number) {
        const barHeight = item.value * heightFactor;
        gsap.fromTo(
          bar,
          { height: 0 },
          { height: `${barHeight}px`, duration: 1, ease: "power3.out" }
        );

        const obj = { val: 0 };
        gsap.to(obj, {
          val: item.value,
          duration: 1,
          ease: "power3.out",
          onUpdate() {
            number.textContent = `${Math.floor(obj.val)} MW`;
          },
        });
      }
    });
  }, [data, heightFactor]);

  useEffect(() => {
    if (
      barsRef.current.length === data.length &&
      numbersRef.current.length === data.length
    ) {
      animateCharts();
    }
  }, [data, animateCharts]);

  return (
    <div className="flex items-end justify-center space-x-10 h-64">
      {data.map((item, i) => (
        <div key={item.label} className="relative flex flex-col items-center">
          <span
            ref={(el) => {
              if (el) numbersRef.current[i] = el;
            }}
            className="mb-1 text-primary text-xl font-medium"
          >
            0 MW
          </span>
          <div
            ref={(el) => {
              if (el) barsRef.current[i] = el;
            }}
            className="w-15 bg-primary"
            style={{
              height: "0px",
              backgroundColor: item.color || "#00000",
            }}
          ></div>
          <span className="mt-2 text-primary text-lg font-bold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
