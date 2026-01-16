
import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Info, Calculator, FileText } from 'lucide-react';

const PricingPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 px-6 max-w-7xl mx-auto py-20">
      <div className="max-w-3xl mb-32">
        <span className="text-ivory text-xs uppercase tracking-widest font-bold block mb-4">Investment Strategy</span>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">Value-Based <br /><span className="italic">Proposals.</span></h1>
        <p className="text-xl text-chocolate/70 font-light leading-relaxed">
          FourArks does not sell hours; we deliver assets and systems that generate compounding value. Our pricing reflects the complexity and objective outcome of each project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-16">
          <div>
            <h3 className="text-3xl font-serif mb-6">Why we don't list fixed prices.</h3>
            <p className="text-chocolate/70 font-light leading-relaxed mb-6">
              Elite architectural work requires specific customization. Every brand has a different starting point, a different competitive landscape, and a different growth target.
            </p>
            <p className="text-chocolate/70 font-light leading-relaxed">
              Standardized pricing often leads to standardized results. We prefer to build a custom scope that precisely addresses your friction points.
            </p>
          </div>

          <div className="bg-chocolate/5 p-12 border-l-4 border-ivory">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 flex items-center">
              <Info size={16} className="text-ivory mr-2" /> Calculation Criteria
            </h4>
            <ul className="space-y-6">
              <li className="flex justify-between border-b border-chocolate/10 pb-4">
                <span className="text-sm font-serif">Project Complexity</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 italic">Variable</span>
              </li>
              <li className="flex justify-between border-b border-chocolate/10 pb-4">
                <span className="text-sm font-serif">Technical Infrastructure</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 italic">Standard/Custom</span>
              </li>
              <li className="flex justify-between border-b border-chocolate/10 pb-4">
                <span className="text-sm font-serif">Creative Fidelity</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 italic">Editorial/Premium</span>
              </li>
              <li className="flex justify-between border-b border-chocolate/10 pb-4">
                <span className="text-sm font-serif">Market Velocity</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 italic">Urgency Scale</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-chocolate text-offwhite p-12 md:p-20 flex flex-col justify-center">
          <h3 className="text-4xl font-serif mb-8">The Path to a Proposal</h3>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-offwhite/20 flex items-center justify-center">
                <Calculator size={20} className="text-ivory" />
              </div>
              <div>
                <h5 className="font-serif text-lg mb-2">Needs Audit</h5>
                <p className="text-sm text-offwhite/60 font-light">We begin with a high-level discussion of your objectives and current roadblocks.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-offwhite/20 flex items-center justify-center">
                <FileText size={20} className="text-ivory" />
              </div>
              <div>
                <h5 className="font-serif text-lg mb-2">Scope Blueprint</h5>
                <p className="text-sm text-offwhite/60 font-light">We deliver a detailed project manifest with fixed investment tiers for your review.</p>
              </div>
            </div>
          </div>
          <Link to="/contact" className="mt-16 bg-ivory text-offwhite py-6 text-center block text-xs uppercase tracking-widest hover:bg-offwhite hover:text-chocolate transition-all">
            Request Custom Proposal
          </Link>
        </div>
      </div>
      
      <div className="mt-40 text-center text-chocolate/30 text-[10px] uppercase tracking-[0.4em] font-bold">
        Transparency . Precision . Partnership
      </div>
    </div>
  );
};

export default PricingPage;
