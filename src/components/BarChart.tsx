"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { animateBarsOnce, animatePercentageOnce } from "@/utils/animations";

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
  const percentRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animateBarsOnce({
      data,
      barsRef,
      numbersRef,
      heightFactor,
      trigger: containerRef.current,
    });
    animatePercentageOnce(percentRef.current, 13.9, containerRef.current);
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
      className="relative flex items-end justify-center space-x-10 h-64"
    >
      <div className="flex gap-5">
        {data.map((item, i) => (
          <div
            key={item.label}
            className="relative flex flex-col items-center justify-end h-48"
          >
            <span
              ref={(el) => setNumberRef(el, i)}
              className="mb-1 text-primary text-xl font-medium"
            >
              0 MW
            </span>

            <div
              ref={(el) => setBarRef(el, i)}
              className="w-16 bg-primary relative z-0"
              style={{
                backgroundColor: item.color || "#000000",
                height: "0px",
                transformOrigin: "bottom",
              }}
            />

            <span className="mt-2 text-primary text-lg font-bold">
              {item.label}
            </span>
          </div>
        ))}

        <div className="flex flex-col md:flex-row items-center justify-center ml-6">
          <div className="flex flex-col items-center">
            <span className="flex items-center text-4xl font-extrabold text-primary">
              <span ref={percentRef}>0%</span>
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
    </div>
  );
}
