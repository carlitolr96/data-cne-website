"use client";

export default function StorySession() {
  return (
    <section className="relative w-full flex items-center justify-center sm:justify-start overflow-hidden h-[400px] sm:h-[410px] md:h-[600px] bg-[url('/TowerSolar.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-primary" />
      <div className="absolute inset-0 bg-primary opacity-30" />

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 flex justify-center sm:justify-start">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-3xl sm:text-4xl md:text-8xl font-extrabold leading-tight mb-3 sm:mb-5">
              +20 MIL
            </h1>
            <p className="uppercase text-sm sm:text-lg md:text-3xl font-semibold mb-2 sm:mb-4">
              usuarios están inscritos en el Programa de Medición Neta en RD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
