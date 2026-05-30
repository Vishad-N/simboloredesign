"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const quickLinks = [
  { label: "About Us", href: "/#contact" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Branding Design", href: "/branding-design" },
  { label: "Digital Assets", href: "/digital-assets" },
  { label: "Motion Graphics", href: "/motion-graphics" },
  { label: "UI/UX Design", href: "/ui-ux-design" },
  { label: "Image Manipulation", href: "/image-manipulation" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-white pt-24 pb-8 border-t border-gray-100 relative z-10">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/assets/logo1.png"
                alt="Simbolo Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />

              <h2 className="font-heading font-bold text-dark text-2xl">
                Simbolo
              </h2>
            </div>

            <p className="text-soft mb-8 max-w-sm leading-relaxed">
              We are a creative agency helping brands grow with modern digital experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/thesimbolo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.017 3.657 9.176 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.52 1.492-3.913 3.777-3.913 1.094 0 2.238.196 2.238.196v2.475h-1.26c-1.243 0-1.63.775-1.63 1.57v1.886h2.773l-.443 2.9h-2.33V22c4.78-.754 8.437-4.913 8.437-9.93z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/the_simbolo_?igsh=ZXloMjlwcHpnandh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-dark hover:bg-purple hover:text-white hover:border-purple transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/thesimbolomultimedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-dark hover:bg-skyblue hover:text-white hover:border-skyblue transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-dark text-lg mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-sm font-medium text-soft">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-dark text-lg mb-6">
              Services
            </h4>

            <ul className="space-y-4 text-sm font-medium text-soft">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-dark text-lg mb-6">
              Newsletter
            </h4>

            <p className="text-sm text-soft mb-4">
              Subscribe to get the latest design news, articles, and resources.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                disabled={status === "loading" || status === "success"}
              />

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full text-white rounded-xl px-4 py-3 text-sm font-bold transition-all shadow-md flex justify-center items-center ${
                  status === "success" 
                    ? "bg-green-500" 
                    : "bg-dark hover:bg-black hover:shadow-lg disabled:opacity-70"
                }`}
              >
                {status === "loading" ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : status === "success" ? (
                  "Subscribed!"
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-soft font-medium">

          <p>&copy; 2026 Simbolo Agency. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-dark transition-colors">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-dark transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}