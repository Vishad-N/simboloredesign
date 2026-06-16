"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

export default function LoadingProgressIndicator() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Handle route change completion
  useEffect(() => {
    if (isLoading) {
      setProgress(100);
      setIsComplete(true);

      const timeout = setTimeout(() => {
        setIsLoading(false);
        // Reset state after fade out animation completes
        setTimeout(() => {
          setProgress(0);
          setIsComplete(false);
        }, 400); 
      }, 800); // Show checkmark for 800ms before hiding

      return () => clearTimeout(timeout);
    }
  }, [pathname, searchParams]);

  // Intercept link clicks to start loading
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Find the closest anchor tag
      const target = (e.target as HTMLElement).closest("a");
      if (!target || !target.href) return;

      try {
        const targetUrl = new URL(target.href);
        const currentUrl = new URL(window.location.href);

        // Check if navigation is to a different page within the same origin
        // Ignore external links, new tabs, and hash links on the same page
        const isInternal = targetUrl.origin === currentUrl.origin;
        const isDifferentPage = targetUrl.pathname !== currentUrl.pathname || targetUrl.search !== currentUrl.search;
        const isNotNewTab = target.target !== "_blank";
        const isNotDownload = !target.hasAttribute("download");

        if (isInternal && isDifferentPage && isNotNewTab && isNotDownload) {
          setIsLoading(true);
          setProgress(0);
          setIsComplete(false);
        }
      } catch (err) {
        // Ignore invalid URLs
      }
    };

    // Attach listener to document to catch all link clicks
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  // Fake progress simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isLoading && progress < 90 && !isComplete) {
      interval = setInterval(() => {
        setProgress((prev) => {
          // Slow down the progress as it gets closer to 90%
          const remaining = 90 - prev;
          const increment = Math.max(0.5, remaining * 0.1);
          return Math.min(prev + increment, 90);
        });
      }, 200);
    }
    
    return () => clearInterval(interval);
  }, [isLoading, progress, isComplete]);

  // Prevent rendering on server
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 p-2 pr-4 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(46,139,122,0.2)] border border-white/20 dark:border-white/10 text-[#2E8B7A] pointer-events-none"
          style={{
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Circular Progress Indicator */}
          <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Track */}
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="opacity-20"
              />
              {/* Animated Progress */}
              <motion.circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="drop-shadow-[0_0_6px_rgba(46,139,122,0.6)]"
              />
            </svg>

            {/* Center Content: Percentage or Checkmark */}
            <div className="absolute inset-0 flex items-center justify-center font-bold">
              <AnimatePresence mode="wait">
                {isComplete ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Check className="w-4 h-4 text-[#2E8B7A]" strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.span
                    key="percentage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[10px] tracking-tighter text-[#2E8B7A]"
                  >
                    {Math.round(progress)}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Loading Text */}
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            className="font-medium text-sm tracking-wide overflow-hidden whitespace-nowrap text-gray-800 dark:text-gray-200"
          >
            {isComplete ? "Ready" : "Loading..."}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
