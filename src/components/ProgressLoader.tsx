"use client";

import React from "react";

interface ProgressLoaderProps {
  values: {
    year: number;
    percent: number;
    color?: string;
  }[];
}

export default function ProgressLoader({ values }: ProgressLoaderProps) {
  return (
    <section className="w-full py-12">
      <div className="relative max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">
        <div className="absolute z-0 bg-gray-400/70 rounded">
          <div className="hidden md:block top-16 left-0 right-0 h-0.5"></div>
          <div className="block md:hidden left-1/2 top-0 bottom-0 w-0.5"></div>
        </div>

        {values.map((item, index) => (
          <div
            key={item.year}
            className="flex flex-col items-center justify-center relative z-10 mb-8 md:mb-0"
          >
            {/* porcentaje arriba */}
            <span className="mb-3 text-white font-black text-4xl">
              {item.percent}%
            </span>

            {/* círculo */}
            <div
              className="w-7 h-7 rounded-full shadow-md"
              style={{ backgroundColor: item.color || "#005bc5" }}
            ></div>

            {/* año */}
            <span className="mt-3 text-gray-300 font-medium text-2xl">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
