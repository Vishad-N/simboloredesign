import { Metadata } from "next";
import PortfolioCategoryLayout from "@/components/portfolio/PortfolioCategoryLayout";

export const metadata: Metadata = {
  title: "SEO & Lead Generation Portfolio | Simbolo Creative Agency",
  description: "Showcase of our SEO campaigns, ranking improvements, lead generation systems, funnels, and marketing results.",
};

export default function SeoLeadGenerationPortfolio() {
  return (
    <PortfolioCategoryLayout
      title="SEO & Lead Generation"
      description="Showcase of our SEO campaigns, ranking improvements, lead generation systems, funnels, and marketing results. We drive targeted traffic and convert visitors into loyal customers."
      color="text-skyblue"
      bgColor="bg-skyblue/5"
    />
  );
}
