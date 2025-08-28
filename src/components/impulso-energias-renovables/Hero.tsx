"use client";

import React from "react";
import NavBar from "../NavBar";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-100 w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(19, 52, 109, 1) 15%, rgba(37, 102, 211, 0.1) 110%),
              url('./BannerEstadisticas.jpg')
            `,
            backgroundBlendMode: "multiply",
          }}
        />
      </div>
      <div className="z-30 flex items-center justify-center min-h-screen px-4">
        <NavBar />
        <div className="relative max-w-6xl text-center text-white">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-light leading-tight">
            Las <span className="font-bold">energías renovables </span> son el
            motor de un{" "}
            <span className="font-bold">
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
