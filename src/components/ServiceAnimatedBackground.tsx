"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServiceAnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Particle generation
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 15 + 10, // 10-25s
    delay: Math.random() * 10,
    size: Math.random() * 6 + 2, // 2-8px
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-bglight selection:bg-none">
      {/* Mesh Gradients / Ambient Blobs */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -70, 80, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] bg-primary/40 rounded-full blur-[100px] opacity-90"
      />
      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.8, 1.25, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-skyblue/40 rounded-full blur-[120px] opacity-90"
      />
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.15, 0.85, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute top-[35%] left-[25%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple/20 rounded-full blur-[130px] opacity-80"
      />

      {/* Floating Light Particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [0, -250, -500],
              x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            className="absolute rounded-full bg-primary/40"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 12px 2px rgba(61, 199, 203, 0.25)",
            }}
          />
        ))}
      </div>
      
      {/* Subtle Overlay to blend colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-bglight/40 mix-blend-overlay" />
    </div>
  );
}
