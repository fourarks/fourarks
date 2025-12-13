import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background rounded-full tracking-wide";
  
  const variants = {
    primary: "bg-gradient-primary text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-105 border border-transparent",
    secondary: "bg-surfaceHighlight text-white hover:bg-surface border border-white/10 hover:border-accent/50",
    outline: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
    ghost: "text-textSecondary hover:text-white hover:bg-white/5"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;