import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Cpu, EyeOff, BarChart3, Zap, Layers } from 'lucide-react';
import SEO from '../components/SEO';
import GradientButton from '../components/ui/button-1';
import { BeamsBackground } from '../components/ui/beams-background';


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

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg">
      <SEO
        title="About Us"
        description="4ARKS builds custom AI software that eliminates SaaS subscriptions. Own your CRM, workflows, and websites forever with a one-time project fee."
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
            About 4ARKS
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-black text-white leading-[1.1] tracking-tighter text-3xl md:text-5xl max-w-4xl text-center"
          >
            We started because 
            businesses deserved better 
            than renting software forever.
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-[16px] sm:text-[18px] leading-relaxed max-w-[720px] text-center font-sans"
          >
            4ARKS is a custom AI software company. We don't resell SaaS. We don't configure off-the-shelf tools. We build — from scratch — the exact software your business needs, using the same AI and engineering technology that powers the world's best companies.
          </motion.p>
        </div>
      </BeamsBackground>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: OUR STORY
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#fbfaf1] text-dark py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Pull Quote */}
          <div className="lg:col-span-5">
            <SectionReveal className="space-y-4">
              <span className="text-label text-accent font-semibold tracking-wider block">OUR STORY</span>
              <blockquote className="font-sans font-bold italic text-dark text-[clamp(26px,3vw,36px)] leading-[1.25] tracking-tight relative pl-6 border-l-2 border-accent">
                "Every month, millions of businesses pay rent on software they'll never own. We're here to change that."
              </blockquote>
            </SectionReveal>
          </div>

          {/* Right: Story Paragraphs */}
          <div className="lg:col-span-7">
            <SectionReveal className="space-y-6 text-[15px] sm:text-[16px] text-dark/70 leading-[1.8] font-sans">
              <p>
                4ARKS started with a question: why are growing businesses still paying ₹1–5 lakh a year for software that doesn't fit their process, sits on someone else's server, and disappears the moment they stop paying?
              </p>
              <p>
                The same AI and engineering technology that powers enterprise software — LLMs, automation frameworks, modern web stacks — is available to any developer who knows how to use it. The gap between "enterprise custom software" and "small business SaaS dependency" was never about technology. It was about access.
              </p>
              <p>
                We built 4ARKS to close that gap. We take the same technology that enterprise teams use and deploy it inside real, growing businesses — as software they own, not software they rent. Businesses that work with us don't just get better tools. They get a permanent competitive advantage that compounds over time.
              </p>
              <p className="border-t border-white/10 pt-6">
                Today, we've delivered custom AI systems for businesses in real estate, e-commerce, healthcare, education, hospitality, and more — across multiple markets. Every system we've built is still running. None of our clients are paying subscriptions on software we've replaced.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: MISSION + VISION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#fbfaf1] text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 — Mission */}
          <SectionReveal>
            <div className="bg-dark/70 border border-white/5 rounded-2xl p-10 h-full flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 text-bg/70 text-label font-bold tracking-wider">
                  <Target size={16} />
                  Mission
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-black text-bg leading-snug">
                  Give every ambitious business access to custom AI software that they own, control, and never have to pay rent on.
                </h3>
              </div>
              <div className="absolute right-6 bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={120} className="text-dark" />
              </div>
            </div>
          </SectionReveal>

          {/* Card 2 — Vision */}
          <SectionReveal>
            <div className="bg-dark/70 border border-white/5 rounded-2xl p-10 h-full flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 text-bg/70 text-label font-bold tracking-wider">
                  <Eye size={16} />
                  Vision
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-black text-bg leading-snug">
                  A world where no growing business is held hostage by generic SaaS tools — where the technology you use is built for you, owned by you, and works exactly the way you work.
                </h3>
              </div>
              <div className="absolute right-6 bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye size={120} className="text-dark" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: VALUES GRID (Theme Matches Visionary Voices card styling)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#2D140A] text-bg py-24 md:py-32 px-6 border-t border-white/5 relative">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,68,0,0.06),transparent_40%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionReveal className="mb-16 space-y-4 text-center">
            <span className="text-label text-accent font-semibold tracking-wider">OUR CORE VALUES</span>
            <h2 className="text-white font-sans font-black text-3xl md:text-5xl tracking-tighter">How we think. How we build.</h2>
          </SectionReveal>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <SectionReveal>
              <div className="bg-[#2D140A] border border-[#4E2A1C] rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white">Ownership Over Everything</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  "Every system we build is designed to be fully owned, fully portable, and fully independent from us. Our goal is to make ourselves unnecessary — in the best possible way."
                </p>
              </div>
            </SectionReveal>

            {/* Card 2 */}
            <SectionReveal>
              <div className="bg-[#2D140A] border border-[#4E2A1C] rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <Cpu size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white">Custom, Always</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  "We don't configure templates. We don't install plugins. We don't resell tools. We write code. Everything we deliver is built specifically for the business it serves."
                </p>
              </div>
            </SectionReveal>

            {/* Card 3 */}
            <SectionReveal>
              <div className="bg-[#2D140A] border border-[#4E2A1C] rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <EyeOff size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white">Radical Transparency</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  "You see the code, you own the credentials, you understand what we built and why. No black boxes. No mysterious processes. No dependency on our goodwill."
                </p>
              </div>
            </SectionReveal>

            {/* Card 4 */}
            <SectionReveal>
              <div className="bg-[#2D140A] border border-[#4E2A1C] rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <BarChart3 size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white">Outcomes Before Outputs</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  "We don't measure success by hours billed or features delivered. We measure it by the result that moved for your business — leads closed, hours saved, costs eliminated."
                </p>
              </div>
            </SectionReveal>

            {/* Card 5 */}
            <SectionReveal>
              <div className="bg-[#2D140A] border border-[#4E2A1C] rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white">Speed Without Compromise</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  "We ship production-grade custom software in weeks — not because we rush, but because we've built it before. Experience is the only shortcut that works."
                </p>
              </div>
            </SectionReveal>

            {/* Card 6 */}
            <SectionReveal>
              <div className="bg-[#2D140A] border border-[#4E2A1C] rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl text-accent border border-accent/20">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white">Long-Term Thinking</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  "Every technical decision we make is designed to age well. We don't use trendy frameworks that won't exist in three years. We build on stable, scalable, well-documented technology."
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5: CTA BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-bg text-dark py-24 sm:py-32 px-6 text-center border-t border-dark/5 relative overflow-hidden flex flex-col items-center">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
          <span className="text-label text-accent font-semibold tracking-wider uppercase block">Get a Free Stack Audit</span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-dark tracking-tighter leading-tight">
            Want to see what <br />we'd build for you?
          </h2>
          <p className="text-text-muted text-[15px] sm:text-[17px] leading-relaxed max-w-lg mx-auto font-sans">
            Tell us about your business and what you're currently paying SaaS for. We'll come back with a clear plan and a cost comparison within 24 hours.
          </p>
          <div className="pt-4">
            <GradientButton
              onClick={() => navigate('/get-started', { state: { fromAudit: true } })}
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
              Get a Free Stack Audit →
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
