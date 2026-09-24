import React, { useState } from 'react';
import {
  Handshake,
  CheckCircle2,
  ShieldCheck,
  Building,
  TrendingUp,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  Award,
  Sparkles,
  Facebook
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SUVASTU_VALUES } from '../data/projects';

export const JointVentureSection: React.FC = () => {
  const [landSizeKatha, setLandSizeKatha] = useState<string>('10');
  const [roadWidthFt, setRoadWidthFt] = useState<string>('40');
  const [locationSector, setLocationSector] = useState<string>('Gulshan-2');
  const [handoverExpectation, setHandoverExpectation] = useState<string>('30 Months');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [plotCondition, setPlotCondition] = useState<string>('Vacant Land');
  const [remarks, setRemarks] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Dynamic Feasibility Estimator based on Katha and Road Width
  const kathaNum = parseFloat(landSizeKatha) || 10;
  const roadNum = parseFloat(roadWidthFt) || 40;

  // Approximate FAR & stories calculation conforming to standard RAJUK building code rules
  let estimatedFloors = 'G + 9 Floors';
  let farFactor = 3.5;
  if (roadNum >= 60) {
    estimatedFloors = 'G + 18 to 22 Floors';
    farFactor = 5.2;
  } else if (roadNum >= 40) {
    estimatedFloors = 'G + 14 to 16 Floors';
    farFactor = 4.2;
  } else if (roadNum >= 30) {
    estimatedFloors = 'G + 10 Floors';
    farFactor = 3.8;
  } else {
    estimatedFloors = 'G + 7 to 8 Floors';
    farFactor = 3.2;
  }

  const estimatedTotalSft = Math.round(kathaNum * 720 * farFactor);
  const estimatedLandownerSft = Math.round(estimatedTotalSft * 0.5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D8A943', '#FFFFFF', '#0B111E', '#10B981']
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `*VILLAMARK PROPERTIES - JOINT VENTURE PROPOSAL*\n\n` +
    `Dear Management,\n` +
    `I would like to discuss a Joint Venture development for my land:\n\n` +
    `• *Landowner Name:* ${fullName || 'Valued Landowner'}\n` +
    `• *Contact Phone:* ${phone || 'N/A'}\n` +
    `• *Email:* ${email || 'N/A'}\n` +
    `• *Location / Sector:* ${locationSector}\n` +
    `• *Land Size:* ${landSizeKatha} Katha\n` +
    `• *Road Width:* ${roadWidthFt} Feet\n` +
    `• *Plot Condition:* ${plotCondition}\n` +
    `• *Handover Expectation:* ${handoverExpectation}\n` +
    (remarks ? `• *Remarks:* ${remarks}\n` : '') +
    `\nPlease contact me for a private consultation and feasibility presentation.`
  );

  const whatsappUrl = `https://wa.me/8801825115384?text=${whatsappMessage}`;

  return (
    <section id="landowners" className="py-24 bg-[#080D18] relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#E5B537] text-xs font-semibold uppercase tracking-widest mb-3">
            <Handshake className="w-3.5 h-3.5" />
            Suvastu-Heritage Landowner Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-wide">
            Transform Your Cherished Land into an Architectural Icon
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            At Villamark Properties, we treat landowner partnerships as sacred trusts. Enjoy the highest fair sharing ratio, absolute transparency in RAJUK calculations, zero financial risk, and a contractual guarantee of on-time handover.
          </p>
        </div>

        {/* 4 Pillars of Villamark Landowner Partnership */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {SUVASTU_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#0E1626]/80 border border-slate-800 hover:border-[#C59B27]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#172238] border border-slate-700/80 flex items-center justify-center text-[#D8A943] mb-4 group-hover:bg-[#C59B27] group-hover:text-slate-950 transition-colors">
                {idx === 0 && <TrendingUp className="w-5 h-5" />}
                {idx === 1 && <Clock className="w-5 h-5" />}
                {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                {idx === 3 && <Award className="w-5 h-5" />}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Grid: Interactive Feasibility & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Feasibility Calculator Preview & Direct Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#121D33] to-[#0A111F] border border-[#C59B27]/40 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8A943]/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E5B537] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Instant Feasibility Engine
                </span>
                <span className="text-[11px] text-slate-400 font-mono">DAP &amp; BNBC Rules</span>
              </div>

              <h3 className="text-xl font-serif-luxury font-bold text-white">
                Live Development Feasibility Estimate
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Dynamic projection based on your land size ({kathaNum} Katha) and frontal road access ({roadNum} Ft).
              </p>

              {/* Stat Cards */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="p-3.5 bg-[#080D18] rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Potential Stories</span>
                  <div className="text-lg font-bold text-white mt-1">{estimatedFloors}</div>
                  <span className="text-[10px] text-slate-500">Based on {roadNum} ft road</span>
                </div>

                <div className="p-3.5 bg-[#080D18] rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Est. Total Built-up</span>
                  <div className="text-lg font-bold text-[#E5B537] mt-1">
                    ~{estimatedTotalSft.toLocaleString()} <span className="text-xs font-normal">Sft</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Gross Floor Area</span>
                </div>

                <div className="col-span-2 p-3.5 bg-[#17243B] rounded-xl border border-[#C59B27]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#E5B537]">Estimated Landowner Share</span>
                    <div className="text-xl font-bold text-white mt-0.5">
                      ~{estimatedLandownerSft.toLocaleString()} Sq.Ft
                    </div>
                    <span className="text-[10px] text-slate-400">Equity apartments + dedicated car parking slots</span>
                  </div>
                  <Building className="w-8 h-8 text-[#D8A943] opacity-80" />
                </div>
              </div>

              {/* Reassurance list */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full bank guarantee &amp; upfront signing liquidity provided</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Temporary luxury accommodation allowance during construction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive legal verification and zero dispute commitment</span>
                </div>
              </div>

              {/* Direct WhatsApp Concierge Button */}
              <div className="mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                  Consult Direct on WhatsApp (+880 1825-115384)
                </a>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-[#0B1220] border border-slate-800 rounded-2xl p-5 text-xs text-slate-400 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#18233C] flex items-center justify-center text-[#D8A943] font-bold">
                    VP
                  </div>
                  <div>
                    <div className="text-white font-semibold">Land Acquisition Directorate</div>
                    <div>House #15, Road #2, Block #B (7th Floor), Banasree, Rampura</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/8801825115384"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#D8A943] hover:underline font-semibold text-xs whitespace-nowrap"
                >
                  Chat Now &rarr;
                </a>
              </div>
              <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <a href="mailto:villamarkproperties@gmail.com" className="text-slate-300 hover:text-[#D8A943]">
                  villamarkproperties@gmail.com
                </a>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/vilamarkproperties" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:underline flex items-center gap-1">
                    <Facebook className="w-3 h-3 fill-current" /> Facebook
                  </a>
                  <a href="https://www.villamarkproperties.com" target="_blank" rel="noreferrer" className="text-[#D8A943] hover:underline font-medium">
                    villamarkproperties.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enhanced Landowner Form */}
          <div className="lg:col-span-7 bg-[#0D1525] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-serif-luxury font-bold text-white">
                  Joint Venture Proposal Received
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{fullName}</strong>. Our Senior Land Acquisition Director is reviewing your plot specs ({landSizeKatha} Katha in {locationSector}) and will reach you at <strong className="text-[#E5B537]">{phone}</strong>.
                </p>

                <div className="p-4 bg-[#141F36] rounded-xl border border-slate-700 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Land Size:</span>
                    <span className="font-semibold text-white">{landSizeKatha} Katha</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Road Width:</span>
                    <span className="font-semibold text-white">{roadWidthFt} Feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-semibold text-white">{locationSector}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Handover Expectation:</span>
                    <span className="font-semibold text-white">{handoverExpectation}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send Directly to Director WhatsApp
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition"
                  >
                    Submit Another Plot
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-serif-luxury font-bold text-white tracking-wide">
                    Landowner Partnership Submission
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out your land specifications below. All submissions are treated under strict non-disclosure privacy.
                  </p>
                </div>

                {/* 4 REQUIRED CUSTOM FIELDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 1: Land Size (in Katha) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                      <span>Land Size (in Katha) *</span>
                      <span className="text-[11px] text-[#D8A943]">{kathaNum} Katha = {(kathaNum * 720).toLocaleString()} Sft</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.5"
                        min="2"
                        max="100"
                        value={landSizeKatha}
                        onChange={(e) => setLandSizeKatha(e.target.value)}
                        placeholder="e.g. 10 Katha"
                        className="w-full bg-[#080D17] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                        required
                      />
                    </div>
                    {/* Quick presets */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['5', '7.5', '10', '15', '20'].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setLandSizeKatha(preset)}
                          className={`text-[10px] px-2 py-0.5 rounded border transition ${
                            landSizeKatha === preset
                              ? 'bg-[#D8A943] text-slate-950 border-[#D8A943] font-bold'
                              : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
                          }`}
                        >
                          {preset} Katha
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field 2: Road Width (in feet) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                      <span>Road Width (in Feet) *</span>
                      <span className="text-[11px] text-[#D8A943]">Front Road Access</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="1"
                        min="10"
                        max="200"
                        value={roadWidthFt}
                        onChange={(e) => setRoadWidthFt(e.target.value)}
                        placeholder="e.g. 40 Feet"
                        className="w-full bg-[#080D17] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                        required
                      />
                    </div>
                    {/* Quick presets */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['20', '30', '40', '60', '80'].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setRoadWidthFt(preset)}
                          className={`text-[10px] px-2 py-0.5 rounded border transition ${
                            roadWidthFt === preset
                              ? 'bg-[#D8A943] text-slate-950 border-[#D8A943] font-bold'
                              : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
                          }`}
                        >
                          {preset} Ft
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field 3: Location / Sector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Location / Sector *
                    </label>
                    <input
                      type="text"
                      value={locationSector}
                      onChange={(e) => setLocationSector(e.target.value)}
                      placeholder="e.g. Gulshan-2, Banani, Baridhara, Dhanmondi, Uttara"
                      className="w-full bg-[#080D17] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                      required
                    />
                  </div>

                  {/* Field 4: Handover Expectation */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Handover Expectation *
                    </label>
                    <select
                      value={handoverExpectation}
                      onChange={(e) => setHandoverExpectation(e.target.value)}
                      className="w-full bg-[#080D17] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                    >
                      <option value="24 Months (Expedited)">24 Months (Expedited Fast-Track)</option>
                      <option value="30 Months">30 Months (Standard Luxury Timeline)</option>
                      <option value="36 Months">36 Months (High-Rise 15+ Floors)</option>
                      <option value="42 Months">42 Months (Signature 20+ Floors)</option>
                      <option value="Flexible / Mutually Agreed">Flexible / Mutually Agreed</option>
                    </select>
                  </div>
                </div>

                {/* Landowner Personal / Contact Info */}
                <div className="pt-2 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Landowner / Authorized Representative Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Engr. Kabir Ahmed"
                      className="w-full bg-[#080D17] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +880 1812-XXXXXX"
                      className="w-full bg-[#080D17] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. owner@example.com"
                      className="w-full bg-[#080D17] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Plot Current Condition
                    </label>
                    <select
                      value={plotCondition}
                      onChange={(e) => setPlotCondition(e.target.value)}
                      className="w-full bg-[#080D17] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                    >
                      <option value="Vacant Land (Ready for Immediate Piling)">Vacant Land (Ready for Immediate Piling)</option>
                      <option value="Old 1-2 Storied Building (Demolition Required)">Old 1-2 Storied Building (Demolition Required)</option>
                      <option value="Corner Plot (Dual Road Access)">Corner Plot (Dual Road Access)</option>
                      <option value="Lake-facing / Park-facing Plot">Lake-facing / Park-facing Plot</option>
                      <option value="Commercial / Mixed-Use Potential">Commercial / Mixed-Use Potential</option>
                    </select>
                  </div>
                </div>

                {/* Remarks & Expectations */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Proposed Ratio Expectations or Special Remarks
                  </label>
                  <textarea
                    rows={2}
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="e.g. Seeking 50-50 sharing ratio or sign-on advance; preferring 3,000+ sft single floor design..."
                    className="w-full bg-[#080D17] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D8A943] to-[#B37D20] text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition shadow-lg shadow-[#D8A943]/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Land Proposal for Review
                  </button>

                  <a
                    href="https://wa.me/8801825115384"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider border border-slate-700 transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    WhatsApp Hotline
                  </a>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Guaranteed confidentiality · Strictly zero third-party broker spam · Direct Director meeting within 24 hours.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
