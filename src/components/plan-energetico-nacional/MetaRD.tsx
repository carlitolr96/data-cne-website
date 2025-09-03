"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";

export default function MetaRD() {
  return (
<section className="bg-light py-12">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <Image
        src={assets.METARD2036}
        alt="Impulso Energía Renovable"
        width={200}
        height={200}
        className="h-auto object-contain"
        priority
      />

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <p className="text-primary text-base md:text-lg leading-relaxed">
          Meta RD 2036 es una iniciativa estratégica del{" "}
          <span className="font-extrabold">
            Gobierno de la República Dominicana,
          </span>{" "}
          que busca transformar la economía nacional a través de un crecimiento
          inclusivo y sostenible, promoviendo la colaboración entre el sector
          público, privado y la sociedad civil.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
