"use client";

import React from "react";
import Image from "next/image";
import { editionpen } from "../../assets/assets";

export default function EditionPEN() {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const threshold = 12;

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <section className="bg-light">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 min-h-[90vh] justify-center">
        <div className="max-w-full mx-auto relative">
          <h1 className="text-center font-extrabold text-[#17447a] text-2xl md:text-3xl mb-6">
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
            {editionpen.map((doc, index) => {
              const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

              const handleMove = (
                e: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                const { left, top, width, height } =
                  e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                setTilt({ x: y * -threshold, y: x * threshold });
              };

              return (
                <div
                  key={index}
                  className="overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80"
                  onMouseMove={handleMove}
                  onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                  style={{
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <Image
                      src={doc.image}
                      alt={`Document cover ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-48 md:w-52 h-auto border border-primary bg-white object-cover mb-4"
                    />
                    <p className="text-primary text-sm font-medium text-start">
                      {doc.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
