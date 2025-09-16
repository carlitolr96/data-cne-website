"use client";

import Image from "next/image";

export default function RadiationSession() {
  return (
    <section className="bg-light py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-8">
            ¿Por qué es importante regular el uso de las radiaciones ionizantes?
          </h1>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-4">
            <p className="text-primary font-medium leading-relaxed">
              La radiación ionizante puede producir daños a la persona y al
              medio ambiente, y en la República Dominicana donde su uso está en
              continuo incremento como, por ejemplo: en la medicina, industria,
              agricultura, universidades, etc.
            </p>
            <p className="text-primary font-medium leading-relaxed">
              Por eso, la regulación y la protección radiológica son esenciales
              para que estas prácticas sean seguras para las personas y el
              ambiente. 
            </p>
            <p className="text-primary font-medium leading-relaxed">
              La Gerencia de Asuntos Nucleares (GAN) de la CNE  es la encargada
              de autorizar, supervisar y controlar el uso de estas fuentes para
              que se cumplan las normativas nacionales y recomendaciones
              internacionales.
            </p>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="lg:w-1/1">
              <div className="relative">
                <Image
                  src="/BannerPanelRD.jpg"
                  alt="CityPEN overlay"
                  width={500}
                  height={100}
                  priority
                  quality={70}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
