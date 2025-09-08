"use client";

import { useState, useEffect } from "react";
import { assets, navitemsone } from "../assets/assets";
import { Squash as Hamburger } from "hamburger-react";
import Boton from "@/components/Boton";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const yearActual = new Date().getFullYear();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Barra superior */}
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
            className="max-w-[90px] w-full h-auto transition-all duration-300"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-5">
          <Boton
            href="/tablero-dinamico/proyectos-renovables"
            color="green"
            iconPosition="left"
            icon="GrapChart"
            className="uppercase whitespace-nowrap text-xs px-3 py-2 sm:text-sm sm:px-4 sm:py-2"
            showTextOnMobile={false}
          >
            Ir Al Tablero
          </Boton>

          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={25}
            color={"#fff"}
          />
        </div>
      </nav>

      {/* Overlay para cerrar menú al hacer click fuera */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 transition-opacity duration-300 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Menú lateral */}
      <aside
        className={`fixed top-0 left-0 h-screen w-full md:w-90 bg-black/60 backdrop-blur-lg shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between py-4 px-4 md:px-6 mb-10">
          <Link href="/">
            <Image
              src={assets.logoDataCNE}
              alt="Data CNE"
              width={100}
              height={40}
              className="transition-all duration-300"
            />
          </Link>
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              size={25}
              color="#fff"
            />
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-4 md:mt-5 px-4 md:px-2 pb-20">
          {navitemsone.map((item, index) => (
            <Link
              key={index}
              href={item.url || "#"}
              className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 text-white hover:bg-white/50 hover:text-white hover:shadow-md"
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={25}
                  height={25}
                  className="object-contain transition-all duration-300 group-hover:invert"
                />
              )}
              <span className="text-[14px] font-medium capitalize font-montserrat">
                {item.label}
              </span>
            </Link>
          ))}
          <div className="flex justify-center">
            <Boton
              href="/tablero-dinamico/proyectos-renovables"
              color="green"
              iconPosition="left"
              icon="GrapChart"
              className="uppercase whitespace-nowrap text-xs px-3 py-2 sm:text-sm sm:px-4 sm:py-2 gap-2 md:gap-0 w-fit"
              showTextOnMobile={true}
            >
              Ir al Tablero
            </Boton>
          </div>
        </div>

        <div className="absolute bottom-0 w-full flex flex-col items-center p-2 text-xs text-gray-400 opacity-40">
          <Image
            src={assets.logoCNE}
            alt="CNE Logo"
            width={150}
            height={40}
            className="opacity-40 mb-5"
          />
          <span>© {yearActual} Data CNE</span>
        </div>
      </aside>
    </header>
  );
};

export default NavBar;
