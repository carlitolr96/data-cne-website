// app/tablero-dinamico/layout.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SideBarNav from "@/components/tablero-dinamico/SideBarNav";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

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
        <SideBarNav
          isOpen={isOpen}
          isMobile={isMobile}
          onClose={closeSidebar}
          onItemClick={closeSidebar}
        />
      </div>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeSidebar}
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

        <main className="flex-1 bg-light overflow-auto">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-full">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando reporte...</p>
              </div>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
}