import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import ServicesOverview from "@/components/about/ServicesOverview";
import WorkflowTimeline from "@/components/about/WorkflowTimeline";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import StatsSection from "@/components/about/StatsSection";
import CreativeCulture from "@/components/about/CreativeCulture";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Simbolo Creative Agency",
  description: "Learn more about Simbolo, a premium digital agency blending creativity, strategy, and innovation to craft cinematic digital journeys.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <ServicesOverview />
      <WorkflowTimeline />
      <WhyChooseUs />
      <StatsSection />
      <CreativeCulture />
      <AboutCTA />
    </>
  );
}
