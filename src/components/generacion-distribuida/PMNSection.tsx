"use client";

import { useState } from "react";
import StackedLineBar from "@/components/StackedLineBar";

export default function PMNSection() {
  const [data] = useState([
    { value: 0, label: "2011", color: "#fff" },
    { value: 10, label: "2012", color: "#fff" },
    { value: 20, label: "2013", color: "#fff" },
    { value: 30, label: "2014", color: "#fff" },
    { value: 40, label: "2015", color: "#fff" },
    { value: 50, label: "2016", color: "#fff" },
    { value: 60, label: "2017", color: "#fff" },
    { value: 70, label: "2018", color: "#fff" },
    { value: 80, label: "2019", color: "#fff" },
    { value: 90, label: "2020", color: "#fff" },
    { value: 100, label: "2021", color: "#fff" },
    { value: 150, label: "2022", color: "#fff" },
    { value: 250, label: "2023", color: "#fff" },
    { value: 350, label: "2024", color: "#fff" },
    { value: 450, label: "2025", color: "#fff" },
  ]);

  return (
    <section className="bg-primary text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex-col justify-center">
          <h2 className="text-center text-md md:text-3xl font-medium uppercase pb-10">
            República Dominicana pasó de tener <span className="font-black">131 MW en el año 2019</span> a más de <span className="font-black">400
            MW en el 2025</span> de generación distribuida interconectada al sistema
            eléctrico bajo el <span className="font-black">Programa de Medición Neta</span>
          </h2>
          <p className="font-light text-white text-sm sm:text-base md:text-2xl text-center uppercase">
            crecimiento del pmn junio 2025
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full">
            <StackedLineBar
              data={data}
              className="my-chartPMN"
              showValues={true}
              animate={true}
            />
          </div>
        </div>

        <div className="mt-15 flex justify-center">
          <p className="font-light text-white text-sm sm:text-base md:text-lg text-center">
            Acumulativo MWp
          </p>
        </div>
      </div>
    </section>
  );
}
