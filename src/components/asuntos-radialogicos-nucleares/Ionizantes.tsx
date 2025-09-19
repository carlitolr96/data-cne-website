"use client";

import { itemsionizantes } from "@/assets/assets";
import Image from "next/image";

export default function Ionizantes() {
  return (
    <section className="bg-white py-16 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-black uppercase text-primary text-2xl md:text-3xl mb-4">
            ¿Qué son las radiaciones ionizantes?
          </h1>
          <p className="font-normal text-primary text-lg max-w-3xl mx-auto">
            Son un tipo de energía invisible capaz de ionizar la materia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {itemsionizantes.map((item, index) => (
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
              <p className="font-bold text-primary">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <p className="text-primary font-medium text-center max-w-2xl">
            Pero si no se manejan bien, pueden ser peligrosas. Por eso es clave
            tener controles y licencias adecuadas.
          </p>
        </div>
      </div>
    </section>
  );
}
