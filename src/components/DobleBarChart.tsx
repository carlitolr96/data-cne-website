// En DobleBarChart.tsx
"use client";

import { useRef, useEffect, useCallback } from "react";
import { resetDoubleCharts, animateDoubleCharts } from "../utils/animations";

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

export default function DobleBarChart({ data, heightFactor = 1.5 }: DobleBarChartProps) {
  // Inicializar las referencias como arrays vacíos
  const bars1Ref = useRef<(HTMLDivElement | null)[]>([]);
  const bars2Ref = useRef<(HTMLDivElement | null)[]>([]);
  const numbers1Ref = useRef<(HTMLSpanElement | null)[]>([]);
  const numbers2Ref = useRef<(HTMLSpanElement | null)[]>([]);
  const centerNumberRef = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reinicializar arrays cuando los datos cambien
  useEffect(() => {
    bars1Ref.current = [];
    bars2Ref.current = [];
    numbers1Ref.current = [];
    numbers2Ref.current = [];
    centerNumberRef.current = [];
  }, [data]);

  // Funciones para establecer referencias
  const setBar1Ref = useCallback((el: HTMLDivElement | null, index: number) => {
    bars1Ref.current[index] = el;
  }, []);

  const setBar2Ref = useCallback((el: HTMLDivElement | null, index: number) => {
    bars2Ref.current[index] = el;
  }, []);

  const setNumber1Ref = useCallback((el: HTMLSpanElement | null, index: number) => {
    numbers1Ref.current[index] = el;
  }, []);

  const setNumber2Ref = useCallback((el: HTMLSpanElement | null, index: number) => {
    numbers2Ref.current[index] = el;
  }, []);

  const setCenterNumberRef = useCallback((el: HTMLSpanElement | null, index: number) => {
    centerNumberRef.current[index] = el;
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Pasar las referencias completas, no solo .current
            resetDoubleCharts({
              bars1Ref,
              bars2Ref,
              numbers1Ref,
              numbers2Ref,
              centerNumberRef
            });
            animateDoubleCharts({
              data,
              bars1Ref,
              bars2Ref,
              numbers1Ref,
              numbers2Ref,
              centerNumberRef,
              heightFactor
            });
          } else {
            resetDoubleCharts({
              bars1Ref,
              bars2Ref,
              numbers1Ref,
              numbers2Ref,
              centerNumberRef
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [data, heightFactor]);

  return (
    <div ref={containerRef} className="flex flex-col space-y-8">
      {data.map((item, i) => (
        <div key={i} className="flex items-end justify-center space-x-4 h-48">
          {/* Barra 1 */}
          <div className="flex flex-col items-center">
            <span
              ref={(el) => setNumber1Ref(el, i)}
              className="mb-1 text-sm font-medium"
            >
              0 MW
            </span>
            <div
              ref={(el) => setBar1Ref(el, i)}
              className="w-12 bg-blue-500"
              style={{ height: "0px", backgroundColor: item.color1 }}
            ></div>
          </div>

          {/* Texto central */}
          <div className="flex flex-col items-center mx-4">
            <span
              ref={(el) => setCenterNumberRef(el, i)}
              className="text-lg font-bold"
            >
              0%
            </span>
            <span className="text-sm mt-1">{item.centerText}</span>
          </div>

          {/* Barra 2 */}
          <div className="flex flex-col items-center">
            <span
              ref={(el) => setNumber2Ref(el, i)}
              className="mb-1 text-sm font-medium"
            >
              0 MW
            </span>
            <div
              ref={(el) => setBar2Ref(el, i)}
              className="w-12 bg-red-500"
              style={{ height: "0px", backgroundColor: item.color2 }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}