export interface ReelData {
  id: number;
  title: string;
  client: string;
  category: string;
  instagramUrl: string;
  thumbnail: string;
  viewCount?: string;
  description: string;
}

export const reelsData: ReelData[] = [
  {
    id: 1,
    title: "Ai Ads",
    client: "Re-coco Innovations",
    category: "Ads",
    instagramUrl: "https://www.instagram.com/reel/DYj-pQ7j3xX/",
    thumbnail: "/thumbnail/reelP1.png",
    viewCount: "85K",
    description: "High-energy teaser for the latest summer clothing line."
  },
  {
    id: 2,
    title: "Behind the Scenes",
    client: "Creative Studio",
    category: "Reels",
    instagramUrl: "https://www.instagram.com/p/DYjicvMtYS_/",
    thumbnail: "/thumbnail/reelP2.png",
    viewCount: "45K",
    description: "A sneak peek into our creative process."
  },
  {
    id: 3,
    title: "Pushp Masala",
    client: "Pushp",
    category: "Product Shoots",
    instagramUrl: "https://www.instagram.com/reel/DHImM6gIzNa/",
    thumbnail: "/thumbnail/reelP3.png",
    viewCount: "210K",
    description: "Detailed product shoot highlighting the smartwatch features."
  },
  {
    id: 4,
    title: "Brand Anthem",
    client: "Kwality Sweets",
    category: "Brand Films",
    instagramUrl: "https://www.instagram.com/reel/DYgqP3UCQk3/",
    thumbnail: "/thumbnail/reelP4.png",
    viewCount: "500K",
    description: "A cinematic film showcasing the brand's core values."
  },
  // {
  //   id: 5,
  //   title: "Influencer Takeover",
  //   client: "Beauty Co.",
  //   category: "Social Campaigns",
  //   instagramUrl: "https://www.instagram.com/reel/C_X3451J_4h/",
  //   thumbnail: "/product-photography.jpg",
  //   viewCount: "320K",
  //   description: "Collaborative campaign with top beauty influencers."
  // },
  // {
  //   id: 6,
  //   title: "Holiday Special Offer",
  //   client: "MegaMart",
  //   category: "Ads",
  //   instagramUrl: "https://www.instagram.com/reel/C-t093WJ_4h/",
  //   thumbnail: "/graphic-design.jpg",
  //   viewCount: "150K",
  //   description: "A festive ad to promote holiday season discounts."
  // }
];

export const reelsCategories = [
  "All",
  "Ads",
  "Reels",
  "Product Shoots",
  "Brand Films",
  "Social Campaigns"
];
