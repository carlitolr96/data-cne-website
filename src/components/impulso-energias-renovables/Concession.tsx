"use client";

import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

export default function Concession() {
  return (
    <section className="bg-light">
      <div className="max-w-7xl mx-auto flex">
        <div className="flex flex-col items-center justify-center bg-red-600 text-white px-8 py-6 rounded-r-full">
          <Image
            src={assets.HansIcon}
            alt="Concesión"
            width={40}
            height={40}
            className="mr-4"
            />
          <span className="font-bold text-lg uppercase">Concesión</span>
        </div>

        <div className="flex flex-1 items-center justify-around bg-light px-8 py-6">
          <div className="flex items-center justify-center gap-5">
            <h1 className="text-6xl font-extrabold text-primary">84</h1>
            <span className="text-[17px] text-primary">
              Concesiones<br/>definitivas
            </span>
          </div>

          <div className="w-0.5 h-16 bg-red-600"></div>

          <div className="flex items-center justify-center gap-5">
            <h1 className="text-6xl font-extrabold text-primary">54</h1>
            <span className="text-[17px] text-primary">
              Concesiones <br/>provisionales
            </span>
          </div>

          <div className="w-0.5 h-16 bg-red-600"></div>

          <div className="flex flex-col text-nowrap items-end">
            <h1 className="text-6xl font-extrabold text-primary">3,107 MW</h1>
            <span className="text-[17px] text-primary">Capacidad</span>
          </div>
        </div>
      </div>
    </section>
  );
}
