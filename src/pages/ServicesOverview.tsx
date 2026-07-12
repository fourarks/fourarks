import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { BeamsBackground } from '../components/ui/beams-background';
import { CTASection } from '@/components/ui/cta-with-glow';


// Scroll reveal component
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

const ServicesOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('ai-crm');

  const tabs = [
    { id: 'ai-crm', label: 'AI CRM' },
    { id: 'whatsapp-call-automation', label: 'WhatsApp & Call' },
    { id: 'workflow-automation', label: 'Workflow' },
    { id: 'website-development', label: 'Website Dev' },
    { id: 'branding-design', label: 'Branding' },
  ];

  // Handle smooth scroll on tab click
  const scrollToService = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -130; // Account for fixed header + sticky tab bar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll spy to highlight active tab when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const tab of tabs) {
        const element = document.getElementById(tab.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle direct hash navigation if user arrived with hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (tabs.some(t => t.id === id)) {
        setTimeout(() => scrollToService(id), 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg">
      <SEO
        title="AI Systems & Services"
        description="Explore 4ARKS' five specialized AI systems: AI CRM, WhatsApp & Call Automation, Workflow Automation, Website Development, and Branding & Design."
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: PAGE HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <BeamsBackground className="relative min-h-[50vh] w-full text-bg flex flex-col justify-center items-center py-24 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Label Chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-accent text-dark text-label px-3.5 py-1.5 rounded-full font-semibold"
          >
            Services
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-normal text-bg leading-tight text-3xl md:text-5xl max-w-4xl mx-auto tracking-tight"
          >
            Everything you need to run on AI.
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-bg/60 text-[18px] max-w-[540px] mx-auto font-sans leading-relaxed"
          >
            Five specialised systems. Each one built to solve a specific business problem — and deliver measurable results within weeks.
          </motion.p>
        </div>
      </BeamsBackground>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: SERVICE TAB NAVIGATOR
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="sticky top-[64px] md:top-[72px] z-40 bg-bg/95 backdrop-blur-md py-4 border-b border-dark/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start md:justify-center space-x-3 min-w-max">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToService(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-sans font-semibold transition-all duration-200 cursor-pointer ${isActive
                      ? 'bg-accent text-dark shadow-sm'
                      : 'bg-transparent text-text-muted hover:text-dark border border-dark/15'
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTIONS 3–7: INDIVIDUAL SERVICE BLOCKS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}

      {/* --- SERVICE 1: AI CRM --- */}
      <section id="ai-crm" className="py-24 px-6 md:px-12 bg-bg border-b border-dark/5 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="space-y-6 mb-12">
            <span className="inline-block bg-accent/15 text-accent border border-accent/30 rounded-full px-3 py-1 text-label font-semibold">
              AI CRM
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-dark leading-tight max-w-3xl">
              Your Sales Pipeline, Run by AI.
            </h2>
            <p className="text-[17px] text-text-muted max-w-[560px] leading-relaxed">
              Stop manually tracking leads and chasing follow-ups. Our AI CRM captures, scores, and nurtures every lead automatically so your team only talks to people who are ready to buy.
            </p>
          </SectionReveal>

          {/* Results Row */}
          <SectionReveal className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-dark/3 rounded-2xl border border-dark/5 text-left">
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">3×</div>
                <div className="text-sm font-sans font-semibold text-dark/80">More Deals</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">80%</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Less Follow-up Time</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">2×</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Close Rate</div>
              </div>
            </div>
          </SectionReveal>

          {/* Features Grid */}
          <SectionReveal className="mb-16">
            <h4 className="text-label text-accent font-semibold mb-6">Key Capabilities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🎯</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">AI Lead Scoring</h4>
                <p className="text-sm text-text-muted leading-relaxed">Every lead scored instantly on behavior + source + intent. Your team always knows who to call first.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📧</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Automated Follow-ups</h4>
                <p className="text-sm text-text-muted leading-relaxed">Email, WhatsApp, SMS — sent at optimal times, personalized by AI based on each lead's behavior.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📊</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Pipeline Dashboard</h4>
                <p className="text-sm text-text-muted leading-relaxed">Real-time view of every deal — at-risk, projected close, team performance — at a glance.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🧠</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Call Summaries</h4>
                <p className="text-sm text-text-muted leading-relaxed">Every sales call transcribed and logged to the CRM automatically. Nothing falls through the cracks.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🔗</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Omnichannel Inbox</h4>
                <p className="text-sm text-text-muted leading-relaxed">WhatsApp, email, calls, DMs — all in one unified view. One place, every lead.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📈</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Revenue Forecasting</h4>
                <p className="text-sm text-text-muted leading-relaxed">AI-generated weekly forecasts and reports sent to your inbox. No manual reporting needed.</p>
              </div>
            </div>
          </SectionReveal>

          {/* How It Works */}
          <SectionReveal className="mb-12">
            <h4 className="text-label text-accent font-semibold mb-6">How It Works</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-dark/3 rounded-2xl border border-dark/5">
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">01</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Lead Capture</h5>
                <p className="text-xs text-text-muted leading-relaxed">Automatically ingest leads from ads, website forms, and social channels.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">02</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">AI Scoring & Routing</h5>
                <p className="text-xs text-text-muted leading-relaxed">Score intent and assign high-value prospects directly to reps.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">03</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Automated Outreach</h5>
                <p className="text-xs text-text-muted leading-relaxed">Trigger personalized SMS, email, and WhatsApp sequences.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">04</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Close & Retain</h5>
                <p className="text-xs text-text-muted leading-relaxed">Track deals to close and trigger onboarding workflows.</p>
              </div>
            </div>
          </SectionReveal>

          {/* CTA Button */}
          <SectionReveal>
            <Link
              to="/services/ai-crm"
              className="cta-button inline-flex items-center justify-center bg-accent text-dark font-sans font-semibold px-8 py-4 rounded-full hover:bg-accent-warm active:scale-95 transition-all shadow-md"
            >
              Learn More about AI CRM →
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* --- SERVICE 2: WHATSAPP & CALL AUTOMATION --- */}
      <section id="whatsapp-call-automation" className="py-24 px-6 md:px-12 bg-white-soft border-b border-dark/5 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="space-y-6 mb-12">
            <span className="inline-block bg-accent/15 text-accent border border-accent/30 rounded-full px-3 py-1 text-label font-semibold">
              WhatsApp & Call Automation
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-dark leading-tight max-w-3xl">
              24/7 Sales and Support, Without the Headcount.
            </h2>
            <p className="text-[17px] text-text-muted max-w-[560px] leading-relaxed">
              Deploy AI agents on WhatsApp and phone that handle inquiries, qualify leads, and book appointments around the clock — in any language, at any hour.
            </p>
          </SectionReveal>

          {/* Results Row */}
          <SectionReveal className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-bg rounded-2xl border border-dark/5 text-left">
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">24/7</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Availability</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">70%</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Fewer Support Tickets</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">5-Min</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Response Time</div>
              </div>
            </div>
          </SectionReveal>

          {/* Features Grid */}
          <SectionReveal className="mb-16">
            <h4 className="text-label text-accent font-semibold mb-6">Key Capabilities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">💬</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">WhatsApp Business API</h4>
                <p className="text-sm text-text-muted leading-relaxed">Fully compliant WABA integration with broadcast messaging, AI chatbot, and conversation flows.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📞</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">AI Voice Agents</h4>
                <p className="text-sm text-text-muted leading-relaxed">Inbound and outbound phone agents that handle FAQs, qualify leads, and transfer to humans seamlessly.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🌐</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Multi-Language</h4>
                <p className="text-sm text-text-muted leading-relaxed">Serve customers in English, Hindi, Arabic, and more — the AI adapts automatically.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📅</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Appointment Booking</h4>
                <p className="text-sm text-text-muted leading-relaxed">AI agents check calendar availability and book meetings in real-time.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🔀</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Smart Escalation</h4>
                <p className="text-sm text-text-muted leading-relaxed">Human handoff with full conversation context — no customer repeats themselves.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📊</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Conversation Analytics</h4>
                <p className="text-sm text-text-muted leading-relaxed">Track volume, resolution rate, handoff triggers, and sentiment in one dashboard.</p>
              </div>
            </div>
          </SectionReveal>

          {/* How It Works */}
          <SectionReveal className="mb-12">
            <h4 className="text-label text-accent font-semibold mb-6">How It Works</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-bg rounded-2xl border border-dark/5">
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">01</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Connect Channels</h5>
                <p className="text-xs text-text-muted leading-relaxed">Link your official WhatsApp Business API and phone numbers.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">02</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Train on Your Business</h5>
                <p className="text-xs text-text-muted leading-relaxed">Feed custom documentation and brand guidelines into the AI.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">03</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Design Conversation Flows</h5>
                <p className="text-xs text-text-muted leading-relaxed">Set clear boundaries, qualification criteria, and booking links.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">04</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Go Live & Optimize</h5>
                <p className="text-xs text-text-muted leading-relaxed">Deploy 24/7 AI agents and continuously refine based on analytics.</p>
              </div>
            </div>
          </SectionReveal>

          {/* CTA Button */}
          <SectionReveal>
            <Link
              to="/services/whatsapp-call-automation"
              className="cta-button inline-flex items-center justify-center bg-accent text-dark font-sans font-semibold px-8 py-4 rounded-full hover:bg-accent-warm active:scale-95 transition-all shadow-md"
            >
              Learn More about WhatsApp & Call →
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* --- SERVICE 3: WORKFLOW AUTOMATION --- */}
      <section id="workflow-automation" className="py-24 px-6 md:px-12 bg-bg border-b border-dark/5 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="space-y-6 mb-12">
            <span className="inline-block bg-accent/15 text-accent border border-accent/30 rounded-full px-3 py-1 text-label font-semibold">
              Workflow Automation
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-dark leading-tight max-w-3xl">
              Eliminate the Busywork. Amplify the Real Work.
            </h2>
            <p className="text-[17px] text-text-muted max-w-[560px] leading-relaxed">
              Map your existing processes and we'll automate them — from data entry to invoice generation, report delivery to team alerts. No expensive SaaS middlemen. Built on n8n and custom APIs.
            </p>
          </SectionReveal>

          {/* Results Row */}
          <SectionReveal className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-dark/3 rounded-2xl border border-dark/5 text-left">
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">15 Hours</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Saved/Week</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">99%</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Fewer Errors</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">100+</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Integrations</div>
              </div>
            </div>
          </SectionReveal>

          {/* Features Grid */}
          <SectionReveal className="mb-16">
            <h4 className="text-label text-accent font-semibold mb-6">Key Capabilities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🔌</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">100+ Integrations</h4>
                <p className="text-sm text-text-muted leading-relaxed">Connect Google Sheets, Notion, Slack, Tally, Razorpay, HubSpot, and anything with an API.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🏗️</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Custom n8n Workflows</h4>
                <p className="text-sm text-text-muted leading-relaxed">Self-hosted automation — no per-task pricing, no limits, no vendor lock-in.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🛡️</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Error Handling</h4>
                <p className="text-sm text-text-muted leading-relaxed">Built-in retry logic and alerts — nothing silently breaks at 2am.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📡</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Webhook Orchestration</h4>
                <p className="text-sm text-text-muted leading-relaxed">Real-time triggers from any event kick off multi-step automations instantly.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📋</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Automated Reports</h4>
                <p className="text-sm text-text-muted leading-relaxed">Weekly and monthly reports generated and delivered automatically.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">👁️</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Real-Time Monitoring</h4>
                <p className="text-sm text-text-muted leading-relaxed">Full visibility into every workflow — success rates, run times, and instant alerts.</p>
              </div>
            </div>
          </SectionReveal>

          {/* How It Works */}
          <SectionReveal className="mb-12">
            <h4 className="text-label text-accent font-semibold mb-6">How It Works</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-dark/3 rounded-2xl border border-dark/5">
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">01</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Process Audit</h5>
                <p className="text-xs text-text-muted leading-relaxed">Identify repetitive internal friction points and redundant manual tasks.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">02</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Automation Blueprint</h5>
                <p className="text-xs text-text-muted leading-relaxed">Architect reliable API connections and trigger pathways.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">03</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Build & Test</h5>
                <p className="text-xs text-text-muted leading-relaxed">Construct workflows on self-hosted infrastructure and stress test.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">04</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Train & Hand Off</h5>
                <p className="text-xs text-text-muted leading-relaxed">Provide full technical ownership and team documentation.</p>
              </div>
            </div>
          </SectionReveal>

          {/* CTA Button */}
          <SectionReveal>
            <Link
              to="/services/workflow-automation"
              className="cta-button inline-flex items-center justify-center bg-accent text-dark font-sans font-semibold px-8 py-4 rounded-full hover:bg-accent-warm active:scale-95 transition-all shadow-md"
            >
              Learn More about Workflow Automation →
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* --- SERVICE 4: WEBSITE DEVELOPMENT --- */}
      <section id="website-development" className="py-24 px-6 md:px-12 bg-white-soft border-b border-dark/5 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="space-y-6 mb-12">
            <span className="inline-block bg-accent/15 text-accent border border-accent/30 rounded-full px-3 py-1 text-label font-semibold">
              Website Development
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-dark leading-tight max-w-3xl">
              Fast. Beautiful. Built to Convert.
            </h2>
            <p className="text-[17px] text-text-muted max-w-[560px] leading-relaxed">
              Modern websites built on React and Next.js — blazing fast, SEO-optimized, and designed to convert visitors into customers. From landing pages to full-scale web apps.
            </p>
          </SectionReveal>

          {/* Results Row */}
          <SectionReveal className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-bg rounded-2xl border border-dark/5 text-left">
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">Sub-1s</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Load Time</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">2-Week</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Delivery</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">Lighthouse 95+</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Score</div>
              </div>
            </div>
          </SectionReveal>

          {/* Features Grid */}
          <SectionReveal className="mb-16">
            <h4 className="text-label text-accent font-semibold mb-6">Key Capabilities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">⚛️</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">React / Next.js Stack</h4>
                <p className="text-sm text-text-muted leading-relaxed">Built on the same tech powering Vercel, Notion, and Linear — fast by default.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🏎️</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Core Web Vitals</h4>
                <p className="text-sm text-text-muted leading-relaxed">We obsess over LCP, CLS, and FID — your site loads fast and ranks well.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🔐</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Supabase Backend</h4>
                <p className="text-sm text-text-muted leading-relaxed">Auth, database, storage — scales to millions of users with row-level security built in.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🎨</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Custom UI/UX</h4>
                <p className="text-sm text-text-muted leading-relaxed">No templates. Every pixel is intentional — designed to guide visitors to action.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📱</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Fully Responsive</h4>
                <p className="text-sm text-text-muted leading-relaxed">Pixel-perfect on every device — mobile, tablet, and desktop.</p>
              </div>
              <div className="bg-bg border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📊</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Analytics Setup</h4>
                <p className="text-sm text-text-muted leading-relaxed">PostHog or Plausible configured from day one — you know exactly where visitors drop off.</p>
              </div>
            </div>
          </SectionReveal>

          {/* How It Works */}
          <SectionReveal className="mb-12">
            <h4 className="text-label text-accent font-semibold mb-6">How It Works</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-bg rounded-2xl border border-dark/5">
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">01</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Discovery & Brief</h5>
                <p className="text-xs text-text-muted leading-relaxed">Analyze goals, target audience persona, and brand messaging.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">02</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Design in Figma</h5>
                <p className="text-xs text-text-muted leading-relaxed">Craft high-fidelity visual UI components and user flows.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">03</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Build & Review</h5>
                <p className="text-xs text-text-muted leading-relaxed">Engineered with clean React code, animations, and backend hooks.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">04</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Launch & Handover</h5>
                <p className="text-xs text-text-muted leading-relaxed">Deploy to production infrastructure with complete domain setup.</p>
              </div>
            </div>
          </SectionReveal>

          {/* CTA Button */}
          <SectionReveal>
            <Link
              to="/services/website-development"
              className="cta-button inline-flex items-center justify-center bg-accent text-dark font-sans font-semibold px-8 py-4 rounded-full hover:bg-accent-warm active:scale-95 transition-all shadow-md"
            >
              Learn More about Website Dev →
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* --- SERVICE 5: BRANDING & DESIGN --- */}
      <section id="branding-design" className="py-24 px-6 md:px-12 bg-bg border-b border-dark/5 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="space-y-6 mb-12">
            <span className="inline-block bg-accent/15 text-accent border border-accent/30 rounded-full px-3 py-1 text-label font-semibold">
              Branding & Design
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-dark leading-tight max-w-3xl">
              Your Brand Should Stop the Scroll.
            </h2>
            <p className="text-[17px] text-text-muted max-w-[560px] leading-relaxed">
              From logo to full brand identity — we craft visual systems that make your business instantly recognisable, deeply memorable, and impossible to ignore.
            </p>
          </SectionReveal>

          {/* Results Row */}
          <SectionReveal className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-dark/3 rounded-2xl border border-dark/5 text-left">
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">5-Day</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Delivery</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">Unlimited</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Revisions</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-accent font-normal mb-1">All File</div>
                <div className="text-sm font-sans font-semibold text-dark/80">Formats</div>
              </div>
            </div>
          </SectionReveal>

          {/* Features Grid */}
          <SectionReveal className="mb-16">
            <h4 className="text-label text-accent font-semibold mb-6">Key Capabilities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">✏️</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Logo Design</h4>
                <p className="text-sm text-text-muted leading-relaxed">Multiple concepts, unlimited revisions. Delivered in all formats: SVG, PNG, PDF, light/dark.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🎨</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Brand Identity</h4>
                <p className="text-sm text-text-muted leading-relaxed">Colors, typography, iconography, spacing — every brand decision documented.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📐</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Design System</h4>
                <p className="text-sm text-text-muted leading-relaxed">Component library in Figma ready for your dev team.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📱</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Social Templates</h4>
                <p className="text-sm text-text-muted leading-relaxed">Ready-to-use Canva or Figma templates for Instagram, LinkedIn, Twitter.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">📑</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Pitch Deck Design</h4>
                <p className="text-sm text-text-muted leading-relaxed">Investor-ready decks that tell your story visually.</p>
              </div>
              <div className="bg-white-soft border border-dark/8 rounded-2xl p-6 shadow-xs hover:border-accent hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl block mb-3">🖥️</span>
                <h4 className="text-lg font-sans font-bold text-dark mb-2">Product UI/UX</h4>
                <p className="text-sm text-text-muted leading-relaxed">User flows, wireframes, and high-fidelity UI for apps and dashboards.</p>
              </div>
            </div>
          </SectionReveal>

          {/* How It Works */}
          <SectionReveal className="mb-12">
            <h4 className="text-label text-accent font-semibold mb-6">How It Works</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-dark/3 rounded-2xl border border-dark/5">
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">01</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Brand Discovery</h5>
                <p className="text-xs text-text-muted leading-relaxed">Uncover unique brand positioning and market differentiation.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">02</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Mood Board & Direction</h5>
                <p className="text-xs text-text-muted leading-relaxed">Establish visual tone, color palettes, and typographic hierarchy.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">03</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Design & Refine</h5>
                <p className="text-xs text-text-muted leading-relaxed">Create custom visual assets with unlimited iterations.</p>
              </div>
              <div>
                <span className="text-2xl font-serif text-accent font-normal block mb-1">04</span>
                <h5 className="text-base font-sans font-bold text-dark mb-1">Deliver Brand Kit</h5>
                <p className="text-xs text-text-muted leading-relaxed">Export production-ready file formats and brand guidelines.</p>
              </div>
            </div>
          </SectionReveal>

          {/* CTA Button */}
          <SectionReveal>
            <Link
              to="/services/branding-design"
              className="cta-button inline-flex items-center justify-center bg-accent text-dark font-sans font-semibold px-8 py-4 rounded-full hover:bg-accent-warm active:scale-95 transition-all shadow-md"
            >
              Learn More about Branding & Design →
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FINAL SECTION: SERVICES CTA BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CTASection
        title="Not sure which service you need?"
        description="Book a free 30-min call. We'll tell you exactly what would move the needle for your business."
        action={{
          text: "Book Free Strategy Call →",
          href: "/get-started",
          variant: "glow"
        }}
      />

    </div>
  );
};

export default ServicesOverview;
