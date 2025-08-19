"use client";

import LineChartTwo from "../LineChartTwo";
import Boton from "@/components/Boton";

export default function Incentives() {
  return (
<section className="bg-white py-12 md:py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 min-h-[70vh] justify-center">
    
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:space-x-4 uppercase">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-green text-white px-3 py-1">
        Incentivos
      </h1>
      <span className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium mt-2 md:mt-0">
        a las renovables
      </span>
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-24 w-full mt-8">
      <div className="w-full lg:w-10/12 h-72 sm:h-80 md:h-96">
        <LineChartTwo />
      </div>

      <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left lg:w-1/2">
        <p className="text-primary text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
          Para la inversión en sistemas y equipos de energía renovable
          gestionadas, representando un monto superior a los
        </p>
        <span className="bg-green text-white px-4 py-2 font-semibold text-lg sm:text-2xl md:text-3xl">
          RD$5,000,000.00
        </span>
        <p className="text-primary text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
          en exención de impuestos.
        </p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-around gap-4 mt-8">
      <Boton href="/" icon="TapIcon" iconPosition="right">
        Solicitar Aquí
      </Boton>
      <Boton href="/">Ver Más</Boton>
    </div>
  </div>
</section>

  );
}
