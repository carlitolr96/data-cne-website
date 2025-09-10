"use client";

import React, { useEffect, useRef } from "react";
import DobleBarChart from "@/components/DobleBarChart";
import CircularBar from "@/components/CircularBar";
import { animateDoubleChartsTwo } from "@/utils/animations";

export default function RecordInvestments() {
  const data = [30, 25, 20, 25, 80, 60];
  const labels = ["Energía", "Agua", "Transporte", "Industria"];
  const colors = ["#00b4fc", "#005bc5", "#012677", "#001449"];

  const chartData = [
    {
      value1: 100.1,
      value2: 180.5,
      centerText: "de la inversión extranjera directa",
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section className="bg-white min-h-screen flex flex-col justify-center py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center items-center text-center mb-10">
        <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary px-3 py-1 uppercase tracking-wide mb-3">
          INVERSIONES RÉCORD
        </h1>

        <span className="font-medium text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl uppercase text-balance">
          Sector energético encabeza captación de inversión extranjera directa
          (IED)
        </span>

        <p className="text-primary font-light sm:text-base md:text-sm mt-3">
          (Datos del Banco Central enero - septiembre 2024)
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 mt-10">
        <div className="flex-1 flex flex-col items-center">
          <DobleBarChart data={chartData} />
          <p className="text-primary text-sm font-light mt-2 text-center">
            Evolución comparativa de IED 2019 - 2024
          </p>
        </div>

        <div className="hidden lg:block w-px h-80 bg-red mx-6"></div>

        <div className="flex-1 flex flex-col items-center">
          <CircularBar
            data={data}
            labels={labels}
            colors={colors}
            title="Participación por sector"
          />
          <p className="text-primary text-sm font-light mt-2 text-center">
            Participación en la IED por sector 2019 - 2024
          </p>
        </div>
      </div>
    </section>
  );
}
