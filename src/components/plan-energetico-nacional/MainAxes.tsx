"use client";

import { mainaxes } from "../../assets/assets";

export default function MainAxes() {
  return (
    <section className="bg-white py-16 border-b-2 border-red">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <div className="w-full text-center">
          <h1 className="font-extrabold uppercase text-primary text-2xl md:text-3xl mb-20">
            Ejes Principales
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {mainaxes.map((axes, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center rounded-full h-14 w-14 bg-green mb-4">
                  <span className="text-white font-bold text-xl">
                    {axes.number}
                  </span>
                </div>

                <div className="text-primary text-sm md:text-base">
                  <h2 className="font-extrabold text-md mb-1">
                    {axes.title}
                    <p className="font-normal">{axes.description}</p>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
