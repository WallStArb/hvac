'use client';

import Link from 'next/link';
import { Flame } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showTagline?: boolean;
  className?: string;
}

export default function Logo({ 
  size = 'md', 
  showText = true, 
  showTagline = true, 
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const circleSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const taglineSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* Logo with C, blue wind effect with flame, and M */}
      <div className="flex items-center">
        {/* C */}
        <span className={`font-black text-gray-900 ${sizeClasses[size]} leading-none tracking-wide`}>
          C
        </span>
        
        {/* Circular Blue Wind Effect with Flame */}
        <div className={`${circleSizes[size]} relative flex items-center justify-center mx-1`}>
          {/* Wind effect background with gradient and swirl */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 animate-spin-slow opacity-90">
            {/* Wind swirl patterns */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-transparent via-blue-300/30 to-transparent"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-bl from-cyan-200/20 via-transparent to-blue-700/40"></div>
          </div>
          
          {/* Additional wind lines for effect */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-cyan-200/60 rounded-full rotate-12"></div>
            <div className="absolute bottom-1 right-1/4 w-1 h-1.5 bg-white/40 rounded-full -rotate-45"></div>
            <div className="absolute left-1 top-1/3 w-1.5 h-1 bg-sky-200/50 rounded-full rotate-45"></div>
          </div>
          
          {/* Flame icon on top */}
          <div className="relative z-10">
            <Flame className={`${iconSizes[size]} text-orange-500 fill-current drop-shadow-sm`} />
          </div>
        </div>
        
        {/* M */}
        <span className={`font-black text-gray-900 ${sizeClasses[size]} leading-none tracking-wide`}>
          M
        </span>
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="flex flex-col ml-2">
          {/* Heating & Cooling */}
          <div className="flex items-center gap-1">
            <span className="text-red-600 font-bold text-lg leading-none">
              HEATING
            </span>
            <span className="text-gray-900 font-bold text-lg leading-none">
              &
            </span>
            <span className="text-blue-600 font-bold text-lg leading-none">
              COOLING
            </span>
          </div>
          
          {/* Experience Tagline */}
          {showTagline && (
            <div className={`text-gray-600 font-medium ${taglineSizes[size]} mt-1 leading-none`}>
              30+ years of experience
            </div>
          )}
        </div>
      )}
    </Link>
  );
} 