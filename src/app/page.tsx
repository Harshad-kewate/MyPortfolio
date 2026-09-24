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

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-navy-950 text-cream-100 selection:bg-vividOrange selection:text-white">
      {/* Brand Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Banner */}
      <MarqueeTicker />

      {/* 01 // About Section (Cream Editorial) */}
      <AboutSection />

      {/* 02 // Projects Section (Navy & Charcoal Deep Dive) */}
      <ProjectsSection />

      {/* 03 // Skills Section (Interactive Stack Matrix) */}
      <SkillsSection />

      {/* 04 // Certifications Section (Cream Industry Credentials) */}
      <CertificationsSection />

      {/* 05 // Education Section (Academics & Hackathons) */}
      <EducationSection />

      {/* 06 // Contact Section (Vivid Orange Finale) */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
