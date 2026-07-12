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

const WebsiteDev: React.FC = () => {
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
      q: "Can you redesign our existing website or do you build from scratch?",
      a: "Both. If you have content and branding you want to keep, we redesign and rebuild in React/Next.js — same content, dramatically better performance and ownership. If you're starting fresh, we design and build from zero."
    },
    {
      q: "What about eCommerce — can you build an online store?",
      a: "Yes. We build custom eCommerce using Supabase + Stripe/Razorpay — or we can integrate with Shopify via their Storefront API (you keep Shopify's product management but get a custom frontend). The approach depends on your scale and requirements."
    },
    {
      q: "How do we update content after launch?",
      a: "We build an admin panel where you can edit text, images, blog posts, and dynamic content without touching code. For structural changes (adding new pages, new sections), any React developer can handle it — or come back to us."
    },
    {
      q: "Where is the website hosted?",
      a: "We typically deploy to Vercel (the same company that built Next.js — optimised hosting, free tier available, paid from ₹0–₹1,500/month depending on traffic). We can also deploy to Railway, DigitalOcean, or any host you prefer."
    },
    {
      q: "Can it handle high traffic?",
      a: "Next.js with Vercel scales automatically. Most business websites see less than 10,000 visitors/month — comfortably on the free or basic tier. For high-traffic sites (100K+ monthly visitors), we architect for scale from the start."
    },
    {
      q: "What if we need to add a new feature or page after launch?",
      a: "Since you own the code, any React developer can extend it. New features, new pages, new integrations — scoped as a separate project or handled by your own developer with our documentation as reference."
    }
  ];

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg">
      <SEO
        title="Website Development | 4ARKS — Custom Software"
        description="Stop paying Webflow, Wix, or WordPress plugin subscriptions. 4ARKS builds custom React/Next.js websites — fast, conversion-focused, and fully owned by you."
      />

      {/* Hero Section */}
      <BeamsBackground className="relative min-h-[90vh] w-full text-bg flex flex-col justify-center py-28 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
              Website Development · Replaces Webflow · Wix · WordPress
            </div>
            
            <h1 className="font-sans font-black text-white leading-[1.1] tracking-tighter text-2xl md:text-5xl">
              Your website should be
              a custom asset you own.<br/>
              <span className="italic text-accent">Not a template</span> you rent.
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-[580px] font-sans">
              Webflow charges ₹2,000–₹15,000/month. WordPress needs hosting + plugins + a developer on call. Wix and Squarespace own your design and make migration painful. All of them make you dependent on their platform. We build your website in React and Next.js — the most powerful, flexible web technology available. The code is yours. Host it anywhere. Modify it anytime. Never pay a platform fee again.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <GradientButton
                onClick={() => navigate('/get-started')}
                width="280px"
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
                Build My Custom Website →
              </GradientButton>
              
              <button
                onClick={scrollToProcess}
                className="px-8 py-4 rounded-[50px] border border-white/20 hover:border-white/40 text-white font-sans text-sm font-semibold transition-all duration-300"
              >
                See Our Process ↓
              </button>
            </div>

            <div className="pt-6 space-y-2">
              <span className="text-xs text-white/40 uppercase tracking-widest font-bold block">Replaces:</span>
              <div className="flex flex-wrap gap-2 text-xs font-sans text-white/60">
                {['Webflow', 'Wix', 'Squarespace', 'WordPress + WooCommerce', 'Framer'].map((p, idx) => (
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
                <span className="text-xs uppercase font-bold tracking-wider text-white/40">WHAT YOU'RE PAYING NOW:</span>
                <div className="space-y-2.5 font-sans text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Webflow Business:</span>
                    <span>₹4,500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>+ Plugin subscriptions:</span>
                    <span>₹1,500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>+ Developer retainer:</span>
                    <span>₹15,000/month (for updates)</span>
                  </div>
                  <div className="border-t border-white/10 pt-2.5 flex justify-between text-white font-bold">
                    <span>Per Year:</span>
                    <span>₹2,52,000+</span>
                  </div>
                </div>
                <div className="text-accent font-bold text-xs pt-1">"And if Webflow changes pricing, you're stuck."</div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-accent/80">WHAT WE BUILD INSTEAD:</span>
                <div className="space-y-2 font-sans text-sm text-white/80">
                  <div className="flex justify-between">
                    <span>Custom React/Next.js site:</span>
                    <span className="text-white font-bold">One-time build fee</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly hosting:</span>
                    <span className="text-white font-bold">₹500–₹2,00,000 (Vercel/your server)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform fees:</span>
                    <span className="text-white font-bold">₹0</span>
                  </div>
                </div>
                <div className="text-accent font-black text-sm pt-1">"Your site. Your code. Your rules."</div>
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
              Platform-built websites have a ceiling. And a monthly bill.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Platform Lock-In",
                desc: "Webflow designs can't be exported to code. Wix sites live only on Wix. WordPress is \"open\" until you realise the theme, plugins, and page builder are all proprietary. Moving away means rebuilding from zero."
              },
              {
                title: "Template Compromise",
                desc: "Every Webflow or Wix site starts from a template built for a generic business. You end up modifying something that was never designed for your specific goals — and hitting design limitations every time you want to do something slightly different."
              },
              {
                title: "Performance Ceiling",
                desc: "Webflow sites average 3–5 second load times. WordPress with plugins averages worse. Custom React/Next.js sites regularly score 95+ on Lighthouse. In a world where Google ranks faster sites higher and users leave in under 3 seconds, this isn't cosmetic — it's commercial."
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
              Custom-coded web platforms<br />built for scale and speed.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "React / Next.js Codebase",
                desc: "Built on the same technology used by Vercel, Notion, Linear, and thousands of the world's most-visited websites. App Router for speed, server-side rendering for SEO, static generation for performance. The code is clean, documented, and portable."
              },
              {
                title: "Core Web Vitals Score 90+",
                desc: "We optimise LCP, CLS, and FID from the first line of code. Image optimisation, font loading strategy, bundle splitting, lazy loading — every performance decision is intentional. Your site loads fast, stays fast, and ranks well because of it."
              },
              {
                title: "Conversion-Focused UI/UX",
                desc: "Every page is designed around a single primary action — a form fill, a call booking, a WhatsApp message. We study your customer journey and design the visual hierarchy to guide every visitor toward that action. No wasted space. No confusing layouts."
              },
              {
                title: "Custom Supabase Backend",
                desc: "Authentication, database, file storage — on your own Supabase project. Your data doesn't go through any third party. Admin panel included for content management. Row-level security built in from day one."
              },
              {
                title: "Content Management (No Developer Required)",
                desc: "You can update blogs, case studies, team pages, and other dynamic content through a simple admin panel — without touching code and without paying a Webflow editor seat per user."
              },
              {
                title: "SEO Foundation",
                desc: "Proper semantic HTML structure, meta tags, Open Graph images, structured data (JSON-LD), XML sitemap, robots.txt, and canonical URLs — set up correctly from the start. You're not fighting against template limitations to rank."
              },
              {
                title: "Analytics & Conversion Tracking",
                desc: "PostHog or Plausible configured from day one — tracking page views, scroll depth, form completions, and CTA clicks. You know exactly which pages convert, which don't, and why."
              },
              {
                title: "Fully Responsive — Every Device",
                desc: "Pixel-perfect on iPhone SE, Android mid-range, iPad, and 4K desktop. Not \"mostly responsive\" — precisely designed for every breakpoint because most of your visitors are on mobile."
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
              From brief to live website in 2 weeks.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Brief (Day 1–2)",
                desc: "We understand your goals, your audience, your competitors, what pages you need, and what the primary conversion action is on each page. We also audit your current site's performance and identify what to keep vs what to rethink."
              },
              {
                step: "02",
                title: "Figma Design (Day 2–6)",
                desc: "Full desktop and mobile designs for every page, in Figma. You get a shareable link to review and comment directly on the design. We revise until you're completely happy — before a single line of code. No surprises in development."
              },
              {
                step: "03",
                title: "Build & Staging (Day 6–12)",
                desc: "We build your site on a staging URL you can share with your team. All forms are live and testable. All pages are functional. You review in real conditions — actual devices, real browser behaviour."
              },
              {
                step: "04",
                title: "QA, Launch & Handover (Day 12–14)",
                desc: "Cross-browser testing, mobile testing, performance audit (Lighthouse 90+ confirmed), SEO check, and then launch. We configure your domain, set up analytics, and hand over the complete codebase with documentation."
              }
            ].map((s, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-dark/10 border border-white/5 rounded-2xl p-6 h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-4xl font-sans font-black text-accent/30 mb-4">{s.step}</div>
                    <h3 className="text-lg font-sans font-bold text-dark/80 mb-2">{s.title}</h3>
                    <p className="text-sm text-dark/60 leading-relaxed font-sans">{s.desc}</p>
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

          <SectionReveal className="bg-accent border border-white/5 rounded-2xl p-8 sm:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Full React / Next.js codebase (GitHub repository)",
                "Figma design files (all pages, all breakpoints)",
                "Your own Supabase project (database + auth + storage)",
                "Admin panel for content updates",
                "Vercel / hosting configuration (your account)",
                "Analytics setup (your PostHog or Plausible account)",
                "SEO configuration and sitemap",
                "Performance audit report (Lighthouse scores)",
                "Documentation for future developers",
                "30-day post-launch support"
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

      {/* Results Section */}
      <section className="bg-[#2D140A] text-white py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <SectionReveal className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { val: "90–98", label: "Lighthouse Performance Score" },
              { val: "<1.5s", label: "average page load speed" },
              { val: "+40–60%", label: "mobile conversion rates" },
              { val: "Perfect", label: "SEO semantic foundation" },
              { val: "6–12m", label: "average break-even duration" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl sm:text-4xl font-sans font-black text-accent">{stat.val}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider font-bold max-w-[160px] mx-auto leading-normal">{stat.label}</div>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-bg text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">FAQ</span>
            <h2 className="text-dark font-sans font-black text-3xl md:text-5xl tracking-tighter">
              Common questions about Web Dev.
            </h2>
          </SectionReveal>

          <SectionReveal className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-accent border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-sans font-bold text-white/80 text-[15px] sm:text-base">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-accent shrink-0 ml-2"
                  >
                    <ChevronDown size={20} className='text-dark' />
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
      <section className="bg-dark text-bg py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">OFTEN BUILT TOGETHER</span>
            <h2 className="text-white font-sans font-black text-2xl sm:text-3xl tracking-tighter">
              Most clients pair this with:
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Branding & Design",
                desc: "Most website projects start with branding. If you don't have a finalized logo, color palette, and typography system, we complete that first so the website design has a consistent foundation.",
                route: "/services/branding-design"
              },
              {
                title: "Workflow Automation",
                desc: "Every form submission on your website can automatically trigger workflows — CRM updates, WhatsApp notifications, Slack alerts, email responses. We connect your website to your operations.",
                route: "/services/workflow-automation"
              }
            ].map((rel, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-accent/10 border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-full space-y-6">
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
            Ready to own your<br />website — not rent it?
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-lg font-sans">
            Tell us what you need. We'll come back with a design direction, page list, and build estimate within 24 hours.
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
              Start My Website Build →
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDev;
