"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    company: "Apex Real Estate",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "Working with them transformed our lead generation. We saw a 300% increase in qualified leads within the first quarter. Their attention to detail and data-driven approach is unmatched.",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "EduTech Global",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    text: "The creative campaigns they produced not only looked stunning but drove our cost-per-acquisition down by 45%. They truly understand how to marry aesthetics with performance.",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Urban Fashion",
    role: "E-commerce Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    text: "Our ROAS skyrocketed after they took over our paid social. Their team is proactive, transparent, and feels like an extension of our own in-house marketing department.",
    rating: 5,
    hasVideo: true,
  }
];

export default function PortfolioTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Client Success Stories
          </h2>
          <p className="text-soft text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our partners have to say about the impact we've delivered.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center justify-center gap-8">
            <button onClick={prev} className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-md items-center justify-center text-dark hover:text-primary transition-colors z-20">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="overflow-hidden flex-1 relative rounded-3xl bg-white border border-gray-100 shadow-xl p-8 md:p-12">
              <Quote className="absolute top-8 left-8 w-24 h-24 text-gray-100 -z-10 rotate-180" />
              
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="flex-1">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-dark font-medium leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-dark text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-soft text-sm">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>

                {testimonials[currentIndex].hasVideo && (
                  <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-gray-900 rounded-2xl relative overflow-hidden group cursor-pointer flex-shrink-0">
                    <Image src="/content.jpg" alt="Video Thumbnail" fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 ml-1 fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        Watch Video
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <button onClick={next} className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-md items-center justify-center text-dark hover:text-primary transition-colors z-20">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-8 md:hidden">
             {testimonials.map((_, i) => (
               <button
                 key={i}
                 onClick={() => setCurrentIndex(i)}
                 className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === i ? "bg-primary w-6" : "bg-gray-300"}`}
               />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
