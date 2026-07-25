import React from 'react';
import { CATEGORIES } from '../data/categories';
import { Category } from '../types';
import { Sparkles, ArrowUpRight, Heart } from 'lucide-react';

interface GiftCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const GiftCategories: React.FC<GiftCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#E8C3CE] text-xs font-semibold text-[#8B6B18]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Explore Collections
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D2A26]">
            Gift Categories for <span className="font-script font-normal text-[#D4AF37] text-4xl sm:text-5xl md:text-6xl">Every Celebration</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E62]">
            Browse our 11 thoughtfully curated gift box themes — from glowing beauty & serene self-care to baby gifts and spiritual prayer bundles.
          </p>
        </div>

        {/* 11 Hover-Animated Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category: Category, index: number) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#E8C3CE]/60 shadow-sm hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Category Card Image with Overlay */}
              <div className="relative h-48 overflow-hidden bg-[#FCE7F0]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.96]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/80 via-[#2D2A26]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Ribbon Tag Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#8B6B18] border border-[#D4AF37]/30 shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  {category.itemCount}
                </div>

                {/* Arrow Action Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#2D2A26] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Category Title Over Image */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif-luxury text-2xl font-bold tracking-wide group-hover:text-[#F3C5D3] transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs text-[#6B5E62] leading-relaxed line-clamp-2">
                  {category.description}
                </p>


                {/* Action CTA Line */}
                <div className="pt-2 text-right">
                  <span className="text-xs font-bold text-[#B8860B] group-hover:underline inline-flex items-center gap-1">
                    Explore {category.name} &rarr;
                  </span>
                </div>
              </div>

              {/* Gold Shimmer Bottom Accent */}
              <div className="h-1 w-0 group-hover:w-full bg-gold-gradient transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
