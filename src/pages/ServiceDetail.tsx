import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="animate-in fade-in duration-700">
      <SEO
        title={service.title}
        description={`FourArks (4arks) - ${service.title}: ${service.description}`}
      />
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-chocolate/40 mb-12">
          <Link to="/services" className="hover:text-chocolate">Services</Link>
          <ChevronRight size={10} />
          <span className="text-chocolate font-bold">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-ivory text-xs uppercase tracking-widest font-bold block mb-4">{service.category}</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">{service.title}</h1>
            <p className="text-2xl text-chocolate/70 font-light leading-relaxed mb-12 italic">
              "{service.description}"
            </p>
            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-chocolate">The Philosophy</h4>
                <p className="text-chocolate/70 font-light leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-chocolate">Impact Factor</h4>
                <p className="text-chocolate/70 font-light leading-relaxed">
                  {service.whyItMatters}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-chocolate text-offwhite p-12 lg:sticky lg:top-40 shadow-xl border-l-4 border-ivory">
            <h3 className="text-2xl font-serif mb-8">Process Roadmap</h3>
            <div className="space-y-8">
              {service.roadmap.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-ivory font-serif text-xl opacity-50">0{idx + 1}</span>
                  <p className="text-sm font-light text-offwhite/80 mt-1">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-offwhite/10">
              <h3 className="text-2xl font-serif mb-6">Deliverables</h3>
              <ul className="grid grid-cols-1 gap-4">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center text-xs uppercase tracking-widest text-offwhite/60">
                    <Check size={14} className="text-ivory mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <Link to="/contact" className="w-full bg-ivory text-offwhite py-5 text-center block text-xs uppercase tracking-widest hover:bg-offwhite hover:text-chocolate transition-all">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="mt-32 pt-20 border-t border-chocolate/10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-ivory mb-4">Target Audience</h4>
            <p className="text-sm text-chocolate/70">{service.whoIsItFor}</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-ivory mb-4">Precision Guarantee</h4>
            <p className="text-sm text-chocolate/70">
              Every project follows our architectural delivery framework. We don’t just deliver assets; we implement systems designed for longevity, performance, and aesthetic integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
