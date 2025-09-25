"use client";

import React from "react";

export default function ProyectosRenovables() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="Dashboard CNE V5"
        width="1600"
        height="860"
        src="https://app.powerbi.com/reportEmbed?reportId=674eceb4-fadd-45df-9d50-63a710edd2ed&autoAuth=true&ctid=3be6ee61-cbb9-46f4-bc2b-a6f58feed2f5"
        allowFullScreen={true}
        className="hidden lg:block"
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Version movil"
        width="375"
        height="1024"
        src="https://app.powerbi.com/reportEmbed?reportId=0ce5b9cb-0c8c-410d-85e8-f632f7f1105f&autoAuth=true&ctid=3be6ee61-cbb9-46f4-bc2b-a6f58feed2f5"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  );
}
