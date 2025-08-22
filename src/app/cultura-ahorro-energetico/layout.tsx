"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";

export default function CulturaLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
