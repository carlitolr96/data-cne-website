"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

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

  const animateCharts = useCallback(() => {
    data.forEach((item, i) => {
      const bar1 = bars1Ref.current[i];
      const bar2 = bars2Ref.current[i];
      const number1 = numbers1Ref.current[i];
      const number2 = numbers2Ref.current[i];
      const centerNumber = centerNumberRef.current[i];

      const total = item.value1 + item.value2;
      const targetPercent = total > 0 ? (item.value1 / total) * 100 : 0;

      if (bar1 && number1) {
        gsap.fromTo(
          bar1,
          { height: 0 },
          {
            height: `${item.value1 * heightFactor}px`,
            duration: 1,
            ease: "power3.out",
          }
        );
        const obj1 = { val: 0 };
        gsap.to(obj1, {
          val: item.value1,
          duration: 1,
          ease: "power3.out",
          onUpdate() {
            number1.textContent = `${Math.floor(obj1.val)} MW`;
          },
        });
      }

      if (bar2 && number2) {
        gsap.fromTo(
          bar2,
          { height: 0 },
          {
            height: `${item.value2 * heightFactor}px`,
            duration: 1,
            ease: "power3.out",
          }
        );
        const obj2 = { val: 0 };
        gsap.to(obj2, {
          val: item.value2,
          duration: 1,
          ease: "power3.out",
          onUpdate() {
            number2.textContent = `${Math.floor(obj2.val)} MW`;
          },
        });
      }

      if (centerNumber) {
        const objCenter = { val: 0 };
        gsap.to(objCenter, {
          val: targetPercent,
          duration: 1,
          ease: "power3.out",
          onUpdate() {
            centerNumber.textContent = `${objCenter.val.toFixed(1)}%`;
          },
        });
      }
    });
  }, [data, heightFactor]);

  useEffect(() => {
    if (
      bars1Ref.current.length === data.length &&
      bars2Ref.current.length === data.length &&
      numbers1Ref.current.length === data.length &&
      numbers2Ref.current.length === data.length &&
      centerNumberRef.current.length === data.length
    ) {
      animateCharts();
    }
  }, [data, animateCharts]);

  return (
    <div className="flex items-end justify-center space-x-16 h-72 gap-8 relative">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-light z-20"></div>

      {data.map((item, i) => {
        // const [, ...textParts] = item.centerText.split("\n");
        // const remainingText = textParts.join("\n");

        return (
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
                  style={{
                    height: "20px",
                  }}
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
                  de la inversión extranjera directa
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
                  style={{
                    height: "20px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
