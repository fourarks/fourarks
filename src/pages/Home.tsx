
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';
import AnimatedShaderHero from '../components/ui/AnimatedShaderHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const ModelViewer = 'model-viewer' as any;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in">
      {/* High-End Animated Shader Hero Section Reverted to Original Full-Screen Layout */}
      <AnimatedShaderHero
        trustBadge={{
          text: "Strategic Digital Architecture",
          icons: ["✨"]
        }}
        headline={{
          line1: "Engineering Absolute",
          line2: "Digital Authority."
        }}
        subtitle="FourArks architects elite brand identities and immersive augmented reality systems through a lens of structural logic and tactical precision."
        buttons={{
          primary: {
            text: "Initiate Strategy",
            onClick: () => navigate('/contact')
          },
          secondary: {
            text: "Capabilities",
            onClick: () => navigate('/services')
          }
        }}
      />

      {/* Philosophy Section with 3D Knight Model */}
      <section className="bg-offwhite text-chocolate py-32 md:py-48 px-6 border-b border-chocolate/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <ScrollReveal>
            <span className="text-ivory text-sm uppercase tracking-widest mb-6 block font-black">Strategic Positioning</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight tracking-tight">We build systems, not brochures.</h2>
            <p className="text-chocolate/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
              In a crowded market, aesthetics are baseline. Structural logic is the differentiator.
              We treat every creative choice as a tactical move to ensure defensible growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <ScrollReveal delayClass="reveal-delay-200">
                <div className="border-l-4 border-ivory pl-8">
                  <h4 className="font-serif text-3xl mb-4">The Logic</h4>
                  <p className="text-chocolate/50 text-base font-light">Calculated growth frameworks derived from market truth.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delayClass="reveal-delay-400">
                <div className="border-l-4 border-ivory pl-8">
                  <h4 className="font-serif text-3xl mb-4">The Build</h4>
                  <p className="text-chocolate/50 text-base font-light">Architectural visual systems that command instant authority.</p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative aspect-square md:aspect-video bg-chocolate border border-chocolate/10 flex items-center justify-center p-8 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 z-10 p-4 cursor-grab active:cursor-grabbing">
              <ModelViewer
                src="https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb"
                alt="Commanding Strategic Knight 3D Model"
                shadow-intensity="2"
                exposure="1.2"
                auto-rotate
                camera-controls
                camera-orbit="0deg 75deg auto"
                min-camera-orbit="auto 0deg auto"
                max-camera-orbit="auto 100deg auto"
                style={{ width: '100%', height: '100%' }}
              ></ModelViewer>
            </div>
            {/* Status indicators */}
            <div className="absolute top-6 left-6 flex space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-ivory"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-ivory/20"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-ivory/20"></div>
            </div>
            <div className="absolute bottom-8 text-[11px] uppercase tracking-[0.4em] font-black text-offwhite/20">Strategic Authority Framework v4.0</div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-ivory text-sm uppercase tracking-widest mb-4 block font-black">Core Capabilities</span>
            <h2 className="text-4xl md:text-7xl font-serif leading-tight tracking-tight text-chocolate">Elite solutions for high-intent firms.</h2>
          </div>
          <Link to="/services" className="text-sm uppercase tracking-widest text-chocolate hover:text-ivory transition-colors flex items-center font-black pb-2 border-b-2 border-chocolate/10 hover:border-ivory">
            View All Services <ArrowUpRight className="ml-2" size={18} />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-chocolate/10 border border-chocolate/10 shadow-xl overflow-hidden rounded-sm">
          {SERVICES.slice(0, 6).map((service, index) => (
            <ScrollReveal key={service.id} delayClass={index % 3 === 1 ? 'reveal-delay-200' : index % 3 === 2 ? 'reveal-delay-400' : undefined}>
              <Link to={`/services/${service.id}`} className="block bg-offwhite p-14 hover:bg-chocolate hover:text-offwhite group transition-all duration-700 relative h-full">
                <span className="text-ivory text-xs uppercase tracking-widest block mb-6 font-black">{service.category}</span>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-offwhite transition-colors">{service.title}</h3>
                <p className="text-chocolate/70 group-hover:text-offwhite/60 text-lg font-light leading-relaxed mb-10">{service.description}</p>
                <div className="h-1 w-0 group-hover:w-full bg-ivory transition-all duration-700 ease-in-out"></div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Global CTA */}
      <section className="bg-chocolate py-36 md:py-42 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FBFAF1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <ScrollReveal className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif text-offwhite mb-14 leading-tight tracking-tight">Ready to build <br /><span className="italic font-light text-ivory">extraordinary?</span></h2>
          <Link to="/contact" className="inline-block bg-ivory text-chocolate px-16 py-8 text-sm uppercase tracking-[0.4em] font-black hover:bg-offwhite hover:text-chocolate active:scale-95 transition-all shadow-2xl">
            Initiate Consultation
          </Link>
        </ScrollReveal>
      </section>

      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Home;
