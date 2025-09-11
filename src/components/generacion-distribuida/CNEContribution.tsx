"use client";

import { useState } from "react";
import Image from "next/image";
import ModularChart from "@/components/ModularChart";

export default function CNEContribution() {
  const [chartData] = useState([
    { value: 263, label: "EDENORTE", color: "#1B4C84" },
    { value: 136, label: "EDESUR", color: "#6BC2F5" },
    { value: 61, label: "EDEESTE", color: "#34738B" },
  ]);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="bg-light border border-gray-200 rounded-xl shadow-2xs w-full flex flex-col-reverse md:flex-row-reverse overflow-hidden">
            <div className="flex w-full md:w-1/3">
              <div className="p-4 md:p-7 flex flex-col justify-center h-full md:h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 uppercase font-montserrat">
                  ¿Qué aporta la CNE en este programa?
                </h2>
                <div className="space-y-4 text-primary">
                  <p className="text-lg leading-relaxed">
                    La CNE se encarga del proceso de certificación de
                    cumplimiento de calidad de los equipos a utilizar (módulos
                    solares, inversores, tejas solares y aerogeneradores).
                  </p>
                  <p className="text-lg leading-relaxed">
                    Además, es la institución responsable de gestionar los
                    incentivos fiscales relacionados.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-60 md:w-2/3 md:h-auto md:rounded-l-xl overflow-hidden">
              <Image
                src="/benefits-image.jpg"
                alt="Card Image"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 uppercase">
            ¿Cuánto ha avanzado la <br /> generación distribuida en RD?
          </h2>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12">
            <div className="lg:w-1/2 max-w-md">
              <p className="text-2xl md:text-3xl font-extrabold bg-primary text-white text-start p-4 mb-4">
                MAS DEL 3% DE LA ENERGÍA QUE SE CONSUME EN EL PAÍS, PROVIENE DE
                LA GENERACIÓN DISTRIBUIDA SOLAR COLOCADA EN LOS TECHOS
              </p>
            </div>

            <div className="lg:w-1/2 flex flex-col items-center">
              <div className="w-full flex justify-center h-64">
                <ModularChart data={chartData} />
              </div>
              <p className="mt-4 text-primary text-sm font-medium text-center">
                Capacidad instalada por EDEs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
