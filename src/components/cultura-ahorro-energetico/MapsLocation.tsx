"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";

export default function MapsLocation() {
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
          </div>
        </div>

        <div className="relative min-h-screen flex items-start justify-end pt-16 md:pt-45 pr-6 md:pr-12">
          <div className="flex flex-col items-end max-w-lg">
            <div className="text-right">
              <h2 className="text-primary text-2xl md:text-2xl lg:text-3xl font-bold uppercase">
                Iluminamos el futuro dominicano promoviendo el ahorro de energía
                en cada rincón.
              </h2>
              <p className="text-primary text-3xl md:text-lg mb-12 uppercase">
                ¡Sé parte de la revolución sostenible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
