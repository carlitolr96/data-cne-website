import type { ReactNode } from "react";
import Footer from "@/components/Footer";

export default function ImpulsoLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      <Footer />
    </main>
  );
}
