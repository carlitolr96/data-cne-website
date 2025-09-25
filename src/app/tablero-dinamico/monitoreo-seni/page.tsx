import React from "react";

export default function MonitoreoSENI() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Versión escritorio */}
      <iframe
        title="OCv3"
        width="1600"
        height="860"
        src="https://app.powerbi.com/view?r=eyJrIjoiZGM5OGVmOGQtMjM3MS00ZDlmLWExM2MtYjUxYjIyY2E2NmFmIiwidCI6IjNiZTZlZTYxLWNiYjktNDZmNC1iYzJiLWE2ZjU4ZmVlZDJmNSIsImMiOjJ9"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
