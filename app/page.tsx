"use client";

import HeroSection from "@/components/bernabe/HeroSection";
import AboutSection from "@/components/bernabe/AboutSection";
import ProductsSection from "@/components/bernabe/ProductsSection";
import GallerySection from "@/components/bernabe/GallerySection";
import ValeSection from "@/components/bernabe/ValeSection";
import LocationSection from "@/components/bernabe/LocationSection";
import ContactSection from "@/components/bernabe/ContactSection";
import Footer from "@/components/bernabe/Footer";

export default function BernabePage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#f5efe6" }}>
      <HeroSection />
      <ValeSection />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
