
import { Service, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'branding-identity',
    title: 'Branding & Identity',
    description: 'Architectural brand systems that command attention and build long-term equity.',
    longDescription: 'We build visual languages that transcend trends. Our approach to branding is rooted in psychological resonance and structural clarity.',
    whyItMatters: 'A brand is not a logo; it is a promise of consistency and quality. In a crowded market, clear identity is your greatest competitive advantage.',
    roadmap: [
      'Market Discovery & Competitor Auditing',
      'Core Values & Archetype Definition',
      'Visual Architecture & Style Systems',
      'Implementation & Brand Documentation'
    ],
    deliverables: ['Primary & Secondary Logos', 'Typography System', 'Color Theory Suite', 'Voice & Tone Guidelines'],
    whoIsItFor: 'Companies ready to move from a "business" to an "authority" in their sector.',
    category: 'Creative'
  },
  {
    id: 'website-design',
    title: 'Website Design',
    description: 'High-performance digital products that blend editorial design with engineering precision.',
    longDescription: 'We design websites that function as high-converting sales machines and digital showrooms.',
    whyItMatters: 'Your website is your 24/7 representative. It must reflect the precision of your actual service.',
    roadmap: [
      'User Flow Architecture',
      'Low-Fidelity Logic Prototyping',
      'High-Fidelity Visual Design',
      'Responsive Engineering & QA'
    ],
    deliverables: ['Custom UI/UX Prototypes', 'Full-stack Responsive Development', 'SEO Core Setup', 'CMS Integration'],
    whoIsItFor: 'Organizations requiring a digital presence that matches their premium offline offering.',
    category: 'Technology'
  },
  {
    id: 'ar-product-visualization',
    title: 'AR Product Visualization',
    description: 'Immersive augmented reality experiences that bridge the gap between digital and physical.',
    longDescription: 'Allow your customers to experience your product in their own space before they commit. Our AR solutions are built for precision and realism.',
    whyItMatters: 'Product confidence drives conversion. AR reduces the friction of imagination.',
    roadmap: [
      '3D Asset Photogrammetry & Modeling',
      'AR Engine Configuration (WebAR/App)',
      'Lighting & Texture Optimization',
      'Deployment & Analytics Integration'
    ],
    deliverables: ['Interactive 3D Web Models', 'Cross-platform AR Viewers', 'Technical Integration Docs', 'High-Res Asset Renderings'],
    whoIsItFor: 'Architects, furniture designers, and high-end hardware manufacturers.',
    category: 'USP'
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Calculated content strategies designed to build trust and authority at scale.',
    longDescription: 'We don’t chase trends. We build influence through consistent, high-value visual storytelling.',
    whyItMatters: 'Trust is the currency of the modern age. We help you earn it.',
    roadmap: ['Content Audit', 'Strategic Narrative Design', 'Production Cycle', 'Performance Analytics'],
    deliverables: ['Strategic Content Calendar', 'High-End Visual Assets', 'Community Growth Management', 'Ad Spend Optimization'],
    whoIsItFor: 'Thought leaders and brands looking for professionalized social presence.',
    category: 'Growth'
  },
  {
    id: 'video-production',
    title: 'Video Production',
    description: 'Cinematic brand films and technical product explainers that convey premium value.',
    longDescription: 'Motion is the most powerful tool for emotional connection. We produce videos that feel like high-end cinema.',
    whyItMatters: 'A 60-second film can communicate more than 10,000 words of copy.',
    roadmap: ['Scripting & Storyboarding', 'Production & Cinematography', 'Precision Post-Production', 'Distribution Strategy'],
    deliverables: ['Main Brand Film', 'Short-Form Social Clips', 'Technical Explainer Videos', 'Raw Asset Library'],
    whoIsItFor: 'Brands that need to communicate complex value propositions quickly.',
    category: 'Creative'
  },
  {
    id: 'chatbot-automation',
    title: 'Chatbot & Call Automation',
    description: 'Intelligent AI-driven systems that handle scale without losing the premium feel.',
    longDescription: 'Efficiency meets elegance. Our AI systems handle the routine while your team focuses on high-value human interaction.',
    whyItMatters: 'Responsiveness is a hallmark of luxury and reliability.',
    roadmap: ['Inquiry Logic Mapping', 'LLM Fine-tuning', 'Voice/Chat UI Integration', 'Performance Monitoring'],
    deliverables: ['Custom AI Chat Agent', 'Automated Call Routing', 'CRM Integration', 'Analytics Dashboard'],
    whoIsItFor: 'Operations-heavy businesses looking to optimize their sales funnel.',
    category: 'Technology'
  },
  {
    id: 'graphic-collateral',
    title: 'Graphic Collateral',
    description: 'Physical and digital touchpoints that maintain brand integrity across all media.',
    longDescription: 'From pitch decks to physical packaging, we ensure every touchpoint feels deliberate.',
    whyItMatters: 'Inconsistency kills trust. Precision in details reflects precision in work.',
    roadmap: ['Asset Requirement Audit', 'Design Execution', 'Material Sourcing (Physical)', 'Final Asset Delivery'],
    deliverables: ['Premium Pitch Decks', 'Print-ready Packaging', 'Whitepapers', 'Stationery Suites'],
    whoIsItFor: 'Established firms requiring high-end presentation materials.',
    category: 'Creative'
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'Physical and digital product development focused on utility and aesthetic perfection.',
    longDescription: 'We help turn ideas into functional, beautiful objects and interfaces.',
    whyItMatters: 'Design is how it works. We prioritize user utility above all.',
    roadmap: ['User Research', 'Ergonomic/UI Prototyping', 'Material/Tech Selection', 'Manufacture/Dev Support'],
    deliverables: ['CAD Models / Figma Prototypes', 'Material Specifications', 'User Experience Reports', 'Design Hand-off'],
    whoIsItFor: 'Startups and innovators developing new hardware or software solutions.',
    category: 'Technology'
  },
  {
    id: 'architectural-visualizations',
    title: 'Architectural Visualizations',
    description: 'Photorealistic renderings and walkthroughs for elite development projects.',
    longDescription: 'We bring unbuilt spaces to life with atmospheric, high-fidelity visualization.',
    whyItMatters: 'Investors need to see the vision before the first brick is laid.',
    roadmap: ['Model Import & Clean-up', 'Lighting & Scenery Orchestration', 'Atmospheric Rendering', 'Post-Processing'],
    deliverables: ['High-Res Still Renders', 'Cinematic Walkthroughs', '360 Virtual Tours', 'Material Close-ups'],
    whoIsItFor: 'Real estate developers and architectural firms.',
    category: 'Creative'
  },
  {
    id: 'seo-growth',
    title: 'SEO & Growth',
    description: 'Data-led expansion strategies to place your brand where intent meets search.',
    longDescription: 'Sustainable growth is a marathon of precision. We optimize for high-intent traffic.',
    whyItMatters: 'Visibility is oxygen for a business. We ensure you are seen by the right people.',
    roadmap: ['Technical SEO Audit', 'Keyword Intent Mapping', 'Backlink Architecture', 'Conversion Optimization'],
    deliverables: ['Organic Traffic Reports', 'Backlink Profile', 'Content Strategy', 'CRO Audit'],
    whoIsItFor: 'B2B and B2C brands ready to dominate search rankings.',
    category: 'Growth'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { title: 'Discovery & Audit', description: 'We peel back the layers of your current operation to identify points of friction and opportunity.' },
  { title: 'Strategic Blueprint', description: 'Before design, comes logic. We map out the architectural plan for your growth system.' },
  { title: 'Execution & Build', description: 'Our engineering and creative teams bring the blueprint to life with obsessive detail.' },
  { title: 'Testing & Calibration', description: 'We stress-test every asset and flow to ensure it performs under real-world pressure.' },
  { title: 'Launch & Scale', description: 'Consistent monitoring and optimization to ensure the system continues to yield compounding returns.' }
];

export const INDUSTRIES = [
  'Luxury Real Estate',
  'Advanced Manufacturing',
  'Elite Architecture',
  'Product-Led SaaS',
  'High-End Consumer Goods',
  'Professional Services'
];
