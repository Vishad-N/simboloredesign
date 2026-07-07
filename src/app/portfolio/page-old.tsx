import { Metadata } from "next";
import Navbar from "@/components/Navbar";

// Import all portfolio sections
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import TrustedBrandsMarquee from "@/components/portfolio/TrustedBrandsMarquee";
import FeaturedResults from "@/components/portfolio/FeaturedResults";
import GraphicDesignShowcase from "@/components/portfolio/GraphicDesignShowcase";
import ReelsShowcase from "@/components/portfolio/ReelsShowcase";
import AnalyticsInsights from "@/components/portfolio/AnalyticsInsights";
import ProjectShowcase from "@/components/portfolio/ProjectShowcase";
import PageManagement from "@/components/portfolio/PageManagement";
import PerformanceDashboard from "@/components/portfolio/PerformanceDashboard";
import ProcessTimeline from "@/components/portfolio/ProcessTimeline";
import CreativeShowcase from "@/components/portfolio/CreativeShowcase";
import PortfolioTestimonials from "@/components/portfolio/PortfolioTestimonials";
import PortfolioFAQ from "@/components/portfolio/PortfolioFAQ";
import FinalCTA from "@/components/portfolio/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio | Simbolo Creative Agency",
  description: "Explore our premium digital marketing portfolio. We drive measurable growth through data-driven strategies, creative excellence, and relentless execution.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/30">
      <Navbar />

      {/* 1. Hero Section */}
      <PortfolioHero />

      {/* 2. Trusted By Brands Marquee */}
      <TrustedBrandsMarquee />

      {/* 3. Featured Results (Metrics) */}
      {/* <FeaturedResults /> */}

      {/* 4. Graphic Design Showcase */}
      <GraphicDesignShowcase />

      {/* 5. Reels & Video Campaigns */}
      <ReelsShowcase />

      {/* 6. Social Media Insights & Analytics */}
      <AnalyticsInsights />

      {/* 7. Recent Projects & Case Studies */}
      <ProjectShowcase />

      {/* 8. Page Management & Social Handling */}
      <PageManagement />

      {/* 9. Performance Dashboard */}
      <PerformanceDashboard />

      {/* 10. Agency Process Timeline */}
      <ProcessTimeline />

      {/* 11. Creative Showcase (Ads, Landing Pages) */}
      <CreativeShowcase />

      {/* 12. Client Testimonials */}
      <PortfolioTestimonials />

      {/* 13. FAQ Section */}
      <PortfolioFAQ />

      {/* 14. Final Conversion CTA */}
      <FinalCTA />

    </main>
  );
}
