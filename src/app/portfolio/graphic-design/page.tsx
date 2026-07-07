import { Metadata } from "next";
import PortfolioCategoryLayout from "@/components/portfolio/PortfolioCategoryLayout";

export const metadata: Metadata = {
  title: "Graphic Design Portfolio | Simbolo Creative Agency",
  description: "Showcase of our branding, logos, social media creatives, packaging designs, posters, and visual identity projects.",
};

export default function GraphicDesignPortfolio() {
  return (
    <PortfolioCategoryLayout
      title="Graphic Design"
      description="Showcase of our branding, logos, social media creatives, packaging designs, posters, and visual identity projects. We craft stunning visuals that communicate your brand's unique story."
      color="text-orange"
      bgColor="bg-orange/5"
    />
  );
}
