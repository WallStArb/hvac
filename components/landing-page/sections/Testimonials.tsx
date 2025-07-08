'use client';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Leblanc",
      location: "Greater Boston Area",
      service: "Water Heater Replacement",
      date: "Recent Customer",
      rating: 5,
      text: "My house needed a new water heater which was replaced by Gio who came over early to do the job. I am happy with the service and the price.",
      initials: "SL"
    },
    {
      name: "Andrew Johnson",
      location: "Greater Boston Area", 
      service: "Mini Split Installation",
      date: "Recent Customer",
      rating: 5,
      text: "They came over to install a mini split and did it neatly and tested everything for hours to make sure it runs great. I like the fact that it also heats the house in the fall.",
      initials: "AJ"
    },
    {
      name: "Gareth Stadder",
      location: "Greater Boston Area",
      service: "Commercial Rooftop Unit",
      date: "Recent Customer",
      rating: 5,
      text: "I own a little workshop that converts diesel engines in cars into ethanol engines. We needed a new unit on the roof replaced. Thank you for working with our timelines. We are happy!",
      initials: "GS"
    },
    {
      name: "Michael Chen",
      location: "Cambridge, MA",
      service: "Emergency Furnace Repair",
      date: "Winter 2024",
      rating: 5,
      text: "Our furnace went out on the coldest night of winter. Giovanni came out at 10 PM and had us warm again within 2 hours. Fair pricing, excellent service, and truly cares about his customers.",
      initials: "MC"
    },
    {
      name: "Lisa Rodriguez",
      location: "Danvers, MA",
      service: "24-Hour Emergency Service",
      date: "Recent Customer",
      rating: 5,
      text: "We've been using C&M for our annual maintenance for years now. Giovanni is always thorough, explains everything clearly, and his preventive care has saved us from major breakdowns.",
      initials: "LR"
    },
    {
      name: "Robert Thompson",
      location: "Salem, MA",
      service: "Oil to Gas Conversion",
      date: "Recent Customer",
      rating: 5,
      text: "Excellent experience from start to finish. Giovanni provided detailed estimates, finished the oil to gas conversion on time, and took time to show us how to use the new system.",
      initials: "RT"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            What Our Customers
            <span className="block bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent mt-2">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Read what Massachusetts homeowners say about their experience with C&M Heating & Cooling.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-4xl font-bold text-white mb-2">5.0</div>
              <div className="text-blue-100">Based on 200+ reviews</div>
              <div className="text-orange-300 font-medium">100% Customer Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-orange-400 opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-blue-100 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                    </Avatar>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="flex items-center text-blue-200 text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Info */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-orange-300 font-medium">{testimonial.service}</span>
                    <div className="flex items-center text-blue-200">
                      <Calendar className="w-3 h-3 mr-1" />
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Join Our Happy Customers?
              </h3>
              <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                Experience the same exceptional service that has earned us 5-star reviews from customers across Massachusetts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:(978) 360-3367"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Call for 5-Star Service
                </a>
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors duration-300"
                >
                  <Quote className="w-5 h-5 mr-2" />
                  Get Your Free Quote
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 