import React from "react";

export default function ProgramaMedicionNeta() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="Programa de Mecidicion Neta"
        width="1600"
        height="860"
        src="https://app.powerbi.com/view?r=eyJrIjoiMzBkNmY4YmYtY2JiMi00OTk0LWE5ZDItNDMxMjU2NDYyZDIxIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="hidden lg:block" 
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Power BI Medicion Neta Vertical"
        width="375"
        height="1024"
        src="https://app.powerbi.com/view?r=eyJrIjoiNTk1Y2VjNmItMzAyNC00NjdhLWIwMDEtYzhmMzZhY2Q0OWI4IiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  );
}
