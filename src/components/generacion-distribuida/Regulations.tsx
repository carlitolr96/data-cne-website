"use client";

import React, { useState } from "react";
import { regulations } from "@/assets/assets";

interface Tilt {
  x: number;
  y: number;
}

export default function Regulations() {
  // Cada tarjeta tiene su propio tilt
  const [tilts, setTilts] = useState<Tilt[]>(
    Array(regulations.length).fill({ x: 0, y: 0 })
  );

  const threshold = 12;

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2 * threshold;
    const y = ((e.clientY - top) / height - 0.5) * 2 * threshold;

    const newTilts = [...tilts];
    newTilts[index] = { x: y * -1, y: x };
    setTilts(newTilts);
  };

  const handleLeave = (index: number) => {
    const newTilts = [...tilts];
    newTilts[index] = { x: 0, y: 0 };
    setTilts(newTilts);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12 uppercase">
            Normas que lo respaldan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {regulations.map((regulation, index) => (
              <div key={index} className="flex flex-col items-center text-center cursor-pointer">
                <div className="relative mb-6">
                  <div
                    onMouseMove={(e) => handleMove(e, index)}
                    onMouseLeave={() => handleLeave(index)}
                    style={{
                      transform: `perspective(1000px) rotateX(${tilts[index].x}deg) rotateY(${tilts[index].y}deg)`,
                    }}
                    className="w-48 h-64 bg-cover bg-center rounded-lg shadow-lg border-2 border-gray-200 transition-transform duration-300"
                  >
                    <div
                      className="w-full h-full rounded-lg"
                      style={{ backgroundImage: `url('${regulation.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                  </div>
                </div>

                <div className="max-w-xs">
                  <h3 className="text-primary font-bold text-lg mb-3">
                    {regulation.title}
                  </h3>
                  <p className="text-primary text-sm leading-relaxed">
                    {regulation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-primary text-2xl md:text-3xl font-bold leading-tight max-w-4xl mx-auto">
            LA GENERACIÓN DISTRIBUIDA CONVIERTE AL
            <br />
            CONSUMIDOR EN PROTAGONISTA DEL SISTEMA ELÉCTRICO.
          </h3>
        </div>
      </div>
    </section>
  );
}
