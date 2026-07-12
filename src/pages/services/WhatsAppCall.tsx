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

const WhatsAppCall: React.FC = () => {
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
      q: "Do we need a new WhatsApp number?",
      a: "No. We can work with your existing business WhatsApp number if it's already a WABA account, or help you register your current number to the WhatsApp Business API. You don't lose your number or conversation history."
    },
    {
      q: "What happens to conversations the AI can't handle?",
      a: "The AI detects when it's out of its depth and escalates to a human agent with the full conversation context. You define the escalation triggers — complexity level, sentiment signals, specific keywords, or a customer explicitly asking for a human."
    },
    {
      q: "How do we update the AI if our products or pricing change?",
      a: "We build an admin panel that lets your team update FAQs, product information, and pricing without touching code. For more complex changes to conversation flows, you can come back to us or have any developer handle it."
    },
    {
      q: "Is this compliant with WhatsApp's Business Policy?",
      a: "Yes. Everything we build follows Meta's WhatsApp Business Policy — no spam, approved templates for outbound messages, opt-in/opt-out management. We handle the compliance setup as part of the build."
    },
    {
      q: "Can the WhatsApp agent hand off to our CRM?",
      a: "Yes. If we've built your custom CRM, the WhatsApp agent and CRM are natively integrated — every new lead from WhatsApp creates a CRM record automatically. If you use an external CRM, we build the integration via their API."
    },
    {
      q: "What about the Meta/WhatsApp API fees?",
      a: "WhatsApp charges per conversation (currently approximately ₹0.58–₹0.78 per conversation for service messages in India). These fees go directly to Meta — no markup from us. You pay Meta directly, just like you pay your hosting provider directly."
    }
  ];

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg">
      <SEO
        title="WhatsApp & Call Automation | 4ARKS — Custom Software"
        description="Replace Wati, Interakt, and Yellow.ai with custom AI agents on WhatsApp and phone. No per-conversation fees. You own the entire system."
      />

      {/* Hero Section */}
      <BeamsBackground className="relative min-h-[90vh] w-full text-bg flex flex-col justify-center py-28 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
              WhatsApp & Call Automation · Replaces Wati · Interakt · Yellow.ai
            </div>
            
            <h1 className="font-sans font-black text-white leading-[1.1] tracking-tighter text-2xl md:text-5xl">
              Stop paying per conversation 
              with your own customers. <br/>
              <span className="italic text-accent">Own the system</span> instead.
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-[580px] font-sans">
              Wati charges ₹49–₹299 per 1,000 conversations. Interakt charges per message. AiSensy takes a markup on every template send. You're paying a platform every time you speak to a customer — for a system that doesn't fit your exact business logic and sits on their servers, not yours. We build your entire customer communication layer from scratch. AI agents on WhatsApp and phone, trained on your business, running on your accounts, with zero per-conversation fees after delivery.
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
                Build My WhatsApp System →
              </GradientButton>
              
              <button
                onClick={scrollToProcess}
                className="px-8 py-4 rounded-[50px] border border-white/20 hover:border-white/40 text-white font-sans text-sm font-semibold transition-all duration-300"
              >
                See How It Works ↓
              </button>
            </div>

            <div className="pt-6 space-y-2">
              <span className="text-xs text-white/40 uppercase tracking-widest font-bold block">Replaces:</span>
              <div className="flex flex-wrap gap-2 text-xs font-sans text-white/60">
                {['Wati', 'Interakt', 'AiSensy', 'Yellow.ai', 'Exotel', 'BotPenguin'].map((p, idx) => (
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
                    <span>Wati Growth Plan:</span>
                    <span>₹4,499/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>+ WhatsApp template fees:</span>
                    <span>₹2,000–₹8,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>+ Conversation charges:</span>
                    <span>₹1,500–₹5,000/month</span>
                  </div>
                  <div className="border-t border-white/10 pt-2.5 flex justify-between text-white font-bold">
                    <span>Per Year:</span>
                    <span>₹95,000–₹2,09,000</span>
                  </div>
                </div>
                <div className="text-accent font-bold text-xs pt-1">"And every message still goes through their servers."</div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-accent/80">WHAT WE BUILD INSTEAD:</span>
                <div className="space-y-2 font-sans text-sm text-white/80">
                  <div className="flex justify-between">
                    <span>Custom AI System:</span>
                    <span className="text-white font-bold">One-time fee</span>
                  </div>
                  <div className="flex justify-between">
                    <span>WhatsApp API fees:</span>
                    <span className="text-white font-bold">Paid direct to Meta (no markup)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ownership:</span>
                    <span className="text-white font-bold">100% yours</span>
                  </div>
                </div>
                <div className="text-accent font-black text-sm pt-1">"Your conversations. Your data. Your system."</div>
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
              You're paying a middleman<br />to handle conversations<br />in your own business.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Per-Message Tax",
                desc: "Every conversation you have with a customer costs you money on top of the platform subscription. Scale up your outreach? Pay more. Handle more support queries? Pay more. The platform profits every time your business grows."
              },
              {
                title: "Generic Conversation Logic",
                desc: "Wati's chatbot builder gives you buttons and quick replies. It wasn't built for your sales qualification flow, your multi-step booking process, or your industry-specific FAQs. You end up building something that half-works and explaining its limitations to every customer who uses it."
              },
              {
                title: "Your Data on Their Servers",
                desc: "Every conversation your customers have — their queries, their complaints, their purchasing signals — is stored on a third-party platform. You can't run custom analytics on it. You can't easily move it. And if they change their pricing or shut down, your entire communication history goes with them."
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
              An AI customer communication<br />layer that's entirely yours.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom WhatsApp AI Agent",
                desc: "An AI agent built on your own WhatsApp Business API account — trained specifically on your products, pricing, FAQs, tone of voice, and conversation logic. Handles new lead inquiries, answers product questions, qualifies prospects, books appointments, and escalates to humans when needed 24/7.",
                details: "Trained on YOUR data. Runs on YOUR WABA account. Zero Wati or Interakt in the middle."
              },
              {
                title: "AI Voice Agents (Inbound + Outbound)",
                desc: "Custom phone AI agents — one for inbound calls to your business number, one for outbound follow-up calls to leads. Inbound greets callers, identifies their need, answers questions, books callbacks. Outbound calls leads from your pipeline, introduces your offer, qualifies interest, and books callbacks.",
                details: "No Exotel per-minute charges on top of a platform fee. Runs on your telephony account."
              },
              {
                title: "Lead Qualification Flows",
                desc: "Custom multi-step qualification sequences triggered when a new lead messages you on WhatsApp. Asks the right questions in the right order — industry, budget, timeline, specific need — scores the lead based on responses, and either books a call or runs a nurture flow.",
                details: "The qualification criteria are based on what you told us makes a good lead."
              },
              {
                title: "Real-Time Appointment Booking",
                desc: "Integration with your calendar (Google Calendar or custom) inside the WhatsApp conversation. AI checks availability in real time and confirms a booking directly in the chat. The customer gets a confirmation. Your calendar gets the block. No human intervention required.",
                details: "Replaces Calendly charges + Wati integration fees."
              },
              {
                title: "Broadcast Campaign Infrastructure",
                desc: "Custom bulk messaging setup on your own WABA account with your own approved message templates. Send promotional messages, re-engagement campaigns, and follow-up sequences to your contact list — without AiSensy's per-message markup.",
                details: "Important: All WhatsApp template fees go directly to Meta at their published rates. No platform markup."
              },
              {
                title: "Smart Human Escalation",
                desc: "A logic layer that detects when a conversation needs a human and transfers it cleanly. Detects frustrated customers, complex queries, high-value prospects, and situations outside the AI's training — and hands off to a human agent with the full conversation history attached.",
                details: "No customer has to repeat themselves."
              },
              {
                title: "Conversation Analytics Dashboard",
                desc: "A custom analytics dashboard on your own database showing conversation data. Tracks message volume, resolution rate, escalation frequency, peak hours, common query types, and customer sentiment — updated in real time.",
                details: "Your data. Your dashboard. Not locked in Wati's reporting portal."
              },
              {
                title: "Multi-Language Support",
                desc: "AI agent trained to detect and respond in the customer's language. Switches between English, Hindi, Arabic, and other languages automatically based on the customer's first message. No separate bot needed per language.",
                details: "Seamless multilingual user experience."
              }
            ].map((f, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-accent/20 border border-white/5 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-sans font-bold text-white">{f.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-sans">{f.desc}</p>
                  </div>
                  <div className="border-t border-white/10 pt-4 text-xs text-accent italic">
                    {f.details}
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
              From WABA setup to<br />live AI agent — in under 2 weeks.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "WABA Registration & Setup (Days 1–3)",
                desc: "We register your WhatsApp Business API account (or connect to your existing one), get Meta's approval for your business and message templates, and set up the technical foundation. This typically takes 2–3 days depending on Meta's review timeline."
              },
              {
                step: "02",
                title: "AI Training & Flow Design (Days 3–7)",
                desc: "We collect your product information, pricing, FAQs, tone guide, and qualification criteria. We train the AI agent on this knowledge base and design every conversation flow — new lead, existing customer, complaint, booking, broadcast. You review and approve every flow."
              },
              {
                step: "03",
                title: "Build, Test & Refine (Days 7–12)",
                desc: "We build the system, connect it to your WABA account, and run it through hundreds of test scenarios — edge cases, angry customers, multi-language queries, booking flows. We refine until it handles everything reliably."
              },
              {
                step: "04",
                title: "Go Live & Optimise (Day 12–14)",
                desc: "We switch your WhatsApp number to the new AI agent, monitor the first 48 hours of real conversations, and make real-time adjustments. We then hand over admin access and documentation."
              }
            ].map((s, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-dark/10 border border-white/5 rounded-2xl p-6 h-full flex flex-col justify-between space-y-6">
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

          <SectionReveal className="bg-accent/30 border border-white/5 rounded-2xl p-8 sm:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Full AI agent codebase (Node.js / Python / TypeScript)",
                "Your own WABA account and all approved templates",
                "Conversation flow documentation (every scenario mapped)",
                "AI training dataset and model configuration",
                "Analytics dashboard (your own Supabase instance)",
                "Admin panel to update FAQs and training data yourself",
                "Integration code for your CRM (if applicable)",
                "Telephony setup for voice agents (your account)",
                "30-day post-launch monitoring and support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
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
              { val: "24/7", label: "Availability — zero missed leads" },
              { val: "<30s", label: "Response time on inquiries" },
              { val: "70%", label: "queries resolved automatically" },
              { val: "40–60%", label: "lead qualification improvement" },
              { val: "4–8m", label: "average break-even duration" }
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
              Common questions about WhatsApp & Call AI.
            </h2>
          </SectionReveal>

          <SectionReveal className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-dark/20 border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-sans font-bold text-dark/80 text-[15px] sm:text-base">
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
                  <div className="px-6 pb-6 text-sm text-dark/50 font-sans leading-relaxed border-t border-white/5 pt-4">
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
            <h2 className="text-bg font-sans font-black text-2xl sm:text-3xl tracking-tighter">
              Most clients pair this with:
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI CRM",
                desc: "Every lead that comes through WhatsApp automatically creates a CRM record, gets scored, and enters a follow-up sequence. The two systems together create a fully automated lead engine.",
                route: "/services/ai-crm"
              },
              {
                title: "Workflow Automation",
                desc: "WhatsApp conversations trigger actions in your other tools automatically — Sheets, Slack, email, your booking system. No manual transfer of information.",
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
            Ready to own your<br />customer conversations?
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-lg font-sans">
            Tell us how many messages you handle monthly and what tools you currently pay for. We'll come back with a custom build plan and show you exactly what you'd save.
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
              Start My WhatsApp Build →
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppCall;
