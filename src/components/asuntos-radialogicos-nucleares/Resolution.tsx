"use client";

import Image from "next/image";

export default function Resolution() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <div className="flex flex-col w-full relative pl-6 justify-center">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#FF9000] rounded"></div>
          <h1 className="text-white text-2xl md:text-4xl lg:text-3xl font-black leading-tight">
            EN LA REPÚBLICA DOMINICANA EL USO
            <br />
            DE LAS RADIACIONES IONIZANTES ES
            <br />
            REGULADO APLICANDO LAS SIGUIENTES
            <br />
            NORMATIVAS:
          </h1>
        </div>

        
        <Image
          src="/portadas-arn/ProteccionRadiologica.jpeg"
          alt="Resolution Document"
          width={100}
          height={100}
          priority
          quality={70}
          className="md:w-52 w-50 h-64 bg-cover bg-center rounded-lg shadow-lg border-1 border-gray-300/60 mb-5"
        />
        <Image
          src="/portadas-arn/NormaSF.png"
          alt="Resolution Document"
          width={100}
          height={100}
          priority
          quality={70}
          className="md:w-52 w-50 h-64 bg-cover bg-center rounded-lg shadow-lg border-1 border-gray-300/60 mb-5"
        />
      </div>
    </section>
  );
}
