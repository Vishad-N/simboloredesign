"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Play, ArrowRight, ArrowUpRight, Video, Mic, MonitorPlay, Sparkles, Cpu, Layers, Film, Type, Wand2, TrendingUp, CheckCircle2, BarChart, Scissors } from "lucide-react";
import Link from "next/link";

// Reusable fade-in variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function VepClient() {
  return (
    <main className="min-h-screen bg-bglight text-dark overflow-hidden relative selection:bg-primary/30 selection:text-dark">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-skyblue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[20%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto z-10">

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible z-0">



          {/* 2. Motion Graphics Cards */}
          <motion.div
            animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[10%] right-[10%] bg-white/80 backdrop-blur-xl border border-gray-200 shadow-soft rounded-2xl p-3 flex items-center gap-3 z-0"
          >
            <div className="w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center border border-purple/20">
              <Film className="w-4 h-4 text-purple" />
            </div>
            <span className="text-sm font-bold text-dark">✨ Motion Graphics</span>
          </motion.div>

          <motion.div
            animate={{ y: [-10, 10, -10], x: [5, -5, 5] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            className="absolute bottom-[20%] left-[8%] bg-white/80 backdrop-blur-xl border border-gray-200 shadow-soft rounded-2xl p-3 flex items-center gap-3 z-0"
          >
            <div className="w-8 h-8 rounded-full bg-skyblue/10 flex items-center justify-center border border-skyblue/20">
              <Type className="w-4 h-4 text-skyblue" />
            </div>
            <span className="text-sm font-bold text-dark">3D Text Animation</span>
          </motion.div>

          {/* 3. UGC Elements */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [-4, 4, -4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[20%] left-[5%] w-32 aspect-[9/16] bg-white border border-gray-200 rounded-[24px] shadow-xl overflow-hidden z-0 flex flex-col"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 pb-8">
              <img src="/assets/simLogo.png" alt="Thumbnail" className="w-16 h-16 object-contain opacity-90" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-3 h-3 text-dark ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-4 left-3 z-20">
              <p className="text-[10px] font-bold text-white leading-tight">UGC Ad</p>
              <p className="text-[9px] text-white/80">1.2M Views</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [25, -25, 25], rotate: [5, -2, 5] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-[5%] right-[12%] w-36 aspect-[9/16] bg-white border border-gray-200 rounded-[24px] shadow-xl overflow-hidden z-0 flex flex-col"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 pb-8">
              <img src="/assets/simLogo.png" alt="Thumbnail" className="w-20 h-20 object-contain opacity-90" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-4 h-4 text-dark ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-xs font-bold text-white leading-tight">Product Demo</p>
              <p className="text-[10px] text-white/80">92% Watch Time</p>
            </div>
          </motion.div>

          {/* 4. AI Ads Elements */}
          <motion.div
            animate={{ y: [-15, 10, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[40%] right-[3%] bg-dark/95 backdrop-blur-xl border border-white/10 shadow-glow-blue rounded-2xl p-4 flex flex-col gap-2 z-0 scale-90"
          >
            <div className="flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-white">AI Ad Generator</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-1">
              <div className="h-full bg-gradient-to-r from-primary to-skyblue w-[92%] rounded-full"></div>
            </div>
            <p className="text-[10px] text-gray-400 font-mono text-right">Generating... 92%</p>
          </motion.div>

          <motion.div
            animate={{ y: [10, -15, 10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
            className="absolute bottom-[35%] left-[2%] bg-white/90 backdrop-blur-xl border border-gray-200 shadow-soft rounded-2xl p-3 flex items-center gap-3 z-0"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-xl font-bold text-dark leading-none">5.7x</p>
              <p className="text-[10px] text-soft font-bold uppercase tracking-wider">ROAS</p>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-5xl mx-auto mb-20 relative z-20"
        >
          <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur-xl shadow-soft">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] text-soft uppercase">Post Production</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 tracking-tight leading-[1.1] text-dark">
            Crafting Stories <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-skyblue to-purple">Frame By Frame</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-soft mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            From viral reels and motion graphics to branded podcasts and cinematic edits, we transform raw footage into unforgettable visual experiences.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="#featured-portfolio" className="w-full sm:w-auto px-8 py-4 bg-dark text-white font-semibold rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-300 shadow-soft">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-dark font-semibold rounded-full hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 duration-300 backdrop-blur-sm shadow-sm flex items-center justify-center gap-2">
              Start Your Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

      </section>

      {/* 2. MOTION GRAPHICS SECTION */}
      <section id="featured-portfolio" className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto z-10 border-t border-gray-200">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-skyblue/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-dark">
            Featured Motion Graphics Projects
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-soft font-light leading-relaxed">
            Explore a selection of motion graphics work ranging from brand animations and product showcases to cinematic visual storytelling.
          </motion.p>
        </motion.div>

        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Shivaji Maharaj History Lesson",
              description: "Premium motion graphics showcasing a modern technology product launch.",
              thumbnail: "/vep/m2.png",
              videoLink: "https://www.instagram.com/reel/DaNjGRysgQ2/"
            },
            {
              title: "Prithvi Raj Chouhan History Lesson",
              description: "Dynamic logo animation and visual identity presentation.",
              thumbnail: "/vep/m1.png",
              videoLink: "https://www.instagram.com/reel/DYW0bmnHwmX/"
            },
            {
              title: "Bus booking app ad",
              description: "Smooth UI animations and feature highlights for a mobile application.",
              thumbnail: "/vep/m3.png",
              videoLink: "https://www.instagram.com/reel/DW_oeESCVjy/"
            },
            {
              title: "Ads for Sharma Classes",
              description: "High-end 3D visuals and cinematic product presentation.",
              thumbnail: "/vep/m4.png",
              videoLink: "https://www.instagram.com/reel/DWbdv8yCC6H/"
            },
            {
              title: "Animated ad for VOSO",
              description: "Fast-paced promotional content optimized for social engagement.",
              thumbnail: "/vep/m5.png",
              videoLink: "https://www.instagram.com/reel/DXWi2e1lY5J/"
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }
              }}
              onClick={() => project.videoLink && window.open(project.videoLink, "_blank")}
              className={`group relative flex flex-col h-full bg-[#111] rounded-[32px] overflow-hidden shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-primary border border-white/5 hover:border-primary/50 ${project.videoLink ? "cursor-pointer" : ""}`}
            >
              {/* Gradient Border Glow (pseudo-element style) */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Video Thumbnail Area */}
              <div className="relative w-full aspect-[9/16] overflow-hidden bg-[#1a1a1a]">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 opacity-20">
                      <Video className="w-8 h-8 text-white" />
                      <span className="text-white text-xs font-semibold tracking-widest uppercase">No Thumbnail</span>
                    </div>
                  </div>
                )}

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-colors duration-500" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 group-hover:bg-primary transition-all duration-500 shadow-lg">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* 'Watch Video' Indicator */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20 overflow-hidden">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-1">
                    Watch <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. UGC CONTENT SECTION */}
      <section className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto z-10 border-t border-gray-200">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-dark">UGC Content</h2>
          <p className="text-lg md:text-2xl text-soft max-w-3xl font-light">Authentic, mobile-first storytelling designed to build trust and drive high-volume conversions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {[
            { title: "Beauty Product UGC", thumbnail: "/vep/ugc1.png", link: "https://www.instagram.com/reel/DH0C4JsoxTw/" },
            { title: "Lifestyle Brand Review", thumbnail: "/vep/ugc2.png", link: "https://www.instagram.com/reel/DAcvsXuo73N/" },
            { title: "Ecommerce Demo", thumbnail: "/vep/ugc3.png", link: "https://www.instagram.com/reel/DHcoQ6xoEyh/" },
            { title: "Fashion Try-On", thumbnail: "/vep/ugc4.png", link: "https://www.instagram.com/reel/DEq0fzoBKtS/" },
            { title: "Food & Beverage", thumbnail: "/vep/ugc5.png", link: "https://www.instagram.com/reel/DE9G2rtxwCE/" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }
              }}
              onClick={() => window.open(item.link, "_blank")}
              className="group relative aspect-[9/16] rounded-[32px] overflow-hidden border border-gray-200 bg-white cursor-pointer shadow-soft hover:shadow-glow-primary hover:-translate-y-4 transition-all duration-500"
            >
              <img src={item.thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 z-10" />

              <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white flex items-center justify-center shadow-sm hover:bg-white/90 transition-colors">
                <Video className="w-4 h-4 text-dark" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <Play className="w-14 h-14 text-white drop-shadow-2xl" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-lg font-bold text-white leading-snug drop-shadow-md">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. PODCAST EDITING SECTION */}
      <section className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto z-10 border-t border-gray-200">
        <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-purple/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-dark">Podcast Editing</h2>
          <p className="text-lg md:text-2xl text-soft max-w-3xl font-light">Professional multi-cam edits that keep conversations engaging and audiences deeply connected.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Business Growth Podcast", ep: "Ep. 42", duration: "45:20" },
            { title: "Creator Interview Series", ep: "Ep. 18", duration: "1:12:05" },
            { title: "Startup Founder Series", ep: "Ep. 05", duration: "38:45" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }
              }}
              className="group relative h-80 rounded-[32px] overflow-hidden border border-gray-200 bg-white cursor-pointer flex flex-col justify-end p-8 hover:border-purple/30 transition-colors duration-500 shadow-soft"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bglight via-white/80 to-transparent z-10" />

              {/* Waveform deco */}
              <div className="absolute top-1/2 left-0 w-full h-1/2 flex items-end justify-between px-8 gap-1 opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0">
                {[...Array(24)].map((_, j) => (
                  <div key={j} className="w-2 bg-purple rounded-t-full" style={{ height: `${Math.round(30 + Math.abs(Math.sin(j * 0.8) * 40 + Math.cos(j * 1.5) * 30))}%` }} />
                ))}
              </div>

              <div className="relative z-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple/10 text-purple flex items-center justify-center border border-purple/20">
                      <Mic className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold tracking-wider uppercase text-soft">{item.ep}</span>
                  </div>
                  <span className="px-3 py-1 rounded-md bg-white border border-gray-200 text-xs font-mono text-soft shadow-sm">
                    {item.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-dark group-hover:text-purple transition-colors">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. AI ADS SECTION */}
      <section className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto z-10 border-t border-gray-200">
        <div className="absolute top-0 right-1/4 w-[30%] h-[30%] bg-skyblue/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-dark flex items-center gap-4">
              AI Ad Campaigns <Sparkles className="w-10 h-10 text-primary animate-pulse hidden md:block" />
            </h2>
            <p className="text-lg md:text-2xl text-soft font-light">
              Data-driven, hyper-personalized video ads generated at scale using cutting-edge AI technology to lower acquisition costs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {[
            { title: "Hyper-Personalized Ads", thumbnail: "/vep/ai1.png", link: "https://www.instagram.com/reel/DZx17_4lJUV/" },
            { title: "Dynamic Localized Promos", thumbnail: "/vep/ai2.png", link: "https://www.instagram.com/reel/DXoSozxjOFY/" },
            { title: "Predictive Hook Variations", thumbnail: "/vep/ai3.png", link: "https://www.instagram.com/reel/DYj-pQ7j3xX/" },
            { title: "AI Avatar Spokesperson", thumbnail: "/vep/ai4.png", link: "https://www.instagram.com/reel/DZcdCgCMPDd/" },
            { title: "Rapid Concept Testing", thumbnail: "/vep/ai5.png", link: "https://drive.google.com/file/d/1qCpmIw49jT0RLiFe50oJ9YVirKt-IOXt/view" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }
              }}
              onClick={() => window.open(item.link, "_blank")}
              className="group relative aspect-[9/16] rounded-[32px] overflow-hidden border border-gray-200 bg-white cursor-pointer shadow-soft hover:shadow-glow-blue hover:-translate-y-4 transition-all duration-500"
            >
              <img src={item.thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" />
              
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 z-10" />

              <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <Play className="w-14 h-14 text-white drop-shadow-2xl" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-lg font-bold text-white leading-snug drop-shadow-md">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5b. 2D ANIMATIONS SECTION */}
      <section className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto z-10 border-t border-gray-200">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-skyblue/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-dark">
            2d animations
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-soft font-light leading-relaxed">
            Explore a selection of motion graphics work ranging from brand animations and product showcases to cinematic visual storytelling.
          </motion.p>
        </motion.div>

        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Shivaji Maharaj History Lesson",
              description: "Premium motion graphics showcasing a modern technology product launch.",
              thumbnail: "/vep/motion1.png",
              youtubeUrl: "https://www.youtube.com/watch?v=NnJPxQPzjkY&list=PLAdwN9YB6rK6nZEL6do9tV0vc22kHBjJL"
            },
            {
              title: "Prithvi Raj Chouhan History Lesson",
              description: "Dynamic logo animation and visual identity presentation.",
              thumbnail: "/vep/motion2.png",
              youtubeUrl: "https://www.youtube.com/watch?v=5QqXKIFMZJo&list=PLAdwN9YB6rK6nZEL6do9tV0vc22kHBjJL"
            },
            {
              title: "Bus booking app ad",
              description: "Smooth UI animations and feature highlights for a mobile application.",
              thumbnail: "/vep/motion3.png",
              youtubeUrl: "https://www.youtube.com/watch?v=gshro4zuHLs"
            },
            {
              title: "Ads for Sharma Classes",
              description: "High-end 3D visuals and cinematic product presentation.",
              thumbnail: "/vep/motion4.png",
              youtubeUrl: "https://www.youtube.com/watch?v=bXoJagoCw2U"
            },
            {
              title: "Animated ad for VOSO",
              description: "Fast-paced promotional content optimized for social engagement.",
              thumbnail: "/vep/motion5.png",
              youtubeUrl: "https://www.youtube.com/watch?v=oV12mN3D2YI"
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }
              }}
              onClick={() => window.open(project.youtubeUrl, "_blank")}
              className="group relative flex flex-col h-full bg-[#111] rounded-[32px] overflow-hidden cursor-pointer shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-primary border border-white/5 hover:border-primary/50"
            >
              {/* Gradient Border Glow (pseudo-element style) */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Video Thumbnail Area */}
              <div className="relative w-full aspect-[9/16] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-colors duration-500" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 opacity-80 group-hover:scale-110 group-hover:opacity-100 group-hover:bg-primary transition-all duration-500 shadow-lg">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* 'Watch on YouTube' Indicator */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20 overflow-hidden">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-1">
                    Watch <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. SHORT FORM CONTENT SECTION */}
      <section className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto z-10 border-t border-gray-200">
        <div className="absolute top-0 right-1/4 w-[30%] h-[30%] bg-skyblue/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-dark flex items-center gap-4">
              Short Form Content <Video className="w-10 h-10 text-primary hidden md:block" />
            </h2>
            <p className="text-lg md:text-2xl text-soft font-light">
              Engaging, fast-paced reels and shorts designed to capture attention and boost your brand's social presence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {[
            { title: "Viral Reel", thumbnail: "/vep/sfc1.png", link: "https://www.instagram.com/reel/DGx2G0tT0A-/" },
            { title: "Brand Story", thumbnail: "/vep/sfc2.png", link: "https://www.instagram.com/reel/DYlzRssjycl/" },
            { title: "Product Showcase", thumbnail: "/vep/sfc3.png", link: "https://www.instagram.com/reel/DZaAGJAiJmk/" },
            { title: "Social Promo", thumbnail: "/vep/sfc4.png", link: "https://www.instagram.com/p/DWQwTklDJDp/" },
            { title: "Engagement Short", thumbnail: "/vep/sfc5.png", link: "https://www.instagram.com/reel/DYyupYlj5Ou/" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }
              }}
              onClick={() => window.open(item.link, "_blank")}
              className="group relative aspect-[9/16] rounded-[32px] overflow-hidden border border-gray-200 bg-white cursor-pointer shadow-soft hover:shadow-glow-blue hover:-translate-y-4 transition-all duration-500"
            >
              <img src={item.thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" />
              
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 z-10" />

              <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white flex items-center justify-center shadow-sm">
                <Video className="w-4 h-4 text-dark" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <Play className="w-14 h-14 text-white drop-shadow-2xl" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-lg font-bold text-white leading-snug drop-shadow-md">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. THE ADVENTURES OF HISTORY SHOW SECTION */}
      <section className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto z-10 border-t border-gray-200">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-dark">
            The Adventures Of History Show
          </h2>
          <p className="text-lg md:text-2xl text-soft font-light">
            Dive into epic historical tales brought to life with captivating visuals and immersive storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Shivaji Maharaj History Lesson", thumbnail: "/vep/tn1.png", link: "https://www.youtube.com/watch?v=NnJPxQPzjkY&list=PLAdwN9YB6rK6nZEL6do9tV0vc22kHBjJL" },
            { title: "Prithvi Raj Chouhan History Lesson", thumbnail: "/vep/tn2.png", link: "https://www.youtube.com/watch?v=5QqXKIFMZJo&list=PLAdwN9YB6rK6nZEL6do9tV0vc22kHBjJL" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }
              }}
              onClick={() => window.open(item.link, "_blank")}
              className="group relative aspect-video rounded-[32px] overflow-hidden border border-gray-200 bg-white cursor-pointer shadow-soft hover:shadow-glow-primary hover:-translate-y-2 transition-all duration-500"
            >
              <img src={item.thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg backdrop-blur-md">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-20">
                <p className="text-2xl font-bold text-white leading-snug drop-shadow-md">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="relative py-40 px-4 md:px-8 overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-[#0a192f] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center z-10 relative"
        >
          <div className="w-24 h-24 mx-auto bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 mb-10 shadow-glow-primary">
            <MonitorPlay className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">Ready To Elevate <br className="hidden sm:block" /> Your Content?</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Let's transform your footage into content that captivates, converts, and leaves a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-primary text-white text-lg font-bold rounded-full hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-glow-primary flex items-center justify-center gap-2">
              Schedule a Call
            </Link>
          </div>
        </motion.div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}} />
    </main>
  );
}
