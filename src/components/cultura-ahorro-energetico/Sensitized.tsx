import React from "react";

export default function Sensitized() {
  return (
    <section className="relative w-full flex items-center justify-end overflow-hidden h-[600px] sm:h-[550px] min-h-[450px] bg-[url('/BannerEscuela.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-l from-primary z-0" />
      <div className="absolute inset-0 bg-primary opacity-30 z-10" />

      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 flex justify-end">
          <div className="max-w-2xl text-right text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Personas sensibilizadas en el uso racional de la energía
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
