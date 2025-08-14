"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import Boton from "@/components/Boton";

export default function FeedGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-2 border-b-[15px] border-red">
      <div className="bg-gray-100 p-4 flex items-center justify-center">1</div>

      <div className="bg-light flex flex-col items-center justify-center p-3">
        <Image
          src={assets.LogoEnergiaCambio}
          alt="CNE Logo"
          className="mx-auto"
        />
        <Boton href="/" className="uppercase mt-3">
          Descubre más
        </Boton>
      </div>

      <div className="lg:row-span-2 lg:col-start-3 bg-gray-100 p-4 flex items-center justify-center">
        3
      </div>

      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 bg-gray-100 p-4 flex items-center justify-center">
        4
      </div>

      <div className="lg:col-start-4 bg-gray-100 p-4 flex items-center justify-center">
        5
      </div>

      <div
        className="bg-primary flex justify-center items-center p-8 
                  lg:col-start-4 lg:row-start-2"
      >
        <p className="text-white text-lg text-center lg:text-left">
          Estamos impactando comunidades con la instalación de{" "}
          <span className="font-bold">
            sistemas de paneles solares y luminarias LED.
          </span>
        </p>
      </div>
    </div>
  );
}
