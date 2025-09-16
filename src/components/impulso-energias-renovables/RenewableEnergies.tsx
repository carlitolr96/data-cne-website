"use client";

import React from "react";
import Image from "next/image";
import {
  assets,
  renewableenergieslist,
  renewableenergiesfonts,
} from "@/assets/assets";

export default function RenewableEnergies() {
  return (
    <section className="bg-light py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-primary text-2xl md:text-3xl font-black font-montserrat mb-4">
              Energías renovables
            </h1>
            <p className="text-primary font-medium leading-relaxed">
              Son fuentes de energía obtenidas de recursos naturales inagotables
              o que se regeneran de manera continua, como el sol, el viento, el
              agua o la biomasa, ofreciendo una alternativa limpia y sostenible
              frente a los combustibles fósiles..
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="space-y-4 flex-col justify-center">
              {renewableenergieslist.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center lg:justify-end items-center gap-2"
                >
                  <span className="bg-primary text-white font-bold text-sm md:text-lg px-2 whitespace-nowrap">
                    {item.description}
                  </span>
                  <Image
                    src={assets.DoneSheck}
                    alt={item.description}
                    width={23}
                    height={23}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-black text-2xl text-primary mb-10">
            Fuentes
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {renewableenergiesfonts.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-3 min-w-[120px]"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                />
                <span className="text-primary font-bold text-lg">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
