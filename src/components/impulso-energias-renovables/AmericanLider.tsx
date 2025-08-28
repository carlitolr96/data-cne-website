"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import gsap from "gsap";

export default function AmericanLider() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [rankingLatam, setRankingLatam] = useState(0);
  const [rankingGlobal, setRankingGlobal] = useState(0);

  const finalValues = {
    rankingLatam: 5,
    rankingGlobal: 24,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reiniciar los contadores antes de animar
            setRankingLatam(0);
            setRankingGlobal(0);

            gsap.to({ val: 0 }, {
              val: finalValues.rankingLatam,
              duration: 1.5,
              ease: "power1.out",
              onUpdate: function () {
                setRankingLatam(Math.floor(this.targets()[0].val));
              },
            });

            gsap.to({ val: 0 }, {
              val: finalValues.rankingGlobal,
              duration: 1.5,
              ease: "power1.out",
              onUpdate: function () {
                setRankingGlobal(Math.floor(this.targets()[0].val));
              },
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-screen"
      ref={sectionRef}
    >
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full"
          style={{ height: "calc(1/2 * 160%)" }}
        >
          <Image
            src={assets.AmericanLider}
            alt="CNE American"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-4 flex flex-col items-center justify-end text-center min-h-screen py-16">
        <div className="mb-34 relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">REPÚBLICA DOMINICANA, </span>
            <span className="bg-red text-white px-4 py-2 font-extrabold">
              LÍDER EN LA TRANSICIÓN
            </span>
          </h1>
          <div className="bg-red text-white px-4 py-2 font-extrabold text-2xl md:text-3xl lg:text-4xl">
            ENERGÉTICA EN AMÉRICA LATINA Y EL CARIBE
          </div>

          <p className="text-primary text-lg md:text-xl font-medium max-w-4xl mb-12 leading-relaxed relative z-10">
            El país continúa fortaleciendo su posición como uno de los destinos
            más atractivos para la inversión en energías renovables:
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
            <div className="flex items-center gap-4">
              <span className="text-primary text-6xl md:text-7xl font-extrabold">
                #{rankingLatam}
              </span>
              <div className="bg-primary text-white px-6 py-3 font-medium text-lg md:text-xl">
                En América Latina
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-primary text-6xl md:text-7xl font-extrabold">
                #{rankingGlobal}
              </span>
              <div className="bg-primary text-white px-6 py-3 font-medium text-lg md:text-xl">
                A nivel mundial
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}