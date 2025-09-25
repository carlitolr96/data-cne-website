"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { animateMapLocations } from "@/utils/animations";

interface BaseLocationPoint {
  id: string;
  name: string;
  x: number;
  y: number;
  icon?: StaticImageData | string;
}

export interface LocationPoint extends BaseLocationPoint {
  capacidad?: number;
  capacidadBateria?: number;
  provincia?: string;
  total?: number;
  femenino?: number;
  masculino?: number;
  dataType?: "energy" | "cae" | "default";
}

interface MapWithPointsProps {
  mapImage: StaticImageData | string;
  points: LocationPoint[];
  width?: number;
  height?: number;
  className?: string;
  dataType?: "energy" | "cae" | "auto";
}

const EnergyTooltip = ({ loc }: { loc: LocationPoint }) => (
  <div className="flex-col items-center w-full justify-between">
    <p className="font-bold text-gray-600 text-[13px]">
      Capacidad: <span className="font-light">{loc.capacidad} MWn</span>
    </p>
    <div className="w-full h-px bg-gray-300/60 my-1"></div>
    <p className="font-bold text-gray-600 text-[13px]">
      BESS: <span className="font-light">{loc.capacidadBateria || 0} MWh</span>
    </p>
    <div className="w-full h-px bg-gray-300/60 my-1"></div>
    <div className="flex flex-col">
      <span className="font-bold text-gray-600 text-[13px]">Provincia:</span>
      <span className="font-light text-gray-800 text-[13px]">{loc.provincia}</span>
    </div>
  </div>
);

const CAETooltip = ({ loc }: { loc: LocationPoint }) => (
  <div className="flex-col items-center w-full justify-between">
    <p className="font-bold text-gray-600 text-[13px]">
      Sensibilizados: <span className="font-light">{loc.total?.toLocaleString()}</span>
    </p>
  </div>
);

const DefaultTooltip = ({ loc }: { loc: LocationPoint }) => {
  const hasEnergyData = loc.capacidad !== undefined || loc.provincia !== undefined;
  const hasCAEData = loc.total !== undefined || loc.femenino !== undefined || loc.masculino !== undefined;

  if (hasEnergyData && !hasCAEData) {
    return <EnergyTooltip loc={loc} />;
  }
  
  if (hasCAEData && !hasEnergyData) {
    return <CAETooltip loc={loc} />;
  }

  return (
    <div className="flex-col items-center w-full justify-between">
      {loc.capacidad !== undefined && (
        <>
          <p className="font-bold text-gray-600 text-[13px]">
            Capacidad: <span className="font-light">{loc.capacidad} MWn</span>
          </p>
          <div className="w-full h-px bg-gray-300/60 my-1"></div>
        </>
      )}
      {loc.total !== undefined && (
        <>
          <p className="font-bold text-gray-600 text-[13px]">
            Total: <span className="font-light">{loc.total.toLocaleString()}</span>
          </p>
          <div className="w-full h-px bg-gray-300/60 my-1"></div>
        </>
      )}
      {loc.provincia && (
        <div className="flex flex-col">
          <span className="font-bold text-gray-600 text-[13px]">Provincia:</span>
          <span className="font-light text-gray-800 text-[13px]">{loc.provincia}</span>
        </div>
      )}
    </div>
  );
};

export default function MapWithPoints({
  mapImage,
  points,
  width = 800,
  height = 600,
  className = "",
  dataType = "auto",
}: MapWithPointsProps) {
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

  const renderTooltipContent = (loc: LocationPoint) => {
    switch (dataType) {
      case "energy":
        return <EnergyTooltip loc={loc} />;
      case "cae":
        return <CAETooltip loc={loc} />;
      case "auto":
      default:
        return <DefaultTooltip loc={loc} />;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Image
        src={mapImage}
        alt="Mapa"
        width={width}
        height={height}
        priority
        quality={70}
        className="w-full h-auto"
      />

      {points.map((loc, i) => (
        <div key={loc.id}>
          <button
            type="button"
            ref={(el) => {
              if (el) pointsRef.current[i] = el;
            }}
            className="absolute z-10"
            style={{
              left: `${loc.x}%`,
              top: `${loc.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => setActiveId(activeId === loc.id ? null : loc.id)}
          >
            {loc.icon ? (
              <Image
                src={loc.icon}
                alt={loc.name}
                width={30}
                height={30}
                className="cursor-pointer"
              />
            ) : (
              <div className="w-5 h-5 bg-red hover:bg-red-700 rounded-full cursor-pointer shadow-lg" />
            )}
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
              <h4 className="text-primary font-bold text-md mb-2">
                {loc.name}
              </h4>
              <div className="flex flex-col items-center gap-2 w-full p-2 rounded-b-lg bg-white border-t border-gray-500/20">
                {renderTooltipContent(loc)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}