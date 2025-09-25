import React from "react";

export default function VariableMacroeconomicas() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="Variables Macroeconomicas - web"
        width="1600"
        height="860"
        src="https://app.powerbi.com/view?r=eyJrIjoiYzM2MDc5NGItYWUwYy00YTE5LWFiOGQtY2M2NmJjMjM3ZDU3IiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="hidden lg:block" 
      ></iframe>

      {/* Versión móvil */}
      <iframe
        title="Variables Macroeconomicas - web"
        width="375"
        height="1024"
        src="https://app.powerbi.com/view?r=eyJrIjoiNDg4NzM1MTktMzliMS00M2NlLTljYzEtOTRhMDFkOWI3ZjNiIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
        className="block lg:hidden"
      ></iframe>
    </div>
  );
}
