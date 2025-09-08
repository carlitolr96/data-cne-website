"use client";

import { useRef, useEffect } from "react";
import { animateDoubleChartsTwo } from "../utils/animations";

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

  const bars1Ref = useRef<(HTMLDivElement | null)[]>(
    Array(data.length).fill(null)
  );
  const bars2Ref = useRef<(HTMLDivElement | null)[]>(
    Array(data.length).fill(null)
  );
  const numbers1Ref = useRef<(HTMLSpanElement | null)[]>(
    Array(data.length).fill(null)
  );
  const numbers2Ref = useRef<(HTMLSpanElement | null)[]>(
    Array(data.length).fill(null)
  );
  const centerNumberRef = useRef<(HTMLSpanElement | null)[]>(
    Array(data.length).fill(null)
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateDoubleChartsTwo({
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
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-light"></div>

      {data.map((item, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <div className="flex items-end justify-center relative">
            <div className="flex flex-col items-center justify-end">
              <span
                ref={(el) => {
                  if (el) numbers1Ref.current[i] = el;
                }}
                className="mb-1 text-primary text-xl font-extrabold"
              >
                US$0
              </span>
              <div
                ref={(el) => {
                  if (el) bars1Ref.current[i] = el;
                }}
                className="w-16"
                style={{
                  height: "0px",
                  backgroundColor: item.color1 || "#FF0000",
                  transformOrigin: "bottom",
                }}
              />
            </div>

            <div className="flex flex-col items-center justify-center px-4 text-primary text-center font-montserrat">
              <span
                ref={(el) => {
                  if (el) centerNumberRef.current[i] = el;
                }}
                className="text-3xl font-extrabold"
              >
                0%
              </span>
              <span className="text-sm font-medium w-40 mb-10">
                {item.centerText}
              </span>
            </div>

            <div className="flex flex-col items-center justify-end">
              <span
                ref={(el) => {
                  if (el) numbers2Ref.current[i] = el;
                }}
                className="mb-1 text-white bg-green py-2 px-3 text-2xl font-extrabold whitespace-nowrap"
              >
                US$0
              </span>
              <span className="text-sm text-primary whitespace-nowrap font-medium">Millones invertidos</span>
              <div
                ref={(el) => {
                  if (el) bars2Ref.current[i] = el;
                }}
                className="w-16"
                style={{
                  height: "0px",
                  backgroundColor: item.color2 || "#17447A",
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
