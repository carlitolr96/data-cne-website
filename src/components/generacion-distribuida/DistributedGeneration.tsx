"use client";

import Image from "next/image";

export default function DistributedGeneration() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl min-h-80 mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <div className="flex-1">
          <h1 className="text-primary text-2xl md:text-3xl font-extrabold mb-7">
            ¿QUÉ ES LA GENERACIÓN DISTRIBUIDA?
          </h1>
          <p className="text-primary font-medium leading-relaxed">
            Ahora imagina que puedes producir tu propia energía en el mismo
            lugar donde la consumes, por ejemplo, con paneles solares en el
            techo de tu casa o negocio. Eso se llama generación distribuida.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src={"/BannerPanelRD.jpg"}
            alt="CityPEN overlay"
            width={500}
            height={100}
            priority
            quality={70}
            className="mb-4"
          />
        </div>
      </div>
    </section>
  );
}
