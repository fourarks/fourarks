import React from 'react';
import SectionHeading from './SectionHeading';

const ARShowcase: React.FC = () => {
  // Use 'any' cast to bypass TypeScript IntrinsicElements check for custom web component
  const ModelViewer = 'model-viewer' as any;

  return (
    <section id="ar" className="py-24 bg-surfaceHighlight relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              subtitle="Immersive Tech" 
              title="Experience Products in Your Space" 
              align="left"
              className="mb-8"
            />
            <p className="text-textSecondary mb-8 text-lg">
              We bring products to life with high-fidelity AR models. Allow your customers to visualize furniture, decor, or packaging in their own environment, increasing confidence and conversion rates.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-white text-lg">WebAR Integration</h4>
                        <p className="text-textSecondary text-sm">No apps required. Works directly in Safari & Chrome.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accentCyan/10 border border-accentCyan/20 flex items-center justify-center text-accentCyan group-hover:bg-accentCyan group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-white text-lg">Photorealistic Materials</h4>
                        <p className="text-textSecondary text-sm">Accurate textures, lighting, and reflections.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative h-[500px] flex items-center justify-center group">
             {/* 
                In a real scenario, this would point to a valid .glb file.
                We use a placeholder image for the poster.
             */}
             <ModelViewer
                src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                poster="https://picsum.photos/600/600?grayscale"
                alt="A 3D model of an astronaut"
                shadow-intensity="1"
                camera-controls
                auto-rotate
                ar
                style={{ width: '100%', height: '100%' }}
             >
                <button slot="ar-button" className="absolute bottom-4 right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-black transition-colors shadow-lg">
                    View in your space
                </button>
             </ModelViewer>
             
             <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-white border border-white/10 pointer-events-none">
                Interactive 3D Demo
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ARShowcase;