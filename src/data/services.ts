export type ServiceData = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  overview: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  caseStudy: { title: string; result: string; image: string };
};

export const servicesData: ServiceData[] = [
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    shortDescription: "Cinematic animations that captivate and convert.",
    icon: "/motion.png",
    overview: "We craft high-end motion graphics that breathe life into your brand. From subtle UI micro-interactions to full-scale cinematic campaigns, our motion design ensures your message isn't just seen—it's felt.",
    benefits: [
      "Brand animations that stand out in crowded feeds",
      "Explainer videos that simplify complex ideas",
      "3D visuals that elevate product perception",
      "Social motion content optimized for engagement"
    ],
    process: [
      { step: "01", title: "Storyboarding", description: "Mapping out the visual journey and narrative beats." },
      { step: "02", title: "Style Frames", description: "Designing key frames to lock in the aesthetic." },
      { step: "03", title: "Animation", description: "Bringing the frames to life with fluid motion." },
      { step: "04", title: "Sound & Delivery", description: "Polishing with audio and exporting optimized formats." }
    ],
    caseStudy: {
      title: "TechFlow Product Launch",
      result: "300% increase in landing page conversions using motion storytelling.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Viral campaigns and strategic grid architecture.",
    icon: "/social-media.png",
    overview: "Social media isn't just about posting; it's about building a cult following. We design platform-native content sequences that demand attention, spark conversation, and drive measurable growth.",
    benefits: [
      "Growth-focused organic campaigns",
      "Comprehensive content strategy and calendaring",
      "Viral-ready creative assets and reels",
      "Engagement systems that build community"
    ],
    process: [
      { step: "01", title: "Audit & Strategy", description: "Analyzing your current presence and defining the playbook." },
      { step: "02", title: "Content Creation", description: "Producing premium assets tailored to each platform." },
      { step: "03", title: "Distribution", description: "Publishing at peak times with optimized copy." },
      { step: "04", title: "Community Management", description: "Fostering relationships and driving engagement." }
    ],
    caseStudy: {
      title: "Aura Lifestyle",
      result: "Grew Instagram following from 10k to 150k in 6 months.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription: "High-performance, award-winning digital experiences.",
    icon: "/web-dev.png",
    overview: "Your website is your digital flagship. We build premium, responsive web applications that blend stunning award-winning aesthetics with rigorous performance optimization and SEO fundamentals.",
    benefits: [
      "Premium responsive architecture",
      "Modern UI/UX with smooth micro-interactions",
      "Deep technical SEO optimization",
      "Lightning-fast performance builds"
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understanding your technical needs and user flows." },
      { step: "02", title: "UX/UI Design", description: "Prototyping the interface and visual design system." },
      { step: "03", title: "Development", description: "Writing clean, scalable, and secure code." },
      { step: "04", title: "Testing & Launch", description: "Rigorous QA before pushing your site live." }
    ],
    caseStudy: {
      title: "Elevate SaaS Platform",
      result: "Reduced bounce rate by 45% and doubled organic traffic.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "product-design",
    title: "Product Design",
    shortDescription: "Intuitive interfaces and seamless user flows.",
    icon: "/product-design.png",
    overview: "Great products are defined by how they feel, not just how they look. We design intuitive, beautiful, and scalable UI systems that users love to interact with, reducing friction and driving adoption.",
    benefits: [
      "Scalable UI design systems",
      "Intuitive app interfaces and dashboards",
      "Frictionless user experience flows",
      "High-fidelity product prototyping"
    ],
    process: [
      { step: "01", title: "User Research", description: "Identifying pain points and user needs." },
      { step: "02", title: "Wireframing", description: "Mapping the skeleton of the product." },
      { step: "03", title: "Visual Design", description: "Applying the brand aesthetic to the interface." },
      { step: "04", title: "Handoff", description: "Delivering pixel-perfect assets and specs to developers." }
    ],
    caseStudy: {
      title: "FinTech Mobile App",
      result: "Increased daily active users by 200% with a completely redesigned UX.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "motion-video-production",
    title: "Motion & Video Editing",
    shortDescription: "Pacing, narrative, and cinematic polish.",
    icon: "/video-editing.png",
    overview: "Editing is where the story is truly written. We take raw footage and sculpt it into compelling narratives with cinematic transitions, perfect pacing, and professional color grading.",
    benefits: [
      "High-retention social media reels",
      "Premium commercial edits",
      "Cinematic transitions and color grading",
      "Impactful brand storytelling"
    ],
    process: [
      { step: "01", title: "Ingest & Log", description: "Reviewing all footage and organizing the timeline." },
      { step: "02", title: "Rough Cut", description: "Establishing the narrative structure and pacing." },
      { step: "03", title: "Refinement", description: "Adding transitions, graphics, and effects." },
      { step: "04", title: "Color & Audio", description: "Final color grading and sound mixing." }
    ],
    caseStudy: {
      title: "Nike Summer Campaign",
      result: "Over 5 million organic views across social channels.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "videography",
    title: "Videography",
    shortDescription: "Capturing moments with cinematic precision.",
    icon: "/videography.png",
    overview: "From the lens to the final frame, our production team captures stunning, high-resolution footage that forms the foundation of powerful visual campaigns.",
    benefits: [
      "On-location commercial shoots",
      "High-end equipment and lighting",
      "Experienced directors and DPs",
      "Aerial and specialized cinematography"
    ],
    process: [
      { step: "01", title: "Pre-Production", description: "Location scouting, casting, and shot listing." },
      { step: "02", title: "Production", description: "Capturing the vision with expert lighting and framing." },
      { step: "03", title: "Data Management", description: "Securely backing up and logging all media." },
      { step: "04", title: "Post Handoff", description: "Delivering organized project files to the editing team." }
    ],
    caseStudy: {
      title: "Luxury Auto Showcase",
      result: "Produced a broadcast-quality spot that aired nationally.",
      image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "ads-analytics",
    title: "Ads & Analytics",
    shortDescription: "Data-driven campaigns that maximize ROAS.",
    icon: "/ads.png",
    overview: "We don't just guess; we test, measure, and scale. Our performance marketing team runs highly targeted ad campaigns backed by rigorous analytics to ensure every dollar generates a return.",
    benefits: [
      "Hyper-targeted audience segmentation",
      "A/B testing of creative and copy",
      "Deep funnel analytics and tracking",
      "Continuous optimization for maximum ROAS"
    ],
    process: [
      { step: "01", title: "Setup", description: "Configuring pixels, tracking, and attribution models." },
      { step: "02", title: "Launch", description: "Deploying initial test campaigns across platforms." },
      { step: "03", title: "Analyze", description: "Reviewing data to see which audiences and creatives win." },
      { step: "04", title: "Scale", description: "Allocating budget to the highest-performing assets." }
    ],
    caseStudy: {
      title: "DTC Beauty Brand",
      result: "Achieved a 4.5x Return on Ad Spend (ROAS) within 3 months.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    shortDescription: "High-converting storefronts that drive sales.",
    icon: "/Ecommerce.png",
    overview: "We build digital storefronts engineered for conversion. From seamless checkout flows to persuasive product pages, we design ecommerce experiences that turn browsers into buyers.",
    benefits: [
      "Conversion rate optimization (CRO)",
      "Custom Shopify/Commerce development",
      "Seamless payment and fulfillment integrations",
      "Persuasive product page design"
    ],
    process: [
      { step: "01", title: "Architecture", description: "Structuring the catalog and user journey." },
      { step: "02", title: "Design", description: "Crafting a brand-aligned, high-trust interface." },
      { step: "03", title: "Development", description: "Building the custom theme and functionality." },
      { step: "04", title: "Optimization", description: "Post-launch testing to maximize conversion rates." }
    ],
    caseStudy: {
      title: "Artisan Coffee Roasters",
      result: "Increased online sales by 150% with a streamlined checkout.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "pr",
    title: "Public Relations",
    shortDescription: "Shaping narratives and building brand authority.",
    icon: "/PR.png",
    overview: "Perception is reality. Our PR strategies secure high-impact placements, manage brand reputation, and craft compelling narratives that establish your brand as an industry leader.",
    benefits: [
      "Top-tier media placements",
      "Thought leadership positioning",
      "Crisis management and reputation control",
      "Influencer and strategic partnerships"
    ],
    process: [
      { step: "01", title: "Narrative Crafting", description: "Defining your unique angle and story." },
      { step: "02", title: "Media Outreach", description: "Pitching to targeted journalists and publications." },
      { step: "03", title: "Amplification", description: "Leveraging press hits across owned channels." },
      { step: "04", title: "Reporting", description: "Measuring sentiment and share of voice." }
    ],
    caseStudy: {
      title: "Sustainable Tech Startup",
      result: "Secured features in Forbes, TechCrunch, and Wired.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "brand-identity-design",
    title: "Brand Identity & Visual Design",
    shortDescription: "Visual identities that demand attention.",
    icon: "/product-design.png",
    overview: "A brand is more than a logo; it's an experience. We build comprehensive visual identity systems and brand strategies that position you as a premium leader in your market.",
    benefits: [
      "Visual identity systems",
      "Brand strategy and positioning",
      "Logo systems and guidelines",
      "Premium brand experiences"
    ],
    process: [
      { step: "01", title: "Discovery", description: "Uncovering your core values, audience, and market positioning." },
      { step: "02", title: "Concept", description: "Developing mood boards and initial visual directions." },
      { step: "03", title: "Design", description: "Crafting the logo, typography, and color systems." },
      { step: "04", title: "Guidelines", description: "Delivering a comprehensive brand book for consistency." }
    ],
    caseStudy: {
      title: "Lumina Luxury Real Estate",
      result: "Complete rebrand leading to a 40% increase in high-net-worth inquiries.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "digital-assets",
    title: "Digital Assets",
    shortDescription: "High-impact creatives for modern campaigns.",
    icon: "/social-media.png",
    overview: "We produce a high volume of premium digital assets tailored for growth. From social media creatives to robust marketing materials, our assets are designed to convert.",
    benefits: [
      "Social media creatives",
      "Marketing materials and pitch decks",
      "Campaign assets",
      "Content production at scale"
    ],
    process: [
      { step: "01", title: "Briefing", description: "Defining the asset requirements and campaign goals." },
      { step: "02", title: "Production", description: "Designing and animating the creative assets." },
      { step: "03", title: "Review", description: "Iterating based on feedback to ensure brand alignment." },
      { step: "04", title: "Delivery", description: "Providing organized, platform-optimized files." }
    ],
    caseStudy: {
      title: "Zenith Fitness",
      result: "Produced 150+ campaign assets that drove a 3x increase in ad CTR.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "web-design",
    title: "Web Design",
    shortDescription: "Frictionless interfaces for maximum engagement.",
    icon: "/web-dev.png",
    overview: "We design modern, intuitive web interfaces and app experiences that prioritize user journey optimization. Our responsive design systems ensure your product looks stunning on every device.",
    benefits: [
      "Modern web interfaces",
      "App experiences and dashboards",
      "User journey optimization",
      "Responsive design systems"
    ],
    process: [
      { step: "01", title: "UX Research", description: "Mapping out user flows and architecture." },
      { step: "02", title: "Wireframes", description: "Creating low-fidelity layouts to validate structure." },
      { step: "03", title: "UI Design", description: "Applying high-fidelity aesthetics and micro-interactions." },
      { step: "04", title: "Prototyping", description: "Building interactive prototypes for user testing." }
    ],
    caseStudy: {
      title: "FinServe App Redesign",
      result: "Boosted user retention by 60% through an optimized user journey.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    slug: "image-manipulation",
    title: "Image Manipulation",
    shortDescription: "Flawless retouching and creative compositing.",
    icon: "/video-editing.png",
    overview: "We transform standard photography into breathtaking visuals. Using high-end retouching and AI-enhanced techniques, we create perfect product edits and imaginative campaign composites.",
    benefits: [
      "High-end retouching",
      "AI-enhanced creatives",
      "Product edits and color correction",
      "Campaign compositing"
    ],
    process: [
      { step: "01", title: "Sourcing", description: "Selecting the best base photography." },
      { step: "02", title: "Retouching", description: "Cleaning up imperfections and adjusting lighting." },
      { step: "03", title: "Compositing", description: "Blending multiple elements into a cohesive scene." },
      { step: "04", title: "Grading", description: "Applying a cinematic color grade for a premium finish." }
    ],
    caseStudy: {
      title: "Aura Cosmetics",
      result: "Delivered flawless campaign imagery that increased product sales by 25%.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80"
    }
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}
