"use client";

import React from "react";
import DobleBarChart from "../DobleBarChart";
import CircularBar from "../CircularBar";

export default function RecordInvestments() {
  const data = [30, 25, 20, 25];
  const labels = ["Energía", "Agua", "Transporte", "Industria"];
  const colors = ["#00b4fc", "#005bc5", "#012677", "#001449"];

  const chartData = [
    {
      value1: 150,
      value2: 200,
      centerText: "de la inversión extranjera directa",
    },
  ];

  return (
    <section className="bg-primary py-10 sm:py-14">
      <div className="max-w-6xl min-h-100 mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white px-3 py-1 uppercase tracking-wide mb-3">
          INVERSIONES RÉCORD
        </h1>

        <span className="font-medium text-white text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl uppercase text-balance">
          Sector energético encabeza captación de inversión extranjera directa
          (IED)
        </span>

        <p className="text-white font-light sm:text-base md:text-sm mt-3">
          (Datos del Banco Central enero - septiembre 2024)
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <div className="flex-1">
          <DobleBarChart data={chartData} />
          <div className="flex justify-center">
            <p className="text-light text-sm font-light mt-2">
              Evolución comparativa de IED 2019 - 2024
            </p>
          </div>
        </div>

        <div className="hidden lg:block w-0.5 h-50 bg-red"></div>

        <div className="flex-1">
          <CircularBar
            data={data}
            labels={labels}
            colors={colors}
            title="Participación por sector"
          />
          <div className="flex justify-center">
            <p className="text-light text-sm font-light mt-2">
              Participación en la IED por sector 2019 - 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
