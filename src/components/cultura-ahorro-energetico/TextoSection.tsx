"use client";

import React from "react";

export default function TextoSection() {
  return (
    <section className="bg-light py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 font-montserrat">
              Uso Racional de la Energía
            </h2>

            <p className="text-primary/90 text-lg leading-relaxed mb-6">
              Es un programa que se desarrolla principalmente a través de{" "}
              <span className="font-semibold">
                charlas educativas, talleres, seminarios y campamentos
              </span>
              de verano, entre otras actividades similares, con el propósito de
              crear una cultura de eficiencia energética en toda la población, y
              fomentar la adopción de{" "}
              <span className="font-semibold">buenas prácticas de consumo</span>{" "}
              de energía en los sectores residencial, comercial, público y de
              servicios.
            </p>

            <div className="border-l-4 border-primary pl-6">
              <p className="text-primary/90 text-lg leading-relaxed mb-4">
                El uso racional de la energía es un concepto aplicado
                internacionalmente, destinado a lograr el{" "}
                <span className="font-semibold">ahorro de energía</span>,
                maximizando el aprovechamiento de los recursos naturales que han
                comenzado a escasear en todo el mundo.
              </p>
              <p className="text-primary/90 text-lg leading-relaxed">
                La{" "}
                <span className="font-semibold">
                  Ley General de Electricidad 125-01
                </span>
                , en su artículo 14, acápite f, atribuye a la Comisión Nacional
                de Energía la responsabilidad de promover este uso racional,
                considerando que gran parte de la generación eléctrica aún
                depende de recursos no renovables como el petróleo y el gas,
                cuya disponibilidad es cada vez más limitada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
