"use client";

import React, { useState } from "react";
import Image from "next/image";
import { editionpen } from "@/assets/assets";

export default function EditionPEN() {
  const [tilts, setTilts] = useState(
    Array(editionpen.length).fill({ x: 0, y: 0 })
  );

  const threshold = 12;

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
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
    <section className="bg-light py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 min-h-[90vh] justify-center">
        <div className="max-w-full mx-auto relative">
          <h1 className="text-center font-black text-[#17447a] text-2xl md:text-3xl mb-6">
            ¿QUÉ ENCONTRARÁS EN ESTA EDICIÓN DEL PEN?
          </h1>

          <p className="text-center text-primary text-lg md:text-xl mb-12">
            <span className="font-medium">
              Una visión técnica, estratégica y participativa del futuro <br />
              energético de RD,
            </span>
            <span className="font-black"> estructurada en 5 compendios:</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
            {editionpen.map((doc, index) => (
              <div
                key={index}
                className="overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80"
                onMouseMove={(e) => handleMove(e, index)}
                onMouseLeave={() => handleLeave(index)}
                style={{
                  transform: `perspective(1000px) rotateX(${tilts[index].x}deg) rotateY(${tilts[index].y}deg)`,
                }}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={doc.image}
                    alt={`Document Cover ${index + 1}`}
                    width={100}
                    height={100}
                    priority
                    quality={70}
                    layout="responsive"
                    className="md:w-52 w-48 h-64 bg-cover bg-center rounded-lg shadow-lg border-2 border-gray-200 mb-5"
                  />
                  <p className="text-primary text-sm font-medium text-center md:text-start">
                    {doc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
