import React from 'react';
import { Logo } from './Logo';
import { Send, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V9.01a6.34 6.34 0 0 0-3.32.93 6.33 6.33 0 0 0-2.8 5.75 6.34 6.34 0 0 0 6.34 6.33c3.5 0 6.33-2.83 6.33-6.33V9.05a8.21 8.21 0 0 0 4.81 1.56V7.16a4.85 4.85 0 0 1-1.25-.47z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D2A26] text-[#FAF8F5] pt-16 pb-12 border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#FFF5F8] p-3 rounded-2xl inline-block shadow-sm">
              <Logo size="md" />
            </div>

            <p className="text-xs sm:text-sm text-[#D1C9C1] max-w-md leading-relaxed">
              Harar’s premier destination for luxury curated gift boxes. Beautiful bundles hand-wrapped with blush satin ribbons, gold accents, and handwritten message cards for every celebration.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/Sumeya66"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3D3A36] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@the_bundle_boutique1?_r=1&_t=ZS-98K6cLSs34W"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3D3A36] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all"
                title="TikTok - @the_bundle_boutique1"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href="tel:+251929468874"
                className="w-10 h-10 rounded-full bg-[#3D3A36] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all"
                title="Call +251 92 946 8874"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-xl font-bold text-[#D4AF37] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#D1C9C1]">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Our Boutique</a></li>
              <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">11 Gift Categories</a></li>
              <li><a href="#custom-builder" className="hover:text-[#D4AF37] transition-colors">Custom Gift Builder</a></li>
              <li><a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Location & Delivery Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-luxury text-xl font-bold text-[#D4AF37] uppercase tracking-wider">
              Boutique Headquarters
            </h4>
            <div className="space-y-2 text-xs text-[#D1C9C1]">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                Harar, Ethiopia
              </p>
              <p className="flex items-center gap-2">
                <Send className="w-4 h-4 text-[#D4AF37] shrink-0" />
                Telegram: Direct Chat &amp; Orders
              </p>
              <a
                href="https://www.tiktok.com/@the_bundle_boutique1?_r=1&_t=ZS-98K6cLSs34W"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <TikTokIcon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                TikTok: @the_bundle_boutique1
              </a>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                Phone: +251 92 946 8874
              </p>
            </div>

            <div className="pt-4 border-t border-[#3D3A36] text-[11px] text-[#A8A098]">
              <p>Hand-crafted gift packages delivered across Harar, Dire Dawa, Jijiga, and Addis Ababa.</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#3D3A36] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A098]">
          <p className="flex items-center gap-1 text-center sm:text-left">
            &copy; {new Date().getFullYear()} The Bundle Boutique, Harar, Ethiopia. All Rights Reserved. Made with <Heart className="w-3.5 h-3.5 text-[#E8C3CE] fill-[#E8C3CE]" /> for your celebrations.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3D3A36] hover:bg-[#D4AF37] text-white transition-all text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
