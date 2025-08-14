'use client';

import Link from "next/link";
import { FC, ReactNode, MouseEventHandler } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

interface BotonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  icon?: keyof typeof assets;
  iconPosition?: 'left' | 'right';
}

const Boton: FC<BotonProps> = ({ 
  href, 
  children, 
  className, 
  onClick, 
  disabled, 
  icon,
  iconPosition = 'left'
}) => {
  const baseClasses = `
    bg-red hover:bg-red-700 text-white font-bold py-2 px-6 font-montserrat 
    cursor-pointer rounded-full shadow-lg transition-all duration-300 
    hover:scale-105 inline-flex items-center justify-center 
    ${className ?? ""}
  `;

  const iconElement = icon && (
    <Image 
      src={assets[icon]} 
      alt={`${icon} icon`} 
      width={20} 
      height={20} 
      className={iconPosition === 'left' ? "mr-2" : "ml-2"}
    />
  );

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
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
      className={`${baseClasses} ${disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""}`}
    >
      {content}
    </button>
  );
};

export default Boton;