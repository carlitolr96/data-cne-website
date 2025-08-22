"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";

export default function ElectricityHome() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl min-h-screen mx-auto px-6 md:px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold mb-6">
          ¿Cómo llega la electricidad a tu hogar?
        </h1>

        <p className="max-w-4xl text-primary font-medium text-2xl leading-relaxed">
          La energía que usas a diario pasa por un proceso antes de llegar a ti.
          Descubre cómo funciona en solo 3 pasos.
        </p>

        <div className="mt-12 flex items-center gap-6">
          <div className="mt-16 w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Generación</h3>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Transmisión</h3>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">
                  Distribución
                </h3>
              </div>
            </div>

            <div className="relative mb-12 w-full">
              <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 border-t border-dashed border-red-600 z-0"></div>
              <div className="relative flex justify-between items-center z-10">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 aspect-square bg-red rounded-full"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <p className="text-primary text-base font-medium leading-relaxed mb-6">
                  La electricidad se produce en diferentes tipos de plantas,
                  como:
                </p>

                <Image
                  src={assets.Generation}
                  alt="Impulso Energia Renovable"
                  width={280}
                  height={100}
                />

                {/* <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center gap-3 bg-red-50 rounded-full px-4 py-2 border border-red-200">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      Imagenes
                    </div>
                    <span className="text-sm text-primary">
                      <strong>Térmicas</strong> (Gas natural, carbón, Fuel oil)
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-3 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      Imagenes
                    </div>
                    <span className="text-sm text-primary">
                      <strong>Hidroeléctricas</strong> (agua)
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-3 bg-yellow-50 rounded-full px-4 py-2 border border-yellow-200">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                      Imagenes
                    </div>
                    <span className="text-sm text-primary">
                      <strong>Solares y eólicas</strong> (Sol y viento)
                    </span>
                  </div>
                </div> */}

                <p className="text-primary text-sm font-bold leading-relaxed mt-3">
                  Estas transforman diferentes fuentes energía en electricidad
                  lista para ser transportada
                </p>
              </div>

              <div className="flex flex-col">
                <div className="mb-6 relative text-start">
                  <Image
                    src={assets.Transmicion}
                    alt="Impulso Energia Renovable"
                    width={100}
                    height={100}
                  />

                  <p className="text-primary text-base leading-relaxed mb-5">
                    Una vez generada, la electricidad viaja por redes de alto
                    voltaje llamadas líneas de transmisión.
                  </p>

                  <p className="text-primary text-base leading-relaxed mb-5">
                    Estas llevan la energía desde la planta hasta las
                    subestaciones en distintas partes del país.
                  </p>

                  <p className="text-primary text-base leading-relaxed">
                    Este proceso permite transportar la electricidad a largas
                    distancias de manera segura y eficiente.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mb-6 relative text-start">
                  <Image
                    src={assets.Distribucion}
                    alt="Impulso Energia Renovable"
                    width={100}
                    height={100}
                  />

                  <p className="text-primary text-base leading-relaxed mb-4">
                    En las subestaciones, el voltaje de la electricidad se
                    reduce para enviarla por redes de distribución hasta
                    hogares, comercios e industrias.
                  </p>

                  <p className="text-primary text-base leading-relaxed">
                    Así, al encender una luz o conectar un electrodoméstico,
                    recibes la energía que recorrió este camino para llegar a
                    ti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
