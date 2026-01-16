import React, { useState } from 'react';
import { Smartphone, Eye, Maximize, MousePointer2, Move, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ui/ScrollReveal';
import SEO from '../components/SEO';

const ModelViewer = 'model-viewer' as any;

const ARPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="AR Visualization"
        description="Experience the future of brand engagement with FourArks' AR Visual Systems. We build immersive, high-fidelity augmented reality experiences for high-end products."
      />
      <section className="bg-chocolate text-offwhite py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal className="relative z-10">
            <span className="text-ivory text-xs uppercase tracking-widest font-bold block mb-4">Core Technology</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">Spatial Reality.</h1>
            <p className="text-xl text-offwhite/70 font-light leading-relaxed mb-10 max-w-xl">
              Moving products from the screen to the physical environment. Our AR systems increase buyer confidence by over 300%.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-ivory/10 border border-ivory/30 p-4 flex items-center space-x-3">
                <Smartphone className="text-ivory" size={20} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Native WebAR</span>
              </div>
              <div className="bg-ivory/10 border border-ivory/30 p-4 flex items-center space-x-3">
                <Maximize className="text-ivory" size={20} />
                <span className="text-[10px] uppercase tracking-widest font-bold">1:1 Precision</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative aspect-square md:aspect-4/5 bg-ivory/5 border border-ivory/20 group cursor-grab active:cursor-grabbing overflow-hidden shadow-2xl">
            <ModelViewer
              src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
              alt="A high-fidelity 3D astronaut model for AR demonstration"
              shadow-intensity="1"
              camera-controls
              auto-rotate
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-orbit="0deg 75deg auto"
              field-of-view="30deg"
              interaction-prompt="auto"
              style={{ width: '100%', height: '100%' }}
            >
              <div className="absolute bottom-6 left-6 flex items-center space-x-3 opacity-40 group-hover:opacity-100 transition-opacity">
                <MousePointer2 size={16} className="text-ivory" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-ivory">Drag to rotate</span>
              </div>
            </ModelViewer>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-chocolate to-transparent pointer-events-none"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <ScrollReveal>
            <div className="w-16 h-16 border border-ivory flex items-center justify-center mb-8 text-ivory">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Visual Truth</h3>
            <p className="text-chocolate/70 font-light leading-relaxed text-sm">
              We capture textures, lighting, and scale with architectural precision, ensuring the digital twin is indistinguishable from the physical object.
            </p>
          </ScrollReveal>
          <ScrollReveal delayClass="reveal-delay-200">
            <div className="w-16 h-16 border border-ivory flex items-center justify-center mb-8 text-ivory">
              <Smartphone size={24} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Zero Friction</h3>
            <p className="text-chocolate/70 font-light leading-relaxed text-sm">
              Our WebAR solutions work directly in any mobile browser. No downloads, no barriers, no drop-offs in the sales funnel.
            </p>
          </ScrollReveal>
          <ScrollReveal delayClass="reveal-delay-400">
            <div className="w-16 h-16 border border-ivory flex items-center justify-center mb-8 text-ivory">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Integrated Logic</h3>
            <p className="text-chocolate/70 font-light leading-relaxed text-sm">
              We don’t just build models; we build sales tools. Our AR experiences integrate with your existing e-commerce and CRM platforms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Showcase Gallery */}
      <section className="bg-offwhite py-32 border-y border-chocolate/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <span className="text-ivory text-xs uppercase tracking-widest font-bold block mb-4">Live Demonstrations</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight text-chocolate">Interactive Assets</h2>
            <div className="h-1 w-20 bg-ivory mx-auto"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal className="group bg-white border border-chocolate/5 p-8 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
              <div className="aspect-square bg-offwhite mb-8 relative cursor-grab active:cursor-grabbing overflow-hidden border border-chocolate/5">
                {/* Tooltip Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="bg-ivory text-offwhite px-4 py-2 text-[10px] uppercase font-black tracking-[0.3em] whitespace-nowrap shadow-2xl">
                    Luxury Chair // V_01
                  </div>
                </div>

                <ModelViewer
                  src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/SheenChair/glTF-Binary/SheenChair.glb"
                  alt="A high-fidelity luxury chair model"
                  shadow-intensity="1"
                  camera-controls
                  touch-action="pan-y"
                  className="transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  style={{ width: '100%', height: '100%' }}
                ></ModelViewer>
                <div className="absolute top-4 right-4 bg-chocolate text-offwhite px-4 py-2 text-[10px] uppercase font-bold tracking-widest z-20">Luxury Sector</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-2xl font-serif mb-2 text-chocolate">Spatial Furniture</h4>
                  <p className="text-chocolate/50 font-light text-sm max-w-xs italic leading-relaxed">
                    Perfect for interior designers verifying fit and material finish in real-time environments.
                  </p>
                </div>
                <div className="text-ivory">
                  <Move size={20} />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="reveal-delay-200" className="group bg-white border border-chocolate/5 p-8 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
              <div className="aspect-square bg-offwhite mb-8 relative cursor-grab active:cursor-grabbing overflow-hidden border border-chocolate/5">
                {/* Tooltip Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="bg-ivory text-offwhite px-4 py-2 text-[10px] uppercase font-black tracking-[0.3em] whitespace-nowrap shadow-2xl">
                    Space Suit // V_09
                  </div>
                </div>

                <ModelViewer
                  src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
                  alt="Neil Armstrong's Space Suit"
                  shadow-intensity="1"
                  camera-controls
                  touch-action="pan-y"
                  className="transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  style={{ width: '100%', height: '100%' }}
                ></ModelViewer>
                <div className="absolute top-4 right-4 bg-chocolate text-offwhite px-4 py-2 text-[10px] uppercase font-bold tracking-widest z-20">Heritage & Tech</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-2xl font-serif mb-2 text-chocolate">Complex Hardware</h4>
                  <p className="text-chocolate/50 font-light text-sm max-w-xs italic leading-relaxed">
                    Explain complex technical layers through exploded-view AR visualizations and depth mapping.
                  </p>
                </div>
                <div className="text-ivory">
                  <Move size={20} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-40 text-center px-6 relative overflow-hidden bg-chocolate text-offwhite">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FBFAF1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <ScrollReveal className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Architecture of <br /><span className="text-ivory italic">the Future.</span></h2>
          <p className="text-offwhite/60 mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Every product we build is an interactive story. Contact us to receive a custom feasibility report for your asset library.
          </p>
          <Link to="/contact" className="inline-block bg-ivory text-chocolate px-16 py-6 text-xs uppercase tracking-[0.4em] font-black hover:bg-offwhite transition-all shadow-2xl active:scale-95">
            Initiate Deployment
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ARPage;
