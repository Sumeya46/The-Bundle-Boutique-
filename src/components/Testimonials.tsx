import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Testimonial } from '../types';
import { Sparkles, Star, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#E8C3CE] text-xs font-semibold text-[#8B6B18]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Loved in Harar &amp; Beyond
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D2A26]">
            Customer Reviews <span className="font-script font-normal text-[#D4AF37] text-4xl sm:text-5xl md:text-6xl">&amp; Stories</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E62]">
            Hear from happy customers who sent love, joy, and luxury gift bundles to their family, friends, and special ones across Ethiopia.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial: Testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8C3CE]/70 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#E8C3CE]/40 group-hover:text-[#D4AF37]/30 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Gold Star Ratings */}
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs text-[#5A524C] leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-4 border-t border-[#E8C3CE]/50 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/40 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="overflow-hidden">
                  <h4 className="font-serif-luxury font-bold text-sm text-[#2D2A26] truncate">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#7A7067]">
                    <MapPin className="w-3 h-3 text-[#D4AF37] shrink-0" />
                    <span className="truncate">{testimonial.location}</span>
                  </div>
                  <span className="text-[10px] text-[#B8860B] font-semibold block truncate">
                    {testimonial.purchasedBox}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
