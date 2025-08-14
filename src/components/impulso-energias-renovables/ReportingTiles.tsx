"use client";

import React from "react";
import Image from "next/image";
import { reportingtile } from "../../assets/assets";

export default function ReportingTiles() {
  return (
    <section className="bg-primary py-3">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {reportingtile.map((tile, index) => (
            <div
              className="flex flex-col md:flex-row items-center p-4 relative"
              key={tile.id}
            >
              <div className="flex flex-shrink-0 items-center justify-center h-15 w-15 rounded">
                <Image
                  src={tile.icon}
                  alt={tile.description}
                  width={30}
                  height={30}
                />
              </div>

              <div className="flex-grow flex flex-col ml-0 md:ml-2 text-white text-center md:text-left">
                <span className="text-xl font-bold mb-1">{tile.number}</span>
                <span className="text-sm tracking-wider">
                  {tile.description}
                </span>

                {index < reportingtile.length - 1 && (
                  <div className="bg-red w-full h-[2px] mt-4 md:hidden"></div>
                )}
              </div>

              {index < reportingtile.length - 1 && (
                <div className="hidden md:block bg-red w-0.5 h-12 ml-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
