"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyStory() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Our Story
            </div>
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-dark leading-tight mb-6">
              Creative <span className="text-gradient-primary">Ideas</span>, Real Results.
            </h2>
            
            <div className="space-y-6 text-lg text-soft">
              <p>
                At Simbolo Multimedia Agency, we turn your creative ideas into digital reality. As a full-service creative agency, we help brands stand out by designing everything from scratch. We craft unique logos, solid brand guidelines, and premium print materials like business cards, corporate stationery, and massive outdoor hoardings. Whether offline or online, we make sure your brand looks professional, consistent, and unforgettable.
              </p>
              <p>
                Beyond beautiful designs, we build assets that drive real business growth. Our team develops fast, mobile-friendly websites, intuitive app layouts, and high-converting landing pages. To boost your online sales, we create eye-catching social media posts for Instagram and LinkedIn, design clean email newsletters, and run high-performing ad campaigns on Google and Meta.
              </p>
              <p>
                What truly sets us apart is our advanced visual storytelling. We bring concepts to life through expert video editing, 2D/3D animated explainer videos, and dynamic motion posters. We also leverage cutting-edge technology to provide premium product photography styling and stunning, high-resolution 8K AI-enhanced artwork. From startups to big enterprises, Simbolo is your ultimate all-in-one partner for world-class design, modern technology, and powerful marketing.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
              <div>
                <h4 className="font-heading font-bold text-dark text-xl mb-2">Our Vision</h4>
                <p className="text-sm text-soft">Our mission is to help businesses grow by turning bold ideas into high-converting digital realities. By handling everything under one roof—from web development and operational store management to cinematic videos and premium print design—we take the stress out of technology and marketing, helping brands scale effortlessly.</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-dark text-xl mb-2">Our Mission</h4>
                <p className="text-sm text-soft">Our vision is to redefine how brands connect with people globally through creative innovation. We aim to stay ahead of the curve in UI/UX design, motion graphics, and advanced AI visuals, becoming the most trusted, all-in-one growth partner for modern businesses looking to leave a lasting impact.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-soft"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Creative Agency Workspace"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent"></div>
            </motion.div>
            
            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-10 -left-10 md:-left-16 w-48 md:w-64 glass-card p-6 rounded-2xl animate-float"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-dark text-xl">100%</div>
                  <div className="text-xs text-soft font-medium uppercase tracking-wider">Creative Focus</div>
                </div>
              </div>
              <p className="text-sm text-soft leading-relaxed">Focused on creating the best digital experiences.</p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
