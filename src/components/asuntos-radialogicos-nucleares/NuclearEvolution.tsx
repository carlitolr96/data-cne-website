"use client";

import React from "react";
import ModularLine, { DataPoint, LineConfig } from "@/components/ModularLine";
import { evolutionPoints } from "@/assets/assets";

export default function NuclearEvolution() {
  const data: DataPoint[] = [
    { year: 2019, green: 1.2, red: 0.0, blue: 0.5 },
    { year: 2025, green: 8.8, red: 2.4, blue: 4.0 },
  ];

  const lines: LineConfig[] = [
    { key: "green", color: "#FF9000", width: 3, radius: 4 },
  ];

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
            <ModularLine data={data} lines={lines} width={600} height={360} />
          </div>
        </div>
      </div>
    </section>
  );
}
