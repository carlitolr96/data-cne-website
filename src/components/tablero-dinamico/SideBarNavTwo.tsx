"use client";

import React from "react";
import { assets, tablerodinamicobar } from "../../assets/assets";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function SideBarNavTwo({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full md:h-auto">
      <div className="flex items-center justify-center py-4">
        <Link href="/">
          <Image
            src={assets.logoAzulDataCNE}
            alt="Data CNE"
            width={isOpen ? 150 : 40}
            height={40}
            className="transition-all duration-300"
          />
        </Link>
      </div>

      <nav className="flex-grow px-2">
        {tablerodinamicobar.map((item, index: number) => {
          const isActive = pathname === item.url;
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.url}
              className={`flex items-center gap-3 px-2 py-2 mt-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? "bg-gray-200 text-primary"
                  : "hover:bg-gray-300 text-gray-600"
              }`}
            >
              {Icon && <Icon className="w-6 h-6" />}
              {isOpen && <span>{item.title}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 text-center text-xs text-gray-400">
        {isOpen && "© 2025 Data CNE"}
      </div>
    </div>
  );
}
