'use client';

import type { HTMLAttributes } from 'react';
import React from 'react';
import { GradientButton as NewGradientButton } from './gradient-button';

interface GradientButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GradientButton = ({
  children,
  width = '600px',
  height = '100px',
  className = '',
  onClick,
  disabled = false,
  style,
  ...props
}: GradientButtonProps) => {
  return (
    <div className="text-[#eee] text-center">
      <NewGradientButton
        disabled={disabled}
        onClick={onClick}
        variant="chocolate"
        className={`rounded-[50px] cursor-pointer text-white font-sans font-bold flex items-center justify-center ${className}`}
        width={width}
        height={height}
        style={style}
        {...(props as any)}
      >
        <span className="relative z-10 text-[var(--color-text,#eee)] flex items-center justify-center label font-bold">
          {children}
        </span>
      </NewGradientButton>
    </div>
  );
};

export default GradientButton;
