"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import Boton from "@/components/Boton";

export default function Numeric() {
  return (
    <section className="relative w-full bg-primary bg-cover bg-center bg-no-repeat min-h-[80vh] overflow-hidden flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={assets.CityPEN}
          alt="CityPEN overlay"
          width={100}
          height={100}
          className="w-full h-full object-cover object-top opacity-90 translate-y-60"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center text-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col items-center md:items-center">
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg md:text-2xl">
                BUSCA DUPLICAR PIB
              </h3>
              <p className="font-black text-4xl md:text-6xl lg:text-7xl">
                US$11,000
              </p>
              <h3 className="font-bold text-lg md:text-2xl mt-2">EN 2024</h3>
            </div>
            <Image
              src={assets.ArrowBottomIcon}
              alt="CityPEN overlay"
              width={25}
              height={25}
              priority
              className="py-5"
            />
            <p className="font-black text-4xl md:text-6xl lg:text-7xl">
              +US$22,000
            </p>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-base md:text-xl mb-2 whitespace-nowrap">
                EN EFECTO, SE DUPLICARÁ LA OFERTA ENERGÉTICA
              </h3>
              <p className="font-black text-4xl md:text-6xl lg:text-7xl">
                25,397 GWH
              </p>
            </div>
            <Image
              src={assets.ArrowBottomIcon}
              alt="CityPEN overlay"
              width={25}
              height={25}
              priority
              className="py-10"
            />

            <p className="font-black text-4xl md:text-6xl lg:text-7xl">
              50,794 GWH
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <Boton
            href="/"
            icon="TapIcon"
            iconPosition="right"
            className="uppercase mt-5 w-auto px-6 py-3"
          >
            Conoce más aquí
          </Boton>
        </div>
      </div>
    </section>
  );
}
