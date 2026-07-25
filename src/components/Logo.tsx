import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl md:text-4xl'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Minimalist Gift Ribbon Icon in Gold & Blush */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF0F4] to-[#FCE7F0] border border-[#D4AF37]/40 shadow-sm group-hover:scale-105 transition-transform duration-300">
        <svg viewBox="0 0 100 100" className="w-6 h-6 text-[#D4AF37]">
          <path d="M25 45 h50 v40 h-50 z" fill="#FCE7F0" stroke="#D4AF37" strokeWidth="3" />
          <path d="M46 45 v40 M54 45 v40" stroke="#D4AF37" strokeWidth="4" />
          <path d="M25 62 h50" stroke="#D4AF37" strokeWidth="4" />
          <path d="M35 35 Q40 20 50 35 Q60 20 65 35 Q50 42 35 35" fill="#E8B4B8" stroke="#D4AF37" strokeWidth="3" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping opacity-75"></span>
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>
      </div>

      {/* Elegant Serif & Script Typographic Logo */}
      <div className="flex flex-col leading-none">
        <span className={`font-serif-luxury font-bold tracking-wider text-[#2D2A26] ${sizeClasses[size]}`}>
          The Bundle <span className="font-script font-normal text-[#D4AF37] text-3xl md:text-4xl -ml-1 inline-block transform translate-y-0.5">Boutique</span>
        </span>
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#B8860B] mt-0.5">
          Harar • Ethiopia
        </span>
      </div>
    </div>
  );
};
