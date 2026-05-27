"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Happy Clients" },
  { value: 10, suffix: "M+", label: "Campaign Reach" },
  { value: 500, suffix: "+", label: "Assets Produced" },
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number, suffix: string, duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function: easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * value));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="font-heading font-extrabold text-5xl md:text-6xl text-dark mb-2">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 relative bg-white border-y border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/5 rounded-full blur-xl z-0" />
              <div className="relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-sm md:text-base text-soft font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
