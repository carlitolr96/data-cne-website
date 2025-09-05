"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";

export default function ElectricityHome() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl min-h-screen mx-auto py-10 md:py-5 px-6 md:px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold mb-6">
          ¿Cómo llega la electricidad a tu hogar?
        </h1>

        <p className="max-w-4xl text-primary font-medium text-base md:text-2xl">
          La energía que usas a diario pasa por un proceso antes de llegar a ti.
          Descubre cómo funciona en solo 3 pasos.
        </p>

        <div className="hidden flex-col items-center justify-center w-full h-full text-primary mt-12 md:hidden">
          <ul className="list-none flex flex-col items-center justify-center w-full max-w-7xl gap-6">
            {["Generación", "Transmisión", "Distribución"].map((title, i) => (
              <li
                key={i}
                className="flex flex-col items-center transition-all duration-200"
              >
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">
                  {title}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center w-full h-full text-primary mt-12">
          <ul className="list-none flex flex-nowrap items-center justify-center w-full max-w-7xl">
            {["Generación", "Transmisión", "Distribución"].map((title, i) => (
              <li
                key={i}
                className="flex-1 flex flex-col items-center transition-all duration-200"
              >
                <div className="mb-5 px-6 flex flex-col items-center font-light">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {title}
                  </h3>
                </div>

                <div className="relative px-6 w-full flex justify-center border-t-2 border-dashed border-red">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red"></span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-12">
          {/* GENERACIÓN */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl md:hidden font-bold text-primary mb-3">
              Generación
            </h3>
            <p className="text-primary text-[15px] font-medium leading-relaxed mb-6">
              La electricidad se produce en diferentes tipos de plantas, como:
            </p>

            <div className="space-y-4 mb-3">
              <div className="flex items-center justify-center gap-3 bg-red-50 rounded-full px-4 py-2 border border-red-200">
                <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center">
                  <Image
                    src={assets.FireCard}
                    alt="Térmicas"
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm text-primary">
                  <strong>Térmicas</strong> (Gas natural, carbón, Fuel oil)
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <Image
                    src={assets.HidraulicCard}
                    alt="Hidroeléctricas"
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm text-primary">
                  <strong>Hidroeléctricas</strong> (agua)
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 bg-yellow-50 rounded-full px-4 py-2 border border-yellow-200">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={assets.SolarCard}
                    alt="Solares"
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm text-primary">
                  <strong>Solares y eólicas</strong> (Sol y viento)
                </span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={assets.HeolicCard}
                    alt="Eólicas"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>

            <p className="text-primary text-[15px] font-bold mt-1">
              Estas transforman diferentes fuentes energía en electricidad lista
              para ser transportada
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl md:hidden font-bold text-primary mb-3">
              Transmisión
            </h3>
            <div className="flex mb-6 relative items-start text-start gap-5">
              <Image
                src={assets.Transmicion}
                alt="Transmisión"
                width={85}
                height={85}
                className="mt-2"
              />
              <div>
                <p className="text-primary text-[15px] leading-relaxed mb-5">
                  Una vez generada, la electricidad viaja por redes de alto
                  voltaje llamadas líneas de transmisión.
                </p>
                <p className="text-primary text-[15px] leading-relaxed mb-5">
                  Estas llevan la energía desde la planta hasta las
                  subestaciones en distintas partes del país.
                </p>
                <p className="text-primary text-[15px] leading-relaxed">
                  Este proceso permite transportar la electricidad a largas
                  distancias de manera segura y eficiente.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl md:hidden font-bold text-primary mb-3">
              Distribución
            </h3>
            <div className="flex items-start mb-6 relative text-start gap-5">
              <Image
                src={assets.Distribucion}
                alt="Distribución"
                width={85}
                height={85}
                className="mt-3"
              />
              <div>
                <p className="text-primary text-[15px] leading-relaxed mb-4">
                  En las subestaciones, el voltaje de la electricidad se reduce
                  para enviarla por redes de distribución hasta hogares,
                  comercios e industrias.
                </p>
                <p className="text-primary text-[15px] leading-relaxed">
                  Así, al encender una luz o conectar un electrodoméstico,
                  recibes la energía que recorrió este camino para llegar a ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-0 right-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] opacity-95">
        <Image
          src={assets.HomeEnergy}
          alt="Casa Energía"
          width={500}
          height={400}
        />
      </div>
    </section>
  );
}
