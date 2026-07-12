import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, Check, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { BeamsBackground } from '../../components/ui/beams-background';
import GradientButton from '../../components/ui/button-1';

const SectionReveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const BrandingDesign: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToProcess = () => {
    const el = document.getElementById('process-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: "Can we use these files in Canva?",
      a: "Yes. We export high-res PNGs and SVGs that you can import into Canva or any editor. You don't need a Canva Pro account to use them."
    },
    {
      q: "Do we get the source files?",
      a: "Yes, we hand over the raw editable Figma source files. You own them 100%."
    },
    {
      q: "What if we need new templates later?",
      a: "You can use the design system components in Figma to create new templates yourself, or hire any designer to do it. We're also available for extension work."
    },
    {
      q: "How many revisions do we get?",
      a: "We include 3 rounds of refinement during the concept stage to ensure we align perfectly with your vision."
    },
    {
      q: "Do you design websites too?",
      a: "Yes, our Website Development service uses the exact brand guidelines and Figma library built during this project for perfect visual alignment."
    },
    {
      q: "Do we need expensive software to use Figma?",
      a: "No, Figma is completely free for individual accounts. You can view, export, and edit all assets without paying any platform fees."
    }
  ];

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg">
      <SEO
        title="Branding & Design | 4ARKS — Custom Software"
        description="Logo, brand identity, design system, and social templates — all delivered as files you own. No Canva subscription needed to access your own brand assets."
      />

      {/* Hero Section */}
      <BeamsBackground className="relative min-h-[90vh] w-full text-bg flex flex-col justify-center py-28 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
              Branding & Design · Brand Identity · Design Systems
            </div>
            
            <h1 className="font-sans font-black text-white leading-[1.1] tracking-tighter text-2xl md:text-5xl">
              Your brand assets should
              belong to you 
              <span className="italic text-accent"> not live inside</span> Canva.
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-[580px] font-sans">
              Most businesses build their brand inside Canva, Adobe Express, or a freelancer's private files — which means their brand is technically dependent on a subscription or a relationship they don't control. We build your complete brand identity and deliver every asset as files you own: editable Figma source files, all export formats, and a brand guide any designer in the world can use. No platform required to access your own logo.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <GradientButton
                onClick={() => navigate('/get-started')}
                width="240px"
                height="56px"
                className="text-sm font-sans font-extrabold text-white cursor-pointer"
                style={{
                  '--color-background': '#B97A4B',
                  '--color-text': '#FFFFFF',
                  '--glow-start': '#FFFFFF',
                  '--glow-mid': '#000000',
                  '--border-inset': '3px',
                  '--inner-radius': '47px'
                } as React.CSSProperties}
              >
                Build My Brand →
              </GradientButton>
              
              <button
                onClick={scrollToProcess}
                className="px-8 py-4 rounded-[50px] border border-white/20 hover:border-white/40 text-white font-sans text-sm font-semibold transition-all duration-300"
              >
                See What's Included ↓
              </button>
            </div>

            <div className="pt-6 space-y-2">
              <span className="text-xs text-white/40 uppercase tracking-widest font-bold block">Replaces:</span>
              <div className="flex flex-wrap gap-2 text-xs font-sans text-white/60">
                {['Canva Pro', 'Adobe Creative Cloud', 'Fragmented freelancer work'].map((p, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Cost Card Side */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A0C04] border border-[#4E2A1C] rounded-2xl p-8 sm:p-10 text-left space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full filter blur-[40px] pointer-events-none" />
              
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-white/40">WHAT YOU'RE PAYING NOW (typical):</span>
                <div className="space-y-2.5 font-sans text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Canva Pro:</span>
                    <span>₹3,999/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Adobe CC:</span>
                    <span>₹54,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Freelancer retainer:</span>
                    <span>₹10,000–₹30,000/month</span>
                  </div>
                  <div className="border-t border-white/10 pt-2.5 flex justify-between text-white font-bold">
                    <span>Over 3 years:</span>
                    <span>₹5–₹12 lakh</span>
                  </div>
                </div>
                <div className="text-accent font-bold text-xs pt-1">"And your brand is still in someone else's tool."</div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-accent/80">WHAT WE DELIVER INSTEAD:</span>
                <div className="space-y-2 font-sans text-sm text-white/80">
                  <div className="flex justify-between">
                    <span>Complete brand system:</span>
                    <span className="text-white font-bold">One-time project fee</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Files you receive:</span>
                    <span className="text-white font-bold">Source Figma, all exports</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subscription required:</span>
                    <span className="text-white font-bold">None. Ever.</span>
                  </div>
                </div>
                <div className="text-accent font-black text-sm pt-1">"Your brand. Your files. Forever."</div>
              </div>
            </div>
          </div>
        </div>
      </BeamsBackground>

      {/* The Problem Section */}
      <section className="bg-bg text-dark py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">THE PROBLEM</span>
            <h2 className="text-dark font-sans font-black text-3xl md:text-5xl tracking-tighter leading-tight">
              Most businesses don't<br />own their own brand assets.<br />They just have access to them.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Canva Dependency",
                desc: "Your logo lives in a Canva account. Your social templates are Canva designs. Cancel Canva and you lose edit access to years of branded content. Your own brand identity is held hostage by a ₹4,000/year subscription."
              },
              {
                title: "The Freelancer Black Hole",
                desc: "One freelancer did your logo. Another did your deck. A third set up social templates. Nobody used the same colors. Nobody documented the rules. New designers spend hours figuring out what \"your brand\" actually means. Inconsistency is costing you credibility."
              },
              {
                title: "No Brand System, Just Deliverables",
                desc: "A logo is not a brand. A brand is a system — color palettes, typography guidelines, icon styles, and layout patterns. Without a system, every design takes twice as long and looks slightly different. We deliver a complete Figma design system that keeps your brand unified."
              }
            ].map((p, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-[#FBFAF1] border border-dark/5 rounded-2xl p-8 shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div className="space-y-4">
                    <h3 className="text-xl font-sans font-black text-dark">{p.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed font-sans">{p.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="bg-dark text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">WHAT'S INSIDE</span>
            <h2 className="text-white font-sans font-black text-3xl md:text-5xl tracking-tighter leading-tight">
              A comprehensive visual system<br />delivered in native vector formats.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Logo Design",
                desc: "Primary, secondary, and sub-mark versions designed to work at any size. Delivered as vector files (SVG, PDF) and optimized web formats (PNG, JPG)."
              },
              {
                title: "Interactive Design System",
                desc: "A comprehensive Figma library containing reusable components, button states, form elements, card layouts, and responsive grid guides."
              },
              {
                title: "Typography & Color Palette",
                desc: "Curated, high-contrast, premium brand typography scaling paired with standard HSL/HEX color schemes tailored for high legibility."
              },
              {
                title: "Custom Marketing Templates",
                desc: "Figma-based editable templates for social posts, newsletters, business presentation decks, invoice PDFs, and letterheads."
              },
              {
                title: "Comprehensive Brand Guidelines",
                desc: "Clear documentation defining spacing systems, incorrect logo uses, font weights usage, and layout guidelines for other developers and designers."
              },
              {
                title: "Vector & Source Handover",
                desc: "We hand over the raw .fig files and vector SVGs. Zero lock-in, zero dependency on subscription tools like Canva or Adobe Express."
              }
            ].map((f, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-accent/10 border border-white/5 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-sans font-bold text-white">{f.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-sans">{f.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Build Process */}
      <section id="process-section" className="bg-bg text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">THE BUILD PROCESS</span>
            <h2 className="text-dark font-sans font-black text-3xl md:text-5xl tracking-tighter leading-tight">
              From creative direction<br />to complete handover.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Moodboarding",
                desc: "We understand your values, target audience, competitive space, and visual preferences. We compile and present 3 initial creative moodboard directions."
              },
              {
                step: "02",
                title: "Concept Refinement",
                desc: "Developing the selected visual direction, testing logo forms, pairing typography scales, and locking down brand-appropriate color schemes. Includes 3 revision rounds."
              },
              {
                step: "03",
                title: "Collateral & Template Build",
                desc: "Structuring presentation slides, letterheads, social card modules, and web grid guidelines in Figma. Ensuring all elements scale naturally."
              },
              {
                step: "04",
                title: "System Handover & Training",
                desc: "Packaging all files, sorting Figma workspace layers, and training your team on how to edit and export templates independently without extra software fees."
              }
            ].map((s, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-dark/20 border border-white/5 rounded-2xl p-6 h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-4xl font-sans font-black text-accent/30 mb-4">{s.step}</div>
                    <h3 className="text-lg font-sans font-bold text-dark/80 mb-2">{s.title}</h3>
                    <p className="text-sm text-dark/50 leading-relaxed font-sans">{s.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU OWN ON DELIVERY */}
      <section className="bg-bg text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto w-full">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">DELIVERABLES</span>
            <h2 className="text-dark font-sans font-black text-3xl md:text-5xl tracking-tighter">
              What you own on delivery.
            </h2>
          </SectionReveal>

          <SectionReveal className="bg-accent/80 border border-white/5 rounded-2xl p-8 sm:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Figma source files (all layouts, all vectors)",
                "Figma design system library with UI components",
                "Primary, secondary, and sub-mark logo variants",
                "SVG, PDF, and high-res PNG export sets",
                "Social media campaign graphic template modules",
                "Presentation pitch deck template slides",
                "Brand guidelines manual file",
                "Font files list and color style sheet",
                "30-day post-launch support and formatting advice"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={18} className="text-dark shrink-0 mt-0.5" />
                  <span className="text-sm text-dark/80 font-sans font-medium">{item}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-dark text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">FAQ</span>
            <h2 className="text-bg font-sans font-black text-3xl md:text-5xl tracking-tighter">
              Common questions about Branding.
            </h2>
          </SectionReveal>

          <SectionReveal className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-accent/10 border border-white/6 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-sans font-bold text-white text-[15px] sm:text-base">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-accent shrink-0 ml-2"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-sm text-white/60 font-sans leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-bg text-dark py-24 px-6 ">
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">OFTEN BUILT TOGETHER</span>
            <h2 className="text-dark font-sans font-black text-2xl sm:text-3xl tracking-tighter">
              Most clients pair this with:
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Website Development",
                desc: "Your website uses the design system for perfect alignment. Standard templates and layout parameters load instantaneously and remain unified.",
                route: "/services/website-development"
              },
              {
                title: "Workflow Automation",
                desc: "Ensure your custom software, reports, Slack messages, and customer notifications match your visual brand identity and templates.",
                route: "/services/workflow-automation"
              }
            ].map((rel, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-dark border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-sans font-bold text-white">{rel.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed font-sans">{rel.desc}</p>
                  </div>
                  <button
                    onClick={() => navigate(rel.route)}
                    className="flex items-center text-accent text-sm font-bold font-sans hover:text-white transition-colors"
                  >
                    See this service <ArrowRight size={14} className="ml-1.5" />
                  </button>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-bg text-dark py-24 px-6 text-center border-t border-dark/5 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-dark tracking-tighter leading-tight">
            Ready to own your<br />brand assets?
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-lg font-sans">
            Tell us about your project. We'll come back with a visual direction and a build estimate within 24 hours.
          </p>
          <div className="pt-4 flex flex-col items-center gap-4">
            <GradientButton
              onClick={() => navigate('/get-started')}
              width="260px"
              height="58px"
              className="text-[15px] font-sans font-extrabold text-white cursor-pointer"
              style={{
                '--color-background': '#B97A4B',
                '--color-text': '#FFFFFF',
                '--glow-start': '#FFFFFF',
                '--glow-mid': '#000000',
                '--border-inset': '3px',
                '--inner-radius': '47px'
              } as React.CSSProperties}
            >
              Start My Brand Build →
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingDesign;
