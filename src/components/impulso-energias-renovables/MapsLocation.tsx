"use client";

import { assets, locationspoint } from "@/assets/assets";
import { PiHandTap } from "react-icons/pi";
import MapWithPoints from "@/components/MapWithPoints";
import Image from "next/image";
import Boton from "@/components/Boton";

export default function MapsLocation() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full flex flex-col items-center md:hidden px-6 py-12">
          <div className="flex items-center gap-2 bg-red px-4 py-2 mb-6">
            <Image
              src={assets.BoxChart}
              alt="Icon Constructions"
              width={25}
              height={25}
            />
            <span className="text-white font-black text-md md:text-4xl uppercase">
              EN CONSTRUCCIÓN
            </span>
          </div>

          <div className="text-center mb-0 md:mb-6">
            <h2 className="text-primary text-3xl font-black leading-tight">
              19 PROYECTOS
            </h2>
            <p className="text-primary text-base mb-6">
              que aportarán{" "}
              <span className="font-black text-primary">1,290.05 MW</span>
            </p>
          </div>

          <div className="relative w-full h-[300px] mb-6">
            <MapWithPoints
              mapImage={assets.MapaOneSVG}
              points={locationspoint}
            />
            <div className="flex justify-center items-center text-center">
              <p className="text-sm text-gray-400 mr-1">
                Interaccion en los puntos rojos
              </p>
              <PiHandTap
                className="text-primary"
                style={{
                  top: "20px",
                  right: "20px",
                }}
              />
            </div>
          </div>

          <Boton href="/" icon="TapIcon" iconPosition="right">
            Ir al tablero
          </Boton>
        </div>

        <div className="hidden md:block w-full relative">
          <div className="absolute inset-0 flex items-center justify-start pl-8">
            <div className="relative w-full max-w-4xl">
              <MapWithPoints
                mapImage={assets.MapaOneSVG}
                points={locationspoint}
              />
              <div className="flex justify-center items-center text-center">
                <p className="text-sm text-gray-400 mr-1">
                  Interaccion en los puntos rojos
                </p>
                <PiHandTap
                  className="text-primary"
                  style={{
                    top: "20px",
                    right: "20px",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="relative z-0 min-h-screen flex flex-col md:flex-row items-center md:items-start justify-end pt-60 px-12">
            <div className="flex flex-col items-end max-w-md w-full">
              <div className="flex items-center gap-2 bg-red px-4 py-2 mb-6">
                <Image
                  src={assets.BoxChart}
                  alt="Icon Constructions"
                  width={25}
                  height={25}
                />
                <span className="text-white font-bold text-4xl uppercase">
                  EN CONSTRUCCIÓN
                </span>
              </div>

              <div className="text-left">
                <h2 className="text-primary text-4xl font-black leading-tight">
                  19 PROYECTOS
                </h2>
                <p className="text-primary text-lg mb-12">
                  que aportarán{" "}
                  <span className="font-black text-primary">1,290.05 MW</span>
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
      </div>
    </section>
  );
}
