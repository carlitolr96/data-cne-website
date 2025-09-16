"use client";

import { useState } from "react";
import ModularChart from "@/components/ModularChart";
import Boton from "@/components/Boton";

export default function EmitionsSession() {
  const [chartData1] = useState([
    { value: 300, label: "LPO", color: "#0B4B93" },
    { value: 138, label: "Permisos", color: "#00E019" },
    { value: 125, label: "LIO", color: "#FFD807" },
    { value: 87, label: "IR", color: "#089EE8" },
  ]);

  const [chartData2] = useState([
    { value: 90, label: "permisos de importación ", color: "#B5A031" },
    { value: 28, label: "permisos de exportación ", color: "#346C88" },
  ]);

  return (
    <section className="bg-light min-h-screen flex flex-col justify-center py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center items-center text-center mb-10">
        <h1 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary px-3 py-1 uppercase tracking-wide mb-3">
          ¿Cuántas autorizaciones se han emitido? 
        </h1>

        <span className="font-medium text-primary text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-4xl uppercase text-balance">
          Al 30 de junio de 2025: 
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-0 md:px-6 mt-10">
        <div className="flex-1 flex flex-col items-center">
          <ModularChart data={chartData1} />
        </div>

        <div className="hidden lg:block w-0.5 h-80 bg-[#FF9000] mx-6"></div>

        <div className="flex-1 flex flex-col items-center">
          <div className="border-1 rounded-md border-primary">
            <ModularChart className="uppercase" data={chartData2} />
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center text-center">
        <p className="font-bold text-primary text-lg">Para más información</p>
        <Boton
          href="/"
          icon="TapIcon"
          iconPosition="right"
          className="uppercase mt-5 w-auto px-6 py-3"
        >
          Ir al Tablero
        </Boton>
      </div>
    </section>
  );
}
