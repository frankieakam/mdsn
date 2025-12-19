'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  FaMobileAlt, FaWhatsapp, 
  FaEnvelope, FaInstagram, 
  FaLinkedin, FaTiktok, 
  FaFacebook, FaArrowLeft, 
  FaArrowRight 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';

export default function Footer() {
  const phoneNumber = '+2348105725081';
  const whatsappNumber = '+2348105725081';
  const emailAddress = 'wearemdsn@gmail.com';
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const socialLinks = [
    {
      icon: FaXTwitter,
      href: 'https://x.com/wearemdsn',
      color: 'text-black hover:text-white',
      bgColor: 'bg-white hover:bg-black',
      name: 'X'
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com/wearemdsn',
      color: 'text-black hover:text-white',
      bgColor: 'bg-white hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
      name: 'Instagram'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/company/wearemdsn',
      color: 'text-black hover:text-white',
      bgColor: 'bg-white hover:bg-[#1877F2]',
      name: 'LinkedIn'
    },
    {
      icon: FaTiktok,
      href: 'https://tiktok.com/@wearemdsn',
      color: 'text-black hover:text-white',
      bgColor: 'bg-white hover:bg-black',
      name: 'TikTok'
    },
    {
      icon: FaFacebook,
      href: 'https://facebook.com/wearemdsn',
      color: 'text-black hover:text-white',
      bgColor: 'bg-white hover:bg-[#1877F2]',
      name: 'Facebook'
    }
  ];

  // Trust signals
  const globalTrustSignals = [
    "Serving Clients in 15+ Countries",
    "24/7 Global Support",
    "International Payment Methods",
    "GDPR & Data Protection Compliant",
    "English-Speaking Team"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isManuallyClosed) return;

      const footer = document.getElementById('main-footer');
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Show when footer is 300px from bottom of viewport
      if (footerTop < windowHeight - 300) {
        setIsSocialVisible(true);
      } else {
        setIsSocialVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManuallyClosed]);

  const toggleSocialBar = () => {
    if (isSocialVisible) {
      // Close the sidebar
      setIsSocialVisible(false);
      setIsManuallyClosed(true);
    } else {
      // Open the sidebar
      setIsSocialVisible(true);
      setIsManuallyClosed(false);
    }
  };
  
  const openPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
        {/* Privacy Policy Modal */}
        <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={closePrivacyModal}
        emailAddress={emailAddress}
        phoneNumber={phoneNumber}
      />

      {/* Floating Social Media Sidebar */}
      <div className={`
        fixed left-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ease-out
        ${isSocialVisible ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="bg-white rounded-r-2xl shadow-2xl border border-gray-200 py-6 px-4 w-20 relative">
          {/* Toggle Button - Inside when open */}
          <button
            onClick={toggleSocialBar}
            className="absolute -right-[-1] top-[-15] bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-100 transition-colors"
            aria-label={isSocialVisible ? "Hide social media links" : "Show social media links"}
          >
            <FaArrowLeft className="w-3 h-3 text-gray-600" />
          </button>

          {/* Social Media Icons */}
          <div className="space-y-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 
                  ${social.bgColor} ${social.color} border border-gray-300 hover:border-transparent
                  transform hover:scale-110
                `}
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Follow Text */}
          <div className="mt-4">
            <span className="text-xs text-gray-600 font-extrabold rotate-180 writing-mode-vertical">
              FOLLOW US
            </span>
          </div>
        </div>
      </div>

      {/* Toggle Button - Outside when closed */}
      {!isSocialVisible && isManuallyClosed && (
        <button
          onClick={toggleSocialBar}
          className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ease-out bg-white rounded-r-2xl shadow-lg border border-gray-200 py-4 px-2 w-10 hover:bg-gray-50"
          aria-label="Show social media links"
        >
          <FaArrowRight className="w-4 h-4 text-gray-600" />
        </button>
      )}

      {/* Main Footer */}
      <footer id="main-footer" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white border-b-2">
                  <Image
                    src="/logo-removebg-preview.png"
                    alt="MDSN Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Multi Digital Solutions Network</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                MDSN is a global digital agency serving clients worldwide. We provide end-to-end digital solutions, strategy, design, development, and marketing for businesses of all sizes across international markets.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {globalTrustSignals.map((signal, idx) => (
                  <li key={idx} className="text-xs bg-gray-700 px-2 py-1 rounded">
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    {[
                        { name: 'Home', id: 'home' },
                        { name: 'Our Process', id: 'our-process' },
                        { name: 'Services', id: 'services' },
                        { name: 'Case Studies', id: 'case-studies' }
                    ].map((item) => (
                        <li key={item.id}>
                            <Link
                                href={`#${item.id}`}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    {/* Privacy Policy as button trigger */}
                    <li>
                        <button
                            onClick={openPrivacyModal}
                            className="text-gray-400 hover:text-white transition-colors text-left"
                        >
                            Privacy Policy
                        </button>
                    </li>
                </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                {/* Mobile Phone */}
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="flex items-center space-x-3 text-white hover:text-gray-400 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                    <FaMobileAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">Call Frankie</div>
                    <div className="text-sm">{phoneNumber}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\s/g, '').replace('+', '')}?text=${encodeURIComponent('Hello Frankie! I visited your MDSN website and would like to discuss a project.')}`}
                  className="flex items-center space-x-3 text-white hover:text-gray-400 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 bg-[#1da851] rounded-full flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Chat Frankie</div>
                    <div className="text-sm">{whatsappNumber}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center space-x-3 text-white hover:text-gray-400 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm">{emailAddress}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MDSN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}