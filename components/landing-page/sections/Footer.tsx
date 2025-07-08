'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Star, Shield, Award, CheckCircle } from 'lucide-react';
import Logo from '@/components/logo';

export default function Footer() {
  const quickLinks = [
    { href: '#services', label: 'HVAC Services' },
    { href: '#about', label: 'About Us' },
    { href: '#testimonials', label: 'Customer Reviews' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const services = [
    { href: '#services', label: 'AC Installation & Repair' },
    { href: '#services', label: 'Heating Systems' },
    { href: '#services', label: 'Emergency Service' },
    { href: '#services', label: 'Maintenance Plans' },
    { href: '#services', label: 'Ductwork Services' },
    { href: '#services', label: 'Air Quality Solutions' },
  ];

  const serviceAreas = [
    'Worcester', 'Framingham', 'Lowell', 'Quincy',
    'Newton', 'Somerville', 'Cambridge', 'Waltham'
  ];

  const certifications = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Award, text: '30+ Years Experience' },
    { icon: Star, text: '5-Star Rated' },
    { icon: CheckCircle, text: '100% Satisfaction' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo size="md" showText={true} showTagline={true} className="[&_*]:text-white [&_.text-gray-800]:text-white [&_.text-gray-600]:text-blue-200" />
              </div>

              <p className="text-blue-100 leading-relaxed mb-6">
                Your trusted HVAC partner for over 30 years. We're committed to keeping Massachusetts families comfortable with professional heating and cooling solutions.
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-orange-400" />
                  <a 
                    href="tel:(978) 360-3367" 
                    className="text-white hover:text-orange-300 transition-colors font-semibold"
                  >
                    (978) 360-3367
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-orange-400" />
                  <a 
                    href="mailto:candmhvac7@gmail.com" 
                    className="text-white hover:text-orange-300 transition-colors"
                  >
                    candmhvac7@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-orange-400" />
                  <span className="text-blue-100">Greater Massachusetts</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-3 text-orange-400" />
                  <span className="text-blue-100">24/7 Emergency Service</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-blue-100 hover:text-orange-300 transition-colors duration-300 relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="text-md font-semibold text-white mb-4">Customer Portal</h4>
                <Link 
                  href="/dashboard/signin"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm"
                >
                  Access Portal
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="text-blue-100 hover:text-orange-300 transition-colors duration-300 relative group text-sm"
                    >
                      {service.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Service Areas</h3>
              <p className="text-blue-100 text-sm mb-4">
                Proudly serving these Massachusetts communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="text-blue-200 text-sm">
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-blue-200 text-xs mt-4">
                And many more! Call to confirm service in your area.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-white/20 py-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Why Choose C&M?</h3>
            <p className="text-blue-100">Your comfort and satisfaction are our top priorities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="text-white font-semibold text-sm">{cert.text}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-white/20 py-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Schedule Service?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact us today for professional HVAC service. Our experienced team is ready to help with all your heating and cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:(978) 360-3367"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (978) 360-3367
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 transition-all duration-300"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} C&M Heating & Cooling. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="text-blue-200">
                Website: 
                <a 
                  href="https://www.cmhvacllc.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-orange-200 ml-1 font-medium"
                >
                  www.cmhvacllc.com
                </a>
              </div>
              
              <div className="hidden md:flex items-center text-blue-200">
                <span className="mr-2">Made with</span>
                <span className="text-red-400">❤️</span>
                <span className="ml-2">for Massachusetts families</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 