'use client';
import { Shield, Award, Clock, Star, CheckCircle, ThumbsUp } from 'lucide-react';

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed HVAC contractor in Massachusetts",
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Three decades of professional HVAC service",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available when you need us most",
      color: "bg-orange-500"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Excellent customer satisfaction rating",
      color: "bg-yellow-500"
    },
    {
      icon: CheckCircle,
      title: "100% Satisfaction",
      description: "Guaranteed quality workmanship",
      color: "bg-purple-500"
    },
    {
      icon: ThumbsUp,
      title: "Trusted Local Business",
      description: "Your neighbors recommend us",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-orange-50/30" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\" fill-opacity=\"0.02\"%3E%3Cpath d=\"M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0 0v20c0-4.4-3.6-8-8-8s-8 3.6-8 8h20z\"/%3E%3C/g%3E%3C/svg%3E')"
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Massachusetts Homeowners
              <span className="block gradient-text mt-2">Trust C&M Heating & Cooling</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When you choose C&M, you're choosing a partner committed to your comfort, safety, and satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover-lift animate-fade-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${indicator.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {indicator.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {indicator.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 