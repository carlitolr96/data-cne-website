"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stageicon } from "@/assets/assets";
import Boton from "@/components/Boton";

gsap.registerPlugin(ScrollTrigger);

export default function Stage() {
  const pathRefs = useRef<Array<SVGPathElement | null>>([]);

  useEffect(() => {
    pathRefs.current.forEach((path) => {
      if (!path) return;
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: path.closest(".stage-item"),
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="stage-section bg-primary text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative px-6">
        <div className="flex justify-center items-center">
          <h2 className="text-center text-lg font-bold bg-green px-4 py-2 inline-block mx-auto">
            ETAPAS DE UN PROYECTO DE GENERACIÓN RENOVABLE
          </h2>
        </div>

        <div className="mt-12 flex flex-col">
          {stageicon.map((stage, index) => (
            <div
              key={stage.id}
              className={`stage-item relative flex flex-col md:flex-row items-center gap-6 ${
                stage.title === "CONCESIÓN DEFINITIVA" ||
                stage.title === "OPERACIÓN"
                  ? "md:flex-row-reverse"
                  : index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              <div className="shrink-0">
                <Image
                  src={stage.icon!}
                  alt={stage.title}
                  width={60}
                  height={60}
                  className="opacity-90"
                />
              </div>

              <div className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1044 209"
                  width="100%"
                  height="auto"
                  className="block"
                >
                  <path
                    ref={(el) => {
                      pathRefs.current[index] = el;
                    }}
                    d="M1043.27 204.168C962.021 206.781 880.797 207.747 799.548 208.248C758.936 208.427 718.299 208.642 677.687 208.159C637.075 207.658 596.464 206.888 555.826 206.226C515.215 205.439 474.577 205.224 433.966 205.296C413.647 205.296 393.354 205.457 373.035 205.636L312.105 206.441C271.493 207.014 230.856 207.765 190.244 208.159C149.632 208.553 108.995 208.714 68.3831 208.964L63.4986 209L61.4843 205.725L46.2517 180.922C41.191 172.654 36.0547 164.405 31.1198 156.101L16.1642 131.227C11.1538 122.941 6.21893 114.638 1.33443 106.298L0 104.026L1.33443 101.86C11.4811 85.3251 21.4767 68.7361 31.7493 52.2545C42.0219 35.7549 52.1937 19.2196 62.5922 2.77378L64.3546 0L68.3831 0.0536861L119.519 0.73371L170.656 1.59269C187.701 1.89691 204.746 2.25482 221.792 2.66641C238.837 3.06011 255.883 3.43591 272.928 3.97277C273.356 3.97277 273.658 4.2412 273.658 4.52753C273.658 4.81385 273.331 5.0286 272.928 5.04649C255.883 5.58335 238.837 5.95916 221.792 6.35286C204.746 6.78234 187.701 7.14025 170.656 7.42658L119.519 8.28555L68.3831 8.96558L74.1488 6.24548C64.6567 22.9777 54.9129 39.6382 45.2698 56.3167C35.6518 73.0131 25.7318 89.62 15.9628 106.263V101.825C21.0487 110.092 26.0591 118.378 30.9939 126.681L45.8992 151.574C50.9096 159.859 55.7186 168.199 60.6283 176.52L75.2818 201.502L68.3831 198.263C108.995 198.513 149.632 198.692 190.244 199.068C230.856 199.462 271.493 200.213 312.105 200.786L373.035 201.591C393.354 201.77 413.647 201.913 433.966 201.931C474.577 202.003 515.215 201.788 555.826 201.001C596.438 200.339 637.05 199.569 677.687 199.068C718.299 198.567 758.936 198.8 799.548 198.979C880.797 199.462 962.021 200.428 1043.27 203.059C1043.7 203.059 1044 203.327 1044 203.613C1044 203.9 1043.67 204.115 1043.27 204.132V204.168Z"
                    stroke="#23B53E"
                    strokeWidth="4"
                    fill="none"
                  />

                  <foreignObject x="24" y="18" width="996" height="173">
                    <div className="w-full h-full flex items-center justify-between px-6 md:px-20">
                      {stage.leftLabel && (
                        <div className="hidden md:flex flex-col items-start gap-1 shrink-0 text-left">
                          <span className="uppercase text-[11px] leading-tight font-semibold opacity-90">
                            {stage.leftLabel}
                          </span>
                          <span className="text-[40px] leading-none font-extrabold">
                            {String(stage.id).padStart(2, "0")}
                          </span>
                        </div>
                      )}

                      <div className="flex-1 flex flex-col md:flex-row items-center gap-5">
                        <div className="flex flex-col gap-2 shrink-0">
                          <h2 className="uppercase text-md leading-tight font-semibold opacity-90 max-w-[170px]">
                            {stage.title}
                          </h2>
                          <div className="text-4xl md:text-6xl leading-none font-extrabold">
                            {String(stage.id).padStart(2, "0")}
                          </div>
                        </div>

                        <div className="hidden md:block w-0.5 h-25 bg-green opacity-90" />

                        <p className="text-sm md:text-base leading-relaxed opacity-95 flex-1">
                          {stage.description}
                        </p>
                      </div>

                      {stage.rightLabel && (
                        <div className="hidden md:flex flex-col items-end gap-1 shrink-0 text-right">
                          <span className="uppercase text-[11px] leading-tight font-semibold opacity-90">
                            {stage.rightLabel}
                          </span>
                          <span className="text-[40px] leading-none font-extrabold">
                            {String(stage.id).padStart(2, "0")}
                          </span>
                        </div>
                      )}
                    </div>
                  </foreignObject>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center text-center">
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
            className="uppercase mt-5 w-auto px-6 py-3"
          >
            Conoce más aquí
          </Boton>
        </div>
      </div>
    </section>
  );
}
