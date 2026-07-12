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

const WorkflowAutomation: React.FC = () => {
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
      q: "We already use n8n Cloud — why would we pay to have it built custom?",
      a: "n8n Cloud still charges based on workflow executions and limits your active workflows. Self-hosted n8n has none of these limits — and we build the complex logic, error handling, and monitoring infrastructure that makes it production-grade rather than a side project."
    },
    {
      q: "What if we want to keep using some Zapier zaps?",
      a: "We can migrate specific workflows and leave others. We'll advise on which ones are worth migrating (usually the high-volume or business-critical ones) and which aren't worth the build time."
    },
    {
      q: "How technical does our team need to be to manage it?",
      a: "n8n has a visual interface — your ops team can modify workflows without writing code. For anything more complex, we've documented every workflow clearly and any developer can extend the system."
    },
    {
      q: "What happens if the server goes down?",
      a: "We set up monitoring that alerts your team (and us, if you're in a support period) immediately. We also configure workflow queuing so that automations that triggered while the server was down run when it comes back up — nothing is lost."
    },
    {
      q: "Can it handle our data volume?",
      a: "We size the server infrastructure to your expected volume. For most businesses, a basic VPS handles millions of workflow executions per month. For high-volume operations, we design a scaled infrastructure from the start."
    },
    {
      q: "Can you migrate our existing Zapier zaps?",
      a: "Yes. Migrating existing automations is standard in the build scope. We import your current workflows, rebuild them with proper error handling and logic, and test them before switching over."
    }
  ];

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg">
      <SEO
        title="Workflow Automation | 4ARKS — Custom Software"
        description="Kill your Zapier and Make.com bills. 4ARKS builds self-hosted workflow automation with no task limits, no usage caps, and full code ownership."
      />

      <BeamsBackground className="relative min-h-[90vh] w-full text-bg flex flex-col justify-center py-28 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
              Workflow Automation · Replaces Zapier · Make.com · n8n Cloud
            </div>
            
            <h1 className="font-sans font-black text-white leading-[1.1] tracking-tighter text-2xl md:text-5xl">
              You're paying Zapier
              every time your business runs.
              <span className="italic text-accent">Stop.</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-[580px] font-sans">
              Zapier charges by the task. 1,000 tasks a month? Pay this. 10,000? Pay more. And every zap routes your business data through Zapier's servers — a third party sitting between every automated action in your operation. We build your workflow automation on your own server, with your own infrastructure. No task caps. No usage billing. No third-party data routing. Automation that runs as much as your business needs, for a fixed one-time cost.
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
                Kill My Zapier Bill →
              </GradientButton>
              
              <button
                onClick={scrollToProcess}
                className="px-8 py-4 rounded-[50px] border border-white/20 hover:border-white/40 text-white font-sans text-sm font-semibold transition-all duration-300"
              >
                See What We Build ↓
              </button>
            </div>

            <div className="pt-6 space-y-2">
              <span className="text-xs text-white/40 uppercase tracking-widest font-bold block">Replaces:</span>
              <div className="flex flex-wrap gap-2 text-xs font-sans text-white/60">
                {['Zapier', 'Make.com', 'n8n Cloud', 'Monday.com', 'Airtable Automations', 'ActiveCampaign'].map((p, idx) => (
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
                    <span>Zapier Professional:</span>
                    <span>₹7,000/month (2,000 tasks)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Make.com Business:</span>
                    <span>₹4,500/month (10,000 ops)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monday.com Standard:</span>
                    <span>₹6,000/month</span>
                  </div>
                  <div className="border-t border-white/10 pt-2.5 flex justify-between text-white font-bold">
                    <span>Per Year (combined):</span>
                    <span>₹2,10,000+</span>
                  </div>
                </div>
                <div className="text-accent font-bold text-xs pt-1">"And you still hit limits every month."</div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-accent/80">WHAT WE BUILD INSTEAD:</span>
                <div className="space-y-2 font-sans text-sm text-white/80">
                  <div className="flex justify-between">
                    <span>Self-hosted automation:</span>
                    <span className="text-white font-bold">One-time build fee</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly running cost:</span>
                    <span className="text-white font-bold">₹500–₹2,000 (your own server)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Task limits:</span>
                    <span className="text-white font-bold">None. Zero. Unlimited.</span>
                  </div>
                </div>
                <div className="text-accent font-black text-sm pt-1">"Automation that scales with you — not against you."</div>
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
              Task-based billing was designed to punish business growth.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Task Tax",
                desc: "Every automated action in your business costs Zapier money. So they charge you per task. As you automate more — as your business scales — your automation bill scales with it. You're being taxed for efficiency."
              },
              {
                title: "Usage Limits",
                desc: "Hit your monthly task limit mid-month and your automations pause. Your team doesn't know. Data doesn't flow. Processes break silently. You find out when something important is missing. Then you upgrade. Then you hit the next limit."
              },
              {
                title: "Third-Party Data Routing",
                desc: "Every piece of data that flows through a Zapier zap — customer info, order data, financial records — passes through Zapier's servers. You've agreed to their data processing terms for your business's most sensitive operational data."
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
              Automation infrastructure that runs on your server, on your terms.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Self-Hosted Automation Engine",
                desc: "We deploy n8n (open-source) on your own server — a VPS, Railway, or any cloud provider you choose. Your automations run on your infrastructure. Your data never leaves your environment. No third-party platform between your tools.",
                details: "Cost after build: The server costs ₹500–₹2,000/month depending on how many workflows you run. That's it."
              },
              {
                title: "100+ Native Integrations, No Markup",
                desc: "Connect Google Workspace (Sheets, Gmail, Calendar, Drive), Notion, Slack, Tally, Typeform, Razorpay, Stripe, Shopify, WooCommerce, HubSpot, Salesforce, WhatsApp Business API, Twilio, Telegram, Airtable, and anything else with an API.",
                details: "No per-integration charges. No premium connector fees. If it has an API, we can connect it."
              },
              {
                title: "Zero Task Limits",
                desc: "Run 100 automations a day or 1,000,000. The infrastructure scales. Your cost doesn't change based on how much it runs.",
                details: "Real example: If your Zapier zaps run 50,000 tasks/month, you're on a ₹25,000+/month plan. Self-hosted: same workflows, ₹1,500/month in server costs."
              },
              {
                title: "Complex Business Logic",
                desc: "We build workflows that support multi-branch conditional logic, loops, error recovery with custom retry logic, data transformation, and AI-powered routing.",
                details: "Real code — not drag-and-drop with limitations. Workflows that handle your actual business complexity."
              },
              {
                title: "Error Handling & Monitoring",
                desc: "Every workflow has built-in error detection, retry logic, and failure notifications. You get an alert on Slack or WhatsApp immediately. The workflow logs the error with full context.",
                details: "Most issues are self-resolving via retry. You're never debugging a broken automation blindly."
              },
              {
                title: "Automated Report Generation",
                desc: "Pulls data from your sources on a schedule, processes it, formats it into a report (Google Sheets, PDF, or custom dashboard), and delivers it to the right people via email or Slack automatically.",
                details: "Example: Every Monday morning, your team gets a performance summary compiled automatically from Sheets, CRM, and WhatsApp."
              },
              {
                title: "Webhook Infrastructure",
                desc: "A custom webhook layer that receives events from any source (form submissions, payment confirmations, app events) and triggers multi-step workflows in real time.",
                details: "Example: Customer pays on Razorpay → webhook triggers → invoice generated → sent → sheet updated → CRM deal closed. All in under 5 seconds."
              },
              {
                title: "Custom Data Pipelines",
                desc: "Automated data flows between your tools that keep everything in sync without manual export/import.",
                details: "Example: New lead in Tally form → enriched with LinkedIn data → pushed to CRM → WhatsApp follow-up triggered → Notion task created."
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
      <section id="process-section" className="bg-bg text-dark py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">THE BUILD PROCESS</span>
            <h2 className="text-dark font-sans font-black text-3xl md:text-5xl tracking-tighter leading-tight">
              From your current mess to clean automation — in 2 weeks.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Process Audit (Days 1–3)",
                desc: "We map every repetitive process your team currently does manually or with existing automation tools. We interview operations team members, look at your current Zapier/Make workflows, and identify everything worth automating — including processes you hadn't thought to automate yet."
              },
              {
                step: "02",
                title: "Automation Blueprint (Day 3–5)",
                desc: "We build a complete map of every workflow we'll create: trigger, logic, steps, error paths, and integrations. You review and approve before we build. No surprises."
              },
              {
                step: "03",
                title: "Build & Test (Days 5–12)",
                desc: "We build each workflow, test it with real data, and stress-test edge cases — what happens when a form is submitted twice, when an API is down, when data is missing. Every workflow handles failures gracefully."
              },
              {
                step: "04",
                title: "Deploy & Train (Days 12–14)",
                desc: "We deploy everything to your server, run through each workflow with your team, document everything, and hand over admin access. You can view, modify, and add workflows yourself — or have any developer do it."
              }
            ].map((s, idx) => (
              <SectionReveal key={idx}>
                <div className="bg-accent/20 border border-white/5 rounded-2xl p-6 h-full flex flex-col justify-between space-y-6">
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
      <section className="bg-bg text-dark py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto w-full">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">DELIVERABLES</span>
            <h2 className="text-dark font-sans font-black text-3xl md:text-5xl tracking-tighter">
              What you own on delivery.
            </h2>
          </SectionReveal>

          <SectionReveal className="bg-accent/20 border border-white/5 rounded-2xl p-8 sm:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Self-hosted n8n instance on your server",
                "All workflow source code (JSON + custom code nodes)",
                "Documentation for every workflow (trigger, logic, integrations)",
                "Admin credentials to your automation dashboard",
                "Error monitoring setup (with your Slack or WhatsApp)",
                "Server configuration and deployment scripts",
                "Training on how to add and modify workflows",
                "30-day post-launch monitoring"
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
              { val: "15h+", label: "saved per employee/week" },
              { val: "99%", label: "manual data entry errors reduced" },
              { val: "Unlimited", label: "automation execution scale" },
              { val: "100%", label: "data stays in your server" },
              { val: "3–6m", label: "average break-even duration" }
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
      <section className="bg-bg text-dark py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-16 space-y-4">
            <span className="text-label text-accent font-semibold tracking-wider block">FAQ</span>
            <h2 className="text-dark font-sans font-black text-3xl md:text-5xl tracking-tighter">
              Common questions about Automation.
            </h2>
          </SectionReveal>

          <SectionReveal className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-accent/20 border border-white/5 rounded-2xl overflow-hidden"
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
                title: "AI CRM",
                desc: "Workflow automation is 10× more powerful when it's connected to a CRM that also lives on your infrastructure. One system talks to the other natively — no API calls between third-party platforms.",
                route: "/services/ai-crm"
              },
              {
                title: "WhatsApp & Call Automation",
                desc: "Workflows trigger WhatsApp messages. WhatsApp events trigger workflows. Together they create a closed loop — every business action connected to every customer touchpoint.",
                route: "/services/whatsapp-call-automation"
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
            Ready to cut your<br />automation bills for good?
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-lg font-sans">
            Tell us what you're currently automating and what tools you're paying for. We'll come back with a migration plan and show you your new monthly server cost vs what you're paying now.
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
              Start My Automation Build →
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkflowAutomation;
