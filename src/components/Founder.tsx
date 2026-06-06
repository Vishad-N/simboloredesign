"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useState, useEffect, useRef, MouseEvent } from "react";

// Simple counter component for stats
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const FounderImage3D = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring inertia for the premium feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });
  
  // Rotate values: max tilt 10 degrees.
  // Mouse Top -> rotateX positive
  // Mouse Left -> rotateY negative
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Disable on mobile viewports
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Values from -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[4/5] w-full group"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        // Subtle scale increase on hover (desktop only)
        whileHover={{ scale: typeof window !== "undefined" && window.innerWidth >= 768 ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full h-full rounded-[2rem] md:rounded-[2.5rem]"
      >
        {/* Layer 4: Background Accents (20% movement via deepest Z) */}
        <div 
          style={{ transform: "translateZ(-80px)" }}
          className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-skyblue/20 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 shadow-2xl transition-all duration-300"
        />
        
        {/* Layer 3: Glow Layer (40% movement) */}
        <div 
          style={{ transform: "translateZ(-40px)" }}
          className="absolute -inset-2 bg-gradient-to-r from-primary to-skyblue rounded-[2rem] md:rounded-[2.5rem] blur-xl opacity-30 mix-blend-screen group-hover:opacity-50 transition-opacity duration-500"
        />
        
        {/* Layer 2: Decorative Border Frame (60% movement) */}
        <div 
          style={{ transform: "translateZ(0px)" }}
          className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-shadow duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        />
        
        {/* Layer 1: Foreground Image (100% movement via raised Z) */}
        <div 
          style={{ transform: "translateZ(40px)" }}
          className="absolute inset-3 md:inset-4 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-dark"
        >
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Founder"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default function Founder() {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-skyblue/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Founder Image */}
          <div className="lg:col-span-5 order-1">
            <ScrollReveal direction="left" className="relative w-full">
              <FounderImage3D />
            </ScrollReveal>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-2">
            <ScrollReveal direction="right">
              {/* Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/90">
                  Founder & Growth Strategist
                </span>
              </div>

              {/* Title */}
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                The Vision Behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-skyblue">
                  Simbolo
                </span>
              </h2>

              {/* Story Blocks */}
              <div className="space-y-4 text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
                <p>
                  We built Simbolo on a singular belief: agencies shouldn't just deliver creative assets; they should deliver measurable business growth.
                </p>
                <p>
                  Our client-first methodology bridges the gap between stunning visual identity and aggressive performance marketing. We don't just want your brand to look good—we want it to dominate your market.
                </p>
                <p>
                  By treating every client's business as our own, we've cultivated an environment where data drives our strategy and creativity powers our execution.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { label: "Brands Served", value: 150, suffix: "+" },
                  { label: "Campaigns", value: 500, suffix: "+" },
                  { label: "Reach (M)", value: 50, suffix: "+" },
                  { label: "Years Exp", value: 8, suffix: "+" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center shadow-lg hover:bg-[#35b5b8] hover:border-[#35b5b8] transition-colors duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-dark mb-1 font-heading transition-colors duration-300">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs md:text-sm font-medium text-white/60 group-hover:text-dark uppercase tracking-wider transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Personal Quote */}
              <div className="relative">
                <div className="absolute -top-6 -left-4 text-7xl text-primary/20 font-serif leading-none select-none">
                  "
                </div>
                <blockquote className="relative z-10 border-l-4 border-primary pl-6 py-2">
                  <p className="text-2xl md:text-3xl font-medium text-white/90 leading-snug italic font-heading">
                    Marketing should do more than attract attention. It should generate{" "}
                    <span className="text-primary">measurable business results.</span>
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
