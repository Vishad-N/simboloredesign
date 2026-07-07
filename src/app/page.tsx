import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import TrustedBrandsMarquee from "@/components/portfolio/TrustedBrandsMarquee";

// Dynamically import below-the-fold components to reduce initial JS bundle size
const Services = dynamic(() => import("@/components/Services"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const PhotoGallerySection = dynamic(() => import("@/components/PhotoGallerySection"));
const ReelSection = dynamic(() => import("@/components/ReelSection"));
const IndustrySection = dynamic(() => import("@/components/IndustrySection"));
const Process = dynamic(() => import("@/components/Proces"));
const TrustedBrands = dynamic(() => import("@/components/TrustedBrands"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Founder = dynamic(() => import("@/components/Founder"));
const CTA = dynamic(() => import("@/components/CTA"));
const ContactStrategySection = dynamic(() => import("@/components/ContactStrategySection"));

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrandsMarquee />
      <Services />
      <IndustrySection />
      <Portfolio />

      <ReelSection />
      {/* <PhotoGallerySection /> */}

      {/* <Process /> */}

      <Testimonials />
      {/* <Founder /> */}
      <CTA />
      <ContactStrategySection />
    </>
  );
}
