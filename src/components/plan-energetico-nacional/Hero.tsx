"use client";

import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import DocumentPEN from "@/components/plan-energetico-nacional/DocumentPEN";

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
                rgba(19, 52, 109, 1) 50%, 
                rgba(37, 102, 211, 0.1) 100%
              ),
              url('/BannerPEN.jpg')
            `,
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4">
        <NavBar />
        <div className="max-w-4xl text-center text-white mt-10 md:mt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium uppercase leading-tight">
            <span className="font-extrabold">Plan Energético</span>
            <br />
            <span className="font-extrabold">Nacional</span> 2025-2038
          </h1>
        </div>
      </div>
      <div className="absolute z-5 top-[55vh] md:top-[66vh] left-1/2 transform -translate-x-1/2 md:left-[32%] md:translate-x-0 w-auto max-w-[280px] sm:max-w-[300px] md:max-w-none right-auto">
        <div
          className="overflow-hidden transition-transform duration-200 ease-out cursor-pointer w-[280px] sm:w-[300px] md:w-auto"
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
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
