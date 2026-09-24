import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MessageCircle, Image as ImageIcon, Globe, MapPin, Facebook } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenImageManager: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenImageManager }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Landowner JV', href: '#landowners' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'About Villamark', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const facebookUrl = 'https://www.facebook.com/vilamarkproperties';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080D18]/95 backdrop-blur-md border-b border-[#C59B27]/25 shadow-xl shadow-black/50'
          : 'bg-gradient-to-b from-[#080D18]/95 via-[#080D18]/70 to-transparent'
      }`}
    >
      {/* Top Utility Contact Bar */}
      <div className="hidden md:block bg-[#050811]/90 border-b border-slate-800/80 py-1.5 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-[#D8A943]" />
              Banasree, Rampura, Dhaka-1219
            </span>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:villamarkproperties@gmail.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#FCE5A4] transition"
            >
              <Mail className="w-3 h-3 text-[#D8A943]" />
              villamarkproperties@gmail.com
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://www.villamarkproperties.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[#D8A943] hover:underline"
            >
              <Globe className="w-3 h-3" />
              www.villamarkproperties.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#1877F2] hover:text-white flex items-center gap-1 transition"
              title="Villamark Facebook Page"
            >
              <Facebook className="w-3 h-3 fill-current" />
              <span>Facebook</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open 24 Hours
            </span>
            <span className="text-slate-600">|</span>
            <a
              href="https://wa.me/8801825115384"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              +880 1825-115384
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#FCE5A4] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D8A943] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Facebook shortcut icon button */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#141F36] hover:bg-[#1877F2]/20 text-[#1877F2] hover:text-white border border-slate-700/80 transition"
              title="Official Facebook: facebook.com/vilamarkproperties"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>

            {/* Canva Image Link Tool Trigger */}
            <button
              onClick={onOpenImageManager}
              className="px-3 py-2 rounded-lg bg-[#141F36] hover:bg-slate-800 text-slate-300 hover:text-[#D8A943] text-xs font-medium border border-slate-700/80 transition flex items-center gap-1.5"
              title="Configure Canva or Hosted Image Links"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#D8A943]" />
              <span className="hidden xl:inline">Canva Links</span>
            </button>

            {/* Direct WhatsApp Concierge */}
            <a
              href="https://wa.me/8801825115384"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-bold uppercase tracking-wider transition shadow-md shadow-emerald-950 flex items-center gap-2 group active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800 text-[#1877F2] border border-slate-700"
              title="Facebook"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={onOpenImageManager}
              className="p-2 rounded-lg bg-slate-800 text-[#D8A943] border border-slate-700"
              title="Custom Canva Links"
            >
              <ImageIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-800 bg-[#0A101D] rounded-2xl p-5 space-y-4 shadow-2xl border border-slate-700/60 animate-in fade-in slide-in-from-top-3">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-[#FCE5A4] py-1 border-b border-slate-800/60"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Contact Quick Links */}
            <div className="pt-2 text-xs space-y-2 text-slate-300">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#1877F2] hover:underline font-medium"
              >
                <Facebook className="w-3.5 h-3.5 fill-current" />
                facebook.com/vilamarkproperties
              </a>
              <a
                href="mailto:villamarkproperties@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-[#D8A943]"
              >
                <Mail className="w-3.5 h-3.5 text-[#D8A943]" />
                villamarkproperties@gmail.com
              </a>
              <a
                href="https://www.villamarkproperties.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#D8A943] hover:underline"
              >
                <Globe className="w-3.5 h-3.5" />
                www.villamarkproperties.com
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://wa.me/8801825115384"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +880 1825-115384</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenImageManager();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700"
              >
                <ImageIcon className="w-4 h-4 text-[#D8A943]" />
                <span>Manage Canva Image Links</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
