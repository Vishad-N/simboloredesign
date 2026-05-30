"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { type PointerEvent } from "react";

interface Stacked3DCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Stacked3DCard({ 
  children, 
  className = "",
  containerClassName = ""
}: Stacked3DCardProps) {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking the cursor position
  const hoverX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.2 });
  const hoverY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.2 });

  // Map mouse movement to subtle 3D rotation
  const rotateX = useTransform(hoverY, [-10, 10], [4, -4]);
  const rotateY = useTransform(hoverX, [-10, 10], [-4, 4]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    
    // Only apply 3D movement on desktop where pointer events are reliable
    if (window.innerWidth < 1024) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const pointX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const pointY = (event.clientY - bounds.top) / bounds.height - 0.5;

    mouseX.set(pointX * 20);
    mouseY.set(pointY * 20);
  }

  function resetCard() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className={`relative z-10 w-full ${containerClassName}`}
      style={{ perspective: 1400 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
      onBlur={resetCard}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* 3D Rotated Container */}
      <motion.div
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full group"
      >
        {/* Layer 1: Deepest shadow/glass layer */}
        <div 
          className="absolute inset-0 rounded-[28px] bg-black/5 opacity-40 blur-[4px] border border-white/10 group-hover:opacity-60 transition-all duration-700 ease-out pointer-events-none"
          style={{ transform: "translateZ(-40px) translateY(12px) scale(0.92)" }}
        />
        
        {/* Layer 2: Middle shadow/glass layer */}
        <div 
          className="absolute inset-0 rounded-[28px] bg-black/10 opacity-60 blur-[2px] border border-white/20 group-hover:opacity-80 transition-all duration-700 ease-out pointer-events-none"
          style={{ transform: "translateZ(-20px) translateY(6px) scale(0.96)" }}
        />

        {/* Main Card Content */}
        <div 
          className={`relative h-full w-full rounded-[28px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08),0_30px_60px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out ${className}`}
          style={{ transform: "translateZ(0)" }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
