import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import FeaturedProperties from './components/FeaturedProperties';
import Services from './components/Services';
import ValuationCalculator from './components/ValuationCalculator';
import AboutFounder from './components/AboutFounder';
import TestimonialsRoundel from './components/TestimonialsRoundel';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import PropertyDetailModal from './components/PropertyDetailModal';
import InquiryModal from './components/InquiryModal';
import MobileQuickBar from './components/MobileQuickBar';
import PortfolioPage from './pages/PortfolioPage';

export default function App() {
  // Routing state ('/' vs '/immobilien')
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      if (p === '/immobilien' || p === '/portfolio') return '/immobilien';
    }
    return '/';
  });

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      if (p === '/immobilien' || p === '/portfolio') {
        setCurrentPath('/immobilien');
      } else {
        setCurrentPath('/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Modal states
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalActiveTab, setLegalActiveTab] = useState('impressum');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('Allgemeine Anfrage');

  const handleOpenLegal = (tab = 'impressum') => {
    setLegalActiveTab(tab);
    setLegalModalOpen(true);
  };

  const handleOpenValuation = () => {
    if (currentPath !== '/') {
      window.history.pushState({}, '', '/#wertermittlung');
      setCurrentPath('/');
      setTimeout(() => {
        const el = document.getElementById('wertermittlung');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      const el = document.getElementById('wertermittlung');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (subject = 'Allgemeine Anfrage') => {
    setInquirySubject(subject);
    setInquiryModalOpen(true);
  };

  const handleNavigateHome = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePortfolio = () => {
    if (window.location.pathname !== '/immobilien') {
      window.history.pushState({}, '', '/immobilien');
    }
    setCurrentPath('/immobilien');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId) => {
    if (currentPath !== '/') {
      window.history.pushState({}, '', `/#${sectionId}`);
      setCurrentPath('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isPortfolioPage = currentPath === '/immobilien' || currentPath === '/portfolio';

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 font-sans selection:bg-weser-500 selection:text-white pb-16 md:pb-0">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenValuation={handleOpenValuation}
        onOpenInquiry={handleOpenInquiry}
        currentPath={currentPath}
        onNavigateHome={handleNavigateHome}
        onNavigatePortfolio={handleNavigatePortfolio}
        onNavigateSection={handleNavigateSection}
      />

      <main>
        {isPortfolioPage ? (
          /* Ausgelagerte Portfolio-Unterseite mit intelligenter Sortierung & Filtern */
          <PortfolioPage
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onOpenInquiry={handleOpenInquiry}
            onNavigateHome={handleNavigateHome}
          />
        ) : (
          /* Startseite mit kompakter Highlight-Auswahl (Clean, ohne Tags, nur Reserviert) */
          <>
            {/* 2. Hero Section */}
            <Hero
              onOpenValuation={handleOpenValuation}
              onOpenInquiry={handleOpenInquiry}
            />

            {/* 3. Architectural Trust Ledger (Die 4 Vertrauens-Kacheln) */}
            <TrustStats />

            {/* 4. Ausgewählte Highlights (3 Objekte + CTA ins Portfolio) */}
            <FeaturedProperties
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onOpenInquiry={handleOpenInquiry}
              onNavigatePortfolio={handleNavigatePortfolio}
            />

            {/* 5. Inhaber & Philosophie mit feststehendem, dezentem Villen-Hintergrundbild */}
            <AboutFounder onOpenInquiry={handleOpenInquiry} />

            {/* 6. The 4 Core Services */}
            <Services
              onOpenValuation={handleOpenValuation}
              onOpenInquiry={handleOpenInquiry}
            />

            {/* 7. Interactive Valuation Calculator (Lead-Magnet) */}
            <ValuationCalculator />

            {/* 8. Client Reviews 3D Roundel */}
            <TestimonialsRoundel />

            {/* 10. Contact, Office & Location */}
            <ContactLocation onOpenInquiry={handleOpenInquiry} />
          </>
        )}
      </main>

      {/* 11. Footer & Regulatory Disclosures */}
      <Footer 
        onOpenLegal={handleOpenLegal}
        onNavigateHome={handleNavigateHome}
        onNavigatePortfolio={handleNavigatePortfolio}
        onNavigateSection={handleNavigateSection}
      />

      {/* Modals */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        activeTab={legalActiveTab}
        setActiveTab={setLegalActiveTab}
      />

      <PropertyDetailModal
        property={selectedProperty}
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialSubject={inquirySubject}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileQuickBar onOpenValuation={handleOpenValuation} />
    </div>
  );
}
