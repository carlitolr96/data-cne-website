"use client";

import Image from "next/image";
import { stageicon } from "@/assets/assets";
import Boton from "@/components/Boton";

export default function Stage() {
  return (
    <section className="stage-section bg-primary text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative px-6">
        <div className="flex justify-center items-center">
          <h2 className="text-center text-lg font-bold bg-green px-4 py-2 inline-block mx-auto">
            ETAPAS DE UN PROYECTO DE GENERACIÓN RENOVABLE
          </h2>
        </div>

        <div className="mt-12 flex flex-col">
          {stageicon.map((stage, index) => (
            <div
              key={stage.id}
              className={`stage-item relative flex flex-col md:flex-row items-center gap-y-6 md:gap-x-10 ${
                stage.title === "CONCESIÓN DEFINITIVA" ||
                stage.title === "OPERACIÓN"
                  ? "md:flex-row-reverse"
                  : index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              <div className="shrink-0">
                <Image
                  src={stage.icon!}
                  alt={stage.title}
                  width={60}
                  height={60}
                  className="opacity-90 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                />
              </div>

              <div className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1044 209"
                  width="100%"
                  className="block"
                >
                  <path
                    d={
                      Number(stage.id) % 2 === 0
                        ? "M488.522 4.26838C529.163 3.14459 569.804 2.35973 610.47 1.78892C651.11 1.20027 691.776 0.754321 732.417 0.486753C752.75 0.308375 773.058 0.219185 793.391 0.165672C813.724 0.129996 834.032 -0.0305376 854.365 0.00513805C895.006 0.00513805 935.672 0.308375 976.313 0.932699L980.042 0.98621L1024.11 78.3489C1028.82 86.697 1033.73 94.9915 1038.55 103.304L1039 104.071L1038.55 104.785C1033.38 113.008 1028.34 121.249 1023.33 129.508C1018.31 137.767 1013.2 146.008 1008.31 154.284L993.471 179.133L978.152 205.194H976.313L854.365 206.603C813.724 207.138 773.058 207.673 732.417 207.923L610.47 208.583C569.829 208.779 529.188 209.047 488.522 208.993C407.215 209.047 325.933 208.529 244.626 207.727C203.985 207.37 163.319 206.728 122.678 206.139L92.1915 205.693L61.7046 205.104C41.3715 204.712 21.0637 204.337 0.730676 203.802C0.302347 203.802 0 203.535 0 203.249C0 202.964 0.327543 202.75 0.730676 202.732C21.0637 202.197 41.3715 201.822 61.7046 201.43L92.1915 200.841L122.678 200.395C163.319 199.824 203.985 199.164 244.626 198.808C325.908 198.023 407.215 197.488 488.522 197.541C529.163 197.488 569.804 197.773 610.47 197.951L732.417 198.611C773.058 198.843 813.724 199.396 854.365 199.931L976.313 201.323L973.793 202.5L989.037 177.777L1004.08 153C1009.14 144.759 1013.98 136.447 1018.94 128.17C1023.88 119.893 1028.82 111.599 1033.61 103.286V104.767C1028.47 96.5434 1023.43 88.2845 1018.16 80.1148L971.274 6.30189L976.313 8.65648C935.672 9.2808 895.006 9.60188 854.365 9.58404C834.032 9.63755 813.724 9.47702 793.391 9.42351C773.058 9.36999 752.75 9.2808 732.417 9.10242C691.776 8.83486 651.11 8.40674 610.47 7.80026C569.829 7.22945 529.163 6.44458 488.522 5.3208C488.093 5.3208 487.791 5.05324 487.791 4.76783C487.791 4.48243 488.119 4.26837 488.522 4.25053V4.26838Z"
                        : "M1043.27 204.168C962.021 206.781 880.797 207.747 799.548 208.248C758.936 208.427 718.299 208.642 677.687 208.159C637.075 207.658 596.464 206.888 555.826 206.226C515.215 205.439 474.577 205.224 433.966 205.296C413.647 205.296 393.354 205.457 373.035 205.636L312.105 206.441C271.493 207.014 230.856 207.765 190.244 208.159C149.632 208.553 108.995 208.714 68.3831 208.964L63.4986 209L46.2517 180.922C41.191 172.654 36.0547 164.405 31.1198 156.101L16.1642 131.227C11.1538 122.941 6.21893 114.638 1.33443 106.298L0 104.026L1.33443 101.86C11.4811 85.3251 21.4767 68.7361 31.7493 52.2545C42.0219 35.7549 52.1937 19.2196 62.5922 2.77378L64.3546 0L119.519 0.73371L170.656 1.59269C187.701 1.89691 204.746 2.25482 221.792 2.66641C238.837 3.06011 255.883 3.43591 272.928 3.97277C273.356 3.97277 273.658 4.2412 273.658 4.52753C273.658 4.81385 273.331 5.0286 272.928 5.04649C255.883 5.58335 238.837 5.95916 221.792 6.35286C204.746 6.78234 187.701 7.14025 170.656 7.42658L119.519 8.28555L68.3831 8.96558L74.1488 6.24548C64.6567 22.9777 54.9129 39.6382 45.2698 56.3167C35.6518 73.0131 25.7318 89.62 15.9628 106.263V101.825C21.0487 110.092 26.0591 118.378 30.9939 126.681L45.8992 151.574C50.9096 159.859 55.7186 168.199 60.6283 176.52L75.2818 201.502L68.3831 198.263C108.995 198.513 149.632 198.692 190.244 199.068C230.856 199.462 271.493 200.213 312.105 200.786L373.035 201.591C393.354 201.77 413.647 201.913 433.966 201.931C474.577 202.003 515.215 201.788 555.826 201.001C596.438 200.339 637.05 199.569 677.687 199.068C718.299 198.567 758.936 198.8 799.548 198.979C880.797 199.462 962.021 200.428 1043.27 203.059C1043.7 203.059 1044 203.327 1044 203.613C1044 203.9 1043.67 204.115 1043.27 204.132V204.168Z"
                    }
                    fill="#23B53E"
                    className="hidden md:block"
                  />

                  <foreignObject
                    x="24"
                    y="18"
                    className="w-[996px] h-[400px] md:h-[173px]"
                  >
                    <div
                      className={`w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 ${
                        Number(stage.id) % 2 === 0
                          ? "md:flex-row-reverse"
                          : "md:flex-row"
                      }`}
                    >
                      <div
                        className={`hidden md:flex flex-col ${
                          Number(stage.id) % 2 === 0
                            ? "items-start text-left"
                            : "items-end text-right"
                        } gap-1 shrink-0`}
                      >
                        <span className="uppercase text-[11px] leading-tight font-semibold opacity-90">
                          {stage.id % 2 === 0
                            ? stage.leftLabel
                            : stage.rightLabel}
                        </span>
                      </div>

                      <div
                        className={`flex-1 flex flex-col md:flex-row items-center gap-5 ${
                          Number(stage.id) % 2 === 0
                            ? "md:flex-row-reverse text-left"
                            : "md:flex-row text-right"
                        }`}
                      >
                        <div className="flex flex-col items-center md:items-start gap-2 shrink-0">
                          <div className="text-4xl md:text-6xl font-extrabold leading-none text-center md:text-left">
                            {String(stage.id).padStart(2, "0")}
                          </div>
                          <h2 className="uppercase text-md md:text-sm leading-tight font-semibold opacity-90 max-w-[170px] text-center md:text-left">
                            {stage.title}
                          </h2>
                        </div>

                        <div className="hidden md:block w-0.5 h-25 bg-green opacity-90" />

                        <p
                          className={`text-2xl md:text-base leading-relaxed opacity-95 flex-1 text-center md:text-end 
              min-h-[100px] md:min-h-0 py-2`}
                        >
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </foreignObject>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <p className="font-bold text-white text-lg">
            ¿Eres un desarrollador o inversionista? <br />
            <span className="font-medium">
              Consulta los procedimientos de obtención de estos permisos.
            </span>
          </p>
          <Boton
            href="/"
            icon="TapIcon"
            iconPosition="right"
            className="uppercase mt-5 w-auto px-6 py-3"
          >
            Conoce más aquí
          </Boton>
        </div>
      </div>
    </section>
  );
}
