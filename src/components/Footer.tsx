"use client";

import React from "react";
import Link from "next/link";
import { socialicon } from "@/assets/assets";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">

          <p className="text-[11px] text-light text-center sm:text-left">
            &copy; {new Date().getFullYear()} Todos los Derechos Reservados.
            Desarrollado por la Comisión Nacional de Energía (CNE).
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 sm:mt-0">
            <span className="text-white font-medium text-sm">Síguenos:</span>
            <div className="flex gap-3">
              {socialicon.map(({ id, url, icon: Icon }) => (
                <Link
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:bg-gray-200 transition-transform transform hover:scale-110"
                >
                  <Icon className="text-primary w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
