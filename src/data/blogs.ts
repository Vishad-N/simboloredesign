export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; items: string[]; ordered?: boolean };

export type BlogAuthor = {
  name: string;
  avatar: string;
  role: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  publishDate: string;
  readingTime: string;
  author: BlogAuthor;
  content: ContentBlock[];
  tags: string[];
  relatedSlugs: string[];
};

const defaultAuthor: BlogAuthor = {
  name: "Simbolo Team",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
  role: "Creative Director",
};

export const blogPosts: Record<string, BlogPost> = {
  "future-of-3d-cgi-in-digital-marketing": {
    slug: "future-of-3d-cgi-in-digital-marketing",
    title: "The Future of 3D & CGI in Digital Marketing",
    category: "3D & CGI",
    excerpt:
      "Discover how cutting-edge 3D rendering and CGI technology is transforming the way brands create immersive visual content that captivates audiences and drives engagement.",
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    publishDate: "2026-05-10",
    readingTime: "6 min read",
    author: defaultAuthor,
    tags: ["3D", "CGI", "Digital Marketing", "Visual Content"],
    relatedSlugs: [
      "product-photography-tips-drive-conversions",
      "graphic-design-trends-2026",
    ],
    content: [
      {
        type: "paragraph",
        text: "The digital marketing landscape is undergoing a radical transformation, and at the forefront of this revolution is 3D rendering and CGI technology. What was once the exclusive domain of Hollywood blockbusters is now accessible to brands of all sizes, opening up entirely new possibilities for visual storytelling.",
      },
      {
        type: "heading",
        text: "Why 3D & CGI Is a Game-Changer",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Traditional product photography requires expensive studio setups, physical prototypes, and extensive post-production. CGI eliminates these constraints entirely. A single 3D model can be placed in infinite environments, lit from any angle, and rendered in photorealistic quality—all without a single physical prop.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "3D rendered product visualization",
        caption: "Modern CGI can produce imagery indistinguishable from photography",
      },
      {
        type: "heading",
        text: "Key Benefits for Brands",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Cost Efficiency: Eliminate expensive photo shoots and location fees",
          "Unlimited Iterations: Make changes instantly without reshooting",
          "Perfect Consistency: Maintain identical lighting and styling across all assets",
          "Impossible Shots: Create visuals that would be physically impossible to photograph",
          "Faster Time-to-Market: Produce marketing assets before the physical product even exists",
        ],
      },
      {
        type: "quote",
        text: "By 2027, an estimated 75% of all commercial product imagery will be CGI-generated. Brands that adopt early will have a significant competitive advantage.",
        author: "Digital Marketing Forecast Report",
      },
      {
        type: "heading",
        text: "How to Get Started",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The best approach is to start small. Choose a single product line and create 3D models for it. Use these models to generate hero banners, social media assets, and e-commerce imagery. Track the performance against your traditional photography and measure the ROI.",
      },
      {
        type: "heading",
        text: "The Future Is Interactive",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Beyond static imagery, the next frontier is interactive 3D. Imagine your customers being able to rotate, customize, and explore your products in real-time directly on your website. Technologies like WebGL and Three.js are making this increasingly practical, and brands that embrace interactive 3D experiences are seeing engagement rates soar by up to 300%.",
      },
      {
        type: "paragraph",
        text: "At Simbolo, we specialize in creating photorealistic 3D visualizations that help brands tell their stories in ways that were previously impossible. Whether you're launching a new product or refreshing your visual identity, CGI offers unmatched creative freedom and efficiency.",
      },
    ],
  },

  "product-photography-tips-drive-conversions": {
    slug: "product-photography-tips-drive-conversions",
    title: "Product Photography Tips That Drive Conversions",
    category: "Photography",
    excerpt:
      "Learn the essential product photography techniques that top e-commerce brands use to create scroll-stopping visuals and increase conversion rates by up to 40%.",
    coverImage:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    publishDate: "2026-04-28",
    readingTime: "8 min read",
    author: {
      name: "Ananya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
      role: "Lead Photographer",
    },
    tags: ["Photography", "E-commerce", "Conversion Optimization", "Visual Marketing"],
    relatedSlugs: [
      "future-of-3d-cgi-in-digital-marketing",
      "graphic-design-trends-2026",
    ],
    content: [
      {
        type: "paragraph",
        text: "In e-commerce, your product photos are your storefront. They're the first—and often only—impression a potential customer gets before deciding to buy. Studies show that 93% of consumers consider visual appearance to be the key deciding factor in a purchasing decision.",
      },
      {
        type: "heading",
        text: "Lighting Is Everything",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The single most impactful element in product photography is lighting. Natural light is your best friend for most products—it's flattering, consistent, and free. Position your product near a large window with diffused light for soft, even illumination that minimizes harsh shadows.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Professional product photography setup",
        caption: "A well-lit product setup can make or break your conversion rates",
      },
      {
        type: "heading",
        text: "The Rule of Angles",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Never rely on a single angle. Top-performing product listings include 5-7 images from different perspectives: front, back, side, detail close-ups, and lifestyle context shots. This gives customers the confidence of examining the product as if they were holding it in their hands.",
      },
      {
        type: "list",
        items: [
          "Hero shot: Clean, centered, on white or neutral background",
          "Scale shot: Show the product next to a common object for size reference",
          "Detail shot: Macro close-ups of textures, stitching, or materials",
          "Lifestyle shot: Product in its natural environment or being used",
          "Packaging shot: Show what the customer will actually receive",
        ],
      },
      {
        type: "heading",
        text: "Post-Production Matters",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Even the best raw photos need post-production polish. Color correction ensures your product colors are accurate to reality—nothing kills trust faster than a product that looks different from its photos. Background removal and retouching should be subtle and professional.",
      },
      {
        type: "quote",
        text: "Brands that invest in professional product photography see an average 40% increase in conversion rates compared to those using amateur imagery.",
        author: "E-Commerce Visual Standards Report, 2026",
      },
      {
        type: "heading",
        text: "Mobile-First Considerations",
        level: 3,
      },
      {
        type: "paragraph",
        text: "With over 70% of e-commerce traffic now coming from mobile devices, your product photos must be optimized for small screens. This means bold, clear compositions that read well at thumbnail sizes, and fast-loading optimized images that don't sacrifice quality for speed.",
      },
    ],
  },

  "building-content-strategy-that-works": {
    slug: "building-content-strategy-that-works",
    title: "Building a Content Strategy That Actually Works",
    category: "Content Strategy",
    excerpt:
      "Stop creating content for the sake of it. Learn how to build a data-driven content strategy that aligns with your business goals and delivers measurable results.",
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    publishDate: "2026-04-15",
    readingTime: "7 min read",
    author: defaultAuthor,
    tags: ["Content Strategy", "Marketing", "SEO", "Planning"],
    relatedSlugs: [
      "why-video-production-king-of-content",
      "brand-identity-more-than-logo",
    ],
    content: [
      {
        type: "paragraph",
        text: "Every brand knows they need content. But the difference between brands that thrive and brands that drown in their own content is strategy. A well-defined content strategy turns your random acts of marketing into a cohesive growth engine that compounds over time.",
      },
      {
        type: "heading",
        text: "Start With the Why",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Before creating a single piece of content, answer three fundamental questions: Who is your audience? What problem are you solving for them? And what action do you want them to take? These answers form the foundation of every content decision you'll make.",
      },
      {
        type: "heading",
        text: "The Content Pillar Framework",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Organize your content around 3-5 core pillars—broad topics that align with your expertise and your audience's interests. Each pillar spawns dozens of specific content pieces across formats: blog posts, videos, social media posts, emails, and podcasts.",
      },
      {
        type: "list",
        items: [
          "Audit your existing content to identify what's already working",
          "Research your competitors' content to find gaps you can fill",
          "Map each content piece to a specific stage of the buyer's journey",
          "Create a sustainable publishing cadence you can actually maintain",
          "Repurpose high-performing content across multiple formats",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Content strategy planning dashboard",
        caption: "A data-driven approach to content planning ensures every piece has purpose",
      },
      {
        type: "quote",
        text: "Content is king, but strategy is the kingdom. Without a clear plan, even the best content gets lost in the noise.",
      },
      {
        type: "heading",
        text: "Measuring What Matters",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Vanity metrics like likes and followers feel good but rarely correlate with business outcomes. Focus instead on metrics that matter: organic traffic growth, engagement rate, lead generation, email signups, and ultimately, revenue attribution. Set up proper UTM tracking and review your analytics monthly to identify what's working and what needs adjustment.",
      },
      {
        type: "heading",
        text: "The Consistency Compound Effect",
        level: 3,
      },
      {
        type: "paragraph",
        text: "The biggest mistake brands make is starting strong and fading out. Content marketing is a long game—the compound effect kicks in around month six. Brands that publish consistently for 12+ months see exponential growth in organic traffic, brand authority, and inbound leads. Build a calendar, batch your production, and stick to the schedule.",
      },
    ],
  },

  "graphic-design-trends-2026": {
    slug: "graphic-design-trends-2026",
    title: "Graphic Design Trends Shaping 2026",
    category: "Graphic Design",
    excerpt:
      "From neo-brutalism to AI-assisted design, explore the bold visual trends that are defining the aesthetic of 2026 and how to incorporate them into your brand.",
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    publishDate: "2026-03-22",
    readingTime: "5 min read",
    author: {
      name: "Vikram Patel",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
      role: "Senior Designer",
    },
    tags: ["Graphic Design", "Trends", "Branding", "Visual Identity"],
    relatedSlugs: [
      "brand-identity-more-than-logo",
      "future-of-3d-cgi-in-digital-marketing",
    ],
    content: [
      {
        type: "paragraph",
        text: "Design trends are cyclical, but 2026 is bringing some genuinely fresh movements that challenge traditional conventions. Whether you're rebranding, launching a new product, or simply refreshing your visual presence, understanding these trends will keep your brand ahead of the curve.",
      },
      {
        type: "heading",
        text: "1. Neo-Brutalism Goes Mainstream",
        level: 2,
      },
      {
        type: "paragraph",
        text: "What started as a rebellious web design movement has now permeated print, packaging, and brand identity. Neo-brutalism embraces bold, unapologetic aesthetics—thick borders, raw typography, vibrant clashing colors, and intentionally 'imperfect' layouts that feel authentic in an age of over-polished content.",
      },
      {
        type: "heading",
        text: "2. AI-Assisted Design Workflows",
        level: 2,
      },
      {
        type: "paragraph",
        text: "AI isn't replacing designers—it's supercharging them. Tools for generating variations, automating repetitive tasks, and exploring creative directions in seconds are becoming standard in professional workflows. The best designers in 2026 are those who know how to direct AI as a creative partner.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Modern graphic design workspace",
        caption: "The modern designer's toolkit blends traditional craft with AI-powered tools",
      },
      {
        type: "heading",
        text: "3. Kinetic Typography",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Static text is giving way to dynamic, animated typography that responds to scroll position, cursor movement, or audio input. This trend is particularly powerful in hero sections, landing pages, and social media content where capturing attention in the first second is critical.",
      },
      {
        type: "list",
        items: [
          "Variable fonts that morph between weights and styles in real-time",
          "Scroll-triggered text animations that reveal content progressively",
          "3D typography that adds depth and dimension to flat designs",
          "Hand-lettered custom typefaces for authentic brand personality",
        ],
      },
      {
        type: "heading",
        text: "4. Sustainable Design Language",
        level: 2,
      },
      {
        type: "paragraph",
        text: "As sustainability becomes central to brand values, design language is following suit. Earthy color palettes, organic shapes, recycled paper textures, and minimalist compositions signal environmental consciousness. But it goes beyond aesthetics—sustainable design also means optimizing file sizes, reducing page weight, and designing for dark mode to save energy.",
      },
      {
        type: "quote",
        text: "The best design trends are those that solve real problems while looking beautiful. In 2026, that means designs that are both visually striking and environmentally conscious.",
      },
    ],
  },

  "brand-identity-more-than-logo": {
    slug: "brand-identity-more-than-logo",
    title: "Brand Identity: More Than Just a Logo",
    category: "Branding",
    excerpt:
      "Your logo is just the tip of the iceberg. Learn why a comprehensive brand identity system is essential for building trust, recognition, and lasting emotional connections.",
    coverImage:
      "https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    publishDate: "2026-03-05",
    readingTime: "7 min read",
    author: defaultAuthor,
    tags: ["Branding", "Identity", "Strategy", "Design System"],
    relatedSlugs: [
      "graphic-design-trends-2026",
      "building-content-strategy-that-works",
    ],
    content: [
      {
        type: "paragraph",
        text: "Too many businesses make the mistake of equating their brand with their logo. While a logo is an important visual symbol, it's just one element of a much larger brand identity system. True brand identity encompasses every touchpoint where your audience interacts with your business.",
      },
      {
        type: "heading",
        text: "The Anatomy of Brand Identity",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A complete brand identity system includes visual elements (logo, colors, typography, imagery style), verbal elements (voice, tone, messaging framework), and experiential elements (customer service approach, packaging experience, spatial design). Together, these create a cohesive personality that customers can recognize and connect with emotionally.",
      },
      {
        type: "list",
        items: [
          "Logo System: Primary, secondary, icon, and responsive variations",
          "Color Palette: Primary, secondary, accent, and functional colors",
          "Typography: Heading and body font families with clear hierarchy",
          "Imagery Style: Photography direction, illustration style, iconography",
          "Voice & Tone: How you sound in different contexts and channels",
          "Brand Guidelines: The rulebook that keeps everything consistent",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Brand identity system showcase",
        caption: "A cohesive brand identity extends far beyond the logo mark",
      },
      {
        type: "heading",
        text: "Why Consistency Builds Trust",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Research shows that consistent brand presentation across all platforms increases revenue by up to 23%. When every touchpoint—from your website to your invoice—speaks the same visual and verbal language, it builds familiarity. Familiarity breeds trust. And trust drives conversion.",
      },
      {
        type: "quote",
        text: "Your brand is not what you say it is. It's what they say it is. But you can shape that perception through consistent, intentional design at every touchpoint.",
        author: "Marty Neumeier",
      },
      {
        type: "heading",
        text: "The Brand Audit Process",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Start by auditing every customer touchpoint: website, social media, email templates, business cards, packaging, signage, customer support scripts, and even your hold music. Score each for consistency with your intended brand personality. The gaps you find are opportunities to strengthen your brand's impact.",
      },
      {
        type: "heading",
        text: "Evolution, Not Revolution",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Brand identity isn't static—it should evolve with your business and audience. The key is evolution, not revolution. Major rebrands can alienate existing customers if not handled carefully. Instead, make incremental refinements that keep your brand fresh while maintaining the core equity you've built.",
      },
    ],
  },

  "why-video-production-king-of-content": {
    slug: "why-video-production-king-of-content",
    title: "Why Video Production Is the King of Content",
    category: "Video Production",
    excerpt:
      "Video content generates 1200% more shares than text and images combined. Here's why investing in professional video production is the smartest marketing decision you can make.",
    coverImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    publishDate: "2026-02-18",
    readingTime: "6 min read",
    author: {
      name: "Rohan Mehta",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
      role: "Video Director",
    },
    tags: ["Video Production", "Content Marketing", "Social Media", "ROI"],
    relatedSlugs: [
      "building-content-strategy-that-works",
      "product-photography-tips-drive-conversions",
    ],
    content: [
      {
        type: "paragraph",
        text: "If a picture is worth a thousand words, a video is worth a million. In an era where attention spans are shrinking and competition for eyeballs is fiercer than ever, video has emerged as the undisputed champion of content formats. And the data backs it up comprehensively.",
      },
      {
        type: "heading",
        text: "The Numbers Don't Lie",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Video content receives 1200% more shares than text and images combined. Landing pages with video see 80% higher conversion rates. And 64% of consumers make a purchase after watching branded social videos. These aren't marginal improvements—they're transformative.",
      },
      {
        type: "list",
        items: [
          "86% of businesses now use video as a marketing tool",
          "Viewers retain 95% of a message when they watch it in video vs. 10% when reading text",
          "Social video generates 12x more shares than text and images combined",
          "Including video on a landing page can increase conversion rates by 80%",
          "54% of consumers want to see more video content from brands they support",
        ],
      },
      {
        type: "heading",
        text: "Types of Video Content That Work",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Not all video content is created equal. The format you choose should align with your marketing goals and where your audience is in the buying journey. Brand films build awareness and emotional connection. Product demos drive consideration. Customer testimonials build trust and push toward conversion.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Professional video production set",
        caption: "Professional video production creates content that converts",
      },
      {
        type: "heading",
        text: "Short-Form vs. Long-Form",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The rise of TikTok, Instagram Reels, and YouTube Shorts has made short-form video (under 60 seconds) the fastest-growing format. But long-form content hasn't died—it's evolved. Educational deep-dives, behind-the-scenes documentaries, and detailed tutorials continue to perform exceptionally on YouTube and LinkedIn.",
      },
      {
        type: "quote",
        text: "The best video strategy isn't choosing between short-form and long-form—it's creating long-form content and repurposing it into multiple short-form pieces. One shoot, dozens of assets.",
      },
      {
        type: "heading",
        text: "Getting Started Without Breaking the Bank",
        level: 3,
      },
      {
        type: "paragraph",
        text: "You don't need a Hollywood budget to start with video. Modern smartphones shoot incredible 4K footage. Affordable stabilizers, microphones, and ring lights can elevate your production quality dramatically. Start with authentic, behind-the-scenes content and customer stories—audiences value authenticity over production value. As you see results, reinvest in professional production for your hero content pieces.",
      },
    ],
  },
};

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getAllPosts(): BlogPost[] {
  return Object.values(blogPosts).sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs
    .map((s) => blogPosts[s])
    .filter((p): p is BlogPost => p !== undefined);
}

export function getAllCategories(): string[] {
  const categories = new Set(Object.values(blogPosts).map((p) => p.category));
  return Array.from(categories);
}
