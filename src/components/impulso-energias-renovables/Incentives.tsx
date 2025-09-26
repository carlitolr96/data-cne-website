"use client";

import React, { useRef, useEffect, useState } from "react";
import Boton from "@/components/Boton";
import { animateAmount } from "@/utils/animations";
import ModularChart from "@/components/ModularChart";

export default function Incentives() {
  const amountRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    animateAmount(amountRef.current, 8000000);
  }, []);

  const [chartData] = useState([
    { value: 631, label: "2023", color: "#1B4C84" },
    { value: 937, label: "2024", color: "#1B4C84" },
    { value: 1023, label: "2025", color: "#1B4C84" },
  ]);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 min-h-[70vh] justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:space-x-4 uppercase">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black bg-green text-white px-3 py-1">
            Incentivos
          </h1>
          <span className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium mt-2 md:mt-0">
            a las renovables
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-0 md:gap-24 w-full mt-8">
          <div className="w-full sm:w-[500px] h-[300px]">
            <ModularChart data={chartData} />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left lg:w-1/3">
            <p className="text-primary text-lg sm:text-lg md:text-xl font-medium leading-relaxed">
              Para la inversión en sistemas y equipos de energía renovable
              gestionadas, se ha otorgado un monto acumulado en exenciones de impuestos superior a
            </p>
            <span
              ref={amountRef}
              className="bg-green text-white px-4 py-2 font-bold text-lg sm:text-2xl md:text-3xl"
            >
              RD$0.00
            </span>
            <p className="text-primary text-lg sm:text-lg md:text-xl font-medium leading-relaxed">
              , desde el inicio del programa hasta la fecha.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-around gap-4 mt-8">
          <Boton href="/" icon="TapIcon" iconPosition="right">
            Solicitar Aquí
          </Boton>
          <Boton href="/">Ver Más</Boton>
        </div>
      </div>
    </section>
  );
}
