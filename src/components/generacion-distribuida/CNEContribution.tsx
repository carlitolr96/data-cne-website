"use client";

import { useState } from "react";
import Image from "next/image";
import ModularChart from "@/components/ModularChart";

export default function CNEContribution() {


  //Editar tamano
  const [chartData] = useState([
    { value: 271, label: "EDENORTE", color: "#1B4C84" },
    { value: 138, label: "EDESUR", color: "#6BC2F5" },
    { value: 61, label: "EDEESTE", color: "#34738B" },
  ]);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="bg-light border border-gray-200 rounded-xl shadow-2xs w-full flex flex-col-reverse md:flex-row-reverse overflow-hidden">
            <div className="flex w-full md:w-2/3">
              <div className="p-4 md:p-10 flex flex-col justify-center h-full md:h-full">
                <h2 className="text-2xl md:text-2xl font-black text-primary mb-6 uppercase font-montserrat">
                  ¿Qué aporta la CNE en este programa?
                </h2>
                <div className="space-y-4 text-primary">
                  <p className="text-lg md:text-md leading-relaxed">
                    La CNE se encarga del proceso de certificación de
                    cumplimiento de calidad de los equipos a utilizar (módulos
                    solares, inversores, tejas solares y aerogeneradores).
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Además, es la institución responsable de gestionar los
                    incentivos fiscales relacionados.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-2/3 h-48 md:h-100 md:rounded-l-xl overflow-hidden">
              <Image
                src="/portadas-gd/CNEOffice2025.jpg"
                alt="Card Image"
                fill
                priority
                quality={70}
                className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-12 uppercase">
            ¿Cuánto ha avanzado la <br /> generación distribuida en RD?
          </h2>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12">
            <div className="lg:w-1/2 max-w-4xl">
              <div className="text-start space-y-2">
                <span className="inline-block text-2xl md:text-3xl font-black bg-primary text-white px-2">
                  MAS DEL 3% DE LA ENERGÍA
                </span>
                <span className="inline-block text-2xl md:text-3xl font-black bg-primary text-white px-2">
                  QUE SE CONSUME EN EL PAÍS,
                </span>
                <span className="inline-block text-2xl md:text-3xl font-black bg-primary text-white px-2">
                  PROVIENE DE LA
                </span>
                <span className="inline-block text-2xl md:text-3xl font-black bg-primary text-white px-2">
                  GENERACIÓN DISTRIBUIDA
                </span>
                <span className="inline-block text-2xl md:text-3xl font-black bg-primary text-white px-2">
                  SOLAR COLOCADA EN
                </span>
                <span className="inline-block text-2xl md:text-3xl font-black bg-primary text-white px-2">
                  LOS TECHOS
                </span>
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col items-center">
              <div className="w-full max-w-md flex justify-center h-64">
                <ModularChart data={chartData} />
              </div>
              <p className="mt-4 text-primary text-sm font-medium text-center">
                (Cantidad de usuarios por distribuidoras)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
