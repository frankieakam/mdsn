'use client';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import SocialProof from "@/components/SocialProof";
import Process from "@/components/Process";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Scroll reveal component
const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <ScrollReveal>
        <WhyUs />
      </ScrollReveal>

      <ScrollReveal>
        <SocialProof />
      </ScrollReveal>

      <ScrollReveal>
        <Process />
      </ScrollReveal>

        <Services />

      <ScrollReveal>
        <CaseStudies />
      </ScrollReveal>

      <ScrollReveal>
        <CTA />
      </ScrollReveal>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
