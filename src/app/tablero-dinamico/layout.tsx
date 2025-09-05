"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { assets } from "../../assets/assets";
import SideBarNav from "@/components/tablero-dinamico/SideBarNav";
import Link from "next/link";
import Image from "next/image";

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
        className={`bg-primary text-white transition-all duration-300 ${
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
        <div className="bg-white p-2 flex justify-between md:justify-start">
          <Link href="/">
            <Image
              src={assets.logoAzulDataCNE}
              alt="Data CNE"
              width={80}
              height={80}
              className="inline md:hidden transition-all duration-300"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white hover:bg-primary/90 transition z-50 cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <main className="flex-1 bg-white overflow-auto">
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
