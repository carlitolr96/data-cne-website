"use client";

import { assets, attractivereliable } from "@/assets/assets";
import Image from "next/image";

export default function AttractiveReliable() {
  return (
    <section className="relative bg-primary min-h-[60vh] md:min-h-[100vh] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-4 flex flex-col relative z-0 py-12">
        <div className="flex md:flex-row items-center justify-center text-center md:space-x-4 uppercase mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white px-3 py-1">
            UN MERCADO
          </h1>
          <span className="text-2xl sm:text-3xl md:text-4xl text-white bg-red font-bold mt-2 mx-0 md:mt-0">
            ATRACTIVO Y CONFIABLE
          </span>
        </div>

        <p className="text-white font-medium text-center text-xl sm:text-2xl md:text-3xl mb-10">
          El país destaca por ofrecer:
        </p>

        <div
          className="absolute z-0 flex flex-col gap-9 items-start"
          style={{
            top: "160%",
            left: "14%",
          }}
        >
          {attractivereliable.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
              style={{
                marginLeft: `${index * 130}px`,
              }}
            >
              <Image
                src={assets.EllipseSVG}
                alt={item.label}
                className="w-6 h-6"
              />
              <span className="text-white text-base md:text-2xl font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mapa */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-80 -z-0">
        <Image
          src={assets.MapaTwoSVG}
          alt="Mapa Rep. Dom"
          className="object-cover scale-95 translate-x-[-19%] translate-y-[37%]"
        />
      </div>
    </section>
  );
}
