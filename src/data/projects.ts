export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  heroImage: string;
  overview: {
    challenge: string;
    solution: string;
    deliverables: string[];
    timeline: string;
    tools: string[];
  };
  gallery: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  results: {
    label: string;
    value: string;
  }[];
  nextProject: {
    slug: string;
    title: string;
    category: string;
  };
};

export const projects: Record<string, Project> = {
  "3d-visualization-cgi": {
    slug: "3d-visualization-cgi",
    title: "Luxxor ABK Shower Series",
    category: "3D Visualization & CGI",
    shortDescription: "Photorealistic 3D modeling and lighting architecture for the Luxxor ABK shower series, delivering high-fidelity marketing assets that eliminated the need for expensive physical studio sets.",
    heroImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    overview: {
      challenge: "The client needed high-fidelity product imagery showcasing their premium shower series in various luxury bathroom settings without the prohibitive costs and logistical nightmares of building multiple physical studio sets.",
      solution: "We engineered hyper-realistic 3D environments, meticulously simulating natural light and premium material textures to present the shower series in its most aspirational contexts.",
      deliverables: ["4K Renderings", "3D Animations", "Product Configurations", "Material Close-ups"],
      timeline: "4 Weeks",
      tools: ["Cinema 4D", "Octane Render", "Substance Designer", "Photoshop"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    process: [
      { step: "01", title: "Modeling & Texturing", description: "Creating exact 3D replicas of the physical products using CAD data." },
      { step: "02", title: "Environment Design", description: "Architecting virtual luxury bathroom spaces for context." },
      { step: "03", title: "Lighting Setup", description: "Simulating physical lighting setups to highlight product finishes." },
      { step: "04", title: "Rendering & Post", description: "Final high-resolution output and color grading." },
    ],
    results: [
      { label: "Cost Reduced", value: "65%" },
      { label: "Assets Delivered", value: "40+" },
      { label: "Time Saved", value: "3 Weeks" },
    ],
    nextProject: {
      slug: "product-photography",
      title: "LC Gluta Glow",
      category: "Product Photography",
    },
  },
  "product-photography": {
    slug: "product-photography",
    title: "LC Gluta Glow & BTX",
    category: "Product Photography",
    shortDescription: "High-clarity product photography and lifestyle compositions for the LC Gluta Glow and LC-Glitz BTX lines, driving a unified brand aesthetic across e-commerce and social platforms.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    overview: {
      challenge: "The brand struggled with inconsistent visual identity across their expanding product lines. They needed a cohesive, premium look for their flagship skincare products that would stand out in a saturated market.",
      solution: "We directed and executed a comprehensive studio photoshoot focusing on elemental purity—using water, glass, and soft dramatic lighting to emphasize the glowing properties of the products.",
      deliverables: ["E-commerce Catalog", "Social Media Assets", "Hero Banners", "Lifestyle Shots"],
      timeline: "3 Weeks",
      tools: ["Sony A7R IV", "Profoto Lighting", "Capture One", "Lightroom"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    process: [
      { step: "01", title: "Moodboarding", description: "Defining the visual language and elemental themes." },
      { step: "02", title: "Set Design", description: "Crafting minimalist sets with glass and water elements." },
      { step: "03", title: "Production", description: "Two-day studio shoot capturing all required angles." },
      { step: "04", title: "Retouching", description: "High-end beauty and product retouching." },
    ],
    results: [
      { label: "Engagement Increase", value: "210%" },
      { label: "Conversion Rate", value: "+4.5%" },
      { label: "Brand Cohesion", value: "100%" },
    ],
    nextProject: {
      slug: "content-creation-editing",
      title: "Educational Short-form",
      category: "Content Creation & Editing",
    },
  },
  "content-creation-editing": {
    slug: "content-creation-editing",
    title: "Educational Short-form Series",
    category: "Content Creation & Editing",
    shortDescription: "High-retention short-form video production and editing for educational creators, utilizing kinetic typography and strategic hooks to maximize watch time on vertical platforms.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    overview: {
      challenge: "An educational creator needed to adapt long-form financial concepts into engaging, viral short-form content without losing the nuance of the information or boring the audience.",
      solution: "We developed a fast-paced editing style combining kinetic typography, dynamic sound design, and custom motion graphics to visually explain complex topics within 60 seconds.",
      deliverables: ["TikToks", "Instagram Reels", "YouTube Shorts", "Scripting Templates"],
      timeline: "Ongoing",
      tools: ["Premiere Pro", "After Effects", "Illustrator", "Audition"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    process: [
      { step: "01", title: "Content Audit", description: "Reviewing existing long-form content for clip potential." },
      { step: "02", title: "Scripting & Hooks", description: "Structuring 60-second narratives with strong 3-second hooks." },
      { step: "03", title: "Editing & Motion", description: "Applying kinetic typography and visual aids." },
      { step: "04", title: "A/B Testing", description: "Testing different thumbnails and captions for performance." },
    ],
    results: [
      { label: "Total Views", value: "15M+" },
      { label: "Follower Growth", value: "350k" },
      { label: "Avg Watch Time", value: "85%" },
    ],
    nextProject: {
      slug: "graphic-design-real-estate",
      title: "Eco-Friendly Farmhouses",
      category: "Graphic Design & Real Estate",
    },
  },
  "graphic-design-real-estate": {
    slug: "graphic-design-real-estate",
    title: "Premium Land Plots & Eco-Farmhouses",
    category: "Graphic Design & Real Estate",
    shortDescription: "A comprehensive suite of marketing collateral for premium land plots and eco-friendly farmhouses, designed to convert high-intent leads through clear information hierarchy and aspirational design.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    overview: {
      challenge: "A real estate developer needed to pre-sell premium eco-farmhouses and land plots before construction began, requiring marketing materials that sold a lifestyle rather than just a floor plan.",
      solution: "We created a premium brochure, digital pitch deck, and interactive site map that combined elegant typography, earthy color palettes, and lifestyle imagery to communicate the value of sustainable luxury living.",
      deliverables: ["Print Brochures", "Digital Pitch Decks", "Interactive Site Map", "Social Media Templates"],
      timeline: "5 Weeks",
      tools: ["InDesign", "Illustrator", "Figma", "Photoshop"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    process: [
      { step: "01", title: "Brand Discovery", description: "Understanding the target demographic and eco-luxury positioning." },
      { step: "02", title: "Information Architecture", description: "Structuring complex property data into digestible layouts." },
      { step: "03", title: "Design System", description: "Developing a typography and color system reflecting nature." },
      { step: "04", title: "Final Polish", description: "Preparing assets for print and digital distribution." },
    ],
    results: [
      { label: "Pre-sales Target", value: "100%" },
      { label: "Lead Gen Cost", value: "-40%" },
      { label: "Investor Confidence", value: "High" },
    ],
    nextProject: {
      slug: "3d-visualization-cgi",
      title: "Luxxor ABK Series",
      category: "3D Visualization & CGI",
    },
  },
};
