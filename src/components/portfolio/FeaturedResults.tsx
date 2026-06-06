"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Activity, Eye, BarChart3 } from "lucide-react";

const results = [
  {
    icon: <DollarSign className="w-8 h-8 text-emerald-500" />,
    title: "Revenue Generated",
    value: "$12.4M",
    growth: "+145%",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Leads Generated",
    value: "84,500+",
    growth: "+82%",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Average ROAS",
    value: "6.8x",
    growth: "+2.1x",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: <Eye className="w-8 h-8 text-purple-500" />,
    title: "Reach Generated",
    value: "450M+",
    growth: "+210%",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: <Activity className="w-8 h-8 text-orange-500" />,
    title: "Ad Spend Managed",
    value: "$4.2M+",
    growth: "Efficient",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-pink-500" />,
    title: "Conversion Growth",
    value: "312%",
    growth: "+1.2% CVR",
    color: "from-pink-500/20 to-pink-500/5",
  },
];

export default function FeaturedResults() {
  return (
    <section id="portfolio-results" className="py-24 bg-gray-50/50">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm">
            Proven Success
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Featured Results
          </h2>
          <p className="text-soft text-lg max-w-2xl mx-auto">
            We don't just run campaigns; we drive tangible business growth. Here's what we've achieved across our portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group overflow-hidden rounded-[24px] bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                    {result.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    {result.growth}
                  </span>
                </div>
                
                <h3 className="text-4xl font-extrabold text-dark mb-2 tracking-tight group-hover:scale-105 origin-left transition-transform duration-300">
                  {result.value}
                </h3>
                <p className="text-soft font-medium">{result.title}</p>
              </div>
              
              {/* Decorative gradient border effect on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-skyblue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
