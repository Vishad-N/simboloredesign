"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface PortfolioCategoryLayoutProps {
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export default function PortfolioCategoryLayout({ title, description, color, bgColor }: PortfolioCategoryLayoutProps) {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/30 pt-32 pb-24">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Back Button */}
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-soft hover:text-primary font-medium mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className={`rounded-[40px] ${bgColor} p-10 md:p-20 mb-20 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`font-heading text-4xl md:text-6xl font-extrabold ${color} mb-6 tracking-tight`}>
                {title}
              </h1>
              <p className="text-dark/70 text-lg md:text-xl leading-relaxed max-w-2xl">
                {description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid (Placeholder) */}
        <section className="mb-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Featured Projects</h2>
              <p className="text-soft">Explore our latest work in {title.toLowerCase()}.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-[24px] aspect-[4/3] mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  {/* Placeholder for project image */}
                  <div className="w-full h-full flex items-center justify-center text-soft">
                    Project Image
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-dark rounded-full">Service {item}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-dark group-hover:text-primary transition-colors mb-2">
                    Project Name {item}
                  </h3>
                  <p className="text-soft">Short description of the impact and results achieved for this project.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study Section (Placeholder) */}
        <section className="mb-24 bg-dark rounded-[40px] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Featured Case Study</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Transforming Digital Presence</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                An in-depth look at how our {title.toLowerCase()} strategies completely overhauled a client's business, driving unprecedented growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">Challenge</h4>
                  <p className="text-sm text-gray-400">Low engagement and outdated visuals.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Solution</h4>
                  <p className="text-sm text-gray-400">Complete revamp using modern practices.</p>
                </div>
              </div>
              
              <button className="bg-primary hover:bg-[#35b5b8] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-glow-primary">
                Read Full Case Study
              </button>
            </div>
            <div className="bg-white/10 rounded-[24px] aspect-square flex items-center justify-center border border-white/10">
              <span className="text-gray-400">Case Study Image</span>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="text-center bg-gray-50 rounded-[40px] p-10 md:p-20 border border-gray-100">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark mb-6">
            Let's Build Your Next Project
          </h2>
          <p className="text-soft text-lg max-w-2xl mx-auto mb-10">
            Ready to elevate your brand with premium {title.toLowerCase()}? Get in touch with us today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-dark hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

      </div>
    </main>
  );
}
