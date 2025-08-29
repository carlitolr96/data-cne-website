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

  const format = new Intl.NumberFormat("es-DO");

  const finalValues = {
    numberDef: 50000,
    dateProv: 65716,
    femenino: 33302,
    masculino: 32414,
  } as const;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setNumberDef(0);
          setDateProv(0);
          setFemenino(0);
          setMasculino(0);

          const n1 = { val: 0 };
          const n2 = { val: 0 };
          const n3 = { val: 0 };
          const n4 = { val: 0 };

          gsap.to(n1, {
            val: finalValues.numberDef,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: () => setNumberDef(Math.floor(n1.val)),
          });

          gsap.to(n2, {
            val: finalValues.dateProv,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: () => setDateProv(Math.floor(n2.val)),
          });

          gsap.to(n3, {
            val: finalValues.femenino,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: () => setFemenino(Math.floor(n3.val)),
          });

          gsap.to(n4, {
            val: finalValues.masculino,
            duration: 2,
            ease: "power1.out",
            onUpdate: () => setMasculino(Math.floor(n4.val)),
          });

          observer.disconnect();
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-light relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row relative">
        <div className="flex flex-col items-center justify-center bg-green text-white px-8 py-6 sm:rounded-r-full rounded-r-none z-10">
          <h1 className="font-extrabold text-base sm:text-2xl uppercase mt-0 sm:mt-2 px-15">
            Meta
          </h1>
        </div>

        <div className="hidden sm:block absolute top-0 left-[calc(31.5rem)] w-[calc(95%-8rem)] h-full bg-gray z-11"></div>

        <div className="flex flex-wrap sm:flex-1 items-center justify-center sm:justify-around px-6 py-4 gap-6 relative z-20">
          <div className="flex items-center sm:items-center justify-center gap-3 min-w-[120px]">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-primary">
              {format.format(numberDef)}
            </h1>
          </div>

          <div className="hidden sm:block w-0.5 h-16 bg-red"></div>

          <div className="flex flex-col items-center justify-center gap-3 min-w-[120px]">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-primary">
              {format.format(dateProv)}
            </h1>
            <span className="text-sm sm:text-[17px] text-primary leading-tight">
              A la fecha
            </span>
          </div>

          <div className="hidden sm:block w-0.5 h-16 bg-red"></div>

          <div className="flex flex-col items-center text-center sm:text-right min-w-[140px]">
            <div className="flex gap-2">
              <Image
                src={assets.FemaleIcon}
                alt="CNE Icon"
                width="30"
                height="30"
              />
              <h1 className="text-2xl sm:text-5xl font-extrabold text-primary">
                {format.format(femenino)}
              </h1>
            </div>
            <span className="text-sm sm:text-[17px] text-primary">
              Femenino
            </span>
          </div>

          <div className="hidden sm:block w-0.5 h-16 bg-red"></div>

          <div className="flex flex-col items-center text-center sm:text-right min-w-[140px]">
            <div className="flex gap-2">
              <Image
                src={assets.MasculeIcon}
                alt="CNE Icon"
                width="30"
                height="30"
              />
              <h1 className="text-2xl sm:text-5xl font-extrabold text-primary">
                {format.format(masculino)}
              </h1>
            </div>
            <span className="text-sm sm:text-[17px] text-primary">
              Masculino
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
