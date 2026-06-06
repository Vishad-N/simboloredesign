"use client";

import { motion } from "framer-motion";
import { LineChart, BarChart2, MousePointerClick, TrendingUp } from "lucide-react";

export default function AnalyticsInsights() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full lg:max-w-xl">
            <span className="inline-block bg-purple-100 text-purple-700 font-bold text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Data-Driven Growth
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
              Social Media Insights & Analytics
            </h2>
            <p className="text-soft text-lg mb-8">
              We don't rely on guesswork. Our strategies are backed by robust analytics, ensuring every post, ad, and campaign delivers measurable impact.
            </p>
            
            <ul className="space-y-6 mb-10">
              {[
                { icon: <TrendingUp className="w-6 h-6 text-primary" />, title: "300% Average Reach Growth", desc: "Expanding your brand footprint across all major platforms." },
                { icon: <MousePointerClick className="w-6 h-6 text-skyblue" />, title: "Higher Engagement Rates", desc: "Creating content that sparks conversations and builds community." },
                { icon: <LineChart className="w-6 h-6 text-emerald-500" />, title: "Transparent Reporting", desc: "Real-time dashboards so you always know how your campaigns are performing." }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg">{item.title}</h4>
                    <p className="text-soft">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full relative">
            {/* Dashboard Mockup Container */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full rounded-3xl bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Dashboard Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs font-semibold text-soft">Performance Dashboard</div>
              </div>

              {/* Dashboard Body */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-4 rounded-2xl">
                    <div className="text-emerald-600 text-sm font-semibold mb-1">Total Reach</div>
                    <div className="text-3xl font-extrabold text-dark mb-2">2.4M</div>
                    <div className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +42.5% this month
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 rounded-2xl">
                    <div className="text-blue-600 text-sm font-semibold mb-1">Engagement</div>
                    <div className="text-3xl font-extrabold text-dark mb-2">145K</div>
                    <div className="text-xs font-medium text-blue-600 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +18.2% this month
                    </div>
                  </div>
                </div>

                {/* Chart Mockup */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative h-48 overflow-hidden">
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <div className="font-semibold text-dark text-sm">Audience Growth</div>
                    <BarChart2 className="w-4 h-4 text-soft" />
                  </div>
                  
                  {/* Decorative Chart Lines */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-6 gap-2">
                    {[40, 55, 45, 70, 65, 85, 100].map((height, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 -top-8 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 hidden md:flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-xs text-soft font-medium">Follower Growth</div>
                <div className="font-bold text-dark">+2,500/wk</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
