"use client";

import { motion } from "framer-motion";
import { Coffee, Shirt, Building2, HeartPulse, Briefcase } from "lucide-react";
import { industriesList } from "@/data/reelsShowcaseData";

const industryIcons: Record<string, React.ReactNode> = {
  "Food & Restaurants": <Coffee className="w-8 h-8" />,
  "Fashion & Lifestyle": <Shirt className="w-8 h-8" />,
  "Real Estate": <Building2 className="w-8 h-8" />,
  "Healthcare": <HeartPulse className="w-8 h-8" />,
  "Corporate Branding": <Briefcase className="w-8 h-8" />
};

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white text-dark">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Industries We Work With
          </h2>
          <p className="text-soft text-lg max-w-2xl mx-auto">
            We adapt our creative strategies to fit the unique voice and audience of your specific industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industriesList.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary/30 p-8 rounded-3xl text-center transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(var(--primary-rgb),0.2)] hover:-translate-y-2"
              onClick={() => {
                // In a full implementation, this could scroll to the gallery and pre-filter
                document.getElementById('instagram-gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="mx-auto w-16 h-16 bg-white group-hover:bg-primary/10 rounded-full flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors duration-300 mb-6 shadow-sm group-hover:shadow-md">
                {industryIcons[industry]}
              </div>
              <h3 className="font-bold text-lg text-dark group-hover:text-primary transition-colors">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
