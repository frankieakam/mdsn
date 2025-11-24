import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalSchema from "@/components/GlobalSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MDSN | Multi Digital Solutions Network - Global Digital Agency - Web & App Design, Development & SEO",
  description: "MDSN: Multi Digital Solutions Network. Global digital agency serving worldwide clients. Full-service web and app design, development, and digital marketing.",
  keywords: "digital agency, web and app development, SEO services, global web and app design, multi digital solutions, international digital marketing",
  openGraph: {
    title: "MDSN - Your Global Digital Growth Partner",
    description: "Multi Digital Solutions Network serving global clients with world-class web and app design, development, and SEO",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "MDSN | Multi Digital Solutions Network - Global Digital Agency",
    description: "Full-service digital agency serving clients worldwide",
  },
  icons: {
    icon: '/favicon.png',
  },
  // metadataBase: new URL('https://superlabsng.vercel.app'),
  // alternates: {
  //   canonical: '/',
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  // }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GlobalSchema />
        {/* Google Search Console Verification */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-medium`}
      >
        {children}
      </body>
    </html>
  );
}
