import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, align = 'center', className = '' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;