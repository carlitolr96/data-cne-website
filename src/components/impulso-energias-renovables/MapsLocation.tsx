"use client";

import React from "react";
import Image from "next/image";
import Boton from "@/components/Boton";
import { assets } from "../../assets/assets";

export default function MapsLocation() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl min-h-screen mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>Contenido</div>

        <div className="flex flex-col items-center md:items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 bg-red px-4 py-2 w-fit mb-8">
              <Image
                src={assets.BoxChart}
                alt="Icon Constructions"
                width={25}
                height={25}
              />
              <span className="text-white font-bold text-md md:text-4xl uppercase">
                EN CONSTRUCCIÓN
              </span>
            </div>

            <h2 className="text-primary text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight">
              XX PROYECTOS
            </h2>

            <p className="text-primary text-base md:text-lg max-w-md">
              que aportaran
              <span className="font-extrabold text-primary"> xxx</span>
            </p>
          </div>
          <div className="flex flex-col items-end w-full max-w-sm mt-15">
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
