"use client";

import React, { useEffect, useRef } from "react";
import { animateLoader } from "@/utils/animations";

const Loader: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percent2019Ref = useRef<HTMLDivElement>(null);
  const percent2025Ref = useRef<HTMLDivElement>(null);
  const percent2030Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateLoader(
      sectionRef.current,
      progressRef.current,
      percent2019Ref.current,
      percent2025Ref.current,
      percent2030Ref.current
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center overflow-hidden h-[600px] sm:h-[550px] min-h-[450px] bg-[url('/ImageLoader.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-primary" />
      <div className="absolute inset-0 bg-primary opacity-30 " />

      <div className="relative z-0 text-center text-white max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 px-10">
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold mb-10 leading-tight">
            Cerca del{" "}
            <span className="bg-red px-1 py-1 font-black">
              25% de la energía que consumes en tu día a día
            </span>{" "}
            proviene de fuentes renovables.
          </h1>
        </div>

        <div className="flex flex-row items-center justify-center w-full overflow-x-auto gap-4 px-2 sm:px-0 py-10">
          {/* 2019 */}
          <div className="flex flex-col items-center text-center min-w-[60px]">
            <div
              ref={percent2019Ref}
              className="text-2xl sm:text-3xl font-bold mb-1"
            >
              0%
            </div>
            <div
              className="w-5 h-5 rounded-full border-2 border-white mb-2"
              style={{ backgroundColor: "#FFBF00" }}
            />
            <div className="text-sm sm:text-base font-semibold">2019</div>
          </div>

          {/* Barra de progreso */}
          <div className="flex-1 flex items-center min-w-[100px]">
            <div className="h-2 bg-white/20 rounded-full w-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #FFBF00 0%, #7DB925 70%, #19E53E 100%)",
                }}
              />
            </div>
          </div>

          {/* 2025 */}
          <div className="flex flex-col items-center text-center min-w-[60px]">
            <div
              ref={percent2025Ref}
              className="text-2xl sm:text-3xl font-bold mb-1"
            >
              0%
            </div>
            <div
              className="w-5 h-5 rounded-full border-2 border-white mb-2"
              style={{ backgroundColor: "#7DB925" }}
            />
            <div className="text-sm sm:text-base font-semibold">2025</div>
          </div>

          {/* Barra vacía */}
          <div className="flex-1 flex items-center min-w-[100px]">
            <div className="h-2 bg-white/20 rounded-full w-full" />
          </div>

          {/* 2030 */}
          <div className="flex flex-col items-center text-center min-w-[60px]">
            <div
              ref={percent2030Ref}
              className="text-2xl sm:text-3xl font-bold mb-1"
            >
              0%
            </div>
            <div
              className="w-5 h-5 rounded-full border-2 border-white mb-2"
              style={{ backgroundColor: "#19E53E" }}
            />
            <div className="text-sm sm:text-base font-semibold">2030</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
