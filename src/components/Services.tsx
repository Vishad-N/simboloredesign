"use client";

import { useState } from "react";
import Link from "next/link";
import FloatingArrow from "@/components/ui/FloatingArrow";

const services = [
  {
    number: "01",
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven campaigns that maximize ROI and build lasting brand awareness.",
    items: ["Social Media", "Paid Advertising", "Email Marketing"],
    accentColor: "text-blue-600",
    iconBg: "bg-blue-100/80 group-hover:bg-blue-200",
    cardBg: "bg-blue-50/40 hover:bg-blue-50/80",
    borderColor: "border-blue-100 group-hover:border-blue-300",
    bulletColor: "bg-blue-400",
    iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    iconPath2: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
  },
  {
    number: "02",
    slug: "brand-identity-design",
    title: "Graphic Design",
    description: "Crafting memorable visual identities that resonate with your target audience.",
    items: ["Logo & Guidelines", "Print Media", "Stationery"],
    accentColor: "text-teal-600",
    iconBg: "bg-teal-100/80 group-hover:bg-teal-200",
    cardBg: "bg-teal-50/40 hover:bg-teal-50/80",
    borderColor: "border-teal-100 group-hover:border-teal-300",
    bulletColor: "bg-teal-400",
    iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    number: "03",
    slug: "motion-video-production",
    title: "Motion & Video",
    description: "Cinematic visual storytelling and dynamic motion graphics that captivate.",
    items: ["Explainer Videos", "Video Editing", "Motion Posters"],
    accentColor: "text-purple-600",
    iconBg: "bg-purple-100/80 group-hover:bg-purple-200",
    cardBg: "bg-purple-50/40 hover:bg-purple-50/80",
    borderColor: "border-purple-100 group-hover:border-purple-300",
    bulletColor: "bg-purple-400",
    iconPath: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z",
    iconPath2: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "04",
    slug: "web-design",
    title: "Web Design",
    description: "High-performance, immersive digital experiences optimized for conversion.",
    items: ["Responsive Web", "Landing Pages", "UI/UX Design"],
    accentColor: "text-indigo-600",
    iconBg: "bg-indigo-100/80 group-hover:bg-indigo-200",
    cardBg: "bg-indigo-50/40 hover:bg-indigo-50/80",
    borderColor: "border-indigo-100 group-hover:border-indigo-300",
    bulletColor: "bg-indigo-400",
    iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    number: "05",
    slug: "ecommerce",
    title: "E-commerce",
    description: "Scalable online stores designed to maximize sales and user retention.",
    items: ["Shopify Stores", "Product Marketing", "CRO"],
    accentColor: "text-emerald-600",
    iconBg: "bg-emerald-100/80 group-hover:bg-emerald-200",
    cardBg: "bg-emerald-50/40 hover:bg-emerald-50/80",
    borderColor: "border-emerald-100 group-hover:border-emerald-300",
    bulletColor: "bg-emerald-400",
    iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-8 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-soft text-lg">
            We provide everything you need to grow your brand and succeed online.
          </p>
        </div>

        {/* Desktop: Horizontal Flex, Mobile: Vertical Stack */}
        <div 
          className="flex flex-col lg:flex-row w-full gap-4 lg:gap-5"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {services.map((service, index) => {
            const isActive = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`
                  group relative flex flex-col justify-between rounded-[24px] border overflow-hidden cursor-pointer
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
                  ${isActive ? "lg:flex-[1.4] scale-[1.02] lg:scale-[1.04] shadow-[0_20px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.05)] z-10" : "lg:flex-[0.9] scale-100 shadow-sm z-0"}
                  ${isDimmed ? "opacity-60 lg:opacity-70 scale-[0.98]" : "opacity-100"}
                  ${service.cardBg} ${service.borderColor}
                  p-7 lg:p-8 min-h-[460px]
                `}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className={`text-4xl font-heading font-black tracking-tighter ${service.accentColor} opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300`}>
                    {service.number}
                  </span>
                  
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.iconBg} ${service.accentColor} transition-colors duration-300 shrink-0`}>
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={service.iconPath} />
                      {service.iconPath2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={service.iconPath2} />}
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* No truncation, full visibility */}
                  <p className="text-gray-600 font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3.5 mb-10">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.bulletColor} shadow-sm shrink-0`} />
                        <span className="text-sm font-semibold text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Always visible CTA anchored to bottom via mt-auto */}
                  <div className="mt-auto pt-2">
                    <Link
                      href={`/${service.slug}`}
                      className={`inline-flex items-center gap-1.5 font-bold text-sm ${service.accentColor} group/link transition-opacity hover:opacity-80`}
                    >
                      Learn More <FloatingArrow />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
