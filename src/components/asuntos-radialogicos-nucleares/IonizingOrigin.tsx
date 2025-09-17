"use client";

import Image from "next/image";
import { radiationNatural, radiationArtificial } from "@/assets/assets";

export default function IonizingOrigin() {
  return (
    <section className="bg-light py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center mb-12 md:mb-16">
          <h1 className="text-center text-2xl md:text-3xl lg:text-2xl max-w-2xl text-primary font-black px-4 py-2 inline-block mx-auto uppercase leading-tight">
            De acuerdo a su origen, existen dos tipos de radiación ionizante:
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="md:p-8">
            <div className="mb-6 md:mb-8">
              <div className="flex items-start mb-4">
                <span className="w-3 h-3 bg-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h2 className="text-primary text-xl md:text-2xl font-bold uppercase mb-2">
                    RADIACIÓN IONIZANTE NATURAL:
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg font-medium mb-4">
                    Proviene de fuentes que existen en la naturaleza, como:
                  </p>
                </div>
              </div>

              <div className="space-y-3 pl-8">
                {radiationNatural.map((item, index) => (
                  <div key={index} className="flex items-center gap-5">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={40}
                      height={40}
                      priority
                    />
                    <div className="border-2 rounded-lg border-primary p-4">
                      <span className="text-primary text-base md:text-sm font-bold uppercase">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-24 rounded-xl bg-green/15 p-4 border-2 border-green/20 shadow-lg flex items-center justify-center mt-8">
              <div className="flex items-center justify-center gap-6 h-full text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-green">
                  80%
                </h1>
                <div className="w-px h-12 bg-green/30"></div>
                <p className="text-base md:text-lg font-medium text-primary max-w-[200px] text-left">
                  De la radiación que recibimos es natural
                </p>
              </div>
            </div>
          </div>

          <div className="md:p-8">
            <div className="mb-6 md:mb-8">
              <div className="flex items-start mb-4">
                <span className="w-3 h-3 bg-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h2 className="text-primary text-xl md:text-2xl font-bold uppercase mb-2">
                    Radiación ionizante artificial (o artificialmente
                    producida):
                  </h2>
                  <p className="text-gray-400 text-base md:text-lg font-medium mb-4">
                    Generada por actividades humanas, como:
                  </p>
                </div>
              </div>

              <div className="space-y-3 pl-8">
                {radiationArtificial.map((item, index) => (
                  <div key={index} className="flex items-center gap-5">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={40}
                      height={40}
                      priority
                    />
                    <div className="border-2 rounded-lg border-primary p-4">
                      <span className="text-primary text-base md:text-sm font-bold uppercase">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-24 rounded-xl bg-red/15 p-4 border-2 border-red/20 shadow-lg flex items-center justify-center mt-8">
              <div className="flex items-center justify-center gap-6 h-full text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-red">
                  20%
                </h1>
                <div className="w-px h-12 bg-red/30"></div>
                <p className="text-base md:text-lg font-medium text-primary max-w-[200px] text-left">
                  De la radiación que recibimos es artificial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
