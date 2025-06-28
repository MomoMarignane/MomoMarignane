"use client";

import { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

// Import des composants de sections
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ClientBackground from "@/components/sections/ClientBackground";
import Loading from "@/components/ui/Loading";

export default function Home() {
  const mousePosition = useMousePosition();
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Custom Cursor removed due to positioning issues */}
      
      {/* Style global pour empêcher le défilement horizontal */}
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }
      `}</style>
      
      {/* 3D Background */}
      <ClientBackground 
        backgroundOpacity={backgroundOpacity} 
        mousePosition={mousePosition} 
      />

      <div className="min-h-screen relative">
        {/* Navigation */}
        <Header />

        {/* Main Content Sections */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
