export default function DemandaElectricaNacional() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="Mapa Georeferencial de Consumo de Energia RD - Mark 2 - VERTICAL"
        width="1600"
        height="860"
        src="https://app.powerbi.com/view?r=eyJrIjoiZTk3NzQ5ZjEtZjExZS00OTc3LTlkNWQtODUyYjBjNTcyNTRhIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="hidden lg:block"
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Mapa Georeferencial de Consumo de Energia RD - Mark 2 - VERTICAL"
        width="375"
        height="1024"
        src="https://app.powerbi.com/view?r=eyJrIjoiZDE5MThhYTUtZGQ5Zi00OWIyLWEyNDUtMmJjYmE3M2U0OTA3IiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  );
}
