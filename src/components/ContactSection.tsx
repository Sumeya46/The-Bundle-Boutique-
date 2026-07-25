import React from 'react';
import { Send, Phone, MapPin, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#FFF0F4] to-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#E8C3CE] text-xs font-semibold text-[#8B6B18]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D2A26]">
            Contact <span className="font-script font-normal text-[#D4AF37] text-4xl sm:text-5xl md:text-6xl">The Bundle Boutique</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E62]">
            Have a custom order idea, delivery question, or special request? We are always happy to help you create magic for your loved ones.
          </p>
        </div>

        {/* Centered Main Contact Card */}
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-[#E8C3CE] shadow-luxury space-y-8">
          
          <div className="space-y-6">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#2D2A26] pb-3 border-b border-[#E8C3CE] text-center">
              Direct Contacts &amp; Location
            </h3>

            {/* Telegram Primary Button Card */}
            <a
              href="https://t.me/Sumeya66"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-[#229ED9]/10 via-[#FFF0F4] to-white border border-[#229ED9]/30 hover:border-[#229ED9] transition-all shadow-sm hover:scale-[1.01] gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#229ED9] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform shrink-0">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#229ED9] block">
                    Instant Chat &amp; Orders
                  </span>
                  <h4 className="font-serif-luxury text-xl font-bold text-[#2D2A26]">
                    Telegram: Direct Chat &amp; Orders
                  </h4>
                </div>
              </div>
              <span className="text-xs font-bold text-[#229ED9] bg-white px-4 py-2 rounded-full border border-[#229ED9]/30 shadow-xs">
                Open Telegram Chat &rarr;
              </span>
            </a>

            {/* TikTok Button Card */}
            <a
              href="https://www.tiktok.com/@the_bundle_boutique1?_r=1&_t=ZS-98K6cLSs34W"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-black/5 via-[#FFF0F4] to-white border border-[#2D2A26]/20 hover:border-[#2D2A26] transition-all shadow-sm hover:scale-[1.01] gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2D2A26] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V9.01a6.34 6.34 0 0 0-3.32.93 6.33 6.33 0 0 0-2.8 5.75 6.34 6.34 0 0 0 6.34 6.33c3.5 0 6.33-2.83 6.33-6.33V9.05a8.21 8.21 0 0 0 4.81 1.56V7.16a4.85 4.85 0 0 1-1.25-.47z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B5E62] block">
                    Watch Unboxing &amp; Videos
                  </span>
                  <h4 className="font-serif-luxury text-xl font-bold text-[#2D2A26]">
                    TikTok: @the_bundle_boutique1
                  </h4>
                </div>
              </div>
              <span className="text-xs font-bold text-[#2D2A26] bg-white px-4 py-2 rounded-full border border-[#2D2A26]/20 shadow-xs">
                Follow on TikTok &rarr;
              </span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <a
                href="tel:+251929468874"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8C3CE]/70 hover:border-[#D4AF37] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center text-white shadow-sm shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A7067] block">
                    Direct Phone Line
                  </span>
                  <span className="text-sm font-bold text-[#2D2A26]">
                    +251 92 946 8874
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8C3CE]/70">
                <div className="w-10 h-10 rounded-xl bg-[#FCE7F0] flex items-center justify-center text-[#D4AF37] shadow-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A7067] block">
                    Boutique Location
                  </span>
                  <span className="text-sm font-bold text-[#2D2A26]">
                    Harar, Ethiopia
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8C3CE]/70">
              <div className="w-10 h-10 rounded-xl bg-[#FCE7F0] flex items-center justify-center text-[#D4AF37] shadow-sm shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A7067] block">
                  Operating Hours
                </span>
                <span className="text-sm font-bold text-[#2D2A26]">
                  Monday – Sunday: 8:00 AM – 8:00 PM (EAT)
                </span>
              </div>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-[#FFF5F8] border border-[#E8C3CE] text-xs text-[#8B6B18] font-medium flex items-center justify-center gap-2 text-center">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>We guarantee fast, warm responses within 30 minutes on Telegram!</span>
          </div>

        </div>

      </div>
    </section>
  );
};
