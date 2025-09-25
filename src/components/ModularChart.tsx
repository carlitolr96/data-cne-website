import { useRef, useEffect, useCallback, useState } from "react";
import { animateBarHeight, animateNumber } from "@/utils/animations";

interface BarData { value: number; label: string; color?: string }
interface ModularChartProps {
  data: BarData[];
  heightFactor?: number;
  barWidth?: string;
  className?: string;
}

export default function ModularChart({
  data,
  heightFactor = 0.05,
  barWidth = "w-17",
  className = "",
}: ModularChartProps) {
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    data.forEach((item, i) => {
      const bar = barsRef.current[i];
      const number = numbersRef.current[i];

      if (bar && number) {
        animateBarHeight(bar, item.value * heightFactor, 1000);
        animateNumber(number, item.value, 1000);
      }
    });
  }, [inView, data, heightFactor]);

  const setBarRef = useCallback((el: HTMLDivElement | null, i: number) => {
    barsRef.current[i] = el;
  }, []);

  const setNumberRef = useCallback((el: HTMLSpanElement | null, i: number) => {
    numbersRef.current[i] = el;
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col-reverse items-center h-auto md:h-64 ${className}`}
    >
      <div className="relative w-full flex justify-center items-end gap-5">
        {data.map((item, i) => (
          <div key={`${item.label}-${i}`} className="relative flex flex-col items-center justify-end">
            <span ref={(el) => setNumberRef(el, i)} className="mb-1 text-primary text-sm md:text-xl font-bold whitespace-nowrap">0</span>

            <div
              ref={(el) => setBarRef(el, i)}
              className={`${barWidth} relative`}
              style={{
                backgroundColor: item.color || "#000000",
                height: "0px",
                transformOrigin: "bottom",
              }}
            />

            <span className="mt-2 text-primary text-md font-medium text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
