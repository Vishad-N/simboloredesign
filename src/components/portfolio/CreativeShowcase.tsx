"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const creatives = [
  { id: 1, title: "Facebook Ad Creative", type: "Paid Social", image: "/content.jpg", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Google Display Ad", type: "Display", image: "/graphic-design.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Landing Page UI", type: "Web Design", image: "/product-photography.jpg", span: "md:col-span-1 md:row-span-2" },
  { id: 4, title: "Instagram Carousel", type: "Organic", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", span: "md:col-span-1 md:row-span-1" },
  { id: 5, title: "Brand Identity", type: "Branding", image: "/graphic-design.jpg", span: "md:col-span-2 md:row-span-1" },
];

export default function CreativeShowcase() {
  return (
    <section className="py-24 bg-gray-900 text-white relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Creative Showcase
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            High-converting creatives designed to capture attention, communicate value, and drive action across all digital touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[250px] gap-4">
          {creatives.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-2xl bg-gray-800 ${item.span} cursor-pointer`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full mb-2 w-max">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
