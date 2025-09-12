"use client";

export default function Best() {
  return (
    <section className="relative w-full overflow-hidden pb-10">
      <div
        className="relative h-[320px] md:h-[250px] lg:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/BenefitsImg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <h1 className="text-white text-2xl md:text-4xl lg:text-3xl font-extrabold leading-snug max-w-4xl font-montserrat">
            REPÚBLICA DOMINICANA ESTÁ ENTRE LOS 70 <br />
            PAÍSES CON MEJOR RECURSO SOLAR DEL MUNDO.
          </h1>
        </div>
      </div>

      <div className="relative z-20 -mt-12 max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-green text-white px-6 py-3 rounded-lg font-bold text-lg flex-shrink-0">
              VENTAJAS:
            </div>

            <div className="flex flex-col md:flex-row gap-6 flex-1 justify-between">
              <div className="flex flex-col items-center text-center text-primary font-montserrat flex-1">
                <span className="font-bold text-sm">
                  APROVECHA EL SOL
                  <br />
                  COMO FUENTE LIMPIA
                </span>
              </div>

              <div className="hidden md:block w-0.5 bg-red self-stretch"></div>

              <div className="flex flex-col items-center text-center text-primary flex-1">
                <span className="font-bold text-sm">
                  AUTOABASTECIMIENTO
                  <br />
                  DE ENERGÍA
                </span>
              </div>

              <div className="hidden md:block w-0.5 bg-red self-stretch"></div>

              <div className="flex flex-col items-center text-center text-primary flex-1">
                <span className="font-bold text-sm">
                  REDUCCIÓN DE COSTOS
                  <br />
                  DE ENERGÍA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center mt-16 px-6">
        <h2 className="text-primary text-2xl md:text-3xl font-extrabold mb-8">
          ¿Y SI ME SOBRA ENERGÍA?
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <p className="text-primary text-lg max-w-md text-justify">
            Si produces <span className="font-bold">más de lo que usas</span>,
            ese <br />excedente se envía a la red eléctrica.
          </p>
          <div className="hidden md:block w-0.5 bg-red self-stretch"></div>
          <div className="bg-blue-50 border border-primary/30 rounded-lg px-6 py-4">
            <p className="text-primary font-bold">
              PARA ESO EXISTE EL PROGRAMA <br /> DE MEDICIÓN NETA.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center mt-16 px-6">
        <h2 className="text-primary text-2xl md:text-3xl font-extrabold mb-8">
          ¿QUÉ ES LA MEDICIÓN NETA?
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          <div className="flex-1 text-primary text-lg leading-relaxed text-left">
            Es un programa que lleva control de la energía que produces y
            consumes de la red.
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-blue-50 border-l-4 border-primary/30 border-1 rounded-lg px-6 py-4 text-left">
              <p className="text-primary">
                <span className="font-bold">Envías a la red</span> (cuando
                produces más de lo que consumes).
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-primary/30 border-1 rounded-lg px-6 py-4 text-left">
              <p className="text-primary">
                <span className="font-bold">Tomas de la red</span> (de noche,
                por ejemplo).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 px-6">
        <h3 className="text-primary text-xl md:text-2xl font-extrabold mb-6">
          ESTO SE LOGRA CON UN MEDIDOR BIDIRECCIONAL, <br /> Y AL FINAL DEL MES:
          SOLO PAGAS LA DIFERENCIA.
        </h3>
        <div className="flex justify-center">
          <div className="w-100 h-1 bg-red-600 rounded"></div>
        </div>
      </div>
    </section>
  );
}
