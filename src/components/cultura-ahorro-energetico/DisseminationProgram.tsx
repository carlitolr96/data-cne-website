"use client";

import { assets } from "@/assets/assets";
import React from "react";
import Boton from "@/components/Boton";
import Image from "next/image";

export default function DisseminationProgram() {
  return (
    <section className="bg-white relative overflow-hidden py-12 md:py-0">
      <div className="max-w-7xl min-h-screen mx-auto px-6 md:px-4 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-3xl text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold mb-6">
          PROGRAMA DE DIFUSIÓN EN EFICIENCIA ENERGÉTICA
        </h1>

        <div className="hidden md:flex flex-col items-center justify-center w-full h-full text-primary mt-12">
          <ul className="list-none flex flex-nowrap items-center justify-center w-full max-w-7xl">
            {["Educación Básica", "Educación Media", "Otras instituciones"].map(
              (title, i) => (
                <li
                  key={i}
                  className="flex-1 flex flex-col items-center transition-all duration-200"
                >
                  <div className="mb-5 px-6 flex flex-col items-center font-light">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {title}
                    </h3>
                  </div>

                  <div className="relative px-6 w-full flex justify-center border-t-2 border-dashed border-red">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red"></span>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-12">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl md:hidden font-bold text-primary mb-3">
              Educación Básica
            </h3>

            <Image
              src={assets.BackPackIcon}
              alt="CNE Icon"
              width="85"
              height="85"
              className="mb-2"
            />
            <p className="text-primary text-[15px] leading-relaxed mb-6">
              El programa ofrece charlas para niños/as de 6 a 11 años, de manera
              interactiva, tanto presencial, como virtual en español a nivel
              primario, de forma que se pueda crear una formación en la cultura
              del ahorro y uso eficiente de la energía eléctrica en beneficio
              del hogar y para la protección del medio ambiente.
            </p>
          </div>

          <div className="flex">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg sm:text-xl md:hidden font-bold text-primary mb-3">
                Otras instituciones
              </h3>

              <Image
                src={assets.ClassIcon}
                alt="CNE Icon"
                width="80"
                height="80"
                className="mb-4"
              />
              <p className="text-primary text-[15px] leading-relaxed mb-5">
                En ese apartado se atiende a jóvenes entre 12 y 18 años a través
                de charlas o seminarios presenciales o virtuales en español, con
                el objetivo de ayudar a la formación del adolescente y motivarlo
                a contribuir con el uso responsable de la energía, además,
                incentivarlos a estudiar carreras afines con los temas tratados,
                de forma que sean profesionales en servicio de la nación.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg sm:text-xl md:hidden font-bold text-primary mb-3">
                Educación Media
              </h3>

              <Image
                src={assets.Conference}
                alt="CNE Icon"
                width="65"
                height="65"
                className="mb-7"
              />
              <p className="text-primary text-[15px] leading-relaxed mb-4">
                Las actividades del programa atienden a organismos sociales,
                iglesias, instituciones del gobierno, juntas de vecinos y
                público adulto en general, a través de acciones de difusión,
                charlas y talleres de sensibilización a las personas, para
                promover, sensibilizar e informar acerca de la importancia del
                ahorro de energía y el uso de las energías renovables, lo que
                permite adoptar decisiones responsables sobre el consumo
                energético.
              </p>
            </div>
          </div>
        </div>
        <Boton
          href="/"
          color="green"
          iconPosition="right"
          icon="TapIcon"
          className="uppercase mt-3"
        >
          Solicitud de Charla
        </Boton>
      </div>

      <div className="absolute bottom-0 right-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] opacity-95"></div>
    </section>
  );
}
