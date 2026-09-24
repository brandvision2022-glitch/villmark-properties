import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  MessageCircle,
  Maximize2,
  Bed,
  Bath,
  Compass,
  CheckCircle2,
  Building2,
  FileText,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { Project, UnitFloorPlan } from '../types';
import { generateBrochurePDF } from '../utils/brochureGenerator';

interface FloorPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const FloorPlanModal: React.FC<FloorPlanModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'blueprint' | 'breakdown' | 'specs'>('blueprint');

  // Reset selected plan when project changes
  useEffect(() => {
    setSelectedPlanIndex(0);
    setActiveTab('blueprint');
  }, [project]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const currentPlan: UnitFloorPlan =
    project.floorPlans[selectedPlanIndex] || project.floorPlans[0];

  const handleDownloadPDF = () => {
    setIsDownloading(true);
    try {
      generateBrochurePDF(project, currentPlan);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setTimeout(() => setIsDownloading(false), 800);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/8801825115384?text=${encodeURIComponent(
    `Hello Villamark Properties, I am inquiring about "${project.title}" (${currentPlan.name} - ${currentPlan.grossAreaSft} Sft). Please share pricing and availability.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0C1322] border border-[#C59B27]/40 rounded-2xl shadow-2xl shadow-black p-5 sm:p-8 my-6 text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-800 pb-5 mb-6 pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#D8A943] flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              {project.status} Luxury Development
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">{project.location}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white tracking-wide">
            {project.title} — Floor Plan & Spatial Layout
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {project.subtitle} · Road: {project.roadWidthFt} · Handover: {project.handoverDate}
          </p>

          {/* Unit Plan Tabs if multiple */}
          {project.floorPlans.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.floorPlans.map((plan, idx) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlanIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition ${
                    selectedPlanIndex === idx
                      ? 'bg-gradient-to-r from-[#D8A943] to-[#B37D20] text-slate-950 shadow-md shadow-[#D8A943]/20'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {plan.name} ({plan.grossAreaSft.toLocaleString()} Sft)
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-3.5 bg-[#141E33] border border-slate-800 rounded-xl mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-slate-400 flex items-center gap-1">
              <Maximize2 className="w-3 h-3 text-[#D8A943]" /> Gross Super Area
            </span>
            <span className="text-base sm:text-lg font-bold text-white mt-0.5">
              {currentPlan.grossAreaSft.toLocaleString()}{' '}
              <span className="text-xs font-normal text-slate-400">Sq.Ft</span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-slate-400 flex items-center gap-1">
              <FileText className="w-3 h-3 text-[#D8A943]" /> Net Carpet Area
            </span>
            <span className="text-base sm:text-lg font-bold text-emerald-400 mt-0.5">
              {currentPlan.netCarpetSft.toLocaleString()}{' '}
              <span className="text-xs font-normal text-slate-400">Sq.Ft</span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-slate-400 flex items-center gap-1">
              <Bed className="w-3 h-3 text-[#D8A943]" /> Bedrooms
            </span>
            <span className="text-base sm:text-lg font-bold text-white mt-0.5">
              {currentPlan.bedrooms} <span className="text-xs font-normal text-slate-400">En-suite</span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-slate-400 flex items-center gap-1">
              <Bath className="w-3 h-3 text-[#D8A943]" /> Bathrooms
            </span>
            <span className="text-base sm:text-lg font-bold text-white mt-0.5">
              {currentPlan.bathrooms} <span className="text-xs font-normal text-slate-400">Luxury</span>
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1 flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-slate-400 flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#D8A943]" /> Orientation
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5 truncate">
              {currentPlan.facing.split(' ')[0]} Facing
            </span>
          </div>
        </div>

        {/* View Toggle (Blueprint 2D / Table Breakdown / Specifications) */}
        <div className="flex border-b border-slate-800 mb-5">
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`pb-2.5 px-4 text-xs font-bold uppercase tracking-wider transition border-b-2 flex items-center gap-2 ${
              activeTab === 'blueprint'
                ? 'border-[#D8A943] text-[#D8A943]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Interactive 2D Blueprint
          </button>
          <button
            onClick={() => setActiveTab('breakdown')}
            className={`pb-2.5 px-4 text-xs font-bold uppercase tracking-wider transition border-b-2 flex items-center gap-2 ${
              activeTab === 'breakdown'
                ? 'border-[#D8A943] text-[#D8A943]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Area Breakdown Table
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-2.5 px-4 text-xs font-bold uppercase tracking-wider transition border-b-2 flex items-center gap-2 ${
              activeTab === 'specs'
                ? 'border-[#D8A943] text-[#D8A943]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Specifications & Finish
          </button>
        </div>

        {/* TAB 1: INTERACTIVE BLUEPRINT */}
        {activeTab === 'blueprint' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#D8A943]" /> Hover or tap any room on the architectural layout to view dimensions.
              </span>
              {hoveredRoom && (
                <span className="text-[#D8A943] font-semibold bg-[#D8A943]/10 px-2.5 py-0.5 rounded-full border border-[#D8A943]/30 animate-in fade-in">
                  Selected: {hoveredRoom}
                </span>
              )}
            </div>

            {/* Architectural Blueprint Vector Graphic */}
            <div className="relative w-full bg-[#080E1A] border border-[#1E293B] rounded-xl p-3 sm:p-5 overflow-hidden">
              {/* Subtle Blueprint Grid Pattern */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <svg
                viewBox="0 0 900 520"
                className="w-full h-auto drop-shadow-lg relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Exterior Boundary Walls */}
                <rect
                  x="40"
                  y="30"
                  width="820"
                  height="460"
                  rx="6"
                  stroke="#38BDF8"
                  strokeWidth="4"
                  fill="#0B132B"
                  fillOpacity="0.8"
                />

                {/* Main Entrance Foyer */}
                <g
                  onMouseEnter={() => setHoveredRoom("Entry Foyer & Lobby (140 Sft)")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <rect x="40" y="210" width="120" height="110" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
                  <text x="100" y="260" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">MAIN FOYER</text>
                  <text x="100" y="278" textAnchor="middle" fill="#38BDF8" fontSize="9">Entry Door / Lock</text>
                </g>

                {/* Grand Formal Living & Dining */}
                <g
                  onMouseEnter={() => setHoveredRoom("Formal Living & Dining Room (522 Sft - 28'6\" × 18'4\")")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <rect x="160" y="30" width="370" height="290" fill="#172554" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="2" />
                  {/* Dining Sub-Area */}
                  <rect x="180" y="55" width="140" height="120" rx="4" stroke="#60A5FA" strokeDasharray="3 3" fill="none" />
                  <text x="250" y="115" textAnchor="middle" fill="#E2E8F0" fontSize="13" fontWeight="bold">FORMAL DINING</text>
                  <text x="250" y="133" textAnchor="middle" fill="#93C5FD" fontSize="10">8-Seater Setup</text>

                  {/* Living Salon */}
                  <rect x="340" y="55" width="170" height="245" rx="4" stroke="#60A5FA" strokeDasharray="3 3" fill="none" />
                  <text x="425" y="170" textAnchor="middle" fill="#F8FAFC" fontSize="15" fontWeight="bold">GRAND LIVING SALON</text>
                  <text x="425" y="190" textAnchor="middle" fill="#CBD5E1" fontSize="11">28&apos; 6&quot; × 18&apos; 4&quot; · Double Height Glass</text>
                </g>

                {/* Living Lakeview Verandah */}
                <g
                  onMouseEnter={() => setHoveredRoom("Main Sunset Terrace / Verandah (150 Sft)")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <rect x="160" y="320" width="370" height="60" fill="#064E3B" fillOpacity="0.35" stroke="#10B981" strokeWidth="2" />
                  <text x="345" y="355" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="600">DEEP OUTDOOR VERANDAH (LAKEVIEW)</text>
                </g>

                {/* Kitchen & Pantry */}
                <g
                  onMouseEnter={() => setHoveredRoom("Gourmet Kitchen & Dry Store (180 Sft - 15'0\" × 12'0\")")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <rect x="40" y="30" width="120" height="180" fill="#312E81" fillOpacity="0.35" stroke="#818CF8" strokeWidth="2" />
                  <text x="100" y="115" textAnchor="middle" fill="#C7D2FE" fontSize="11" fontWeight="bold">GOURMET</text>
                  <text x="100" y="130" textAnchor="middle" fill="#C7D2FE" fontSize="11" fontWeight="bold">KITCHEN</text>
                  <text x="100" y="150" textAnchor="middle" fill="#A5B4FC" fontSize="9">Island & Hood</text>
                </g>

                {/* Maid Quarter & Utility */}
                <g
                  onMouseEnter={() => setHoveredRoom("Maid Suite & Washing Utility (106 Sft)")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <rect x="40" y="320" width="120" height="170" fill="#1E1E2F" stroke="#64748B" strokeWidth="2" />
                  <text x="100" y="395" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="600">STAFF SUITE</text>
                  <text x="100" y="412" textAnchor="middle" fill="#64748B" fontSize="9">&amp; Utility Balcony</text>
                </g>

                {/* Family Lounge (Center) */}
                <g
                  onMouseEnter={() => setHoveredRoom("Family TV Lounge (226 Sft - 16'2\" × 14'0\")")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <rect x="160" y="380" width="370" height="110" fill="#1E293B" fillOpacity="0.8" stroke="#38BDF8" strokeWidth="2" />
                  <text x="345" y="435" textAnchor="middle" fill="#F1F5F9" fontSize="13" fontWeight="bold">FAMILY TV LOUNGE</text>
                  <text x="345" y="455" textAnchor="middle" fill="#94A3B8" fontSize="10">Private Gathering Space</text>
                </g>

                {/* Master Bedroom Presidential Suite */}
                <g
                  onMouseEnter={() => setHoveredRoom("Master Bedroom Suite (333 Sft - 20'0\" × 16'8\")")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <rect x="530" y="30" width="330" height="230" fill="#451A03" fillOpacity="0.3" stroke="#D97706" strokeWidth="2.5" />
                  <text x="695" y="110" textAnchor="middle" fill="#FDE68A" fontSize="14" fontWeight="bold">MASTER BEDROOM SUITE</text>
                  <text x="695" y="130" textAnchor="middle" fill="#F59E0B" fontSize="10">20&apos; 0&quot; × 16&apos; 8&quot; · South Breeze</text>
                  {/* Master Bath and Walk-in closet */}
                  <rect x="690" y="150" width="160" height="100" rx="3" fill="#18181B" stroke="#D97706" strokeDasharray="3 3" />
                  <text x="770" y="200" textAnchor="middle" fill="#FCD34D" fontSize="10" fontWeight="600">WALK-IN &amp; SPA BATH</text>
                  <text x="770" y="218" textAnchor="middle" fill="#A1A1AA" fontSize="8">Jacuzzi &amp; Rain Shower</text>
                </g>

                {/* Master Balcony */}
                <g
                  onMouseEnter={() => setHoveredRoom("Master Verandah (90 Sft)")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer"
                >
                  <rect x="530" y="30" width="40" height="230" fill="#064E3B" fillOpacity="0.4" stroke="#10B981" strokeWidth="1.5" />
                  <text x="550" y="150" textAnchor="middle" fill="#34D399" fontSize="9" transform="rotate(-90 550 150)">MASTER VERANDAH</text>
                </g>

                {/* Bedroom 2 (En-suite) */}
                <g
                  onMouseEnter={() => setHoveredRoom("Bedroom 2 (245 Sft - 16'4\" × 15'0\")")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <rect x="530" y="260" width="165" height="170" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                  <text x="612" y="335" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontWeight="bold">BEDROOM 2</text>
                  <text x="612" y="355" textAnchor="middle" fill="#94A3B8" fontSize="9">16&apos; 4&quot; × 15&apos; 0&quot;</text>
                  <text x="612" y="375" textAnchor="middle" fill="#38BDF8" fontSize="8">En-suite Bathroom Attached</text>
                </g>

                {/* Bedroom 3 (En-suite) */}
                <g
                  onMouseEnter={() => setHoveredRoom("Bedroom 3 (220 Sft - 15'6\" × 14'2\")")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer transition-all hover:opacity-90"
                >
                  <rect x="695" y="260" width="165" height="170" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                  <text x="777" y="335" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontWeight="bold">BEDROOM 3</text>
                  <text x="777" y="355" textAnchor="middle" fill="#94A3B8" fontSize="9">15&apos; 6&quot; × 14&apos; 2&quot;</text>
                  <text x="777" y="375" textAnchor="middle" fill="#38BDF8" fontSize="8">En-suite Bathroom Attached</text>
                </g>

                {/* Bedroom Balconies at bottom */}
                <g
                  onMouseEnter={() => setHoveredRoom("Private Bed 2 & 3 Balconies (140 Sft)")}
                  onMouseLeave={() => setHoveredRoom(null)}
                  className="cursor-pointer"
                >
                  <rect x="530" y="430" width="330" height="60" fill="#064E3B" fillOpacity="0.35" stroke="#10B981" strokeWidth="1.5" />
                  <text x="695" y="465" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="600">BEDROOM 2 &amp; 3 ATTACHED GREEN BALCONIES</text>
                </g>

                {/* North Compass Symbol in corner */}
                <g transform="translate(810, 50)">
                  <circle cx="20" cy="20" r="16" stroke="#C59B27" strokeWidth="1.5" fill="#0B132B" />
                  <path d="M20 7 L25 20 L20 17 L15 20 Z" fill="#EAB308" />
                  <path d="M20 33 L25 20 L20 23 L15 20 Z" fill="#64748B" />
                  <text x="20" y="4" textAnchor="middle" fill="#FDE68A" fontSize="9" fontWeight="bold">N</text>
                </g>
              </svg>
            </div>
          </div>
        )}

        {/* TAB 2: SQUARE FOOTAGE BREAKDOWN TABLE */}
        {activeTab === 'breakdown' && (
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#162035] text-slate-200 uppercase font-semibold border-b border-slate-800 tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Space / Room Description</th>
                    <th className="py-3 px-4">Clear Dimensions</th>
                    <th className="py-3 px-4 text-right">Floor Area (Sq.Ft)</th>
                    <th className="py-3 px-4 text-center">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-[#0E1626]">
                  {currentPlan.breakdown.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 px-4 font-medium text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D8A943]"></span>
                        {item.name}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-400">{item.dimension}</td>
                      <td className="py-3 px-4 text-right font-bold text-slate-100">{item.areaSft} Sft</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                          item.category === 'living'
                            ? 'bg-blue-950 text-blue-300 border border-blue-800/50'
                            : item.category === 'bedroom'
                            ? 'bg-amber-950 text-amber-300 border border-amber-800/50'
                            : item.category === 'balcony'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/50'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {item.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {/* Common Area Row */}
                  <tr className="bg-amber-950/20 text-[#E5B537] border-t-2 border-[#D8A943]/30">
                    <td className="py-3 px-4 font-medium italic">
                      Common Facilities, Grand Foyer, Service Shafts &amp; Core
                    </td>
                    <td className="py-3 px-4 font-mono text-xs">Standard Pro-rata</td>
                    <td className="py-3 px-4 text-right font-bold">
                      {currentPlan.grossAreaSft - currentPlan.breakdown.reduce((acc, r) => acc + r.areaSft, 0)} Sft
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-[10px] uppercase font-bold text-[#E5B537]">Common</span>
                    </td>
                  </tr>
                  {/* Total Row */}
                  <tr className="bg-[#172238] text-white font-bold text-sm">
                    <td className="py-3.5 px-4 uppercase tracking-wider">Total Apartment Super Area</td>
                    <td className="py-3.5 px-4 font-mono text-xs text-slate-400">100% Comprehensive</td>
                    <td className="py-3.5 px-4 text-right text-lg text-[#E5B537]">
                      {currentPlan.grossAreaSft.toLocaleString()} Sft
                    </td>
                    <td className="py-3.5 px-4 text-center text-xs text-emerald-400 font-normal">
                      Net Carpet: {currentPlan.netCarpetSft.toLocaleString()} Sft
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: SPECIFICATIONS */}
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#121B2E] border border-slate-800 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8A943] flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Architectural &amp; Interior Fittings
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Flooring:</strong> Imported mirror-finish Italian marble in living &amp; dining; rustic imported tiles in balconies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sanitary:</strong> German Grohe thermostatic shower mixers and wall-hung concealed Kohler water closets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Woodwork:</strong> Seasoned Chittagong / Burma Teak solid decorative main entrance door with smart biometric lock.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ceiling Height:</strong> Generous 10.8 to 11.5 feet clear volume for unmatched air circulation and grandeur.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#121B2E] border border-slate-800 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8A943] flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Structural &amp; Engineering Safety
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Seismic Code:</strong> Engineered to withstand zone 2/3 earthquakes conforming to BNBC 2020 &amp; ACI 318.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Power Backup:</strong> 100% full electricity coverage (including all air-conditioners &amp; refrigerators) with dual European generators.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Elevator:</strong> Dual European high-speed passenger elevators (Schindler / OTIS) with ARD automatic rescue device.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Water Supply:</strong> Central multi-stage water filtration and dedicated underground/overhead RCC water reservoirs.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Modal Footer CTAs */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Direct Sales &amp; VIP Site Tours Open Daily (10:00 AM – 7:00 PM)
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Download E-Brochure PDF button */}
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider border border-slate-700 hover:border-slate-500 transition flex items-center justify-center gap-2 group shadow-md"
            >
              <Download className={`w-4 h-4 text-[#D8A943] transition-transform group-hover:-translate-y-0.5 ${isDownloading ? 'animate-bounce' : ''}`} />
              {isDownloading ? 'Generating PDF...' : 'Download E-Brochure (PDF)'}
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 group active:scale-95"
            >
              <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
              Inquire on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
