"use client";

import { useState } from "react";
import Image from "next/image";
import Boton from "@/components/Boton";
import ModularChart from "@/components/ModularChart";
import { assets } from "@/assets/assets";

export default function UsoRadiaciones() {
  const [chartData] = useState([
    { value: 90, label: "", color: "#1D3C51" },
    { value: 28, label: "", color: "#144C84" },
  ]);

  return (
    <section className="bg-white py-12 px-6 md:px-16 text-center">
      <h2 className="text-xl md:text-2xl font-black text-[#13346D] mb-5">
        ¿DÓNDE SE USAN EN EL PAÍS?
      </h2>
      <p className="text-primary max-w-2xl mx-auto mb-12 text-2xl">
        En República Dominicana las radiaciones ionizantes se aplican en
        diferentes prácticas, por ejemplo:
      </p>

      <div className="flex flex-col justify-center items-center mb-6 gap-5">
        <div className="bg-primary rounded-lg shadow-lg p-6 max-w-5xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src={assets.MedicalMedicineARN}
              alt="Icon CNE"
              width={50}
              height={50}
              priority
            />
            <div className="text-[#FFBF00] px-6 py-3 rounded-lg font-black text-lg flex-shrink-0 uppercase">
              Medicina:
            </div>

            <div className="flex flex-col md:flex-row gap-6 flex-1 justify-between">
              <div className="flex flex-col justify-center items-center text-center text-white font-montserrat flex-1">
                <span className="font-medium text-sm">Radiodiagnóstico</span>
              </div>

              <div className="hidden md:block w-0.5 bg-[#FFBF00] self-stretch"></div>

              <div className="flex flex-col justify-center items-center text-center text-white flex-1">
                <span className="font-medium text-sm">Radioterapia </span>
              </div>

              <div className="hidden md:block w-0.5 h-10 bg-[#FFBF00] self-stretch"></div>

              <div className="flex flex-col justify-center items-center text-center text-white flex-1">
                <span className="font-medium text-sm">Medicina nuclear </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FF9000] rounded-lg shadow-lg p-6 max-w-5xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src={assets.FactoryIndustryARM}
              alt="Icon CNE"
              width={40}
              height={40}
              priority
            />
            <div className="text-primary px-6 py-3 rounded-lg font-black text-lg flex-shrink-0 uppercase">
              Industria:
            </div>

            <div className="flex flex-col md:flex-row gap-6 flex-1 justify-between">
              <div className="flex flex-col items-center justify-center text-center text-white font-montserrat flex-1">
                <span className="font-medium text-sm">
                  Ensayos no destructivos
                </span>
              </div>

              <div className="hidden md:block w-0.5 bg-primary self-stretch"></div>

              <div className="flex flex-col items-center justify-center text-center text-white flex-1">
                <span className="font-medium text-sm">
                  Medición de densidad, humedad y nivel llenado
                </span>
              </div>

              <div className="hidden md:block w-0.5 bg-primary self-stretch"></div>

              <div className="flex flex-col items-center justify-center text-center text-white flex-1">
                <span className="font-medium text-sm">Esterilización</span>
              </div>
              <div className="hidden md:block w-0.5 bg-primary self-stretch"></div>

              <div className="flex flex-col items-center text-center justify-center text-white flex-1">
                <span className="font-medium text-sm">
                  Producción de radioisótopos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="w-70">
          <ModularChart data={chartData} />
        </div>

        <div className="max-w-sm">
          <h1 className="text-primary text-end font-medium text-md">
            De las autorizaciones emitidas corresponden a la práctica de
            Radiodiagnóstico
          </h1>
          <div className="flex flex-col items-end mt-4">
            <p className="text-md font-medium text-primary mb-3 text-right">
              Para más información
            </p>
            <Boton href="/" icon="TapIcon" iconPosition="right">
              Ir al tablero
            </Boton>
          </div>
        </div>
      </div>
    </section>
  );
}
