'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Clock, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">(978) 360-3367</span>
              </div>
              <div className="hidden md:flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="hidden lg:flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@cmhvacllc.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Serving Greater Boston Area</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Logo size="md" showText={true} showTagline={false} className="hover:scale-105 transition-transform duration-300" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="tel:(978) 360-3367">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
              asChild
            >
              <Link href="tel:(978) 360-3367">
                <Phone className="w-4 h-4" />
              </Link>
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
                asChild
              >
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Get Free Estimate
                </Link>
              </Button>
            </div>

            {/* Mobile Contact Info */}
            <div className="pt-4 space-y-3 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-600" />
                <span>(978) 360-3367</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-600" />
                <span>info@cmhvacllc.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-blue-600" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 