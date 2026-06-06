"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ZoomIn } from "lucide-react";

const categories = ["All", "Social Media", "Branding", "Advertising", "Posters", "Banners"];

const designs = [
  { id: 1, title: "Summer Campaign", category: "Social Media", image: "/hand.jpeg", aspect: "aspect-[4/5]" },
  { id: 2, title: "Eco Brand Identity", category: "Branding", image: "/grow.jpeg", aspect: "aspect-[4/5]" },
  { id: 3, title: "Sale Poster", category: "Posters", image: "/sale.jpeg", aspect: "aspect-[3/4]" },
  { id: 4, title: "Product Launch", category: "Advertising", image: "/summer.jpeg", aspect: "aspect-[4/5]" },
  { id: 5, title: "Web Banner", category: "Banners", image: "/graphic-design.jpg", aspect: "aspect-[21/9]" },
  { id: 6, title: "Festival Post", category: "Social Media", image: "/post.jpeg", aspect: "aspect-square" },
  { id: 7, title: "Luxury Real Estate", category: "Advertising", image: "/spacious.jpeg", aspect: "aspect-[4/5]" },
  { id: 8, title: "Corporate Rebrand", category: "Branding", image: "/prod.jpeg", aspect: "aspect-square" },
  { id: 9, title: "Event Poster", category: "Posters", image: "/event.jpeg", aspect: "aspect-[3/4]" },
];

export default function GraphicDesignShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDesigns = designs.filter(
    (design) => activeCategory === "All" || design.category === activeCategory
  );

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-gray-100 text-dark font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Creative Work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
              Graphic Design Portfolio
            </h2>
            <p className="text-soft text-lg">
              Scroll-stopping visuals designed to capture attention and communicate your brand's message effectively.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                  ? "bg-dark text-white shadow-md"
                  : "bg-gray-50 text-soft hover:bg-gray-100 hover:text-dark"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredDesigns.map((design) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={design.id}
                className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer bg-gray-100"
              >
                <div className={`relative w-full ${design.aspect}`}>
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2">
                        {design.category}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-1">{design.title}</h4>
                      <button className="text-white/80 text-sm font-medium hover:text-white flex items-center gap-1 group/btn">
                        View Design
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
