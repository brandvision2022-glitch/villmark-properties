import React from 'react';
import { ArrowRight, MessageCircle, Shield, Award, Sparkles, Building, Image as ImageIcon } from 'lucide-react';
import { ImageLinksConfig } from '../types';

interface HeroProps {
  images: ImageLinksConfig;
  onOpenImageManager: () => void;
}

export const Hero: React.FC<HeroProps> = ({ images, onOpenImageManager }) => {
  const whatsappUrl = 'https://wa.me/8801825115384?text=Hello%20Villamark%20Properties,%20I%20would%20like%20to%20learn%20more%20about%20your%20luxury%20residences%20and%20landowner%20opportunities.';

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#070B14]">
      {/* Background Image with Fallback & Rich Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.heroBanner}
          alt="Villamark Properties Luxury Architectural Facade"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in duration-1000"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85';
          }}
        />
        {/* Layered deep navy scrim for maximum readability and luxury ambiance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/75 to-[#070B14]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-[#070B14]/70" />
      </div>

      {/* Decorative Golden Accent Lines */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
        
        {/* Elite Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2642]/80 backdrop-blur-md border border-[#C59B27]/40 text-[#FCE5A4] text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-lg shadow-black/40">
          <Sparkles className="w-3.5 h-3.5 text-[#D8A943]" />
          <span>Suvastu Heritage &middot; Dhaka&apos;s Signature Addresses</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-bold text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-2xl">
          Architecture For Life, Built With{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCE5A4] via-[#DEAC44] to-[#FCE5A4]">
            Uncompromising
          </span>{' '}
          Excellence.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed drop-shadow">
          Creating generational luxury residences in Gulshan, Banani, and Baridhara. Offering landowners the most equitable joint venture partnerships with guaranteed on-time handover.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D8A943] via-[#C48E2B] to-[#B37D20] text-slate-950 text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#D8A943]/20 flex items-center justify-center gap-2 group"
          >
            <span>Explore Signature Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#landowners"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 text-xs font-bold uppercase tracking-widest border border-slate-700 hover:border-[#C59B27]/50 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Building className="w-4 h-4 text-[#D8A943]" />
            <span>Landowner Joint Venture</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-800/90 text-emerald-300 hover:text-white text-xs font-bold uppercase tracking-widest border border-emerald-500/40 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

        {/* Key Real Estate Heritage Stats */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#FCE5A4]">
              28+ Years
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Pioneering Heritage
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
              45+ Landmarks
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Delivered Across Dhaka
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-emerald-400">
              100% On-Time
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Contractual Handover Rate
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#FCE5A4]">
              4.8M+ Sft
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Developed &amp; In-Hand
            </div>
          </div>
        </div>

        {/* Quick Canva Link button at bottom right of hero */}
        <div className="mt-8">
          <button
            onClick={onOpenImageManager}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 hover:border-slate-600 text-[11px] text-slate-400 hover:text-[#D8A943] transition"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#D8A943]" />
            <span>Want to replace Hero or Project images with your Canva links? Click here.</span>
          </button>
        </div>

      </div>
    </section>
  );
};
