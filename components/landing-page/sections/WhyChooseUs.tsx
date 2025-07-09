'use client';
import { CheckCircle, Users, Wrench, Clock, Award, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: CheckCircle,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all our HVAC services. Your comfort is our top priority.",
      stats: "100% Satisfaction"
    },
    {
      icon: Users,
      title: "Expert Technicians",
      description: "Our certified HVAC technicians undergo continuous training to stay current with latest technology.",
      stats: "Licensed Pros"
    },
    {
      icon: Wrench,
      title: "Quality Equipment",
      description: "We use only premium HVAC equipment and parts from trusted manufacturers for lasting performance.",
      stats: "Premium Brands"
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Emergency HVAC services available 24/7. We understand that comfort can&apos;t wait.",
      stats: "24/7 Service"
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Three decades of professional HVAC service in Massachusetts. Experience you can trust.",
      stats: "Since 1994"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured HVAC contractor. Your home and investment are protected.",
      stats: "Fully Protected"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Massachusetts Homeowners Choose 
            <span className="block bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent mt-2">
              C&M Heating & Cooling
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            When it comes to your family&apos;s comfort, experience matters. Discover why thousands of Massachusetts families trust us with their HVAC needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow-orange">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-orange-300 mb-1">{feature.stats}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  </div>
                  
                  <p className="text-blue-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Family of Satisfied Customers?
            </h3>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Experience the C&amp;M difference with professional HVAC services that Massachusetts homeowners have trusted for over 30 years.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl group transform hover:scale-105"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 