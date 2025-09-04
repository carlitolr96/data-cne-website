"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOnPrimary, setIsOnPrimary] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    // Detectar si está sobre bg-primary
    const sections = document.querySelectorAll<HTMLElement>(".bg-primary");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOnPrimary(true);
          } else {
            setIsOnPrimary(false);
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce
            ${isOnPrimary ? "bg-white text-primary hover:bg-gray-100" : "bg-primary text-white hover:bg-primary/80"}`}
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
