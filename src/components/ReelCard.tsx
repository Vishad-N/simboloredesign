"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, type PointerEvent } from "react";

export type Reel = {
  title: string;
  category: string;
  image: string;
  views: string;
  likes: string;
  videoUrl?: string;
};

type ReelCardProps = {
  reel: Reel;
  index: number;
};

const cardReveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function ReelCard({ reel, index }: ReelCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 180, damping: 18, mass: 0.4 });
  const y = useSpring(pointerY, { stiffness: 180, damping: 18, mass: 0.4 });
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [16, -16]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left - bounds.width / 2;
    const offsetY = event.clientY - bounds.top - bounds.height / 2;
    pointerX.set(offsetX * 0.06);
    pointerY.set(offsetY * 0.05);
  }

  function handlePointerEnter() {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  }

  function handlePointerLeave() {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
    pointerX.set(0);
    pointerY.set(0);
  }

  function handleToggle() {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        setIsHovered(true);
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.muted = !videoRef.current.muted;
      }
    }
  }

  return (
    <motion.article
      ref={cardRef}
      variants={cardReveal}
      transition={{ duration: 0.65, ease: "easeOut" }}
      style={{ y: parallaxY }}
      className="group relative min-w-[270px] snap-center md:min-w-[310px] lg:min-w-[292px]"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -8 : 8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 6 + index * 0.45, ease: "easeInOut", repeat: Infinity }
        }
      >
        <motion.div
          style={{ x, y }}
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onClick={handleToggle}
          onBlur={handlePointerLeave}
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          whileFocus={reduceMotion ? undefined : { scale: 1.02 }}
          tabIndex={0}
          aria-label={`${reel.title} reel video`}
          className="relative aspect-[9/14] overflow-hidden rounded-[32px] bg-dark shadow-[0_24px_70px_-38px_rgba(15,23,42,0.4)] outline-none transition-shadow duration-500 hover:shadow-[0_40px_90px_-30px_rgba(15,23,42,0.5)] focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-4 focus-visible:ring-offset-bglight will-change-transform"
        >
          <div className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}>
            <Image
              src={reel.image}
              alt={`${reel.title} thumbnail`}
              fill
              sizes="(max-width: 767px) 270px, (max-width: 1279px) 310px, 292px"
              className="object-cover"
            />
          </div>

          {reel.videoUrl && (
            <div className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}>
              <video
                ref={videoRef}
                src={reel.videoUrl}
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover will-change-transform"
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
