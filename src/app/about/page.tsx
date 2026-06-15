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
  title: "About Us",
  description: "Learn about The Simbolo, a creative digital marketing and multimedia agency helping businesses scale through innovative branding, content creation, performance marketing, and web development.",
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
