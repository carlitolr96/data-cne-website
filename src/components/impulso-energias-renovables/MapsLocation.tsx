"use client";

import { useEffect, useRef, useState } from "react";
import { assets, locationspoint } from "../../assets/assets";
import Image from "next/image";
import Boton from "@/components/Boton";
import { animateMapLocations } from "@/utils/animations";

interface LocationPoint {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
}

export default function MapsLocation() {
  const pointsRef = useRef<HTMLButtonElement[]>([]);
  const tooltipsRef = useRef<HTMLDivElement[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    animateMapLocations(pointsRef.current, tooltipsRef.current, activeId);
  }, [activeId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !pointsRef.current.some((el) => el?.contains(event.target as Node)) &&
        !tooltipsRef.current.some((el) => el?.contains(event.target as Node))
      ) {
        setActiveId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 flex items-center justify-start pl-0 md:pl-8">
          <div className="relative w-full max-w-4xl">
            <Image
              src={assets.MapaOneSVG}
              alt="Mapa CNE"
              width={800}
              height={600}
              className="w-full h-auto z-0"
            />

             {locationspoint.map((loc: LocationPoint, i: number) => (
              <div key={loc.id}>
                <button
                  ref={(el) => {
                    if (el) pointsRef.current[i] = el;
                  }}
                  className="absolute z-1"
                  style={{
                    left: `${loc.x}%`,
                    top: `${loc.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() =>
                    setActiveId(activeId === loc.id ? null : loc.id)
                  }
                >
                  <div className="w-5 h-5 bg-red hover:bg-red-700 rounded-full cursor-pointer shadow-lg outline-2 outline-offset-2" />
                </button>
                {activeId === loc.id && (
                  <div
                    ref={(el) => {
                      if (el) tooltipsRef.current[i] = el;
                    }}
                    data-id={loc.id}
                    style={{
                      top: `calc(${loc.y}% - 6rem)`,
                      left: `${loc.x}%`,
                      transform: "translateX(-50%)",
                    }}
                    className="absolute w-56 p-4 rounded-xl bg-white shadow-lg border border-gray-200 z-50"
                  >
                    <div className="absolute -bottom-3 left-1/2 w-3 h-3 bg-red rounded-full border-2 border-white transform -translate-x-1/2" />

                    <h4 className="text-primary font-bold text-lg mb-1">
                      {loc.name}
                    </h4>
                    <p className="text-sm text-gray-600">{loc.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-0 min-h-[80vh] md:min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end pt-16 md:pt-60 px-6 md:pr-12">
          <div className="flex flex-col items-center md:items-end max-w-md w-full">
            <div className="flex items-center gap-2 bg-red px-4 py-2 mb-6">
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

            <div className="text-center md:text-left">
              <h2 className="text-primary text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight">
                XX PROYECTOS
              </h2>
              <p className="text-primary text-base md:text-lg mb-12">
                que aportarán{" "}
                <span className="font-extrabold text-primary">xxx</span>
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end mt-6 md:mt-auto">
              <p className="text-lg font-medium text-primary mb-3 text-center md:text-right">
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
