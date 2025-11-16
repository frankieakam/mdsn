'use client';

import { Paintbrush, Code, Megaphone, TrendingUp, CheckCircle, Puzzle, Users } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your General Contractor for the Digital World.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              &ldquo;You have a vision for your business, brand, organization. Achieving it usually means hiring a designer, a developer, a marketer, and a project manager. It&apos;s complex, time-consuming, and risky.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-semibold">
              We change that.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As Super Labs Nigeria, we are your single point of contact to solve your puzzles. We architect the solution, assemble the perfect team of specialized experts for your project, and manage everything from concept to launch. You get one streamlined experience and one guaranteed result.&rdquo;
            </p>

            <div className="space-y-4">
              {[
                'Single point of contact for international projects',
                '24/7 development cycles across timezones',
                'Global payment and communication systems',
                'Vetted network of world-class digital specialists',
                'End-to-end project management and delivery',
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Puzzle Solution Visual */}
          <div className="relative">
            {/* Main Puzzle Container - responsive */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              
              {/* 1. Incomplete Puzzle (Top Left) - responsive */}
              <div className="absolute left-2 top-2 md:left-8 md:top-8 transform">
                <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl p-3 md:p-4 shadow-lg border border-dashed border-red-600">
                  <div className="grid grid-cols-2 gap-1 md:gap-2">
                    {/* Missing Puzzle Pieces */}
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-red-100 rounded-lg flex items-center justify-center relative">
                      <Paintbrush className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center relative">
                      <Code className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center relative">
                      <Megaphone className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center relative">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="text-center mt-1 md:mt-2">
                    <span className="text-xs text-red-600 font-medium">Missing Pieces</span>
                  </div>
                </div>
              </div>

              {/* 2. Super Labs Nigeria Solution (Right Center) - responsive */}
              <div className="absolute -right-4 md:right-12 top-1/3 transform -translate-y-1/2 z-10">
                <div className="bg-white border border-blue-500 rounded-2xl p-2 md:p-4 shadow-2xl animate-float max-w-[100px] md:max-w-[140px]">
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-1 md:mb-2 mx-auto">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-full"
                    >
                      <source src="/logo-animation.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <span className="text-blue-500 text-xs font-medium block text-center leading-tight">
                    Solving the puzzle
                  </span>
                </div>
              </div>

              {/* 3. Complete Puzzle (Bottom Center - responsive */}
              <div className="absolute left-1/2 -bottom-4 md:bottom-2 transform -translate-x-1/2">
                <div className="bg-linear-to-br from-green-50 to-emerald-100 rounded-2xl p-3 md:p-4 shadow-lg border border-green-200">
                  <div className="grid grid-cols-2 gap-0 m-1"> {/* This closes the space - No gap for complete puzzle look */}
                    {/* Complete Puzzle Pieces */}
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-tl-lg flex items-center justify-center shadow-sm border border-green-200">
                      <Paintbrush className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-tr-lg flex items-center justify-center shadow-sm border border-green-200">
                      <Code className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-bl-lg flex items-center justify-center shadow-sm border border-green-200">
                      <Megaphone className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-br-lg flex items-center justify-center shadow-sm border border-green-200">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                    </div>
                  </div>
                  <div className="text-center mt-1 md:mt-2">
                    <span className="text-xs text-green-600 font-medium">Puzzle Solved</span>
                  </div>
                </div>
              </div>

              {/* 4. Client (Left Center) - responsive */}
              <div className="absolute -left-4 md:left-2 top-40 md:top-60 transform -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center shadow-lg border border-blue-500 mb-1">
                    <Users className="w-4 h-4 md:w-6 md:h-6 text-blue-500" />
                  </div>
                  <span className="text-xs text-blue-500 font-medium text-center max-w-20 md:max-w-[120px]">Happy Client</span>
                </div>
              </div>

              {/* Connection Lines - For Large Devices */}
              <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                {/* Line 1: Incomplete Puzzle → Super Labs Nigeria */}
                <path 
                  d="M160,100 Q250,50 280,180"
                  stroke="#3B82F6" 
                  strokeWidth="1" 
                  strokeDasharray="0 0"
                  fill="none"
                  className="animate-pulse"
                />
                {/* Line 2: Super Labs Nigeria → Complete Puzzle */}
                <path 
                  d="M290,149 Q299,226 260,240"
                  stroke="#3B82F6" 
                  strokeWidth="1" 
                  strokeDasharray="0 0"
                  fill="none"
                  className="animate-pulse"
                />
                {/* Line 3: Complete Puzzle → Client */}
                <path 
                  d="M128,249 Q160,248 72,250"
                  stroke="#3B82F6" 
                  strokeWidth="1" 
                  strokeDasharray="0 0"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>

              {/* Connection Lines - For Mobile Devices */}
              <svg className="md:hidden absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                {/* Line 1: Incomplete Puzzle (top-left) → Super Labs Nigeria (right-center) */}
                <path 
                  d="M176,60 Q250,80 320,150"
                  stroke="#3B82F6" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                />
  
                {/* Line 2: Super Labs Nigeria → Complete Puzzle (bottom-center) */}
                <path 
                  d="M300,160 Q300,225 272,245"
                  stroke="#3B82F6" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                />
  
                {/* Line 3: Complete Puzzle → Client (left-center) */}
                <path 
                  d="M122,249 Q138,249 55,250"
                  stroke="#3B82F6" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Floating Success Elements - responsive */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:right-12 bg-white rounded-full p-1 md:p-2 shadow-lg border border-green-500">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
            </div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white rounded-full p-1 md:p-2 shadow-lg border border-black">
              <Puzzle className="w-3 h-3 md:w-4 md:h-4 text-black" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}