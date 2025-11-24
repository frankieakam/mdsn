'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const navItems = useMemo(() => [
    { name: 'Home', id: 'home' },
    { name: 'Our Process', id: 'our-process' },
    { name: 'Services', id: 'services' },
    { name: 'Case Studies', id: 'case-studies' },
    { name: 'Contact', id: 'contact' }
  ], []);

  useEffect(() => {
    // Handle hash changes from URL (when footer links are clicked)
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && navItems.some(item => item.id === hash)) {
        setActiveNav(hash);
      } else if (hash === '' || !hash) {
        setActiveNav('home');
      }
    };

    // Intersection Observer with home detection
    const observer = new IntersectionObserver(
      (entries) => {
        let foundActive = false;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveNav(id);
            foundActive = true;
          }
        });

        // If no section is intersecting and we're near top, set home
        if (!foundActive && window.scrollY < 100) {
          setActiveNav('home');
        }
      },
      { 
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
      }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll to top for home detection
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveNav('home');
      }
    };

    // Handle logo click (going to home)
    const handleLogoClick = () => {
      setActiveNav('home');
    };

    // Add event listeners with timeout to avoid synchronous setState
    const initTimer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
      handleHashChange();
      
      // Check initial scroll position
      if (window.scrollY < 50) {
        setActiveNav('home');
      }
    }, 0);

    window.addEventListener('hashchange', handleHashChange);
    
    // Add logo click handler
    const logoLink = document.querySelector('a[href="/"]');
    if (logoLink) {
      logoLink.addEventListener('click', handleLogoClick);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(initTimer);
      
      const logoLink = document.querySelector('a[href="/"]');
      if (logoLink) {
        logoLink.removeEventListener('click', handleLogoClick);
      }
    };
  }, [navItems]);

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setActiveNav('home');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Image - With onClick handler */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={handleLogoClick}
          >
            <div className="relative">
              <div className="rounded-full w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="MDSN Logo"
                  width={48}
                  height={48}
                  className="transition-transform group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Multi Digital</span>
              <span className="text-xs text-gray-500 -mt-1">Solutions Network</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8"
          aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors group"
                onClick={() => handleNavClick(item.id)}
              >
                {/* Pulsing Circle Indicator */}
                <div className={`w-2 h-2 rounded-full bg-black transition-all duration-300 ${
                  activeNav === item.id ? 'opacity-100 animate-pulse' : 'opacity-0 group-hover:opacity-50'
                }`} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1.5">
              <div className="w-8 h-1.5 bg-gray-600"></div>
              <div className="w-6 h-1.5 bg-gray-600 ml-2"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4"
          aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="block text-gray-600 transition-colors"
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}