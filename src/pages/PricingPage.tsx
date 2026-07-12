import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Check, Info, Shield, Server, FileText, Users, Zap, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { BeamsBackground } from '../components/ui/beams-background';
import GradientButton from '../components/ui/button-1';

// Scroll reveal animation wrapper
const SectionReveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
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
};

const PricingPage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why don't you show prices on the website?",
      answer: "Because every build is different. A WhatsApp bot for a 5-person team is not the same as one for a 500-person sales operation. We scope every project to your actual needs and give you a precise quote — not a package that over-charges some and under-serves others."
    },
    {
      question: "How do I know if it's cheaper than what I'm paying now?",
      answer: "Most of our clients recover the full build cost within 6–12 months of cancelling SaaS subscriptions. In your strategy call, we calculate this together so you see the ROI before committing to anything."
    },
    {
      question: "What does the payment structure look like?",
      answer: "Typically 50% upfront to begin and 50% on delivery. For larger projects, we structure 3 milestones. Retainer clients are billed monthly. We're flexible on structure for the right projects."
    },
    {
      question: "Are there any recurring fees at all?",
      answer: "Only to third-party infrastructure — hosting (₹500–₹3,000/month depending on scale), WhatsApp API fees if applicable, and any third-party APIs you choose to use. Nothing comes back to us."
    },
    {
      question: "What if I want to add features after delivery?",
      answer: "Since you own the code, any developer can extend it. We're available for additional builds, and past clients get priority scheduling. New features are scoped and quoted as separate projects."
    },
    {
      question: "Do you offer refunds?",
      answer: "We include revision rounds in every project and don't sign off until you're satisfied. If we can't deliver what was agreed and documented, we'll make it right or refund the relevant milestone. We have a zero-disputes record and intend to keep it."
    }
  ];

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg">
      <SEO
        title="Pricing Strategy"
        description="4ARKS builds custom AI software for a one-time project fee. No ongoing subscription costs. Own your CRM, website, and automations forever."
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <BeamsBackground className="relative min-h-[70vh] w-full text-bg flex flex-col justify-center items-center py-28 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          {/* Label Chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-accent/10 border border-accent/25 text-accent text-label px-4 py-1.5 rounded-full font-bold uppercase tracking-wider"
          >
            Pricing
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-black text-white leading-[1.1] tracking-tighter text-3xl md:text-5xl max-w-4xl text-center"
          >
            One-time investment. 
            Zero recurring fees. 
            You own it forever.
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px] text-center font-sans"
          >
            We don't do subscription pricing. Every project is scoped to your exact needs and priced as a one-time fee. The software you get is yours to keep, modify, extend, and run — with no ongoing payments to us. Ever.
          </motion.p>
        </div>
      </BeamsBackground>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: THE SIMPLE ECONOMICS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-bg text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">THE SIMPLE ECONOMICS</span>
            <h2 className="text-dark font-sans font-black text-2xl sm:text-4xl tracking-tighter">
              The math most SaaS companies don't want you to do.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* SaaS Route Card */}
            <SectionReveal>
              <div className="bg-accent/20 border border-white/5 rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-between space-y-8 relative overflow-hidden group">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-sans font-bold text-dark/90">SaaS Route (Renting)</h3>
                    <span className="text-xs uppercase bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1 rounded-full font-bold">Unending Cost</span>
                  </div>
                  <ul className="space-y-4 font-sans text-sm text-dark/60">
                    <li className="flex justify-between border-b border-dark/5 pb-2">
                      <span>HubSpot Starter</span>
                      <span className="text-dark font-semibold">₹4,500/month</span>
                    </li>
                    <li className="flex justify-between border-b border-dark/5 pb-2">
                      <span>Wati (WhatsApp bot)</span>
                      <span className="text-dark font-semibold">₹4,000/month</span>
                    </li>
                    <li className="flex justify-between border-b border-dark/5 pb-2">
                      <span>Zapier Professional</span>
                      <span className="text-dark font-semibold">₹7,000/month</span>
                    </li>
                    <li className="flex justify-between border-b border-dark/5 pb-2">
                      <span>Webflow Business</span>
                      <span className="text-dark font-semibold">₹4,500/month</span>
                    </li>
                    <li className="flex justify-between pt-2 text-base text-red-400 font-bold">
                      <span>Total Monthly Cost</span>
                      <span>₹20,000/month</span>
                    </li>
                    <li className="flex justify-between text-base text-red-400 font-bold">
                      <span>Total Yearly Cost</span>
                      <span>₹2,40,000/year</span>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-dark/10 pt-6 space-y-2">
                  <div className="text-2xl font-sans font-black text-red-500">₹12,00,000</div>
                  <div className="text-xs text-dark/40 uppercase tracking-wider font-bold">Total cost over 5 years · And you own nothing.</div>
                </div>
              </div>
            </SectionReveal>

            {/* 4ARKS Route Card */}
            <SectionReveal>
              <div className="bg-[#2D140A] border border-[#4E2A1C] rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-between space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full filter blur-[60px] pointer-events-none" />
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-sans font-bold text-white">4ARKS Route (Ownership)</h3>
                    <span className="text-xs uppercase bg-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-full font-bold">Asset Creation</span>
                  </div>
                  <ul className="space-y-4 font-sans text-sm text-white/70">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span>Custom AI CRM</span>
                      <span className="text-accent font-semibold">One-time Fee</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span>Custom WhatsApp System</span>
                      <span className="text-accent font-semibold">One-time Fee</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span>Custom Workflow Automation</span>
                      <span className="text-accent font-semibold">One-time Fee</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span>Custom Web Platform</span>
                      <span className="text-accent font-semibold">One-time Fee</span>
                    </li>
                    <li className="flex justify-between pt-2 text-base text-accent font-bold">
                      <span>Total Ongoing Subscriptions</span>
                      <span>₹0/month</span>
                    </li>
                    <li className="flex justify-between text-base text-accent font-bold">
                      <span>Maintenance Costs</span>
                      <span>₹0/year</span>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-white/10 pt-6 space-y-2 relative z-10">
                  <div className="text-2xl font-sans font-black text-accent">One Project Fee</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-bold">Runs forever · Pays for itself within months · And you own everything.</div>
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="flex flex-col items-center">
            <GradientButton
              onClick={() => navigate('/get-started')}
              width="360px"
              height="58px"
              className="text-[14px] sm:text-[15px] font-sans font-extrabold text-white cursor-pointer"
              style={{
                '--color-background': '#B97A4B',
                '--color-text': '#FFFFFF',
                '--glow-start': '#FFFFFF',
                '--glow-mid': '#000000',
                '--border-inset': '3px',
                '--inner-radius': '47px'
              } as React.CSSProperties}
            >
              See What It Would Cost to Build Your Stack →
            </GradientButton>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: ENGAGEMENT TYPES
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-dark text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">HOW WE WORK</span>
            <h2 className="text-white font-sans font-black text-3xl md:text-5xl tracking-tighter">
              Three ways to engage.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 — Starter */}
            <SectionReveal className="h-full">
              <div className="bg-accent/20 border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-full hover:border-white/10 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-sans font-black text-bg/90">Single System</h3>
                    <p className="text-xs text-bg/40 font-bold uppercase tracking-wider mt-1">Build One Thing, Own It Perfectly</p>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed italic border-l border-accent pl-4">
                    "You know exactly what you need — a custom CRM, a WhatsApp bot, a workflow system, or a new website. Let's build it."
                  </p>
                  <div className="space-y-3 pt-2">
                    <span className="text-xs text-accent uppercase font-bold tracking-wider block">What's included:</span>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> One custom system (your choice)</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Full codebase ownership</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 30-day post-launch support</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Documentation + team training</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 2 rounds of revisions</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> All credentials handed over</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                  <div className="text-2xl font-sans font-black text-white">Custom quote</div>
                  <button
                    onClick={() => navigate('/get-started')}
                    className="cta-button cta-button-white w-full py-4 text-sm"
                  >
                    Start This Project →
                  </button>
                </div>
              </div>
            </SectionReveal>

            {/* Card 2 — Growth (Featured) */}
            <SectionReveal className="h-full">
              <div className="bg-[#2D140A] border border-[#4E2A1C] rounded-2xl p-8 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl scale-100 lg:scale-[1.03] z-10">
                <div className="absolute top-0 right-0 bg-accent text-dark text-[10px] uppercase font-bold px-4 py-1 rounded-bl-xl tracking-wider">
                  Most Value
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-sans font-black text-white">Full Stack Build</h3>
                    <p className="text-xs text-accent font-bold uppercase tracking-wider mt-1">Replace Your Entire SaaS Stack</p>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed italic border-l border-white/30 pl-4">
                    "You're paying for multiple SaaS tools that half-work together. We build a unified custom system that replaces all of them."
                  </p>
                  <div className="space-y-3 pt-2">
                    <span className="text-xs text-accent uppercase font-bold tracking-wider block">What's included:</span>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 3–5 custom systems, built to work together</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> AI CRM + WhatsApp + Workflow integration</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Priority build timeline</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 60-day post-launch support</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Full documentation + training</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Monthly strategy call for 3 months</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-[#4E2A1C] space-y-4">
                  <div className="text-2xl font-sans font-black text-white">Bundled quote <span className="text-xs text-accent font-normal">(Save 20-30%)</span></div>
                  <GradientButton
                    onClick={() => navigate('/get-started')}
                    width="100%"
                    height="50px"
                    className="text-sm font-sans font-semibold text-white cursor-pointer"
                    style={{
                      '--color-background': '#B97A4B',
                      '--color-text': '#FFFFFF',
                      '--glow-start': '#FFFFFF',
                      '--glow-mid': '#000000',
                      '--border-inset': '2.5px',
                      '--inner-radius': '47px'
                    } as React.CSSProperties}
                  >
                    Replace My SaaS Stack →
                  </GradientButton>
                </div>
              </div>
            </SectionReveal>

            {/* Card 3 — Enterprise */}
            <SectionReveal className="h-full">
              <div className="bg-accent/20 border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-full hover:border-white/10 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-sans font-black text-bg/90">Ongoing Partner</h3>
                    <p className="text-xs text-bg/40 font-bold uppercase tracking-wider mt-1">Your Dedicated AI Engineering Team</p>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed italic border-l border-accent pl-4">
                    "You need continuous development, optimisation, and new features as your business grows — without hiring in-house engineers."
                  </p>
                  <div className="space-y-3 pt-2">
                    <span className="text-xs text-accent uppercase font-bold tracking-wider block">What's included:</span>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Unlimited scope — build, improve, maintain</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Dedicated engineer + designer on account</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Weekly syncs and roadmapping</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Priority SLA on all requests</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> New AI agents and integrations as needed</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Quarterly business strategy reviews</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                  <div className="text-2xl font-sans font-black text-white">Monthly retainer</div>
                  <button
                    onClick={() => navigate('/get-started')}
                    className="cta-button cta-button-white w-full py-4 text-sm"
                  >
                    Explore Retainer →
                  </button>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: WHAT'S ALWAYS INCLUDED
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-bg text-bg py-24 md:py-32 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">OUR GUARANTEE</span>
            <h2 className="text-dark font-sans font-black text-3xl md:text-5xl tracking-tighter">
              In every single project.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <SectionReveal>
              <div className="bg-accent/20 border border-white/5 rounded-xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-dark">Full Codebase</h3>
                </div>
                <p className="text-sm text-dark/60 leading-relaxed font-sans">
                  "Every file, every config, every credential — delivered to you at handover. It belongs to you from day one."
                </p>
              </div>
            </SectionReveal>

            {/* Item 2 */}
            <SectionReveal>
              <div className="bg-accent/20 border border-dark/5 rounded-xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <Server size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-dark">Hosting Setup</h3>
                </div>
                <p className="text-sm text-dark/60 leading-relaxed font-sans">
                  "We deploy your system to your own hosting environment — Vercel, Railway, Supabase, or wherever you choose. Your infrastructure, your bill, your control."
                </p>
              </div>
            </SectionReveal>

            {/* Item 3 */}
            <SectionReveal>
              <div className="bg-accent/20 border border-dark/5 rounded-xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <Info size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-dark">Documentation</h3>
                </div>
                <p className="text-sm text-dark/60 leading-relaxed font-sans">
                  "Clear technical documentation so any developer — us or someone else — can understand, maintain, and extend the system."
                </p>
              </div>
            </SectionReveal>

            {/* Item 4 */}
            <SectionReveal>
              <div className="bg-accent/20 border border-dark/5 rounded-xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <Users size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-dark">Team Training</h3>
                </div>
                <p className="text-sm text-dark/60 leading-relaxed font-sans">
                  "We walk every relevant team member through the system before we sign off. No one is left guessing."
                </p>
              </div>
            </SectionReveal>

            {/* Item 5 */}
            <SectionReveal>
              <div className="bg-accent/20 border border-dark/5 rounded-xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-dark">Post-Launch Support</h3>
                </div>
                <p className="text-sm text-dark/60 leading-relaxed font-sans">
                  "30–60 days of bug fixes and questions after go-live. We don't drop the handoff."
                </p>
              </div>
            </SectionReveal>

            {/* Item 6 */}
            <SectionReveal>
              <div className="bg-accent/20 border border-dark/5 rounded-xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-dark">Zero Lock-In</h3>
                </div>
                <p className="text-sm text-dark/60 leading-relaxed font-sans">
                  "After handover, you're completely independent. No subscription. No ongoing payments to us. No dependency on our goodwill."
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5: FAQ ACCORDION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-dark text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">FAQ</span>
            <h2 className="text-white font-sans font-black text-3xl md:text-5xl tracking-tighter">
              Common questions about pricing.
            </h2>
          </SectionReveal>

          <SectionReveal className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-accent/20 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-sans font-bold text-bg text-[15px] sm:text-[17px] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-accent shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm sm:text-[15px] text-white/60 font-sans leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 6: FINAL CTA BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-bg text-dark py-24 sm:py-32 px-6 text-center border-t border-dark/5 relative overflow-hidden flex flex-col items-center">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
          <span className="text-label text-accent font-semibold tracking-wider uppercase block">BUILD ESTIMATE</span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-dark tracking-tighter leading-tight">
            See what it would cost to <br />replace your SaaS stack.
          </h2>
          <p className="text-text-muted text-[15px] sm:text-[17px] leading-relaxed max-w-lg mx-auto font-sans">
            Fill in a 3-minute brief. We'll come back with a build estimate and a 12-month cost comparison that shows you exactly what you'd save.
          </p>
          <div className="pt-4 flex flex-col items-center gap-4">
            <GradientButton
              onClick={() => navigate('/get-started')}
              width="280px"
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
              Get My Free Build Estimate →
            </GradientButton>
            <p className="text-xs text-text-muted font-sans font-medium tracking-wide">
              No commitment · Quote within 24 hours · No sales pitch
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
