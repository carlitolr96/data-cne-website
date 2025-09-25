export default function DemandaElectricaNacional() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="Mapa Georeferencial de Consumo de Energia RD - Mark 2 - VERTICAL"
        width="1600"
        height="860"
        src="https://app.powerbi.com/view?r=eyJrIjoiODFkMjMzYWItZjZlNi00Yjg1LWI4ZDUtZDQ2OTVlYzlhN2NhIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="hidden lg:block"
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Mapa Georeferencial de Consumo de Energia RD - Mark 2 - VERTICAL"
        width="375"
        height="1024"
        src="https://app.powerbi.com/reportEmbed?reportId=c699c2a1-268f-4b4b-b634-63aaff24ed59&autoAuth=true&ctid=3be6ee61-cbb9-46f4-bc2b-a6f58feed2f5"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  );
}
