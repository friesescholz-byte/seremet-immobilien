import React from 'react';
import { 
  Home, 
  Calculator, 
  Key, 
  Building, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';

const services = [
  {
    id: 'verkauf',
    icon: Home,
    title: 'Erfolgreicher Immobilienverkauf',
    subtitle: 'Vom Premium-Exposé bis zur Beurkundung',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/service-immobilienverkauf-v2.webp',
    description: 'Wir ermitteln den marktgerechten Bestpreis, erstellen hochwertige Verkaufsunterlagen und koordinieren alle Termine mit echten, vorab bonitätsgeprüften Kaufinteressenten.',
    points: [
      'Hochwertige Objektfotografie & optimierte Grundrisse',
      'Diskreter Abgleich mit unserer vorgemerkten Suchkartei',
      'Komplette Vorbereitung und Begleitung zum Notartermin',
    ],
    ctaText: 'Verkauf anfragen',
  },
  {
    id: 'bewertung',
    icon: Calculator,
    title: 'Kostenlose Marktwertermittlung',
    subtitle: 'Fundierte Vor-Ort-Analyse nach Bodenrichtwert',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/service-marktwertermittlung-v2.webp',
    description: 'Was ist Ihr Haus oder Ihre Eigentumswohnung im aktuellen Zinsumfeld wert? Mit lokaler Marktkenntnis erhalten Sie eine verlässliche Einschätzung ohne ungenaue Internet-Schätzungen.',
    points: [
      'Persönliche Vor-Ort-Begehung durch Erdal Seremet',
      'Analyse aktueller Bodenrichtwerte im Landkreis Nienburg',
      '100 % unverbindlich und kostenfrei für Eigentümer',
    ],
    ctaText: 'Wertermittlung anfragen',
  },
  {
    id: 'vermietung',
    icon: Key,
    title: 'Diskrete & rechtssichere Vermietung',
    subtitle: 'Solvente Mieter ohne Besichtigungsstress',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/service-vermietung-komplett.webp',
    description: 'Wir prüfen Bonität und Selbstauskunft gründlich, erstellen aktuelle rechtssichere Mietverträge und führen eine ordnungsgemäße Schlüsselübergabe mit Protokoll durch.',
    points: [
      'Strenge Bonitätsprüfung (SCHUFA, Gehaltsnachweise)',
      'Rechtssicherer Mietvertrag nach aktueller Rechtsprechung',
      'Detailliertes Übergabeprotokoll mit Fotodokumentation',
    ],
    ctaText: 'Vermietung anfragen',
  },
  {
    id: 'gewerbe',
    icon: Building,
    title: 'Gewerbe & Kapitalanlage-Beratung',
    subtitle: 'Renditestarke Objekte für Kapitalanleger',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/service-gewerbe-kapitalanlage-v2.webp',
    description: 'Mehrfamilienhäuser, Wohn- und Geschäftshäuser sowie Gewerbeflächen: Wir analysieren Mieterträge, Mietverträge und Standortfaktoren für nachhaltigen Werterhalt.',
    points: [
      'Berechnung von Mietfaktor und Netto-Mietrendite',
      'Prüfung von Mietverträgen & Steigerungspotenzialen',
      'Diskrete Vermittlung an qualifizierte Investoren',
    ],
    ctaText: 'Kapitalanlage anfragen',
  },
];

export default function Services({ onOpenValuation, onOpenInquiry }) {
  return (
    <section 
      id="leistungen" 
      className="py-24 sm:py-32 bg-gradient-to-b from-[#F5F0E6] via-[#FAF7F0] to-[#EFE9DD] border-b border-[#E3DBD0] relative overflow-hidden"
    >
      {/* Subtile architektonische Lichtreflexion */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(197,160,89,0.12),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECE5D4] text-weser-900 text-xs font-semibold mb-4 border border-[#DBD1BD] shadow-2xs">
            <span>Kompetenz & Maklerleistungen</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-weser-950 mb-5 leading-tight">
            Vier Kernleistungen. Ein verlässlicher Ansprechpartner.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans font-light">
            Vom ersten unverbindlichen Bewertungstermin über die Erstellung hochwertiger Exposés bis zur notariellen Beurkundung: Erdal Seremet nimmt Ihnen den gesamten Aufwand ab.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-[#E6E0D3] shadow-xs hover:shadow-[0_20px_45px_rgba(26,38,57,0.09)] hover:-translate-y-1.5 hover:border-weser-600/40 transition-all duration-300 ease-out flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 border border-stone-200/80 bg-stone-100 shadow-2xs">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-weser-950/85 backdrop-blur-md text-white p-2.5 rounded-xl border border-white/20 shadow-xs">
                      <Icon className="w-4 h-4 text-cyan-300" />
                    </div>
                  </div>

                  {/* Eyebrow */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-weser-700 block mb-2">
                    {service.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-medium text-weser-950 mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-stone-600 font-sans leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action: Clean Agency Action Button */}
                <div className="pt-5 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      if (service.id === 'bewertung') {
                        onOpenValuation();
                      } else {
                        onOpenInquiry(service.id);
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-weser-950 hover:bg-weser-900 text-white text-xs font-semibold shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group/btn"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
