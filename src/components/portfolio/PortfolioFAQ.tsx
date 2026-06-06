"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes your digital marketing approach different?",
    answer: "We don't just focus on vanity metrics like likes and follows. Our entire methodology is built around driving tangible business results—revenue, qualified leads, and positive ROAS. We combine data-driven strategies with high-end creative execution."
  },
  {
    question: "Do you offer custom packages or set tiers?",
    answer: "Everything we do is custom. We start with a comprehensive audit of your current digital presence and business goals, then build a bespoke strategy that allocates budget to the channels with the highest potential return for your specific case."
  },
  {
    question: "How long does it take to see results?",
    answer: "While paid advertising (PPC, Paid Social) can start generating leads within the first week of launch, organic strategies (SEO, Content Marketing) typically take 3-6 months to build sustainable momentum. We usually recommend a blended approach for short and long-term wins."
  },
  {
    question: "Will we get a dedicated account manager?",
    answer: "Yes, every client is assigned a dedicated Account Strategist who serves as your main point of contact, ensuring your campaigns align with your broader business objectives and providing regular performance updates."
  },
  {
    question: "How do you handle reporting and analytics?",
    answer: "We provide real-time access to a custom performance dashboard where you can see all your metrics at a glance. Additionally, we hold monthly strategy calls to review performance, discuss insights, and align on next steps."
  }
];

export default function PortfolioFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-soft text-lg">
            Everything you need to know about partnering with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl transition-colors duration-300 ${openIndex === index ? "border-primary bg-primary/5" : "border-gray-200 bg-white hover:border-primary/50"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg text-dark pr-8">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? "bg-primary text-white" : "bg-gray-100 text-dark"
                  }`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-soft leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
