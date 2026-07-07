import { Metadata } from "next";
import PortfolioCategoryLayout from "@/components/portfolio/PortfolioCategoryLayout";

export const metadata: Metadata = {
  title: "Website Development Portfolio | Simbolo Creative Agency",
  description: "Showcase of our business websites, landing pages, ecommerce stores, SaaS platforms, and web applications.",
};

export default function WebDevelopmentPortfolio() {
  return (
    <PortfolioCategoryLayout
      title="Website Development"
      description="Showcase of our business websites, landing pages, ecommerce stores, SaaS platforms, and web applications. We build scalable and high-performance digital products."
      color="text-primary"
      bgColor="bg-primary/5"
    />
  );
}
