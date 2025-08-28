"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import gsap from "gsap";

export default function Goal() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [numberDef, setNumberDef] = useState(0);
  const [dateProv, setDateProv] = useState(0);
  const [femenino, setFemenino] = useState(0);
  const [masculino, setMasculino] = useState(0);

  const finalValues = {
    numberDef: 50000,
    dateProv: 65716,
    femenino: 33302,
    masculino: 32414,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDateProv(0);
            setNumberDef(0);
            setFemenino(0);
            setMasculino(0);

            gsap.to(
              { val: 0 },
              {
                val: finalValues.numberDef,
                duration: 1.5,
                ease: "power1.out",
                onUpdate: function () {
                  setDateProv(Math.floor(this.targets()[0].val));
                },
              }
            );

            gsap.to(
              { val: 0 },
              {
                val: finalValues.dateProv,
                duration: 1.5,
                ease: "power1.out",
                onUpdate: function () {
                  setDateProv(Math.floor(this.targets()[0].val));
                },
              }
            );

            gsap.to(
              { val: 0 },
              {
                val: finalValues.femenino,
                duration: 1.5,
                ease: "power1.out",
                onUpdate: function () {
                  setFemenino(Math.floor(this.targets()[0].val));
                },
              }
            );

            gsap.to(
              { val: 0 },
              {
                val: finalValues.masculino,
                duration: 2,
                ease: "power1.out",
                onUpdate: function () {
                  setMasculino(Math.floor(this.targets()[0].val));
                },
              }
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [
    finalValues.numberDef,
    finalValues.dateProv,
    finalValues.femenino,
    finalValues.masculino,
  ]);

  return (
    <section className="bg-light relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row relative">
        <div className="flex flex-col items-center justify-center bg-green text-white px-8 py-6 sm:rounded-r-full rounded-r-none z-10">
          <h1 className="font-extrabold text-base sm:text-2xl uppercase mt-0 sm:mt-2 px-15">
            Meta
          </h1>
        </div>

        <div className="hidden sm:block absolute top-0 left-[calc(35.2rem)] w-[calc(95%-8rem)] h-full bg-gray z-11"></div>

        <div className="flex flex-wrap sm:flex-1 items-center justify-center sm:justify-around px-6 py-4 gap-6 relative z-20">
          <div className="flex items-center sm:items-center justify-center gap-3 min-w-[120px]">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-primary">
              {numberDef.toLocaleString()}
            </h1>
          </div>

          <div className="hidden sm:block w-0.5 h-16 bg-red-600"></div>

          <div className="flex items-center justify-center gap-3 min-w-[120px]">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-primary">
              {dateProv.toLocaleString()}
            </h1>
            <span className="text-sm sm:text-[17px] text-primary leading-tight">
              A la fecha
            </span>
          </div>

          <div className="hidden sm:block w-0.5 h-16 bg-red-600"></div>

          <div className="flex flex-col items-center sm:items-end text-center sm:text-right min-w-[140px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-primary">
              {femenino.toLocaleString()}
            </h1>
            <span className="text-sm sm:text-[17px] text-primary">
              Femenino
            </span>
          </div>

          <div className="hidden sm:block w-0.5 h-16 bg-red-600"></div>

          <div className="flex flex-col items-center sm:items-end text-center sm:text-right min-w-[140px]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-primary">
              {masculino.toLocaleString()}
            </h1>
            <span className="text-sm sm:text-[17px] text-primary">
              Masculino
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
