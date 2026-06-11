"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X, Loader2, Eye } from "lucide-react";
import { reelsShowcaseData, reelsCategories, ShowcaseReelData } from "@/data/reelsShowcaseData";

export default function InstagramGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedReel, setSelectedReel] = useState<ShowcaseReelData | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredReels = reelsShowcaseData.filter(
    (reel) => activeCategory === "All" || reel.category === activeCategory
  );

  const visibleReels = filteredReels.slice(0, visibleCount);

  // Stop body scroll when modal is open
  useEffect(() => {
    if (selectedReel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedReel]);

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden" id="instagram-gallery">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider backdrop-blur-sm">
            Instagram Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Our Latest Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Browse through our extensive gallery of ad films, product shoots, and viral reels.
          </p>
        </div>

        {/* Filters */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {reelsCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(8);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {visibleReels.map((reel, index) => (
              <motion.div
                key={reel.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => {
                  setSelectedReel(reel);
                  setIframeLoaded(false);
                }}
              >
                <div
                  className={`relative w-full rounded-[24px] overflow-hidden bg-gray-800 shadow-xl border border-white/10 group-hover:border-primary/50 transition-colors duration-300 ${index % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[9/16]'}`}
                >
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-white ml-1 fill-white" />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-xs font-semibold rounded-full border border-white/10 inline-block w-max">
                      {reel.category}
                    </span>
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-lg mb-1 line-clamp-1">{reel.title}</h4>
                    <p className="text-gray-300 text-xs mb-3 line-clamp-1">{reel.client}</p>
                    {reel.performanceMetrics?.views && (
                      <div className="flex items-center gap-4 text-sm font-medium text-gray-300">
                        <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> {reel.performanceMetrics.views}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredReels.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No reels found for this category.</p>
          </div>
        )}

        {filteredReels.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10 backdrop-blur-sm inline-flex items-center gap-2"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Reel Modal */}
      <AnimatePresence>
        {selectedReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedReel(null)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedReel(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-primary backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Embed Section */}
              <div className="w-full md:w-[400px] lg:w-[450px] bg-black relative flex-shrink-0 flex items-center justify-center h-[50vh] md:h-[80vh]">
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <Loader2 className="w-8 h-8 animate-spin mb-4 text-primary" />
                    <p className="text-sm">Loading Instagram Reel...</p>
                  </div>
                )}

                <iframe
                  src={`${selectedReel.instagramUrl}embed`}
                  className={`w-full h-full border-0 transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                  allow="encrypted-media"
                  onLoad={() => setIframeLoaded(true)}
                ></iframe>
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-10 flex flex-col flex-grow overflow-y-auto">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/20 mb-4">
                    {selectedReel.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedReel.title}</h3>
                  <p className="text-gray-400 font-medium">Client: <span className="text-white">{selectedReel.client}</span></p>
                </div>

                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {selectedReel.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  {selectedReel.performanceMetrics?.views && (
                    <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-3 rounded-xl border border-white/5 w-full sm:w-auto justify-center">
                      <Eye className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{selectedReel.performanceMetrics.views} Views</span>
                    </div>
                  )}

                  <a
                    href={selectedReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 group"
                  >
                    <span>Watch on Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
