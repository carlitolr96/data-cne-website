"use client";

import React from "react";

export default function ProgramaDifucion() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="Tablero Difusion"
        width="1600"
        height="860"
        src="https://app.powerbi.com/view?r=eyJrIjoiODU3ODc5NTgtOWZlZC00YzBiLThhNmUtOWUwZTYzMDZjNjVjIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="hidden lg:block"
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Tablero Difusion - movil"
        width="375"
        height="1024"
        src="https://app.powerbi.com/view?r=eyJrIjoiZTE5ZDA4YzItMTk3NC00Mjk2LTk4MmYtMTM2NDlmOWZmZGY3IiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  );
}