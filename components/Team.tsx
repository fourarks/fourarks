import React from 'react';
import SectionHeading from './SectionHeading';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-surface relative overflow-hidden">
        {/* Abstract lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="The Minds" title="Meet the Experts" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {TEAM.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="mb-6 relative mx-auto w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 rounded-full border-2 border-accent border-dashed animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-surfaceHighlight group-hover:border-accent transition-colors duration-300 relative z-10">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
              </div>
              <h4 className="text-lg font-heading font-bold text-white">{member.name}</h4>
              <p className="text-accentCyan text-xs uppercase tracking-wide mt-1 font-bold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .animate-spin-slow { animation: spin 10s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Team;