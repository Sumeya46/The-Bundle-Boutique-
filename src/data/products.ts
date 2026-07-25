import { Product } from '../types';

import glowBeautyBoxImg from '../assets/images/glow_beauty_box_1784966070789.jpg';
import luxurySelfCareImg from '../assets/images/luxury_selfcare_box_1784966080895.jpg';
import newMomBoxImg from '../assets/images/new_mom_box_1784966091316.jpg';
import birthdaySurpriseImg from '../assets/images/birthday_surprise_box_1784966101379.jpg';
import chocolateLoversImg from '../assets/images/chocolate_lovers_box_1784966113944.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'glow-beauty-box',
    name: 'Glow Beauty Box',
    shortDescription: 'Radiant skincare & glam essential bundle for luminous, youthful skin.',
    fullDescription: 'Our signature glow collection designed for ultimate pampering. Includes high-potency Vitamin C serum, authentic rose quartz facial roller, hydrating lip oil, gold collagen eye patches, and delicate rosewater mist.',
    priceETB: 3800,
    category: 'Skincare',
    image: glowBeautyBoxImg,
    includes: [
      'Authentic Rose Quartz Facial Roller',
      'Hydrating Vitamin C Serum (30ml)',
      'High-Shine Nourishing Lip Oil',
      '2x Gold Collagen Eye Masks',
      'Rosewater Refreshing Facial Mist (100ml)',
      'Blush Velvet Gift Box with Gold Ribbon'
    ],
    isBestSeller: true
  },
  {
    id: 'luxury-self-care-box',
    name: 'Luxury Self-Care Box',
    shortDescription: 'Indulgent sanctuary in a box for deep relaxation, peace, and restorative bliss.',
    fullDescription: 'Escape the rush of daily life with our tranquil self-care hamper. Hand-poured French vanilla and lavender soy candle, 100% mulberry silk eye mask, mineral bath soak with real rose petals, and a gold tea spoon paired with loose leaf chamomile.',
    priceETB: 4200,
    category: 'Self-Care',
    image: luxurySelfCareImg,
    includes: [
      'Hand-Poured Soy Scented Candle (Vanilla & Lavender)',
      '100% Pure Mulberry Silk Eye Mask',
      'Himalayan Botanical Bath Salts in Glass Jar',
      'Gold Tea Spoon & Organic Chamomile Blend',
      'Whipped Shea Body Butter (150g)',
      'Magnetic Closure Luxury Box & Personalized Card'
    ],
    isBestSeller: true
  },
  {
    id: 'new-mom-care-box',
    name: 'New Mom Care Box',
    shortDescription: 'Heartfelt postpartum and baby bundle designed with gentle, organic warmth.',
    fullDescription: 'Celebrate new beginnings with this thoughtful mother & newborn gift box. Crafted with an ultra-soft organic cotton onesie, gentle baby lotion, calming organic postpartum tea, plush rattle bear, and a gold-embossed keepsake card.',
    priceETB: 4500,
    category: 'New Mom',
    image: newMomBoxImg,
    includes: [
      '100% Organic Cotton Baby Onesie (0-3m)',
      'Hand-Knit Plush Bear Rattle',
      'Organic Lavender & Chamomile Baby Lotion',
      'Comforting Herbal Nursing Tea Blend',
      'Nourishing Botanical Body Balm for Mom',
      'Letterpress Gold Embossed Keepsake Card'
    ],
    isNew: true
  },
  {
    id: 'birthday-surprise-box',
    name: 'Birthday Surprise Box',
    shortDescription: 'Vibrant, festive & luxurious birthday celebration in a gold-accented box.',
    fullDescription: 'Make their birthday unforgettable! Features gourmet French macarons, a celebration scented candle, gold satin scrunchie, delicious treats, and a hand-lettered personalized birthday greeting card.',
    priceETB: 3500,
    category: 'Birthday',
    image: birthdaySurpriseImg,
    includes: [
      'Assorted French Macarons Box (6 pcs)',
      'Sparkling Birthday Scented Candle',
      'Premium Mulberry Silk Scrunchie (Gold)',
      'Mini Celebration Confetti & Streamers',
      'Hand-written Gold Foil Birthday Card',
      'Signature Pearl Ribbon Packaging'
    ],
    isBestSeller: true
  },
  {
    id: 'chocolate-lovers-box',
    name: 'Chocolate Lovers Box',
    shortDescription: 'Decadent arrangement of Belgian truffles, pralines & chocolate delights.',
    fullDescription: 'A cocoa dream come true. Handcrafted Belgian chocolate truffles, gold foil wrapped hazelnut pralines, dark cocoa nibs, and decadent gourmet chocolate bars beautifully arranged in a sleek blush-and-gold presentation box.',
    priceETB: 2900,
    category: 'Chocolate',
    image: chocolateLoversImg,
    includes: [
      'Artisan Belgian Truffles Selection (12 pcs)',
      'Gold Foil Wrapped Hazelnut Pralines',
      'Sea Salt & Dark Chocolate Gourmet Bar (100g)',
      'Milk Chocolate Dipped Strawberry Crisps',
      'Satin Ribbon Tied Keepsake Box'
    ]
  },
  {
    id: 'elegant-prayer-bundle',
    name: 'Elegant Prayer Bundle',
    shortDescription: 'Serene spiritual bundle with plush velvet prayer mat, pearl tasbih & pure oud.',
    fullDescription: 'A deeply meaningful and elegant gift for spiritual reflection and sacred moments. Features a high-density padded velvet prayer rug with intricate gold embroidery, natural pearl tasbih beads, and premium aromatic bakhoor.',
    priceETB: 3900,
    category: 'Prayer Bundles',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=800',
    includes: [
      'Ultra-Plush Padded Velvet Prayer Mat (Gold Trim)',
      'Natural Freshwater Pearl Tasbih (99 Beads)',
      'Pure Harari Bakhoor Incense Jar',
      'Gold Brass Incense Burner Accent',
      'Customized Quran/Prayer Note Card'
    ],
    isBestSeller: true
  },
  {
    id: 'royal-jewelry-box',
    name: 'Royal Jewelry Box',
    shortDescription: '18k gold-plated initial pendant, pearl drop earrings & velvet jewelry case.',
    fullDescription: 'Give the gift of timeless shine. This royal jewelry bundle contains a custom 18k gold-plated initial pendant, freshwater pearl drop earrings, a soft microfiber polish cloth, and a travel velvet ring & necklace organizer.',
    priceETB: 4800,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    includes: [
      '18k Gold-Plated Custom Initial Necklace',
      'Natural Freshwater Pearl Drop Earrings',
      'Plush Travel Velvet Jewelry Organizer',
      'Microfiber Jewelry Cleaning Cloth',
      'Gift Bag & Certificate of Authenticity'
    ]
  },
  {
    id: 'deluxe-anniversary-bundle',
    name: 'Deluxe Anniversary Bundle',
    shortDescription: 'Romantic keepsakes, toast flutes, velvet roses & gourmet chocolate truffles.',
    fullDescription: 'Commemorate milestones and deep love with a grand gesture. Features gold-rimmed crystal toast flutes, forever preserved velvet rose, artisanal chocolates, and a custom scripted love note.',
    priceETB: 5200,
    category: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800',
    includes: [
      'Pair of Gold-Rimmed Crystal Flutes',
      'Forever Preserved Crimson Velvet Rose',
      'Artisanal Belgian Chocolate Box',
      'Romantic Scented Soy Candle',
      'Custom Letterpress Anniversary Card'
    ]
  }
];
