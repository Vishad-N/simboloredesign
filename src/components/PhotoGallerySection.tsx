"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import FloatingArrow from "@/components/ui/FloatingArrow";
import { useLayoutEffect, useMemo, useRef, useState, type PointerEvent } from "react";

type GalleryCategory =
  | "All"
  | "Branding"
  | "AI Ads"
  | "Social Media"
  | "Product Shoots"
  | "Motion Graphics";

type CampaignFrame = {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  description: string;
  image: string;
  alt: string;
  size: string;
  offset: string;
  video?: string;
  featured?: boolean;
};

const categories: GalleryCategory[] = [
  "All",
  "Branding",
  "AI Ads",
  "Social Media",
  "Product Shoots",
  "Motion Graphics",
];

const campaignFrames: CampaignFrame[] = [
  {
    title: "Neon Conversion",
    category: "AI Ads",
    description: "AI-directed campaign frames built to move from thumb-stop to product intent.",
    image: "/pg1.png",
    alt: "Creative campaign planning around a digital presentation",
    size: "w-[84vw] max-w-[720px] sm:w-[620px] lg:w-[760px]",
    offset: "lg:-translate-y-8",
    featured: true,
  },
  {
    title: "Identity Signals",
    category: "Branding",
    description: "Packaging, marks, and texture systems tuned for a cleaner premium shelf story.",
    image: "/pg2.png",
    alt: "Brand identity materials arranged on a studio surface",
    size: "w-[76vw] max-w-[420px] sm:w-[390px] lg:w-[430px]",
    offset: "lg:translate-y-20",
  },
  {
    title: "Reel Velocity",
    category: "Motion Graphics",
    description: "Short motion previews with bright edits, fast proof points, and cinematic pacing.",
    image: "/pg3.png",
    alt: "Production monitor showing a motion edit",
    size: "w-[78vw] max-w-[460px] sm:w-[420px] lg:w-[470px]",
    offset: "lg:-translate-y-2",
    video: "/assets/herobg.mp4",
  },
  {
    title: "Social Cut Through",
    category: "Social Media",
    description: "Platform-native creative sequences for attention, conversation, and saves.",
    image: "/pg4.png",
    alt: "Social media content open on a mobile phone",
    size: "w-[76vw] max-w-[420px] sm:w-[390px] lg:w-[420px]",
    offset: "lg:translate-y-12",
  },
  {
    title: "Product Light Lab",
    category: "Product Shoots",
    description: "Crisp product frames staged for paid media, detail crops, and launch pages.",
    image: "/pg5.png",
    alt: "Premium product photographed in soft studio light",
    size: "w-[80vw] max-w-[540px] sm:w-[480px] lg:w-[540px]",
    offset: "lg:-translate-y-16",
    video: "/product shoot.mp4",
  },
  {
    title: "Prompt To Premiere",
    category: "AI Ads",
    description: "Generative scene studies refined into disciplined ad systems with human art direction.",
    image: "/pg6.png",
    alt: "Abstract AI interface glow on a workstation",
    size: "w-[78vw] max-w-[450px] sm:w-[410px] lg:w-[470px]",
    offset: "lg:translate-y-24",
  },
  {
    title: "Campaign In Motion",
    category: "Motion Graphics",
    description: "A compact moving canvas for transitions, typography beats, and offer reveals.",
    image: "/pg7.png",
    alt: "Creative editing desk with screens and media tools",
    size: "w-[80vw] max-w-[520px] sm:w-[470px] lg:w-[530px]",
    offset: "lg:-translate-y-6",
    video: "/assets/herobg.mp4",
  },
  {
    title: "Feed Architecture",
    category: "Social Media",
    description: "Modular visual hooks that make each post work alone and the grid work together.",
    image: "/pg8.png",
    alt: "Social content concepts displayed across digital screens",
    size: "w-[76vw] max-w-[410px] sm:w-[380px] lg:w-[420px]",
    offset: "lg:translate-y-16",
  },
  {
    title: "Studio Proof",
    category: "Product Shoots",
    description: "Controlled color, tactile shadows, and product detail made ready for conversion.",
    image: "/pg9.png",
    alt: "Bright creative studio set for production work",
    size: "w-[80vw] max-w-[500px] sm:w-[450px] lg:w-[510px]",
    offset: "lg:-translate-y-10",
    video: "/product shoot.mp4",
  },
];

function GalleryFrame({ frame, index }: { frame: CampaignFrame; index: number }) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePointerEnter() {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  }

  function handlePointerLeave() {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.03 }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`${frame.size} ${frame.offset} group relative shrink-0 snap-center will-change-transform`}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -6 : 6, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 8 + index * 0.5, ease: "easeInOut", repeat: Infinity }
        }
        className={`relative overflow-hidden border border-white/80 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.3)] will-change-transform transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_40px_80px_-30px_rgba(15,23,42,0.4)] ${
          frame.featured
            ? "aspect-[16/10] rounded-[40px]"
            : index % 3 === 0
              ? "aspect-[4/5] rounded-[36px]"
              : "aspect-[3/4] rounded-[36px]"
        }`}
      >
        <Image
          src={frame.image}
          alt={frame.alt}
          fill
          sizes={
            frame.featured
              ? "(max-width: 639px) 84vw, (max-width: 1023px) 620px, 760px"
              : "(max-width: 639px) 80vw, (max-width: 1023px) 480px, 540px"
          }
          className={`object-cover transition-all duration-1000 ease-out group-hover:scale-105 will-change-transform ${frame.video ? 'group-hover:opacity-0' : ''}`}
          loading="lazy"
          quality={80}
        />
        {frame.video && (
          <video
            ref={videoRef}
            aria-hidden="true"
            muted
            loop
            playsInline
            preload="metadata"
            poster={frame.image}
            src={frame.video}
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 will-change-[opacity]"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/10 to-transparent opacity-60 transition-opacity duration-500 ease-out group-hover:opacity-100 will-change-[opacity]" />
        
        <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-dark shadow-sm">
          {frame.category}
        </div>

        <div className="absolute inset-x-4 bottom-4 translate-y-4 rounded-[28px] border border-white/10 bg-dark/85 p-5 text-white opacity-0 shadow-lg transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-5 sm:bottom-5 sm:p-6 will-change-transform">
          <h3 className="font-heading text-xl font-bold leading-tight md:text-2xl">{frame.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80 font-light">
            {frame.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-wide text-dark transition-transform duration-300 ease-out">
            View campaign <FloatingArrow />
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function PhotoGallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [travel, setTravel] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Optimize pointer follow: use static fixed div instead of recalculating massive gradients
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 40, damping: 20, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 40, damping: 20, mass: 0.5 });

  const filteredFrames = useMemo(
    () =>
      activeCategory === "All"
        ? campaignFrames
        : campaignFrames.filter((frame) => frame.category === activeCategory),
    [activeCategory],
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  
  // Directly map the scroll to x without useSpring for zero lag/delay
  const desktopX = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timeoutId: NodeJS.Timeout;

    function measureTrack() {
      if (!track) return;
      const remainingWidth = Math.max(track.scrollWidth - window.innerWidth + 64, 0);
      setTravel(remainingWidth);
    }

    measureTrack();

    const observer = new ResizeObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(measureTrack, 100);
    });
    
    observer.observe(track);
    window.addEventListener("resize", measureTrack);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("resize", measureTrack);
    };
  }, [filteredFrames]);

  function followGlow(event: PointerEvent<HTMLElement>) {
    pointerX.set(event.clientX - 300); // offset by half glow width
    pointerY.set(event.clientY - 300);
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={followGlow}
      style={{ height: `max(980px, calc(100vh + ${travel * 0.85}px))` }}
      className="relative overflow-clip bg-bglight lg:min-h-[150vh]"
    >
      <div className="absolute inset-0 -z-30 bg-bglight" />
      
      {/* Optimized pointer glow */}
      <motion.div 
        style={{ x: smoothX, y: smoothY }} 
        className="pointer-events-none fixed left-0 top-0 -z-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-skyblue/10 to-emerald-300/5 blur-[80px] will-change-transform hidden lg:block" 
      />
      
      {/* Static ambient elements instead of expensive masks */}
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[34rem] w-[min(86rem,96vw)] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/5 via-white/80 to-purple/5 blur-2xl" />

      <div className="relative px-4 pb-24 pt-24 md:px-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-12">
        <div className="mx-auto w-full max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 flex flex-col gap-6 lg:mb-5 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-skyblue shadow-sm">
                Gallery
              </span>
              <h2 className="font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-dark md:text-6xl lg:text-7xl">
                Creative Campaign
                <br />
                Gallery
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-soft md:text-lg">
                Immersive visuals, AI-powered storytelling, and high-converting brand
                experiences.
              </p>
            </div>

            <div className="flex max-w-2xl flex-wrap gap-2" aria-label="Gallery categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-4 focus-visible:ring-offset-bglight ${
                    activeCategory === category
                      ? "border-primary/20 text-primary"
                      : "border-white bg-white/90 text-soft hover:-translate-y-0.5 hover:text-dark"
                  }`}
                >
                  {activeCategory === category && (
                    <motion.span
                      layoutId="gallery-filter-pill"
                      className="absolute inset-0 bg-primary/10"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mx-auto w-full max-w-[1320px] overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <motion.div
              ref={trackRef}
              style={{ x: desktopX }}
              className="hidden items-center gap-7 py-16 will-change-transform lg:flex"
            >
              <AnimatePresence mode="popLayout">
                {filteredFrames.map((frame, index) => (
                  <GalleryFrame key={frame.title} frame={frame} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-8 pt-5 hide-scrollbar lg:hidden will-change-scroll">
              <AnimatePresence mode="popLayout">
                {filteredFrames.map((frame, index) => (
                  <GalleryFrame key={frame.title} frame={frame} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
