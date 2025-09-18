"use client";

import { useState, useEffect } from "react";
import { assets, navitemsone } from "@/assets/assets";
import { Squash as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
import Boton from "@/components/Boton";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, setIsMobile] = useState(false);

  const normalizePath = (path: string) => path.replace(/\/+$/, "");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const yearActual = new Date().getFullYear();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Nav principal */}
      <nav
        className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-3.5 transition-all duration-300 ${
          isMenuOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } ${isScrolled ? "bg-black/40 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={assets.logoDataCNE}
            alt="CNE Logo"
            width={200}
            height={48}
            priority
            quality={70}
            className="max-w-[90px] w-full h-auto transition-all duration-300"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-5">
          <Boton
            href="/tablero-dinamico"
            color="green"
            iconPosition="left"
            icon="GrapChart"
            className={`uppercase whitespace-nowrap text-xs px-3 py-2 sm:text-sm sm:px-4 sm:py-2 ${
              normalizePath(pathname) === "/tablero-dinamico" ? "bg-green-600" : ""
            }`}
            showTextOnMobile={false}
          >
            Ir Al Tablero
          </Boton>

          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={25} color={"#fff"} />
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between py-4 px-4 mb-10 bg-black/80">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={assets.logoDataCNE}
              alt="Data CNE"
              width={100}
              height={40}
              priority
              quality={70}
            />
          </Link>
          <button onClick={() => setIsMenuOpen(false)}>
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={25} color="#fff" />
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-4 px-4 pb-20">
          {navitemsone.map((item, index) => (
            <Link
              key={index}
              href={item.url || "#"}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-white hover:bg-white/20 hover:shadow-md ${
                normalizePath(pathname) === normalizePath(item.url || "") ? "bg-green-600" : ""
              }`}
            >
              {item.icon && <Image src={item.icon} alt={item.label} width={25} height={25} />}
              <span className="text-[16px] font-medium capitalize font-montserrat">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 w-full flex flex-col items-center p-4 text-xs text-gray-400 opacity-60 bg-black/80">
          <Image src={assets.logoCNE} alt="CNE Logo" width={120} height={30} className="opacity-60 mb-3" />
          <span>© {yearActual} Data CNE</span>
        </div>
      </div>

      {/* Menú escritorio lateral */}
      <aside
        className={`hidden md:block fixed top-0 left-0 h-screen w-80 bg-black/60 backdrop-blur-lg shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between py-4 px-6 mb-10 bg-black/40">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image src={assets.logoDataCNE} alt="Data CNE" width={90} height={40} priority quality={70} />
          </Link>
          <button onClick={() => setIsMenuOpen(false)}>
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={25} color="#fff" />
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-4 px-4 pb-20">
          {navitemsone.map((item, index) => (
            <Link
              key={index}
              href={item.url || "#"}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-gray-300 hover:bg-white/20 hover:shadow-md ${
                normalizePath(pathname) === normalizePath(item.url || "") ? "bg-green-600 text-white" : ""
              }`}
            >
              {item.icon && <Image src={item.icon} alt={item.label} width={25} height={25} />}
              <span className="text-[14px] font-medium capitalize font-montserrat">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 w-full flex flex-col items-center p-4 text-xs text-gray-400 opacity-60 bg-black/40">
          <Image src={assets.logoCNE} alt="CNE Logo" width={150} height={40} priority quality={70} className="opacity-60 mb-3" />
          <span>© {yearActual} Data CNE</span>
        </div>
      </aside>
    </header>
  );
};

export default NavBar;
