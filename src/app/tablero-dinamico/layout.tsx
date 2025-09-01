"use client";

import { useState, useEffect } from "react";
import SideBarNavTwo from "@/components/tablero-dinamico/SideBarNavTwo";
import { Menu, X } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`bg-white text-black transition-all duration-300 ${
          isMobile
            ? `fixed top-0 left-0 w-full h-screen z-50 transform ${
                isOpen ? "translate-y-0" : "-translate-y-full"
              }`
            : `${isOpen ? "w-64" : "w-16"} relative h-full`
        }`}
      >
        <SideBarNavTwo isOpen={isOpen} />
      </div>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col relative z-0">
        <div className="bg-gray-200 p-2 flex justify-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition z-50"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <main className="flex-1 bg-gray-100 overflow-auto">{children}</main>
      </div>
    </div>
  );
}