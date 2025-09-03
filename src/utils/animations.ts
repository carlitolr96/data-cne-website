import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Definir la interfaz BarData que falta
interface BarData {
  value: number;
  label: string;
  color?: string;
}

/* ========================================
   Sección: Animación de contadores
======================================== */

// Contadores de la sección AmericanLider
export const animateAmericanLiderCounters = (
  section: HTMLElement | null,
  setRankingLatam: (val: number) => void,
  setRankingGlobal: (val: number) => void,
  finalValues: { rankingLatam: number; rankingGlobal: number }
) => {
  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRankingLatam(0);
          setRankingGlobal(0);

          gsap.to({ val: 0 }, {
            val: finalValues.rankingLatam,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: function () {
              setRankingLatam(Math.floor(this.targets()[0].val));
            },
          });

          gsap.to({ val: 0 }, {
            val: finalValues.rankingGlobal,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: function () {
              setRankingGlobal(Math.floor(this.targets()[0].val));
            },
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
  return () => observer.disconnect();
};


// Contadores de la sección Concession

export const animateConcessionCounters = (
  section: HTMLElement | null,
  setConcesionesDef: (val: number) => void,
  setConcesionesProv: (val: number) => void,
  setCapacidadMW: (val: number) => void,
  finalValues: { concesionesDef: number; concesionesProv: number; capacidadMW: number }
) => {
  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setConcesionesDef(0);
          setConcesionesProv(0);
          setCapacidadMW(0);

          gsap.to({ val: 0 }, {
            val: finalValues.concesionesDef,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: function () {
              setConcesionesDef(Math.floor(this.targets()[0].val));
            },
          });

          gsap.to({ val: 0 }, {
            val: finalValues.concesionesProv,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: function () {
              setConcesionesProv(Math.floor(this.targets()[0].val));
            },
          });

          gsap.to({ val: 0 }, {
            val: finalValues.capacidadMW,
            duration: 2,
            ease: "power1.out",
            onUpdate: function () {
              setCapacidadMW(Math.floor(this.targets()[0].val));
            },
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
  return () => observer.disconnect();
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
    tl.fromTo(progressEl, { width: "0%" }, { width: "100%", duration: 3.5, ease: "power2.out" });
  }

  const animateNumber = (el: HTMLElement | null, endValue: number) => {
    if (!el) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: endValue,
      duration: 1.5,
      ease: "power1.out",
      onUpdate: () => { el.innerText = `${Math.floor(obj.val)}%`; },
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
  // Filtrar elementos nulos
  const validPoints = points.filter(point => point !== null);
  const validTooltips = tooltips.filter(tooltip => tooltip !== null);
  
  gsap.fromTo(validPoints, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)" });

  validTooltips.forEach((tooltip) => {
    if (activeId === tooltip.dataset?.id) {
      gsap.fromTo(tooltip, { scale: 0.8, opacity: 0, y: 10 }, { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out", pointerEvents: "auto" });
    } else {
      gsap.to(tooltip, { scale: 0.8, opacity: 0, duration: 0.3, ease: "power3.in", pointerEvents: "none" });
    }
  });
};

/* ========================================
   Sección: Animación de números
======================================== */
export const animateNumbers = (projectsEl: HTMLHeadingElement | null, capacityEl: HTMLSpanElement | null) => {
  if (projectsEl) {
    const obj = { val: 0 };
    gsap.to(obj, { val: 35, duration: 1.5, ease: "power3.out", onUpdate: () => { projectsEl.textContent = `${Math.floor(obj.val)} PROYECTOS`; } });
  }
  if (capacityEl) {
    const obj = { val: 0 };
    gsap.to(obj, { val: 1436.31, duration: 1.8, ease: "power3.out", onUpdate: () => { capacityEl.textContent = `${obj.val.toFixed(2)} MW`; } });
  }
};

export const animateNumberList = (elements: (HTMLSpanElement | null)[], targets: number[]) => {
  // Filtrar elementos nulos
  const validElements = elements.filter(el => el !== null) as HTMLSpanElement[];
  
  validElements.forEach((el, i) => {
    if (i >= targets.length) return;
    
    const obj = { val: 0 };
    gsap.to(obj, {
      val: targets[i],
      duration: 1.5,
      ease: "power3.out",
      onUpdate: () => { el.textContent = Math.floor(obj.val).toLocaleString(); },
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    });
  });
};

/* ========================================
   Sección: Animación de charts y barras
======================================== */
export const animateCharts = (el: HTMLElement | null) => {
  if (!el) return;
  gsap.fromTo(
    el,
    { autoAlpha: 0, y: 50, scale: 0.95 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%", once: true } }
  );
};

export const resetCharts = (
  refs: {
    barsRef: React.RefObject<(HTMLDivElement | null)[]>;
    numbersRef: React.RefObject<(HTMLSpanElement | null)[]>;
  }
) => {
  const { barsRef, numbersRef } = refs;
  
  // Verificar que los arrays existan
  if (!barsRef.current || !numbersRef.current) return;
  
  // Filtrar elementos nulos
  const validBars = barsRef.current.filter(bar => bar !== null) as HTMLDivElement[];
  const validNumbers = numbersRef.current.filter(num => num !== null) as HTMLSpanElement[];
  
  validBars.forEach(bar => {
    gsap.set(bar, { height: 0 });
  });
  
  validNumbers.forEach(number => {
    number.textContent = "0 MW";
  });
};

export const animateChartsTwo = ({
  data,
  barsRef,
  numbersRef,
  heightFactor = 1.5
}: {
  data: BarData[];
  barsRef: React.RefObject<(HTMLDivElement | null)[]>;
  numbersRef: React.RefObject<(HTMLSpanElement | null)[]>;
  heightFactor?: number;
}) => {
  // Verificar que los arrays existan
  if (!barsRef.current || !numbersRef.current) return;
  
  // Filtrar elementos nulos
  const validBars = barsRef.current.filter(bar => bar !== null) as HTMLDivElement[];
  const validNumbers = numbersRef.current.filter(num => num !== null) as HTMLSpanElement[];
  
  validBars.forEach((bar, i) => {
    if (i < data.length) {
      gsap.to(bar, {
        height: `${data[i].value * heightFactor}px`,
        duration: 1.5,
        ease: "power3.out",
        delay: i * 0.2
      });
    }
  });
  
  validNumbers.forEach((number, i) => {
    if (i < data.length) {
      // Solucionar el problema con 'this' usando una variable local
      const progressObj = { progress: 0 };
      
      gsap.to(progressObj, {
        progress: 1,
        duration: 1.5,
        delay: i * 0.2,
        onUpdate: () => {
          const currentValue = Math.floor(data[i].value * progressObj.progress);
          number.textContent = `${currentValue} MW`;
        }
      });
    }
  });
};

/* Double Bar Charts */
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

export const resetDoubleCharts = ({ 
  bars1Ref, 
  bars2Ref, 
  numbers1Ref, 
  numbers2Ref, 
  centerNumberRef 
}: { 
  bars1Ref: React.MutableRefObject<(HTMLDivElement | null)[]>; 
  bars2Ref: React.MutableRefObject<(HTMLDivElement | null)[]>; 
  numbers1Ref: React.MutableRefObject<(HTMLSpanElement | null)[]>; 
  numbers2Ref: React.MutableRefObject<(HTMLSpanElement | null)[]>; 
  centerNumberRef: React.MutableRefObject<(HTMLSpanElement | null)[]>; 
}) => {
  // Filtrar y procesar elementos no nulos
  bars1Ref.current.filter(bar => bar !== null).forEach(bar => {
    gsap.set(bar!, { height: 0 });
  });
  
  numbers1Ref.current.filter(num => num !== null).forEach(num => {
    num!.textContent = "0 MW";
  });
  
  bars2Ref.current.filter(bar => bar !== null).forEach(bar => {
    gsap.set(bar!, { height: 0 });
  });
  
  numbers2Ref.current.filter(num => num !== null).forEach(num => {
    num!.textContent = "0 MW";
  });
  
  centerNumberRef.current.filter(num => num !== null).forEach(num => {
    num!.textContent = "0%";
  });
};

export const animateDoubleCharts = ({ 
  data, 
  bars1Ref, 
  bars2Ref, 
  numbers1Ref, 
  numbers2Ref, 
  centerNumberRef, 
  heightFactor 
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
      gsap.to(bar1, { height: `${item.value1 * heightFactor}px`, duration: 1, ease: "power3.out" });
      const obj1 = { val: 0 };
      gsap.to(obj1, { val: item.value1, duration: 1, ease: "power3.out", onUpdate() { number1.textContent = `${Math.floor(obj1.val)} MW`; } });
    }

    if (bar2 && number2) {
      gsap.to(bar2, { height: `${item.value2 * heightFactor}px`, duration: 1, ease: "power3.out" });
      const obj2 = { val: 0 };
      gsap.to(obj2, { val: item.value2, duration: 1, ease: "power3.out", onUpdate() { number2.textContent = `${Math.floor(obj2.val)} MW`; } });
    }

    if (centerNumber) {
      const objCenter = { val: 0 };
      gsap.to(objCenter, { val: targetPercent, duration: 1, ease: "power3.out", onUpdate() { centerNumber.textContent = `${objCenter.val.toFixed(1)}%`; } });
    }
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
  const validPoints = pointsRef.current.filter(point => point !== null) as SVGCircleElement[];
  
  validPoints.forEach((point, index) => {
    gsap.set(point, { scale: 0, transformOrigin: "center" });
    tl.to(point, { scale: 1, duration: 0.3, ease: "back.out(1.7)" }, `-=${1.8 - index * 0.3}`);
  });

  const finalPoint = validPoints[validPoints.length - 1];
  if (finalPoint) {
    tl.to(finalPoint, { scale: 1.3, duration: 0.5, yoyo: true, repeat: 1, ease: "power2.inOut" }, "+=0.5");
  }
};

/* ========================================
   Sección: Animación de paths SVG (Stage)
======================================== */
export const animateStagePaths = (paths: (SVGPathElement | null)[]) => {
  // Filtrar paths nulos
  const validPaths = paths.filter(path => path !== null) as SVGPathElement[];
  
  validPaths.forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, fill: "transparent" });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: path.closest(".stage-item"),
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      onComplete: () => {
        gsap.to(path, { fill: "#23B53E", duration: 0.5 });
      },
    });
  });
};

/* ========================================
   Animación de doble línea SVG
======================================== */
export const animateDoubleLineChart = (
  paths: (SVGPathElement | null)[],
  pointsArray: React.MutableRefObject<(SVGCircleElement | null)[]>[]
) => {
  // Filtrar paths nulos
  const validPaths = paths.filter(path => path !== null) as SVGPathElement[];
  
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
    
    // Filtrar puntos nulos
    const validPoints = pointsRef.filter(point => point !== null) as SVGCircleElement[];
    
    validPoints.forEach((point, i) => {
      gsap.set(point, { scale: 0, transformOrigin: "center" });
      tl.to(point, { scale: 1, duration: 0.3, ease: "back.out(1.7)" }, `-=${1.8 - i * 0.3}`);
    });
  });
};