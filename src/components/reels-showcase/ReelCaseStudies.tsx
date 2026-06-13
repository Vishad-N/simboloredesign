"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { reelsShowcaseData } from "@/data/reelsShowcaseData";

export default function ReelCaseStudies() {
  const caseStudies = reelsShowcaseData.filter(r => r.caseStudy);

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Reel Case Studies
          </h2>
          <p className="text-soft text-lg max-w-2xl mx-auto">
            Deep dives into our strategy, execution, and the outstanding results we delivered for our partners.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-gray-100`}
            >
              {/* Left: Video Preview */}
              <div className="w-full lg:w-5/12">
                <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto rounded-[32px] overflow-hidden shadow-2xl">
                  <Image 
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>

              {/* Right: Content */}
              <div className="w-full lg:w-7/12">
                <div className="mb-6">
                  <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                    {item.client}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">{item.title}</h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-2">The Objective</h4>
                    <p className="text-soft">{item.caseStudy?.objective}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-2">Our Strategy</h4>
                    <p className="text-soft">{item.caseStudy?.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-2">Execution</h4>
                    <p className="text-soft">{item.caseStudy?.execution}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                  <h4 className="text-lg font-bold text-dark mb-4">Key Results</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.caseStudy?.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-dark font-medium">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary hover:bg-[#35b5b8] text-white px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-primary/30">
                    Watch Campaign
                  </button>
                  <button className="bg-white border border-gray-200 text-dark hover:border-dark px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 flex items-center gap-2">
                    View Full Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
