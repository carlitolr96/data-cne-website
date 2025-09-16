"use client";

export default function Radiological() {
  const principles = [
    {
      title: "Evaluar instalaciones",
    },
    {
      title: "Licenciar prácticas",
    },
    {
      title: "Supervisar equipos y personal",
    },
    {
      title: "Monitorear los niveles de exposición",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="text-center mb-12">
          <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            ¿QUÉ ES LA PROTECCIÓN RADIOLÓGICA?
          </h1>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-primary text-lg leading-relaxed">
              Es el conjunto de medidas y normas que buscan proteger a las
              personas y el medio ambiente frente a los efectos nocivos de la
              radiación ionizante.
            </p>
          </div>

          <h2 className="text-primary text-xl md:text-2xl font-bold mb-12">
            La CNE exige el cumplimiento de los principios de protección
            radiológica a través de:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="
                border-2 border-green rounded-lg p-4 text-center transition-all duration-300 
                hover:shadow-lg hover:scale-105 cursor-pointer
              "
            >
              <h3 className="font-bold text-md leading-tight text-green">
                {principle.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
