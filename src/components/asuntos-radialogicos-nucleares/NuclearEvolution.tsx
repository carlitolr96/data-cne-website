"use client";

import React from "react";
import ModularLine from "@/components/ModularLine";
import { evolutionPoints } from "@/assets/assets";

export default function NuclearEvolution() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="text-center mb-12">
          <h2 className="text-primary text-2xl md:text-3xl font-black mb-6 uppercase">
            ¿Cómo ha evolucionado?
          </h2>
          <p className="text-primary text-lg max-w-4xl mx-auto leading-relaxed">
            Desde 2019, el número de autorizaciones ha aumentado cada año, lo
            que refleja:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-6">
            {evolutionPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex-1">
                  <div className="flex items-center gap-3">
                    <point.icon className={`w-5 h-5 ${point.color}`} />
                    <h1 className="text-primary font-medium text-md leading-tight uppercase">
                      {point.title}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/1 flex items-center justify-center">
            <ModularLine />
          </div>
        </div>
      </div>
    </section>
  );
}
