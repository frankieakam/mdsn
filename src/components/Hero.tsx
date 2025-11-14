'use client';

import FrankieConsultant from './FrankieConsultant';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/hero-animation.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 relative z-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              We Build & Grow Your Digital Business.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Super Labs Nigeria is your full-service digital partner. From brand identity to scalable websites, mobile apps, and targeted marketing, we provide the strategy, team & execution to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-accent text-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors text-center border border-blue-500"
              >
                Start Your Project
              </a>
              <a
                href="#our-process"
                className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:text-gray-300 transition-colors text-center"
              >
                See Our Process
              </a>
            </div>
          </div>

          {/* Frankie Consultant - Right Side Integration */}
          <div className="relative z-20 flex justify-center md:justify-end items-center">
            <FrankieConsultant />
          </div>
        </div>
      </div>
    </section>
  );
}