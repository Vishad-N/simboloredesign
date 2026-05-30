"use client";
import { motion } from "framer-motion";

interface FloatingArrowProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FloatingArrow({ className = "", children }: FloatingArrowProps) {
  return (
    <span className={`inline-block group-hover:translate-x-1.5 transition-transform duration-300 ease-out ${className}`} aria-hidden="true">
      <motion.span
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block"
      >
        {children || "→"}
      </motion.span>
    </span>
  );
}
