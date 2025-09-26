"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import DocumentPEN from "@/components/plan-energetico-nacional/DocumentPEN";
import { textReveal } from "@/utils/animations";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const threshold = 12;

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setTilt({ x: y * -threshold, y: x * threshold });
  };

  useEffect(() => {
    textReveal(titleRef.current);
  }, []);

  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom, 
              rgba(19, 52, 109, 0.9) 50%, 
              rgba(37, 102, 211, 0.3) 120%,
              transparent 100%
            ),
            url('/BannerPEN.jpg')
          `,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4">
        <NavBar />
        <div className="max-w-4xl text-center text-white">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase leading-tight"
          >
            <span className="font-black">Plan Energético</span>
            <br />
            <span className="font-black">Nacional</span> 2025-2038
          </h1>
        </div>
      </div>
      <div className="absolute z-5 top-[55vh] md:top-[66vh] left-1/2 transform -translate-x-1/2 md:left-[22%] md:translate-x-0 w-auto max-w-[280px] sm:max-w-[300px] md:max-w-none right-auto">
        <div
          className="overflow-hidden transition-transform duration-200 ease-out cursor-pointer w-[280px] sm:w-[300px] md:w-[290px] lg:w-[350px]"
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          <Image
            src="/portadas-pen/PEN2025-05.jpg"
            alt="Portada PEN 2025-2038"
            width={420}
            height={400}
            priority
            quality={70}
            className="object-cover shadow-2xl rounded-md"
          />
        </div>
      </div>
      <DocumentPEN />
    </section>
  );
}
