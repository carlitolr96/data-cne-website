"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import ToTopButton from "@/components/ToTopButton";

export default function ImpulsoLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
      <ToTopButton />
      <Footer />
    </main>
  );
}
