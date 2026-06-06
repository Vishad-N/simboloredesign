"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Brand 1", src: "/lgo1.png" }, // Reusing the site logo as placeholder for brands
  { name: "Brand 2", src: "/lgo2.png" },
  { name: "Brand 3", src: "/lgo3.png" },
  { name: "Brand 4", src: "/lgo4.png" },
  { name: "Brand 5", src: "/lgo5.png" },
  { name: "Brand 6", src: "/lgo6.png" },
  { name: "Brand 7", src: "/lgo7.png" },
  { name: "Brand 8", src: "/lgo8.png" },
  { name: "Brand 9", src: "/lgo9.png" },
  { name: "Brand 10", src: "/lgo10.png" },
  { name: "Brand 11", src: "/lgo11.png" },
  { name: "Brand 12", src: "/lgo12.png" },
  { name: "Brand 13", src: "/lgo13.png" },
]

export default function TrustedBrandsMarquee() {
  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 mb-8 text-center">
        <h3 className="text-sm font-semibold text-soft uppercase tracking-widest">
          Trusted By Industry Leaders
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee space-x-16 px-8 items-center">
          {[...brands, ...brands].map((brand, i) => (
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
        {/* <div className="absolute top-0 animate-marquee2 flex space-x-16 px-8 items-center" aria-hidden="true">
          {[...brands, ...brands].map((brand, i) => (
            <div key={`dup-${i}`} className="flex-shrink-0 relative group/brand cursor-pointer">
              <div className="w-32 h-16 relative grayscale opacity-60 group-hover/brand:grayscale-0 group-hover/brand:opacity-100 transition-all duration-300">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div> */}

        {/* Gradients for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
