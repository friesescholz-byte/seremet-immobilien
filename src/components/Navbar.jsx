import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import SeremetImmoButton from './SeremetImmoButton';

export default function Navbar({ 
  onOpenValuation, 
  onOpenInquiry,
  currentPath = '/',
  onNavigateHome,
  onNavigatePortfolio,
  onNavigateSection
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Immobilien', id: 'portfolio', isRoute: true },
    { name: 'Leistungen', id: 'leistungen' },
    { name: 'Wertermittlung', id: 'wertermittlung' },
    { name: 'Über uns', id: 'ueber-uns' },
    { name: 'Kontakt', id: 'kontakt' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.isRoute) {
      if (onNavigatePortfolio) onNavigatePortfolio();
    } else {
      if (onNavigateSection) onNavigateSection(link.id);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
  };

  const isPortfolioActive = currentPath === '/immobilien' || currentPath === '/portfolio';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E7E2D7] py-2.5 sm:py-3'
            : 'bg-[#FBF9F5] border-b border-[#ECE6D9] py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Link – Puristisch & ohne Text daneben */}
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-weser-600 rounded-lg select-none"
              title="Zur Startseite"
            >
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/logo.webp"
                alt="Immobilien an der Weser Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-9 sm:h-11' : 'h-11 sm:h-14'
                }`}
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = link.isRoute && isPortfolioActive;
                return (
                  <a
                    key={link.name}
                    href={link.isRoute ? '/immobilien' : `/#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`text-[14px] font-medium transition-colors duration-200 relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-weser-600 after:transition-all after:duration-200 ${
                      isActive
                        ? 'text-weser-900 font-semibold after:w-full'
                        : 'text-stone-700 hover:text-weser-700 after:w-0 hover:after:w-full'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Phone Quick Link */}
              <a
                href="tel:050218600021"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-stone-700 hover:text-weser-900 hover:bg-[#F2ECE0] transition-all text-xs font-semibold whitespace-nowrap"
                title="Direkt in Nienburg anrufen"
              >
                <div className="w-7 h-7 rounded-lg bg-weser-100 flex items-center justify-center text-weser-700 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="whitespace-nowrap">05021 / 860 00 21</span>
              </a>

              {/* Primary CTA: Marktwert berechnen im edlen Hero-Stil */}
              <SeremetImmoButton
                size="nav"
                text="Marktwert anfragen"
                icon={ArrowUpRight}
                onClick={() => {
                  if (onOpenInquiry) onOpenInquiry('bewertung');
                  else if (onOpenValuation) onOpenValuation();
                }}
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:050218600021"
                className="p-2 rounded-xl bg-[#F0EBE1] text-weser-900 text-xs font-semibold"
                aria-label="Telefonnummer anrufen"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#F0EBE1] text-stone-800 hover:text-weser-900 cursor-pointer"
                aria-label="Menü öffnen"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#ECE6D9] bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.isRoute ? '/immobilien' : `/#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    link.isRoute && isPortfolioActive
                      ? 'bg-weser-900 text-white font-semibold'
                      : 'text-stone-700 hover:bg-[#F2EDE2] hover:text-weser-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#ECE6D9] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) onOpenInquiry('bewertung');
                  else if (onOpenValuation) onOpenValuation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-weser-900 text-white text-sm font-semibold shadow-sm cursor-pointer"
              >
                <span>Kostenlose Wertermittlung</span>
                <ArrowUpRight className="w-4 h-4 text-weser-400" />
              </button>
              <div className="flex items-center justify-between text-xs text-stone-600 px-1 pt-1">
                <span>Zertifiziert IHK § 34c GewO</span>
                <span className="font-semibold text-weser-900">05021 / 860 00 21</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
