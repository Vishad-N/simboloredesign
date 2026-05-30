"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { type PointerEvent } from "react";

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function LiquidCard({ children, className = "" }: LiquidCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking the cursor position
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  function handlePointerMove({ currentTarget, clientX, clientY }: PointerEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Radial ripple: deep navy from the cursor fading outwards to transparent
  const background = useMotionTemplate`radial-gradient(circle 350px at ${springX}px ${springY}px, rgba(15, 23, 42, 0.95), rgba(17, 24, 39, 0.8) 40%, rgba(61, 199, 203, 0.15) 80%)`;

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`group relative overflow-hidden ${className}`}
    >
      {/* Liquid background ripple layer */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 -z-10"
        style={{ background }}
      />
      
      {/* Subtle light glowing diffusion layer for glass movement feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3dc7cb]/20 via-[#7dd3fc]/15 to-[#c4b5fd]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out -z-10 blur-2xl" />

      {/* Children content area */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
