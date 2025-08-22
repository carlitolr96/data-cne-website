"use client";

import React from "react";
import Image from "next/image";
import Boton from "@/components/Boton";
import { assets } from "../../assets/assets";

export default function MapsLocation() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl min-h-screen mx-auto relative">
        <div className="absolute inset-0 flex items-center justify-start pl-0 md:pl-8">
          <div className="w-full max-w-4xl">
            <Image
              src={assets.MapaOneSVG}
              alt="Mapa CNE"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="relative z-10 min-h-screen flex items-start justify-end pt-16 md:pt-60 pr-6 md:pr-12">
          <div className="flex flex-col items-end max-w-md">
            <div className="flex items-center gap-2 bg-red-600 px-4 py-2 mb-6">
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

            <div className="text-left">
              <h2 className="text-primary text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight">
                XX PROYECTOS
              </h2>
              <p className="text-primary text-base md:text-lg mb-12">
                que aportarán{" "}
                <span className="font-extrabold text-primary">xxx</span>
              </p>
            </div>

            <div className="flex flex-col items-end mt-auto">
              <p className="text-lg font-medium text-primary mb-3 text-right">
                Para más información
              </p>
              <Boton href="/" icon="TapIcon" iconPosition="right">
                Ir al tablero
              </Boton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
