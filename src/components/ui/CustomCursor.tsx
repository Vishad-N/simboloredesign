"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion";
import Image from "next/image";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true); // Default to true to prevent SSR mismatch
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values for exact mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Calculate horizontal velocity for rotation
  const velocityX = useVelocity(smoothX);
  // Transform horizontal velocity into a slight rotation (-25deg to 25deg)
  const rotate = useTransform(velocityX, [-1000, 0, 1000], [-25, 0, 25], { clamp: true });

  useEffect(() => {
    // Detect touch device
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[10000] pointer-events-none"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        style={{
          rotate: rotate,
        }}
        transition={{ duration: 0.2 }}
        className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center overflow-visible"
      >
        {/* Glow effect underneath the logo */}
        {/* <div className="absolute inset-0 rounded-full bg-primary/30 blur-[8px] scale-125" /> */}

        {/* Logo Image */}
        <div className="relative w-full h-full z-10 drop-shadow-md">
          <Image
            src="/assets/logo1.png"
            alt="Custom Cursor"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
