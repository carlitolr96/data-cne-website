"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { animateMapLocations } from "@/utils/animations";

export interface LocationPoint {
  id: string;
  name: string;
  description: string;
  x: number; // porcentaje en X
  y: number; // porcentaje en Y
  icon?: StaticImageData | string; // imagen personalizada opcional
}

interface MapWithPointsProps {
  mapImage: StaticImageData | string;
  points: LocationPoint[];
  width?: number;
  height?: number;
  className?: string;
}

export default function MapWithPoints({
  mapImage,
  points,
  width = 800,
  height = 600,
  className = "",
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

      {/* Puntos dinámicos */}
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

          {/* Tooltip */}
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
              <h4 className="text-primary font-bold text-lg mb-1">{loc.name}</h4>
              <p className="text-sm text-gray-600">{loc.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
