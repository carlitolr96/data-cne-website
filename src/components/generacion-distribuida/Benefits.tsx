"use client";

import Boton from "@/components/Boton";
import { requirements, benefits } from "@/assets/assets";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-gray"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-12 uppercase font-montserrat">
            ¿Qué necesito para conectarme?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src={req.icon}
                    alt={req.title}
                    width={32}
                    height={32}
                    className="text-green-600"
                  />
                </div>
                <p className="text-primary text-sm font-medium leading-relaxed max-w-xs">
                  {req.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex flex-row-reverse w-full h-60 mb-16">
          <div className="shrink-0 relative w-2/3 sm:w-2/3 md:w-2/3 rounded-t-xl overflow-hidden sm:rounded-e-xl sm:rounded-s-none">
            <Image
              src="/benefits-image.jpg"
              alt="Card Image"
              className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
              fill
            />
          </div>

          <div className="flex flex-1 w-1/3">
            <div className="p-4 flex flex-col h-full sm:p-7 justify-center">
              <p className="text-primary text-xl font-medium">
                Una vez aprobado,{" "}
                <span className="font-bold">
                  tu sistema puede operar legalmente y estar conectado a la red.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-12 uppercase font-montserrat">
            ¿Qué beneficios tengo?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 text-left ${
                  index !== benefits.length - 1
                    ? "border-r-2 border-red-500 pr-2"
                    : ""
                }`}
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={35}
                    height={35}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-primary font-extrabold text-lg">
                    {benefit.title}
                    <span className="font-medium leading-relaxed ml-1.5">
                      {benefit.description}
                    </span>
                  </h3>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4 justify-center">
              <Boton
                href="/"
                icon="TapIcon"
                iconPosition="right"
                className="w-[70%] h-10"
              >
                CONOCE MAS AQUI
              </Boton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
