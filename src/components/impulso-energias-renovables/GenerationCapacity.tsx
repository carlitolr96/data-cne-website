"use client";

import { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import BarChart from "@/components/BarChart";
import Boton from "@/components/Boton";

export default function GenerationCapacity() {
  const [chartData, setChartData] = useState([
    { value: 571.33, label: "2019", color: "#ff0000" },
    { value: 1403.13, label: "2024", color: "#17447a" },
  ]);

  const refreshData = () => {
    setChartData(
      chartData.map((item) => ({
        ...item,
        value: Math.floor(Math.random() * 1000) + 500,
      }))
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="min-w-90 text-3xl font-extrabold text-primary mb-4">
            EN LOS ÚLTIMOS AÑOS, LA REPÚBLICA DOMINICANA HA INCREMENTADO
            SIGNIFICATIVAMENTE SU{" "}
            <span className="bg-red text-white px-4">
              CAPACIDAD DE GENERACIÓN
            </span>{" "}
            A PARTIR DE FUENTES RENOVABLES.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-center">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Capacidad instalada
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <BarChart data={chartData} heightFactor={0.1} />
            <div className="flex flex-col items-center">
              <span className="flex grid-cols-10 text-4xl font-extrabold text-primary">
                13.9%
                <Image
                  src={assets.ArrowUpWideIcon}
                  alt="CNE Arrow Up Wide"
                  width={30}
                  height={30}
                  className="ml-2"
                />
              </span>
              <span className="text-sm font-bold text-primary">DE AUMENTO</span>
            </div>
          </div>

          <div className="flex flex-col items-end w-full max-w-sm">
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
