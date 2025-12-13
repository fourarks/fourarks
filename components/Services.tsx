import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { SERVICES } from '../constants';
import { Service } from '../types';
import ServiceDetail from './ServiceDetail';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  const categories = ['All', 'Design', 'Automation', 'AR/3D'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle="Our Expertise" 
          title="Building the Digital Future" 
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-accent border-accent text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-105'
                  : 'bg-surfaceHighlight border-white/5 text-textSecondary hover:border-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className="group p-8 glass-card hover:bg-white/5 transition-all duration-300 rounded-2xl flex flex-col items-start gap-5 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-in-out] cursor-pointer relative"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="w-14 h-14 rounded-xl bg-surfaceHighlight border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:border-accent/30 transition-all duration-300 shadow-lg shrink-0 relative z-10">
                <span className="font-heading font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-white group-hover:text-accentCyan transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed relative z-10">
                {service.description}
              </p>
              
              <div className="mt-auto pt-2 flex items-center text-xs font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                <span>View Details</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          ))}
          {filteredServices.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center text-textSecondary py-12">
                  <p>No services found in this category.</p>
              </div>
          )}
        </div>
      </div>
      
      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetail 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Services;