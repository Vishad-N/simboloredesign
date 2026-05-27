"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import adsIcon from "../../public/ads.png";
import ecommerceIcon from "../../public/Ecommerce.png";
import productDesignIcon from "../../public/product-design.png";
import motionIcon from "../../public/motion.png";
import prIcon from "../../public/PR.png";
import socialMediaIcon from "../../public/social-media.png";
import videoEditingIcon from "../../public/video-editing.png";
import videographyIcon from "../../public/videography.png";
import webDevIcon from "../../public/web-dev.png";

const floatingIcons = [
  {
    src: socialMediaIcon,
    alt: "Social Media",
    label: "Social Media",
    delay: "0s",
    duration: "6s",
    slug: "social-media",
    posClass: "top-[12%] left-1/2 sm:top-[16%] sm:left-[35%] lg:top-[20%] lg:left-[50%]",
  },
  {
    src: adsIcon,
    alt: "Ads & Analytics",
    label: "Ads & Analytics",
    delay: "0.8s",
    duration: "7s",
    slug: "ads-analytics",
    posClass: "top-[20%] left-[78%] sm:top-[26%] sm:left-[75%] lg:top-[28%] lg:left-[73%]",
  },
  {
    src: ecommerceIcon,
    alt: "Ecommerce",
    label: "Ecommerce",
    delay: "1.5s",
    duration: "5.5s",
    slug: "ecommerce",
    posClass: "top-[38%] left-[88%] sm:top-[44%] sm:left-[85%] lg:top-[48%] lg:left-[80%]",
  },
  {
    src: webDevIcon,
    alt: "Web Development",
    label: "Web Dev",
    delay: "0.5s",
    duration: "7.5s",
    slug: "web-development",
    posClass: "top-[58%] left-[88%] sm:top-[64%] sm:left-[82%] lg:top-[68%] lg:left-[77%]",
  },
  {
    src: prIcon,
    alt: "Public Relations",
    label: "PR",
    delay: "1.8s",
    duration: "6.2s",
    slug: "pr",
    posClass: "top-[78%] left-[75%] sm:top-[80%] sm:left-[70%] lg:top-[86%] lg:left-[60%]",
  },
  {
    src: productDesignIcon,
    alt: "Product Design",
    label: "Product Design",
    delay: "0.3s",
    duration: "7s",
    slug: "product-design",
    posClass: "top-[88%] left-[45%] sm:top-[88%] sm:left-[45%] lg:top-[86%] lg:left-[40%]",
  },
  {
    src: videoEditingIcon,
    alt: "Video Editing",
    label: "Video Editing",
    delay: "2.5s",
    duration: "5s",
    slug: "video-editing",
    posClass: "top-[78%] left-[22%] sm:top-[80%] sm:left-[25%] lg:top-[68%] lg:left-[23%]",
  },
  {
    src: videographyIcon,
    alt: "Videography",
    label: "Videography",
    delay: "1.2s",
    duration: "6s",
    slug: "videography",
    posClass: "top-[58%] left-[12%] sm:top-[60%] sm:left-[15%] lg:top-[48%] lg:left-[20%]",
  },
  {
    src: motionIcon,
    alt: "Motion Graphics",
    label: "Motion Graphics",
    delay: "2s",
    duration: "6.5s",
    slug: "motion-graphics",
    posClass: "top-[38%] left-[15%] sm:top-[42%] sm:left-[18%] lg:top-[28%] lg:left-[27%]",
  },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => { });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Blended hero backdrop */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at center, #f6f4ec 0%, #e8efdd 18%, #d7eccd 34%, #c3e9d7 50%, #abdfe1 68%, #9cd3ee 82%, #f1e98f 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-[19]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.32) 34%, rgba(255,255,255,0) 58%), radial-gradient(55% 55% at 88% 12%, rgba(245,231,125,0.60) 0%, rgba(245,231,125,0) 72%), radial-gradient(56% 64% at 10% 44%, rgba(143,211,255,0.58) 0%, rgba(143,211,255,0) 70%), radial-gradient(circle at center, rgba(189,231,209,0.86) 0%, rgba(216,239,200,0.56) 45%, rgba(238,242,236,0.18) 100%)",
          filter: "blur(0px)",
        }}
      />
      <div className="absolute inset-0 -z-[18] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.04)_46%,rgba(255,255,255,0)_78%)]" />
      <div className="absolute inset-0 -z-[17] opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.9px,transparent_1.3px)] [background-size:14px_14px]" />

      {/* Ambient details for smoother blending */}
      <div className="absolute inset-0 overflow-hidden -z-[16] pointer-events-none">
        <div className="absolute left-[2%] top-[2%] h-28 w-44 rounded-2xl opacity-35 [background-image:radial-gradient(circle,rgba(255,255,255,0.9)_1.2px,transparent_1.6px)] [background-size:12px_12px]" />
        <div className="absolute right-[2%] bottom-[20%] h-36 w-28 rounded-2xl opacity-30 [background-image:radial-gradient(circle,rgba(255,255,255,0.85)_1.2px,transparent_1.6px)] [background-size:13px_13px]" />

        <div className="absolute left-1/2 top-1/2 h-[82vh] w-[82vw] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-white/55" />
        <div className="absolute left-1/2 top-1/2 h-[74vh] w-[64vw] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-cyan-200/45 rotate-[8deg]" />
        <div className="absolute left-1/2 top-1/2 h-[92vh] w-[96vw] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-white/30 -rotate-[8deg]" />

        <div className="absolute left-[13%] top-[14%] h-14 w-14 rounded-full bg-lime-300/35 blur-[1px]" />
        <div className="absolute right-[10%] top-[24%] h-16 w-16 rounded-full bg-emerald-200/40 blur-[1px]" />
        <div className="absolute left-[7%] bottom-[36%] h-16 w-16 rounded-full bg-sky-300/30 blur-[1px]" />
        <div className="absolute right-[4%] top-[32%] h-30 w-30 rounded-full bg-blue-300/18 blur-[1px]" />

        <div className="absolute -left-[14%] bottom-[-20%] h-[40%] w-[56%] rounded-[55%] bg-gradient-to-r from-emerald-200/36 via-cyan-200/30 to-transparent blur-[2px]" />
        <div className="absolute left-[21%] bottom-[-23%] h-[34%] w-[50%] rounded-[50%] bg-gradient-to-r from-sky-200/30 via-blue-100/24 to-transparent" />
        <div className="absolute right-[-10%] bottom-[-22%] h-[42%] w-[58%] rounded-[58%] bg-gradient-to-l from-indigo-200/34 via-blue-200/28 to-transparent" />
        <div className="absolute right-[8%] bottom-[-24%] h-[30%] w-[44%] rounded-[50%] bg-gradient-to-l from-sky-200/32 to-indigo-100/24" />
      </div>

      {/* Main content - full viewport centered */}
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Glow behind video */}
        <div className="absolute w-[540px] h-[540px] lg:w-[660px] lg:h-[660px] rounded-full bg-gradient-to-br from-white/80 via-white/52 to-skyblue/15 blur-[80px] z-0" />

        {/* Orbital ring SVG */}
        <svg
          className="absolute w-[660px] h-[660px] lg:w-[840px] lg:h-[840px] z-[1] opacity-[0.08] animate-spin"
          style={{ animationDuration: "30s" }}
          viewBox="0 0 600 600"
          fill="none"
        >
          <ellipse cx="300" cy="300" rx="280" ry="280" stroke="url(#ring-grad)" strokeWidth="1.2" />
          <ellipse cx="300" cy="300" rx="280" ry="180" stroke="url(#ring-grad)" strokeWidth="0.8" transform="rotate(25 300 300)" />
          <defs>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="600" y2="600">
              <stop offset="0%" stopColor="#9decd4" />
              <stop offset="50%" stopColor="#b7d8ff" />
              <stop offset="100%" stopColor="#d5cbff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center video */}
        <div className="relative z-10 w-[390px] h-[390px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-[0_35px_120px_-45px_rgba(147,197,253,0.34)]">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-emerald-100/24 via-sky-100/18 to-indigo-100/20 blur-3xl -z-10" />
          <div className="absolute inset-[-2px] rounded-full border border-white/24" />
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            src="/assets/herobg.mp4"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/18" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_72%,rgba(255,255,255,0.16)_100%)]" />
        </div>

        {/* Floating service icons in circular orbit */}
        {floatingIcons.map((icon) => (
          <Link
            href={`/${icon.slug}`}
            key={icon.alt}
            className={`absolute z-20 floating-icon flex flex-col items-center gap-1 sm:gap-1.5 transition-transform duration-300 cursor-pointer -translate-x-1/2 -translate-y-1/2 group scale-75 sm:scale-90 lg:scale-100 hover:scale-110 ${icon.posClass}`}
            style={{
              animationDelay: icon.delay,
              animationDuration: icon.duration,
            }}
          >
            <div className="drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={132}
                height={132}
                className="object-contain select-none pointer-events-none"
              />
            </div>
            <span className="text-[11px] sm:text-sm lg:text-base font-semibold text-dark/70 bg-white/60 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-sm max-w-[110px] sm:max-w-[160px] lg:max-w-none text-center whitespace-normal leading-tight transition-colors duration-300 group-hover:bg-white group-hover:text-primary">
              {icon.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
