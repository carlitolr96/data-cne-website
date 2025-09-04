"use client"

import React from "react"

export default function ProyectosRenovables() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="Proyectos Renovables"
        width="1600"
        height="860"
        src="https://app.powerbi.com/view?r=eyJrIjoiODFkMjMzYWItZjZlNi00Yjg1LWI4ZDUtZDQ2OTVlYzlhN2NhIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="hidden lg:block"
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Versión movil"
        width="375"
        height="1024"
        src="https://app.powerbi.com/view?r=eyJrIjoiZTIxMzdjMGItZGY5Yi00Mjg0LWI3MWItOTY5MjllODEwZDk5IiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  )
}
