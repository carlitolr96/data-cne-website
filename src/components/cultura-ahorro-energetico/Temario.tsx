"use client";

import Boton from "@/components/Boton";
import Image from "next/image";
import {
  sectionsTemario,
  practicalSectionsTemario,
  assets,
} from "@/assets/assets";

export default function Temario() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-4">
          <div className="text-center mb-12">
            <h1 className="text-primary text-2xl md:text-3xl font-black uppercase mb-8">
              TEMARIO
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="space-y-8">
              {sectionsTemario.slice(0, 2).map((section, index) => (
                <div key={index} className="bg-white">
                  <div className="mb-4">
                    <h3 className="text-primary font-black text-2xl uppercase leading-tight mb-2">
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <h4 className="text-primary font-bold text-lg uppercase mb-2">
                        {section.subtitle}
                      </h4>
                    )}
                    {section.description && (
                      <p className="text-primary text-md leading-relaxed mb-3">
                        {section.description}
                      </p>
                    )}
                    {section.items && (
                      <ul className="space-y-2">
                        {section.items.map(
                          (item: string, itemIndex: number) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-3 h-3 bg-green rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-primary text-md leading-relaxed">
                                {item}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {sectionsTemario.slice(2, 3).map((section, index) => (
                <div key={index} className="bg-white">
                  <div className="mb-4">
                    <h3 className="text-primary font-black text-2xl uppercase leading-tight mb-2">
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <h4 className="text-primary font-bold text-lg uppercase mb-2">
                        {section.subtitle}
                      </h4>
                    )}
                    {section.items && (
                      <ul className="space-y-2 mb-4">
                        {section.items.map(
                          (item: string, itemIndex: number) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-3 h-3 bg-green rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-primary text-md leading-relaxed">
                                {item}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                    {section.subtitle2 && (
                      <h4 className="text-primary font-bold text-lg uppercase mb-2">
                        {section.subtitle2}
                      </h4>
                    )}
                    {section.items2 && (
                      <ul className="space-y-2">
                        {section.items2.map(
                          (item: string, itemIndex: number) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-3 h-3 bg-green rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-primary text-md leading-relaxed">
                                {item}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-white">
                <div className="mb-4">
                  <h3 className="text-primary font-black text-2xl uppercase leading-tight mb-2">
                    {sectionsTemario[3].title}
                  </h3>
                  {sectionsTemario[3].items && (
                    <ul className="space-y-2">
                      {sectionsTemario[3].items.map(
                        (item: string, itemIndex: number) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2"
                          >
                            <div className="w-3 h-3 bg-green rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-primary text-md leading-relaxed">
                              {item}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>

              <div className="bg-white">
                <div className="mb-4">
                  <h3 className="text-primary font-black text-2xl uppercase leading-tight mb-2">
                    {sectionsTemario[4].title}
                  </h3>
                  <p className="text-primary text-md leading-relaxed">
                    {sectionsTemario[4].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {practicalSectionsTemario.map((section, index) => (
              <div key={index}>
                <div className="mb-4">
                  <h3 className="text-primary font-bold text-lg uppercase leading-tight mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-primary text-md leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
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
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute -bottom-15 right-10 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] opacity-95">
        <Image
          src={assets.KidsCAE}
          alt="Casa Energía"
          width={370}
          height={400}
        />
      </div>
    </section>
  );
}
