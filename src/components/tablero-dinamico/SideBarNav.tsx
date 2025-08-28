"use client";

import { useState, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import {
  assets,
  tablerodinamicobar,
} from "../../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarNav() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  }, []);

  return (
    <div
      className={`bg-primary text-white h-screen p-5 pt-8 flex flex-col justify-between 
        ${open ? "w-75" : "w-20"} duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-primary text-3xl rounded-full absolute -right-3 top-9 border border-primary cursor-pointer transition-transform z-50
          ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      <div className="flex items-center justify-center mb-8">
        <Link href="/">
          <Image
            src={assets.logoDataCNE}
            alt="Data CNE"
            width={open ? 150 : 50}
            height={open ? 80 : 50}
            className="transition-all duration-300"
          />
        </Link>
      </div>

      <div></div>

      <ul className="flex-1 flex flex-col gap-2">
        {tablerodinamicobar.map((item, index: number) => {
          const isActive = pathname === item.url;

          return (
            <li key={index}>
              <Link
                href={item.url}
                className={`flex items-center rounded-md p-2 cursor-pointer transition-colors
                  ${isActive
                    ? "bg-white text-primary font-semibold"
                    : "text-white hover:bg-white/20"
                  }
                  ${open ? "gap-2 justify-start" : "justify-center"}
                `}
              >
                <Image
                  src={item.icon}
                  className="w-9 h-9 transition-color"
                  alt={item.title}
                  width={200}
                  height={200}
                />

                {open && (
                  <span className="whitespace-normal break-words transition-all duration-300">
                    {item.title}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 text-center">
        {open && <p className="text-xs text-white/70">© 2025 Data CNE.</p>}
      </div>
    </div>
  );
}
