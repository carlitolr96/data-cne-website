import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface DataPoint {
  year: number;
  green: number;
  red: number;
}

const LineChartTwo: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const greenPathRef = useRef<SVGPathElement | null>(null);
  const redPathRef = useRef<SVGPathElement | null>(null);
  const greenPtsRef = useRef<(SVGCircleElement | null)[]>([]);
  const redPtsRef = useRef<(SVGCircleElement | null)[]>([]);

  const data: DataPoint[] = [
    { year: 2020, green: 1.2, red: 0.0 },
    { year: 2021, green: 3.6, red: 0.6 },
    { year: 2022, green: 3.3, red: 1.4 },
    { year: 2023, green: 7.6, red: 1.6 },
    { year: 2024, green: 8.8, red: 2.4 },
  ];

  const width = 560;
  const height = 340;
  const padding = 48;

  const maxY = Math.max(...data.map((d) => Math.max(d.green, d.red)));
  const yDomainMax = maxY * 1.15; 

  const xScale = (year: number) =>
    padding + ((year - 2020) / (2024 - 2020)) * (width - 2 * padding);

  const yScale = (v: number) =>
    height - padding - (v / yDomainMax) * (height - 2 * padding);

  const linePath = (key: "green" | "red") =>
    data
      .map(
        (d, i) => `${i === 0 ? "M" : "L"} ${xScale(d.year)} ${yScale(d[key])}`
      )
      .join(" ");

  useEffect(() => {
    const animatePath = (
      ref: React.RefObject<SVGPathElement | null>,
      delay = 0
    ) => {
      const path = ref.current;
      if (!path) return;
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        delay,
      });
    };

    const popPoints = (list: (SVGCircleElement | null)[], delay = 0) => {
      list.forEach((pt, i) => {
        if (!pt) return;
        gsap.set(pt, { scale: 0, transformOrigin: "center" });
        gsap.to(pt, {
          scale: 1,
          duration: 0.35,
          ease: "back.out(1.6)",
          delay: delay + 0.15 * i,
        });
      });
    };

    animatePath(greenPathRef, 0.1);
    animatePath(redPathRef, 0.35);
    popPoints(greenPtsRef.current, 0.6);
    popPoints(redPtsRef.current, 0.8);
  }, []);

  return (
    <div className="relative w-full h-[260px] sm:h-[300px] md:h-[360px] lg:h-[420px]">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height="100%"
        className="overflow-visible"
        aria-label="Gráfico de solicitudes de incentivos 2020–2024"
      >
        <line
          x1={padding}
          y1={padding * 0.5}
          x2={padding}
          y2={height - padding}
          stroke="#183B6B" 
          strokeWidth={3}
        />

        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#183B6B"
          strokeWidth={3}
        />

        {[2020, 2024].map((yr) => (
          <line
            key={yr}
            x1={xScale(yr)}
            x2={xScale(yr)}
            y1={height - padding}
            y2={height - padding - 12}
            stroke="#183B6B"
            strokeWidth={3}
          />
        ))}

        <text
          x={xScale(2020)}
          y={height - padding + 28}
          textAnchor="middle"
          className="fill-[#183B6B] font-extrabold"
          style={{ fontSize: 22 }}
        >
          2020
        </text>
        <text
          x={xScale(2024)}
          y={height - padding + 28}
          textAnchor="middle"
          className="fill-[#183B6B] font-extrabold"
          style={{ fontSize: 22 }}
        >
          2024
        </text>

        <path
          ref={greenPathRef}
          d={linePath("green")}
          fill="none"
          stroke="#23b53e"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {data.map((d, i) => (
          <g key={`g-${d.year}-green`}>
            <circle
              ref={(el) => {
                greenPtsRef.current[i] = el;
              }}
              cx={xScale(d.year)}
              cy={yScale(d.green)}
              r={4}
              fill="#23b53e"
              stroke="#ffffff"
              strokeWidth={2}
            />
            <text
              x={xScale(d.year)}
              y={yScale(d.green) - 8}
              textAnchor="middle"
              className="fill-[#334155]"
              style={{ fontSize: 10, fontWeight: 600 }}
            >
              000
            </text>
          </g>
        ))}

        <path
          ref={redPathRef}
          d={linePath("red")}
          fill="none"
          stroke="#ef4444"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {data.map((d, i) => (
          <g key={`g-${d.year}-red`}>
            <circle
              ref={(el) => {
                greenPtsRef.current[i] = el;
              }}
              cx={xScale(d.year)}
              cy={yScale(d.red)}
              r={3.5}
              fill="#ef4444"
              stroke="#ffffff"
              strokeWidth={2}
            />
            <text
              x={xScale(d.year)}
              y={yScale(d.red) - 8}
              textAnchor="middle"
              className="fill-[#334155]"
              style={{ fontSize: 10, fontWeight: 600 }}
            >
              000
            </text>
          </g>
        ))}

        <text
          x={padding + 6}
          y={padding - 45}
          className="fill-[#183B6B]"
          style={{ fontSize: 14, fontWeight: 500 }}
        >
          Desde el 2020 hasta la fecha,
        </text>
        <text
          x={padding + 6}
          y={padding - 30}
          className="fill-[#183B6B]"
          style={{ fontSize: 14, fontWeight: 500 }}
        >
          la CNE ha gestionado
        </text>
      </svg>

      <div className="absolute top-4 right-0 flex flex-col items-center">
        <div className="bg-green text-white px-4 py-2 font-extrabold text-2xl leading-none">
          7,179
        </div>
        <span className="text-primary text-sm w-30 mt-2 text-center font-medium">
          Solicitudes de incentivos
        </span>
      </div>
    </div>
  );
};

export default LineChartTwo;
