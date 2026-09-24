import React, { useState } from 'react';
import { X, Image as ImageIcon, Check, RefreshCw, Sparkles, ExternalLink } from 'lucide-react';
import { ImageLinksConfig } from '../types';
import { DEFAULT_IMAGES } from '../data/projects';

interface ImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: ImageLinksConfig;
  onSave: (newImages: ImageLinksConfig) => void;
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({
  isOpen,
  onClose,
  images,
  onSave,
}) => {
  const [formData, setFormData] = useState<ImageLinksConfig>(images);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (key: keyof ImageLinksConfig, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFormData(DEFAULT_IMAGES);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const fields: { key: keyof ImageLinksConfig; label: string; placeholder: string; desc: string }[] = [
    {
      key: 'heroBanner',
      label: 'Hero Banner Image URL',
      placeholder: 'https://... or paste your hosted Canva image link',
      desc: 'Top homepage hero background showcasing Villamark architectural grandeur.'
    },
    {
      key: 'serenityTower',
      label: 'Project 1: Serenity Tower (Gulshan-2)',
      placeholder: 'https://... or paste your hosted Canva image link',
      desc: '18-storied ultra-luxury signature high-rise tower exterior or lobby.'
    },
    {
      key: 'lakecrest',
      label: 'Project 2: Lakecrest (Banani Lakefront)',
      placeholder: 'https://... or paste your hosted Canva image link',
      desc: 'Waterfront luxury residential perspective overlooking Banani Lake.'
    },
    {
      key: 'floraVista',
      label: 'Project 3: Flora Vista (Baridhara Diplomatic)',
      placeholder: 'https://... or paste your hosted Canva image link',
      desc: 'Botanical luxury residences in diplomatic enclave.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-[#C59B27]/40 rounded-2xl shadow-2xl shadow-black/80 p-6 sm:p-8 my-8 text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C59B27]/20 to-[#997312]/20 border border-[#C59B27]/40 flex items-center justify-center text-[#E5B537] shrink-0">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-[#E5B537] font-semibold">
                Client Canva Integration
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 font-medium">
                Live Dynamic Sync
              </span>
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-white tracking-wide mt-1">
              Custom Image Links Configuration
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Paste your hosted Canva links or cloud media URLs. The website instantly renders your custom graphics with zero reload needed.
            </p>
          </div>
        </div>

        {/* Notification tip */}
        <div className="bg-[#1E293B]/70 border border-slate-700/70 rounded-xl p-3.5 mb-6 text-xs text-slate-300 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#D8A943] shrink-0" />
          <span>
            <strong>Tip for Canva Links:</strong> In Canva, click <em>Share &rarr; More &rarr; Embed</em> or download & host via your preferred cloud hosting (Canva View link, Cloudinary, AWS S3, or direct URL).
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {fields.map((field) => (
            <div key={field.key} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {field.label}
                </label>
                {formData[field.key] && (
                  <a
                    href={formData[field.key]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[#D8A943] hover:underline flex items-center gap-1"
                  >
                    Test URL <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>

              <div className="relative flex items-center">
                <input
                  type="url"
                  value={formData[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full bg-[#090D16] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition"
                  required
                />
              </div>
              <p className="text-[11px] text-slate-500">{field.desc}</p>
            </div>
          ))}

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Restore Curated HD Defaults
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-slate-800 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={savedSuccess}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#D8A943] to-[#B37D20] text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition shadow-lg shadow-[#D8A943]/20 flex items-center justify-center gap-2"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    Updated Live!
                  </>
                ) : (
                  'Apply Custom Images'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
