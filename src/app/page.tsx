import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import TrustedBrandsMarquee from "@/components/portfolio/TrustedBrandsMarquee";
import ReelSection from "@/components/ReelSection";
import IndustrySection from "@/components/IndustrySection";
import Process from "@/components/Proces";
import TrustedBrands from "@/components/TrustedBrands";
import Testimonials from "@/components/Testimonials";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import ContactStrategySection from "@/components/ContactStrategySection";

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
