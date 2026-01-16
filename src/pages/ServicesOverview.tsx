import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SEO from '../components/SEO';

const ServicesOverview: React.FC = () => {
  const categories = ['Creative', 'Technology', 'Growth', 'USP'];

  return (
    <div className="px-6 max-w-7xl mx-auto py-20">
      <SEO
        title="Services Overview"
        description="Explore FourArks' full spectrum of high-end digital services, including Brand Architecture, AR Visualization, and Web Engineering."
      />
      <ScrollReveal className="max-w-3xl mb-24">
        <span className="text-ivory text-xs uppercase tracking-widest font-bold block mb-4">Service Capabilities</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-8">Our Specializations</h1>
        <p className="text-xl text-chocolate/70 font-light leading-relaxed">
          FourArks provides a full spectrum of high-end digital services. From brand architecture to immersive AR experiences, our work is defined by precision and purpose.
        </p>
      </ScrollReveal>

      <div className="space-y-32">
        {categories.map((cat) => (
          <div key={cat} className="group">
            <ScrollReveal>
              <div className="flex items-center space-x-4 mb-12">
                <div className="h-px bg-chocolate/10 grow"></div>
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-ivory">{cat}</h2>
                <div className="h-px bg-chocolate/10 grow"></div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {SERVICES.filter(s => s.category === cat || (cat === 'USP' && s.id === 'ar-product-visualization')).map((service, index) => (
                <ScrollReveal key={service.id} delayClass={index % 3 === 1 ? 'reveal-delay-200' : index % 3 === 2 ? 'reveal-delay-400' : undefined}>
                  <Link to={`/services/${service.id}`} className="block border-l border-chocolate/5 pl-8 hover:border-ivory transition-all duration-500 h-full">
                    <h3 className="text-2xl font-serif mb-4 hover:text-ivory transition-colors">{service.title}</h3>
                    <p className="text-chocolate/60 font-light text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <span className="text-[10px] uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight size={14} className="ml-2" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
