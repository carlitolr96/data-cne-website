"use client";

import Image from "next/image";

export default function AttractiveReliable() {
  return (
    <section className="relative bg-primary min-h-[60vh] md:min-h-[90vh] overflow-hidden flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-6 md:px-4 flex flex-col items-center text-center pt-12 md:pt-16">
        <div className="flex flex-col md:flex-row items-center justify-center uppercase gap-2 md:gap-4 mb-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-white font-semibold mb-5">
            UN MERCADO {""}
            <span className="text-3xl sm:text-4xl md:text-5xl text-white bg-red font-black px-2 py-1">
              ATRACTIVO Y CONFIABLE
            </span>
          </h1>
        </div>

        <p className="text-white font-medium text-lg sm:text-xl md:text-2xl">
          El país destaca por ofrecer:
        </p>

        <div className="absolute w-full flex justify-center">
          <Image
            src="/AtractivoConfiable.png"
            alt="Mapa Rep. Dom"
            width={1500}
            height={400}
            priority
            quality={70}
            className="
          object-contain
          max-w-full
          -translate-x-15 sm:translate-x-[-10%] md:translate-x-[-32%] 
          translate-y-[100%] sm:translate-y-[25%] md:translate-y-[30%]
          transition-all duration-500
        "
          />
        </div>
      </div>
    </section>
  );
}
