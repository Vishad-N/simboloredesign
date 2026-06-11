"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clientLogos } from "@/data/reelsShowcaseData";

export default function ClientSuccessBanner() {
  return (
    <section className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
          Trusted By Industry Leaders
        </h2>
        <p className="text-soft text-lg max-w-2xl mx-auto">
          We partner with ambitious brands to create scroll-stopping content that converts.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group py-4">
        <div className="flex animate-marquee space-x-8 px-4 items-center">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((brand, i) => (
            <div key={i} className="flex-shrink-0 relative group/brand flex flex-col items-center w-72 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
              <div className="w-32 h-16 relative opacity-70 group-hover/brand:opacity-100 transition-opacity duration-300 mb-6">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-center text-soft italic leading-relaxed">"{brand.quote}"</p>
            </div>
          ))}
        </div>

        {/* Gradients for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
