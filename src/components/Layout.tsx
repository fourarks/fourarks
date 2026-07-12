import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Instagram, Twitter } from 'lucide-react';
import Navbar1 from './ui/navbar-1';
const Logo = '/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-deep text-bg py-16 px-6 border-t border-dark/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-bg/10">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-sans font-black tracking-tighter text-3xl text-bg uppercase">
              <img className='w-40 mb-4' src={Logo} alt='4ARKS Logo' />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-[240px]">
              4ARKS builds custom AI software for businesses serious about owning their technology — not renting it forever.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div className="space-y-4">
            <h4 className="text-label text-accent">Services</h4>
            <ul className="space-y-2 text-[14px]">
              <li><Link to="/services/ai-crm" className="text-bg/70 hover:text-accent transition-colors">AI CRM</Link></li>
              <li><Link to="/services/whatsapp-call-automation" className="text-bg/70 hover:text-accent transition-colors">WhatsApp & Call Automation</Link></li>
              <li><Link to="/services/workflow-automation" className="text-bg/70 hover:text-accent transition-colors">Workflow Automation</Link></li>
              <li><Link to="/services/website-development" className="text-bg/70 hover:text-accent transition-colors">Website Development</Link></li>
              <li><Link to="/services/branding-design" className="text-bg/70 hover:text-accent transition-colors">Branding & Design</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="space-y-4">
            <h4 className="text-label text-accent">Company</h4>
            <ul className="space-y-2 text-[14px]">
              <li><Link to="/" className="text-bg/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-bg/70 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/pricing" className="text-bg/70 hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-bg/70 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/get-started" className="text-bg/70 hover:text-accent transition-colors">Get Started</Link></li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div className="space-y-4">
            <h4 className="text-label text-accent">Connect</h4>
            <p className="text-bg/80 text-[15px] font-sans break-all">
              fourarksofficial@gmail.com
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-bg/70 hover:text-accent transition-colors p-2 border border-bg/15 rounded-full hover:border-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/4arks__/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-bg/70 hover:text-accent transition-colors p-2 border border-bg/15 rounded-full hover:border-accent"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-bg/70 hover:text-accent transition-colors p-2 border border-bg/15 rounded-full hover:border-accent"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[12px] text-text-muted gap-4">
          <p>© 2026 4ARKS. All rights reserved. · Built with the same custom approach we offer our clients.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Pages that should NOT have top margin (full-screen hero pages)
  const noMarginPages = ['/', '/ar'];
  const shouldHaveMargin = !noMarginPages.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-bg bg-bg">
      <Navbar1 />
      <main className={`grow ${shouldHaveMargin ? '' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
