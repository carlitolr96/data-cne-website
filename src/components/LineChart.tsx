import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface DataPoint {
  year: number;
  value: number;
  label: string;
}

const LineChartTwo: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pointsRef = useRef<(SVGCircleElement | null)[]>([]);

  const data: DataPoint[] = [
    { year: 2019, value: 15, label: "$15M" },
    { year: 2020, value: 22, label: "$22M" },
    { year: 2021, value: 28, label: "$28M" },
    { year: 2022, value: 35, label: "$35M" },
    { year: 2023, value: 42, label: "$42M" },
    { year: 2024, value: 47.99, label: "$47.99M" },
  ];

  const width = 400;
  const height = 200;
  const padding = 40;

  const xScale = (year: number) =>
    padding + ((year - 2019) / (2024 - 2019)) * (width - 2 * padding);

  const yScale = (value: number) =>
    height - padding - ((value - 10) / (50 - 10)) * (height - 2 * padding);

  const pathData = data
    .map((point, index) => {
      const x = xScale(point.year);
      const y = yScale(point.value);
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  useEffect(() => {
    if (!pathRef.current || !svgRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.out",
    });

    pointsRef.current.forEach((point, index) => {
      if (point) {
        gsap.set(point, { scale: 0, transformOrigin: "center" });
        tl.to(
          point,
          {
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
          },
          `-=${1.8 - index * 0.3}`
        );
      }
    });

    const finalPoint = pointsRef.current[pointsRef.current.length - 1];
    if (finalPoint) {
      tl.to(
        finalPoint,
        {
          scale: 1.3,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        },
        "+=0.5"
      );
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-primary text-lg font-extrabold">
          Evolución del ahorro
          <span className="text-primary text-lg font-medium"> por <br/>Energía Renovable</span>
        </h3>
      </div>

      <div className="flex-1 relative">
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          className="overflow-visible relative border-b-2 border-primary"
        >
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 20"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />

          <path
            ref={pathRef}
            d={pathData}
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {data.map((point, index) => (
            <g key={point.year}>
              <circle
                ref={(el) => {
                  pointsRef.current[index] = el;
                }}
                cx={xScale(point.year)}
                cy={yScale(point.value)}
                r="3"
                fill="#22c55e"
                stroke="white"
                strokeWidth="2"
                className="drop-shadow-sm"
              />

              <text
                x={xScale(point.year)}
                y={height - 10}
                textAnchor="middle"
                className="text-xs fill-primary font-medium"
              >
                {point.year}
              </text>

              {index === data.length - 1 && (
                <g>
                  <rect
                    x={xScale(point.year) + 10}
                    y={yScale(point.value) - 25}
                    width="120"
                    height="20"
                    fill="#22c55e"
                    className="drop-shadow-sm"
                  />
                  <text
                    x={xScale(point.year) + 70}
                    y={yScale(point.value) - 11}
                    textAnchor="middle"
                    className="text-xs fill-white font-bold"
                  >
                    $47.99 millones
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
          <p className="text-sm text-primary font-medium">
            Ahorro en millones de dólares
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineChartTwo;
