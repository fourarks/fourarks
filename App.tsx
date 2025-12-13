import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import ARShowcase from './components/ARShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="bg-background text-text min-h-screen selection:bg-accent selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        {/* Value Prop Section */}
        <section id="values" className="py-20 bg-surface border-y border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4 px-4">
                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent to-accentHover rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-accent/20">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white">Hyper-Visual Design</h3>
                        <p className="text-textSecondary text-sm leading-relaxed">We craft identities that don't just look good—they convert. High-impact visuals for a noisy digital world.</p>
                    </div>
                    <div className="space-y-4 px-4">
                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accentCyan to-cyan-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-accentCyan/20">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white">Growth Automation</h3>
                        <p className="text-textSecondary text-sm leading-relaxed">Stop trading time for money. We implement AI agents and CRM workflows that scale your operations 24/7.</p>
                    </div>
                    <div className="space-y-4 px-4">
                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accentPink to-pink-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-accentPink/20">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white">Immersive Tech</h3>
                        <p className="text-textSecondary text-sm leading-relaxed">WebAR, 3D product configurations, and interactive experiences that keep users engaged longer.</p>
                    </div>
                </div>
            </div>
        </section>

        <Services />
        <Features />
        <ARShowcase />
        
        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-surfaceHighlight relative">
             <div className="max-w-3xl mx-auto px-6">
                 <div className="text-center mb-16">
                     <h2 className="text-4xl font-heading font-bold text-white">Common Questions</h2>
                 </div>
                 <div className="space-y-4">
                     {/* FAQ Items */}
                     <details className="group glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 open:bg-surface/80">
                         <summary className="flex justify-between items-center font-medium text-lg text-white list-none">
                             <span>What is the typical timeline for a project?</span>
                             <span className="text-accentCyan group-open:rotate-180 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                             </span>
                         </summary>
                         <p className="mt-4 text-textSecondary text-sm leading-relaxed border-t border-white/5 pt-4">Most branding and web projects are delivered within 3-5 weeks. Complex automation and AR integrations may take 6-8 weeks depending on scope.</p>
                     </details>
                     <details className="group glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 open:bg-surface/80">
                         <summary className="flex justify-between items-center font-medium text-lg text-white list-none">
                             <span>Do you work with early-stage startups?</span>
                             <span className="text-accentCyan group-open:rotate-180 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                             </span>
                         </summary>
                         <p className="mt-4 text-textSecondary text-sm leading-relaxed border-t border-white/5 pt-4">Absolutely. We love founders. Our "Brand Launch System" is specifically engineered to get you from zero to market-ready in under a month.</p>
                     </details>
                     <details className="group glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 open:bg-surface/80">
                         <summary className="flex justify-between items-center font-medium text-lg text-white list-none">
                             <span>How does the AR integration work?</span>
                             <span className="text-accentCyan group-open:rotate-180 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                             </span>
                         </summary>
                         <p className="mt-4 text-textSecondary text-sm leading-relaxed border-t border-white/5 pt-4">We model your products in 3D and provide a simple code snippet that allows users to view them in AR directly from their mobile browser without an app.</p>
                     </details>
                 </div>
             </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;