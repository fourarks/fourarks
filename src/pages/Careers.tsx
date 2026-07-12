'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import SEO from '../components/SEO'
import { RoleCard, type Role } from '../components/careers/RoleCard'
import { ApplicationForm } from '../components/careers/ApplicationForm'
import { InfoPanel } from '../components/careers/InfoPanel'
import { BeamsBackground } from '../components/ui/beams-background'


// Local word-by-word RevealText animation component
const RevealText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const words = text.split(" ")
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: 'inline-block' }}
    >
      {words.map((word, idx) => {
        const isItalic = word.toLowerCase().includes("with") || word.toLowerCase().includes("us.")
        return (
          <motion.span
            key={idx}
            variants={wordVariants}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
            className={isItalic ? "italic font-normal text-[#B97A4B]" : ""}
          >
            {word}
          </motion.span>
        )
      })}
    </motion.span>
  )
}


// Local Counter component
const AnimatedCounter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState<string | number>(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.0,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (value % 1 === 0) {
            setDisplayValue(Math.floor(latest))
          } else {
            setDisplayValue(latest.toFixed(1))
          }
        }
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="font-sans font-black text-4xl sm:text-5xl text-[#B97A4B] tracking-tight">
      {typeof displayValue === 'number' ? displayValue.toLocaleString() : displayValue}{suffix}
    </span>
  )
}

// Scroll Reveal section wrapper
const SectionReveal: React.FC<{ children: React.ReactNode; className?: string; staggerChildren?: boolean }> = ({ 
  children, 
  className = "", 
  staggerChildren = false 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  }

  if (staggerChildren) {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
        data-stagger
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <motion.div variants={childVariants}>
                {child}
              </motion.div>
            )
          }
          return child
        })}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Copper Blobs Animation Component
function CopperBlobs() {
  return (
    <div className="absolute inset-y-0 right-0 w-full md:w-[45%] pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute rounded-full filter blur-[110px] opacity-35 blob-1"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          width: '450px',
          height: '450px',
          right: '5%',
          top: '15%',
        }}
      />
      <div
        className="absolute rounded-full filter blur-[120px] opacity-30 blob-2"
        style={{
          background: 'radial-gradient(circle, var(--accent-warm) 0%, transparent 70%)',
          width: '350px',
          height: '350px',
          right: '-10%',
          bottom: '20%',
        }}
      />
    </div>
  )
}

// Roles static database
const rolesData: Role[] = [
  {
    id: 'web-developer',
    title: 'Web Developer',
    badge: 'Full-time · Remote',
    stack: 'React · Next.js · TypeScript · Tailwind',
    description: "Build custom web applications and marketing sites for our clients. You'll work across the full frontend stack — from pixel-perfect UI components to Supabase integrations. We expect you to write clean, typed, production-ready code that you'd be proud to show anyone.",
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git']
  },
  {
    id: 'aiml-engineer',
    title: 'AI / ML Engineer',
    badge: 'Full-time · Remote',
    stack: 'Python · LangChain · OpenAI API · Supabase',
    description: "Build and fine-tune AI models, RAG pipelines, and LLM integrations for client products. You'll design the intelligence layer of our custom CRMs, WhatsApp agents, and workflow automation systems. Strong Python skills and hands-on LLM experience required.",
    skills: ['Python', 'LangChain', 'OpenAI/Anthropic APIs', 'Vector DBs', 'Prompt Engineering']
  },
  {
    id: 'ai-expert',
    title: 'AI Expert',
    badge: 'Consultant · Remote',
    stack: 'Strategy · Prompt Engineering · AI Tools',
    description: "Bridge the gap between what AI can do and what our clients need. You'll assess client workflows, identify automation opportunities, design AI implementation strategies, and oversee the quality of AI outputs we ship. Ideal for someone with deep applied AI knowledge who can communicate clearly with non-technical stakeholders.",
    skills: ['Applied AI', 'Prompt Engineering', 'Business Analysis', 'Communication']
  },
  {
    id: 'marketing-sponsorship',
    title: 'Marketing & Sponsorship',
    badge: 'Full-time · Remote',
    stack: 'Growth · Content · Partnerships',
    description: "Own 4ARKS's inbound marketing and sponsorship pipeline. You'll manage our content calendar, run outbound campaigns, identify partnership opportunities, and build relationships with potential sponsors and collaborators. Experience in B2B tech marketing is a strong plus.",
    skills: ['B2B Marketing', 'Content Strategy', 'Email Marketing', 'Partnership Development']
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    badge: 'Part-time · Remote',
    stack: 'Premiere Pro · After Effects · DaVinci',
    description: "Create high-quality short-form and long-form content for 4ARKS's social presence, client case studies, and educational series. You'll edit raw footage, design motion graphics, and deliver polished videos that match our premium brand aesthetic.",
    skills: ['Premiere Pro / DaVinci Resolve', 'After Effects', 'Motion Graphics', 'Short-form Content']
  },
  {
    id: 'social-media-manager',
    title: 'Social Media Manager',
    badge: 'Part-time · Remote',
    stack: 'Instagram · LinkedIn · Twitter/X',
    description: "Build and grow 4ARKS's presence across Instagram, LinkedIn, and Twitter/X. You'll create content calendars, write copy, coordinate with the video editor and design team, and track what's working. We want someone who understands B2B positioning but knows how to make it compelling online.",
    skills: ['Social Media Strategy', 'Copywriting', 'Analytics', 'Content Planning']
  }
]

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>('')

  const handleApply = (roleId: string) => {
    setSelectedRole(roleId)
    setTimeout(() => {
      document.getElementById('application-form-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleScrollToOpenings = () => {
    document.getElementById('open-positions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-[#B97A4B] selection:text-bg min-h-screen">
      <SEO
        title="Careers — Join 4ARKS"
        description="Join 4ARKS. Build custom AI software, React applications, and workflow automations that replace generic SaaS platforms. Work remote, ship fast, own your code."
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <BeamsBackground className="relative min-h-[85vh] w-full text-bg flex flex-col justify-center py-20 px-6 sm:px-12 md:px-24 overflow-hidden pt-28">
        <div className="relative z-10 max-w-container mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 flex flex-col items-start text-left space-y-6 sm:space-y-8">
            {/* Label Chip */}
            <span className="text-label text-[#B97A4B] font-extrabold tracking-widest text-xs uppercase bg-[#B97A4B]/10 px-4 py-2 rounded-full">
              Careers &middot; We're Hiring
            </span>

            {/* H1 word-reveal animation */}
            <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tighter text-white max-w-[800px]">
              <RevealText text="Build the future of business software with us." />
            </h1>

            {/* Body copy */}
            <p className="text-[#FBFAF1]/70 font-sans text-base sm:text-lg leading-relaxed max-w-[540px]">
              We don't configure tools for clients. We build the real thing. If you want to work on custom AI systems, production React apps, and automation stacks that actually replace SaaS &mdash; you're in the right place. We're a small team that ships fast, works remote, and obsesses over quality.
            </p>

            {/* Stats */}
            <div className="flex gap-12 sm:gap-16 pt-4">
              <div className="flex flex-col items-start">
                <AnimatedCounter value={6} />
                <span className="text-xs text-[#FBFAF1]/60 font-sans tracking-wide uppercase font-semibold mt-1">Open Roles</span>
              </div>
              <div className="flex flex-col items-start">
                <AnimatedCounter value={100} suffix="%" />
                <span className="text-xs text-[#FBFAF1]/60 font-sans tracking-wide uppercase font-semibold mt-1">Remote-first</span>
              </div>
            </div>

            {/* Scroll CTA */}
            <button 
              onClick={handleScrollToOpenings}
              className="group inline-flex items-center gap-2 text-white hover:text-[#B97A4B] font-sans font-bold text-sm tracking-wide pt-6 transition-colors duration-300 cursor-pointer"
            >
              See Open Roles <span className="group-hover:translate-y-1 transition-transform duration-300">&darr;</span>
            </button>
          </div>
        </div>
      </BeamsBackground>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: WHY JOIN 4ARKS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-bg text-dark py-24 sm:py-32 px-6 sm:px-12 md:px-24 border-t border-dark/5">
        <div className="max-w-container mx-auto w-full">
          <SectionReveal className="text-center md:text-left mb-16 sm:mb-20 space-y-4">
            <span className="text-label text-[#B97A4B] font-bold">Why 4ARKS</span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight leading-tight max-w-[600px]">
              Work that ships. <br />
              Team that cares.
            </h2>
          </SectionReveal>

          {/* Staggered cards */}
          <SectionReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-dark/10 p-8 sm:p-10 rounded-2xl text-left flex flex-col justify-start gap-4">
              <span className="text-3xl select-none">🔑</span>
              <h3 className="font-sans font-black text-xl text-dark">You own your work</h3>
              <p className="font-sans text-[15px] leading-relaxed text-[#2D140A]/80">
                Every project you work on goes live and replaces something a client was paying &#8377;50K+/year for. Your code is in production. Your design is on a live site. No internal tools that nobody uses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-dark/10 p-8 sm:p-10 rounded-2xl text-left flex flex-col justify-start gap-4">
              <span className="text-3xl select-none">🌍</span>
              <h3 className="font-sans font-black text-xl text-dark">Work from anywhere</h3>
              <p className="font-sans text-[15px] leading-relaxed text-[#2D140A]/80">
                No office, no fixed hours, no location requirement. We care about output, not where you're sitting. We communicate async-first with clear specs and fast reviews.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-dark/10 p-8 sm:p-10 rounded-2xl text-left flex flex-col justify-start gap-4">
              <span className="text-3xl select-none">🚀</span>
              <h3 className="font-sans font-black text-xl text-dark">Learn across disciplines</h3>
              <p className="font-sans text-[15px] leading-relaxed text-[#2D140A]/80">
                A small team means you see everything &mdash; client conversations, architecture decisions, design reviews, deployment. You'll learn more in 6 months here than 2 years at a large company.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-dark/10 p-8 sm:p-10 rounded-2xl text-left flex flex-col justify-start gap-4">
              <span className="text-3xl select-none">💸</span>
              <h3 className="font-sans font-black text-xl text-dark">Fair pay, no games</h3>
              <p className="font-sans text-[15px] leading-relaxed text-[#2D140A]/80">
                We offer competitive salaries based on skill and output, not seniority or location. Performance reviews every 6 months. Equity discussions for long-term contributors.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: OPEN ROLES
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="open-positions-section" className="bg-[#F0EFE6] text-dark py-24 sm:py-32 px-6 sm:px-12 md:px-24 border-t border-dark/5">
        <div className="max-w-container mx-auto w-full">
          <SectionReveal className="text-center md:text-left mb-16 sm:mb-20 space-y-4">
            <span className="text-label text-[#B97A4B] font-bold">Open Positions</span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight leading-tight max-w-[600px]">
              6 roles. All remote. <br />
              Apply today.
            </h2>
          </SectionReveal>

          {/* Staggered role cards grid */}
          <SectionReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rolesData.map((role) => (
              <RoleCard 
                key={role.id}
                role={role}
                onApply={handleApply}
              />
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: APPLICATION FORM
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="application-form-section" className="bg-dark text-bg py-24 sm:py-32 px-6 sm:px-12 md:px-24">
        <div className="max-w-container mx-auto w-full">
          {/* Header */}
          <div className="text-left mb-16 sm:mb-20 space-y-4">
            <span className="text-label text-[#B97A4B] font-bold">Apply Now</span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight leading-tight max-w-[600px] text-white">
              Drop your details. <br />
              We'll get back within <br />
              48 hours.
            </h2>
          </div>

          {/* Form and info panel layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            {/* Form Column (55%) */}
            <div className="lg:col-span-7 w-full">
              <ApplicationForm 
                selectedRole={selectedRole}
                onClearSelectedRole={() => setSelectedRole('')}
              />
            </div>

            {/* Info Panel Column (45%) */}
            <div className="lg:col-span-5 w-full h-full">
              <InfoPanel />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5: NO OPENINGS YET?
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#F0EFE6] text-dark py-24 sm:py-28 px-6 sm:px-12 md:px-24 text-center border-t border-dark/5">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-sans font-black tracking-tight text-[#2D140A]">
            Don't see your role?
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-[#2D140A]/80 max-w-[680px] mx-auto">
            We hire for attitude and skill, not just open slots. If you're exceptional at what you do and want to be part of a team building real AI products &mdash; send us an open application anyway. We review all of them.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => handleApply('other')}
              className="cta-button cta-button-orange px-10 py-4.5 font-sans font-bold text-base cursor-pointer select-none"
            >
              Send Open Application &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
