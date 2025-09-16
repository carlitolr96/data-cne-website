"use client";

import React from "react";
import { steps } from "@/assets/assets"

interface ProgressBarProps {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mb-16">
          <div className="w-120 border-l-4 border-[#FF9000] pl-6">
            <h2 className="text-primary text-xl font-black mb-4 uppercase">
              ¿Quién necesita autorización?
            </h2>
            <p className="text-primary text-base leading-relaxed">
              Toda persona o empresa que utilice fuentes de radiación ionizante
              en RD debe de contar con una autorización otorgada por el por la
              CNE.
            </p>
          </div>

          <div className="w-120 border-l-4 border-[#FF9000] pl-6">
            <h2 className="text-primary text-xl font-black mb-4 uppercase">
              ¿Cómo se autoriza el uso de la radiación ionizante?
            </h2>
            <p className="text-primary text-base leading-relaxed">
              Cumpliendo los requisitos establecidos en las normativas
              nacionales ante la CNE.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-primary text-2xl font-black uppercase">
            Proceso:
          </h3>
        </div>

        <div className="flex flex-col items-center w-full max-w-5xl mx-auto my-4">
          <div className="flex items-center w-full mb-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center max-w-[100px]">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-black text-lg
              ${
                step.number <= currentStep
                  ? "bg-[#FF9000]"
                  : "bg-gray-300 text-gray-500 border border-gray-300"
              }`}
                  >
                    {step.number}
                  </div>

                  <h4 className="text-primary font-bold text-sm mt-2 text-center whitespace-normal break-words absolute translate-y-15">
                    {step.title}
                  </h4>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex-1 flex items-center">
                    <div className="flex-1 flex items-center">
                      <div
                        className={`h-1 w-full ${
                          step.number < currentStep
                            ? "bg-[#FF9000]"
                            : "bg-gray-300"
                        }`}
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
