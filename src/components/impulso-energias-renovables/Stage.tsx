"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { stageicon } from "@/assets/assets";
import Boton from "@/components/Boton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StageItemProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function Stage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=4000",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stage-section bg-primary text-white py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative px-6">
        <div className="flex justify-center items-center mb-16">
          <h2 className="text-center text-lg font-bold bg-green px-6 py-3 inline-block mx-auto rounded">
            ETAPAS DE UN PROYECTO DE GENERACIÓN RENOVABLE
          </h2>
        </div>

        <div className="relative antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-green absolute h-full left-1/2 transform -translate-x-1/2" />

          {stageicon.map((stage: StageItemProps, index: number) => (
            <div
              key={stage.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="mt-6 sm:mt-0 sm:mb-12 relative opacity-0"
            >
              <div className="flex flex-col sm:flex-row items-center">
                <div
                  className={`flex w-full mx-auto items-center ${
                    index % 2 === 0
                      ? "justify-start sm:pr-8"
                      : "justify-end sm:pl-8"
                  }`}
                >
                  <div className="w-full sm:w-1/2">
                    <div className="p-6 bg-white rounded shadow-md">
                      <h3 className="font-bold text-primary text-lg">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-primary font-medium">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-full bg-green border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <Image
                    src={stage.icon}
                    alt={stage.title}
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="font-bold text-white text-lg">
            ¿Eres un desarrollador o inversionista? <br />
            <span className="font-medium">
              Consulta los procedimientos de obtención de estos permisos.
            </span>
          </p>
          <Boton
            href="/"
            icon="TapIcon"
            iconPosition="right"
            className="uppercase mt-6 w-auto px-6 py-3"
          >
            Conoce más aquí
          </Boton>
        </div>
      </div>
    </section>
  );
}
