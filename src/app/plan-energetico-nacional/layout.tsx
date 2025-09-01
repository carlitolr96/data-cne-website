"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";

export default function PlanEnergeticoNacionalLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
