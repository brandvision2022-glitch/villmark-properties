import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Calendar,
  Maximize,
  ArrowUpRight,
  MessageCircle,
  Eye,
  Sparkles,
  Layers
} from 'lucide-react';
import { Project, ImageLinksConfig } from '../types';
import { PROJECTS_DATA } from '../data/projects';

interface ProjectsSectionProps {
  images: ImageLinksConfig;
  onSelectProjectForFloorPlan: (project: Project) => void;
  onOpenImageManager: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  images,
  onSelectProjectForFloorPlan,
  onOpenImageManager,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Ongoing' | 'Upcoming' | 'Completed'>('All');

  // Map custom images dynamically to corresponding projects
  const projectsWithCustomImages = PROJECTS_DATA.map((p) => {
    let activeImg = p.imageUrl;
    if (p.id === 'serenity-tower' && images.serenityTower) {
      activeImg = images.serenityTower;
    } else if (p.id === 'lakecrest' && images.lakecrest) {
      activeImg = images.lakecrest;
    } else if (p.id === 'flora-vista' && images.floraVista) {
      activeImg = images.floraVista;
    }
    return { ...p, imageUrl: activeImg };
  });

  const filteredProjects = activeFilter === 'All'
    ? projectsWithCustomImages
    : projectsWithCustomImages.filter((p) => p.status === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#0B111E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#E5B537] text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Suvastu Architectural Lineage
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-wide">
              Signature Residential Portfolio
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Sculpted for elite high-net-worth families in Gulshan, Banani, and Baridhara. Each residence embodies single-unit privacy, generous ceiling height, and timeless craftsmanship.
            </p>
          </div>

          {/* Edit Canva Links Tool Trigger */}
          <button
            onClick={onOpenImageManager}
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 hover:border-[#C59B27]/50 transition flex items-center gap-2 shadow-sm"
            title="Update custom Canva or hosted image links"
          >
            <Layers className="w-3.5 h-3.5 text-[#D8A943]" />
            Manage Project Images
          </button>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-5 mb-10">
          {(['All', 'Ongoing', 'Upcoming', 'Completed'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#D8A943] to-[#B37D20] text-slate-950 shadow-md shadow-[#D8A943]/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {filter === 'All' ? 'All Residences' : `${filter} Projects`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const whatsappProjectUrl = `https://wa.me/8801825115384?text=${encodeURIComponent(
              `Hello Villamark Properties, I would like to schedule a private tour or inquire about units in "${project.title}" (${project.location}).`
            )}`;

            return (
              <div
                key={project.id}
                className="group bg-[#0F172A] border border-slate-800 hover:border-[#C59B27]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 flex flex-col"
              >
                {/* Image Container with overlay & badge */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = project.fallbackImage;
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/20 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                        project.status === 'Ongoing'
                          ? 'bg-blue-600/80 text-white border border-blue-400/40'
                          : project.status === 'Upcoming'
                          ? 'bg-amber-600/80 text-white border border-amber-400/40'
                          : 'bg-emerald-600/80 text-white border border-emerald-400/40'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Road & Katha tag */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono text-[#FCE5A4] border border-white/10">
                    {project.landSizeKatha} · {project.roadWidthFt}
                  </div>

                  {/* Quick Preview Button on image hover */}
                  <button
                    onClick={() => onSelectProjectForFloorPlan(project)}
                    className="absolute bottom-4 right-4 p-2.5 rounded-full bg-[#D8A943] text-slate-950 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:scale-110"
                    title="View 3-Bedroom Floor Plan & Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D8A943]" />
                      <span>{project.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white group-hover:text-[#FCE5A4] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {project.subtitle}
                    </p>

                    {/* Key Specifications Grid */}
                    <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-xl bg-[#090D17] border border-slate-800/80 text-xs">
                      <div>
                        <span className="text-[10px] uppercase text-slate-500 font-semibold block">Apartment Sizes</span>
                        <span className="font-semibold text-slate-200">{project.unitSizes}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-slate-500 font-semibold block">Storeys &amp; Layout</span>
                        <span className="font-semibold text-slate-200">{project.totalFloors}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-slate-500 font-semibold block">Handover</span>
                        <span className="font-semibold text-slate-200">{project.handoverDate}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-slate-500 font-semibold block">Configuration</span>
                        <span className="font-semibold text-slate-200">3-Bed Deluxe &amp; Duplex</span>
                      </div>
                    </div>

                    {/* Feature Highlight Bullets */}
                    <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                      {project.highlights.slice(0, 3).map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D8A943] mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions: "Discover Details" (opens Floor Plan Modal) & WhatsApp CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2.5">
                    {/* Primary Trigger: Discover Details */}
                    <button
                      onClick={() => onSelectProjectForFloorPlan(project)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D8A943] to-[#B37D20] text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition shadow-md shadow-[#D8A943]/20 flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>Discover Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>

                    {/* WhatsApp CTA */}
                    <a
                      href={whatsappProjectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition active:scale-95"
                      title="Direct WhatsApp Inquiry (+880 1825-115384)"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
