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
    if (!containerRef.current || data.length < 2) return;

    animateBarsOnce({
      data,
      barsRef,
      numbersRef,
      heightFactor,
      trigger: containerRef.current,
    });

    // Tomar el primer y último valor para calcular el % de aumento
    const startValue = data[0].value;
    const endValue = data[data.length - 1].value;

    animatePercentageOnce(percentRef.current, startValue, endValue, containerRef.current);
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
      className="relative flex flex-col-reverse md:flex-row items-center justify-center md:space-x-10 h-auto md:h-64"
    >
      <div className="flex gap-5 justify-center md:justify-start">
        {data.map((item, i) => (
          <div
            key={item.label}
            className="relative flex flex-col items-center justify-end h-48"
          >
            <span
              ref={(el) => setNumberRef(el, i)}
              className="mb-1 text-primary text-sm md:text-xl font-bold whitespace-nowrap"
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
      </div>

      <div className="flex flex-col items-center mt-6 ml-6 md:mt-0 md:ml-0 mb-5">
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
  );
}
