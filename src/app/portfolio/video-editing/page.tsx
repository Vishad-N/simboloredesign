import { Metadata } from "next";
import PortfolioCategoryLayout from "@/components/portfolio/PortfolioCategoryLayout";

export const metadata: Metadata = {
  title: "Video Editing Portfolio | Simbolo Creative Agency",
  description: "Showcase of our cinematic edits, UGC videos, commercials, social media content, reels, and ad creatives.",
};

export default function VideoEditingPortfolio() {
  return (
    <PortfolioCategoryLayout
      title="Video Editing"
      description="Showcase of our cinematic edits, UGC videos, commercials, social media content, reels, and ad creatives. We bring stories to life with compelling visuals and sound."
      color="text-purple"
      bgColor="bg-[#f5f0ff]"
    />
  );
}
