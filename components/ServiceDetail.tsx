import React from 'react';
import { Service } from '../types';
import Button from './Button';
import SEO from './SEO';

interface ServiceDetailProps {
  service: Service;
  onClose: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <SEO 
        title={`${service.title} | 4ARKS Services`}
        description={service.longDescription}
        keywords={service.keywords}
      />
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-xl transition-opacity animate-[fadeIn_0.3s_ease-out]" 
        onClick={onClose}
      ></div>

      {/* Content Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)] flex flex-col md:flex-row overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 hover:bg-white/10 text-white/50 hover:text-white transition-colors backdrop-blur-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Visual Side (Left on Desktop, Top on Mobile) */}
        <div className="w-full md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-accent/20 to-accentCyan/10 relative overflow-hidden flex items-center justify-center p-8 shrink-0">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
           <div className="text-accentCyan/20 absolute -bottom-10 -left-10 w-64 h-64 rounded-full blur-3xl bg-accentCyan mix-blend-screen pointer-events-none"></div>
           
           <div className="relative z-10 text-center">
             <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center mb-6 shadow-xl">
                 <span className="text-4xl text-white font-heading font-bold">{service.title.charAt(0)}</span>
             </div>
             <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">{service.title}</h3>
             <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-bold uppercase tracking-wider text-accentCyan">
               {service.category}
             </span>
           </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-3/5 p-8 md:p-10 space-y-6 flex flex-col">
           <div>
               <h4 className="text-lg font-bold text-white mb-2">Service Overview</h4>
               <p className="text-textSecondary leading-relaxed text-sm md:text-base">
                 {service.longDescription}
               </p>
           </div>

           <div className="h-px w-full bg-white/5"></div>

           <div className="flex-1">
               <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">What's Included</h4>
               <ul className="grid grid-cols-1 gap-3">
                  {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-textSecondary text-sm">
                          <svg className="w-4 h-4 text-accent mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <span>{feature}</span>
                      </li>
                  ))}
               </ul>
           </div>

           <div className="pt-4 mt-auto">
             <Button className="w-full justify-center" onClick={() => { onClose(); window.location.href="#contact"; }}>
               Request Consultation
             </Button>
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;