import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* 3D Gold Rooftop Emblem based on uploaded image */}
      <div className={`relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
        isSm ? 'w-9 h-9' : isLg ? 'w-14 h-14' : 'w-11 h-11'
      }`}>
        <svg
          viewBox="0 0 120 100"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(217,175,70,0.45)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldRoofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9E29D" />
              <stop offset="35%" stopColor="#D8A943" />
              <stop offset="70%" stopColor="#C48E2B" />
              <stop offset="100%" stopColor="#F3DC94" />
            </linearGradient>
            <linearGradient id="goldGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B37D20" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Roof Ridge & Chimney Silhouette */}
          <path
            d="M8 68 L34 68 L48 45 L52 45 L52 50 L60 36 L102 68 L112 68"
            stroke="url(#goldRoofGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Main Gabled Peak */}
          <path
            d="M26 66 L60 30 L94 66"
            stroke="url(#goldRoofGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 4-Pane Architectural Grid Window */}
          <rect x="52" y="47" width="7" height="7" rx="1" fill="url(#goldRoofGrad)" />
          <rect x="61" y="47" width="7" height="7" rx="1" fill="url(#goldRoofGrad)" />
          <rect x="52" y="56" width="7" height="7" rx="1" fill="url(#goldRoofGrad)" />
          <rect x="61" y="56" width="7" height="7" rx="1" fill="url(#goldRoofGrad)" />

          {/* Subtle Foundation accent line */}
          <line x1="15" y1="78" x2="105" y2="78" stroke="url(#goldRoofGrad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Diamond star on right */}
          <path d="M107 78 L109 75 L111 78 L109 81 Z" fill="#FEE5A5" />
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 tracking-[0.14em] font-serif-luxury uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FCE5A4] via-[#DEAC44] to-[#FCE5A4] leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          <span className={`${isSm ? 'text-lg' : isLg ? 'text-2xl' : 'text-xl'}`}>
            VILLA MARK
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1 mt-0.5">
            <span className="h-[1px] w-3 bg-gradient-to-r from-transparent via-[#C69234] to-transparent"></span>
            <span className={`tracking-[0.28em] uppercase font-semibold text-[#D4AF37] ${isSm ? 'text-[9px]' : 'text-[10px]'}`}>
              PROPERTIES
            </span>
            <span className="h-[1px] w-3 bg-gradient-to-r from-transparent via-[#C69234] to-transparent"></span>
          </div>
        )}
      </div>
    </div>
  );
};
