"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { slideoperations } from "@/assets/assets";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function Satisfaction() {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-primary"></div>
      </div>

      <div className="relative w-full max-w-7xl flex flex-col items-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet w-3 h-3 bg-gray-300 opacity-100 rounded-full mx-1 two",
            bulletActiveClass:
              "swiper-pagination-bullet-active w-5 h-5 rounded-full mx-1 two",
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="overflow-hidden w-[85%] sm:w-[80%] lg:w-[70%] mx-auto"
        >
          {slideoperations.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] xl:h-[580px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={slide.img}
                  alt={slide.location}
                  fill
                  className="object-cover object-center"
                  priority
                  quality={70}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-4" />

        <div className="w-[80%] sm:w-[30%] md:w-[40%] h-25 sm:h-[100] rounded-xl bg-green text-white shadow-lg flex items-center justify-center mt-13">
          <div className="flex items-center justify-center gap-10 px-4 h-full text-center">
            <h1 className="text-xl text-start sm:text-2xl w-min font-black uppercase">
              Satisfacción al cliente
            </h1>

            <div className="hidden sm:block w-0.5 h-16 bg-light"></div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black">
              100%
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
