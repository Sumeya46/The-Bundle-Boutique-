import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Send, Phone, Gift, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCustomBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomBuilder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Gift Categories', href: '#categories' },
    { name: 'Custom Builder', href: '#custom-builder' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#2D2A26] via-[#3D2C33] to-[#2D2A26] text-[#FCE7F0] text-xs py-2 px-4 text-center border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap font-medium">
          <span className="inline-flex items-center gap-1 text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" /> Luxury Curated Gift Boxes
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Handcrafted Packaging & Delivery in Harar, Dire Dawa & Nationwide Ethiopia</span>
          <span className="hidden md:inline">•</span>
          <a 
            href="https://t.me/Sumeya66" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 text-[#F3C5D3] hover:text-[#D4AF37] underline font-semibold transition-colors ml-1"
          >
            <Send className="w-3 h-3" /> Telegram Order
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E8C3CE]/40' 
            : 'bg-[#FAF8F5] py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#hero" className="focus:outline-none">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#2D2A26] hover:text-[#B8860B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCustomBuilder}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#8B6B18] bg-[#FFF8FA] hover:bg-[#FCE7F0] hover:border-[#B8860B] transition-all shadow-sm"
            >
              <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
              Build Custom Box
            </button>
            <a
              href="https://t.me/Sumeya66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-luxury hover:scale-105 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              Order on Telegram
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://t.me/Sumeya66"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-full bg-gold-gradient text-white shadow-sm"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-[#E8C3CE] text-[#2D2A26] hover:bg-[#FCE7F0] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#8B6B18]" /> : <Menu className="w-6 h-6 text-[#2D2A26]" />}
            </button>
          </div>
        </div>

        {/* Mobile Slideover Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8C3CE] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3 pb-4 border-b border-[#E8C3CE]/40">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#2D2A26] hover:text-[#B8860B] py-1.5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCustomBuilder();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#D4AF37] text-sm font-bold text-[#8B6B18] bg-[#FFF8FA] shadow-sm"
              >
                <Gift className="w-4 h-4 text-[#D4AF37]" />
                Build Custom Gift Box
              </button>
              <a
                href="https://t.me/Sumeya66"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-gradient text-white text-sm font-bold uppercase tracking-wider shadow-luxury"
              >
                <Send className="w-4 h-4" />
                Contact on Telegram
              </a>
              <a
                href="tel:+251929468874"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs text-[#6B5E62] font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                Call +251 92 946 8874
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
