"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, TrendingUp, Users, Target } from "lucide-react";
import { reelsShowcaseData } from "@/data/reelsShowcaseData";

export default function FeaturedCampaigns() {
  // Only grab the first 4 for the featured section
  const featured = reelsShowcaseData.filter(r => r.performanceMetrics).slice(0, 4);

  return (
    <section id="featured-campaigns" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Featured Campaigns
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of our most impactful work that drove measurable results and explosive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={campaign.thumbnail}
                  alt={campaign.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-bold rounded-full text-white">
                    {campaign.client}
                  </span>
                  {campaign.industryTag && (
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-md text-xs font-semibold rounded-full text-primary border border-primary/20">
                      {campaign.industryTag}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{campaign.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{campaign.description}</p>
                
                {campaign.performanceMetrics && (
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                        <Play className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Views</span>
                      </div>
                      <p className="text-lg font-bold text-white">{campaign.performanceMetrics.views}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Eng. Rate</span>
                      </div>
                      <p className="text-lg font-bold text-white">{campaign.performanceMetrics.engagementRate}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                        <Target className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Leads</span>
                      </div>
                      <p className="text-lg font-bold text-primary">{campaign.performanceMetrics.leadsGenerated}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
