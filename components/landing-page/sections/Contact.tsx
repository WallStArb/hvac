'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Send, User, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(978) 360-3367",
      subtitle: "Available 24/7 for emergencies",
      action: "tel:(978) 360-3367"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@cmhvacllc.com",
      subtitle: "Response within 24 hours",
      action: "mailto:info@cmhvacllc.com"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Greater Boston Area",
      subtitle: "Danvers, Salem, Lynn, Cambridge & more",
      action: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 7AM-7PM",
      subtitle: "24-hour emergency service available",
      action: null
    }
  ];

  const services = [
    "Central Air Installation & Repair",
    "Oil & Gas Heating Service",
    "Ductless Mini-Split Systems",
    "24-Hour Emergency Service",
    "Commercial Rooftop Units",
    "New System Installation"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch with
            <span className="block gradient-text mt-2">C&M Heating & Cooling</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience professional HVAC service? Contact us today for a free estimate, 
            emergency repair, or to schedule your maintenance appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-blue-600" />
                  Request Your Free Estimate
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
                </p>
              </CardHeader>
              
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number *
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="(978) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        City/Town
                      </label>
                      <Input 
                        type="text" 
                        placeholder="e.g. Worcester, Framingham"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message / Details
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Please describe your HVAC needs, any issues you're experiencing, or questions you have..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="urgent" 
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="urgent" className="text-sm text-gray-700">
                      This is an emergency or urgent request
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 py-6 text-lg font-bold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send My Request
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    For immediate assistance, call us directly at{' '}
                    <a href="tel:(978) 360-3367" className="text-blue-600 font-semibold hover:underline">
                      (978) 360-3367
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {info.title}
                        </h3>
                        
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <div className="text-gray-900 font-semibold">{info.details}</div>
                        )}
                        
                        <p className="text-gray-600 text-sm mt-1">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Emergency CTA */}
            <Card className="bg-gradient-to-r from-red-500 to-red-600 border-0 shadow-2xl text-white hover-lift">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
                <h3 className="text-xl font-bold mb-2">HVAC Emergency?</h3>
                <p className="text-red-100 mb-4 text-sm">
                  Don&apos;t wait! Our emergency team is available 24/7
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-white text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
                  asChild
                >
                  <a href="tel:(978) 360-3367">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency Line
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Hours & Service Areas */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-2xl text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-8">Service Information</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-orange-300 mr-3" />
                    <h4 className="text-xl font-bold">Business Hours</h4>
                  </div>
                  <div className="space-y-2 text-blue-100">
                    <div>Monday - Friday: 7:00 AM - 7:00 PM</div>
                    <div>Saturday: 8:00 AM - 6:00 PM</div>
                    <div>Sunday: Emergency Service Only</div>
                    <div className="text-orange-300 font-semibold">Emergency Service: 24/7</div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-orange-300 mr-3" />
                    <h4 className="text-xl font-bold">Service Areas</h4>
                  </div>
                  <div className="text-blue-100">
                    <p className="mb-2">Proudly serving Greater Massachusetts including:</p>
                    <p className="text-sm">
                      Worcester • Framingham • Lowell • Quincy • Newton • Somerville • 
                      Cambridge • Waltham • Malden • Medford • And surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 