"use client";

import React from "react";
import NavBar from "@/components/NavBar";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-100 overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(19, 52, 109, 1) 15%, rgba(37, 102, 211, 0.1) 110%),
              url('./BannerElectica.jpg')
            `,
            backgroundBlendMode: "multiply",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <NavBar />
        <div className="max-w-6xl text-center text-white">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-tight">
            “Hay un país en el mundo colocado en el mismo trayecto del sol.”
            <span className="font-extrabold italic">
              <br />– Pedro Mir
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
