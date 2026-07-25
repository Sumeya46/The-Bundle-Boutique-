export interface Category {
  id: string;
  name: string;
  description: string;
  itemCount: string;
  image: string;
  iconName: string;
  popularItems: string[];
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  priceETB: number;
  category: string;
  image: string;
  includes: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  purchasedBox: string;
}

export interface CustomBundleFormData {
  occasion: string;
  recipientName: string;
  giftMessage: string;
  deliveryCity: string;
  customerPhone: string;
}
