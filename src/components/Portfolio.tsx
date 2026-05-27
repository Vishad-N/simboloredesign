"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    slug: "3d-visualization-cgi",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "3D Visualization & CGI",
    name: "Luxxor ABK",
    color: "text-primary",
    hoverColor: "group-hover:text-primary",
  },
  {
    slug: "product-photography",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Product Photography",
    name: "LC Gluta Glow",
    color: "text-skyblue",
    hoverColor: "group-hover:text-skyblue",
  },
  {
    slug: "content-creation-editing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Content Creation & Editing",
    name: "Educational Series",
    color: "text-purple",
    hoverColor: "group-hover:text-purple",
  },
  {
    slug: "graphic-design-real-estate",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Graphic Design & Real Estate",
    name: "Eco-Farmhouses",
    color: "text-orange",
    hoverColor: "group-hover:text-orange",
  },
];

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstChild = container.firstElementChild as HTMLElement;
      // Get the gap value dynamically or fallback to 24 (gap-6)
      const gap = 24; 
      const scrollAmount = firstChild ? firstChild.offsetWidth + gap : 400;
      
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8">
      <div className="max-w-[1320px] mx-auto bg-gradient-to-br from-[#eaf4ff] to-[#f2fcf8] rounded-[40px] p-8 md:p-16 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 blur-3xl rounded-full pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
          <div className="max-w-xl">
            <span className="inline-block bg-white text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm">
              Our Work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4 tracking-tight">
              Our Recent Work
            </h2>
            <p className="text-soft text-lg">
              See how we've helped other brands grow.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-4 items-start sm:items-center w-full md:w-auto mt-4 md:mt-0">
            <div className="flex gap-4">
              <button 
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous projects"
                className={`w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all shrink-0 ${
                  canScrollLeft 
                    ? "text-dark hover:text-primary shadow-sm hover:shadow-md cursor-pointer" 
                    : "text-dark/30 shadow-none cursor-not-allowed"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next projects"
                className={`w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all shrink-0 ${
                  canScrollRight 
                    ? "text-dark hover:text-primary shadow-sm hover:shadow-md cursor-pointer" 
                    : "text-dark/30 shadow-none cursor-not-allowed"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <Link
              href="/projects"
              className="flex w-full sm:w-auto justify-center items-center bg-dark hover:bg-black text-white px-6 py-3 rounded-full font-medium transition-all sm:ml-4 text-sm md:text-base shrink-0"
            >
              View All Projects
            </Link>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x hide-scrollbar pb-8 relative z-10 will-change-transform"
        >
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.name}
              className="min-w-[320px] md:min-w-[450px] snap-center group cursor-pointer block"
            >
              <div className="rounded-[24px] overflow-hidden mb-5 relative shadow-sm group-hover:shadow-soft transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={300}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="px-2">
                <p className={`text-sm font-semibold ${project.color} mb-1`}>
                  {project.category}
                </p>
                <h3
                  className={`font-heading text-2xl font-bold text-dark ${project.hoverColor} transition-colors`}
                >
                  {project.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
