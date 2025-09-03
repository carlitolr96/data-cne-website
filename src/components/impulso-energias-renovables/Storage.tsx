"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Boton from "@/components/Boton";
import Image from "next/image";
import { animateNumber } from "@/utils/animations";

export default function Storage() {
  const proyectosRef = useRef<HTMLHeadingElement | null>(null);
  const energiaRef = useRef<HTMLParagraphElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (proyectosRef.current) {
      animateNumber(proyectosRef.current, 25);
    }
    if (energiaRef.current) {
      animateNumber(energiaRef.current, 234958);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white relative overflow-hidden py-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative">
        <div className="hidden md:block absolute top-1/2 left-1/2 w-[2px] h-[35%] bg-red transform -translate-x-1/2 -translate-y-1/2" />
        <div className="flex flex-col space-y-6 text-primary">
          <div>
            <div className="flex items-center gap-3">
              <Image src={assets.Batery} alt="Batería" className="w-10 h-10" />
              <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl uppercase">
                Almacenamiento: Tecnología en crecimiento para un sistema
                estable
                <span className="block w-12 h-[3px] bg-red mt-2" />
              </h2>
            </div>
          </div>

          <p className="text-base font-medium leading-relaxed">
            Cada vez más proyectos renovables incorporan sistemas de
            almacenamiento para garantizar estabilidad, flexibilidad y
            confiabilidad, optimizando el uso de la energía solar y
            fortaleciendo la seguridad del suministro eléctrico.
          </p>

          <div className="flex justify-center items-center py-4">
            <Image
              src={assets.Energy}
              alt="Energía"
              className="w-40 md:w-200 h-auto"
            />
          </div>

          <span className="block w-full h-[1px] bg-red" />

          <p className="text-sm md:text-base font-medium leading-relaxed">
            La CNE ha sido clave en este avance, promoviendo que las nuevas
            concesiones integren baterías y acompañando técnicamente a los
            desarrolladores para acelerar su implementación en el país.
          </p>

          <div className="flex justify-center">
            <Boton
              href="/"
              icon="TapIcon"
              iconPosition="right"
              className="w-fit"
            >
              VER NORMATIVAS AQUÍ
            </Boton>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end text-primary space-y-10">
          <div className="w-full text-end">
            <h3 className="font-extrabold text-xl sm:text-2xl uppercase">
              Estatus
            </h3>
            <span className="block w-12 h-[3px] bg-red mt-1 ml-auto" />

            <div className="flex items-center justify-end gap-3 mt-6">
              <h1
                ref={proyectosRef}
                className="text-4xl sm:text-6xl font-extrabold"
              >
                0
              </h1>
              <span className="text-sm sm:text-base leading-tight">
                Proyectos fotovoltaicos
                <br /> con almacenamiento
              </span>
            </div>

            <p
              ref={energiaRef}
              className="font-extrabold text-2xl md:text-7xl mt-4"
            >
              0 MWh
            </p>
          </div>

          <Image
            src={assets.Storage}
            alt="Sistema de baterías"
            className="max-w-xs md:max-w-md"
          />

          <div className="w-full text-end">
            <h3 className="font-extrabold text-xl sm:text-2xl uppercase">
              Beneficios
            </h3>
            <span className="block w-12 h-[3px] bg-red mt-1 ml-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="text-end">
              <p className="text-sm md:text-base">
                <span className="font-semibold italic">
                  Optimización de recursos:
                </span>{" "}
                aprovecha excedentes de generación para usarlos después.
              </p>
              <p className="text-sm md:text-base mt-3">
                <span className="font-semibold italic">
                  Reducción de costos:
                </span>{" "}
                disminuye la necesidad de generación con combustibles fósiles.
              </p>
            </div>
            <div className="text-end">
              <p className="text-sm md:text-base">
                <span className="font-semibold italic">
                  Mayor penetración renovable:
                </span>{" "}
                facilita integrar más energía solar sin comprometer la red.
              </p>
              <p className="text-sm md:text-base mt-3">
                <span className="font-semibold italic">
                  Seguridad energética:
                </span>{" "}
                refuerza la confiabilidad de un sistema eléctrico aislado como
                el dominicano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
