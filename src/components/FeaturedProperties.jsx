import React from 'react';
import { MapPin, BedDouble, Maximize2, Zap, ArrowRight } from 'lucide-react';
import { propertiesData } from '../data/properties';

export default function FeaturedProperties({ onSelectProperty, onOpenInquiry, onNavigatePortfolio }) {
  // Show top 3 highlight properties (1 house, 1 apartment, 1 investment)
  const featuredList = propertiesData.slice(0, 3);

  return (
    <section id="immobilien" className="relative pt-10 sm:pt-14 pb-12 sm:pb-16 bg-[#FBF9F5] scroll-mt-28 overflow-hidden">
      
      {/* ============================================================== */}
      {/* DEZENTES, HOCHWERTIGES ARCHITEKTUR-MUSTER (CAD / BLUEPRINT)     */}
      {/* ============================================================== */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden" 
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
        }}
        aria-hidden="true"
      >
        <svg 
          className="absolute inset-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern 
              id="archHousesPattern" 
              width="800" 
              height="320" 
              patternUnits="userSpaceOnUse"
            >
              {/* Feines architektonisches CAD-Raster & Fadenkreuze */}
              <g stroke="#009EE0" strokeWidth="0.6" strokeDasharray="2 6" opacity="0.35">
                <line x1="0" y1="290" x2="800" y2="290" />
                <line x1="0" y1="160" x2="800" y2="160" />
                <line x1="0" y1="80" x2="800" y2="80" />
                <line x1="200" y1="0" x2="200" y2="320" />
                <line x1="400" y1="0" x2="400" y2="320" />
                <line x1="600" y1="0" x2="600" y2="320" />
              </g>

              {/* Fadenkreuze an Schnittpunkten */}
              <g stroke="#009EE0" strokeWidth="0.8" opacity="0.5">
                <path d="M 195,160 H 205 M 200,155 V 165" />
                <path d="M 395,160 H 405 M 400,155 V 165" />
                <path d="M 595,160 H 605 M 600,155 V 165" />
                <path d="M 195,80 H 205 M 200,75 V 85" />
                <path d="M 395,80 H 405 M 400,75 V 85" />
                <path d="M 595,80 H 605 M 600,75 V 85" />
              </g>

              {/* 1. Modernes Einfamilienhaus (Frontansicht & Grundriss-Andeutung) */}
              <g stroke="#009EE0" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Satteldach mit exakter First-Höhe */}
                <path d="M 25,200 L 95,140 L 165,200" />
                <line x1="18" y1="200" x2="172" y2="200" strokeWidth="1.2" />
                <path d="M 120,165 V 135 H 132 V 176" />
                {/* Fassade */}
                <rect x="35" y="200" width="120" height="90" />
                {/* Geländelinie */}
                <line x1="15" y1="290" x2="185" y2="290" strokeWidth="1.4" />
                {/* Eingang mit Vordach */}
                <rect x="82" y="240" width="26" height="50" />
                <line x1="75" y1="234" x2="115" y2="234" strokeWidth="1.1" />
                {/* Fenster */}
                <rect x="48" y="245" width="22" height="28" />
                <line x1="59" y1="245" x2="59" y2="273" />
                <rect x="120" y="245" width="22" height="28" />
                <line x1="131" y1="245" x2="131" y2="273" />
                {/* Dachfenster */}
                <rect x="85" y="168" width="20" height="22" rx="1" />
                <line x1="95" y1="168" x2="95" y2="190" />
                {/* Bemaßungslinie */}
                <line x1="35" y1="210" x2="155" y2="210" strokeDasharray="1 3" opacity="0.6" />
                <line x1="35" y1="207" x2="35" y2="213" />
                <line x1="155" y1="207" x2="155" y2="213" />
              </g>

              {/* 2. Mehrgeschossiges Mehrfamilienhaus (Wohnanlage mit Balkonen) */}
              <g stroke="#009EE0" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="225" y="100" width="150" height="190" />
                {/* Staffelgeschoss */}
                <rect x="245" y="65" width="110" height="35" />
                <line x1="225" y1="100" x2="245" y2="100" strokeWidth="1.2" />
                <line x1="355" y1="100" x2="375" y2="100" strokeWidth="1.2" />
                {/* Geschosse */}
                <line x1="225" y1="150" x2="375" y2="150" strokeWidth="0.75" />
                <line x1="225" y1="200" x2="375" y2="200" strokeWidth="0.75" />
                <line x1="225" y1="250" x2="375" y2="250" strokeWidth="0.75" />
                {/* Auskragende Balkone */}
                <rect x="212" y="115" width="36" height="26" />
                <line x1="212" y1="125" x2="248" y2="125" strokeDasharray="2 2" />
                <rect x="212" y="165" width="36" height="26" />
                <line x1="212" y1="175" x2="248" y2="175" strokeDasharray="2 2" />
                {/* Fensterreihen */}
                <rect x="262" y="112" width="30" height="28" />
                <line x1="277" y1="112" x2="277" y2="140" />
                <rect x="312" y="112" width="40" height="28" />
                <line x1="332" y1="112" x2="332" y2="140" />
                <rect x="262" y="162" width="30" height="28" />
                <line x1="277" y1="162" x2="277" y2="190" />
                <rect x="312" y="162" width="40" height="28" />
                <line x1="332" y1="162" x2="332" y2="190" />
                {/* Eingang */}
                <rect x="280" y="250" width="40" height="40" />
                <line x1="300" y1="250" x2="300" y2="290" />
                <line x1="200" y1="290" x2="395" y2="290" strokeWidth="1.4" />
              </g>

              {/* 3. Moderne Architektenvilla (Cubic Bauhaus mit Glasfront) */}
              <g stroke="#009EE0" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="430" y="155" width="160" height="135" />
                <rect x="455" y="105" width="125" height="65" />
                <line x1="450" y1="105" x2="585" y2="105" strokeWidth="1.3" />
                {/* Panoramafenster OG */}
                <rect x="470" y="120" width="95" height="32" />
                <line x1="517" y1="120" x2="517" y2="152" />
                {/* Große Hebe-Schiebetür EG */}
                <rect x="445" y="210" width="110" height="80" />
                <line x1="500" y1="210" x2="500" y2="290" strokeWidth="1.1" />
                <line x1="472" y1="210" x2="472" y2="290" strokeDasharray="3 2" />
                <line x1="528" y1="210" x2="528" y2="290" strokeDasharray="3 2" />
                {/* Pergola */}
                <line x1="590" y1="180" x2="620" y2="180" strokeWidth="1.1" />
                <line x1="620" y1="180" x2="620" y2="290" strokeWidth="1.1" />
                <line x1="605" y1="180" x2="605" y2="290" strokeDasharray="2 4" />
                <line x1="415" y1="290" x2="635" y2="290" strokeWidth="1.4" />
              </g>

              {/* 4. Stadthaus mit Pultdach */}
              <g stroke="#009EE0" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 660,135 L 755,170 L 755,290 L 660,290 Z" />
                <line x1="655" y1="133" x2="762" y2="172" strokeWidth="1.3" />
                <rect x="700" y="180" width="40" height="42" />
                <line x1="700" y1="208" x2="740" y2="208" strokeDasharray="2 2" />
                <rect x="672" y="180" width="20" height="32" />
                <rect x="672" y="240" width="28" height="32" />
                <rect x="715" y="235" width="24" height="55" />
                <line x1="645" y1="290" x2="775" y2="290" strokeWidth="1.4" />
              </g>

              {/* Technische Höhenkote & Nordpfeil */}
              <g stroke="#009EE0" strokeWidth="0.75" fill="none" opacity="0.5">
                <polygon points="95,130 99,137 91,137" fill="#009EE0" />
                <line x1="84" y1="137" x2="106" y2="137" />
                {/* Höhenmarke Penthouse */}
                <polygon points="305,55 309,62 301,62" fill="#009EE0" />
                <line x1="294" y1="62" x2="316" y2="62" />
                {/* Nordpfeil im Planquadrant */}
                <circle cx="765" cy="45" r="14" />
                <path d="M 765,35 L 769,49 L 765,46 L 761,49 Z" fill="#009EE0" />
                <text x="765" y="28" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#009EE0" textAnchor="middle" stroke="none">N</text>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archHousesPattern)" opacity="0.06" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D4] text-weser-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Portfolio & Highlights</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-weser-950 mb-3 leading-tight">
              Ausgewählte Immobilien in Nienburg & Weser-Region
            </h2>

            <p className="text-base text-stone-600 max-w-2xl font-light">
              Entdecken Sie ausgewählte Kauf- und Mietangebote. Alle weiteren Objekte mit interaktiver Filtersortierung finden Sie in unserem vollständigen Portfolio.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onOpenInquiry('suchauftrag')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-stone-50 text-weser-950 font-semibold text-xs border border-[#D5CDC0] shadow-2xs hover:shadow-xs hover:border-weser-800 transition-all cursor-pointer"
            >
              <span>Diskreten Suchauftrag anlegen</span>
            </button>
          </div>
        </div>

        {/* 3 Highlight Cards (CLEAN: KEINE TAGS AUSSER WENN RESERVIERT!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-12">
          {featuredList.map((prop) => (
            <div
              key={prop.id}
              onClick={() => onSelectProperty(prop)}
              className="group bg-white rounded-3xl border border-[#E5DFD3] overflow-hidden shadow-xs hover:shadow-[0_22px_45px_rgba(26,38,57,0.11)] hover:-translate-y-1.5 hover:border-weser-600/40 transition-all duration-300 ease-out flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.97]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* NUR EIN TAG WENN DAS OBJEKT RESERVIERT IST! */}
                {prop.status === 'Reserviert' && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/95 backdrop-blur-md text-white text-xs font-semibold shadow-md tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Reserviert
                    </span>
                  </div>
                )}

                {/* Price Overlay */}
                <div className="absolute bottom-3 left-4 text-white">
                  <div className="text-[11px] uppercase tracking-wider text-stone-200">
                    {prop.priceNote}
                  </div>
                  <div className="font-serif text-2xl font-bold tracking-tight text-white">
                    {prop.price}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-weser-600 shrink-0" />
                    <span className="truncate">{prop.location}</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-weser-950 mb-3 group-hover:text-weser-700 transition-colors line-clamp-2 leading-snug">
                    {prop.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed font-light">
                    {prop.description}
                  </p>
                </div>

                <div>
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#F0EBE1] text-xs text-stone-700 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-weser-600 shrink-0" />
                      <span className="font-medium truncate">{prop.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-weser-600 shrink-0" />
                      <span className="font-medium truncate">{prop.rooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-weser-600 shrink-0" />
                      <span className="font-medium truncate">{prop.energy}</span>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-weser-900 group-hover:text-weser-600 transition-colors">
                      Exposé & Details ansehen
                    </span>
                    <div className="w-7 h-7 rounded-full bg-weser-50 text-weser-600 group-hover:bg-weser-900 group-hover:text-white transition-all flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Central Portfolio CTA to go to the dedicated subpage */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-[#EAE3D5]">
          <button
            type="button"
            onClick={onNavigatePortfolio}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-weser-950 hover:bg-weser-900 text-white font-semibold text-sm shadow-xs hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
          >
            <span>Alle Immobilien im Portfolio ansehen</span>
            <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
}
