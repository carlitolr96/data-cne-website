"use client";
 
export default function StorySession() {
  return (
    <section className="relative w-full flex items-center justify-end overflow-hidden h-[600px] sm:h-[410px] min-h-[450px] bg-[url('/Tower-Solar.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-l from-primary" />
      <div className="absolute inset-0 bg-primary opacity-30" />

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 flex justify-start">
          <div className="max-w-2xl text-left text-white">
            <h1 className="text-2xl sm:text-4xl md:text-8xl font-extrabold leading-tight mb-5">
              +20 MIL
            </h1>
            <p className="uppercase text-sm sm:text-lg md:text-3xl font-semibold mb-4">
              usuarios están inscritos en el Programa de Medición Neta en RD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
