"use client";

import Link from "next/link";
import { FC, ReactNode, MouseEventHandler } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

interface BotonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  icon?: keyof typeof assets;
  iconPosition?: "left" | "right";
  color?: "red" | "green" | "primary";
  showTextOnMobile?: boolean;
}

const Boton: FC<BotonProps> = ({
  href,
  children,
  className,
  onClick,
  disabled,
  icon,
  iconPosition = "left",
  color = "red",
  showTextOnMobile = true,
}) => {
  const colorClasses: Record<string, string> = {
    red: "bg-red hover:bg-red-700",
    green: "bg-green hover:bg-green-700",
    primary: "bg-primary hover:bg-blue-700",
  };

  const baseClasses = `
    ${colorClasses[color]} text-white font-bold py-2 px-6 font-montserrat 
    cursor-pointer rounded-full shadow-lg transition-all duration-300 
    hover:scale-105 inline-flex items-center justify-center 
    ${className ?? ""}
  `;

  const iconElement =
    icon &&
    (typeof assets[icon] === "string" && assets[icon].endsWith(".svg") ? (
      <img
        src={assets[icon]}
        alt={`${icon} icon`}
        className={`${iconPosition === "left" ? "mr-2" : "ml-2"} w-5 h-5`}
      />
    ) : (
      <Image
        src={assets[icon]}
        alt={`${icon} icon`}
        width={20}
        height={20}
        className={iconPosition === "left" ? "mr-0 md:mr-2" : "ml-2"}
      />
    ));

  const textElement = (
    <span className={`${showTextOnMobile ? "" : "hidden sm:inline"}`}>
      {children}
    </span>
  );

  const content = (
    <>
      {iconPosition === "left" && iconElement}
      {textElement}
      {iconPosition === "right" && iconElement}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${
        disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""
      }`}
    >
      {content}
    </button>
  );
};

export default Boton;
