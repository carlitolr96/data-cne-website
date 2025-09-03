"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { animateConcessionCounters } from "@/utils/animations";

export default function Concession() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [concesionesDef, setConcesionesDef] = useState(0);
  const [concesionesProv, setConcesionesProv] = useState(0);
  const [capacidadMW, setCapacidadMW] = useState(0);

  const finalValues = {
    concesionesDef: 84,
    concesionesProv: 54,
    capacidadMW: 3107,
  };

  useEffect(() => {
    animateConcessionCounters(
      sectionRef.current,
      setConcesionesDef,
      setConcesionesProv,
      setCapacidadMW
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-light relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row relative">
        <div className="flex flex-col items-center justify-center bg-red text-white px-8 py-6 sm:rounded-r-full rounded-r-none z-0">
          <Image
            src={assets.HansIcon}
            alt="Concesión"
            width={40}
            height={40}
            className="mr-2 sm:mr-0"
          />
          <span className="font-bold text-base sm:text-lg uppercase mt-0 sm:mt-2">
            Concesión
          </span>
        </div>

        <div className="hidden sm:block absolute top-0 left-[calc(31.5rem)] w-[calc(95%-8rem)] h-full bg-gray z-0"></div>

        <div className="flex flex-wrap sm:flex-1 items-center justify-center sm:justify-around px-6 py-4 gap-6 relative z-0">
          <div className="flex items-center sm:items-center justify-center gap-3 min-w-[120px]">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-primary">
              {concesionesDef.toLocaleString()}
            </h1>
            <span className="text-sm sm:text-[17px] text-primary leading-tight">
              Concesiones
              <br />
              definitivas
            </span>
          </div>

          <div className="hidden sm:block w-0.5 h-16 bg-red-600"></div>

          <div className="flex items-center justify-center gap-3 min-w-[120px]">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-primary">
              {concesionesProv.toLocaleString()}
            </h1>
            <span className="text-sm sm:text-[17px] text-primary leading-tight">
              Concesiones <br />
              provisionales
            </span>
          </div>

          <div className="hidden sm:block w-0.5 h-16 bg-red-600"></div>

          <div className="flex flex-col items-center sm:items-end text-center sm:text-right min-w-[140px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-primary">
              {capacidadMW.toLocaleString()} MW
            </h1>
            <span className="text-sm sm:text-[17px] text-primary">
              Capacidad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
