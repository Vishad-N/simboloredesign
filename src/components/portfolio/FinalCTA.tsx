"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-dark text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-dark to-dark" />
      
      {/* Animated Floating Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-skyblue/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-[900px] mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Ready to Scale <br className="hidden md:block" /> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Stop leaving money on the table. Partner with an agency that cares about your bottom line as much as you do.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <MagneticWrapper glowColor="primary">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary hover:bg-[#35b5b8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(72,207,203,0.4)] hover:shadow-[0_0_40px_rgba(72,207,203,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Book Free Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticWrapper>
            
            <Link
              href="/assets/portfolio.pdf"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" /> Download Portfolio PDF
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
