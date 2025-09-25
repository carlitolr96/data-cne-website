import React from "react";

export default function AsuntosNucleares() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="Tablero Nuclear -  Web"
        width="1600"
        height="860"
        src="https://app.powerbi.com/view?r=eyJrIjoiYmVkY2EyNDItMWMxZi00OTEwLTllZmEtNGJlMWNlODBjMmYyIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="hidden lg:block"
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Tablero Nuclear -  Movil"
        width="375"
        height="1024"
        src="https://app.powerbi.com/view?r=eyJrIjoiMTgyNDgwMjEtZTYzZC00ZDAyLWI5YzAtMTZmNWJlYTA5NDhkIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  );
}
