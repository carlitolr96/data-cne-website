"use client";

import Image from "next/image";
import { benefitsIonizantes } from "@/assets/assets";

export default function IonizingBenefits() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor: "#13346D",
            backgroundImage: "url('/BannerElectrica.jpg')",
            backgroundBlendMode: "multiply",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 px-6">
        <div className="text-center mb-12 md:mb-16 max-w-5xl">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4">
            Beneficios de las aplicaciones de las radiaciones ionizantes 
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full">
          {benefitsIonizantes.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center cursor-pointer">
              <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full h-30 flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-center justify-center gap-4 w-full">
                  {benefit.image.map((IconSrc, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="flex flex-col items-center"
                    >
                      <Image
                        src={IconSrc}
                        alt={`icon-${imageIndex}`}
                        width={60}
                        height={60}
                        className="w-10 h-10 md:w-15 md:h-15 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-2xl border-1 border-transparent group-hover:border-white/80 transition-all duration-300" />
              </div>

              <h3 className="text-white text-xl md:text-2xl font-bold uppercase mt-4 text-center">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
