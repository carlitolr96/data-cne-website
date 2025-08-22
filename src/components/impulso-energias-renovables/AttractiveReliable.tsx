import { assets, attractivereliable } from "@/assets/assets";
import Image from "next/image";

export default function AttractiveReliable() {
  return (
    <section className="bg-primary py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-4 flex flex-col">
        <div className="flex md:flex-row items-center justify-center text-center md:space-x-4 uppercase">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white px-3 py-1">
            UN MERCADO
          </h1>
          <span className="text-2xl sm:text-3xl md:text-4xl text-white bg-red font-bold mt-2 mx-0 md:mt-0">
            ATRACTIVO Y CONFIABLE
          </span>
        </div>
          <p className="text-white font-medium text-center text-2xl sm:text-2xl md:text-3xl">
            El país destaca por ofrecer:
          </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        {attractivereliable.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image
              src={assets.EllipseSVG}
              alt={item.label}
              className="w-5 h-5"
            />
            <span className="text-white text-lg">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
