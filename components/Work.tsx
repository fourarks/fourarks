import React from 'react';
import SectionHeading from './SectionHeading';
import { CASE_STUDIES } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Success Stories" title="Selected Case Studies" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] border border-white/5">
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-90 transition-opacity z-10 duration-300 flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Case Study</span>
                </div>
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating pill result */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-surface/90 backdrop-blur rounded-xl border border-white/10 z-20">
                  <p className="text-accentCyan text-xs font-bold uppercase tracking-wider mb-1">Result</p>
                  <p className="text-white font-medium text-sm">{study.results}</p>
                </div>
              </div>
              
              <div className="flex flex-col px-2">
                <span className="text-xs text-accent font-bold uppercase tracking-widest mb-2">{study.category}</span>
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-accentCyan transition-colors">{study.client}</h3>
                <p className="text-textSecondary text-sm mt-1">{study.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;