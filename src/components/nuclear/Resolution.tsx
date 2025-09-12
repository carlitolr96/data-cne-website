"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Resolution() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const threshold = 12;

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2 * threshold;
    const y = ((e.clientY - top) / height - 0.5) * 2 * threshold;
    setTilt({ x: y * -1, y: x });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <div className="flex flex-col w-full relative pl-6 ">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#FF9000] rounded"></div>
          <h1 className="text-white text-2xl md:text-4xl lg:text-3xl font-bold leading-tight">
            EN LA REPÚBLICA DOMINICANA EL USO
            <br />
            DE LAS RADIACIONES IONIZANTES ES
            <br />
            REGULADO APLICANDO LAS SIGUIENTES
            <br />
            NORMATIVAS:
          </h1>
        </div>

        <div
          className="flex-1 overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          <div className="flex items-center">
            <Image
              src="/BannerPanelRD.jpg"
              alt="Resolution Document"
              width={100}
              height={100}
              priority
              quality={70}
              className="md:w-52 w-48 h-64 bg-cover bg-center rounded-lg shadow-lg border-2 border-gray-200 mb-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
