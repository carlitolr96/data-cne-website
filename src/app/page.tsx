"use client";

import Image from "next/image";
import Link from "next/link";
import { assets, categories } from "../assets/assets";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Background-Video-CNE.mp4"
        autoPlay
        muted
        loop
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/10 z-10"></div>
      <div className="absolute inset-0 bg-primary opacity-80 z-10" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <header className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-8 py-6">
        <div className="flex items-center justify-center">
          <Image
            src={assets.logoCNE}
            alt="CNE Logo"
            width={200}
            height={48}
            className="max-w-[150px] w-full h-auto"
          />
        </div>

        <button className="bg-green hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2 cursor-pointer w-full sm:w-auto justify-center">
          <Image
            src={assets.GrapChart}
            alt="Tablero Dinamico CNE"
            width={200}
            height={80}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <div className="w-px h-8 sm:h-10 bg-white"></div>
          <div className="text-left font-montserrat text-[15px] sm:text-base">
            <div className="font-light">TABLEROS</div>
            <div className="font-bold">DINÁMICOS</div>
          </div>
        </button>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Image
              src={assets.logoDataCNE}
              alt="Data CNE"
              width={200}
              height={80}
            />
          </div>
          <p className="text-white text-base sm:text-lg font-medium">
            Conectando datos,{" "}
            <span className="font-bold">impulsando energía</span>
          </p>
        </div>

        <div className="text-center max-w-4xl mb-12 sm:mb-16 px-2">
          <p className="text-white leading-relaxed font-montserrat text-sm sm:text-base">
            Aquí encontrarás cifras, indicadores y recursos educativos que
            muestran cómo la <span className="font-bold">CNE</span> impulsa el
            desarrollo energético sostenible de la{" "}
            <span className="font-bold">República Dominicana</span>, de manera
            clara, accesible y cercana a ti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href="/impulso-energias-renovables"
              className={`bg-white/95 hover:bg-white rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer ${
                index !== 0 ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`${category.color} transition-transform group-hover:scale-110`}
                >
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="w-px h-10 bg-primary"></div>
                <div className="text-left">
                  <div className="text-primary text-base sm:text-lg font-semibold">
                    {category.title}
                  </div>
                  <div className="text-primary text-base sm:text-lg font-bold">
                    {category.subtitle}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
