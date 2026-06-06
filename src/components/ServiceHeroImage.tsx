"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ServiceHeroImage({ image, darkOverlay = true, bottomFade = true }: { image: string, darkOverlay?: boolean, bottomFade?: boolean }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className="absolute inset-0 -z-20 overflow-hidden"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;

        setPosition({ x, y });
      }}
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full h-full"
      >
        <Image src={image} alt="Service Background" fill className="object-cover" priority />
      </motion.div>
      {/* 60% Dark Overlay for readability */}
      {darkOverlay && <div className="absolute inset-0 bg-dark/60" />}
      {/* Subtle blur layer behind text via a centered radial gradient */}
      {darkOverlay && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)] backdrop-blur-[2px]" />}
      {/* Brand-themed gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-skyblue/20 mix-blend-overlay" />
      {/* Bottom fade out to smoothly blend with next section */}
      {bottomFade && <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />}
    </div>
  );
}
