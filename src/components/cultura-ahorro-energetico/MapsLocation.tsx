"use client";

import MapWithPoints from "@/components/MapWithPoints";
import { PiHandTap } from "react-icons/pi";
import { assets, locationsCAE } from "@/assets/assets";

export default function MapsLocation() {
  return (
    <section className="bg-white relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 flex items-center justify-start pl-0">
          <div className="relative w-full max-w-4xl">
            <MapWithPoints
              mapImage={assets.MapaOneSVG}
              points={locationsCAE}
              dataType="cae"
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

        <div className="relative min-h-190 md:min-h-screen flex items-start justify-end pt-16 md:pt-45 pr-6 md:pr-12">
          <div className="flex flex-col items-end max-w-lg">
            <div className="text-right">
              <h2 className="text-primary text-2xl md:text-2xl lg:text-3xl font-bold uppercase">
                Iluminamos el futuro dominicano promoviendo el ahorro de energía
                en cada rincón.
              </h2>
              <p className="text-primary text-md md:text-lg mb-0 md:mb-12 uppercase">
                ¡Sé parte de la revolución sostenible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
