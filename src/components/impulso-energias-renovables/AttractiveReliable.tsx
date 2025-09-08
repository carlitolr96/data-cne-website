"use client";

import Image from "next/image";

export default function AttractiveReliable() {
  return (
    <section className="relative bg-primary min-h-[60vh] md:min-h-[70vh] overflow-hidden flex flex-col justify-start">
  <div className="max-w-7xl mx-auto px-6 md:px-4 flex flex-col items-center text-center pt-12 md:pt-16">

    <div className="flex flex-col md:flex-row items-center justify-center uppercase gap-2 md:gap-4 mb-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold">
        UN MERCADO
      </h1>
      <span className="text-3xl sm:text-4xl md:text-5xl text-white bg-red font-bold px-2 py-1 rounded">
        ATRACTIVO Y CONFIABLE
      </span>
    </div>

    <p className="text-white font-medium text-lg sm:text-xl md:text-2xl mb-6">
      El país destaca por ofrecer:
    </p>

    <div className="w-full flex justify-center">
      <Image
        src="/AtractivoConfiable.png"
        alt="Mapa Rep. Dom"
        width={1300}
        height={400}
        className="
          object-contain
          max-w-full sm:max-w-sm md:max-w-4xl lg:max-w-7xl
          translate-x-0 sm:translate-x-[-10%] md:translate-x-[-32%] 
          translate-y-[20%] sm:translate-y-[25%] md:translate-y-[30%]
          transition-all duration-500
        "
      />
    </div>
  </div>
</section>

  );
}
