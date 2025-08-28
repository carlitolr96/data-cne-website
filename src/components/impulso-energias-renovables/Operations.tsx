"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { assets, slideoperations } from "../../assets/assets";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/pagination";

export default function Operations() {
  const projectsRef = useRef<HTMLHeadingElement | null>(null);
  const capacityRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animateNumbers = () => {
      if (projectsRef.current) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: 35,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            projectsRef.current!.textContent = `${Math.floor(obj.val)} PROYECTOS`;
          },
        });
      }

      if (capacityRef.current) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: 1436.31,
          duration: 1.8,
          ease: "power3.out",
          onUpdate: () => {
            capacityRef.current!.textContent = `${obj.val.toFixed(2)} MW`;
          },
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="bg-light py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 bg-red px-4 py-2 w-fit mb-8">
            <Image
              src={assets.BoxChart}
              alt="Operaciones"
              width={25}
              height={25}
            />
            <span className="text-white font-bold text-md md:text-4xl uppercase">
              En Operación
            </span>
          </div>

          <h2
            ref={projectsRef}
            className="text-primary text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight"
          >
            0 PROYECTOS
          </h2>

          <p className="text-primary text-base md:text-lg max-w-md">
            con una capacidad instalada de
            <br />
            <span
              ref={capacityRef}
              className="font-extrabold text-primary"
            >
              0 MW
            </span>
            , están transformando <br />
            la matriz energética
          </p>

          <div className="h-0.5 w-full bg-red my-6 lg:hidden"></div>
        </div>

        <div className="hidden lg:block w-0.5 h-50 bg-red"></div>

        <div className="flex-1 relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet w-3 h-3 bg-gray-300 opacity-100 rounded-full mx-1",
              bulletActiveClass:
                "swiper-pagination-bullet-active w-5 h-5 rounded-full mx-1",
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="overflow-hidden w-full max-w-[600px] mx-auto"
          >
            {slideoperations.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[320px] overflow-hidden">
                  <Image
                    src={slide.img}
                    alt={slide.location}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white">
                    <Image
                      src={assets.LocartionIcon}
                      alt="Ubicación"
                      width={18}
                      height={18}
                    />
                    <span className="text-xs sm:text-sm md:text-base">
                      {slide.location}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-4" />
        </div>
      </div>
    </section>
  );
}