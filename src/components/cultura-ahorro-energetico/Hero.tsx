"use client";

import React from "react";
import NavBar from "@/components/NavBar";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-100 overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
          linear-gradient(to bottom, rgba(19, 52, 109, 1) 15%, rgba(37, 102, 211, 0.1) 110%),
            url('./BannerEnergetico.jpg')
            `,
            backgroundBlendMode: "multiply",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <NavBar />
        <div className="max-w-6xl text-center text-white">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold">
            DIVISIÓN DE DIFUSIÓN EN EL USO RACIONAL DE LA ENERGÍA
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
