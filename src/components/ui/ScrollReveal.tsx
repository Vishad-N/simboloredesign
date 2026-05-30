"use client";

import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  direction = "left", 
  className = "" 
}: ScrollRevealProps) {
  const xOffset = direction === "left" ? -120 : 120;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
