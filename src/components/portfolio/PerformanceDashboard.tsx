"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, Activity, DollarSign } from "lucide-react";

export default function PerformanceDashboard() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-white text-dark font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm border border-gray-100">
            Enterprise Analytics
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Performance Dashboard
          </h2>
          <p className="text-soft text-lg">
            We provide our clients with enterprise-level dashboards offering total transparency into ad spend, revenue attribution, and ROI.
          </p>
        </div>

        {/* Dashboard UI Wrapper */}
        <div className="bg-white rounded-[2rem] border border-gray-200 shadow-2xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gray-900 text-white px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg tracking-wide">Client Performance HQ</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm font-medium text-gray-400">Date Range:</span>
              <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm font-medium">
                Last 30 Days v
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8 bg-gray-50/50">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { title: "Total Revenue", value: "$845,200", growth: "+24.5%", icon: <DollarSign className="w-5 h-5" />, color: "text-emerald-500", bg: "bg-emerald-50" },
                { title: "Ad Spend", value: "$124,500", growth: "-5.2%", icon: <Activity className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-50" },
                { title: "Average ROAS", value: "6.78x", growth: "+1.2x", icon: <TrendingUp className="w-5 h-5" />, color: "text-primary", bg: "bg-primary/10" },
                { title: "Cost Per Acq.", value: "$18.40", growth: "-12.4%", icon: <PieChart className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-50" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                      stat.growth.startsWith("+") ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                    }`}>
                      {stat.growth}
                    </span>
                  </div>
                  <div className="text-soft text-sm font-semibold mb-1">{stat.title}</div>
                  <div className="text-2xl font-extrabold text-dark">{stat.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Main Chart Area Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-dark text-lg">Revenue vs Spend</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-soft">
                    <div className="w-3 h-3 rounded-full bg-primary"></div> Revenue
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-soft">
                    <div className="w-3 h-3 rounded-full bg-blue-300"></div> Spend
                  </div>
                </div>
              </div>
              
              {/* Abstract Chart Bars */}
              <div className="h-64 flex items-end justify-between gap-2 md:gap-4 border-b border-gray-100 pb-4 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-xs text-gray-400 font-medium pb-2 -ml-2 transform -translate-x-full hidden md:flex">
                  <span>$40k</span>
                  <span>$30k</span>
                  <span>$20k</span>
                  <span>$10k</span>
                  <span>$0</span>
                </div>

                {[45, 60, 35, 75, 55, 90, 85, 100, 70, 85].map((height, i) => (
                  <div key={i} className="flex-1 flex justify-center items-end gap-1 group relative">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.8, type: "spring" }}
                      className="w-full bg-primary rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height * 0.3}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.8, type: "spring" }}
                      className="w-full bg-blue-300 rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    
                    {/* Tooltip on hover */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-dark text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      Day {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
