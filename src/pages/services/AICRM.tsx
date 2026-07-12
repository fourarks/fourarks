import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, Check, ArrowRight, ArrowLeft } from 'lucide-react';
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

const AICRM: React.FC = () => {
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
      q: "Can it integrate with WhatsApp?",
      a: "Yes. If we've also built your WhatsApp automation system, it integrates natively — every WhatsApp conversation is logged to the CRM lead record automatically. If you're using a third-party WhatsApp tool, we build the integration based on their API."
    },
    {
      q: "Can we migrate our existing HubSpot/Zoho data into the new CRM?",
      a: "Yes. Data migration is included in the build scope — we export your existing contacts, deals, notes, and history and import them into the custom CRM so you start with a full history, not from zero."
    },
    {
      q: "What happens if our sales process changes after delivery?",
      a: "Since you own the code, any developer can modify the pipeline logic. We also offer change request builds as separate scopes. Most process changes are small and fast — a few days of work, not a whole new project."
    },
    {
      q: "Does it work on mobile?",
      a: "Yes. The CRM is built as a responsive web application — your sales team can access it on any device, including mobile, without needing a native app download. We can also build a Progressive Web App (PWA) version if mobile usage is heavy."
    },
    {
      q: "How is the AI lead scoring trained?",
      a: "We use your historical deal data — won and lost deals, lead sources, engagement patterns, deal ages — to train a scoring model specific to your business. The model updates over time as more data comes in. It's not a generic model — it learns what a hot lead looks like for you."
    },
    {
      q: "What if we don't have much historical data?",
      a: "We start with rule-based scoring (you define what makes a lead valuable) and shift to AI-driven scoring once we have enough data (typically 3–6 months of usage). This is common for newer businesses and works very well."
    }
  ];

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg">
      <SEO
        title="AI CRM | 4ARKS — Custom Software"
        description="Stop paying for HubSpot, Zoho, or Salesforce. 4ARKS builds a custom AI CRM tailored to your exact sales process — you own it forever, no monthly fees."
      />

      {/* Hero Section */}
      <BeamsBackground className="relative min-h-[90vh] w-full text-bg flex flex-col justify-center py-28 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
              AI CRM · Replaces HubSpot · Salesforce · Zoho
            </div>
            
            <h1 className="font-sans font-black text-white leading-[1.1] tracking-tighter text-5xl">
              Your CRM should work<br />
              the way <span className="italic text-accent">you</span> sell.<br />
              Not the way HubSpot thinks you should.
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-[580px] font-sans">
              Generic CRMs are built for millions of businesses — which means compromises everywhere. Your pipeline doesn't fit their stages. Your follow-up logic breaks in their rules. Your team spends more time managing the tool than closing deals. We build a CRM from scratch around your exact sales process. You pay once. It's yours forever. No monthly seats, no usage limits, no feature gates.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <GradientButton
                onClick={() => navigate('/get-started')}
                width="260px"
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
                Build My Custom CRM →
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
                {['HubSpot', 'Salesforce', 'Zoho CRM', 'Pipedrive', 'Freshsales'].map((p, idx) => (
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
                    <span>HubSpot Starter:</span>
                    <span>₹4,500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>+ Sales Hub:</span>
                    <span>₹8,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>+ Reporting Add-on:</span>
                    <span>₹3,000/month</span>
                  </div>
                  <div className="border-t border-white/10 pt-2.5 flex justify-between text-white font-bold">
                    <span>Per Year:</span>
                    <span>₹1,86,000</span>
                  </div>
                  <div className="flex justify-between text-white font-bold">
                    <span>Per 3 Years:</span>
                    <span>₹5,58,000</span>
                  </div>
                </div>
                <div className="text-accent font-bold text-sm pt-2">"And you still don't own it."</div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-accent/80">WHAT WE BUILD INSTEAD:</span>
                <div className="space-y-2 font-sans text-sm text-white/80">
                  <div className="flex justify-between">
                    <span>Custom AI CRM:</span>
                    <span className="text-white font-bold">One-time fee</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ongoing cost:</span>
                    <span className="text-white font-bold">₹0 to 4ARKS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ownership:</span>
                    <span className="text-white font-bold">100% yours</span>
                  </div>
                </div>
                <div className="text-accent font-black text-sm pt-1">"Built for your process. Runs forever."</div>
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
              HubSpot wasn't built<br />for your business.<br />It was built for everyone's.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Pipeline Mismatch",
                desc: "Your deal stages are unique to how you sell. HubSpot gives you their stages and expects you to adapt. So your team creates workarounds, duplicate fields, and notes that live outside the system — defeating the purpose entirely."
              },
              {
                title: "The Seat Tax",
                desc: "Every person you want to give CRM access costs you more per month. Your ops team, your support team, your founders — everyone who could benefit from seeing the pipeline has a price tag attached. The more useful it becomes, the more you pay."
              },
              {
                title: "The Feature Wall",
                desc: "The automation and AI features you actually need — lead scoring, predictive close dates, custom workflows — are locked behind the highest-tier plans. You either over-pay for features or under-get what you need. There's no in-between."
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
              A CRM that knows your sales process better<br />than any off-the-shelf tool.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Lead Scoring Built for Your Business",
                prob: "You don't know which leads to call first.",
                sol: "An AI scoring model trained on your historical deal data — close rates by source, industry, lead age, conversation patterns. Scores every new lead in real time so your sales team always starts with the highest-intent prospects.",
                diff: "HubSpot's lead scoring uses generic criteria. Ours learns your specific business patterns."
              },
              {
                title: "Automated Follow-up Sequences",
                prob: "Leads go cold because follow-ups slip through the cracks.",
                sol: "Time-triggered and behaviour-triggered follow-up sequences across WhatsApp, email, and SMS — personalised per lead based on their source, stage, and last interaction. Nothing is sent unless you define the rule. Nothing is missed because the system handles it.",
                diff: "No per-email charges. No sequence limits. No \"workflow action credits.\""
              },
              {
                title: "Your Pipeline, Your Logic",
                prob: "Your sales stages don't match what any CRM defaults to.",
                sol: "A custom pipeline with your exact stages, substages, conditional logic, and required fields. If a deal can't move to \"Proposal Sent\" until a call is logged, the system enforces it. Your rules. Not Salesforce's.",
                diff: "Built exactly for your playbook."
              },
              {
                title: "AI Call Summaries & Logging",
                prob: "Sales reps spend 20 minutes after every call writing notes.",
                sol: "Every sales call transcribed automatically, summarised by AI (key points, objections raised, agreed next steps), and logged to the deal — in seconds. Your team walks out of every call ready for the next one.",
                diff: "No manual typing. Zero friction."
              },
              {
                title: "Unified Communication Inbox",
                prob: "Leads interact on WhatsApp, email, and calls — and none of it is connected.",
                sol: "A single inbox where every conversation — regardless of channel — is attached to the lead record. One view of every touchpoint, every message, every call, in chronological order.",
                diff: "Complete operational transparency."
              },
              {
                title: "AI Revenue Forecasting & Reporting",
                prob: "Forecasting is manual and usually wrong.",
                sol: "An AI model that looks at your pipeline stage distribution, historical close rates by stage, deal age, and activity levels — and generates a weekly revenue forecast. Delivered to your inbox automatically. No manual pulling of reports.",
                diff: "Data-backed business planning."
              },
              {
                title: "Role-Based Access (Unlimited Seats)",
                prob: "CRM seat costs limit who can see the data.",
                sol: "Role-based access for your entire team — sales, ops, management, support — with no per-seat fee. Define what each role sees. Everyone who needs visibility gets it.",
                diff: "No monthly licensing creep."
              },
              {
                title: "Full Integration with Your Stack",
                prob: "CRM lives in isolation from your other tools.",
                sol: "Native integrations with your WhatsApp system, your website forms, your email, your calling tool, your calendar, and any other platform in your stack — all feeding into one source of truth.",
                diff: "Zero data silos."
              }
            ].map((f, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-accent/10 border border-white/5 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-sans font-bold text-white">{f.title}</h3>
                    <div className="text-xs text-accent uppercase font-bold tracking-wider">Problem: {f.prob}</div>
                    <p className="text-sm text-white/60 leading-relaxed font-sans">{f.sol}</p>
                  </div>
                  <div className="border-t border-white/10 pt-4 text-xs text-white/40 italic">
                    Difference: {f.diff}
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
              From your sales process to a live custom CRM in 3 weeks.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Sales Process Mapping (Week 1)",
                desc: "We spend the first week understanding how you actually sell — your pipeline stages, your follow-up cadence, your team structure, what signals indicate a hot lead, what kills deals. We interview your top salespeople. We look at your historical close data. We map every scenario."
              },
              {
                step: "02",
                title: "Architecture & Approval (End of Week 1)",
                desc: "We build the complete technical blueprint: database schema, pipeline logic, automation rules, integration map, and AI training approach. You review and approve everything before we write a line of code."
              },
              {
                step: "03",
                title: "Build & Parallel Testing (Week 2–3)",
                desc: "We build the CRM on your own database (Supabase), connect your channels, train the AI models on your data, and set up a staging environment. You can log in and test with real scenarios while we're still building."
              },
              {
                step: "04",
                title: "Training & Handover (End of Week 3)",
                desc: "We train every person who'll use the system. We document every rule and automation. We hand over the codebase, every credential, and your admin access. From this point, the CRM is yours — zero dependency on us to keep it running."
              }
            ].map((s, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-dark/20 border border-white/5 rounded-2xl p-6 h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-4xl font-sans font-black text-accent/30 mb-4">{s.step}</div>
                    <h3 className="text-lg font-sans font-bold text-dark mb-2">{s.title}</h3>
                    <p className="text-sm text-dark/50 leading-relaxed font-sans">{s.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Breakdown */}
      <section className="bg-bg text-bg py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto w-full">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">OWNERSHIP BREAKDOWN</span>
            <h2 className="text-dark font-sans font-black text-3xl md:text-5xl tracking-tighter">
              Everything. No exceptions.
            </h2>
          </SectionReveal>

          <SectionReveal className="bg-accent border border-white/5 rounded-2xl p-8 sm:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Full React frontend codebase",
                "Complete backend codebase (Node.js / TypeScript)",
                "Your own Supabase database (your account, your data)",
                "All AI model configurations and training data",
                "Admin access to every integration",
                "Automation rule documentation",
                "Technical documentation for future developers",
                "Training recordings for your team",
                "30-day post-launch support included"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={18} className="text-dark shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 font-sans font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-white/60 italic border-l border-accent/50 pl-4 font-sans pt-4">
              "After handover, you can hire any developer in the world to extend or modify your CRM. You are never dependent on us."
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-[#2D140A] text-white py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <SectionReveal className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { val: "3×", label: "more leads contacted/day" },
              { val: "80%", label: "time saved on CRM tasks" },
              { val: "2×", label: "lead-to-deal conversion improvement" },
              { val: "100%", label: "conversations logged automatically" },
              { val: "6–10m", label: "average break-even duration" }
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
              Common questions about AI CRM.
            </h2>
          </SectionReveal>

          <SectionReveal className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-accent/80 border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-sans font-bold text-dark text-[15px] sm:text-base">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-accent shrink-0 ml-2"
                  >
                    <ChevronDown size={20} className='text-dark'/>
                  </motion.div>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-sm text-dark/60 font-sans leading-relaxed border-t border-white/5 pt-4">
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
                title: "WhatsApp & Call Automation",
                desc: "Your CRM captures leads. Your WhatsApp AI agent follows up on them automatically. Together, they create a fully automated lead-to-conversation pipeline.",
                route: "/services/whatsapp-call-automation"
              },
              {
                title: "Workflow Automation",
                desc: "Automatically push data between your CRM and every other tool in your stack — no manual exports, no copy-pasting, no data gaps.",
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
            Ready to own your<br />sales pipeline?
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-lg font-sans">
            Fill in a brief. We'll come back with a custom CRM architecture and a cost comparison against what you're currently paying — within 24 hours.
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
              Start My CRM Build →
            </GradientButton>
            <p className="text-xs text-text-muted font-sans font-medium">
              No commitment · Quote in 24 hours · Full ownership on delivery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICRM;
