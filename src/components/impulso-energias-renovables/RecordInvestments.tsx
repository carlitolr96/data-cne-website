"use client";

import React from "react";
import DobleBarChart from "@/components/DobleBarChart";
import DoughnutChart from "@/components/DoughnutChart";

export default function RecordInvestments() {
const chartDoughnutData = [
  { label: "Bienes Raices", value: 13.8, color: "#164EA1" },
  { label: "Energía", value: 25.7, color: "#284098" },
  { label: "Comunicaciones", value: 1.8, color: "#15ABDF" },
  { label: "Comercio", value: 9.4, color: "#148780" },
  { label: "Minería", value: 14.5, color: "#65686C" },
  { label: "Financiero", value: 3.0, color: "#4C5561" },
  { label: "Zonas Francas", value: 6.9, color: "#109B49" },
  { label: "Turismo", value: 22.4, color: "#006C3E" },
  { label: "Otros", value: 2.4, color: "#999FA2" },
];

  const chartData = [
    {
      value1: 100.1,
      value2: 180.5,
      centerText: "de la inversión extranjera directa",
    },
  ];

  // const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section className="bg-white min-h-screen flex flex-col justify-center py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center items-center text-center mb-10">
        <h1 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary px-3 py-1 uppercase tracking-wide mb-3">
          INVERSIONES RÉCORD
        </h1>

        <span className="font-medium text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl uppercase text-balance">
          Sector energético encabeza captación de inversión extranjera directa
          (IED)
        </span>

        <p className="text-primary font-light sm:text-base md:text-sm mt-3">
          (Datos del Banco Central Enero-junio 2025)
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-0 md:px-6 mt-10">
        <div className="flex-1 flex flex-col items-center">
          <DobleBarChart data={chartData} />
          <p className="text-primary text-sm font-light mt-2 text-center">
            Evolución comparativa de IED 2019 - 2024
          </p>
        </div>

        <div className="hidden lg:block w-px h-80 bg-red mx-6"></div>

        <div className="flex-1">
          <div className="flex flex-col justify-center items-center">
            <DoughnutChart data={chartDoughnutData} />
          </div>
          <p className="text-primary text-sm font-light mt-4 text-center">
            Participación en la IED por sector 2019 - 2024
          </p>
        </div>
      </div>
    </section>
  );
}
