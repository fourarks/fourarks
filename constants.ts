import { Service, Offer, TeamMember, FAQItem, CaseStudy } from './types';

export const COMPANY_INFO = {
  name: "4ARKS",
  email: "4arks2025@gmail.com",
  phone: "+91-9202382254",
  address: "Bhopal, Madhya Pradesh",
  calendlyUrl: "https://calendly.com/", // Placeholder
};

export const SERVICES: Service[] = [
  { 
    id: 'branding', 
    title: "Branding & Identity", 
    description: "Crafting memorable visual identities that resonate with your audience.", 
    icon: "star", 
    category: "Design",
    keywords: ["branding agency", "visual identity", "logo design", "brand strategy", "corporate identity"],
    longDescription: "In a crowded marketplace, your brand is your most valuable asset. Our comprehensive branding services go beyond just a logo. We build cohesive visual identity systems, voice guidelines, and brand narratives that resonate with your target audience and stand the test of time.",
    features: ["Logo Design & Typography", "Color Palette Psychology", "Brand Guidelines Book", "Voice & Tone Strategy"]
  },
  { 
    id: 'web', 
    title: "Website Design", 
    description: "High-performance, responsive websites optimized for conversion.", 
    icon: "globe", 
    category: "Design",
    keywords: ["web design", "UI/UX design", "responsive websites", "landing page optimization", "Next.js development"],
    longDescription: "Your website is your 24/7 salesperson. We design and build lightning-fast, visually stunning websites that guide visitors toward conversion. Using modern frameworks and user-centric design principles, we ensure your digital presence is future-proof.",
    features: ["Custom UI/UX Design", "Mobile-First Development", "Speed Optimization", "Conversion Rate Optimization (CRO)"]
  },
  { 
    id: 'social', 
    title: "Social Media", 
    description: "Strategic content creation and management to build community.", 
    icon: "users", 
    category: "Design",
    keywords: ["social media marketing", "content creation", "community management", "instagram growth", "linkedin strategy"],
    longDescription: "Building a community requires more than just posting images. We develop data-driven content strategies that engage your audience and build brand loyalty. From creative direction to community management, we handle your social presence end-to-end.",
    features: ["Content Strategy & Calendar", "Reels & Short-form Video", "Community Engagement", "Analytics & Reporting"]
  },
  { 
    id: 'video', 
    title: "Video Production", 
    description: "Cinematic storytelling that captures attention and emotion.", 
    icon: "film", 
    category: "Design",
    keywords: ["video production", "commercial filming", "motion graphics", "brand storytelling", "promotional videos"],
    longDescription: "Video is the most powerful medium for storytelling. Whether it's a high-energy product launch or an emotional brand story, our production team delivers cinematic quality that captures attention and drives action.",
    features: ["Scriptwriting & Storyboarding", "4K Filming & Editing", "Motion Graphics & VFX", "Sound Design & Color Grading"]
  },
  { 
    id: 'ar', 
    title: "AR Product Visualization", 
    description: "Immersive 3D/AR experiences for e-commerce and retail.", 
    icon: "box", 
    category: "AR/3D",
    keywords: ["augmented reality", "WebAR", "3D product viewer", "immersive commerce", "virtual try-on"],
    longDescription: "Bridge the gap between digital and physical. Our WebAR solutions allow customers to view your products in their own space directly from their browser, significantly reducing return rates and increasing conversion confidence.",
    features: ["High-Fidelity 3D Modeling", "WebAR Integration (No App Required)", "Interactive 360 Viewers", "Virtual Try-On Experiences"]
  },
  { 
    id: 'automation', 
    title: "Chatbot & Call Automation", 
    description: "AI-driven customer service solutions to scale support.", 
    icon: "cpu", 
    category: "Automation",
    keywords: ["AI chatbots", "customer support automation", "voice AI", "workflow automation", "business efficiency"],
    longDescription: "Scale your customer support without scaling your headcount. We build intelligent AI agents capable of handling complex queries, booking appointments, and managing workflows, ensuring your business runs smoothly 24/7.",
    features: ["Custom AI Training", "Multi-channel Integration", "Voice & Text Capabilities", "Lead Qualification Logic"]
  },
  { 
    id: 'graphic', 
    title: "Graphic Collateral", 
    description: "Print and digital assets that maintain brand consistency.", 
    icon: "image", 
    category: "Design",
    keywords: ["graphic design", "marketing collateral", "print design", "digital assets", "presentation design"],
    longDescription: "Consistency is key to brand recognition. We create a full suite of marketing collateral—from pitch decks and brochures to packaging and ad creatives—ensuring every touchpoint reinforces your brand's premium positioning.",
    features: ["Packaging Design", "Marketing Brochures", "Pitch Decks & Presentations", "Digital Ad Creatives"]
  },
  { 
    id: 'product', 
    title: "Product Design", 
    description: "User-centric design for digital products and apps.", 
    icon: "pen-tool", 
    category: "Design",
    keywords: ["product design", "SaaS design", "app interface", "user experience", "prototyping"],
    longDescription: "We design digital products that users love. Our product design process focuses on solving real user problems through intuitive interfaces and seamless flows, helping you build software that scales.",
    features: ["User Research & Personas", "Wireframing & Prototyping", "Design Systems", "Usability Testing"]
  },
  { 
    id: 'arch', 
    title: "Architectural Visualizations", 
    description: "Photorealistic 3D renders for real estate and interiors.", 
    icon: "home", 
    category: "AR/3D",
    keywords: ["architectural visualization", "3D rendering", "interior design visualization", "real estate marketing", "photorealistic render"],
    longDescription: "Sell the dream before it's built. Our architectural visualization team creates ultra-realistic 3D renders and walkthroughs for real estate developers and interior designers, helping you secure pre-sales and impress investors.",
    features: ["Exterior & Interior Rendering", "3D Floor Plans", "Virtual Walkthroughs", "Lighting & Texture Simulation"]
  },
  { 
    id: 'seo', 
    title: "SEO & Growth", 
    description: "Data-driven strategies to improve visibility and organic traffic.", 
    icon: "trending-up", 
    category: "Automation",
    keywords: ["SEO services", "organic growth", "content marketing", "technical SEO", "keyword strategy"],
    longDescription: "Visibility is the currency of the digital age. Our comprehensive SEO strategies combine technical optimization, content authority, and link building to ensure your brand dominates search results for high-intent keywords.",
    features: ["Technical Site Audits", "Keyword Research & Strategy", "On-Page Optimization", "Backlink Acquisition"]
  },
];

export const OFFERS: Offer[] = [
  {
    id: 'launch',
    title: "Brand Launch System",
    priceRange: "₹45,000 - ₹80,000",
    deliverables: ["Logo & Identity System", "Brand Guidelines", "Social Media Kit", "Landing Page Design"],
  },
  {
    id: 'growth',
    title: "Growth Engine Retainer",
    priceRange: "₹25,000 - ₹50,000 / mo",
    deliverables: ["Social Media Management", "Content Creation", "Weekly Strategy Calls", "Performance Reporting"],
    isPopular: true,
  },
  {
    id: 'automation',
    title: "Automation Suite",
    priceRange: "₹30,000 - ₹60,000",
    deliverables: ["Custom AI Chatbot", "CRM Integration", "Email Sequences", "Lead Scoring Setup"],
  },
  {
    id: 'ar',
    title: "AR Product Experience",
    priceRange: "₹15,000 per SKU",
    deliverables: ["3D Modeling", "AR Viewer Integration", "GLB/USDZ Files", "Implementation Guide"],
  },
  {
    id: 'arch',
    title: "Architectural Edge",
    priceRange: "₹20,000 per view",
    deliverables: ["4K Photorealistic Render", "Interior/Exterior Staging", "Lighting Variations", "Post-Processing"],
  }
];

export const TEAM: TeamMember[] = [
  { id: '1', name: "Aarav Sharma", role: "Creative Director", image: "https://picsum.photos/400/500?grayscale&random=1" },
  { id: '2', name: "Ishita Patel", role: "Head of Growth", image: "https://picsum.photos/400/500?grayscale&random=2" },
  { id: '3', name: "Rohan Gupta", role: "3D & AR Specialist", image: "https://picsum.photos/400/500?grayscale&random=3" },
  { id: '4', name: "Meera Singh", role: "Tech Lead", image: "https://picsum.photos/400/500?grayscale&random=4" },
];

export const FAQS: FAQItem[] = [
  { id: '1', question: "What is the typical timeline for a branding project?", answer: "A typical comprehensive branding project takes 2-4 weeks, depending on the complexity and scope of deliverables." },
  { id: '2', question: "Do you work with startups?", answer: "Yes! We specialize in helping startups launch with a strong foundation. Our Brand Launch System is designed specifically for early-stage companies." },
  { id: '3', question: "How does the AR integration work?", answer: "We create optimized 3D models of your products and provide a simple code snippet that allows users to view them in AR directly from their mobile browser without an app." },
  { id: '4', question: "What industries do you serve?", answer: "We have deep expertise in F&B (cafes, restaurants), Retail, D2C E-commerce, Real Estate, and Tech Startups." },
];

export const CASE_STUDIES: CaseStudy[] = [
  { id: 'cs1', client: "Urban Beans Cafe", category: "Branding & Interior", title: "Revitalizing a local favorite", image: "https://picsum.photos/800/600?random=10", results: "40% increase in foot traffic" },
  { id: 'cs2', client: "TechFlow Solutions", category: "Web & Automation", title: "Automating lead generation", image: "https://picsum.photos/800/600?random=11", results: "2x conversion rate" },
  { id: 'cs3', client: "Luxe Living", category: "AR & Real Estate", title: "Virtual property tours", image: "https://picsum.photos/800/600?random=12", results: "Sold 5 units pre-construction" },
];