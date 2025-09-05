"use client";

import { useRef, useEffect } from "react";
import { animateDoubleCharts } from "../utils/animations";

interface DoubleBarData {
  value1: number;
  value2: number;
  color1?: string;
  color2?: string;
  centerText: string;
}

interface DobleBarChartProps {
  data: DoubleBarData[];
  heightFactor?: number;
}

export default function DobleBarChart({
  data,
  heightFactor = 1.5,
}: DobleBarChartProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bars1Ref = useRef<HTMLDivElement[]>([]);
  const bars2Ref = useRef<HTMLDivElement[]>([]);
  const numbers1Ref = useRef<HTMLSpanElement[]>([]);
  const numbers2Ref = useRef<HTMLSpanElement[]>([]);
  const centerNumberRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    bars1Ref.current = new Array(data.length);
    bars2Ref.current = new Array(data.length);
    numbers1Ref.current = new Array(data.length);
    numbers2Ref.current = new Array(data.length);
    centerNumberRef.current = new Array(data.length);
  }, [data]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateDoubleCharts({
              data,
              bars1Ref,
              bars2Ref,
              numbers1Ref,
              numbers2Ref,
              centerNumberRef,
              heightFactor,
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [data, heightFactor]);

  return (
    <div
      ref={sectionRef}
      className="flex items-end justify-center gap-16 relative h-72"
    >
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-light z-20"></div>

      {data.map((item, i) => (
        <div key={i} className="flex flex-col items-center text-center z-10">
          <div className="flex items-end justify-center gap-6 relative">
            {/* Barra izquierda */}
            <div className="flex flex-col items-center justify-end">
              <span
                ref={(el) => {
                  if (el) numbers1Ref.current[i] = el;
                }}
                className="mb-1 text-white text-base font-medium"
              >
                0 MW
              </span>
              <div
                ref={(el) => {
                  if (el) bars1Ref.current[i] = el;
                }}
                className="w-16"
                style={{
                  height: "0px",
                  backgroundColor: item.color1 || "red",
                  transformOrigin: "bottom",
                }}
              />
            </div>

            {/* Número central */}
            <div className="flex flex-col items-center justify-center px-4 text-white text-center">
              <span
                ref={(el) => {
                  if (el) centerNumberRef.current[i] = el;
                }}
                className="text-3xl font-extrabold"
              >
                0%
              </span>
              <span className="text-sm font-medium w-40">
                {item.centerText}
              </span>
            </div>

            {/* Barra derecha */}
            <div className="flex flex-col items-center justify-end">
              <span
                ref={(el) => {
                  if (el) numbers2Ref.current[i] = el;
                }}
                className="mb-1 text-white text-base font-medium"
              >
                0 MW
              </span>
              <div
                ref={(el) => {
                  if (el) bars2Ref.current[i] = el;
                }}
                className="w-16"
                style={{
                  height: "0px",
                  backgroundColor: item.color2 || "white",
                  transformOrigin: "bottom",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
