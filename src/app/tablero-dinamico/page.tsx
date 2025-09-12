"use client";

import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className=" relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 bg-white text-white min-h-100"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #fff 40%, #17447A 100%)",
      }}
    >
      <div className="absolute top-28 -z-10 left-1/4 size-72 bg-primary blur-[300px]" />

      <Link
        href="/"
        className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-primary bg-white/20 backdrop-blur-md border-1 border-gray/50"
      >
        <span className="bg-primary text-white text-xs px-3.5 py-1 rounded-full">
          New
        </span>
        <p className="flex items-center gap-1">
          <span>Centro de Datos</span>
          <IoIosArrowForward className="group-hover:translate-x-0.5 transition duration-300" />
        </p>
      </Link>

      <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-2xl text-center text-gray-500 font-montserrat">
        Free template to start your{" "}
        <span className="bg-gradient-to-r text-white from-primary to-blue-300 px-3 rounded-md whitespace-nowrap">
          Next.js site.
        </span>
      </h1>

      <p className="text-base text-center text-gray-500 max-w-lg mt-6">
        No complexity. No noise. Just clean, reliable automation to boost your
        team’s efficiency.
      </p>

      <div className="relative w-full max-w-4xl mt-16 h-[341px] overflow-hidden px-3 pt-3 rounded-t-3xl">
        <div className="absolute -inset-2 rounded-t-2xl border-t border-gray-300 z-0">
          <div className="w-full h-full bg-white/30 backdrop-blur-xl rounded-t-2xl"></div>
        </div>
        <Image
          src="/GraficoPowerBy.jpg"
          width={1200}
          height={800}
          priority
          quality={70}
          className="w-full h-full object-cover object-top rounded-t-2xl relative z-10"
          alt="Hero Sections Image"
        />

        {/* <Image
          src="/GraficoPowerBy.jpg"
          width={1200}
          height={800}
          className="
            w-full 
            h-[200px]        
            sm:h-[260px]     
            md:h-[320px]    
            lg:h-[400px]     
            object-cover 
            object-top 
            rounded-t-2xl 
            relative 
            z-10
          "
          alt="Hero Sections Image"
        /> */}
      </div>
    </section>
  );
}
