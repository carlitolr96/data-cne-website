"use client";

import { itemsystem } from "@/assets/assets";
import Image from "next/image";

export default function ElectricalSystem() {
  return (
    <section className="bg-light py-16 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col">
        <div className="text-center mb-12">
          <h1 className="font-extrabold uppercase text-primary text-2xl md:text-3xl mb-4">
            SISTEMA ELÉCTRICO
          </h1>
          <p className="font-normal text-primary text-lg max-w-3xl mx-auto line-clamp-2">
            Antes de hablar de generación distribuida, debemos entender cómo
            funciona el sistema eléctrico tradicional:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {itemsystem.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <Image
                src={item.icon}
                alt="CityPEN overlay"
                width={50}
                height={50}
                className="mb-4"
                priority
              />
              <p className="font-semibold text-primary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
