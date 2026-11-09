import React from 'react';
import { Phone, Mail, MapPin, Star, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Footer({ 
  onOpenLegal,
  onNavigateHome,
  onNavigatePortfolio,
  onNavigateSection 
}) {
  return (
    <footer className="bg-[#101C2E] text-stone-300 pt-16 sm:pt-20 pb-12 border-t border-[#1F2F47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#21344F]">
          {/* Brand & Mission (Col 1 - 5) */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 rounded-2xl p-3 inline-block mb-6 shadow-sm">
              <a 
                href="/" 
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
              >
                <img
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/logo.webp"
                  alt="Immobilien an der Weser Logo"
                  className="h-12 w-auto object-contain cursor-pointer"
                />
              </a>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed mb-6 max-w-md">
              <strong className="text-white font-semibold">Immobilien an der Weser GmbH:</strong> Ihr inhabergeführter, zertifizierter IHK-Makler für Nienburg (Weser) und die gesamte Mittelweser-Region. Immobilienverkauf, diskrete Vermietung und fundierte Bodenwertanalysen.
            </p>

            {/* Google Review Badge in Footer */}
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJDcUojv-MsEcRnMy8Mjga69s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#17273F] border border-[#2B4163] hover:border-weser-400 text-xs text-white transition-all group"
            >
              <div className="w-6 h-6 rounded-md bg-white text-blue-600 flex items-center justify-center font-bold text-sm">
                G
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-white font-bold ml-1">4.9 / 5.0</span>
                </div>
                <span className="text-stone-400 text-[11px] group-hover:text-weser-300 transition-colors">
                  18+ Kundenstimmen auf Google Maps
                </span>
              </div>
            </a>
          </div>

          {/* Quick Links (Col 6 - 8) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href="/#leistungen" 
                  onClick={(e) => {
                    if (onNavigateSection) {
                      e.preventDefault();
                      onNavigateSection('leistungen');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Leistungen & Verkauf
                </a>
              </li>
              <li>
                <a 
                  href="/immobilien" 
                  onClick={(e) => {
                    if (onNavigatePortfolio) {
                      e.preventDefault();
                      onNavigatePortfolio();
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Aktuelle Immobilienangebote
                </a>
              </li>
              <li>
                <a 
                  href="/#wertermittlung" 
                  onClick={(e) => {
                    if (onNavigateSection) {
                      e.preventDefault();
                      onNavigateSection('wertermittlung');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Kostenlose Wertermittlung
                </a>
              </li>
              <li>
                <a 
                  href="/#ueber-uns" 
                  onClick={(e) => {
                    if (onNavigateSection) {
                      e.preventDefault();
                      onNavigateSection('ueber-uns');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Über Erdal Seremet
                </a>
              </li>
              <li>
                <a 
                  href="/#kontakt" 
                  onClick={(e) => {
                    if (onNavigateSection) {
                      e.preventDefault();
                      onNavigateSection('kontakt');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Büro & Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Regulatory & Contact Info (Col 9 - 12) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Maklerbüro & Pflichtangaben
            </h4>
            <div className="space-y-3 text-xs text-stone-300 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-weser-400 shrink-0 mt-0.5" />
                <span>Verdener Straße 30, 31582 Nienburg (Weser)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-weser-400 shrink-0 mt-0.5" />
                <a href="tel:050218600021" className="hover:text-white font-medium">
                  05021 / 860 00 21
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-weser-400 shrink-0 mt-0.5" />
                <a href="mailto:info@immobilien-weser.de" className="hover:text-white font-medium">
                  info@immobilien-weser.de
                </a>
              </div>
            </div>

            {/* Chamber & Law Info */}
            <div className="mt-5 pt-4 border-t border-[#21344F] text-[11px] text-stone-400 space-y-1">
              <div>
                <strong>Aufsichtsbehörde:</strong> IHK Hannover (§ 34c GewO)
              </div>
              <div>
                <strong>Handelsregister:</strong> HRB 208238, AG Walsrode
              </div>
              <div>
                <strong>Geschäftsführer:</strong> Erdal Seremet
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Modals */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Immobilien an der Weser GmbH. Alle Rechte vorbehalten.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Impressum
            </button>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Datenschutz
            </button>
            <button
              onClick={() => onOpenLegal('barrierefreiheit')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Barrierefreiheitserklärung
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
