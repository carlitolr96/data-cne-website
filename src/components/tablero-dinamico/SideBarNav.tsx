"use client";

import React, { useState } from "react";
import { assets, tablerodinamicobar } from "../../assets/assets";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface SideBarNavProps {
  isOpen: boolean;
  isMobile?: boolean;
  onClose?: () => void;
  onItemClick?: () => void;
}

export default function SideBarNavTwo({
  isOpen,
  isMobile = false,
  onClose,
  onItemClick,
}: SideBarNavProps) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (index: number, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + window.scrollY,
      left: rect.right + window.scrollX + 10,
    });
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleItemClick = () => {
    if (onItemClick && isMobile) {
      onItemClick();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* LOGO */}
      <div className="flex items-center justify-between py-4 px-2">
        <Link href="/" onClick={handleItemClick}>
          <Image
            src={assets.logoAzulDataCNE}
            alt="Data CNE"
            width={isOpen ? 150 : 40}
            height={40}
            className="transition-all duration-300"
          />
        </Link>

        {isMobile && isOpen && (
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* NAV */}
      <nav className="flex-grow px-2">
        {tablerodinamicobar.map((item, index: number) => {
          const isActive = pathname === item.url;

          return (
            <div key={index} className="relative">
              <Link
                href={item.url}
                className={`flex items-center gap-3 px-2 py-2 mt-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-gray-200 text-primary"
                    : "hover:bg-gray-300 text-gray-600"
                }`}
                onMouseEnter={(e) => !isOpen && handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
                onClick={handleItemClick}
              >
                {/* Nuevo: Ícono como imagen */}
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                )}

                {isOpen && <span>{item.title}</span>}
              </Link>

              {!isOpen && hoveredItem === index && (
                <div
                  className="fixed bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg z-50 transition-opacity"
                  style={{
                    top: `${tooltipPosition.top}px`,
                    left: `${tooltipPosition.left}px`,
                  }}
                >
                  {item.title}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="p-2 text-center text-xs text-gray-400">
        {isOpen && "© 2025 Data CNE"}
      </div>
    </div>
  );
}
