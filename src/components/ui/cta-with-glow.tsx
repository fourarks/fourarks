import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
// import { Glow } from "@/components/ui/glow"
import { cn } from "@/lib/utils"

export interface CTAProps {
  title: React.ReactNode
  description?: React.ReactNode
  subtitle?: React.ReactNode
  badge?: React.ReactNode
  action: {
    text: string
    href: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "glow"
  }
  secondaryAction?: {
    text: string
    href: string
  }
  footerText?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export function CTASection({
  title,
  description,
  subtitle,
  badge,
  action,
  secondaryAction,
  footerText,
  children,
  className
}: CTAProps) {
  const isInternal = action.href.startsWith('/')

  return (
    <section className={cn("group relative overflow-hidden bg-bg text-dark py-24 sm:py-32 px-6 text-center border-dark/8", className)}>
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        {badge && (
          <span className="text-label text-accent font-semibold animate-appear block">
            {badge}
          </span>
        )}
        <h1 className="text-3xl font-serif font-bold sm:text-5xl md:text-6xl leading-tight text-dark animate-appear">
          {title}
        </h1>
        {(description || subtitle) && (
          <div className="text-text-muted text-[17px] leading-relaxed max-w-xl mx-auto font-sans animate-appear delay-100">
            {description || subtitle}
          </div>
        )}
        {children}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-appear delay-100">
          <Button
            variant={action.variant === "glow" ? "default" : (action.variant || "default")}
            size="lg"
            className="cta-button bg-dark text-bg font-sans font-bold hover:bg-dark-deep px-10 py-6 rounded-full text-base transition-all shadow-xl active:scale-95"
            asChild
          >
            {isInternal ? (
              <Link to={action.href}>{action.text}</Link>
            ) : (
              <a href={action.href}>{action.text}</a>
            )}
          </Button>

          {secondaryAction && (
            <Button
              variant="outline"
              size="lg"
              className="border-dark/20 text-dark hover:bg-dark/5 px-8 py-6 rounded-full text-base transition-all"
              asChild
            >
              {secondaryAction.href.startsWith('/') ? (
                <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
              ) : (
                <a href={secondaryAction.href}>{secondaryAction.text}</a>
              )}
            </Button>
          )}
        </div>
        {footerText && (
          <p className="text-[12px] text-text-muted/80 tracking-wide uppercase font-semibold mt-2 animate-appear delay-100">
            {footerText}
          </p>
        )}
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-90 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100 pointer-events-none flex items-center justify-center">
        <div 
          className="absolute rounded-full filter blur-[100px] opacity-20 animate-appear-zoom delay-300"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            width: '600px',
            height: '600px',
            bottom: '-300px',
          }}
        />
      </div>
    </section>
  )
}
