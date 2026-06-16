"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleLogo from "./ParticleLogo";
import Image from "next/image";

const TEXT_ITEMS = [
  "Creating Brands",
  "Generating Leads",
  "Driving Growth",
  "Scaling Businesses",
];

export default function LoadingScreen() {
  // 0: Initial/Particles forming
  // 1: Logo formed, glowing
  // 2: Shockwave & Fade out
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);




  useEffect(() => {
    const mobile =
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    setIsMobile(mobile);
    setPhase(mobile ? 2 : 0);
    setMounted(true);
  }, []);

  // Handle text rotation
  useEffect(() => {
    if (phase !== 1) return;

    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev === TEXT_ITEMS.length - 1) {
          clearInterval(interval);
          // Trigger completion sequence after texts are done
          setTimeout(() => setPhase(2), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [phase]);

  // Handle final completion
  useEffect(() => {
    if (phase === 2) {
      setTimeout(() => {
        setIsDone(true);
      }, 1500); // Wait for shockwave and fadeout animation
    }
  }, [phase]);

  if (!mounted) return null;
  if (isDone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 2 ? 0 : 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* Animated dark gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-[#050505] to-[#050505] opacity-50 pointer-events-none" />

      {/* Particle Simulation */}
      <AnimatePresence>
        {phase === 0 && !isMobile && (
          <motion.div
            key="particles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="absolute inset-0"
          >
            <ParticleLogo
              imageUrl="/assets/logo1.png"
              onComplete={() => setPhase(1)}
              skipAnimation={isMobile}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* High-res Logo Reveal with Glow */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.div
            key="glowing-logo"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{
              opacity: phase === 2 ? 0 : 1,
              scale: phase === 2 ? 1.5 : 1,
              filter: "blur(0px)"
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center z-20"
          >
            {/* The Logo */}
            <div className="relative w-64 h-auto md:w-80">
              {/* Outer Glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(255,255,255,0.1)",
                    "0 0 100px rgba(255,255,255,0.4)",
                    "0 0 40px rgba(255,255,255,0.1)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
              />
              <Image
                src="/assets/logo1.png"
                alt="The Simbolo Logo"
                width={400}
                height={200}
                className="w-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              />
            </div>

            {/* Rotating Text */}
            <div className="mt-12 h-8 overflow-hidden relative w-full text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={textIndex}
                  initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-white/80 font-heading font-medium tracking-[0.2em] uppercase text-sm md:text-base absolute inset-x-0"
                >
                  {TEXT_ITEMS[textIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Shockwave Effect */}
      <AnimatePresence>
        {phase === 2 && (
          <motion.div
            key="shockwave"
            initial={{ scale: 0, opacity: 1, borderWidth: "0px" }}
            animate={{ scale: 4, opacity: 0, borderWidth: "2px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute rounded-full border-white/50 z-30 pointer-events-none shadow-[0_0_50px_rgba(255,255,255,0.5)]"
            style={{ width: "100vh", height: "100vh" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
