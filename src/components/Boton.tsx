'use client';

import Link from "next/link";
import { FC, ReactNode, MouseEventHandler } from "react";

interface BotonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Boton: FC<BotonProps> = ({ href, children, className, onClick, disabled }) => {
  const baseClasses = `bg-red hover:bg-red-700 text-white font-bold py-2 px-6 mt-5 font-montserrat cursor-pointer rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseClasses} ${disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""}`}>
      {children}
    </button>
  );
};

export default Boton;