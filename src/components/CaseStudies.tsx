'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function CaseStudies() {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({...prev, [id]: true}));
  };

  const caseStudies = [
    {
      id: 1,
      title: 'Nokon Bespoke - Premium Tailoring Digital Presence',
      description: 'Transformed a traditional bespoke tailoring business into a modern digital brand with seamless client consultation workflows and premium online positioning.',
      results: ['Streamlined consultation process', 'Professional brand positioning', 'Mobile-optimized client experience'],
      image: '/case-studies/nokon-bespoke.png', 
      category: 'Custom Project',
      duration: '2 weeks',
      videoUrl: 'https://youtube.com/your-nokon-case-study'
    },
    // {
    //   id: 2,
    //   title: 'SaaS Product Launch & Scaling',
    //   description: 'Developed and launched a B2B SaaS product from concept to market, including UX design, development, and growth strategy.',
    //   results: ['+5000 users in 6 months', '+89% user satisfaction', '+200% MRR growth'],
    //   image: '/case-studies/saas.jpg', // You'll need to add this image
    //   category: 'SaaS',
    //   duration: '6 months',
    //   videoUrl: 'https://youtube.com/your-saas-case-study'
    // },
    // {
    //   id: 3,
    //   title: 'Author Platform & Book Marketing',
    //   description: 'Built a comprehensive author platform with personal branding, website, and Amazon Kindle marketing strategy.',
    //   results: ['#1 Amazon Bestseller', '+10,000 book sales', '+200% social media growth'],
    //   image: '/case-studies/author.jpg', // You'll need to add this image
    //   category: 'Publishing',
    //   duration: '2 months',
    //   videoUrl: 'https://youtube.com/your-author-case-study'
    // },
    // {
    //   id: 4,
    //   title: 'Corporate Digital Overhaul',
    //   description: 'Complete digital transformation for an established corporation including rebranding, web development, and digital infrastructure.',
    //   results: ['+150% web traffic', '+75% lead generation', '+40% brand recognition'],
    //   image: '/case-studies/corporate.jpg', // You'll need to add this image
    //   category: 'Corporate',
    //   duration: '4 months',
    //   videoUrl: 'https://youtube.com/your-corporate-case-study'
    // }
  ];

  const handleViewCaseStudy = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="case-studies" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-linear-to-br from-accent/20 to-gray-200 overflow-hidden">
                {!imageErrors[study.id] ? (
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    onError={() => handleImageError(study.id)}
                    priority={study.id === 1}
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{study.category}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs">
                    {study.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-4">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button  
                  onClick={() => handleViewCaseStudy(study.videoUrl)} 
                  className="w-full bg-white border border-black text-gray-700 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group/btn cursor-pointer">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}