import React from 'react';
import { Heart, Sparkles, Gift, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Narrative Text */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#E8C3CE] text-xs font-semibold text-[#8B6B18]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Our Story &amp; Philosophy
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D2A26] leading-tight">
            Curated, Thoughtful Gift Boxes <br />
            <span className="font-script font-normal text-[#D4AF37] text-4xl sm:text-5xl md:text-6xl">
              for Your Cherished Loved Ones
            </span>
          </h2>

          <p className="text-base text-[#5A524C] leading-relaxed">
            Based in the historic cultural jewel of <strong>Harar, Ethiopia</strong>, <em>The Bundle Boutique</em> was born out of a desire to bring elegance, luxury, and genuine joy to life’s most precious moments.
          </p>

          <p className="text-sm sm:text-base text-[#5A524C] leading-relaxed">
            Whether you are celebrating a milestone birthday, welcoming a newborn, honoring a mother, expressing love on an anniversary, or seeking spiritual serenity, every gift box is individually hand-assembled with supreme attention to detail.
          </p>

          {/* 2 Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-left">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8C3CE]/60 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FCE7F0] flex items-center justify-center text-[#D4AF37]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-serif-luxury font-bold text-lg text-[#2D2A26]">100% Handpicked Quality</h4>
              <p className="text-xs text-[#6B5E62]">Only genuine skincare, cosmetics, chocolates &amp; luxury accessories.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8C3CE]/60 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#FCE7F0] flex items-center justify-center text-[#D4AF37]">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="font-serif-luxury font-bold text-lg text-[#2D2A26]">Custom Messages</h4>
              <p className="text-xs text-[#6B5E62]">Personalized handwritten note cards included in every single box.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
