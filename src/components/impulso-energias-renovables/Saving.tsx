"use client";

import { assets } from "@/assets/assets";
import LineChartTwo from "../LineChart";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { animateCurrency } from "@/utils/animations";

export default function Saving() {
  const amountRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    animateCurrency(amountRef.current, 47.99);
  }, []);

  return (
    <section className="bg-light py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-4 flex flex-col gap-20 min-h-[80vh] justify-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-3 uppercase">
          <h1 className="font-medium text-primary text-xl sm:text-2xl md:text-3xl">
            Energía renovable:
          </h1>
          <span className="bg-green text-white px-4 py-2 font-bold text-base sm:text-lg md:text-xl">
            ahorro y estabilidad para las distribuidoras
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left flex-1">
            <h2 className="text-primary font-bold text-2xl sm:text-3xl md:text-3xl text-center">
              Ahorros en distribución
            </h2>

            <div className="flex items-center gap-4 sm:gap-6">
              <Image
                src={assets.SavingIcon}
                alt="CNE Saving"
                width={70}
                height={70}
              />
              <div className="flex flex-col items-start">
                <h3
                  ref={amountRef}
                  className="text-primary text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
                >
                  <span className="text-green font-bold text-6xl sm:text-7xl">
                    +
                  </span>{" "}
                  US$0.00
                </h3>
                <span className="bg-green text-white px-3 py-1 font-medium text-sm sm:text-base md:text-lg inline-block">
                  millones
                </span>
              </div>
            </div>

            <p className="text-primary text-base sm:text-lg md:text-xl max-w-md mt-4">
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
