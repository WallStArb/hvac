'use client';

import React from 'react';
import { Phone, Clock, CheckCircle, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CTA() {
  const benefits = [
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Emergency repairs available 24/7"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "100% customer satisfaction guaranteed"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully protected and certified"
    },
    {
      icon: CheckCircle,
      title: "Free Estimates",
      description: "No obligation, transparent pricing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-600/50 to-red-600/50" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-400/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"3\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-6">
            <Zap className="w-5 h-5 mr-2" />
            Don&apos;t Wait - Act Now!
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Your Comfort Can&apos;t Wait
            <span className="block text-yellow-200 mt-2">
              Get Professional HVAC Service Today
            </span>
          </h2>
          
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
            When your heating or cooling system fails, every minute counts. Don&apos;t suffer in discomfort – 
            Giovanni and the C&M team are standing by to restore your home&apos;s comfort quickly and professionally.
          </p>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="text-center animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/30 rounded-xl mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{benefit.title}</div>
                    <div className="text-orange-100 text-xs">{benefit.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main CTA Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Emergency Service Card */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift animate-slide-in-left">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 rounded-3xl mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Emergency HVAC Service</h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                System breakdown? Don&apos;t wait! Our emergency team is available 24/7 
                to get your heating or cooling back up and running.
              </p>

              <div className="bg-red-500/20 rounded-xl p-4 mb-6">
                <div className="text-yellow-200 font-bold text-lg mb-2">⚡ Available Right Now</div>
                <div className="text-white text-3xl font-bold">(978) 360-3367</div>
              </div>

              <Button 
                size="lg"
                className="w-full bg-red-500 hover:bg-red-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 py-6 text-lg font-bold"
                asChild
              >
                <a href="tel:(978) 360-3367">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Emergency Service
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Free Estimate Card */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift animate-slide-in-right">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-3xl mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Free HVAC Estimate</h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Planning a new installation or major repair? Get a detailed, 
                no-obligation estimate from our experienced professionals.
              </p>

              <div className="bg-green-500/20 rounded-xl p-4 mb-6">
                <div className="text-yellow-200 font-bold text-lg mb-2">✓ No Obligation</div>
                <div className="text-white text-lg">Transparent • Fair • Honest</div>
              </div>

              <Button 
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 py-6 text-lg font-bold"
                asChild
              >
                <a href="#contact">
                  <Star className="w-5 h-5 mr-2" />
                  Get Your Free Estimate
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Section */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-white/20 backdrop-blur-md border border-white/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Why Choose C&M Right Now?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-yellow-200 mb-2">30+</div>
                    <div className="text-white">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-yellow-200 mb-2">5000+</div>
                    <div className="text-white">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-yellow-200 mb-2">100%</div>
                    <div className="text-white">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-400/20 rounded-xl p-6 mb-8">
                <div className="text-yellow-200 font-bold text-lg mb-2">
                  🔥 Special Offer - Limited Time!
                </div>
                <div className="text-white text-xl">
                  Mention this website and get <span className="font-bold text-yellow-200">$50 OFF</span> your next service call
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-bold"
                  asChild
                >
                  <a href="tel:(978) 360-3367">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (978) 360-3367
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/70 shadow-xl px-8 py-6 text-lg font-bold"
                  asChild
                >
                  <a href="#contact">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Schedule Online
                  </a>
                </Button>
              </div>

              <p className="text-orange-100 text-sm mt-6">
                🕒 Emergency service available 24/7 • 📞 Same day appointments • 💯 100% satisfaction guaranteed
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 