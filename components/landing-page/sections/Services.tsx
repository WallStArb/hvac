'use client';
import { Snowflake, Flame, Wind, Wrench, Zap, ThermometerSun, Shield, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Services() {
  const services = [
    {
      icon: Snowflake,
      title: "Central Air Conditioning",
      description: "Professional central air installation, repair, and maintenance for optimal cooling performance.",
      price: "Starting at $89",
      features: ["Central AC Installation", "AC Repair & Service", "Preventive Maintenance", "24 Hour Emergency Service"],
      color: "from-blue-500 to-blue-600",
      highlight: "Most Popular"
    },
    {
      icon: Flame,
      title: "Oil & Gas Services",
      description: "Expert oil and gas heating system installation, conversion, and repair services.",
      price: "Starting at $99",
      features: ["Oil to Gas Conversion", "Gas Furnace Service", "Oil Boiler Repair", "System Upgrades"],
      color: "from-orange-500 to-red-500",
      highlight: "Winter Ready"
    },
    {
      icon: Wind,
      title: "Ductless Systems",
      description: "Mini-split ductless system installation and service for efficient heating and cooling.",
      price: "Starting at $299",
      features: ["Mini-Split Installation", "Ductless Repair", "Multi-Zone Systems", "Energy Efficient"],
      color: "from-green-500 to-teal-600",
      highlight: "Energy Saver"
    },
    {
      icon: Zap,
      title: "24 Hour Emergency Service",
      description: "24/7 emergency HVAC service when you need it most. Fast response guaranteed.",
      price: "Same Day Service",
      features: ["24/7 Availability", "Same Day Response", "Emergency Repairs", "No Extra Fees"],
      color: "from-red-500 to-pink-600",
      highlight: "24/7 Available"
    },
    {
      icon: Star,
      title: "Annual Maintenance Combo (AC + Furnace, One Call)",
      description: "$129 for AC or furnace, $179 for both in a single visit. Each additional system 40% off (e.g., 2 systems: $129 + $77 = $206, combo + 1: $179 + $107 = $286). Includes comprehensive inspection, standard air filter replacement, minor tune-ups, priority scheduling, and exclusive discounts. Best for comprehensive care and peace of mind. Regular maintenance improves efficiency, lowers utility bills, and extends system lifespan (per industry standards).",
      price: "$129 (AC or Furnace) | $179 (AC + Furnace) | 40% off each additional",
      features: [
        "Full inspection for AC, furnace, or both in one call",
        "Standard air filters included",
        "Minor tune-ups for all serviced systems",
        "Priority scheduling",
        "Exclusive member discounts",
        "40% discount for each additional system (e.g., 3 systems: $179 + $107 = $286)",
        "Improves efficiency & air quality",
        "Reduces risk of emergency repairs"
      ],
      color: "from-blue-500 to-purple-600",
      highlight: "Best Value Combo"
    },
    {
      icon: Star,
      title: "Additional Services",
      description: "Enhance your comfort and efficiency with our optional services.",
      price: "See Details",
      features: [
        "Duct Cleaning: $300–$500 per home (improves air quality)",
        "Refrigerant Recharge: $180–$350 (includes leak check, only if needed)",
        "System Energy Audit: $99–$199 (waived with major work)",
        "Commercial Rooftop Units: Installation, repair, maintenance, design (Call for pricing)",
        "New Installation: Complete system design & install (Free Estimates)"
      ],
      color: "from-yellow-500 to-orange-500",
      highlight: "Full Service"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">HVAC Services</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete HVAC Solutions for
            <span className="block gradient-text mt-2">Greater Boston Area</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From 24-hour emergency repairs to complete system installations, we provide comprehensive HVAC services with transparent pricing and guaranteed satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover-lift animate-fade-up bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className={`bg-gradient-to-r ${service.color} text-white border-0 shadow-lg`}>
                      {service.highlight}
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="relative pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <div className="mb-6">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                      {service.price}
                    </div>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="text-gray-600 text-sm">
                      Call <a href="tel:(978) 360-3367" className="text-blue-600 hover:underline font-semibold">(978) 360-3367</a> for pricing
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Membership Programs Section */}
        <div className="text-center mb-16 animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <Badge className="mb-4 bg-orange-100 text-orange-800 px-4 py-2">Membership Programs</Badge>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Join the C&M Family
            <span className="block gradient-text mt-2">Save Money & Get Priority Service</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Our annual membership programs provide peace of mind with regular maintenance, priority service, and exclusive member discounts.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Essential Care Plan - $119 */}
            <Card className="relative bg-white border-2 border-blue-200 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover-lift">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </Badge>
              </div>
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Snowflake className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Essential Care</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">$119</span>
                  <span className="text-gray-600 ml-2">per year</span>
                </div>
                <p className="text-gray-600">Perfect for homeowners who want reliable AC performance and priority service</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 border-b pb-2">Annual AC System Service Includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Complete AC system inspection & tune-up</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Air filter replacement (up to $25 value)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Coolant pressure check & adjustment</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Condensate drain cleaning & inspection</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 border-b pb-2 pt-4">Member Benefits:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700"><strong>10% off</strong> all repair services</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Priority scheduling for service calls</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">No trip charges on covered services</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Seasonal service reminders</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="tel:(978) 360-3367">
                    Join Essential Care
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Complete Care Plan - $179 */}
            <Card className="relative bg-white border-2 border-orange-200 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover-lift">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 text-sm font-semibold">
                  Best Value (Yearly)
                </Badge>
              </div>
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Complete Care</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-orange-600">$179</span>
                  <span className="text-gray-600 ml-2">per year</span>
                </div>
                <p className="text-gray-600">Comprehensive year-round protection for both heating and cooling systems</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 border-b pb-2">Everything in Essential Care PLUS:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Complete furnace inspection & tune-up</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Heat exchanger safety inspection</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Gas connections & pressure testing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Thermostat calibration & programming</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 border-b pb-2 pt-4">Premium Member Benefits:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700"><strong>15% off</strong> all repair services</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700"><strong>Next-day service</strong> guarantee</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Extended warranty on repairs (2 years)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">10% off emergency service calls</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="tel:(978) 360-3367">
                    Join Complete Care
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Industry-backed Benefits Info Box */}
          <div className="max-w-2xl mx-auto mt-8 mb-16 p-6 bg-blue-50 border-l-4 border-blue-400 rounded shadow animate-fade-up">
            <h4 className="text-lg font-semibold mb-2 text-blue-900">Why Regular Maintenance?</h4>
            <ul className="list-disc pl-5 text-blue-800 text-base space-y-1">
              <li>Improves system efficiency and lowers utility bills</li>
              <li>Extends the lifespan of your HVAC equipment</li>
              <li>Reduces risk of emergency repairs and costly breakdowns</li>
              <li>Enhances home comfort and air quality</li>
              <li>Backed by industry standards (<a href="https://fieldedge.com/blog/hvac-yearly-maintenance-cost-a-guide-for-businesses/" className="underline text-blue-700" target="_blank">FieldEdge Guide</a>)</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700">
              <strong>Ready to join a membership plan?</strong> Contact us to get started today!
            </p>
          </div>
        </div>

        {/* Brand Partners Section */}
        <div className="text-center mb-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted Brand Partners</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 w-24 h-16 flex items-center justify-center">
              <span className="text-lg font-bold text-blue-600">CARRIER</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 w-24 h-16 flex items-center justify-center">
              <span className="text-lg font-bold text-blue-700">BRYANT</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 w-24 h-16 flex items-center justify-center">
              <span className="text-lg font-bold text-red-600">FUJITSU</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 w-24 h-16 flex items-center justify-center">
              <span className="text-lg font-bold text-blue-800">GOODMAN</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 w-24 h-16 flex items-center justify-center md:col-span-1 col-span-3">
              <span className="text-lg font-bold text-red-700">MITSUBISHI</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-600/20" />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
            }} />
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Need HVAC Service Today?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Don&apos;t wait for your HVAC system to fail. Contact C&M Heating & Cooling for fast, professional service with transparent pricing.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
                  asChild
                >
                  <a href="#contact">
                    Get Free Estimate
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 