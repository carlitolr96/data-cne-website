"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import Boton from "@/components/Boton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function FeedGrid() {
  const openPopup = () => {
    MySwal.fire({
      html: `
      <div class="relative w-full h-0 pb-[56.25%]">
        <iframe 
          class="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
          src="" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      </div>
    `,
      showConfirmButton: false,
      backdrop: `
      rgba(0,0,0,0.4)
    `,
      customClass: {
        container: "swal2-blur-bg",
        popup: "bg-transparent shadow-none p-0",
      },
      width: "70%",
    });
  };

  return (
    <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-2 border-b-[15px] border-red">
      <div className="flex items-center justify-center relative w-full h-full min-h-[250px]">
        <Image
          src={assets.ImageComunidad}
          alt="CNE Escuela"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-light flex flex-col items-center justify-center p-3">
        <Image
          src={assets.LogoEnergiaCambio}
          alt="CNE Logo"
          className="mx-auto"
        />
        <Boton href="/" className="uppercase mt-3">
          Descubre más
        </Boton>
      </div>

      <div className="lg:row-span-2 lg:col-start-3 flex items-center justify-center relative w-full h-full">
        <Image
          src={assets.ImageGente}
          alt="CNE Educación"
          fill
          className="object-cover object-[46%_75%]"
        />
      </div>

      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 flex items-center justify-center relative w-full h-full min-h-[250px] cursor-pointer group">
        <Image
          src={assets.ImageEscuela}
          alt="CNE Gente"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/50"></div>

        <button
          onClick={openPopup}
          className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-white text-red-600 animate-pulse shadow-lg hover:scale-110 transition-transform cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4-2.5a.5.5 0 0 0 0-.814l-4-2.5z" />
          </svg>
        </button>
      </div>

      <div className="lg:col-start-4 flex relative w-full h-full min-h-[250px]">
        <Image
          src={assets.ImageBarrio}
          alt="CNE Comunidad"
          className="object-cover object-[50%_75%]"
        />
      </div>

      <div
        className="bg-primary flex justify-center items-center p-8 
                  lg:col-start-4 lg:row-start-2"
      >
        <p className="text-white text-lg text-center lg:text-left">
          Estamos impactando comunidades con la instalación de{" "}
          <span className="font-bold">
            sistemas de paneles solares y luminarias LED.
          </span>
        </p>
      </div>
    </section>
  );
}
