"use client";

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import NavBar from "@/components/impulso-energias-renovables/NavBar";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2/3">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/100 via-blue-900/60 to-primary/100 z-10 h-3/4"></div>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Background-Video-CNE.mp4"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('./BannerEstadisticas.jpg')`,
            }}
          />
        </div>
      </div>

      <div className="relative z-30 flex flex-col min-h-screen">
        <header className="flex justify-center pt-12 pb-8">
          <div className="text-white">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Image
                      src={assets.logoDataCNE}
                      alt="Data CNE"
                      width={200}
                      height={80}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex justify-center px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-4 max-w-7xl w-full">
            <NavBar />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-end px-8 pb-16">
          <div className="max-w-2xl text-right text-white">
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-light leading-tight mb-6">
              Las <span className="font-bold">energías renovables</span>
              <br />
              son el motor de un <span className="font-bold">futuro</span>
              <br />
              <span className="font-bold">sostenible, impulsando</span>
              <br />
              <span className="font-bold">desarrollo, innovación</span> y
              <br />
              bienestar para todos.
            </h1>

            <div className="flex justify-end mt-4">
              <div className="w-80 h-1 bg-red-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
