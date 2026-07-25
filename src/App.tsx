import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { GiftCategories } from './components/GiftCategories';
import { CustomGiftBuilder } from './components/CustomGiftBuilder';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedOccasion, setSelectedOccasion] = useState<string>('Birthday');

  const handleOpenCustomBuilder = () => {
    const el = document.getElementById('custom-builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopClick = () => {
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedOccasion(categoryName);
    const el = document.getElementById('custom-builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] flex flex-col font-sans selection:bg-[#F3C5D3] selection:text-[#3A2229]">
      {/* Navigation */}
      <Navbar onOpenCustomBuilder={handleOpenCustomBuilder} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onShopClick={handleShopClick} />

        {/* About Us */}
        <AboutUs />

        {/* 11 Gift Categories */}
        <GiftCategories onSelectCategory={handleCategorySelect} />

        {/* Custom Gift Builder */}
        <CustomGiftBuilder
          initialOccasion={selectedOccasion}
          onOccasionChange={setSelectedOccasion}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

