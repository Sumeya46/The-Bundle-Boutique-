import React from 'react';
import { ArrowRight, Send, Sparkles, ShieldCheck, Truck, Heart } from 'lucide-react';
import heroImage from '../assets/images/luxury_hero_giftbox_1784966059372.jpg';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FFF5F8] to-[#FAF8F5]">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FCE7F0]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0F4] border border-[#E8C3CE] text-xs font-semibold tracking-wider text-[#9E3B5C] uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Harar’s Premier Luxury Gift Experience
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-bold text-[#2D2A26] leading-[1.08] tracking-tight">
              Beautiful Bundles <br className="hidden sm:block" />
              <span className="font-script font-normal text-[#D4AF37] block text-5xl sm:text-6xl md:text-7xl lg:text-8xl -mt-2 sm:-mt-3">
                for Every Occasion
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5A524C] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Curated with love, wrapped in blush satin and gold foil elegance. Discover bespoke gift boxes for beauty, self-care, new moms, birthdays, and sacred celebrations in Harar, Ethiopia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#categories"
                onClick={onShopClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-white text-sm font-bold uppercase tracking-wider transition-all shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Gift Categories
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-[#FFF5F8] text-[#2D2A26] border border-[#E8C3CE] text-sm font-bold uppercase tracking-wider transition-all shadow-sm hover:border-[#D4AF37]"
              >
                <Send className="w-4 h-4 text-[#D4AF37]" />
                Contact Us
              </a>
            </div>

            {/* Value Highlights */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-[#E8C3CE]/50 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2D2A26]">
                  <Truck className="w-4 h-4 text-[#D4AF37]" />
                  Harar Delivery
                </div>
                <span className="text-[11px] text-[#7A7067]">Local & nationwide</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2D2A26]">
                  <Heart className="w-4 h-4 text-[#D4AF37]" />
                  Handcrafted
                </div>
                <span className="text-[11px] text-[#7A7067]">With gold & satin</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2D2A26]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  100% Curated
                </div>
                <span className="text-[11px] text-[#7A7067]">Premium quality</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/30 via-[#E8C3CE]/40 to-[#FFF0F4] blur-lg -z-10" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl bg-white group">
                <img
                  src={heroImage}
                  alt="The Bundle Boutique Luxury Gift Box"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
