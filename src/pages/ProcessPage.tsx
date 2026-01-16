import React from 'react';
import { PROCESS_STEPS } from '../constants';
import ScrollReveal from '../components/ui/ScrollReveal';
import SEO from '../components/SEO';

const ProcessPage: React.FC = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto py-20">
      <SEO
        title="Our Method"
        description="Discover FourArks' proprietary delivery framework. We treat digital growth as a series of engineering milestones, ensuring precision and calculated execution for every project."
      />
      <ScrollReveal className="max-w-3xl mb-32">
        <span className="text-ivory text-xs uppercase tracking-widest font-bold block mb-4">Our Method</span>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">Precision in Execution.</h1>
        <p className="text-xl text-chocolate/70 font-light leading-relaxed">
          We treat growth as a series of engineering milestones. No guesswork, only calculated maneuvers through our proprietary delivery framework.
        </p>
      </ScrollReveal>

      <div className="relative">
        <div className="hidden lg:block absolute left-24 top-0 bottom-0 w-px bg-chocolate/10"></div>

        <div className="space-y-40">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={idx}>
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-3 flex items-center lg:justify-end">
                  <div className="bg-chocolate text-offwhite w-20 h-20 flex items-center justify-center font-serif text-3xl z-10 border-4 border-offwhite shadow-lg">
                    0{idx + 1}
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h3 className="text-4xl font-serif mb-6">{step.title}</h3>
                  <p className="text-xl text-chocolate/60 font-light leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                  <ScrollReveal delayClass="reveal-delay-200" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-chocolate/5">
                    <div className="text-xs text-chocolate/40 uppercase tracking-widest leading-loose">
                      <span className="font-bold block text-ivory mb-2">Intent</span>
                      Establishing foundational truth and verifying data before any construction begins.
                    </div>
                    <div className="text-xs text-chocolate/40 uppercase tracking-widest leading-loose">
                      <span className="font-bold block text-ivory mb-2">Deliverable</span>
                      Detailed project manifest, risk assessment report, and stakeholder alignment.
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal className="mt-40 bg-chocolate p-16 md:p-32 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-offwhite mb-8">Ready to see the plan for your project?</h2>
        <p className="text-offwhite/60 mb-12 max-w-xl mx-auto font-light">Every project starts with a blueprint. Let's draft yours during a consultation.</p>
        <button className="bg-ivory text-offwhite px-12 py-5 text-xs uppercase tracking-widest hover:bg-offwhite hover:text-chocolate transition-all active:scale-95">
          Request a Blueprint
        </button>
      </ScrollReveal>
    </div>
  );
};

export default ProcessPage;
