import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Compass, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B111E] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Architecture Montage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C59B27]/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
                alt="Villamark Architecture & Interior"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0C1322]/90 backdrop-blur-md rounded-xl border border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#D8A943] text-slate-950 font-bold flex items-center justify-center font-serif-luxury text-xl">
                    VP
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Suvastu Construction Philosophy</h4>
                    <p className="text-xs text-slate-400">Zero Structural Compromise · Fair Landowner Equity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="hidden sm:block absolute -top-6 -right-6 p-4 bg-gradient-to-br from-[#D8A943] to-[#B37D20] text-slate-950 rounded-2xl shadow-xl font-serif-luxury">
              <div className="text-3xl font-bold">28+</div>
              <div className="text-[10px] uppercase font-bold tracking-wider">Years of Trust</div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#E5B537] text-xs font-semibold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              Corporate Profile &amp; Legacy
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-wide">
              Crafting Living Monuments That Endure Generations
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Villamark Properties is an esteemed luxury real estate development conglomerate based in Dhaka. Structured around the renowned engineering pedigree of Suvastu Properties, we have redefined upscale urban habitation across Gulshan, Banani, and Baridhara.
            </p>

            <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D8A943] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Strict RAJUK &amp; DAP Compliance:</strong> Every development undergoes rigorous setback verification, soil testing, and seismic simulation prior to groundbreaking.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D8A943] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Reputable Architect Collaboration:</strong> We partner exclusively with the nation&apos;s most celebrated architects to deliver unique, non-repetitive silhouettes.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D8A943] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Direct Landowner Concierge:</strong> Transparent profit margins and open-book legal accounting ensure our landowners become lifelong brand ambassadors.
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#landowners"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D8A943] to-[#B37D20] text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 transition shadow-md"
              >
                Partner With Us
              </a>
              <a
                href="https://wa.me/8801825115384"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold uppercase tracking-wider border border-slate-700 transition"
              >
                Direct WhatsApp Inquiries
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
