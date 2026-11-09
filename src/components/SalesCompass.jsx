import React from 'react';
import { Search, FileText, Users, Handshake } from 'lucide-react';
import SeremetImmoButton from './SeremetImmoButton';

export default function SalesCompass({ onOpenValuation, onOpenInquiry }) {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: 'Erstbegehung & Wertermittlung',
      desc: 'Wir sichten Ihr Objekt vor Ort in Nienburg, prüfen Baujahr, Zustand und Mikrolage und ermitteln gemeinsam den erzielbaren Bestpreis.',
      badge: 'Unverbindlich & 0 €'
    },
    {
      num: '02',
      icon: FileText,
      title: 'Unterlagen & Premium-Exposé',
      desc: 'Wir beschaffen fehlende amtliche Dokumente (Energieausweis, Grundbuch, Flurkarte) und erstellen ein verkaufsstarkes Exposé mit Profi-Fotos.',
      badge: 'Voller Service'
    },
    {
      num: '03',
      icon: Users,
      title: 'Geprüfte Besichtigungen',
      desc: 'Keine Immobilientouristen: Wir führen ausschließlich Einzelbesichtigungen mit vorab bonitäts- und finanzierungsgeprüften Interessenten.',
      badge: 'Sichere Solvenz'
    },
    {
      num: '04',
      icon: Handshake,
      title: 'Notarvertrag & Übergabe',
      desc: 'Wir stimmen den Kaufvertrag mit dem Notar ab, begleiten Sie zur Beurkundung und führen die ordnungsgemäße Schlüsselübergabe durch.',
      badge: 'Rechtssicher'
    }
  ];

  const handleAction = () => {
    if (onOpenInquiry) {
      onOpenInquiry('bewertung');
    } else if (onOpenValuation) {
      onOpenValuation();
    }
  };

  return (
    <section id="ablauf" className="py-20 sm:py-28 bg-[#F5F2EB] border-t border-[#E6E0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] text-weser-900 text-xs font-semibold mb-4 border border-[#D9D0BD]">
            <span>Der Seremet-Verkaufskompass</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-weser-950 mb-5 leading-tight">
            In 4 klaren Schritten zum erfolgreichen Notartermin.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            Transparenz schafft Vertrauen. So begleiten wir Sie vom ersten unverbindlichen Gespräch bis zur sicheren Kaufpreiszahlung auf Ihr Konto.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="group bg-[#FDFCF9] hover:bg-white rounded-3xl p-7 border border-[#E3DCCEA0] hover:border-weser-600/40 shadow-xs hover:shadow-[0_16px_36px_rgba(26,38,57,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between relative cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-stone-400 group-hover:text-weser-800 transition-colors">
                      {st.num}
                    </span>
                    <span className="text-[11px] font-semibold text-weser-700 bg-weser-50 px-2.5 py-1 rounded-md border border-weser-200/50 group-hover:bg-weser-100 group-hover:border-weser-300 transition-colors">
                      {st.badge}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-weser-100/80 text-weser-800 group-hover:bg-weser-900 group-hover:text-white group-hover:scale-105 flex items-center justify-center mb-4 transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-weser-950 mb-2 leading-snug group-hover:text-weser-800 transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-weser-950 rounded-3xl p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-weser-800/60 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-cyan-400 mb-2">
              Unverbindlich & Diskret
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-3 text-white">
              Möchten Sie den aktuellen Bestpreis Ihrer Immobilie erfahren?
            </h3>
            <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed">
              Vereinbaren Sie jetzt ein unverbindliches Erstgespräch mit Erdal Seremet – persönlich vor Ort in Nienburg oder per telefonischer Vorabbewertung.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <SeremetImmoButton
              onClick={handleAction}
              text="Kostenlose Wertermittlung"
              subtitle="Unverbindlich & 0 € vor Ort"
              size="default"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
