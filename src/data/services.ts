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
    shortDescription: "Elevate Your Brand with Simbolo Multimedia",
    icon: "/social-media.png",
    overview: "Supercharge your online presence, attract high-quality leads, and convert clicks into loyal customers with our data-driven digital marketing strategies.",
    benefits: [
      "Results-Driven Strategies",
      "All-in-One Creative & Technical Team",
      "Data-Backed Decisions",
      "Transparent Reporting"
    ],
    process: [
      { step: "01", title: "Search Engine Optimization (SEO)", description: "Get found by customers exactly when they are searching for you. We optimize your website to rank on the first page of Google, driving organic, free traffic to your business." },
      { step: "02", title: "Pay-Per-Click Advertising (Google & Meta Ads)", description: "Stop waiting for results. Get instant visibility, high-quality traffic, and immediate leads with targeted ad campaigns across Google, Facebook, and Instagram." },
      { step: "03", title: "Social Media Management (SMM)", description: "Turn your social media profiles into powerful brand assets. We create engaging content calendars, design eye-catching visuals, and build an active community around your brand." },
      { step: "04", title: "Content Marketing & Copywriting", description: "Content is what connects your brand to human emotions. We write highly persuasive ad copies, engaging blogs, and clear website content that drives action." }
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
    shortDescription: "Build a Stunning Online Home",
    icon: "/web-dev.png",
    overview: "Turn your website into your 24/7 salesperson. We design beautiful, secure, and fast-loading websites that convert random visitors into paying customers",
    benefits: [
      "Completely Stress-Free Setup",
      "High-Converting Premium Layouts",
      "Built for Speed & Sales",
      "Continuous Long-Term Support"
    ],
    process: [
      { step: "01", title: "Custom Domain Name", description: "Get a professional web address (like .com or .in) that perfectly matches your company name and builds instant brand authority online." },
      { step: "02", title: "Free SSL Certificate", description: "Protect your website and user data. We install a secure HTTPS padlock on your address bar, boosting your customer trust and improving your Google search rankings." },
      { step: "03", title: "Super-Fast Cloud Hosting", description: "Say goodbye to slow loading times. Your website is hosted on high-performance, secure cloud servers to ensure maximum uptime and lightning-fast speeds." },
      { step: "04", title: "1 Professional Business Email ID", description: "Stop using generic Gmail addresses for business. Get a dedicated corporate email ID that looks professional and builds stronger trust with your customers." }
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
    shortDescription: "Stop Scrolling. Start Engaging",
    icon: "/video-editing.png",
    overview: "Bring your brand to life, capture short attention spans, and turn viewers into buyers with high-energy videos and breathtaking motion graphics",
    benefits: [
      "High-Hook Editing Style",
      "Platform-Optimized Formats",
      "Professional Motion Graphics",
      "Seamless Visual Storytelling"
    ],
    process: [
      { step: "01", title: "UGC Video Editing (User Generated Content)", description: "Raw, authentic, and highly relatable. We take raw smartphone footage from creators or your team and edit it into high-converting social proof videos with engaging captions and cuts." },
      { step: "02", title: "Premium Motion Graphics", description: "Explain complex ideas beautifully. We use custom animations, moving shapes, kinetic typography, and animated vector art to make your promotional content look modern and dynamic." },
      { step: "03", title: "Clear Explainer Videos", description: "Break down your software, product, or service into simple steps. We combine clear scripts, smooth screen recordings, and graphics to create easy-to-understand 60-second walkthroughs." },
      { step: "04", title: "Cinematic Video Production", description: "Give your brand a high-end, premium feel. We apply professional color grading, deep sound design, and cinematic pacing to corporate films, event highlights, and product launches." }
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
    shortDescription: "Build an Online Store That Sells 24/7",
    icon: "/Ecommerce.png",
    overview: "Transform your business into a powerful online brand. We don’t just create websites; we build high-converting digital storefronts that make shopping easy for your customers and growing business simple for you. From smooth product displays to secure payment setups, we handle everything.",
    benefits: [
      "Conversion rate optimization (CRO)",
      "Custom Shopify/Commerce development",
      "Seamless payment and fulfillment integrations",
      "Persuasive product page design"
    ],
    process: [
      { step: "01", title: "Store Setup & Development", description: "From domain registration and secure hosting to complete Shopify, WooCommerce, and marketplace seller account setup, we provide everything needed to launch and grow your online store smoothly and professionally." },
      { step: "02", title: "End-to-End Store Management", description: "We handle your complete e-commerce operations, including account management, inventory tracking, order processing, and product listings, ensuring a smooth, organized, and stress-free selling experience across all platforms." },
      { step: "03", title: "Design & Visual Branding", description: "We create visually stunning e-commerce designs, including high-converting websites, promotional banners, premium packaging, and realistic product mockups that strengthen your brand and attract more customers." },
      { step: "04", title: "Growth & Marketing Services", description: "We help grow your e-commerce business through high-performing ad campaigns, powerful SEO optimization, and persuasive product descriptions that attract customers and increase conversions." }
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
    shortDescription: "Shape Your Brand's Future.",
    icon: "/product-design.png",
    overview: "Make an unforgettable first impression, stand out from your competitors, and build deep trust with professional design that tells your unique story.",
    benefits: [
      "Striking Visual Storytelling",
      "Consistency Across All Platforms",
      "Clean, Modern Aesthetics",
      "Flawless Technical Execution"
    ],
    process: [
      { step: "01", title: "Logo & Brand Guidelines", description: "Your logo is the face of your business. We design memorable logos and build complete brand books—defining your exact brand colors, typography, and iconography so your team always stays on brand." },
      { step: "02", title: "Print Media", description: "Bring your brand into the physical world with high-impact marketing materials. We design professional business cards, corporate brochures, promotional banners, and massive, eye-catching outdoor hoardings." },
      { step: "03", title: "Stationery Design", description: "Establish authority in every single interaction. We create premium, cohesive corporate stationery, including formal letterheads, custom envelopes, presentation folders, and clean internal company documents." },
      { step: "04", title: "Digital Assets & Layout Design", description: "Keep your online platforms looking sharp and professional. We design modern social media templates, website banners, digital newsletters, and clean multi-channel marketing layouts that drive engagement." }
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
