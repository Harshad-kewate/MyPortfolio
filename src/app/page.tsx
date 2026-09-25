"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { AboutSection } from "@/components/sections/AboutSection";
import { EditorialConnector } from "@/components/ui/EditorialConnector";
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
    <main className="relative min-h-screen bg-[#F7F5EE] text-charcoal-900 selection:bg-vividOrange selection:text-white">
      {/* Brand Cinematic Video Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Desktop Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Warm Cream & Bold Typography) */}
      <HeroSection />

      {/* Ticker Ribbon: High-voltage chartreuse separator */}
      <MarqueeTicker />

      {/* 01 // About Section (Light Cream Editorial Profile + Listen Feature) */}
      <AboutSection />

      {/* Editorial Chapter Connector: Smooth transition between light pages */}
      <EditorialConnector />

      {/* 02 // Projects Section (Vivid Editorial Case Studies) */}
      <ProjectsSection />

      {/* Seamless Transition 1: Projects (Cream) -> Tech Stack (Deep Navy) */}
      <FracturedDivider
        variant={1}
        fromColor="#F7F5EE"
        toColor="#050811"
        accentColor="#D4FF00"
      />

      {/* 03 // Tech Stack Section (Interactive Cosmos & Ecosystem) */}
      <SkillsSection />

      {/* Seamless Transition 2: Tech Stack (Deep Navy) -> Certifications (Cream) */}
      <FracturedDivider
        variant={2}
        fromColor="#050811"
        toColor="#F7F5EE"
        accentColor="#0055FF"
      />

      {/* 04 // Certifications Section (Warm Cream with Direct Viewable PDFs) */}
      <CertificationsSection />

      {/* Seamless Transition 3: Certifications (Cream) -> Education (Deep Navy) */}
      <FracturedDivider
        variant={3}
        fromColor="#F7F5EE"
        toColor="#050811"
        accentColor="#FF4D00"
      />

      {/* 05 // Education Section (Deep Navy Academic Matrix) */}
      <EducationSection />

      {/* Seamless Transition 4: Education (Deep Navy) -> Contact (Vivid Orange) */}
      <FracturedDivider
        variant={4}
        fromColor="#050811"
        toColor="#FF4D00"
        accentColor="#D4FF00"
      />

      {/* 06 // Contact Section (Vivid Orange Finale with Direct DM Form) */}
      <ContactSection />

      {/* Seamless Transition 5: Contact (Vivid Orange) -> Footer (Deep Navy) */}
      <FracturedDivider
        variant={2}
        fromColor="#FF4D00"
        toColor="#050811"
        accentColor="#FFFFFF"
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
