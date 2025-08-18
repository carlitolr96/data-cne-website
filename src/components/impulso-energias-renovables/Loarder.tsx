"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Loader: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percent2019Ref = useRef<HTMLDivElement>(null);
  const percent2025Ref = useRef<HTMLDivElement>(null);
  const percent2030Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });

    // Animar barra
    tl.fromTo(
      progressRef.current,
      { width: "0%" },
      { width: "100%", duration: 3.5, ease: "power2.out" }
    );

    const animateNumber = (el: HTMLDivElement | null, endValue: number) => {
      if (!el) return;

      const obj = { val: 0 };

      gsap.to(obj, {
        val: endValue,
        duration: 1.5,
        ease: "power1.out",
        onUpdate: () => {
          el.innerText = `${Math.floor(obj.val)}%`;
        },
      });
    };

    animateNumber(percent2019Ref.current, 7);
    animateNumber(percent2025Ref.current, 25);
    animateNumber(percent2030Ref.current, 30);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full flex items-center justify-center overflow-hidden
        h-[600px] sm:h-[550px] min-h-[450px]
        bg-[url('/image-loader.jpg')] bg-cover bg-center
      "
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-primary z-0" />
      <div className="absolute inset-0 bg-primary opacity-30 z-10" />

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold mb-10 leading-tight">
            Cerca del
            <span className="bg-red px-3 py-1">
              25% de la energía que consumes en tu día a día
            </span>
            proviene de fuentes renovables.
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="text-center items-center flex flex-col">
            <div
              ref={percent2019Ref}
              className="text-2xl sm:text-3xl font-bold mb-1"
            >
              0%
            </div>
            <div
              className="w-5 h-5 rounded-full border-2 border-white my-2"
              style={{ backgroundColor: "#FFBF00" }}
            />
            <div className="text-sm sm:text-base font-semibold">2019</div>
          </div>

          <div className="flex-1 max-w-md relative">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden mt-4">
              <div
                ref={progressRef}
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #FFBF00 0%, #7DB925 70%, #19E53E 100%)",
                }}
              />
            </div>
          </div>

          <div className="text-center items-center flex flex-col">
            <div
              ref={percent2025Ref}
              className="text-2xl sm:text-3xl font-bold mb-1"
            >
              0%
            </div>
            <div
              className="w-5 h-5 rounded-full mx-auto border-2 border-white my-1"
              style={{ backgroundColor: "#7DB925" }}
            />
            <div className="text-sm sm:text-base font-semibold">2025</div>
          </div>

          <div className="flex-1 max-w-md relative">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden mt-4" />
          </div>

          <div className="text-center items-center flex flex-col">
            <div
              ref={percent2030Ref}
              className="text-2xl sm:text-3xl font-bold mb-1"
            >
              0%
            </div>
            <div
              className="w-5 h-5 rounded-full mx-auto border-2 border-white my-1"
              style={{ backgroundColor: "#19E53E" }}
            />
            <div className="text-sm sm:text-base font-semibold">2030</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
