"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Camera, Globe, Briefcase, MonitorPlay, ExternalLink } from "lucide-react";

const pages = [
  {
    name: "Shree Ji Corp",
    industry: "Electronics",
    icon: <Camera className="w-5 h-5 text-pink-500" />,
    followers: "18.6K",
    reach: "1.2M",
    image: "/ip1.png",
    logo: "/brand logos/15.png",
    link: "https://www.instagram.com/shreeji_corp30/",
  },
  {
    name: "Recoco Innovations",
    industry: "Plantation Retail",
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    followers: "5K",
    reach: "850K",
    image: "/ip2.png",
    logo: "/brand logos/14.png",
    link: "https://www.instagram.com/recoco_innovations/",
  },
  {
    name: "Aries India",
    industry: "Stock Market",
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    followers: "3K",
    reach: "3.5M",
    image: "/ip3.png",
    logo: "/brand logos/12.png",
    link: "https://www.instagram.com/ariesindiaresearch/",
  },
  {
    name: "Prathamveda",
    industry: "Healthcare",
    icon: <MonitorPlay className="w-5 h-5 text-red-500" />,
    followers: "1K",
    reach: "500K",
    image: "/ip4.png",
    logo: "/brand logos/13.png",
    link: "https://www.instagram.com/prathamveda_/",
  }
];

export default function PageManagement() {
  return (
    <section className="py-24 bg-dark text-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              Social Handling & Page Management
            </h2>
            <p className="text-gray-400 text-lg">
              We manage top-tier brand pages, building credible communities, generating organic reach, and establishing authority in their respective industries.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm text-center">
              <div className="text-3xl font-extrabold text-primary mb-1">50+</div>
              <div className="text-sm font-medium text-gray-400">Pages Managed</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm text-center">
              <div className="text-3xl font-extrabold text-skyblue mb-1">10M+</div>
              <div className="text-sm font-medium text-gray-400">Total Followers</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-900 border border-white/10 rounded-3xl overflow-hidden group hover:border-primary/50 transition-colors"
            >
              {/* Cover Image Mockup */}
              <div className="h-24 w-full relative">
                <Image src={page.image} alt={page.name} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="px-5 pb-6 relative">
                {/* Profile Picture */}
                <div className="absolute -top-10 left-5 w-16 h-16 rounded-full border-4 border-gray-900 overflow-hidden bg-white flex items-center justify-center">
                  <Image src={page.logo} alt="Logo" width={40} height={40} className="object-contain" />
                </div>

                {/* Platform Icon */}
                <div className="absolute top-3 right-5 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shadow-lg border border-white/5">
                  {page.icon}
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-lg line-clamp-1">{page.name}</h4>
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{page.industry}</p>

                  <div className="flex items-center gap-4 text-sm bg-black/30 p-3 rounded-xl border border-white/5">
                    <div>
                      <div className="font-bold text-white">{page.followers}</div>
                      <div className="text-xs text-gray-500">Followers</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <div className="font-bold text-white">{page.reach}</div>
                      <div className="text-xs text-gray-500">Mo. Reach</div>
                    </div>
                  </div>

                  <a href={page.link} target="_blank" rel="noopener noreferrer" className="w-full mt-4 py-2.5 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                    <ExternalLink className="w-4 h-4" /> View Profile
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
