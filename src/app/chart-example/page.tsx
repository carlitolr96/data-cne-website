"use client";

import { useRef, useEffect, useState } from "react";
import Boton from "@/components/Boton";
import gsap from "gsap";

export default function Charts() {
  const [data, setData] = useState<number[]>([]);
  useEffect(() => {
    setData([50, 100]);
  }, []);

  const barsRef = useRef<HTMLDivElement[]>([]);
  const numbersRef = useRef<HTMLSpanElement[]>([]);

  const animateCharts = (values: number[]) => {
    values.forEach((value, i) => {
      gsap.fromTo(
        barsRef.current[i],
        { height: 0 },
        { height: `${value}px`, duration: 1, ease: "power3.out" }
      );

      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 1,
        ease: "power3.out",
        onUpdate() {
          if (numbersRef.current[i]) {
            numbersRef.current[i].textContent = `${Math.floor(obj.val)} MW`;
          }
        },
      });
    });
  };

  useEffect(() => {
    animateCharts(data);
  }, [data]);

  const refresh = () => {
    setData(data.map(() => Math.floor(Math.random() * 150) + 50));
  };

  return (
    <div className="h-screen w-screen bg-slate-50 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md py-6 px-4 sm:px-16 mx-4 rounded-lg">
        <div className="flex items-end justify-center space-x-10 h-64">
          {data.map((value, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <span
                ref={(el) => {
                  if (el) numbersRef.current[i] = el;
                }}
                className="mb-1 text-primary text-xl font-medium"
              >
                {value} MW
              </span>

              <div
                ref={(el) => {
                  if (el) barsRef.current[i] = el;
                }}
                className="w-10 bg-primary"
                style={{ height: `${value}px` }}
              ></div>

              <span className="mt-2 text-primary text-lg font-bold">
                {i === 0 ? "2019" : "2024"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Boton href="/" onClick={refresh}>
        Actualizar
      </Boton>
    </div>
  );
}
