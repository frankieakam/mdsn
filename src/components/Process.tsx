'use client';

import { Search, FileText, Users, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Discover & Diagnose',
      description: 'We dive deep into your business goals, audience, and challenges to define the core problem.'
    },
    {
      icon: FileText,
      title: 'Hypothesize & Quote',
      description: 'We present a detailed plan and a fixed-price quote for the solution. No surprises.'
    },
    {
      icon: Users,
      title: 'Assemble & Execute',
      description: 'We select the ideal specialists from our network and manage the entire process.'
    },
    {
      icon: Rocket,
      title: 'Launch & Analyze',
      description: 'We deliver the final product and provide a full report on the results.'
    }
  ];

  return (
    <section id="our-process" className="py-18 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our &ldquo;Lab Protocol&rdquo;: Results-Driven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our proven 4-step &ldquo;Lab Protocol&rdquo; ensures consistent, high-quality delivery for clients worldwide. Systematic, transparent, and results-driven.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          {/* Horizontal for large devices */}
          <div className="hidden md:block absolute top-50 left-0 right-0 h-0.5 bg-black"></div>

          {/* Vertical for mobile only - hidden on tablets and up */}
          <div className="md:hidden absolute left-1/2 top-14 bottom-0 w-0.5 bg-black -translate-x-1/2"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mt-6 mb-6 relative z-10">
                  <span className="text-white bg-black rounded-full px-2 py-0 font-bold text-lg">{index + 1}</span>
                </div>
                
                {/* Step Content */}
                <div className="bg-gray-50 rounded-lg p-6 h-64">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}