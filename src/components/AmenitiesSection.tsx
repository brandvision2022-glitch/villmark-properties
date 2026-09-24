import React from 'react';
import {
  Waves,
  ShieldCheck,
  Zap,
  Key,
  Dumbbell,
  Car,
  Trees,
  Sparkles
} from 'lucide-react';
import { AMENITIES_DATA } from '../data/projects';

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Key: <Key className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />
};

export const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-[#080D17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#E5B537] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Unrivaled Quality of Life
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-wide">
            Signature Amenities &amp; Engineering Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Every Villamark residence is designed with resort-grade leisure facilities, heavy structural integrity, and sustainable green engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_DATA.map((amenity, idx) => (
            <div
              key={idx}
              className="bg-[#0E1524] border border-slate-800 hover:border-[#C59B27]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 flex items-center justify-center text-[#D8A943] mb-5 group-hover:scale-110 group-hover:border-[#C59B27] transition-all">
                {iconMap[amenity.icon] || <Sparkles className="w-6 h-6" />}
              </div>
              <h3 className="text-base font-serif-luxury font-bold text-white mb-2 group-hover:text-[#FCE5A4] transition-colors">
                {amenity.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
