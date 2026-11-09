import React from 'react';
import { Phone, Mail, Clock, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import SeremetImmoButton from './SeremetImmoButton';

export default function ContactLocation({ onOpenInquiry }) {
  return (
    <section id="kontakt" className="relative pt-24 sm:pt-36 pb-20 sm:pb-28 bg-gradient-to-b from-[#F5EFE5] via-[#FAF7F1] to-[#EFE7D8] overflow-hidden scroll-mt-16">
      
      {/* ============================================================== */}
      {/* 1. FLIESSENDER, ELEGANTER WESER-ÜBERGANG ZUM ABSCHNITT DARÜBER */}
      {/* ============================================================== */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -mt-px">
        <svg 
          viewBox="0 0 1440 85" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-12 sm:h-16 md:h-22 block"
          preserveAspectRatio="none"
        >
          {/* Sanfte, transluzente Sekundär-Flusslinie für Tiefenwirkung */}
          <path 
            d="M 0,0 L 1440,0 L 1440,28 C 1220,10 1020,48 780,22 C 540,-4 260,38 0,16 Z" 
            fill="#FBF9F5" 
            fillOpacity="0.45"
          />
          {/* Haupt-Schwungwelle: Schmilzt nahtlos aus der Bewertungs-Section (#FBF9F5) herab */}
          <path 
            d="M 0,0 L 1440,0 L 1440,44 C 1260,16 1060,60 800,34 C 550,8 260,54 0,28 Z" 
            fill="#FBF9F5" 
          />
          {/* Feine, edle Trennlinie entlang des fließenden Flusslaufs */}
          <path 
            d="M 0,28 C 260,54 550,8 800,34 C 1060,60 1260,16 1440,44" 
            fill="none" 
            stroke="#DFD7C5" 
            strokeWidth="1.2" 
            strokeOpacity="0.8" 
          />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* 2. DEZENTER, ARCHITEKTONISCHER HINTERGRUND MIT WESER-KONTUREN   */}
      {/* ============================================================== */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden" 
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
        }}
        aria-hidden="true"
      >
        {/* Subtile, warme Umgebungs-Tiefe (sehr sanft & diffus) */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#EAE0CF]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-cyan-500/[0.035] rounded-full blur-3xl pointer-events-none" />

        {/* Feine, fließende Höhen- und Flusskonturlinien der Weser-Landschaft Nienburgs */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <g fill="none" strokeLinecap="round">
            <path 
              d="M -100,240 C 240,300 480,170 820,270 C 1140,360 1360,240 1560,290" 
              stroke="#D5CBB8" 
              strokeWidth="1.1" 
              strokeDasharray="4 8"
              opacity="0.32" 
            />
            <path 
              d="M -100,320 C 260,380 520,250 860,350 C 1180,440 1380,320 1560,370" 
              stroke="#D5CBB8" 
              strokeWidth="1" 
              opacity="0.25" 
            />
            <path 
              d="M -100,410 C 280,460 560,340 900,430 C 1200,510 1400,400 1560,450" 
              stroke="#009EE0" 
              strokeWidth="0.85" 
              strokeDasharray="6 12"
              opacity="0.20" 
            />
            <path 
              d="M -100,500 C 300,550 600,430 940,510 C 1220,580 1420,480 1560,530" 
              stroke="#D5CBB8" 
              strokeWidth="1" 
              opacity="0.22" 
            />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-weser-600"></span>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-weser-800 uppercase">
                  Standort & Direkter Draht
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-weser-950 tracking-tight leading-[1.15] mb-4">
                Wir sind direkt in Nienburg für Sie erreichbar.
              </h2>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans font-light">
                Ob Sie ein Haus verkaufen möchten, eine verlässliche Wertermittlung benötigen oder Fragen zum Nienburger Immobilienmarkt haben: Erdal Seremet berät Sie persönlich und ehrlich.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6E0D3] shadow-xs space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-weser-700 flex items-center justify-center shrink-0 border border-cyan-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Telefonischer Sofortkontakt
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="tel:050218600021"
                      className="text-xl sm:text-2xl font-black text-weser-950 hover:text-weser-700 transition-colors"
                    >
                      05021 / 860 00 21
                    </a>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Mo. – Fr. 08:30 – 18:00 Uhr, Sa. 09:00 – 14:00 Uhr erreichbar.
                  </p>
                </div>
              </div>

              {/* Mobile / WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Mobil & WhatsApp Direktchat
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="https://wa.me/4915221048936?text=Hallo%20Herr%20Seremet,%20ich%20habe%20eine%20Frage%20zu%20einer%20Immobilie%20in%20Nienburg."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-weser-950 hover:text-emerald-700 transition-colors"
                    >
                      0152 210 48936 (WhatsApp)
                    </a>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Für kurze Fragen oder unkomplizierte Foto-Zusendungen.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 border border-stone-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    E-Mail für Exposés & Unterlagen
                  </span>
                  <div className="mt-0.5">
                    <a
                      href="mailto:info@immobilien-weser.de"
                      className="text-base sm:text-lg font-bold text-weser-950 hover:text-weser-700 transition-colors"
                    >
                      info@immobilien-weser.de
                    </a>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Wir antworten werktags in der Regel innerhalb weniger Stunden.
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 border border-stone-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Büro & Besprechung vor Ort
                  </span>
                  <div className="text-sm font-bold text-weser-950 mt-0.5 leading-snug">
                    Immobilien an der Weser GmbH<br />
                    Verdener Straße 30<br />
                    31582 Nienburg (Weser)
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 border border-stone-200">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Büro- & Sprechzeiten
                  </span>
                  <div className="text-sm font-bold text-weser-950 mt-0.5">
                    Montag – Freitag: 08:30 – 18:00 Uhr | Samstag: 09:00 – 14:00 Uhr
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Vor-Ort-Begehungen und Besichtigungen auch flexibel nach Absprache.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Card & Location Visual */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-weser-950 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block text-xs font-bold tracking-wider uppercase text-cyan-400 mb-2">
                  Schnell & Unverbindlich
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-4 leading-snug">
                  Erstgespräch oder Marktwertermittlung anfragen
                </h3>
                <p className="text-sm sm:text-base text-stone-200 leading-relaxed mb-8 max-w-md">
                  Wählen Sie einfach im kurzen Anfrage-Fenster Ihr Anliegen aus. Erdal Seremet meldet sich persönlich bei Ihnen für eine zügige und fundierte Abstimmung.
                </p>

                <div className="space-y-4">
                  <div className="pt-1">
                    <SeremetImmoButton 
                      onClick={() => onOpenInquiry('bewertung')} 
                      text="Erstgespräch anfordern" 
                      size="sm" 
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-stone-300 pt-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>100% diskret • Garantiert keine Weitergabe Ihrer Kontaktdaten.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Standort Visual Card */}
            <div className="rounded-2xl overflow-hidden border border-[#E6E0D3] bg-white shadow-sm">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/wohnung-modern-balkon.webp"
                alt="Bürostandort Verdener Straße 30 in Nienburg"
                className="w-full h-56 sm:h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-600">
                <span className="font-medium">Verdener Straße 30, 31582 Nienburg (Weser)</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Immobilien+an+der+Weser+GmbH+Verdener+Str.+30+31582+Nienburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-weser-700 hover:text-weser-900 underline shrink-0"
                >
                  Auf Google Maps ansehen ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
