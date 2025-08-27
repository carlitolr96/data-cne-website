"use client";

import { useRef, useEffect, useCallback } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
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
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    barsRef.current = [];
    numbersRef.current = [];
  }, [data]);

  const resetCharts = useCallback(() => {
    barsRef.current.forEach((bar, i) => {
      if (bar) bar.style.height = "0px";
      if (numbersRef.current[i]) numbersRef.current[i].textContent = "0 MW";
    });
  }, []);

  const animateCharts = useCallback(() => {
    data.forEach((item, i) => {
      const bar = barsRef.current[i];
      const number = numbersRef.current[i];

      if (bar && number) {
        const barHeight = item.value * heightFactor;

        gsap.fromTo(
          bar,
          { height: 0 },
          {
            height: `${barHeight}px`,
            duration: 1.2,
            ease: "power3.out",
          }
        );

        const obj = { val: 0 };
        gsap.to(obj, {
          val: item.value,
          duration: 1.2,
          ease: "power3.out",
          onUpdate() {
            number.textContent = `${Math.floor(obj.val)} MW`;
          },
        });
      }
    });
  }, [data, heightFactor]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resetCharts();
            animateCharts();
          } else {
            resetCharts();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [animateCharts, resetCharts]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-end justify-center space-x-10 h-64"
    >
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