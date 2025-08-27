"use client";

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import NavBar from "@/components/impulso-energias-renovables/NavBar";

const Hero: React.FC = () => {
  return (
<section className="relative min-h-screen w-full overflow-hidden">
  <div className="absolute inset-0">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(19, 52, 109, 1) 15%, rgba(37, 102, 211, 0.1) 110%),
          url('./BannerEstadisticas.jpg')
        `,
        backgroundBlendMode: "multiply",
      }}
    />
  </div>

  <div className="relative z-30 flex flex-col min-h-screen">
    <header className="flex justify-center pt-12 pb-8">
      <div className="text-white">
        <Image
          src={assets.logoDataCNE}
          alt="Data CNE"
          width={200}
          height={80}
        />
      </div>
    </header>

    <div className="flex flex-col max-w-7xl w-full mx-auto px-4">
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 w-full">
          <NavBar />
        </div>
      </div>

      <div className="flex justify-end">
        <div className="max-w-2xl text-right text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mt-20">
            DIVISIÓN DE DIFUSIÓN EN EL USO RACIONAL DE LA ENERGÍA
          </h1>
          <div className="flex justify-end mt-4">
            <div className="w-48 h-1 bg-red-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex-1" />
  </div>
</section>

  );
};

export default Hero;
