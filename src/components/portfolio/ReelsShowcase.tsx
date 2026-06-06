"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Heart, MessageCircle } from "lucide-react";

const reels = [
  { id: 1, title: "Product Launch Teaser", platform: "Instagram", views: "125K", likes: "12K", image: "/graphic-design.jpg" },
  { id: 2, title: "Behind the Scenes", platform: "TikTok", views: "85K", likes: "8.5K", image: "/content.jpg" },
  { id: 3, title: "Client Testimonial", platform: "Facebook", views: "45K", likes: "3.2K", image: "/product-photography.jpg" },
  { id: 4, title: "Educational Series Pt 1", platform: "Instagram", views: "210K", likes: "24K", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

export default function ReelsShowcase() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider backdrop-blur-sm">
            Video Marketing
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Reels & Video Campaigns
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Short-form content that drives massive engagement, builds brand awareness, and converts viewers into loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative aspect-[9/16] rounded-[24px] overflow-hidden bg-gray-800 mb-4 shadow-xl border border-white/10 group-hover:border-primary/50 transition-colors duration-300 cursor-pointer">
                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-xs font-semibold rounded-full border border-white/10">
                    {reel.platform}
                  </span>
                </div>

                {/* Bottom Stats Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-bold text-lg mb-2 line-clamp-1">{reel.title}</h4>
                  <div className="flex items-center gap-4 text-sm font-medium text-gray-300">
                    <span className="flex items-center gap-1.5"><Play className="w-4 h-4" /> {reel.views}</span>
                    <span className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> {reel.likes}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white hover:text-dark font-medium transition-colors">
                View Reel
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
