import type { Metadata } from "next";
import ContactStrategySection from "@/components/ContactStrategySection";

export const metadata: Metadata = {
  title: "Contact Us | Simbolo Agency",
  description: "Get in touch with the Simbolo team to scale your brand with premium digital experiences and campaigns.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bglight pt-24 pb-12">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 text-center pt-12 pb-4">
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-dark tracking-tight mb-6">
          Ready to Start?
        </h1>
        <p className="text-lg text-soft max-w-2xl mx-auto">
          Whether you need a full rebrand, a high-converting website, or viral social content, our team is ready to deliver.
        </p>
      </div>
      <ContactStrategySection />
    </main>
  );
}
