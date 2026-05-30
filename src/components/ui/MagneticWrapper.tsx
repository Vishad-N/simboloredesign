"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "skyblue" | "purple" | "white";
  roundedClass?: string;
}

export default function MagneticWrapper({ 
  children, 
  className = "", 
  glowColor = "primary",
  roundedClass = "rounded-full"
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ x: number, y: number, id: number }[]>([]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply magnetic effect on desktop
    if (window.innerWidth < 768) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Spring positional shift
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top } = ref.current?.getBoundingClientRect() || { left: 0, top: 0 };
    const x = clientX - left;
    const y = clientY - top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);
  };

  const getGlowClass = () => {
    switch(glowColor) {
      case "skyblue": return "shadow-glow-skyblue";
      case "white": return "shadow-[0_0_30px_rgba(255,255,255,0.4)]";
      case "purple": return "shadow-glow-purple";
      case "primary":
      default:
        return "shadow-glow-primary";
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block group/magnetic ${roundedClass} ${className}`}
    >
      {/* The child content (the actual button/link) */}
      <div className={`relative z-10 w-full h-full ${roundedClass}`}>
        {children}
      </div>

      {/* Hover Glow Expansion */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover/magnetic:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm -z-10 ${roundedClass} ${getGlowClass()}`} 
      />

      {/* Ripple Effect Container */}
      <div className={`absolute inset-0 pointer-events-none overflow-hidden z-20 ${roundedClass}`}>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.4 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bg-white/40 mix-blend-overlay rounded-full w-24 h-24 -ml-12 -mt-12"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </div>
    </motion.div>
  );
}
