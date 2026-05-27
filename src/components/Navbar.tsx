"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 md:px-8">
      <div className="relative max-w-[1320px] mx-auto">
        <nav className="glass-nav rounded-full px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between shadow-sm relative z-10">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo1.png"
              alt="Simbolo Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
              priority
            />
            <div className="hidden sm:block leading-none">
              <h1 className="font-heading font-bold text-dark text-base md:text-lg">Simbolo</h1>
              <p className="text-[9px] md:text-[10px] text-soft font-medium uppercase tracking-wider">
                Creative Agency
              </p>
            </div>
          </div>

          <ul className="hidden lg:flex items-center gap-8 font-medium text-sm text-dark">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="nav-link hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-1.5 md:gap-2 bg-primary hover:bg-[#35b5b8] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-xs md:text-sm transition-all shadow-glow-primary hover:-translate-y-0.5"
            >
              Contact Us
              <svg
                className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-soft border border-gray-100 overflow-hidden lg:hidden z-0"
            >
              <ul className="flex flex-col py-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-4 font-medium text-dark hover:text-primary hover:bg-gray-50/80 transition-colors border-b border-gray-50 last:border-0"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
