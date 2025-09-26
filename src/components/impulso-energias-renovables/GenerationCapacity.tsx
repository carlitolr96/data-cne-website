"use client";

import { useState } from "react";
import BarChart from "@/components/BarChart";
import Boton from "@/components/Boton";

export default function GenerationCapacity() {
  const [chartData] = useState([
    { value: 574.33, label: "2019", color: "#ff0000" },
    { value: 2033.79, label: "2025", color: "#17447a" },
  ]); 

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="min-w-90 text-2xl md:text-3xl font-black text-primary mb-4">
            EN LOS ÚLTIMOS AÑOS, LA REPÚBLICA DOMINICANA HA INCREMENTADO
            SIGNIFICATIVAMENTE SU{" "}
            <span className="bg-red text-white px-4">
              CAPACIDAD DE GENERACIÓN
            </span>{" "}
            A PARTIR DE FUENTES RENOVABLES.
          </h1>
        </div>

        <div className="flex flex-col items-center md:items-center">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Capacidad Instalada (Mw)
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <BarChart data={chartData} heightFactor={0.1} />
          </div>

          <div className="flex flex-col items-center md:items-end w-full max-w-sm">
            <p className="text-[18px] font-medium text-primary mb-2">
              Para más información
            </p>
            <Boton href="/" icon="TapIcon" iconPosition="right">
              Ir al tablero
            </Boton>
          </div>
        </div>
      </div>
    </section>
  );
}
