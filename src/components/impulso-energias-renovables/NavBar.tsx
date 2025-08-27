"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { navitemsone } from "@/assets/assets";
import gsap from "gsap";
import Link from "next/link";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          duration: 0.5,
          height: "auto",
          opacity: 1,
          ease: "power3.out",
        });
      } else {
        gsap.to(menuRef.current, {
          duration: 0.5,
          height: 0,
          opacity: 0,
          ease: "power3.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        className={`hamburger hamburger--spin custom-hamburger z-50 hidden md:hidden ${
          isOpen ? "is-active" : ""
        }`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div
        ref={menuRef}
        className="overflow-hidden md:hidden bg-white shadow-lg rounded-2xl absolute top-16 left-0 w-full mt-2 z-40"
        style={{ height: 0, opacity: 0 }}
      >
        <nav className="flex flex-col gap-6 p-4">
          {navitemsone.map((item, index) => (
            <Link
              key={index}
              href={item.url || "#"}
              className="flex text-start items-center gap-3"
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={32}
                  height={32}
                  className=""
                />
              )}
              <span className="text-sm text-primary font-bold">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <nav className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {navitemsone.map((item, index) => (
          <Link
            key={index}
            href={item.url || "#"}
            className="flex flex-col items-center"
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt={item.label}
                width={32}
                height={32}
                className="mb-2"
              />
            )}
            <span className="text-sm text-primary font-bold text-center">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
