import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, ArrowUpRight, Globe, Clock, Facebook } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const whatsappUrl = 'https://wa.me/8801825115384';
  const facebookUrl = 'https://www.facebook.com/vilamarkproperties';

  return (
    <footer id="contact" className="bg-[#050811] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mt-3">
              Welcome to Villa Mark Properties. We specialize in premium residential villas, housing developments, and secure property investments. Built with Suvastu structural standards.
            </p>

            {/* Our Services Pills */}
            <div className="pt-1">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">Our Services:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded bg-[#0D1526] border border-slate-800 text-[11px] text-slate-300">• Luxury Villa Sales &amp; Bookings</span>
                <span className="px-2.5 py-1 rounded bg-[#0D1526] border border-slate-800 text-[11px] text-slate-300">• Residential &amp; Commercial Plots</span>
                <span className="px-2.5 py-1 rounded bg-[#0D1526] border border-slate-800 text-[11px] text-slate-300">• Property Consultation &amp; Site Tours</span>
                <span className="px-2.5 py-1 rounded bg-[#0D1526] border border-slate-800 text-[11px] text-slate-300">• Title Verification &amp; Documentation</span>
              </div>
            </div>

            {/* Social & Verification Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-slate-300">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#1877F2]/15 border border-[#1877F2]/40 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all flex items-center gap-2 font-medium"
                title="Follow Villamark Properties on Facebook"
              >
                <Facebook className="w-3.5 h-3.5 fill-current" />
                <span className="text-[11px]">Follow on Facebook</span>
              </a>

              <span className="px-3 py-1.5 rounded-md bg-[#10192A] border border-slate-800 text-[10px] font-mono text-[#D8A943] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> REHAB Member
              </span>
              <span className="px-3 py-1.5 rounded-md bg-[#10192A] border border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Open 24 Hours
              </span>
            </div>
          </div>

          {/* Col 3: Signature Enclaves */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              Prime Locations
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#projects" className="hover:text-[#FCE5A4] transition">Gulshan-2 Diplomatic Area</a></li>
              <li><a href="#projects" className="hover:text-[#FCE5A4] transition">Banani Lakefront Avenue</a></li>
              <li><a href="#projects" className="hover:text-[#FCE5A4] transition">Baridhara Park Road</a></li>
              <li><a href="#projects" className="hover:text-[#FCE5A4] transition">Banasree / Rampura Enclave</a></li>
              <li><a href="#projects" className="hover:text-[#FCE5A4] transition">Dhanmondi Heritage R/A</a></li>
            </ul>
          </div>

          {/* Col 4: Landowners & Partnerships */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              Landowner Desk
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#landowners" className="hover:text-[#FCE5A4] transition">Joint Venture Feasibility</a></li>
              <li><a href="#landowners" className="hover:text-[#FCE5A4] transition">Katha &amp; FAR Calculator</a></li>
              <li><a href="#landowners" className="hover:text-[#FCE5A4] transition">Handover Guarantee Deed</a></li>
              <li><a href="#landowners" className="hover:text-[#FCE5A4] transition">Title &amp; Deed Verification</a></li>
              <li><a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-[#D8A943] hover:underline flex items-center gap-1">Director Hotdesk <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              Head Office &amp; Contact
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8A943] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">
                  House #15, Road #2, Block #B (7th Floor), Banasree, Rampura, Dhaka-1219, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8A943] shrink-0" />
                <a href="tel:+8801825115384" className="font-mono text-slate-200 hover:text-[#D8A943] transition">
                  +880 1825-115384
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  WhatsApp: +880 1825-115384
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D8A943] shrink-0" />
                <a
                  href="mailto:villamarkproperties@gmail.com"
                  className="text-slate-200 hover:text-[#FCE5A4] hover:underline font-medium transition"
                >
                  villamarkproperties@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#D8A943] shrink-0" />
                <a
                  href="https://www.villamarkproperties.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#D8A943] hover:underline font-medium transition"
                >
                  www.villamarkproperties.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Facebook className="w-4 h-4 text-[#1877F2] shrink-0" />
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-[#1877F2] hover:underline font-medium transition"
                >
                  facebook.com/vilamarkproperties
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Villamark Properties Ltd. All Rights Reserved. (www.villamarkproperties.com)
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:villamarkproperties@gmail.com" className="hover:text-slate-300">villamarkproperties@gmail.com</a>
            <span>&middot;</span>
            <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-[#1877F2] hover:underline flex items-center gap-1">
              <Facebook className="w-3 h-3 fill-current" /> Facebook Page
            </a>
            <span>&middot;</span>
            <a href="#projects" className="hover:text-slate-300">Privacy Policy</a>
            <span>&middot;</span>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">Direct WhatsApp (+880 1825-115384)</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
