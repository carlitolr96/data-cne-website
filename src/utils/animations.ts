"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BarData {
  value: number;
  label: string;
  color?: string;
}

/* ========================================
   Sección: Animación de contadores
======================================== */

/**
 * Animar los contadores de American Lider
 */
export const animateAmericanLiderCounters = (
  section: HTMLElement | null,
  setRankingLatam: (val: number) => void,
  setRankingGlobal: (val: number) => void,
  finalValues: { rankingLatam: number; rankingGlobal: number }
) => {
  if (!section) return;

  const objLatam = { val: 0 };
  const objGlobal = { val: 0 };

  gsap.to(objLatam, {
    val: finalValues.rankingLatam,
    duration: 1.5,
    ease: "power1.out",
    onUpdate: () => setRankingLatam(Math.floor(objLatam.val)),
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true,
    },
  });

  gsap.to(objGlobal, {
    val: finalValues.rankingGlobal,
    duration: 1.5,
    ease: "power1.out",
    onUpdate: () => setRankingGlobal(Math.floor(objGlobal.val)),
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true,
    },
  });
};

/**
 * Animar los contadores de Concession
 */
export const animateConcessionCounters = (
  section: HTMLElement | null,
  setProjects: (val: number) => void,
  setInvestments: (val: number) => void,
  setCapacity?: (val: number) => void
) => {
  if (!section) return;

  const projectsValue = 84;
  const investmentsValue = 54;
  const capacityValue = 3107;

  const objProjects = { val: 0 };
  const objInvestments = { val: 0 };
  const objCapacity = { val: 0 };

  gsap.to(objProjects, {
    val: projectsValue,
    duration: 2,
    ease: "power1.out",
    onUpdate: () => setProjects(Math.floor(objProjects.val)),
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true,
    },
  });

  gsap.to(objInvestments, {
    val: investmentsValue,
    duration: 2,
    ease: "power1.out",
    onUpdate: () => setInvestments(Math.floor(objInvestments.val)),
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true,
    },
  });

  if (setCapacity) {
    gsap.to(objCapacity, {
      val: capacityValue,
      duration: 2,
      ease: "power1.out",
      onUpdate: () => {
        const value = Math.floor(objCapacity.val); // parte entera
        setCapacity(value); // guardar número puro en state
      },
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true,
      },
    });
  }
};

/**
 * Animar los contadores de Storage
 */
export const animateNumberStorage = (
  el: HTMLElement | null,
  endValue: number,
  showUnit: boolean = true
) => {
  if (!el) return;

  const obj = { val: 0 };

  gsap.to(obj, {
    val: endValue,
    duration: 1.5,
    ease: "power1.out",
    onUpdate: () => {
      const value = Math.floor(obj.val);
      const formattedValue =
        value > 999 ? value.toLocaleString("en-US") : value.toString();

      el.innerText = showUnit ? `${formattedValue} MWh` : formattedValue;
    },
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      once: true,
    },
  });
};

/**
 * Animar los Incerntivos Renovables
 */
export const animateAmount = (
  amountEl: HTMLElement | null,
  endValue: number
) => {
  if (!amountEl) return;

  const obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration: 2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: amountEl,
      start: "top 80%",
      once: true,
    },
    onUpdate: () => {
      amountEl.textContent = `RD$${obj.val
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`;
    },
  });
};

/**
 * Animar los Saving
 */
export const animateCurrency = (
  element: HTMLElement | null,
  endValue: number,
  prefix = "US$"
) => {
  if (!element) return;

  const obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration: 2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      once: true,
    },
    onUpdate: () => {
      element.textContent = `${prefix}${obj.val
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    },
  });
};

/* ========================================
   Sección: Animación de Loader
======================================== */
export const animateLoader = (
  section: HTMLElement | null,
  progressEl: HTMLElement | null,
  percent2019El: HTMLElement | null,
  percent2025El: HTMLElement | null,
  percent2030El: HTMLElement | null
) => {
  if (!section) return;

  const tl = gsap.timeline({
    scrollTrigger: { trigger: section, start: "top 80%", once: true },
  });

  if (progressEl) {
    tl.fromTo(
      progressEl,
      { width: "0%" },
      { width: "100%", duration: 3.5, ease: "power2.out" }
    );
  }

  const animateNumber = (el: HTMLElement | null, endValue: number) => {
    if (!el) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: endValue,
      duration: 1.5,
      ease: "power1.out",
      onUpdate: () => {
        el.innerText = `${Math.floor(obj.val)}%`;
      },
    });
  };

  animateNumber(percent2019El, 7);
  animateNumber(percent2025El, 25);
  animateNumber(percent2030El, 30);
};

/* ========================================
   Sección: Animación de mapas y tooltips
======================================== */
export const animateMapLocations = (
  points: HTMLElement[],
  tooltips: HTMLElement[],
  activeId: string | null
) => {
  const validPoints = points.filter((point) => point !== null);
  const validTooltips = tooltips.filter((tooltip) => tooltip !== null);

  gsap.fromTo(
    validPoints,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)" }
  );

  validTooltips.forEach((tooltip) => {
    if (activeId === tooltip.dataset?.id) {
      gsap.fromTo(
        tooltip,
        { scale: 0.8, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          pointerEvents: "auto",
        }
      );
    } else {
      gsap.to(tooltip, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        pointerEvents: "none",
      });
    }
  });
};

/* ========================================
   Sección: Animación de números
======================================== */
export const animateNumbers = (
  projectsEl: HTMLHeadingElement | null,
  capacityEl: HTMLSpanElement | null
) => {
  if (projectsEl) {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 35,
      duration: 1.5,
      ease: "power3.out",
      onUpdate: () => {
        const value = Math.floor(obj.val);
        const displayVal =
          value > 9999 ? value.toLocaleString() : value.toString();
        projectsEl.textContent = `${displayVal} PROYECTOS`;
      },
    });
  }

  if (capacityEl) {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 1436.31,
      duration: 1.8,
      ease: "power3.out",
      onUpdate: () => {
        const value = obj.val;
        const formattedValue =
          Math.floor(value) > 999
            ? value.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : value.toFixed(2);

        capacityEl.textContent = `${formattedValue} MW`;
      },
    });
  }
};

export function animateNumberList(
  elements: HTMLElement[],
  targets: number[],
  formatter: (value: number) => string = (value) => value.toString()
) {
  elements.forEach((el, i) => {
    if (!el) return;
    const target = targets[i];
    let current = 0;
    const step = Math.ceil(target / 100);

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = formatter(current);
    }, 20);
  });
}

/* ========================================
   Sección: Animación de charts y barras
======================================== */
export const animateCharts = (el: HTMLElement | null) => {
  if (!el) return;
  gsap.fromTo(
    el,
    { autoAlpha: 0, y: 50, scale: 0.95 },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    }
  );
};

export const resetCharts = (refs: {
  barsRef: React.RefObject<(HTMLDivElement | null)[]>;
  numbersRef: React.RefObject<(HTMLSpanElement | null)[]>;
}) => {
  const { barsRef, numbersRef } = refs;

  if (!barsRef.current || !numbersRef.current) return;

  const validBars = barsRef.current.filter(
    (bar) => bar !== null
  ) as HTMLDivElement[];
  const validNumbers = numbersRef.current.filter(
    (num) => num !== null
  ) as HTMLSpanElement[];

  validBars.forEach((bar) => {
    gsap.set(bar, { height: 0 });
  });

  validNumbers.forEach((number) => {
    number.textContent = "0 MW";
  });
};

export const animateChartsTwo = ({
  data,
  barsRef,
  numbersRef,
  heightFactor = 1.5,
}: {
  data: BarData[];
  barsRef: React.RefObject<(HTMLDivElement | null)[]>;
  numbersRef: React.RefObject<(HTMLSpanElement | null)[]>;
  heightFactor?: number;
}) => {
  if (!barsRef.current || !numbersRef.current) return;

  const validBars = barsRef.current.filter(
    (bar) => bar !== null
  ) as HTMLDivElement[];
  const validNumbers = numbersRef.current.filter(
    (num) => num !== null
  ) as HTMLSpanElement[];

  validBars.forEach((bar, i) => {
    if (i < data.length) {
      gsap.to(bar, {
        height: `${data[i].value * heightFactor}px`,
        duration: 1.5,
        ease: "power3.out",
        delay: i * 0.2,
      });
    }
  });

  validNumbers.forEach((number, i) => {
    if (i < data.length) {
      const progressObj = { progress: 0 };

      gsap.to(progressObj, {
        progress: 1,
        duration: 1.5,
        delay: i * 0.2,
        onUpdate: () => {
          const currentValue = Math.floor(data[i].value * progressObj.progress);
          number.textContent = `${currentValue} MW`;
        },
      });
    }
  });
};

interface DoubleBarData {
  value1: number;
  value2: number;
  color1?: string;
  color2?: string;
  centerText: string;
}

interface AnimateDoubleChartsParams {
  data: DoubleBarData[];
  bars1Ref: React.MutableRefObject<(HTMLDivElement | null)[]>;
  bars2Ref: React.MutableRefObject<(HTMLDivElement | null)[]>;
  numbers1Ref: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  numbers2Ref: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  centerNumberRef: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  heightFactor: number;
}

export const animateDoubleChartsTwo = ({
  data,
  bars1Ref,
  bars2Ref,
  numbers1Ref,
  numbers2Ref,
  centerNumberRef,
  heightFactor,
}: AnimateDoubleChartsParams) => {
  data.forEach((item, i) => {
    const bar1 = bars1Ref.current[i];
    const bar2 = bars2Ref.current[i];
    const number1 = numbers1Ref.current[i];
    const number2 = numbers2Ref.current[i];
    const centerNumber = centerNumberRef.current[i];

    const total = item.value1 + item.value2;
    const targetPercent = total > 0 ? (item.value1 / total) * 100 : 0;

    if (bar1 && number1) {
      gsap.to(bar1, {
        height: `${item.value1 * heightFactor}px`,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(
        { val: 0 },
        {
          val: item.value1,
          duration: 1,
          ease: "power3.out",
          onUpdate() {
            number1.textContent = `US$${this.targets()[0].val.toFixed(1)}`;
          },
        }
      );
    }

    if (bar2 && number2) {
      gsap.to(bar2, {
        height: `${item.value2 * heightFactor}px`,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(
        { val: 0 },
        {
          val: item.value2,
          duration: 1,
          ease: "power3.out",
          onUpdate() {
            number2.textContent = `US$${this.targets()[0].val.toFixed(1)}`;
          },
        }
      );
    }

    if (centerNumber) {
      gsap.to(
        { val: 0 },
        {
          val: targetPercent,
          duration: 1,
          ease: "power3.out",
          onUpdate() {
            centerNumber.textContent = `${this.targets()[0].val.toFixed(1)}%`;
          },
        }
      );
    }
  });
};

export const animateBarsOnce = ({
  data,
  barsRef,
  numbersRef,
  heightFactor,
  trigger,
}: {
  data: { value: number; label: string; color?: string }[];
  barsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  numbersRef: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  heightFactor: number;
  trigger: HTMLElement;
}) => {
  data.forEach((item, i) => {
    const bar = barsRef.current[i];
    const number = numbersRef.current[i];
    if (!bar || !number) return;

    const obj = { val: 0 };

    gsap.to(bar, {
      height: item.value * heightFactor,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 80%",
        once: true,
      },
    });

    gsap.to(obj, {
      val: item.value,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => {
        number.textContent = `${obj.val.toFixed(2)} MW`;
      },
      scrollTrigger: {
        trigger,
        start: "top 80%",
        once: true,
      },
    });
  });
};

export const animatePercentageOnce = (
  element: HTMLElement | null,
  endValue: number,
  trigger: HTMLElement
) => {
  if (!element) return;

  const obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration: 2,
    ease: "power1.out",
    onUpdate: () => {
      element.textContent = `${obj.val.toFixed(1)}%`;
    },
    scrollTrigger: {
      trigger,
      start: "top 80%",
      once: true,
    },
  });
};

/* ========================================
   Sección: Animación de Line Charts
======================================== */
export const animateLineChart = (
  pathRef: React.RefObject<SVGPathElement | null>,
  pointsRef: React.MutableRefObject<(SVGCircleElement | null)[]>
) => {
  if (!pathRef.current) return;

  const path = pathRef.current;
  const pathLength = path.getTotalLength();
  path.style.strokeDasharray = `${pathLength}`;
  path.style.strokeDashoffset = `${pathLength}`;

  const tl = gsap.timeline({ delay: 0.5 });
  tl.to(path, { strokeDashoffset: 0, duration: 2, ease: "power2.out" });

  // Filtrar puntos nulos
  const validPoints = pointsRef.current.filter(
    (point) => point !== null
  ) as SVGCircleElement[];

  validPoints.forEach((point, index) => {
    gsap.set(point, { scale: 0, transformOrigin: "center" });
    tl.to(
      point,
      { scale: 1, duration: 0.3, ease: "back.out(1.7)" },
      `-=${1.8 - index * 0.3}`
    );
  });

  const finalPoint = validPoints[validPoints.length - 1];
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
};

export function animateStagePathsOnScroll(paths: (SVGPathElement | null)[]) {
  if (!paths) return;

  paths.forEach((path) => {
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.transition = "stroke-dashoffset 1s linear";
    path.style.fill = "none";
    path.style.stroke = "#23B53E";
    path.style.strokeWidth = "2";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const path = entry.target as SVGPathElement;
        if (entry.isIntersecting) {
          path.style.strokeDashoffset = "0";
          observer.unobserve(path);
        }
      });
    },
    { threshold: 0.1 }
  );

  paths.forEach((path) => {
    if (path) observer.observe(path);
  });
}

/* ========================================
   Animación de doble línea SVG
======================================== */
export const animateDoubleLineChart = (
  paths: (SVGPathElement | null)[],
  pointsArray: React.MutableRefObject<(SVGCircleElement | null)[]>[]
) => {
  // Filtrar paths nulos
  const validPaths = paths.filter((path) => path !== null) as SVGPathElement[];

  validPaths.forEach((path, index) => {
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: path.closest(".line-chart-two"),
        start: "top 80%",
        once: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, duration: 2, ease: "power2.out" });

    const pointsRef = pointsArray[index]?.current;
    if (!pointsRef) return;

    const validPoints = pointsRef.filter(
      (point) => point !== null
    ) as SVGCircleElement[];

    validPoints.forEach((point, i) => {
      gsap.set(point, { scale: 0, transformOrigin: "center" });
      tl.to(
        point,
        { scale: 1, duration: 0.3, ease: "back.out(1.7)" },
        `-=${1.8 - i * 0.3}`
      );
    });
  });
};
