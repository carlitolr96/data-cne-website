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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-3.5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={isScrolled ? assets.logoAzulDataCNE : assets.logoDataCNE}
            alt="CNE Logo"
            width={200}
            height={48}
            className="max-w-[120px] w-full h-auto transition-all duration-300"
          />
        </Link>

        <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          size={25}
          color={isScrolled ? "#17447a" : "#fff"}
        />
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-full md:w-90 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 p-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={25}
            color="#000"
          />
        </button>

        <div className="flex flex-col gap-6 mt-20 px-6">
          {navitemsone.map((item, index) => (
            <Link
              key={index}
              href={item.url || "#"}
              className="flex items-center gap-3 px-5 py-2 rounded-lg transition-all duration-300 text-primary hover:bg-primary hover:text-white hover:shadow-md"
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={32}
                  height={32}
                  className="object-contain transition-all duration-300 group-hover:invert"
                />
              )}
              <span className="text-sm font-bold">{item.label}</span>
            </Link>
          ))}

          <Boton
            href="/tablero-dinamico"
            color="green"
            iconPosition="left"
            icon="GrapChart"
            className="uppercase mt-3"
          >
            Tablero Dinamico
          </Boton>
        </div>
      </aside>
    </header>
  );
};

export default NavBar;
