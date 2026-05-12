import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Labels and packaging solutions" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 hero-gradient opacity-85" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center py-24 md:py-40">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6 md:mb-8 animate-fade-in-up">
        Custom Labels & Packaging<br className="hidden sm:block" />
        <span className="text-accent-brand">Solutions for Your Business</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 md:mb-14 px-4 leading-relaxed">
        Barcode Labels, Stickers, Garment Labels, Tags & Packaging Boxes — Trusted by 500+ businesses across India.
      </p>
    </div>
  </section>
);

export default HeroSection;
