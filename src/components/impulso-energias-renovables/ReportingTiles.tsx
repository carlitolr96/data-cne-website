"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { reportingtile } from "../../assets/assets";
import { animateNumberList } from "@/utils/animations";

export default function ReportingTiles() {
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const targets = reportingtile.map((tile) =>
      parseInt(tile.number.replace(/[^0-9]/g, ""), 10)
    );

    const elements = numbersRef.current.filter(
      (el): el is HTMLElement => el !== null
    );

    animateNumberList(elements, targets, (value) =>
      value.toLocaleString("en-US")
    );
  }, []);

  return (
    <section className="bg-primary py-3">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full">
          {reportingtile.map((tile, index) => (
            <div
              key={tile.id}
              className="flex flex-col md:flex-row items-center p-4 relative"
            >
              <div className="flex flex-shrink-0 items-center justify-center h-15 w-15 rounded">
                <Image
                  src={tile.icon}
                  alt={tile.description}
                  width={30}
                  height={30}
                />
              </div>

              <div className="flex-grow flex flex-col ml-0 md:ml-2 text-white text-center md:text-left">
                <span
                  ref={(el) => {
                    if (el) numbersRef.current[index] = el;
                  }}
                  className="text-xl font-bold mb-1"
                >
                  0
                </span>
                <span className="text-sm tracking-wider">
                  {tile.description}
                </span>

                {index < reportingtile.length - 1 && (
                  <div className="bg-red w-full h-[2px] mt-4 md:hidden"></div>
                )}
              </div>

              {index < reportingtile.length - 1 && (
                <div className="hidden md:block bg-red w-0.5 h-12 ml-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
