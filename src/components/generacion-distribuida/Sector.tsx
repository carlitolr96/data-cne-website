"use client";

import DoughnutChart from "@/components/DoughnutChart";

export default function Sector() {
  const chartDoughnutData = [
  { label: "Bienes Raices", value: 13.8, color: "#164EA1" },
  { label: "Energía", value: 25.7, color: "#284098" },
  { label: "Comunicaciones", value: 1.8, color: "#15ABDF" },
];

  return (
    <section className="bg-light py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-black text-primary mb-12 uppercase">
            ¿Cuánto ha avanzado la <br /> generación distribuida en RD?
          </h2>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12">
            <div className="lg:w-1/2 max-w-4xl">
              <div className="text-start space-y-2">
                <h1 className="text-primary text-2xl font-black font-montserrat uppercase">
                  {
                    "A junio de 2025, el sector industrial lidera la generación distribuida en el país, con el 62% de la capacidad instalada, seguido del sector residencial (22%) y el comercial (15%)."
                  }
                </h1>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col items-center">
              <p className="mb-4 text-primary text-sm font-bold text-center">
                Capacidad instalada por sector - junio 2025 (kwp)
              </p>
              <div className="w-full flex justify-center h-100">
                <DoughnutChart data={chartDoughnutData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
