"use client";

import { useRef, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/" },
    { name: "Contact", path: "/" },
    { name: "About", path: "/" },
  ];

  const ref = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleScroll = () => {
      setIsScrolled(node.scrollTop > 10);
    };

    node.addEventListener("scroll", handleScroll);

    return () => {
      node.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="h-88 md:h-64 overflow-y-scroll bg-white">
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
            : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={assets.logoCNE}
            alt="CNE Logo"
            width={200}
            height={48}
            className="max-w-[150px] w-full h-auto"
          />
        </Link>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <svg
            className={`h-6 w-6 text-white transition-all duration-500 ${
              isScrolled ? "invert" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <button
            className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
              isScrolled ? "text-white bg-black" : "bg-white text-black"
            }`}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}

          <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
            New Launch
          </button>

          <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
