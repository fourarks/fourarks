import React from 'react';
import Button from './Button';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full flex items-center overflow-hidden bg-background">
      {/* 4K Video Background Loop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10"></div> {/* Increased opacity for better text contrast against video */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-100 mix-blend-screen"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>

      {/* Dynamic Background Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accentCyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentCyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accentCyan"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-textSecondary">Accepting New Projects for 2025</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight text-white tracking-tight animate-[fadeIn_0.7s_ease-out]">
            Design that <br />
            <span className="text-transparent bg-clip-text bg-gradient-text">defines future</span> brands.
          </h1>
          
          <p className="text-lg text-textSecondary max-w-lg leading-relaxed border-l-2 border-white/10 pl-6 animate-[fadeIn_0.9s_ease-out]">
            From identity and immersive AR to growth marketing and automation — we help visionary startups and retailers dominate their market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-[fadeIn_1.1s_ease-out]">
            <Button onClick={() => window.open(COMPANY_INFO.calendlyUrl, '_blank')}>
              Start Your Project
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Expertise
            </Button>
          </div>
        </div>

        {/* Hero Visual - Transparent Graphic Style */}
        <div className="hidden lg:flex justify-center items-center h-[600px] relative animate-[fadeIn_1s_ease-out]">
            <div className="relative w-full h-full flex items-center justify-center animate-float">
                {/* 
                   Using mix-blend-screen to remove black background from the abstract image,
                   creating a "transparent" hologram effect.
                   Updated image source and removed complex masks to ensure visibility.
                */}
                <img 
                    src="./assets/hero-img-bg.png"
                    alt="Futuristic Abstract Shape"
                    className="w-full h-full object-contain rounded-3xl mix-blend-screen drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                />

                {/* Floating UI Elements that interact with the graphic */}
                <div className="absolute top-1/4 right-0 glass-card p-3 rounded-lg border border-white/10 bg-black/40 backdrop-blur-md animate-pulse-slow">
                     <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                         </div>
                         <div>
                             <div className="text-[10px] text-textSecondary uppercase tracking-wider">Performance</div>
                             <div className="text-sm font-bold text-white">+240% Growth</div>
                         </div>
                     </div>
                </div>

                <div className="absolute bottom-1/3 -left-4 glass-card p-3 rounded-lg border border-white/10 bg-black/40 backdrop-blur-md animate-pulse-slow animation-delay-1000">
                     <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-accentCyan/20 flex items-center justify-center text-accentCyan">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         </div>
                         <div>
                             <div className="text-[10px] text-textSecondary uppercase tracking-wider">Status</div>
                             <div className="text-sm font-bold text-white">Optimized</div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-pulse-slow {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;