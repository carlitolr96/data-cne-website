"use client";

import React from "react";
import Image from "next/image";
import NavBar from "../NavBar";
import DocumentPEN from "./DocumentPEN";

export default function Hero() {
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
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom, 
                rgba(19, 52, 109, 1) 15%, 
                rgba(37, 102, 211, 0.1) 110%
              ),
              url('/BannerPEN.jpg')
            `,
            backgroundBlendMode: "multiply",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4">
        <NavBar />
        <div className="max-w-4xl text-center text-white mt-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium uppercase leading-tight">
            <span className="font-extrabold">Plan Energético</span>
            <br />
            <span className="font-extrabold">Nacional</span> 2025-2038
          </h1>
        </div>
      </div>

      <div className="absolute z-20 top-[63vh] left-[32%]">
        <div
          className="overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80"
          onMouseMove={handleMove}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            setTilt({ x: 0, y: 0 })
          }
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          <Image
            src="/Portadas-PEN2025-05.png"
            alt="Portada PEN 2025-2038"
            width={300}
            height={400}
            className="object-cover shadow-2xl rounded-md"
          />
        </div>
      </div>

      <DocumentPEN />
    </section>
  );
}
