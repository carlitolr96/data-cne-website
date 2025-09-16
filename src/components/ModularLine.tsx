"use client";

import React, { useRef, useEffect } from "react";
import { animateDoubleLineChart } from "@/utils/animations";

export interface DataPoint {
  year: number;
  [key: string]: number;
}

export interface LineConfig {
  key: string;
  color: string;
  width?: number;
  radius?: number;
  label?: string;
}

interface ModularLineProps {
  data: DataPoint[];
  lines: LineConfig[];
  width?: number;
  height?: number;
  padding?: number;
}

const ModularLine: React.FC<ModularLineProps> = ({
  data,
  lines,
  width = 560,
  height = 340,
  padding = 48,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  // Refs para paths y círculos
  const pathRefs = useRef<SVGPathElement[]>([]);
  const circleRefs = useRef<SVGCircleElement[][]>([]);

  // Inicializa arrays de círculos si no existen
  if (circleRefs.current.length !== lines.length) {
    circleRefs.current = lines.map(() => []);
  }

  const maxY = Math.max(
    ...data.flatMap((d) => lines.map((line) => d[line.key]))
  );
  const yDomainMax = maxY * 1.15;

  const xScale = (year: number) =>
    padding + ((year - data[0].year) / (data[data.length - 1].year - data[0].year)) *
      (width - 2 * padding);

  const yScale = (v: number) => height - padding - (v / yDomainMax) * (height - 2 * padding);

  const linePath = (lineKey: string) =>
    data
      .map((d, i) => `${i === 0 ? "M" : "L"} ${xScale(d.year)} ${yScale(d[lineKey])}`)
      .join(" ");

//   useEffect(() => {
//     // Pasa solo arrays de elementos al animador
//     animateDoubleLineChart(
//       pathRefs.current,
//       circleRefs.current.map(arr => arr)
//     );
//   }, []);

  return (
    <div className="relative w-full h-[260px] sm:h-[300px] md:h-[360px] lg:h-[420px]">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height="100%"
        className="overflow-visible"
      >
        {Array.from({ length: 5 }).map((_, i) => {
          const value = (yDomainMax / 4) * i;
          const y = yScale(value);
          return (
            <g key={i}>
              <line
                x1={padding}
                x2={width - padding}
                y1={y}
                y2={y}
                stroke="#CDCDCD"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
              <text
                x={padding - 10}
                y={y + 4}
                textAnchor="end"
                className="fill-[#183B6B] font-medium"
                style={{ fontSize: 12 }}
              >
                {value.toFixed(1)}
              </text>
            </g>
          );
        })}

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

        {lines.map((line, lineIndex) => (
          <React.Fragment key={line.key}>
            <path
              ref={(el) => {
                if (el) pathRefs.current[lineIndex] = el;
              }}
              d={linePath(line.key)}
              fill="none"
              stroke={line.color}
              strokeWidth={line.width || 3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {data.map((d, i) => (
              <circle
                key={`${line.key}-${d.year}`}
                ref={(el) => {
                  if (el) circleRefs.current[lineIndex][i] = el;
                }}
                cx={xScale(d.year)}
                cy={yScale(d[line.key])}
                r={line.radius || 4}
                fill={line.color}
                stroke="#ffffff"
                strokeWidth={2}
              />
            ))}
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default ModularLine;
