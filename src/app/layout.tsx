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
  title: "Super Labs Nigeria | Global Digital Agency - Web & App Design, Development & SEO",
  description: "Super Labs Nigeria: Global digital agency serving worldwide clients. Full-service web and app design, development, and digital marketing. Nigerian excellence, global standards.",
  keywords: "digital agency, web and app development, SEO services, global web and app design, Nigerian tech agency, international digital marketing",
  openGraph: {
    title: "Super Labs Nigeria - Your Global Digital Growth Partner",
    description: "Nigerian digital agency serving global clients with world-class web and app design, development, and SEO",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Super Labs Nigeria | Global Digital Agency",
    description: "Full-service digital agency serving clients worldwide",
  },
  icons: {
    icon: '/favicon.png',
  },
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-medium`}
      >
        {children}
      </body>
    </html>
  );
}
