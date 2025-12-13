import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  const Logo = new URL('../assets/images/logo.png', import.meta.url).href;

  return (
    <footer className="bg-[#010409] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="font-heading text-3xl font-bold tracking-tight text-white">
            <img src={Logo} alt="4arks Logo" className="h-24 w-18 object-contain" />
          </a>
          <p className="text-textSecondary text-sm mt-4 max-w-xs leading-relaxed">
            Pioneering the intersection of design, technology, and automation for next-gen businesses.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-textSecondary">
            <a href="#" className="hover:text-accentCyan transition-colors">Instagram</a>
            <a href="#" className="hover:text-accentCyan transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accentCyan transition-colors">Twitter</a>
        </div>

        <div className="text-xs text-textSecondary/60 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-4 mt-3 justify-center md:justify-end">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;