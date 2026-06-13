import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thesimbolo.com",
      lastModified: new Date(),
    },
    {
      url: "https://thesimbolo.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://thesimbolo.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://thesimbolo.com/contact",
      lastModified: new Date(),
    },
  ];
}
