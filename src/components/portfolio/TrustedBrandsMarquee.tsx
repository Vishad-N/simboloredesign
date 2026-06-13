"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Brand 1", src: "/brand logos/1.png" }, // Reusing the site logo as placeholder for brands
  { name: "Brand 2", src: "/brand logos/2.png" },
  { name: "Brand 3", src: "/brand logos/3.png" },
  { name: "Brand 4", src: "/brand logos/4.png" },
  { name: "Brand 5", src: "/brand logos/5.png" },
  { name: "Brand 6", src: "/brand logos/6.png" },
  { name: "Brand 7", src: "/brand logos/7.png" },
  { name: "Brand 8", src: "/brand logos/8.png" },
  { name: "Brand 9", src: "/brand logos/9.png" },
  { name: "Brand 10", src: "/brand logos/10.png" },
  { name: "Brand 11", src: "/brand logos/11.png" },
  { name: "Brand 12", src: "/brand logos/12.png" },
  { name: "Brand 13", src: "/brand logos/13.png" },
  { name: "Brand 14", src: "/brand logos/14.png" },
  { name: "Brand 15", src: "/brand logos/15.png" },
]

export default function TrustedBrandsMarquee() {
  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 mb-8 text-center">
        <h3 className="text-sm font-semibold text-soft uppercase tracking-widest">
          Trusted By Industry Leaders
        </h3>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Track 1 */}
        <div className="flex animate-marquee shrink-0 items-center gap-16 pr-16">
          {brands.map((brand, i) => (
            <div key={i} className="flex-shrink-0 relative group/brand cursor-pointer">
              <div className="w-40 h-20 relative opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop) */}
        <div className="flex animate-marquee shrink-0 items-center gap-16 pr-16" aria-hidden="true">
          {brands.map((brand, i) => (
            <div key={`dup-${i}`} className="flex-shrink-0 relative group/brand cursor-pointer">
              <div className="w-40 h-20 relative opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Gradients for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
