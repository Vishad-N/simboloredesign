import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import ReelSection from "@/components/ReelSection";
import IndustrySection from "@/components/IndustrySection";
import Process from "@/components/Proces";
import TrustedBrands from "@/components/TrustedBrands";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactStrategySection from "@/components/ContactStrategySection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <Services />
      <IndustrySection />
      <Portfolio />

      <ReelSection />
      {/* <PhotoGallerySection /> */}

      {/* <Process /> */}

      <Testimonials />
      <CTA />
      <ContactStrategySection />
    </>
  );
}
