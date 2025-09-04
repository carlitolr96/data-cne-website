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
    bars1Ref.current = [];
    bars2Ref.current = [];
    numbers1Ref.current = [];
    numbers2Ref.current = [];
    centerNumberRef.current = [];
  }, [data]);

  useEffect(() => {
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
            obs.unobserve(entry.target); // deja de observar después de animar
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);

      // FORZAR comprobación inmediata en caso de que ya esté visible
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3) {
        animateDoubleCharts({
          data,
          bars1Ref,
          bars2Ref,
          numbers1Ref,
          numbers2Ref,
          centerNumberRef,
          heightFactor,
        });
        observer.unobserve(sectionRef.current);
      }
    }

    return () => observer.disconnect();
  }, [data, heightFactor]);

  return (
    <div
      ref={sectionRef}
      className="flex items-end justify-center space-x-16 h-72 gap-8 relative"
    >
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-light z-20"></div>

      {data.map((item, i) => (
        <div
          key={i}
          className="relative flex flex-col items-center text-center z-10"
        >
          <div className="flex items-end justify-center gap-6 relative">
            <div className="flex flex-col items-center">
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
                className="w-16 bg-red"
                style={{ height: "20px" }}
              ></div>
            </div>

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

            <div className="flex flex-col items-center">
              <span
                ref={(el) => {
                  if (el) numbers2Ref.current[i] = el;
                }}
                className="mb-1 text-white text-3xl font-extrabold bg-green px-2"
              >
                0 MW
              </span>
              <div
                ref={(el) => {
                  if (el) bars2Ref.current[i] = el;
                }}
                className="w-16 bg-white"
                style={{ height: "20px" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
