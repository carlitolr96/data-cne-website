"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Loading() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animación de entrada
    tl.fromTo(loaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    )
    .fromTo(logoRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
      "-=0.3"
    )
    .to(progressBarRef.current, {
      width: "80%",
      duration: 1.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-full p-6">
      <div ref={loaderRef} className="text-center max-w-md mx-auto">
        <div ref={logoRef} className="mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800">Cargando Reporte</h2>
          <p className="mt-2 text-gray-600">Preparando visualización de Power BI...</p>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
          <div 
            ref={progressBarRef} 
            className="bg-blue-600 h-full rounded-full w-0"
          ></div>
        </div>
        
        <div className="flex justify-center space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full opacity-60"
              style={{
                animation: `pulse 1.5s infinite ${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}