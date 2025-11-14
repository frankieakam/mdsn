'use client';

import Image from 'next/image';

// Import all logo images
import shopifyLogo from '@/assets/tech-logos/shopify.png';
import wordpressLogo from '@/assets/tech-logos/wordpress.png';
import xLogo from '@/assets/tech-logos/x.png';
import figmaLogo from '@/assets/tech-logos/figma.png';
import vscodeLogo from '@/assets/tech-logos/vscode.png';
import framerLogo from '@/assets/tech-logos/framer.png';
import androidLogo from '@/assets/tech-logos/android.png';
import canvaLogo from '@/assets/tech-logos/canva.png';
import wixLogo from '@/assets/tech-logos/wix.png';
import amazonKdpLogo from '@/assets/tech-logos/amazon-kdp.png';
import metaLogo from '@/assets/tech-logos/meta.png';
import zedLogo from '@/assets/tech-logos/zed.png';
import iosLogo from '@/assets/tech-logos/ios.png';
import googleLogo from '@/assets/tech-logos/google.png';
import tiktokLogo from '@/assets/tech-logos/tiktok.png';
import mailchimpLogo from '@/assets/tech-logos/mailchimp.png';
import neovimLogo from '@/assets/tech-logos/neovim.png';
import stripeLogo from '@/assets/tech-logos/stripe.png';
import webflowLogo from '@/assets/tech-logos/webflow.png';
import paystackLogo from '@/assets/tech-logos/paystack.png';
import awsLogo from '@/assets/tech-logos/aws.png';
import flutterwaveLogo from '@/assets/tech-logos/flutterwave.png';
import adobeLogo from '@/assets/tech-logos/adobe.png';
import spotifyLogo from '@/assets/tech-logos/spotify.png';

// Create a mapping object
const logoMap = {
  shopify: shopifyLogo,
  wordpress: wordpressLogo,
  x: xLogo,
  figma: figmaLogo,
  vscode: vscodeLogo,
  framer: framerLogo,
  android: androidLogo,
  canva: canvaLogo,
  wix: wixLogo,
  'amazon-kdp': amazonKdpLogo,
  meta: metaLogo,
  zed: zedLogo,
  ios: iosLogo,
  google: googleLogo,
  tiktok: tiktokLogo,
  mailchimp: mailchimpLogo,
  neovim: neovimLogo,
  stripe: stripeLogo,
  webflow: webflowLogo,
  paystack: paystackLogo,
  aws: awsLogo,
  flutterwave: flutterwaveLogo,
  adobe: adobeLogo,
  spotify: spotifyLogo,
};

const techLogos = Object.keys(logoMap);

export default function SocialProof() {
  // Create multiple duplicates for seamless looping
  const scrollingLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos];

  return (
    <section id="social-proof" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Logo Carousel */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted By Industry Leading Tools
          </h3>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-200 to-transparent z-10 rounded-lg"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-200 to-transparent z-10 rounded-lg"></div>
            
            {/* Logo Carousel - Use multiple duplicates for seamless loop */}
            <div className="flex animate-scroll space-x-8 py-4">
              {scrollingLogos.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="shrink-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 flex items-center justify-center group">
                    <Image
                      src={logoMap[logo as keyof typeof logoMap]}
                      alt={`${logo} logo`}
                      width={50}
                      height={50}
                      className="object-contain group-hover:grayscale-50 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 4)); /* Adjust based on number of duplicates */
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}