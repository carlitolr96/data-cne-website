"use client";

import { authorizationTypes } from "@/assets/assets";
import Image from "next/image";

export default function AuthorizationTypes() {
  return (
    <section className="relative w-full min-h-100 py-16 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor: "rgba(19, 52, 109, 1)",
            backgroundImage: "url('/portadas-arn/Hombre-Monitoreo.jpg')",
            backgroundBlendMode: "multiply",
          }}
        />
      </div>

      <div className=" relative max-w-7xl min-h-[80vh] mx-auto px-6 md:px-4 flex flex-col lg:flex-row items-center justify-center gap-12 text-white">
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="w-full h-full rounded-lg shadow-lg bg-gray-800/20">
              <Image
                src="/portadas-arn/Nuclear-Centro-Medico.jpg"
                alt="CityPEN overlay"
                width={500}
                height={100}
                priority
                quality={70}
                layout="responsive"
                className="w-full h-110 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col text-end justify-end text-white">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4 uppercase">
              TIPOS DE AUTORIZACIONES:
            </h2>

            <div className="space-y-2">
              {authorizationTypes.map((auth, index) => (
                <div
                  key={index}
                  className="flex justify-end items-center gap-2 text-[20px]"
                >
                  <h2 className="flex items-center gap-3">
                    {auth.title}
                    <div className="border-2 w-15 h-15 flex items-center justify-center p-1 bg-green rounded-md">
                      <span className="font-extrabold text-base leading-none">
                        {auth.code}
                      </span>
                    </div>
                  </h2>
                  {/* <span className="w-3 h-3 bg-[#FF9000] rounded-full inline-block ml-2"></span> */}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-black mb-4 uppercase">
              PERMISOS:
            </h2>

            <div className="space-y-2">
              <div className="flex justify-end items-center gap-2 text-[20px]">
                <ul className="text-md uppercase">
                  <li>Importación</li>
                  <li>Exportación Especial</li>
                  <li>Transferencia</li>
                  <li>Modificación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
