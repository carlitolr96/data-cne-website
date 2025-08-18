"use client";

import { assets } from "@/assets/assets";
import LineChartTwo from "../LineChart";
import Image from "next/image";

export default function Saving() {
  return (
    <section className="bg-light py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-4 flex flex-col gap-12 min-h-screen justify-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2 uppercase">
          <h1 className="font-medium text-primary text-xl sm:text-2xl md:text-3xl">
            Energía renovable:
          </h1>
          <span className="bg-green text-white px-4 py-2 font-bold text-base sm:text-lg md:text-xl">
            ahorro y estabilidad para las distribuidoras
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex-1 flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <h1 className="text-primary font-bold text-2xl text-center">
              Ahorros en distribución
            </h1>

            <div className="flex flex-">
              <Image
                src={assets.SavingIcon}
                alt="CNE Saving"
                width={70}
                height={70}
                className="mr-3"
              />
              <div className="flex flex-col items-start">
                <h2 className="text-primary text-5xl sm:text-6xl md:text-5xl font-extrabold leading-tight">
                  <span className="text-green font-bold text-7xl">+</span>{" "}
                  US$47.99
                </h2>
                <span className="inline-block bg-green text-white px-3 py-1 font-medium text-sm sm:text-base md:text-lg ml-15">
                  millones
                </span>
              </div>
            </div>
            <p className="text-primary text-base sm:text-lg md:text-xl max-w-md mt-2">
              adquiriendo{" "}
              <span className="font-extrabold text-primary">
                energía renovable
              </span>
              , a precios más competitivos que el{" "}
              <span className="font-extrabold text-primary">mercado spot</span>,
              reduciendo la volatilidad y asegurando costos predecibles.
            </p>
          </div>

          <div className="flex-1 w-full h-72 sm:h-80 md:h-96">
            <LineChartTwo />
          </div>
        </div>
      </div>
    </section>
  );
}
