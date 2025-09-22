"use client";

import React, { useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import { textReveal } from "@/utils/animations";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    textReveal(titleRef.current);
  }, []);

  return (
    <section className="relative w-full min-h-100 overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(19, 52, 109, 1) 15%, rgba(37, 102, 211, 0.1) 110%),
              url('./BannerEstadisticas.jpg')
            `,
            backgroundBlendMode: "multiply",
          }}
        />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <NavBar />
        <div className="max-w-6xl text-center text-white">
          <h1
            ref={titleRef}
            className="text-2xl md:text-3xl lg:text-5xl font-light leading-tight"
          >
            Las <span className="font-black">energías renovables</span> son el
            motor de un{" "}
            <span className="font-black">
              futuro sostenible, impulsando desarrollo, innovación
            </span>{" "}
            y bienestar para todos.
          </h1>

          <div className="flex justify-center mt-4">
            <div className="w-70 h-1 bg-red-600 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
