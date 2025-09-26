"use client";

export default function DocumentPEN() {
  return (
    <div className="relative bg-white w-full py-10 md:py-5 min-h-[85vh] sm:min-h-[45vh] md:min-h-[35vh] lg:min-h-[25vh] xl:min-h-[30vh] flex items-end md:items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 md:py-12 px-6 w-full">
        <div className="hidden md:block" />
        <div className="text-center md:text-left flex flex-col justify-center h-full">
          <h3 className="font-black text-primary text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl leading-tight">
            ¡NUEVA VERSIÓN!
          </h3>
          <p className="mt-4 md:mt-6 font-medium text-primary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
            El Plan Energético Nacional (PEN), actualizado por la CNE, se alinea
            con la Estrategia Nacional de Desarrollo 2030 y el Plan META RD
            2036, impulsando una matriz más limpia y sostenible.
          </p>
          <p className="mt-4 md:mt-6 font-medium text-primary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
            Este instrumento, basado en criterios técnicos y económicos, ofrece
            lineamientos claros sobre inversiones, tecnologías y políticas
            necesarias para garantizar un sistema eléctrico estable y eficiente.
          </p>
          <p className="mt-4 md:mt-6 font-medium text-primary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
            Su actualización es una responsabilidad de la CNE, establecida en la
            Ley General de Electricidad 125-01.
          </p>
        </div>
      </div>
    </div>
  );
}
