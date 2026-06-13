import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services | The Simbolo",
  description: "Explore The Simbolo's digital marketing, branding, creative, and web solutions designed to accelerate business growth.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
