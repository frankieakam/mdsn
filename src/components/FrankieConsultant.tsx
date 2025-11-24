'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FrankieConsultant() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer);
    }, []);

        return (
    <div className={`relative transition-all duration-1000 ease-out ${ isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Chat Bubble */}
      <div className="
        relative md:absolute mt-10 
        -top-10 -right-2 md:-top-28 md:-left-70 bg-white rounded-4xl shadow-2xl p-4 max-w-xs z-30
        opacity-100 scale-100 translate-y-0
        mb-4 md:mb-0">
        
        <div className="text-md text-gray-800 space-y-2">
          <p className="font-semibold text-black text-base">Hi, I&apos;m Frankie</p>
          <p className="leading-relaxed font-normal">
            Your dedicated digital consultant. Available to discuss your project requirements and provide personalized solutions.
          </p>
          <div className="flex items-center space-x-1 text-green-600 text-xs font-medium mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Online & Ready to Assist</span>
          </div>
        </div>

        {/* Frankie Image Inside Bubble - Bottom Right */}
        <div className="absolute -bottom-1 left-52">
          <div className="relative">
            {/* Pulsing Animation Ring */}
            <div className="absolute inset-0 rounded-full bg-green-500/60 animate-ping opacity-75"></div>
            
            {/* Main Avatar */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-accent to-blue-500 shadow-xl overflow-hidden top-4">
              {/* Frankie Cartoon Image */}
              <div className="relative w-full h-full bg-linear-to-br from-blue-500 to-purple-600">
                <Image
                  src="/frankie-cartoon.png"
                  alt="Frankie - MDSN Digital Consultant"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 64px, 80px"
                  priority
                />          
              </div>
            </div>
          </div>
        </div>

        {/* Bubble Tail - Different positions for mobile vs desktop */}
        <div className="absolute -bottom-2 right-20 w-4 h-4 md:-bottom-2 md:right-auto md:left-48">
        </div>
      </div>
    </div>
  );
}