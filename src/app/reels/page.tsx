import { Metadata } from "next";

// Import new isolated components
import ReelsHero from "@/components/reels-showcase/ReelsHero";
import FeaturedCampaigns from "@/components/reels-showcase/FeaturedCampaigns";
import IndustriesSection from "@/components/reels-showcase/IndustriesSection";
import CampaignResults from "@/components/reels-showcase/CampaignResults";
import ReelCaseStudies from "@/components/reels-showcase/ReelCaseStudies";
import InstagramGallery from "@/components/reels-showcase/InstagramGallery";
import ClientSuccessBanner from "@/components/reels-showcase/ClientSuccessBanner";

// Reuse existing FinalCTA
import FinalCTA from "@/components/portfolio/FinalCTA";

export const metadata: Metadata = {
  title: "Reels & Campaign Showcase | Simbolo Creative Agency",
  description: "Explore our premium reels, ad films, and content campaigns crafted to drive engagement, visibility, and conversions.",
};

export default function ReelsShowcasePage() {
  return (
    <div className="w-full bg-white selection:bg-primary/30 flex flex-col">
      {/* 1. Hero Showreel */}
      <ReelsHero />
      <InstagramGallery />

      {/* 2. Featured Campaigns */}
      {/* <FeaturedCampaigns /> */}

      {/* 3. Industries We Work With */}
      {/* <IndustriesSection /> */}

      {/* 4. Campaign Results & Impact */}
      <CampaignResults />

      {/* 5. Reel Case Studies */}
      {/* <ReelCaseStudies /> */}

      {/* 6. Instagram Reel Gallery */}

      {/* 7. Client Success Banner */}
      <ClientSuccessBanner />

      {/* 8. Final CTA Section */}
      <FinalCTA />
    </div>
  );
}
