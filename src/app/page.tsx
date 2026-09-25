"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FracturedDivider } from "@/components/ui/FracturedDivider";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#F4EFE6] text-[#101820] selection:bg-[#FF4D1C] selection:text-white">
      {/* Brand Cinematic Video Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Desktop Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Warm Ivory & Bold Typography) */}
      <HeroSection />

      {/* High-Voltage Moving Ticker Ribbon */}
      <MarqueeTicker />

      {/* Global Torn-Paper Boundary 1: Hero/Ticker -> 01 Projects */}
      <FracturedDivider
        variant={1}
        fromColor="#F4EFE6"
        toColor="#FFF9F0"
        accentColor="#FF4D1C"
        accentSecondary="rgba(16, 24, 32, 0.2)"
        height={84}
      />

      {/* 01 // Projects Section (Vivid Editorial Case Studies on Soft Cream) */}
      <ProjectsSection />

      {/* Global Torn-Paper Boundary 2: 01 Projects -> 02 Technology */}
      <FracturedDivider
        variant={2}
        fromColor="#FFF9F0"
        toColor="#F4EFE6"
        accentColor="#315CFF"
        accentSecondary="#B8E000"
        height={84}
      />

      {/* 02 // Technology Section (Kinetic Ecosystem on Warm Ivory) */}
      <SkillsSection />

      {/* Global Torn-Paper Boundary 3: 02 Technology -> 03 About */}
      <FracturedDivider
        variant={3}
        fromColor="#F4EFE6"
        toColor="#F4EFE6"
        accentColor="#B8E000"
        accentSecondary="#FF4D1C"
        height={84}
      />

      {/* 03 // About Section (Powder Blue & Warm Ivory Editorial Profile + Spoken Bio) */}
      <AboutSection />

      {/* Global Torn-Paper Boundary 4: 03 About -> 04 Certifications */}
      <FracturedDivider
        variant={4}
        fromColor="#F4EFE6"
        toColor="#FFF9F0"
        accentColor="#FF4D1C"
        accentSecondary="rgba(16, 24, 32, 0.2)"
        height={84}
      />

      {/* 04 // Certifications Section (Authentic PDFs on Soft Cream) */}
      <CertificationsSection />

      {/* Global Torn-Paper Boundary 5: 04 Certifications -> 05 Education */}
      <FracturedDivider
        variant={5}
        fromColor="#FFF9F0"
        toColor="#101820"
        accentColor="#B8E000"
        accentSecondary="#315CFF"
        height={88}
      />

      {/* 05 // Education Section (Deep Ink Navy Academic Matrix) */}
      <EducationSection />

      {/* Global Torn-Paper Boundary 6: 05 Education -> 06 Contact */}
      <FracturedDivider
        variant={6}
        fromColor="#101820"
        toColor="#FF4D1C"
        accentColor="#B8E000"
        accentSecondary="#FFF9F0"
        height={88}
      />

      {/* 06 // Contact Section (Signal Orange Finale with Direct DM Form) */}
      <ContactSection />

      {/* Global Torn-Paper Boundary 7: 06 Contact -> Footer */}
      <FracturedDivider
        variant={7}
        fromColor="#FF4D1C"
        toColor="#101820"
        accentColor="#315CFF"
        accentSecondary="#B8E000"
        height={84}
      />

      {/* Footer (Deep Ink Navy) */}
      <Footer />
    </main>
  );
}
