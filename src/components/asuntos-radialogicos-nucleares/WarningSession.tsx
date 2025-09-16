"use client";

export default function WarningSession() {
  return (
    <section className="relative w-full flex items-center justify-center sm:justify-start overflow-hidden h-[400px] sm:h-[410px] md:h-[390px] bg-[url('/BenefitsImg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-primary" />
      <div className="absolute inset-0 bg-primary opacity-30" />
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 flex justify-center">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-black leading-tight mb-3 sm:mb-5 uppercase">
              Pero si no se manejan bien, pueden ser peligrosas. Por eso es
              clave tener controles y licencias adecuadas. 
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
