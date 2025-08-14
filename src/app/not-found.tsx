'use client';

import Boton from "@/components/Boton";

const NotFoundText = {
  title: "Página no encontrada",
  description:
    "La página que buscas pudo haber sido eliminada, renombrada o está temporalmente fuera de servicio.",
  boton: "Volver al inicio",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-sm max-md:px-4 bg-white">
      <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
      <div className="h-1 w-16 rounded bg-primary my-5 md:my-7"></div>
      <p className="text-2xl md:text-3xl font-bold text-gray-800">
        {NotFoundText.title}
      </p>
      <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">
        {NotFoundText.description}
      </p>
      <div className="flex items-center gap-4 mt-6">
        <Boton href="/">{NotFoundText.boton}</Boton>
      </div>
    </div>
  );
}
