"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <section className="py-24 px-4 md:px-8 bg-bglight relative">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {images.map((img, idx) => {
            // Make the first item span full width or alternate for masonry feel
            const isFullWidth = idx % 3 === 0;
            
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                className={`relative overflow-hidden rounded-[32px] group cursor-pointer ${
                  isFullWidth ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={img}
                  alt={`Project image ${idx + 1}`}
                  fill
                  sizes={isFullWidth ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
