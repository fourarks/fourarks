import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { OFFERS, COMPANY_INFO } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle="Investment" 
          title="Transparent Value & Pricing" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <div 
              key={offer.id} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${offer.isPopular ? 'bg-surface/50 border border-accent/30 shadow-[0_0_30px_rgba(99,102,241,0.1)]' : 'bg-surface/30 border border-white/5 hover:border-white/10'}`}
            >
              {offer.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-[10px] font-bold uppercase py-1 px-3 rounded-full tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-heading font-bold text-white mb-2">{offer.title}</h3>
              <p className="text-accentCyan text-2xl font-bold mb-6">{offer.priceRange}</p>
              
              <div className="w-full h-px bg-white/5 mb-6"></div>

              <ul className="flex-1 space-y-4 mb-8">
                {offer.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-textSecondary">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5 shrink-0 text-accent">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* <Button 
                variant={offer.isPopular ? 'primary' : 'secondary'}
                onClick={() => window.open(COMPANY_INFO.calendlyUrl, '_blank')}
                className="w-full"
              >
                Start Project
              </Button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;