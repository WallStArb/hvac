'use client';

import Link from 'next/link';
import { Phone, Star, Shield, Clock, ArrowRight, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-800/30" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "url('data:image/svg+xml;charset=utf8,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                30+ Years Experience
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                <Shield className="w-4 h-4 mr-1" />
                Licensed & Insured
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                <Clock className="w-4 h-4 mr-1" />
                24/7 Emergency
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">24 HOUR SERVICE</span>
              <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
                HVAC Expert
              </span>
            </h1>
            <div className="mb-4">
              <p className="text-orange-200 font-semibold text-lg text-center lg:text-left">Proudly serving the North Shore and Metro Boston area</p>
            </div>

            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Oil & Gas Services • New Installation • Ductless Systems • Central Air
              <span className="block mt-2 font-semibold text-orange-200">
                Serving Greater Boston Area for Over 30 Years
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl hover:shadow-glow-orange transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg group"
                asChild
              >
                <Link href="tel:(978) 360-3367">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (978) 360-3367
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 shadow-xl px-8 py-6 text-lg group transition-all duration-300"
                asChild
              >
                <Link href="#contact">
                  Get Free Estimate
                  <Flame className="w-5 h-5 ml-2 group-hover:text-orange-300 transition-colors" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-orange-300">5000+</div>
                <div className="text-blue-200 text-sm">Happy Customers</div>
              </div>
              <div className="text-center animate-bounce-in" style={{ animationDelay: '0.7s' }}>
                <div className="text-3xl font-bold text-orange-300">30+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center animate-bounce-in" style={{ animationDelay: '0.9s' }}>
                <div className="text-3xl font-bold text-orange-300">24/7</div>
                <div className="text-blue-200 text-sm">Emergency Service</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 hover-lift">
                {/* Logo and Company Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {/* C&M Logo with Blue Wind Effect */}
                    <div className="flex items-center">
                      {/* C */}
                      <span className="text-2xl font-black text-white leading-none tracking-wide">C</span>
                      
                      {/* Circular Blue Wind Effect with Flame */}
                      <div className="w-6 h-6 relative flex items-center justify-center mx-1">
                        {/* Wind effect background with gradient and swirl */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 animate-spin-slow opacity-90">
                          {/* Wind swirl patterns */}
                          <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-transparent via-blue-300/30 to-transparent"></div>
                          <div className="absolute inset-1 rounded-full bg-gradient-to-bl from-cyan-200/20 via-transparent to-blue-700/40"></div>
                        </div>
                        
                        {/* Additional wind lines for effect */}
                        <div className="absolute inset-0 rounded-full">
                          <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-cyan-200/60 rounded-full rotate-12"></div>
                          <div className="absolute bottom-0.5 right-1/4 w-0.5 h-1 bg-white/40 rounded-full -rotate-45"></div>
                          <div className="absolute left-0.5 top-1/3 w-1 h-0.5 bg-sky-200/50 rounded-full rotate-45"></div>
                        </div>
                        
                        {/* Flame icon on top */}
                        <div className="relative z-10">
                          <Flame className="w-3 h-3 text-orange-500 fill-current drop-shadow-sm" />
                        </div>
                      </div>
                      
                      {/* M */}
                      <span className="text-2xl font-black text-white leading-none tracking-wide">M</span>
                    </div>
                  </div>
                  <div className="text-right text-xs text-blue-200">
                    <div>30+ Years</div>
                    <div>Licensed</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight">HEATING & COOLING</h3>
                  <p className="text-orange-200 font-medium text-sm">Air Quality & Comfort Specialist</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-1 mb-4 text-xs text-white">
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-orange-400 rounded-full mr-2" />
                    <span>HVAC Systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-orange-400 rounded-full mr-2" />
                    <span>Air Conditioning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-orange-400 rounded-full mr-2" />
                    <span>Installation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-orange-400 rounded-full mr-2" />
                    <span>Emergency Service</span>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">Giovanni Montefusco</p>
                      <p className="text-blue-200 text-xs">Owner & Master Technician</p>
                    </div>
                    <div className="text-right">
                      <a href="tel:(978) 360-3367" className="block text-orange-300 font-bold text-lg hover:text-orange-200 transition-colors group">
                        <Phone className="w-3 h-3 inline mr-1 group-hover:scale-110 transition-transform" />
                        978-360-3367
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 space-y-1">
                    <a href="mailto:info@cmhvacllc.com" className="flex items-center text-blue-200 text-xs hover:text-white transition-colors">
                      <span className="mr-1">✉️</span>
                      info@cmhvacllc.com
                    </a>
                    <div className="flex items-center text-blue-200 text-xs">
                      <span className="mr-1">📍</span>
                      Danvers, MA 01923
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating service badges */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-in">
                ✓ Licensed & Insured
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                ⚡ Same Day Service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity="0.25" fill="currentColor" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity="0.5" fill="currentColor" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
} 