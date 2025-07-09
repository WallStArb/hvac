'use client';
import { Award, Users, Clock, CheckCircle, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Three decades serving Massachusetts homeowners"
    },
    {
      icon: Users,
      title: "5000+ Happy Customers",
      description: "Thousands of satisfied customers throughout MA"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Always available when you need us most"
    },
    {
      icon: CheckCircle,
      title: "Licensed & Insured",
      description: "Fully certified and protected for your peace of mind"
    }
  ];

  const serviceAreas = [
    "Boston", "Cambridge", "Danvers", "Salem", "Lynn", "Peabody",
    "Beverly", "Marblehead", "Swampscott", "Nahant", "Saugus", "Melrose",
    "Malden", "Medford", "Everett", "Chelsea", "Revere", "Winthrop"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Your Local
            <span className="block gradient-text mt-2">HVAC Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Family-owned and operated for over 30 years, C&M Heating & Cooling has been Greater Boston&apos;s trusted partner for home comfort solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-elegant p-8">
              <CardContent className="p-0">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Giovanni Montefusco</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-6">Owner & Master HVAC Technician</p>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      For over 30 years, Giovanni Montefusco has been dedicated to providing exceptional HVAC services to Massachusetts families. What started as a passion for helping people stay comfortable in their homes has grown into a trusted business serving thousands of customers across the state.
                    </p>
                    <p>
                      &quot;At C&M Heating &amp; Cooling, we&apos;re not just fixing equipment – we&apos;re ensuring your family&apos;s comfort and safety. Every job is personal to us because we understand how important your home is to you.&quot;
                    </p>
                    <p className="font-medium text-gray-900">
                      — Giovanni Montefusco, Owner
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:(978) 360-3367">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Giovanni Today
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg"
                    asChild
                  >
                    <a href="#contact">
                      <MapPin className="w-4 h-4 mr-2" />
                      Service Areas
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Achievements */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm border-0 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-2xl text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Proudly Serving Greater Boston Area</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                From emergency repairs to complete system installations, we bring professional HVAC services directly to your neighborhood.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {serviceAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg py-3 px-4 text-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-blue-100 text-sm">
                And many more communities throughout Massachusetts! 
                <span className="block mt-2 font-semibold">
                  Call to confirm service in your area: (978) 360-3367
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 