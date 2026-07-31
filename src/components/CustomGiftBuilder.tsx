import React, { useState, useEffect } from 'react';
import { CustomBundleFormData } from '../types';
import { Gift, Sparkles, Send, MessageSquare, MapPin, CheckCircle2, User, Phone } from 'lucide-react';

interface CustomGiftBuilderProps {
  initialOccasion?: string;
  onOccasionChange?: (occ: string) => void;
}

export const CustomGiftBuilder: React.FC<CustomGiftBuilderProps> = ({
  initialOccasion,
  onOccasionChange
}) => {
  const [formData, setFormData] = useState<CustomBundleFormData>({
    occasion: initialOccasion || 'Birthday',
    recipientName: '',
    giftMessage: 'Wishing you a day as radiant and beautiful as you are! With love, xx',
    deliveryCity: 'Harar',
    customerPhone: ''
  });

  useEffect(() => {
    if (initialOccasion) {
      setFormData((prev) => ({ ...prev, occasion: initialOccasion }));
    }
  }, [initialOccasion]);

  const occasionsList = [
    { id: 'birthday', label: 'Birthday', icon: '🎂' },
    { id: 'anniversary', label: 'Anniversary', icon: '💍' },
    { id: 'new-baby-mom', label: 'New Baby & Mom', icon: '👶' },
    { id: 'graduation', label: 'Graduation & Success', icon: '🎓' },
    { id: 'ramadan-eid', label: 'Ramadan / Eid', icon: '🌙' },
    { id: 'wedding', label: 'Wedding & Engagement', icon: '💒' },
    { id: 'self-care', label: 'Self-Care & Spa', icon: '🌸' },
    { id: 'just-because', label: 'Just Because', icon: '💝' },
    { id: 'beauty', label: 'Beauty & Glam', icon: '💄' },
    { id: 'jewelry', label: 'Jewelry & Luxury', icon: '💎' },
    { id: 'prayer-bundles', label: 'Prayer Bundles', icon: '📿' },
    { id: 'skincare', label: 'Skincare', icon: '✨' },
    { id: 'chocolate', label: 'Chocolates', icon: '🍫' }
  ];

  const handleSelectOccasion = (label: string) => {
    setFormData((prev) => ({ ...prev, occasion: label }));
    if (onOccasionChange) {
      onOccasionChange(label);
    }
  };

  const handleTelegramSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageText = `Hello! 🌸 I would like to order a Custom Gift Box from The Bundle Boutique:

🎁 Occasion: ${formData.occasion}
👤 Recipient: ${formData.recipientName || 'Valued Loved One'}

✉️ Custom Gift Note:
"${formData.giftMessage}"

📍 Delivery City: ${formData.deliveryCity}
📞 Contact Phone: ${formData.customerPhone || 'Not specified'}

Please let me know how to finalize my custom box! Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const telegramUrl = `https://t.me/Sumeya66?text=${encodedMessage}`;

    window.open(telegramUrl, '_blank');
  };

  return (
    <section id="custom-builder" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#FFF5F8] to-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#E8C3CE] text-xs font-semibold text-[#8B6B18]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Bespoke Creation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D2A26]">
            Custom Gift Builder <span className="font-script font-normal text-[#D4AF37] text-4xl sm:text-5xl md:text-6xl">&amp; Form</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E62]">
            Select your occasion, recipient details, and personalized gift message. We will personally hand-craft and wrap your custom gift box with gold ink calligraphy cards.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-[#E8C3CE] shadow-luxury space-y-6">
          <form onSubmit={handleTelegramSubmit} className="space-y-6">
            
            {/* 1. Occasion Selection Buttons */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A26] flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-[#D4AF37]" />
                1. Select Occasion
              </label>
              
              {/* Interactive Occasion Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {occasionsList.map((occ) => {
                  const isSelected = formData.occasion.toLowerCase() === occ.label.toLowerCase() ||
                    formData.occasion.toLowerCase().includes(occ.id);
                  return (
                    <button
                      type="button"
                      key={occ.id}
                      onClick={() => handleSelectOccasion(occ.label)}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                        isSelected
                          ? 'bg-gold-gradient text-white border-transparent shadow-luxury scale-[1.02]'
                          : 'bg-[#FAF8F5] text-[#2D2A26] border-[#E8C3CE] hover:border-[#D4AF37] hover:bg-[#FFF0F4]'
                      }`}
                    >
                      <span className="text-base shrink-0">{occ.icon}</span>
                      <span className="truncate flex-1">{occ.label}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Custom Occasion Input */}
              <div className="pt-2 flex items-center gap-2">
                <span className="text-xs text-[#7A7067] font-medium shrink-0">Selected / Custom Occasion:</span>
                <input
                  type="text"
                  value={formData.occasion}
                  onChange={(e) => {
                    setFormData({ ...formData, occasion: e.target.value });
                    if (onOccasionChange) onOccasionChange(e.target.value);
                  }}
                  placeholder="Enter custom occasion..."
                  className="flex-1 px-3.5 py-2 rounded-xl border border-[#E8C3CE] bg-[#FAF8F5] text-xs font-semibold text-[#2D2A26] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* 2. Recipient & Delivery Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A26] flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" /> Recipient's Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Beti, Farhiya, Mom..."
                  value={formData.recipientName}
                  onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8C3CE] bg-[#FAF8F5] text-sm text-[#2D2A26] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A26] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Delivery City
                </label>
                <select
                  value={formData.deliveryCity}
                  onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8C3CE] bg-[#FAF8F5] text-sm text-[#2D2A26] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Harar">Harar, Ethiopia</option>
                  <option value="Dire Dawa">Dire Dawa, Ethiopia</option>
                  <option value="Addis Ababa">Addis Ababa, Ethiopia</option>
                  <option value="Jijiga">Jijiga, Ethiopia</option>
                  <option value="Other Ethiopia City">Other Ethiopia Location</option>
                </select>
              </div>
            </div>

            {/* 3. Custom Gift Message */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A26] flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                  2. Handwritten Gift Message Card
                </label>
                <span className="text-[11px] text-[#7A7067]">
                  {formData.giftMessage.length}/250 chars
                </span>
              </div>
              <textarea
                rows={3}
                maxLength={250}
                placeholder="Type your message here. We will write it in gold calligraphic ink..."
                value={formData.giftMessage}
                onChange={(e) => setFormData({ ...formData, giftMessage: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E8C3CE] bg-[#FAF8F5] text-sm text-[#2D2A26] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
              />
            </div>

            {/* 4. Contact Phone */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A26] flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> Your Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="+251 9..."
                value={formData.customerPhone}
                onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8C3CE] bg-[#FAF8F5] text-sm text-[#2D2A26] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-white text-sm font-bold uppercase tracking-wider transition-all shadow-luxury hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit &amp; Open Order on Telegram
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};
