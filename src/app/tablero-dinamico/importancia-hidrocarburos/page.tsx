import React from "react";

export default function ImportanciaHidrocarburos() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="Hidrocarburos - web"
        width="1600"
        height="860"
        src="https://app.powerbi.com/view?r=eyJrIjoiNTdjMDEzZmItZDA2MC00MTY4LWEzNzMtZWJkMzQyZTE0ZTE5IiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="hidden lg:block"
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Hidrocarburos - Movil"
        width="375"
        height="1024"
        src="https://app.powerbi.com/view?r=eyJrIjoiYTQ5MTI5NWUtNTA1MS00MjkxLTg4YzEtMGRjMzA2YzZiNTJhIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  );
}
