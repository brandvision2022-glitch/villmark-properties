import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = 'https://wa.me/8801825115384?text=Hello%20Villamark%20Properties,%20I%20am%20interested%20in%20your%20luxury%20projects%20and%20landowner%20joint%20ventures.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-[#0F172A] border border-[#C59B27]/40 rounded-xl p-3 shadow-2xl max-w-xs text-xs text-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300 flex items-start gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0 animate-ping" />
          <div className="flex-1">
            <p className="font-semibold text-white">Online Concierge · Open 24h</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              WhatsApp: <strong className="text-emerald-400">+880 1825-115384</strong>
            </p>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Email: <span className="text-slate-300">villamarkproperties@gmail.com</span>
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-white p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-2xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
        title="Direct WhatsApp: +880 1825-115384"
      >
        {/* Animated pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 drop-shadow-md" />
        
        {/* Live status dot */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0B111E]" />
      </a>
    </div>
  );
};
