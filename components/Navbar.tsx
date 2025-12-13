import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'AR', href: '#ar' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className={`max-w-7xl mx-auto px-6 ${isScrolled ? 'bg-surface/70 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl' : ''}`}>
        <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <a href="#home" className="font-heading text-2xl font-bold tracking-tight text-white flex items-center gap-1">
            <img src="../assets/images/logo.png" alt="4arks Logo" className="h-20 w-18 object-contain" />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-textSecondary hover:text-white transition-colors">
                {link.name}
                </a>
            ))}
            <a href="#contact" className="ml-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wide hover:bg-accent hover:border-accent transition-all">
                Let's Talk
            </a>
            </div>

            {/* Mobile Toggle */}
            <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-surface/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col space-y-6 shadow-2xl animate-fade-in-up">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-heading font-medium text-white hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={() => {
                window.location.href = "#contact";
                setIsMenuOpen(false);
            }}
            className="w-full"
          >
            Get a Brand Audit
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;