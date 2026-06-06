"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Target, Users, TrendingUp, DollarSign } from "lucide-react";

const filters = ["All", "Real Estate", "Healthcare", "Education", "Ecommerce", "Local Business"];

const projects = [
  {
    id: 1,
    client: "Apex Real Estate",
    logo: "/assets/logo1.png",
    industry: "Real Estate",
    goal: "Lead Generation",
    image: "/content.jpg",
    stats: [
      { label: "Leads", value: "1,250", icon: <Users className="w-4 h-4 text-blue-500" /> },
      { label: "Cost/Lead", value: "$12.50", icon: <DollarSign className="w-4 h-4 text-emerald-500" /> },
      { label: "Conv. Rate", value: "8.5%", icon: <TrendingUp className="w-4 h-4 text-purple-500" /> }
    ]
  },
  {
    id: 2,
    client: "MediCare Plus",
    logo: "/assets/logo1.png",
    industry: "Healthcare",
    goal: "Patient Acquisition",
    image: "/product-photography.jpg",
    stats: [
      { label: "New Patients", value: "340", icon: <Users className="w-4 h-4 text-blue-500" /> },
      { label: "Reach", value: "45K", icon: <Target className="w-4 h-4 text-emerald-500" /> },
      { label: "ROAS", value: "4.2x", icon: <TrendingUp className="w-4 h-4 text-purple-500" /> }
    ]
  },
  {
    id: 3,
    client: "EduTech Global",
    logo: "/assets/logo1.png",
    industry: "Education",
    goal: "Course Sales",
    image: "/graphic-design.jpg",
    stats: [
      { label: "Enrollments", value: "850", icon: <Users className="w-4 h-4 text-blue-500" /> },
      { label: "Cost/Sale", value: "$45", icon: <DollarSign className="w-4 h-4 text-emerald-500" /> },
      { label: "Conv. Rate", value: "12%", icon: <TrendingUp className="w-4 h-4 text-purple-500" /> }
    ]
  },
  {
    id: 4,
    client: "Urban Fashion",
    logo: "/assets/logo1.png",
    industry: "Ecommerce",
    goal: "Sales & ROAS",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Revenue", value: "$120K", icon: <DollarSign className="w-4 h-4 text-emerald-500" /> },
      { label: "ROAS", value: "6.8x", icon: <TrendingUp className="w-4 h-4 text-blue-500" /> },
      { label: "Orders", value: "1,400", icon: <Target className="w-4 h-4 text-purple-500" /> }
    ]
  }
];

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.industry === activeFilter
  );

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-50 text-blue-600 font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Case Studies
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
              Recent Projects & Results
            </h2>
            <p className="text-soft text-lg">
              Explore how we've helped businesses across various industries achieve and exceed their marketing goals.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-dark text-white shadow-md"
                    : "bg-gray-50 text-soft hover:bg-gray-100 hover:text-dark"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                  
                  {/* Client Info Overlay */}
                  <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full p-2 flex items-center justify-center shadow-lg">
                      <Image src={project.logo} alt="Logo" width={40} height={40} className="object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.client}</h3>
                      <p className="text-white/80 text-sm font-medium">{project.industry}</p>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                    <div>
                      <p className="text-xs text-soft font-semibold uppercase tracking-wider mb-1">Campaign Goal</p>
                      <p className="font-bold text-dark text-lg">{project.goal}</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center p-3 rounded-2xl bg-gray-50 group-hover:bg-blue-50/50 transition-colors">
                        <div className="flex justify-center mb-2">{stat.icon}</div>
                        <div className="font-extrabold text-dark text-lg mb-0.5">{stat.value}</div>
                        <div className="text-xs text-soft font-medium uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
