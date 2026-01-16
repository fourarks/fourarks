
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Robust path checking: Home and AR pages have dark hero sections
  const isDarkHeroPage = location.pathname === '/' || location.pathname === '/ar' || location.pathname === '';

  // Navbar is solid if scrolled OR if on a light-themed page
  const shouldShowSolidNavbar = isScrolled || !isDarkHeroPage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'AR Visual', path: '/ar' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const textColor = shouldShowSolidNavbar ? 'text-chocolate' : 'text-offwhite';
  const linkColor = shouldShowSolidNavbar ? 'text-chocolate/70 hover:text-ivory' : 'text-offwhite/80 hover:text-ivory';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${shouldShowSolidNavbar
        ? 'bg-offwhite/98 backdrop-blur-md py-4 shadow-xl border-b border-chocolate/5'
        : 'bg-transparent py-10'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className={`text-2xl font-serif font-black tracking-tighter transition-colors duration-500 ${textColor}`}>
            {shouldShowSolidNavbar ?
              <img className="w-12" src="../../fav_icon.png" alt="" /> :
              <img className="w-32" src="../../logo.png" alt="" />
            }
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.3em] font-extrabold transition-all duration-500 ${location.pathname === link.path ? 'text-ivory' : linkColor
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className={`${shouldShowSolidNavbar ? 'bg-chocolate text-offwhite' : 'bg-offwhite text-chocolate'
              } px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-black hover:bg-ivory hover:text-offwhite transition-all shadow-xl active:scale-95`}>
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors duration-500 ${textColor}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside nav to avoid containment issues */}
      {isOpen && (
        <div className="fixed inset-0 bg-offwhite z-[100] flex flex-col items-center justify-center space-y-10 animate-in fade-in zoom-in duration-300">
          <button
            className="absolute top-10 right-10 text-chocolate hover:text-ivory transition-colors p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={36} />
          </button>

          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-4xl font-serif text-chocolate hover:text-ivory transition-colors ${location.pathname === link.path ? 'text-ivory' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 text-3xl font-serif text-ivory font-bold border-b-2 border-ivory pb-2 hover:text-chocolate hover:border-chocolate transition-colors"
            >
              Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-chocolate text-offwhite py-24 border-t border-offwhite/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-offwhite/10 pb-20">
          <div className="md:col-span-2">
            <img className='w-32 mb-4' src='../../logo.png' alt='FourArks Logo' />
            <p className="max-w-md text-offwhite/50 text-lg leading-relaxed font-light italic">
              "Designing architectural systems for digital growth. We blend high-fidelity visualization with performance-led engineering."
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-ivory mb-8 font-black">Capabilities</h4>
            <ul className="space-y-4 text-sm text-offwhite/40">
              <li><Link to="/services/ar-product-visualization" className="hover:text-ivory transition-colors">AR Visualization</Link></li>
              <li><Link to="/services/website-design" className="hover:text-ivory transition-colors">Web Engineering</Link></li>
              <li><Link to="/services/branding-identity" className="hover:text-ivory transition-colors">Brand Identity</Link></li>
              <li><Link to="/services/seo-growth" className="hover:text-ivory transition-colors">Growth Systems</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-ivory mb-8 font-black">Company</h4>
            <ul className="space-y-4 text-sm text-offwhite/40">
              <li><Link to="/process" className="hover:text-ivory transition-colors">Process</Link></li>
              <li><Link to="/pricing" className="hover:text-ivory transition-colors">Pricing Strategy</Link></li>
              <li><Link to="/contact" className="hover:text-ivory transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] text-offwhite/30 font-bold">
          <p>© 2026 FOURARKS AGENCY. ALL RIGHTS RESERVED.</p>
          {/* <div className="flex space-x-10 mt-6 md:mt-0">
            <span className="cursor-pointer hover:text-offwhite transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-offwhite transition-colors">Terms of Service</span>
          </div> */}
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
    <div className="min-h-screen flex flex-col font-sans selection:bg-ivory selection:text-offwhite bg-offwhite">
      <Navbar />
      <main className={`flex-grow ${shouldHaveMargin ? 'mt-24' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
