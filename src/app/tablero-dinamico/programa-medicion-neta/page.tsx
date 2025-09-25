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
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Power BI Medicion Neta Vertical"
        width="375"
        height="1024"
        src="https://app.powerbi.com/reportEmbed?reportId=50800a9c-b1ec-4338-8a9e-605cfe8a4cf0&autoAuth=true&ctid=3be6ee61-cbb9-46f4-bc2b-a6f58feed2f5"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  );
}
