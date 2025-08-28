import React from 'react'

export default function MapaEnergeticoNacional() {
  return (
    <div className="flex flex-col items-center justify-center">
      <iframe
        title="Mapa Energetico Nacional"
        width="1600"
        height="860"
        src="https://www.mapas.cne.gob.do/?extent=-8379205.9237%2C1885373.4976%2C-7205133.1692%2C2422878.6805%2C102100"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}
