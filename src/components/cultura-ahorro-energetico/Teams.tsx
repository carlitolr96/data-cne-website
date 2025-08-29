"use client";

import { assets, teammembers } from "../../assets/assets";
import Image from "next/image";
import React from "react";

export default function Teams() {
  return (
    <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-12">
          <Image
            src={assets.TeamsIcon}
            alt="Teams CNE"
            width={50}
            height={50}
            className="mb-4"
          />
          <h2 className="text-3xl font-extrabold text-center text-primary uppercase">
            Conoce el equipo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
          {teammembers.map((items, index) => (
            <div key={index} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src={items.img}
                  alt={items.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-primary text-xl font-semibold mb-1">
                {items.name}
              </h3>
              <p className="text-primary">{items.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
