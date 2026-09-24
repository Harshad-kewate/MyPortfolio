"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FracturedDivider } from "@/components/ui/FracturedDivider";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-cream text-charcoal-900 selection:bg-vividOrange selection:text-white">
      {/* Brand Cinematic Video Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Desktop Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Warm Cream & Bold Orange) */}
      <HeroSection />

      {/* Ticker Ribbon */}
      <MarqueeTicker />

      {/* Fractured Border 1: Hero/Marquee -> About */}
      <FracturedDivider
        variant={1}
        fillColor="#111215"
        position="bottom"
        accentColor="#FF4D00"
      />

      {/* 01 // About Section (Deep Charcoal & Electric Blue) */}
      <AboutSection />

      {/* Fractured Border 2: About -> Projects */}
      <FracturedDivider
        variant={2}
        fillColor="#F7F5EE"
        position="bottom"
        accentColor="#0055FF"
      />

      {/* 02 // Projects Section (Brighter Editorial Case Studies) */}
      <ProjectsSection />

      {/* Fractured Border 3: Projects -> Tech Stack */}
      <FracturedDivider
        variant={3}
        fillColor="#090E1A"
        position="bottom"
        accentColor="#D4FF00"
      />

      {/* 03 // Tech Stack Section (Interactive Floating Ecosystem) */}
      <SkillsSection />

      {/* Fractured Border 4: Tech Stack -> Certifications */}
      <FracturedDivider
        variant={4}
        fillColor="#F7F5EE"
        position="bottom"
        accentColor="#0055FF"
      />

      {/* 04 // Certifications Section (Warm Cream with Direct Viewable PDFs) */}
      <CertificationsSection />

      {/* Fractured Border 5: Certifications -> Education */}
      <FracturedDivider
        variant={5}
        fillColor="#090E1A"
        position="bottom"
        accentColor="#FF4D00"
      />

      {/* 05 // Education Section (Deep Navy) */}
      <EducationSection />

      {/* Fractured Border 6: Education -> Contact */}
      <FracturedDivider
        variant={6}
        fillColor="#FF4D00"
        position="bottom"
        accentColor="#D4FF00"
      />

      {/* 06 // Contact Section (Vivid Orange Finale with Direct Mailto) */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
