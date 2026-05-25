"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type Industry = {
  title: string;
  badge: string;
  image: string;
  points?: string[];
};

type IndustryCardProps = {
  industry: Industry;
  index: number;
};

const industryReveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-18, 18]);

  return (
    <motion.article
      ref={cardRef}
      variants={industryReveal}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="group min-w-[265px] snap-center outline-none sm:min-w-[310px] lg:min-w-0"
      tabIndex={0}
      aria-label={industry.title}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -7 : 7, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 7 + index * 0.35, ease: "easeInOut", repeat: Infinity }
        }
        className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-dark shadow-[0_24px_70px_-42px_rgba(15,23,42,0.42)] transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-2 group-hover:shadow-[0_40px_90px_-30px_rgba(15,23,42,0.6)] group-focus-visible:-translate-y-2 group-focus-visible:ring-2 group-focus-visible:ring-primary/50 group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-bglight"
      >
        {/* Background Image Container */}
        <motion.div style={{ y: imageY }} className="absolute -inset-6">
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            sizes="(max-width: 639px) 265px, (max-width: 1023px) 310px, (max-width: 1279px) 33vw, 208px"
            className="object-cover opacity-90 transition-transform duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105 group-focus-visible:scale-105"
          />
        </motion.div>

        {/* 
          =============================================
          STATE 1: DEFAULT VIEW
          =============================================
        */}
        
        {/* Base Gradient for default text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/20 to-transparent opacity-70 transition-opacity duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-0 group-focus-visible:opacity-0" />
        
        {/* Default Content: Slides UP and FADES OUT on hover */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-8 group-hover:opacity-0 group-focus-visible:-translate-y-8 group-focus-visible:opacity-0">
          
          {/* Top: Minimal Category Label */}
          <div className="w-fit rounded-full bg-white/10 border border-white/10 backdrop-blur-md px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white shadow-sm">
            {industry.badge}
          </div>
          
          {/* Bottom: Industry Title */}
          <h3 className="mt-auto font-heading text-xl md:text-2xl font-bold leading-tight text-white drop-shadow-sm">
            {industry.title}
          </h3>
        </div>

        {/* 
          =============================================
          STATE 2: HOVER VIEW
          =============================================
        */}
        
        {/* Hover Panel: Slides UP from bottom, forming a cinematic glass overlay */}
        <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-t from-dark/95 via-dark/70 to-dark/20 backdrop-blur-[6px] p-6 md:p-8 translate-y-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          
          {/* Inner Content staggered slide-up points */}
          <div className="flex flex-col gap-3.5 w-full">
            {industry.points?.map((point, i) => (
              <div 
                key={point}
                className="flex items-start gap-2.5 translate-y-6 opacity-0 transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                style={{ transitionDelay: `${i * 85 + 100}ms` }}
              >
                <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />
                <span className="text-[13px] md:text-[14px] leading-snug text-white/90 font-light tracking-wide">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle inner glass border framing the card */}
        <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10 pointer-events-none" />

      </motion.div>
    </motion.article>
  );
}
