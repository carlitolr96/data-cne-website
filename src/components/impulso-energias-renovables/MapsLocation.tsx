"use client";

import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import gsap from "gsap";
import Boton from "@/components/Boton";

interface LocationPoint {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
}

const locations: LocationPoint[] = [
  {
    id: "santo-domingo",
    name: "Santo Domingo",
    description: "Capital del país con proyectos solares y eólicos en marcha.",
    x: 55,
    y: 60,
  },
  {
    id: "santiago",
    name: "Santiago",
    description: "Centro de proyectos hidroeléctricos en la zona norte.",
    x: 40,
    y: 35,
  },
  {
    id: "punta-cana",
    name: "Punta Cana",
    description: "Expansión de energía renovable para turismo sostenible.",
    x: 80,
    y: 65,
  },
  {
    id: "san-cristobal",
    name: "San Cristobal",
    description: "Expansión de energía renovable para turismo sostenible.",
    x: 50,
    y: 65,
  },
];

export default function MapsLocation() {
  const pointsRef = useRef<HTMLDivElement[]>([]);
  const tooltipsRef = useRef<HTMLDivElement[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Animar la entrada de los puntos rojos
  useEffect(() => {
    gsap.fromTo(
      pointsRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  // Animar tooltips al activar/desactivar
  useEffect(() => {
    locations.forEach((loc, i) => {
      const tooltip = tooltipsRef.current[i];
      if (tooltip) {
        if (activeId === loc.id) {
          gsap.fromTo(
            tooltip,
            { scale: 0.8, opacity: 0, y: 10 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power3.out",
              pointerEvents: "auto",
            }
          );
        } else {
          gsap.to(tooltip, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power3.in",
            pointerEvents: "none",
          });
        }
      }
    });
  }, [activeId]);

  // Cerrar tooltip al hacer clic fuera
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
      <div className="max-w-7xl min-h-screen mx-auto relative">
        <div className="absolute inset-0 flex items-center justify-start pl-0 md:pl-8">
          <div className="relative w-full max-w-4xl">
            <Image
              src={assets.MapaOneSVG}
              alt="Mapa CNE"
              width={800}
              height={600}
              className="w-full h-auto"
            />

            {locations.map((loc, i) => (
              <div
                key={loc.id}
                className="absolute"
                style={{
                  left: `${loc.x}%`,
                  top: `${loc.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  ref={(el) => {
                    if (el) pointsRef.current[i] = el;
                  }}
                  className="w-5 h-5 bg-red rounded-full cursor-pointer shadow-lg"
                  onClick={() =>
                    setActiveId(activeId === loc.id ? null : loc.id)
                  }
                />

                <div
                  ref={(el) => {
                    if (el) tooltipsRef.current[i] = el;
                  }}
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-56 p-4 rounded-xl bg-white shadow-lg border border-gray-200 opacity-0 pointer-events-none"
                >
                  <h4 className="text-primary font-bold text-lg mb-1">
                    {loc.name}
                  </h4>
                  <p className="text-sm text-gray-600">{loc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 min-h-screen flex items-start justify-end pt-16 md:pt-60 pr-6 md:pr-12">
          <div className="flex flex-col items-end max-w-md">
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
