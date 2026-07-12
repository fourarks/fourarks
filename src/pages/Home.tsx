import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, ChevronDown, Check, Star, AlertCircle, Loader, ArrowUpRight, Clock, Users, TrendingDown, X, Sparkles, Flag, BarChart3, Box, Rocket } from 'lucide-react';



import SEO from '../components/SEO';
import { CTASection } from '@/components/ui/cta-with-glow';
import GradientButton from '../components/ui/button-1';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';



// Scroll reveal animation wrapper
const SectionReveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Counter animation component
const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState<string | number>(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.0,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (value % 1 === 0) {
            setDisplayValue(Math.floor(latest));
          } else {
            setDisplayValue(latest.toFixed(1));
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {typeof displayValue === 'number' ? displayValue.toLocaleString() : displayValue}{suffix}
    </span>
  );
};

const visionaryVoices = [
  {
    name: "Jensen Huang",
    title: "CEO, NVIDIA — World's Most Valuable Semiconductor Company",
    quote: "Every company will become an AI company. Every industry will be reinvented. AI will transform how every business operates — from the biggest corporations to the smallest teams.",
    source: "GTC 2024 Keynote, March 2024",
    insight: "Insight: When the CEO of the company powering 90% of the world's AI says every business will run on custom AI — you pay attention."
  },
  {
    name: "Sam Altman",
    title: "CEO, OpenAI — Makers of ChatGPT & GPT-4",
    quote: "The cost of building software is going to fall dramatically. AI will make it possible for any company to build the custom tools that only the biggest enterprises could afford before.",
    source: "Paraphrased from Lex Fridman Podcast & Y Combinator talks",
    insight: "Insight: The man who built the AI that's changing the world says custom software will become accessible to every business. We're already here."
  },
  {
    name: "Marc Andreessen",
    title: "General Partner, Andreessen Horowitz",
    quote: "Software is eating the world.",
    quoteExtra: "In his 2023 essay \"Why AI Will Save the World\" and across a16z's AI investment thesis, Andreessen argues that AI will dramatically lower the cost of building custom software — making bespoke systems the default, not the exception, for competitive businesses.",
    source: "WSJ (Aug 2011) & a16z Essay (2023)",
    insight: "Insight: First software ate the world. Now AI is making custom software accessible to every business in it."
  },
  {
    name: "Naval Ravikant",
    title: "Co-founder, AngelList · Angel Investor",
    quote: "The AI revolution is going to dramatically reduce the cost of building software. Things that used to require a team of 10 engineers will be built by one person. Every business will have software built specifically for it.",
    source: "Twitter/X & Podcasts 2023–2024",
    insight: "Insight: When the investor who called the mobile revolution early says every business gets custom AI — the window is now."
  },
  {
    name: "Vinod Khosla",
    title: "Founder, Khosla Ventures · Sun Microsystems",
    quote: "AI will replace most of what SaaS does today — but better, because it will be personalised to each business. The era of one-size-fits-all software is ending.",
    source: "Public Interviews & Essays 2023–2024",
    insight: "Insight: The man who backed Stripe, DoorDash, and OpenAI says the SaaS era is ending. Custom AI is next."
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Visionary Voices Slider State
  const [currentVoiceIndex, setCurrentVoiceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVoiceIndex((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Form State for Section 9
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    tools: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_WEBHOOK || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          formType: 'audit',
          name: formData.name,
          contact: formData.contact,
          tools: formData.tools
        })
      });

      const data = await response.json();
      if (response.ok && data.result === 'success') {
        setFormStatus('success');
        setFormData({ name: '', contact: '', tools: '' });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  // Hero H1 Word Stagger Config
  const headlineLine1 = "Stop Paying for Software";
  const headlineLine2 = "You'll Never Own.";
  const headlineLine3 = "We Build It.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg">
      <SEO
        title="Custom AI Software Company"
        description="4ARKS builds custom AI software that eliminates SaaS subscriptions. Own your CRM, workflows, and websites forever with a one-time project fee."
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <HeroGeometric
        badge="4ARKS — Custom AI Software"
        title1="Stop Paying for Software"
        title2="You'll Never Own. We Build It."
        description="Tools are generic, overpriced, and never fully yours. We build custom AI software tailored to your exact process. You pay once. You own it forever."
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full pt-4 relative z-20 pointer-events-auto">
          <GradientButton
            onClick={() => navigate('/get-started')}
            width="240px"
            height="56px"
            className="font-sans font-extrabold text-[15px] sm:text-[16px]"
            style={{
              '--color-background': '#B97A4B',
              '--color-text': '#FFFFFF',
              '--glow-start': '#FFFFFF',
              '--glow-mid': '#000000',
              '--border-inset': '3px',
              '--inner-radius': '47px'
            } as React.CSSProperties}
          >
            Start Your Project
          </GradientButton>
          <button
            onClick={() => {
              const el = document.getElementById('services-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cta-button cta-button-white text-[15px] sm:text-[16px] px-11 py-4.5 font-sans font-extrabold flex items-center justify-center cursor-pointer text-dark"
            style={{ height: '56px', minWidth: '240px' }}
          >
            See What We Build
          </button>
        </div>
      </HeroGeometric>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: TRUST STRIP (Horizontal Scrolling Marquee)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full bg-bg py-6 border-y border-dark/10 overflow-hidden relative z-10 select-none">
        <div className="flex w-max animate-marquee-slow font-sans font-extrabold uppercase text-[12px] tracking-wider text-dark/75 gap-16">
          <div className="flex gap-16 shrink-0 items-center">
            <span>Custom Software</span>
            <span className="text-accent">✦</span>
            <span>No SaaS Fees</span>
            <span className="text-accent">✦</span>
            <span>AI CRM</span>
            <span className="text-accent">✦</span>
            <span>WhatsApp Automation</span>
            <span className="text-accent">✦</span>
            <span>Workflow Systems</span>
            <span className="text-accent">✦</span>
            <span>Web Development</span>
            <span className="text-accent">✦</span>
            <span>Brand Identity</span>
            <span className="text-accent">✦</span>
            <span>Built Once. Yours Forever.</span>
            <span className="text-accent">✦</span>
            <span>No Recurring Charges</span>
            <span className="text-accent">✦</span>
            <span>50+ Projects</span>
            <span className="text-accent">✦</span>
            <span>10,000+ Daily Automations</span>
          </div>
          <div className="flex gap-16 shrink-0 items-center">
            <span className="text-accent">✦</span>
            <span>Custom Software</span>
            <span className="text-accent">✦</span>
            <span>No SaaS Fees</span>
            <span className="text-accent">✦</span>
            <span>AI CRM</span>
            <span className="text-accent">✦</span>
            <span>WhatsApp Automation</span>
            <span className="text-accent">✦</span>
            <span>Workflow Systems</span>
            <span className="text-accent">✦</span>
            <span>Web Development</span>
            <span className="text-accent">✦</span>
            <span>Brand Identity</span>
            <span className="text-accent">✦</span>
            <span>Built Once. Yours Forever.</span>
            <span className="text-accent">✦</span>
            <span>No Recurring Charges</span>
            <span className="text-accent">✦</span>
            <span>50+ Projects</span>
            <span className="text-accent">✦</span>
            <span>10,000+ Daily Automations</span>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: THE PROBLEM (THE REAL COST OF SAAS)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="problems-section" className="bg-bg py-24 md:py-32 px-6 border-b border-dark/10">
        <div className="max-w-7xl mx-auto">
          {/* Top Header Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
            <SectionReveal className="lg:col-span-6 space-y-4">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-accent block">
                — The Real Cost of SaaS —
              </span>
              <h2 className="text-4xl sm:text-5xl font-sans text-dark font-black leading-tight tracking-tighter">
                Your business is renting software <br className="hidden sm:inline" />
                it should own.
              </h2>
            </SectionReveal>
            <SectionReveal className="lg:col-span-6 flex items-center">
              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                Every month, thousands of rupees leave your business in SaaS subscriptions. CRM tools that don't fit your sales process. WhatsApp platforms that charge per conversation. Automation tools with usage limits. Website builders that hold your design hostage. None of it is built for you — and none of it is ever yours.
              </p>
            </SectionReveal>
          </div>

          {/* Cards Grid Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <SectionReveal>
              <div className="bg-white border border-dark/10 rounded-[32px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] hover:border-dark/20 hover:-translate-y-1.5 transition-all duration-300 h-full min-h-[300px]">
                <div>
                  <span className="text-xs font-sans font-extrabold text-accent tracking-wider block mb-6">01</span>
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-dark mb-4 leading-snug">The SaaS Trap</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">
                    You pay ₹3,000–₹15,000/month per tool. Cancel the subscription and everything disappears. You own nothing.
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Card 2 */}
            <SectionReveal>
              <div className="bg-white border border-dark/10 rounded-[32px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] hover:border-dark/20 hover:-translate-y-1.5 transition-all duration-300 h-full min-h-[300px]">
                <div>
                  <span className="text-xs font-sans font-extrabold text-accent tracking-wider block mb-6">02</span>
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-dark mb-4 leading-snug">Generic Tools, Broken Processes</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">
                    Off-the-shelf software forces your team to adapt to the tool. Not the other way around. You end up using 30% of features you paid 100% for.
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Card 3 */}
            <SectionReveal>
              <div className="bg-white border border-dark/10 rounded-[32px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] hover:border-dark/20 hover:-translate-y-1.5 transition-all duration-300 h-full min-h-[300px]">
                <div>
                  <span className="text-xs font-sans font-extrabold text-accent tracking-wider block mb-6">03</span>
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-dark mb-4 leading-snug">The Stack Creep</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">
                    First it's a CRM. Then a WhatsApp tool. Then a workflow tool. Then an analytics tool. Then a reporting tool. Suddenly you're paying for 8 subscriptions and still doing things manually.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5: THE DIFFERENCE (OLD WAY vs 4ARKS WAY)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="difference-section"
        className="relative bg-dark text-bg py-24 md:py-32 px-6 overflow-hidden"
      >
        {/* Glow circle behind section */}
        <div className="absolute -left-20 top-1/3 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Glowing abstract graphic on the right (matches screenshot) */}
        <div className="absolute right-0 top-12 md:top-64 w-full md:w-1/2 h-[400px] pointer-events-none opacity-20 md:opacity-40 z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent fill-none stroke-current" strokeWidth="1.5">
            {/* Abstract cross arrow symbol from screenshot */}
            <path d="M 50 10 L 50 90 M 10 50 L 90 50" strokeWidth="2.5" strokeDasharray="3 3" />
            <path d="M 30 30 L 70 70 M 30 70 L 70 30" strokeWidth="2" strokeDasharray="4 4" />
            {/* Multiple nested glowing circles */}
            <circle cx="50" cy="50" r="15" className="animate-pulse" />
            <circle cx="50" cy="50" r="30" className="opacity-50" />
            <circle cx="50" cy="50" r="45" className="opacity-25" />
            {/* Corner arrow markers pointing outwards */}
            <path d="M 15 15 L 25 15 M 15 15 L 15 25" />
            <path d="M 85 15 L 75 15 M 85 15 L 85 25" />
            <path d="M 15 85 L 25 85 M 15 85 L 15 75" />
            <path d="M 85 85 L 75 85 M 85 85 L 85 75" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header with Mixed Typography */}
          <SectionReveal className="text-center max-w-4xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 text-xs font-sans font-bold uppercase tracking-wider text-accent bg-black/40 backdrop-blur-md shadow-sm">
              ✦ The Better Way
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-sans text-bg font-black leading-tight tracking-tighter">
              Build it once. <br className="sm:hidden" />
              <span className="text-accent font-bold">Own it forever.</span>
            </h3>
            <p className="text-base text-bg/70 max-w-3xl mx-auto leading-relaxed pt-2">
              We build the exact software your business needs — custom, from scratch, using the same AI technology that powers enterprise companies. You pay a one-time project fee. The software is fully yours: the code, the data, the credentials, everything. No subscriptions to us. No platform lock-in. No monthly surprises.
            </p>
          </SectionReveal>

          {/* Premium Glassmorphism Comparison Table */}
          <SectionReveal className="max-w-5xl mx-auto">
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden relative">
              {/* Highlight background glow behind the 4ARKS column */}
              <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-accent/5 pointer-events-none border-l border-white/5 hidden md:block" />

              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full min-w-[600px] border-collapse text-left relative z-10">
                  <thead>
                    <tr className="border-b border-white/15 text-bg/90">
                      <th className="pb-5 font-sans font-black text-xs tracking-wider uppercase text-bg/40 w-[25%]">Comparison</th>
                      <th className="pb-5 font-sans font-black text-xs tracking-wider uppercase text-red-400 w-[35%]">SaaS Tools</th>
                      <th className="pb-5 font-sans font-black text-xs tracking-wider uppercase text-accent w-[40%] pl-6">4ARKS Custom Build</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 font-sans text-[15px]">
                    {/* Row 1 */}
                    <tr className="hover:bg-white/5 transition-colors duration-150">
                      <td className="py-5 font-bold text-bg/90">Cost</td>
                      <td className="py-5 text-red-300">₹3,000–₹20,000/month, forever</td>
                      <td className="py-5 text-accent font-extrabold pl-6">One-time project fee</td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-white/5 transition-colors duration-150">
                      <td className="py-5 font-bold text-bg/90">Ownership</td>
                      <td className="py-5 text-bg/70">You rent it. Cancel = gone.</td>
                      <td className="py-5 text-accent font-extrabold pl-6">100% yours. Forever.</td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-white/5 transition-colors duration-150">
                      <td className="py-5 font-bold text-bg/90">Fit</td>
                      <td className="py-5 text-bg/70">Built for everyone = perfect for no one</td>
                      <td className="py-5 text-accent font-extrabold pl-6">Built for your exact process</td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-white/5 transition-colors duration-150">
                      <td className="py-5 font-bold text-bg/90">Flexibility</td>
                      <td className="py-5 text-bg/70">Locked to their feature roadmap</td>
                      <td className="py-5 text-accent font-extrabold pl-6">Modify, extend, scale any time</td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="hover:bg-white/5 transition-colors duration-150">
                      <td className="py-5 font-bold text-bg/90">Data</td>
                      <td className="py-5 text-bg/70">Stored on their servers</td>
                      <td className="py-5 text-accent font-extrabold pl-6">Your data, your servers</td>
                    </tr>
                    {/* Row 6 */}
                    <tr className="hover:bg-white/5 transition-colors duration-150">
                      <td className="py-5 font-bold text-bg/90">Lock-in</td>
                      <td className="py-5 text-bg/70">Completely dependent on the vendor</td>
                      <td className="py-5 text-accent font-extrabold pl-6">Zero dependency on us post-delivery</td>
                    </tr>
                    {/* Row 7 */}
                    <tr className="hover:bg-white/5 transition-colors duration-150">
                      <td className="py-5 font-bold text-bg/90">ROI</td>
                      <td className="py-5 text-bg/70">Never-ending cost</td>
                      <td className="py-5 text-accent font-extrabold pl-6">Pays for itself within months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Calculation Button */}
            <div className="flex flex-col items-center mt-14">
              <Link
                to="/get-started"
                state={{ fromBudget: true }}
                className="cta-button cta-button-orange text-base px-10 py-5"
              >
                Calculate What SaaS Is Costing You →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 6: WHAT WE BUILD (SERVICES GRID)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="services-section" className="bg-bg text-bg py-24 md:py-32 px-6 overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes dash {
            to {
              stroke-dashoffset: -20;
            }
          }
        `}} />

        <div className="max-w-7xl mx-auto">
          {/* Header Layout */}
          <SectionReveal className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 text-xs font-sans font-bold uppercase tracking-wider text-dark/80 bg-accent/40 backdrop-blur-md shadow-sm">
                  ✦ Our Services
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-sans text-bg text-dark leading-tight tracking-tighter">
                  Five custom systems.<br />
                  <span className="text-accent font-bold">Zero subscriptions.</span>
                </h2>
              </div>
              <p className="text-base text-bg/75 max-w-md leading-relaxed md:pb-2">
                Everything we build replaces a category of SaaS tools — with software that fits your business perfectly and belongs to you completely.
              </p>
            </div>
          </SectionReveal>

          {/* Clean 3-Column Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1: AI CRM */}
            <SectionReveal>
              <div
                onClick={() => navigate('/services/ai-crm')}
                className="rounded-[32px] p-8 sm:p-10 flex flex-col justify-between h-[480px] bg-white/5 hover:bg-white/10 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-accent/60 transition-all duration-300 group/card cursor-pointer"
              >
                <div>
                  <div className="text-xs font-sans font-bold uppercase text-accent tracking-wider mb-2">Replaces: HubSpot · Salesforce · Zoho</div>
                  <h3 className="text-2xl font-sans font-bold text-dark mb-3">AI CRM</h3>
                  <p className="text-sm text-dark/75 leading-relaxed mb-4">
                    A custom CRM that knows your sales process, scores your leads automatically, and follows up without your team lifting a finger.
                  </p>

                  {/* Lead Conversion SVG Graph */}
                  <div className="w-full h-32 relative bg-accent/40 rounded-2xl border border-white/10 overflow-hidden p-3 flex flex-col justify-between select-none">
                    <div className="flex justify-between items-center text-[10px] text-dark/40">
                      <span>Lead Conversion Rate</span>
                      <span className="text-accent font-bold">+300% AI Boost</span>
                    </div>
                    <div className="grow w-full h-full relative pt-2">
                      <div className="absolute inset-x-0 top-1/4 border-t border-white/5" />
                      <div className="absolute inset-x-0 top-2/4 border-t border-white/5" />
                      <div className="absolute inset-x-0 top-3/4 border-t border-white/5" />
                      <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path d="M 0 35 Q 25 32 50 18 T 100 5 L 100 40 L 0 40 Z" fill="url(#crmGlow)" className="opacity-15" />
                        <path d="M 0 35 Q 25 33 50 32 T 100 30" stroke="rgba(255, 20, 20, 0.32)" strokeWidth="1" fill="none" />
                        <path d="M 0 35 Q 25 32 50 18 T 100 5" stroke="#B97A4B" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="crmGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#B97A4B" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-dark/50 pt-1 border-t border-white/5 font-mono">
                      <span>WEEK 1 (12%)</span>
                      <span>WEEK 4 (48%)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-sans font-black text-accent uppercase tracking-wider">Own your CRM →</span>
                  <div className="w-11 h-11 rounded-full bg-dark text-white border border-white/15 flex items-center justify-center shadow-md group-hover/card:bg-accent group-hover/card:text-white group-hover/card:scale-110 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Card 2: WhatsApp & Call Automation */}
            <SectionReveal>
              <div
                onClick={() => navigate('/services/whatsapp-call-automation')}
                className="rounded-[32px] p-8 sm:p-10 flex flex-col justify-between h-[480px] bg-white/5 hover:bg-white/10 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-accent/60 transition-all duration-300 group/card cursor-pointer"
              >
                <div>
                  <div className="text-xs font-sans font-bold uppercase text-accent tracking-wider mb-2">Replaces: Wati · Interakt · Yellow.ai · Exotel</div>
                  <h3 className="text-2xl font-sans font-bold text-dark mb-3">WhatsApp & Call Automation</h3>
                  <p className="text-sm text-dark/75 leading-relaxed mb-4">
                    Custom AI agents on WhatsApp and phone — qualifying leads, answering queries, booking appointments. 24/7. No per-conversation charges.
                  </p>

                  {/* Chat flow simulator */}
                  <div className="w-full h-32 relative bg-dark rounded-2xl border border-white/10 overflow-hidden p-3 flex flex-col justify-center gap-2 select-none">
                    <div className="flex justify-start">
                      <div className="bg-white/10 border border-white/5 rounded-2xl rounded-tl-none px-3 py-1.5 text-[10px] text-white/90 max-w-[85%] leading-normal">
                        "I want to automate our CRM stack."
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-accent border border-accent/25 rounded-2xl rounded-tr-none px-3 py-1.5 text-[10px] text-white font-bold max-w-[85%] leading-normal shadow-md shadow-accent/15">
                        "Sure, we can host it on your server!"
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-white/40 pt-1 mt-1 border-t border-white/5 font-mono">
                      <span>WhatsApp Agent active</span>
                      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" /> Live</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-sans font-black text-accent uppercase tracking-wider">Own your automation →</span>
                  <div className="w-11 h-11 rounded-full bg-dark text-white border border-white/15 flex items-center justify-center shadow-md group-hover/card:bg-accent group-hover/card:text-white group-hover/card:scale-110 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Card 3: Workflow Automation */}
            <SectionReveal>
              <div
                onClick={() => navigate('/services/workflow-automation')}
                className="rounded-[32px] p-8 sm:p-10 flex flex-col justify-between h-[480px] bg-white/5 hover:bg-white/10 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-accent/60 transition-all duration-300 group/card cursor-pointer"
              >
                <div>
                  <div className="text-xs font-sans font-bold uppercase text-accent tracking-wider mb-2">Replaces: Zapier · Make · n8n Cloud · Monday.com</div>
                  <h3 className="text-2xl font-sans font-bold text-dark mb-3">Workflow Automation</h3>
                  <p className="text-sm text-dark/75 leading-relaxed mb-4">
                    We connect every tool in your stack and automate every repetitive process — custom, self-hosted, no usage caps, no monthly billing.
                  </p>

                  {/* Flow chart node connection */}
                  <div className="w-full h-32 relative bg-accent/40 rounded-2xl border border-white/10 overflow-hidden p-3 flex items-center justify-between select-none">
                    <div className="flex flex-col gap-3 z-10">
                      <div className="w-7 h-7 rounded-lg bg-dark/5 border border-white/15 flex items-center justify-center text-[9px] text-dark font-bold font-mono">
                        CRM
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-dark/5 border border-white/15 flex items-center justify-center text-[9px] text-dark font-bold font-mono">
                        WA
                      </div>
                    </div>
                    <div className="grow h-full relative mx-1">
                      <svg className="w-full h-full" viewBox="0 0 60 40">
                        <path d="M 5 10 L 25 20 M 5 30 L 25 20 M 35 20 L 55 20" stroke="rgba(255, 255, 255, 0.58)" strokeWidth="1.5" />
                        <path d="M 5 10 L 25 20 M 5 30 L 25 20 M 35 20 L 55 20" stroke="#B97A4B" strokeWidth="1.5" strokeDasharray="5 15" strokeDashoffset="0" style={{ animation: "dash 1.5s linear infinite" }} />
                      </svg>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-accent border border-white/20 flex items-center justify-center shadow-lg shadow-accent/25 z-10">
                      <svg className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '4s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                    <div className="grow h-full relative mx-1">
                      <svg className="w-full h-full" viewBox="0 0 60 40">
                        <path d="M 5 20 L 55 20" stroke="rgba(255,255,255,0.58)" strokeWidth="1.5" />
                        <path d="M 5 20 L 55 20" stroke="#B97A4B" strokeWidth="1.5" strokeDasharray="5 15" strokeDashoffset="0" style={{ animation: "dash 1.5s linear infinite" }} />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/25 flex items-center justify-center text-[10px] text-accent font-bold font-mono z-10">
                      n8n
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-sans font-black text-accent uppercase tracking-wider">Own your workflows →</span>
                  <div className="w-11 h-11 rounded-full bg-dark text-white border border-white/15 flex items-center justify-center shadow-md group-hover/card:bg-accent group-hover/card:text-white group-hover/card:scale-110 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Card 4: Website Development */}
            <SectionReveal>
              <div
                onClick={() => navigate('/services/website-development')}
                className="rounded-[32px] p-8 sm:p-10 flex flex-col justify-between h-[480px] bg-white/5 hover:bg-white/10 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-accent/60 transition-all duration-300 group/card cursor-pointer"
              >
                <div>
                  <div className="text-xs font-sans font-bold uppercase text-accent tracking-wider mb-2">Replaces: Webflow · Wix · Squarespace · WP Plugins</div>
                  <h3 className="text-2xl font-sans font-bold text-dark mb-3">Website Development</h3>
                  <p className="text-sm text-dark/75 leading-relaxed mb-4">
                    A custom-built React website — blazing fast, fully yours in code, no builder subscriptions. Your site, your server, your rules.
                  </p>

                  {/* Lighthouse gauge and metrics bars */}
                  <div className="w-full h-32 relative bg-dark rounded-2xl border border-white/10 overflow-hidden p-3 flex items-center justify-around gap-2 select-none">
                    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-white/5" strokeWidth="3.2" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path className="text-green-500" strokeWidth="3.2" strokeDasharray="96, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center text-center">
                        <span className="text-[12px] font-black text-green-400">96</span>
                      </div>
                    </div>
                    <div className="grow space-y-1">
                      <div className="space-y-0.5">
                        <div className="flex justify-between text-[8px] text-white/50">
                          <span>Performance</span>
                          <span className="text-green-400 font-bold">98%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full w-[98%]" />
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between text-[8px] text-white/50">
                          <span>SEO Optimization</span>
                          <span className="text-green-400 font-bold">96%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full w-[96%]" />
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between text-[8px] text-white/50">
                          <span>Bounce Rate</span>
                          <span className="text-accent font-bold">12%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="bg-accent h-full w-[12%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-sans font-black text-accent uppercase tracking-wider">Own your website →</span>
                  <div className="w-11 h-11 rounded-full bg-dark text-white border border-white/15 flex items-center justify-center shadow-md group-hover/card:bg-accent group-hover/card:text-white group-hover/card:scale-110 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Card 5: Branding & Design */}
            <SectionReveal>
              <div
                onClick={() => navigate('/services/branding-design')}
                className="rounded-[32px] p-8 sm:p-10 flex flex-col justify-between h-[480px] bg-white/5 hover:bg-white/10 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-accent/60 transition-all duration-300 group/card cursor-pointer"
              >
                <div>
                  <div className="text-xs font-sans font-bold uppercase text-accent tracking-wider mb-2">Delivered As Yours</div>
                  <h3 className="text-2xl font-sans font-bold text-dark mb-3">Branding & Design</h3>
                  <p className="text-sm text-dark/75 leading-relaxed mb-4">
                    Complete brand identity — logo, design system, social templates. Delivered as yours. Not locked into Canva or Adobe subscriptions to access your own assets.
                  </p>

                  {/* Brand design preview */}
                  <div className="w-full h-32 relative bg-accent/40 rounded-2xl border border-white/10 overflow-hidden p-3 flex flex-col justify-between select-none">
                    <div className="flex justify-between items-center text-[10px] text-dark/60">
                      <span>Brand Assets</span>
                      <span>100% Owned</span>
                    </div>
                    <div className="flex items-center gap-4 grow pt-2">
                      <div className="bg-dark/5 border border-white/15 px-3 py-2 rounded-xl text-center flex-1">
                        <span className="text-lg font-black tracking-tighter text-white font-sans">4A</span>
                        <div className="text-[7px] text-dark/50 tracking-widest uppercase mt-0.5 font-mono">Brand Mark</div>
                      </div>
                      <div className="flex flex-col gap-1.5 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-accent border border-white/10" />
                          <span className="text-[8px] text-white/50 font-mono">#B97A4B</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-white border border-white/10" />
                          <span className="text-[8px] text-white/50 font-mono">#FFFFFF</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#0B0B0C] border border-white/15" />
                          <span className="text-[8px] text-white/50 font-mono">#0B0B0C</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-sans font-black text-accent uppercase tracking-wider">Own your brand →</span>
                  <div className="w-11 h-11 rounded-full bg-white/5 text-white border border-white/15 flex items-center justify-center shadow-md group-hover/card:bg-accent group-hover/card:text-white group-hover/card:scale-110 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Card 6: Dark CTA Audit Card */}
            <SectionReveal>
              <div
                onClick={() => navigate('/get-started')}
                className="rounded-[32px] p-8 sm:p-10 flex flex-col justify-between h-[480px] bg-[#2D140A] border-2 border-accent shadow-xl hover:shadow-[0_0_30px_rgba(255,68,0,0.35)] transition-all duration-300 group/card cursor-pointer relative overflow-hidden"
              >
                {/* Glowing glow circle inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-block bg-accent text-white text-[10px] font-sans font-bold uppercase px-3 py-1 rounded-full tracking-wider mb-6">Stack Audit</div>
                  <h3 className="text-2xl font-sans font-bold text-white mb-4">Running multiple SaaS tools?</h3>
                  <p className="text-sm text-bg/75 leading-relaxed">
                    We'll audit your stack and show you exactly what we can replace — and what you'd save.
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-sans font-black text-accent uppercase tracking-wider">Get a Free Stack Audit →</span>
                  <div className="w-11 h-11 rounded-full bg-accent text-white flex items-center justify-center shadow-md group-hover/card:bg-accent-warm group-hover/card:scale-110 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
           SECTION 7: OUR PROCESS (PERFECT SINE-WAVE & CLEAN ALIGNMENT)
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="process-section" className="bg-bg py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Layout */}
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-accent block">
              — Our Process —
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans text-dark font-black tracking-tighter">
              From briefing to ownership
              in four steps<span className="text-accent">.</span>
            </h2>
          </SectionReveal>

          {/* Sine-Wave Process Flow Diagram Container */}
          <div className="relative min-h-[440px] pt-6">
            {/* SVG Curved Sine-Wave Line (Desktop Only) */}
            <svg
              className="hidden md:block absolute top-6 left-0 w-full h-[260px] pointer-events-none z-0"
              viewBox="0 0 1000 260"
              fill="none"
              preserveAspectRatio="none"
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes flow-dotted {
                  to {
                    stroke-dashoffset: -24;
                  }
                }
                `
              }} />
              {/* Background solid line path (subtle) */}
              <path
                d="M 20 120 C 70 180 125 180 200 180 C 290 180 375 50 450 50 C 535 50 625 180 700 180 C 790 180 875 50 950 50 L 980 55"
                stroke="rgba(185, 122, 75, 0.15)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Animated Dotted line path */}
              <path
                d="M 20 120 C 70 180 125 180 200 180 C 290 180 375 50 450 50 C 535 50 625 180 700 180 C 790 180 875 50 950 50 L 980 55"
                stroke="#B97A4B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="4 8"
                style={{ animation: 'flow-dotted 1.5s linear infinite' }}
                className="drop-shadow-[0_4px_12px_rgba(185,122,75,0.25)]"
              />
              {/* Start Circle */}
              <circle
                cx="20"
                cy="120"
                r="6"
                fill="#B97A4B"
                className="drop-shadow-[0_2px_4px_rgba(185,122,75,0.5)]"
              />
              {/* End Plane Icon */}
              <g transform="translate(972, 43) scale(0.9)" className="drop-shadow-[0_2px_6px_rgba(185,122,75,0.4)]">
                <path
                  d="M22 2 2 8.66l7.33 2.87L19.5 5 12 14.67l2.87 7.33L22 2Z"
                  fill="#B97A4B"
                  stroke="#B97A4B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>

            {/* 4 Steps Grid (Uniformly Aligned Text Below Wave) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {/* Step 1 */}
              <SectionReveal className="relative group flex flex-col items-center text-center min-h-[340px]">
                {/* Floating Rounded Icon Node Centered on Wave */}
                <div className="md:absolute md:top-[148px] left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border border-dark/10 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/5 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 z-10 mb-6 md:mb-0">
                  <Flag size={24} />
                </div>
                <div className="space-y-2 md:pt-[240px] max-w-[250px]">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-sans font-black text-xs text-accent">01</span>
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-dark tracking-tight">
                      Free Strategy Call
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    We review your current SaaS stack, understand your business process, and map out exactly what we'd build — and what it would replace.
                  </p>
                </div>
              </SectionReveal>

              {/* Step 2 */}
              <SectionReveal className="relative group flex flex-col items-center text-center min-h-[340px]">
                {/* Floating Rounded Icon Node Centered on Wave */}
                <div className="md:absolute md:top-[18px] left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border border-dark/10 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/5 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 z-10 mb-6 md:mb-0">
                  <BarChart3 size={24} />
                </div>
                <div className="space-y-2 md:pt-[240px] max-w-[250px]">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-sans font-black text-xs text-accent">02</span>
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-dark tracking-tight">
                      Custom System Design
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    We design the architecture of your custom software: the flows, integrations, AI models, and logic. You approve everything before we write a line.
                  </p>
                </div>
              </SectionReveal>

              {/* Step 3 */}
              <SectionReveal className="relative group flex flex-col items-center text-center min-h-[340px]">
                {/* Floating Rounded Icon Node Centered on Wave */}
                <div className="md:absolute md:top-[148px] left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border border-dark/10 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/5 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 z-10 mb-6 md:mb-0">
                  <Box size={24} />
                </div>
                <div className="space-y-2 md:pt-[240px] max-w-[250px]">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-sans font-black text-xs text-accent">03</span>
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-dark tracking-tight">
                      Build & Test
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    We build your system in 2–4 weeks. You get regular updates, a staging environment to test, and rounds of revisions before launch.
                  </p>
                </div>
              </SectionReveal>

              {/* Step 4 */}
              <SectionReveal className="relative group flex flex-col items-center text-center min-h-[340px]">
                {/* Floating Rounded Icon Node Centered on Wave */}
                <div className="md:absolute md:top-[18px] left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border border-dark/10 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/5 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 z-10 mb-6 md:mb-0">
                  <Rocket size={24} />
                </div>
                <div className="space-y-2 md:pt-[240px] max-w-[250px]">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-sans font-black text-xs text-accent">04</span>
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-dark tracking-tight">
                      Handover & You're Free
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    We deliver the full codebase, set up your hosting, train your team, and hand over every credential. From this point, you own it completely — and owe us nothing recurring.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
           SECTION 8: ROI COUNTER
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-dark text-bg py-24 px-6 border-y border-white/5 relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Stat 1 */}
            <SectionReveal className="space-y-3 pt-6 md:pt-0">
              <div className="text-[52px] sm:text-[64px] font-sans font-black text-white leading-none tracking-tight">
                ₹<Counter value={2.4} suffix="L+" />
              </div>
              <p className="text-xs sm:text-sm text-bg/60 uppercase tracking-widest font-sans font-bold px-4">
                Average annual SaaS spend replaced per client
              </p>
            </SectionReveal>

            {/* Stat 2 */}
            <SectionReveal className="space-y-3 pt-6 md:pt-0">
              <div className="text-[52px] sm:text-[64px] font-sans font-black text-accent leading-none tracking-tight">
                <Counter value={3} suffix="×" />
              </div>
              <p className="text-xs sm:text-sm text-bg/60 uppercase tracking-widest font-sans font-bold px-4">
                Typical ROI within the first year
              </p>
            </SectionReveal>

            {/* Stat 3 */}
            <SectionReveal className="space-y-3 pt-6 md:pt-0">
              <div className="text-[52px] sm:text-[64px] font-sans font-black text-white leading-none tracking-tight">
                <Counter value={50} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-bg/60 uppercase tracking-widest font-sans font-bold px-4">
                Custom systems delivered
              </p>
            </SectionReveal>

            {/* Stat 4 */}
            <SectionReveal className="space-y-2">
              <div className="text-[52px] sm:text-[60px] font-sans font-extrabold text-bg leading-none">
                <Counter value={0} />
              </div>
              <p className="text-xs sm:text-sm text-bg/50 uppercase tracking-widest font-sans font-semibold">
                Monthly fees after handover
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 9: MID-PAGE INQUIRY SNIPPET (LET'S GET STARTED)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="lead-form-section" className="bg-bg text-dark py-24 md:py-32 px-6 border-t border-dark/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <SectionReveal className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-accent block">
                — Let's Get Started —
              </span>
              <h2 className="text-dark font-sans font-black leading-tight tracking-tighter text-4xl sm:text-5xl">
                What are you currently paying SaaS for?
              </h2>
            </div>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Tell us your stack. We'll show you what we can build instead — and what you'd save in the first 12 months.
            </p>
            <div className="space-y-3 pt-2 text-[15px] font-sans text-text-muted">
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span> No commitment, zero pressure
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span> Actionable architecture plan in 24 hours
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span> 100% custom analysis for your stack
              </div>
            </div>
          </SectionReveal>

          {/* Right Mini Form Card (Dark Glassmorphism) */}
          <SectionReveal className="lg:col-span-7 bg-[#2d140a] p-8 md:p-12 rounded-[32px] text-bg shadow-2xl relative border border-white/10 overflow-hidden">
            {/* Ambient glow inside form */}
            <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-[#B97A4B]/10 rounded-full blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6 relative z-10"
                >
                  <div className="w-16 h-16 bg-accent text-white flex items-center justify-center rounded-full mx-auto shadow-lg shadow-accent/25">
                    <Check size={28} className="stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-sans font-black text-white">Audit Request Received.</h3>
                  <p className="text-bg/75 font-sans text-sm max-w-sm mx-auto leading-relaxed">
                    We'll analyze your current SaaS stack and WhatsApp you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleFormSubmit}
                  className="space-y-6 text-left relative z-10"
                >
                  {formStatus === 'error' && (
                    <div className="bg-red-950/40 border border-red-500/50 p-4 rounded-xl flex items-start gap-3">
                      <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-red-200">Something went wrong. Please check your fields and try again.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-sans font-bold uppercase tracking-wider text-white/50">Your Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={formStatus === 'loading'}
                        placeholder="Arthur Pendragon"
                        className="w-full bg-white/5 text-white rounded-2xl px-5 py-4 placeholder-white/20 outline-none border border-white/10 focus:border-accent transition-colors disabled:opacity-50 text-sm font-sans"
                      />
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                      <label className="text-xs font-sans font-bold uppercase tracking-wider text-white/50">WhatsApp / Email</label>
                      <input
                        required
                        type="text"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        disabled={formStatus === 'loading'}
                        placeholder="contact@firm.com or +91 99999..."
                        className="w-full bg-white/5 text-white rounded-2xl px-5 py-4 placeholder-white/20 outline-none border border-white/10 focus:border-accent transition-colors disabled:opacity-50 text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Tools List Text Area */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold uppercase tracking-wider text-white/50">
                      Which SaaS tools are you currently paying for? (E.g. HubSpot, Zapier, Interakt)
                    </label>
                    <textarea
                      required
                      value={formData.tools}
                      onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                      disabled={formStatus === 'loading'}
                      placeholder="List your subscriptions..."
                      rows={3}
                      className="w-full bg-white/5 text-white rounded-2xl px-5 py-4 placeholder-white/20 outline-none border border-white/10 focus:border-accent transition-colors disabled:opacity-50 text-sm font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="cta-button cta-button-orange w-full py-4.5 text-base disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader size={18} className="animate-spin mr-2" /> Analysing Stack...
                        </>
                      ) : (
                        "Get My Free Audit →"
                      )}
                    </button>
                  </div>

                  {/* Link Below Form */}
                  <div className="text-center pt-2">
                    <Link to="/get-started" className="text-xs text-white/40 hover:text-accent font-semibold transition-colors underline">
                      Or fill the full project brief →
                    </Link>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </SectionReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
           SECTION 10: VISIONARY VOICES
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#1C0903] text-bg py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute left-1/4 top-1/4 w-[350px] h-[350px] bg-[#FF4400]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-[#FF4400]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#D4986A] block">
              — The Visionaries Already Know —
            </span>
            <h2 className="text-4xl sm:text-5xl font-sans text-white font-black leading-tight tracking-tighter">
              The world's best technology <br className="hidden sm:inline" />
              minds saw this coming. We built for it.
            </h2>
            <p className="text-[16px] leading-[1.65] font-sans max-w-[600px] text-white/80 mx-auto">
              Custom AI software isn't a niche idea. The CEOs, investors, and builders who shape the global technology industry have been saying the same thing for years — and the market is finally catching up.
            </p>
          </SectionReveal>

          {/* Authority wall quote cards */}
          <div className="relative w-full max-w-4xl mx-auto h-[550px] sm:h-[450px] md:h-[380px] overflow-hidden">
            <AnimatePresence mode="wait">
              {visionaryVoices.map((voice, index) => {
                if (index !== currentVoiceIndex) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-between"
                  >
                    <div className="bg-[#2D140A] border border-[#4E2A1C] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between h-full shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#B97A4B]/50 transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                        <svg className="w-36 h-36 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <div className="space-y-6 relative z-10">
                        <svg className="w-8 h-8 text-[#B97A4B]/30" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <div className="space-y-3">
                          <p className="text-[17px] sm:text-[19px] text-white font-sans leading-relaxed">
                            "{voice.quote}"
                          </p>
                          {voice.quoteExtra && (
                            <p className="text-[13.5px] text-white/70 font-sans leading-relaxed">
                              {voice.quoteExtra}
                            </p>
                          )}
                        </div>
                        <div className="text-[11px] text-white/30 font-mono tracking-wider uppercase">
                          Source: {voice.source}
                        </div>
                      </div>
                      <div className="pt-6 border-t border-white/10 mt-8 space-y-4">
                        <div className="flex flex-col">
                          <span className="text-[15px] font-sans font-black text-white">{voice.name}</span>
                          <span className="text-[12px] font-sans font-bold text-[#D4986A]">{voice.title}</span>
                        </div>
                        <p className="text-[12px] font-sans text-accent leading-normal font-semibold">
                          {voice.insight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
           SECTION 11: FAQ ACCORDION
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-bg py-24 md:py-32 px-6 border-t border-dark/10">
        <div className="max-w-3xl mx-auto">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-accent block">— FAQ —</span>
            <h2 className="text-4xl sm:text-5xl font-sans text-dark font-black leading-tight tracking-tighter">Common questions.</h2>
          </SectionReveal>

          {/* Accordion List */}
          <div className="space-y-4">
            {[
              {
                q: "Isn't custom software expensive?",
                a: "People assume custom software costs 10× more than SaaS. In reality, most of our projects cost less than 12 months of the SaaS tools they replace. After that, the custom system runs for free — while SaaS keeps charging forever."
              },
              {
                q: "What happens if I need to make changes later?",
                a: "Since you own the code completely, you can hire any developer to make changes — including us. We also offer optional retainer support, but it's never required. You're never dependent on us."
              },
              {
                q: "How long does it take to build?",
                a: "Most projects take 2–4 weeks. A WhatsApp automation system can be live in under a week. A full AI CRM with custom pipeline logic typically takes 3–4 weeks. We'll give you an exact timeline after the discovery call."
              },
              {
                q: "Will it be as good as the SaaS tools I use now?",
                a: "Better — because it's built specifically for your process. SaaS tools are designed to serve millions of businesses, which means they make compromises. Your custom system makes zero compromises."
              },
              {
                q: "What tech is it built on?",
                a: "React, Next.js, Node.js, Supabase, n8n, LangChain, OpenAI/Gemini APIs, and more — all production-grade technologies. Nothing proprietary. Nothing that locks you to us."
              },
              {
                q: "What if I already use certain SaaS tools and like them?",
                a: "We can integrate with tools you want to keep and replace the ones bleeding you out. Not everything needs to be custom — we'll tell you honestly what's worth keeping and what's worth replacing."
              }
            ].map((faq, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-white border border-dark/10 rounded-[20px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
                  {/* Header Button */}
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className="font-sans font-bold text-dark text-[17px]">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaqIndex === idx ? 180 : 0 }}
                      className="text-accent shrink-0 ml-4"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>

                  {/* Body Content */}
                  <AnimatePresence initial={false}>
                    {openFaqIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-dark/5 text-text-muted text-[15px] leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
           SECTION 12: FINAL CTA BANNER
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CTASection
        badge="Get Started"
        title="Ready to own your software instead of renting it?"
        description="Fill in a 3-minute brief. We'll come back with a clear plan, a build estimate, and exactly how much you'd save on SaaS in year one."
        action={{
          text: "Start Your Project Brief →",
          href: "/get-started",
          variant: "glow"
        }}
        footerText="No commitment · No sales pitch · Custom analysis in 24 hours"
      />

    </div>
  );
};

export default Home;
