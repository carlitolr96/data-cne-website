import React from "react";

export default function RecordInvestments() {
  return (
    <section className="bg-primary py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white px-3 py-1 uppercase tracking-wide mb-3">
          INVERSIONES RÉCORD
        </h1>

        <span className="font-medium text-white text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl uppercase text-balance">
          Sector energético encabeza captación de inversión extranjera directa
          (IED)
        </span>

        <p className="text-white font-light text-sm sm:text-base md:text-lg">
          (Datos del Banco Central enero - septiembre 2024)
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <div className="flex-1">
          <h2 className="text-white text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight">
            35 PROYECTOS
          </h2>
        </div>

        <div className="hidden lg:block w-0.5 h-50 bg-red"></div>

        <div className="flex-1">
          <h2 className="text-white text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight">
            35 PROYECTOS
          </h2>
        </div>
      </div>
    </section>
  );
}
