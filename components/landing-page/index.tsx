'use client';

import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Navigation from './sections/Navigation';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
} 