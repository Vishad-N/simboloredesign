"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ProjectHeroProps {
  title: string;
  category: string;
  shortDescription: string;
  heroImage: string;
}

export default function ProjectHero({ title, category, shortDescription, heroImage }: ProjectHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-bglight flex items-end pb-24 md:pb-32 px-4 md:px-8">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bglight via-bglight/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1320px] mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-white/80 backdrop-blur-sm text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider shadow-sm border border-white/50">
              {category}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-dark mb-6 tracking-tight leading-[1.05]"
          >
            {title}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-md"
        >
          <p className="text-dark/80 text-lg md:text-xl font-medium leading-relaxed bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-soft">
            {shortDescription}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
