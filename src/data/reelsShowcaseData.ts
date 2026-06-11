export interface PerformanceMetrics {
  views?: string;
  reach?: string;
  engagementRate?: string;
  leadsGenerated?: string;
}

export interface CaseStudyData {
  objective: string;
  strategy: string;
  execution: string;
  results: string[];
}

export interface ShowcaseReelData {
  id: number;
  title: string;
  client: string;
  category: string;
  instagramUrl: string;
  thumbnail: string;
  description: string;
  industryTag?: string;
  performanceMetrics?: PerformanceMetrics;
  caseStudy?: CaseStudyData;
}

export const reelsCategories = [
  "All",
  "Ads",
  "Reels",
  "Product Shoots",
  "Brand Films",
  "Social Campaigns"
];

export const industriesList = [
  "Food & Restaurants",
  "Fashion & Lifestyle",
  "Real Estate",
  "Healthcare",
  "Corporate Branding"
];

export const metricsData = [
  { label: "Total Views Generated", value: "25M+" },
  { label: "Campaigns Delivered", value: "150+" },
  { label: "Brands Served", value: "85+" },
  { label: "Ad Spend Managed", value: "$5M+" },
  { label: "Leads Generated", value: "120K+" },
  { label: "Average Engagement Rate", value: "8.5%" }
];

export const reelsShowcaseData: ShowcaseReelData[] = [
  {
    id: 1,
    title: "Summer Collection Teaser",
    client: "Urban Wear",
    category: "Ads",
    instagramUrl: "https://www.instagram.com/reel/C_X3451J_4h/",
    thumbnail: "/content.jpg",
    description: "High-energy teaser for the latest summer clothing line.",
    industryTag: "Fashion & Lifestyle",
    performanceMetrics: {
      views: "2.4M",
      reach: "150K",
      engagementRate: "8.7%",
      leadsGenerated: "320"
    },
    caseStudy: {
      objective: "Launch the new summer collection and drive pre-orders.",
      strategy: "Leverage fast-paced editing and trending audio to capture Gen-Z audience attention.",
      execution: "Produced a 15-second high-energy ad film distributed across Instagram Reels and TikTok.",
      results: [
        "+150K Reach in first 48 hours",
        "8.7% Engagement Rate",
        "320 Pre-orders generated"
      ]
    }
  },
  {
    id: 2,
    title: "Brand Anthem",
    client: "Eco Lifestyle",
    category: "Brand Films",
    instagramUrl: "https://www.instagram.com/reel/C-t093WJ_4h/",
    thumbnail: "/product-photography.jpg",
    description: "A cinematic film showcasing the brand's core values.",
    industryTag: "Corporate Branding",
    performanceMetrics: {
      views: "1.2M",
      reach: "800K",
      engagementRate: "12%",
      leadsGenerated: "1,500"
    },
    caseStudy: {
      objective: "Rebrand Eco Lifestyle as a premium sustainable choice.",
      strategy: "Create a visually stunning narrative focusing on raw nature and human connection.",
      execution: "A 60-second cinematic piece shot on location, repurposed into 15s and 30s social cutdowns.",
      results: [
        "+520K Organic Views",
        "+4,200 Engagements",
        "+37% More Inquiries",
        "+22% Conversion Increase"
      ]
    }
  },
  {
    id: 3,
    title: "Restaurant Launch Campaign",
    client: "Gourmet Bites",
    category: "Social Campaigns",
    instagramUrl: "https://www.instagram.com/reel/C_X3451J_4h/",
    thumbnail: "/graphic-design.jpg",
    description: "A mouth-watering launch campaign for a new fine-dining experience.",
    industryTag: "Food & Restaurants",
    performanceMetrics: {
      views: "500K",
      reach: "200K",
      engagementRate: "9.5%",
      leadsGenerated: "850"
    }
  },
  {
    id: 4,
    title: "Luxury Condo Tour",
    client: "Skyline Properties",
    category: "Reels",
    instagramUrl: "https://www.instagram.com/reel/C-t093WJ_4h/",
    thumbnail: "/content.jpg",
    description: "An immersive reel touring a luxury penthouse in downtown.",
    industryTag: "Real Estate"
  },
  {
    id: 5,
    title: "Smartwatch Showcase",
    client: "TechLife",
    category: "Product Shoots",
    instagramUrl: "https://www.instagram.com/reel/C_X3451J_4h/",
    thumbnail: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Detailed product shoot highlighting the smartwatch features."
  },
  {
    id: 6,
    title: "Clinic Facility Overview",
    client: "CarePlus",
    category: "Brand Films",
    instagramUrl: "https://www.instagram.com/reel/C-t093WJ_4h/",
    thumbnail: "/graphic-design.jpg",
    description: "A professional and welcoming overview of the new healthcare facility.",
    industryTag: "Healthcare"
  }
];

export const clientLogos = [
  { name: "Brand 1", src: "/lgo1.png", quote: "Increased our ROI by 300%." },
  { name: "Brand 2", src: "/lgo2.png", quote: "Best creative agency we've worked with." },
  { name: "Brand 3", src: "/lgo3.png", quote: "Our engagement skyrocketed." },
  { name: "Brand 4", src: "/lgo4.png", quote: "Consistently delivers high-quality content." },
  { name: "Brand 5", src: "/lgo5.png", quote: "Helped us rebrand successfully." },
  { name: "Brand 6", src: "/lgo6.png", quote: "Exceeded all our lead generation goals." },
];
