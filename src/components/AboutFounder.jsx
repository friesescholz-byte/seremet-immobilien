import React from 'react';
import { Award, ShieldCheck, HeartHandshake, MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export default function AboutFounder({ onOpenInquiry }) {
  return (
    <section id="ueber-uns" className="relative py-20 sm:py-32 bg-[#FBF9F5] overflow-hidden border-t border-[#EAE3D5]">
      {/* ============================================================== */}
      {/* FESTSTEHENDES, DEZENTES HINTERGRUNDBILD (PARALLAX VILLA)       */}
      {/* ============================================================== */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/luxus-architektenvilla.webp")',
          filter: 'brightness(0.96) saturate(0.9)'
        }}
        aria-hidden="true"
      />
      {/* Edler, dezenter Warmton-Overlay: Nur ein wenig sichtbar, höchste Lesbarkeit */}
      <div 
        className="absolute inset-0 bg-[#FBF9F5]/90 backdrop-blur-[1px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column (Left) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Decorative Subtle Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-[#EAE3D5] to-transparent -z-10" />

              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E0D7C6] shadow-xl bg-weser-950 aspect-[3/4] max-h-[540px] relative">
                <img
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/erdal-seremet.webp"
                  alt="Erdal Seremet – Geschäftsführer & Immobilienmakler Nienburg"
                  className="w-full h-full object-cover object-top filter brightness-[0.98]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-weser-950/80 via-transparent to-transparent opacity-80" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md text-weser-950">
                  <div className="font-serif text-lg font-bold">Erdal Seremet</div>
                  <div className="text-xs text-weser-700 font-semibold">
                    Geschäftsführer & Zertifizierter Immobilienmakler IHK
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    Immobilien an der Weser GmbH • Nienburg
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Philosophy Column (Right) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DC] text-weser-900 text-xs font-semibold mb-4 border border-[#DFD8CA]">
              <span>Inhaber & Philosophie</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-weser-950 mb-6 leading-tight">
              „Ein Hausverkauf ist mehr als nur ein Notartermin.“
            </h2>

            {/* Core Mission Quote */}
            <div className="bg-[#FAF7F0] p-6 sm:p-7 rounded-2xl border-l-4 border-weser-600 border-y border-r border-[#E8E1D2] mb-8">
              <p className="text-base sm:text-lg text-weser-950 italic font-serif leading-relaxed">
                „Dahinter stehen Lebensgeschichten, persönliche Erinnerungen und oft das größte Vermögen einer Familie. Bei uns sind Sie keine anonyme Nummer in einer Kartei. Ich begleite Sie persönlich, ehrlich und mit vollem Einsatz vor Ort in Nienburg.“
              </p>
              <div className="text-xs font-semibold text-stone-500 mt-3">
                – Erdal Seremet, Geschäftsführer
              </div>
            </div>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Wer in Nienburg und der Mittelweser eine Immobilie verkaufen oder vermieten möchte, braucht keinen anonymen Konzern, sondern einen verlässlichen Partner mit echter Marktpräsenz. Wir leben hier, kennen die regionalen Gegebenheiten und setzen auf verbindliche Werte.
              </p>
              <p>
                Von der ersten realistischen Bewertung Ihrer Immobilie über die Erstellung hochwertiger Unterlagen bis zur finalen Beurkundung beim Notar haben Sie mit mir stets einen festen Ansprechpartner an Ihrer Seite.
              </p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5DFD2] hover:border-weser-600/40 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 shadow-2xs">
                <Award className="w-5 h-5 text-weser-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-weser-950">Zertifizierter Makler IHK</div>
                  <div className="text-xs text-stone-500">IHK Hannover • Zulassung § 34c GewO</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5DFD2] hover:border-weser-600/40 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-weser-950">Eingetragene GmbH</div>
                  <div className="text-xs text-stone-500">Amtsgericht Walsrode HRB 208238</div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Clean Agency Action Button & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenInquiry('erstgespraech')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-weser-950 hover:bg-weser-900 text-white font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Erstgespräch vereinbaren</span>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </button>

              <a
                href="https://wa.me/4915221048936?text=Hallo%20Herr%20Seremet,%20ich%20habe%20eine%20Frage%20zu%20einer%20Immobilie%20in%20Nienburg."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direktchat</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
