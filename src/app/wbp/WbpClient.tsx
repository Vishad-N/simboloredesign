"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ExternalLink, Globe, BarChart3, Star, ArrowUpRight, Code, Smartphone, LineChart, Zap, CheckCircle, TrendingUp, Monitor } from "lucide-react";

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

const projects = [
  {
    client: "The Simbolo",
    category: "Digital Marketing Agency",
    desc: "Redesign for The Simbolo, an agency that helps businesses build authentic connections with their audience through innovative digital solutions.",
    metrics: ["High Performance", "Modern UI/UX", "Mobile Optimized"],
    image: "/wbp/simbolo.jpg",
    link: "https://www.thesimbolo.com/"
  },
  {
    client: "Recoco",
    category: "E-commerce",
    desc: "Redesign for Recoco, an e-commerce platform that sells high-quality products to customers.",
    metrics: ["+240% Leads", "62% Lower Bounce", "< 1s Load Time"],
    image: "/wbp/recoco.jpg",
    link: "https://recocoinnovations.com/"
  },
  {
    client: "Shree Sweets",
    category: "E-commerce",
    desc: "Redesign for Shree Sweets, an e-commerce platform that sells high-quality products to customers.",
    metrics: ["+120% Conversion", "40% More Signups", "Zero Churn Impact"],
    image: "/wbp/shree.jpg",
    link: "https://shreesweets.in/"
  },
  {
    client: "DAT Media Fl",
    category: "Restaurant Website",
    desc: "A sensory-rich dining website with integrated reservation systems, dynamic menus, and a premium editorial visual layout.",
    metrics: ["+300% Reservations", "1.5x Dwell Time", "SEO Rank #1 Local"],
    image: "/wbp/dat.jpg",
    link: "https://datmediafl.com/"
  },
  {
    client: "GK Developers",
    category: "Real Estate",
    desc: "A sophisticated personal portfolio blending professional authority with approachable design to secure speaking gigs and book sales.",
    metrics: ["+150% Inquiries", "50k+ Monthly Visits", "Brand Authority Scaled"],
    image: "/wbp/gkdev.jpg",
    link: "https://gkdevelopers.in/"
  },
  {
    client: "Spectratone",
    category: "Lighting Solutions",
    desc: "A premium lighting solutions website featuring 3D virtual tours, advanced search filtering, and seamless agent communication tools.",
    metrics: ["+210% Viewing Requests", "80% Faster Search", "Mobile Optimized"],
    image: "/wbp/spectratone.jpg",
    link: "https://spectratone.in/"
  },
  {
    client: "Starface Studio",
    category: "Studio Website",
    desc: "A patient-centric healthcare portal prioritizing accessibility, secure telehealth integrations, and intuitive appointment booking.",
    metrics: ["+85% Patient Bookings", "100% HIPAA Ready", "WCAG AAA Compliant"],
    image: "/wbp/starface.jpg",
    link: "https://starfacestudio.com/"
  },
  {
    client: "Nano Rnagers",
    category: "E-commerce",
    desc: "An interactive e-learning platform with seamless video streaming, progress tracking, and gamified student engagement features.",
    metrics: ["+400% Course Sales", "98% Completion Rate", "Zero Buffering"],
    image: "/wbp/nanorangers.jpg",
    link: "https://nanorangers.in/"
  },
  {
    client: "Divine Workspace",
    category: "Portfolio Website",
    desc: "An ultra-minimalist, high-performance creative portfolio built for an architecture firm to showcase their visionary projects.",
    metrics: ["+180% Engagement", "Award Winning UI", "GSAP Powered"],
    image: "/wbp/divine.jpg",
    link: "https://divineworkspace.com/"
  },
  {
    client: "Pixbrand Agency",
    category: "Agency Website",
    desc: "An ultra-minimalist, high-performance creative portfolio built for an architecture firm to showcase their visionary projects.",
    metrics: ["+180% Engagement", "Award Winning UI", "GSAP Powered"],
    image: "/wbp/pix.jpg",
    link: "https://www.pixbrand.agency/"
  }
];

export default function WbpClient() {
  return (
    <main className="min-h-screen bg-bglight text-dark overflow-hidden relative selection:bg-primary/30 selection:text-dark">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-skyblue/10 rounded-full blur-[60px] md:blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple/10 rounded-full blur-[60px] md:blur-[120px]" />
        <div className="absolute top-[30%] left-[20%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[80px] md:blur-[150px]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto z-10">

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible z-0">

          {/* 1. Browser Windows */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[5%] left-[2%] w-64 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-soft p-3 z-0"
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <div className="w-full h-24 bg-gray-100 rounded-lg flex flex-col gap-2 p-2">
              <div className="w-full h-4 bg-white rounded flex items-center justify-between px-2">
                <div className="w-12 h-2 bg-gray-200 rounded"></div>
                <div className="w-4 h-2 bg-primary/40 rounded"></div>
              </div>
              <div className="w-full h-10 bg-primary/10 rounded border border-primary/20 flex items-center justify-center">
                <LineChart className="w-4 h-4 text-primary" />
              </div>
            </div>
            <p className="text-[10px] text-soft font-semibold mt-2 ml-1">Analytics Overview</p>
          </motion.div>

          {/* E-Commerce Store Browser */}
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [4, -1, 4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[40%] right-[1%] w-72 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-soft p-3 z-0"
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <div className="w-full h-32 bg-gray-50 rounded-lg border border-gray-100 p-2 flex gap-2">
              <div className="w-1/2 h-full bg-gray-200 rounded-md"></div>
              <div className="w-1/2 h-full flex flex-col gap-2">
                <div className="w-full h-4 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-6 bg-primary rounded mt-auto"></div>
              </div>
            </div>
            <p className="text-[10px] text-soft font-semibold mt-2 ml-1">E-Commerce Store</p>
          </motion.div>

          {/* 2. Code Snippet Cards */}
          <motion.div
            animate={{ y: [-10, 15, -10], x: [5, -5, 5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[10%] right-[12%] bg-dark/95 backdrop-blur-xl border border-white/10 shadow-glow-primary rounded-xl p-4 font-mono text-[10px] text-gray-300 z-0"
          >
            <div><span className="text-purple-400">const</span> <span className="text-blue-300">conversion</span> = <span className="text-green-300">"+240%"</span>;</div>
            <div><span className="text-purple-400">export</span> <span className="text-blue-300">default</span> <span className="text-yellow-200">Scale</span>;</div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -15, 10], rotate: [-3, 1, -3] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[20%] left-[2%] bg-dark/95 backdrop-blur-xl border border-white/10 shadow-glow-primary rounded-xl p-4 font-mono text-[10px] text-gray-300 z-0"
          >
            <div><span className="text-gray-500">&lt;</span><span className="text-red-400">div</span> <span className="text-yellow-200">className</span>=<span className="text-green-300">"hero"</span><span className="text-gray-500">&gt;</span></div>
            <div className="pl-4">Performance First</div>
            <div><span className="text-gray-500">&lt;/</span><span className="text-red-400">div</span><span className="text-gray-500">&gt;</span></div>
          </motion.div>

          {/* 3. Performance Metrics */}
          <motion.div
            animate={{ y: [-20, 10, -20] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute top-[50%] left-[-2%] bg-white/80 backdrop-blur-xl border border-gray-200 shadow-soft rounded-2xl p-4 flex items-center gap-3 z-0"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
              <Zap className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-dark leading-none">95</p>
              <p className="text-xs text-soft font-semibold">Performance</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[32%] left-[12%] bg-white/80 backdrop-blur-xl border border-gray-200 shadow-soft rounded-2xl p-3 flex items-center gap-2 z-0 scale-90"
          >
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-dark">100 SEO Score</span>
          </motion.div>

          {/* 4. Mobile Device Mockup */}
          <motion.div
            animate={{ y: [-10, 25, -10], rotate: [5, 2, 5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            className="absolute bottom-[5%] right-[8%] w-32 h-64 bg-white border-[6px] border-gray-800 rounded-[2rem] shadow-xl overflow-hidden z-0"
          >
            <div className="w-full h-4 bg-gray-800 flex justify-center">
              <div className="w-10 h-2 bg-gray-900 rounded-b-lg"></div>
            </div>
            <div className="p-2 flex flex-col gap-2 h-full bg-gray-50">
              <div className="w-full h-24 bg-primary/20 rounded-xl"></div>
              <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-2 bg-gray-300 rounded"></div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
                <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
              </div>
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
            <span className="text-xs font-semibold tracking-[0.2em] text-soft uppercase">Web Experiences</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 tracking-tight leading-[1.1] text-dark">
            Websites Designed <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-skyblue to-purple">To Perform</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-soft mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Explore a curated collection of websites crafted by The Simbolo, blending strategy, design, and technology to create digital experiences that drive measurable results.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="#featured-projects" className="w-full sm:w-auto px-8 py-4 bg-dark text-white font-semibold rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-300 shadow-soft">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-dark font-semibold rounded-full hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 duration-300 backdrop-blur-sm shadow-sm flex items-center justify-center gap-2">
              Start Your Website
            </Link>
          </motion.div>
        </motion.div>


      </section>

      {/* 2. WEBSITE SHOWCASE SECTION */}
      <section id="featured-projects" className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto z-10 border-t border-gray-200">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-skyblue/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" />

        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-dark">Featured Website Projects</h2>
            <p className="text-lg md:text-2xl text-soft max-w-2xl font-light">Nine carefully crafted digital experiences built to help brands grow.</p>
          </div>
          <Link href="/services" className="hidden md:flex px-6 py-3 bg-white border border-gray-200 text-dark font-semibold rounded-full hover:bg-gray-50 transition-all items-center gap-2 shadow-sm">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" } }
              }}
              className="group flex flex-col rounded-[32px] overflow-hidden border border-gray-200 bg-white shadow-soft hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-2 h-full"
            >
              {/* Top Area: Browser Mockup */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 border-b border-gray-200 overflow-hidden shrink-0 flex flex-col">
                <div className="w-full h-8 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-1.5 shrink-0 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                </div>
                <div className="relative flex-1 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.client}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center z-10">
                    <a href={item.link} className="px-6 py-3 bg-white text-dark rounded-full font-bold flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Middle Section */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-dark">{item.client}</h3>
                  <span className="px-3 py-1 bg-bglight border border-gray-200 text-xs font-semibold text-primary rounded-full tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>

                <p className="text-soft text-base leading-relaxed mb-8 flex-1">
                  {item.desc}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.metrics.map((metric, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-dark text-xs font-semibold rounded-md flex items-center gap-1.5">
                      <BarChart3 className="w-3 h-3 text-primary" /> {metric}
                    </span>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <a href={item.link} className="text-dark font-semibold hover:text-primary transition-colors flex items-center gap-2 text-sm">
                    View Details <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href={item.link} className="w-10 h-10 rounded-full bg-bglight border border-gray-200 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:hidden">
          <Link href="/services" className="px-8 py-4 bg-white border border-gray-200 text-dark font-semibold rounded-full hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm w-full justify-center">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. VISUAL SECTION BREAK */}
      <div className="w-full h-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent h-[1px] top-1/2 -translate-y-1/2"></div>
        <div className="w-16 h-8 rounded-full bg-bglight border border-gray-200 flex items-center justify-center z-10 gap-1 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* 4. RESULTS & IMPACT SECTION */}
      <section className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto z-10">
        <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-dark">Built For Results</h2>
          <p className="text-lg md:text-2xl text-soft font-light">We don't just build beautiful websites; we engineer digital platforms that actively grow your business.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { value: "150+", label: "Websites Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "2.5x", label: "Avg. Conversion Boost" },
            { value: "+180%", label: "Avg. Engagement" }
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
              className="group relative h-48 md:h-64 rounded-[32px] overflow-hidden border border-gray-200 bg-white cursor-pointer flex flex-col items-center justify-center p-6 hover:border-primary/30 transition-colors duration-500 shadow-soft"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-bglight to-transparent opacity-50 z-10" />
              <div className="relative z-20 text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-dark mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple transition-all duration-300">
                  {item.value}
                </h3>
                <p className="text-sm md:text-base font-semibold text-soft tracking-wider uppercase">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 6. FINAL CTA SECTION */}
      <section className="relative py-40 px-4 md:px-8 overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-[#0a192f] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[150px] -z-10" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center z-10 relative"
        >
          <div className="w-24 h-24 mx-auto bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 mb-10 shadow-glow-primary">
            <Globe className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">Ready To Build <br className="hidden sm:block" /> Something Exceptional?</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Let's create a website that not only looks beautiful but delivers measurable business growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-primary text-white text-lg font-bold rounded-full hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-glow-primary flex items-center justify-center gap-2">
              Start Your Project
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
