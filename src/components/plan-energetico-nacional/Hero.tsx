import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-primary"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center"></div>
    </section>
  );
}
