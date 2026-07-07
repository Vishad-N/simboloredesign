"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MonitorPlay, Code2, PenTool, TrendingUp, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Video Editing",
    description: "Showcase cinematic edits, UGC videos, commercials, social media content, reels, and ad creatives.",
    icon: MonitorPlay,
    href: "/vep",
    color: "text-purple",
    bgColor: "bg-purple/10",
    hoverBorder: "hover:border-purple",
  },
  {
    title: "Website Development",
    description: "Showcase business websites, landing pages, ecommerce stores, SaaS platforms, and web applications.",
    icon: Code2,
    href: "/wbp",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBorder: "hover:border-primary",
  },
  {
    title: "Graphic Design",
    description: "Showcase branding, logos, social media creatives, packaging designs, posters, and visual identity projects.",
    icon: PenTool,
    href: "/portfolio/graphic-design",
    color: "text-orange",
    bgColor: "bg-orange/10",
    hoverBorder: "hover:border-orange",
  },
  {
    title: "SEO & Lead Generation",
    description: "Showcase SEO campaigns, ranking improvements, lead generation systems, funnels, and marketing results.",
    icon: TrendingUp,
    href: "/portfolio/seo-lead-generation",
    color: "text-skyblue",
    bgColor: "bg-skyblue/10",
    hoverBorder: "hover:border-skyblue",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-primary/30">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Our Work
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark mb-6 tracking-tight">
              Our Portfolio
            </h1>
            <p className="text-soft text-lg md:text-xl leading-relaxed">
              Explore our expertise across multiple digital services. We craft premium digital experiences that drive real results.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={category.href} className="block group h-full">
                  <div className={`h-full p-8 md:p-10 rounded-[32px] bg-gray-50 border border-gray-100 ${category.hoverBorder} transition-all duration-500 hover:shadow-soft hover:-translate-y-1 relative overflow-hidden`}>
                    
                    {/* Animated Background Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/40 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`w-16 h-16 rounded-2xl ${category.bgColor} ${category.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon strokeWidth={1.5} className="w-8 h-8" />
                      </div>
                      
                      <h2 className="font-heading text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                        {category.title}
                      </h2>
                      
                      <p className="text-soft text-base mb-8 flex-grow">
                        {category.description}
                      </p>

                      <div className="flex items-center gap-2 text-dark font-semibold group-hover:text-primary transition-colors mt-auto">
                        View Projects 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
