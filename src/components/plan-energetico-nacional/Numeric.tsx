"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import { animateCurrencyNumeric, animateNumeric } from "@/utils/animations";
import Image from "next/image";
import Boton from "@/components/Boton";

export default function Numeric() {
  const pibRef = useRef<HTMLParagraphElement>(null);
  const pibPlusRef = useRef<HTMLParagraphElement>(null);
  const energiaRef1 = useRef<HTMLParagraphElement>(null);
  const energiaRef2 = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    animateCurrencyNumeric(pibRef.current, 11000, "US$", false);
    animateCurrencyNumeric(pibPlusRef.current, 22000, "+US$", false);

    animateNumeric(energiaRef1.current, 25397, " GWh");
    animateNumeric(energiaRef2.current, 50794, " GWh");
  }, []);

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
          quality={70}
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center text-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col items-center md:items-center">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-lg md:text-2xl">
                BUSCA DUPLICAR PIB
              </h3>
              <p
                ref={pibRef}
                className="font-black text-4xl md:text-6xl lg:text-7xl"
              >
                US$0
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
            <p
              ref={pibPlusRef}
              className="font-black text-4xl md:text-6xl lg:text-7xl"
            >
              +US$0
            </p>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-semibold text-sm sm:text-base md:text-xl mb-2 md:mb-3 px-2 md:px-0 max-w-xs md:max-w-none md:whitespace-nowrap">
                EN EFECTO, SE DUPLICARÁ LA OFERTA ENERGÉTICA
              </h3>
              <p
                ref={energiaRef1}
                className="font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
              >
                0 GWH
              </p>
            </div>

            <Image
              src={assets.ArrowBottomIcon}
              alt="Flecha indicadora"
              width={20}
              height={20}
              priority
              className="py-6 sm:py-8 md:py-10 transform scale-90 md:scale-100"
            />

            <div className="text-center">
              <p
                ref={energiaRef2}
                className="font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
              >
                0 GWH
              </p>
            </div>
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
