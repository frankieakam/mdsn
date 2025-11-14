'use client';

import { Store, TrendingUp, BookOpen, Building2, CheckCircle, Calendar, CreditCard } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Store,
      title: 'The Digital Storefront',
      for: 'Small Businesses, Local Shops, Freelancers',
      includes: [
        'Professional Branding',
        '5-Page Website',
        'Basic SEO Setup',
        'Hosting Configuration',
        '1 Month Support'
      ],
      price: '$2,500 - $4,500',
      timeline: '2-3 weeks',
      buttonText: 'Get Quote',
      calendlyUrl: 'https://calendly.com/superlabsng/digital-storefront-consultation',
      paymentPlan: '50% upfront, 50% on delivery',
      monthlyRetainer: '$299/month for ongoing support & SEO',
      popularAddons: [
        'Additional Pages: $250/page',
        'E-commerce Setup: +$1,500',
        'Advanced SEO: +$500/month'
      ]
    },
    {
      icon: TrendingUp,
      title: 'The Growth Engine',
      for: 'E-commerce Stores, SaaS Companies, Online Coaches',
      includes: [
        'Everything in Digital Storefront',
        'E-commerce/Premium Business Setup',
        'Digital Marketing Strategy',
        'Email Marketing Integration',
        '3 Months Support'
      ],
      price: '$6,500 - $12,000',
      timeline: '4-6 weeks',
      buttonText: 'Get Quote',
      calendlyUrl: 'https://calendly.com/superlabsng/the-growth-engine-consultation',
      paymentPlan: '40% upfront, 30% mid-project, 30% on delivery',
      monthlyRetainer: '$799/month for marketing & maintenance',
      popularAddons: [
        'Custom Features: $150/hour',
        'Advanced Analytics: +$300/month',
        'Content Creation: +$1,000/month'
      ]
    },
    {
      icon: BookOpen,
      title: 'The Author Suite',
      for: 'Authors, Speakers, Influencers',
      includes: [
        'Personal Branding',
        'Author Website',
        'Amazon Kindle Publishing & Marketing',
        'SEO for Your Name',
        '2 Months Support'
      ],
      price: '$3,500 - $6,000',
      timeline: '3-4 weeks',
      buttonText: 'Get Quote',
      calendlyUrl: 'https://calendly.com/superlabsng/the-author-suite-consultation',
      paymentPlan: '50% upfront, 50% on delivery',
      monthlyRetainer: '$199/month for book marketing',
      popularAddons: [
        'Social Media Setup: +$750',
        'Email List Building: +$500',
        'Book Promotion: +$1,000/campaign'
      ]
    },
    {
      icon: Building2,
      title: 'The Enterprise Hub',
      for: 'NGOs, Government Offices, Medium-to-Large Companies',
      includes: [
        'Corporate Branding & Identity',
        'Multi-page Professional Website',
        'Advanced SEO & Content Strategy',
        'Donor/Client Portal Setup',
        '6 Months Support & Maintenance'
      ],
      price: '$15,000+',
      timeline: '8-12 weeks',
      buttonText: 'Get Quote',
      calendlyUrl: 'https://calendly.com/superlabsng/the-enterprise-hub-consultation',
      paymentPlan: 'Custom payment schedule available',
      monthlyRetainer: 'Custom retainer based on needs',
      popularAddons: [
        'Team Training: $2,000',
        'Advanced Security: +$1,500',
        '24/7 Support: +$1,000/month'
      ]
    }
  ];

  // Simple function to open Calendly in new tab
  const openCalendly = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Frameworks for Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We package our expertise into streamlined solutions to get you to market faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-black flex flex-col group"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-black transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-2 font-semibold text-sm">
                For: {service.for}
              </p>
              
              {/* Price Display */}
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-black mb-1">
                  {service.price}
                </div>
                <div className="text-sm text-gray-500 flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{service.timeline}</span>
                </div>
              </div>
              
              {/* Payment Plan */}
              <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 text-sm text-green-700">
                  <CreditCard className="w-4 h-4" />
                  <span className="font-semibold">{service.paymentPlan}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 grow">
                {service.includes.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-black mt-0.5 shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Monthly Retainer and Popular AddOns*/}
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm text-blue-500">
                  <span className="font-semibold">Ongoing Support: </span>
                  {service.monthlyRetainer}
                </div>
                <div className="text-sm text-blue-500 mt-2">
                  <span className="font-semibold">Popular AddOns: </span>
                  <ul className="mt-1 space-y-1">
                    {service.popularAddons.map((addon, addonIndex) => (
                      <li key={addonIndex}>• {addon}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button
                onClick={() => openCalendly(service.calendlyUrl)}
                className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center block"
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Custom Projects CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Flexible Solutions for Every Budget
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4">
                <CreditCard className="w-8 h-8 text-black mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Flexible Payment Plans</h4>
                <p className="text-gray-600 text-sm">Spread your investment with customized payment schedules</p>
              </div>
              <div className="text-center p-4">
                <Calendar className="w-8 h-8 text-black mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Monthly Retainers</h4>
                <p className="text-gray-600 text-sm">Ongoing support, marketing, and maintenance packages</p>
              </div>
              <div className="text-center p-4">
                <CheckCircle className="w-8 h-8 text-black mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 mb-2">Custom Add-ons</h4>
                <p className="text-gray-600 text-sm">Tailor your package with specific features and services</p>
              </div>
            </div>
            <button
              onClick={() => openCalendly('https://calendly.com/superlabsng/custom-project-consultation')}
              className="inline-block border border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors"
            >
              Discuss Your Custom Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}