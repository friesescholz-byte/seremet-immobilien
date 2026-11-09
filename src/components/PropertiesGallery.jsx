import React, { useState } from 'react';
import { MapPin, BedDouble, Maximize2, Tag, ChevronLeft, ChevronRight, Eye, ShieldCheck, Filter } from 'lucide-react';
import SeremetImmoButton from './SeremetImmoButton';

export const propertiesData = [
  {
    id: 1,
    title: 'Großzügiges Einfamilienhaus mit gepflegtem Sonnengarten',
    location: '31582 Nienburg-Holtorf',
    type: 'Kaufobjekt',
    category: 'kauf',
    price: '389.000 €',
    priceNote: 'Kaufpreis',
    area: '168 m²',
    rooms: '5 Zimmer',
    lot: '685 m²',
    energy: 'B (68 kWh)',
    status: 'Verfügbar',
    statusColor: 'emerald',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/einfamilienhaus-nienburg.webp',
    description: 'Ruhige Wohnlage in Nienburg-Holtorf mit optimaler Südausrichtung. Großzügiger Wohn- und Essbereich, moderne Einbauküche, Doppelgarage und herrlich eingewachsener Garten. Ideal für Familien.',
    features: ['Doppelgarage & Stellplatz', 'Fußbodenheizung im EG', 'Einbauküche inklusive', 'Vollunterkellert'],
  },
  {
    id: 2,
    title: 'Lichtdurchflutete 3-Zimmer-Eigentumswohnung in Wesernähe',
    location: '31582 Nienburg Zentrum / Wesernähe',
    type: 'Kaufobjekt',
    category: 'kauf',
    price: '249.000 €',
    priceNote: 'Kaufpreis',
    area: '88 m²',
    rooms: '3 Zimmer',
    lot: '–',
    energy: 'A (44 kWh)',
    status: 'Reserviert',
    statusColor: 'amber',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/wohnung-balkon-wesernaehe.webp',
    description: 'Barrierearme Eigentumswohnung im 2. Obergeschoss mit Aufzug und großem Südwest-Balkon. Hochwertige Ausstattung, Eichenparkett, modernes Bad mit bodengleicher Dusche.',
    features: ['Aufzug im Haus', 'Tiefgaragenstellplatz', 'Großer Sonnenbalkon', 'Separater Kellerraum'],
  },
  {
    id: 3,
    title: 'Renditestarkes Mehrfamilienhaus als solide Kapitalanlage',
    location: '31582 Nienburg Kernstadt',
    type: 'Gewerbe / Anlage',
    category: 'gewerbe',
    price: '640.000 €',
    priceNote: 'Kaufpreis (Faktor 14.8)',
    area: '340 m²',
    rooms: '12 Zimmer',
    lot: '520 m²',
    energy: 'C (89 kWh)',
    status: 'Verfügbar',
    statusColor: 'emerald',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/mehrfamilienhaus-kapitalanlage-nienburg.webp',
    description: 'Vollvermietetes 4-Parteien-Wohnhaus in zentraler, mieterfreundlicher Lage von Nienburg. Kontinuierlich modernisiert, langjährige Mieterstruktur und attraktive Mietrendite.',
    features: ['4 separate Wohneinheiten', 'Vollvermietet ohne Leerstand', 'Modernisierte Gas-Zentralheizung', 'Garten zur Mitbenutzung'],
  },
  {
    id: 4,
    title: 'Exklusive Architektenvilla mit Privatsphäre & Weitblick',
    location: '31582 Nienburg (Weser) Südrand',
    type: 'Kaufobjekt',
    category: 'kauf',
    price: '745.000 €',
    priceNote: 'Kaufpreis',
    area: '265 m²',
    rooms: '6.5 Zimmer',
    lot: '1.140 m²',
    energy: 'A+ (28 kWh)',
    status: 'Verfügbar',
    statusColor: 'emerald',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/architektenvilla-weser.webp',
    description: 'Meisterwerk moderner Wohnarchitektur: Großzügige Glasfronten, offener Kamin, Master-Suite mit Ankleide und Wellnessbad sowie Smart-Home-Steuerung.',
    features: ['Wärmepumpe & Photovoltaik', 'Doppel-Carport & Ladestation', 'Große Naturstein-Terrasse', 'Hochwertige Designer-Küche'],
  },
  {
    id: 5,
    title: 'Gepflegte 4-Zimmer-Wohnung mit Balkon zur Miete',
    location: '31582 Nienburg-Nordertor',
    type: 'Mietobjekt',
    category: 'miete',
    price: '920 €',
    priceNote: 'Kaltmiete zzgl. NK',
    area: '102 m²',
    rooms: '4 Zimmer',
    lot: '–',
    energy: 'C (78 kWh)',
    status: 'Verfügbar',
    statusColor: 'emerald',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/penthouse-weser-terrasse.webp',
    description: 'Helle Familienwohnung im 1. OG eines ruhigen Mehrfamilienhauses. 4 gut geschnittene Zimmer, Einbauküche, Gäste-WC und überdachter Balkon ins Grüne.',
    features: ['Inklusive Einbauküche', 'Balkon mit Markise', 'Eigenes Kellerabteil', 'Ruhige Nachbarschaft'],
  },
  {
    id: 6,
    title: 'Familienfreundliches Einfamilienhaus in Marklohe',
    location: '31608 Marklohe (bei Nienburg)',
    type: 'Kaufobjekt',
    category: 'vermittelt',
    price: '345.000 €',
    priceNote: 'Notariell beurkundet',
    area: '152 m²',
    rooms: '5 Zimmer',
    lot: '780 m²',
    energy: 'B (72 kWh)',
    status: 'Erfolgreich verkauft',
    statusColor: 'stone',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/doppelhaushaelfte-marklohe.webp',
    description: 'In nur 5 Wochen erfolgreich beurkundet durch Erdal Seremet. Käufer und Verkäufer profitierten von einer reibungslosen Abwicklung und fairem Bestpreis.',
    features: ['Erfolgreiche Maklerabwicklung', 'Verkauf über Vormerkkartei', 'Komplett notariell begleitet', 'Zufriedene Eigentümer'],
  },
  {
    id: 7,
    title: 'Attraktive Gewerbefläche / Ladenlokal in Fußgängerzone',
    location: '31582 Nienburg Innenstadt / Lange Straße',
    type: 'Gewerbe / Miete',
    category: 'gewerbe',
    price: '1.450 €',
    priceNote: 'Monatliche Miete',
    area: '135 m²',
    rooms: '3 Räume',
    lot: '–',
    energy: 'D (115 kWh)',
    status: 'Verfügbar',
    statusColor: 'emerald',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/gewerbe-ladenlokal-nienburg.webp',
    description: 'Hervorragende Schaufensterfront mit hoher Passantenfrequenz. Ideal geeignet als Praxis, Kanzlei, Beratungsstelle oder Einzelhandel.',
    features: ['Große Schaufensterfront', 'Teeküche & Personal-WC', 'Klimatisiert', 'Ebenerdiger Zugang'],
  },
  {
    id: 8,
    title: 'Moderne Doppelhaushälfte in Nienburg-Erichshagen',
    location: '31582 Nienburg-Erichshagen',
    type: 'Kaufobjekt',
    category: 'vermittelt',
    price: '319.000 €',
    priceNote: 'Notariell beurkundet',
    area: '130 m²',
    rooms: '4.5 Zimmer',
    lot: '390 m²',
    energy: 'B (62 kWh)',
    status: 'Erfolgreich verkauft',
    statusColor: 'stone',
    image: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/luxus-architektenvilla.webp',
    description: 'Binnen 28 Tagen über unser diskretes Vormerk-Netzwerk vermittelt, noch vor der offiziellen Online-Veröffentlichung.',
    features: ['Off-Market Transaktion', 'Solventer Käufer', 'Schnelle Notarabwicklung', 'Volle Zufriedenheit'],
  }
];

export default function PropertiesGallery({ onSelectProperty, onOpenInquiry }) {
  const [activeFilter, setActiveFilter] = useState('alle');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filters = [
    { id: 'alle', label: 'Alle Immobilien' },
    { id: 'kauf', label: 'Kaufobjekte' },
    { id: 'miete', label: 'Mietobjekte' },
    { id: 'gewerbe', label: 'Gewerbe & Anlage' },
    { id: 'vermittelt', label: 'Erfolgreich vermittelt' },
  ];

  const filtered = propertiesData.filter((item) => {
    if (activeFilter === 'alle') return true;
    return item.category === activeFilter;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayedProperties = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  return (
    <section id="immobilien" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DC] text-weser-900 text-xs font-semibold mb-4 border border-[#DFD8CA]">
              <span>Portfolio & Referenzen</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-weser-950 mb-3 leading-tight">
              Ausgewählte Immobilien in Nienburg & Weser-Region
            </h2>

            <p className="text-base text-stone-600 max-w-2xl">
              Entdecken Sie unsere aktuellen Verkaufs- und Mietangebote sowie erfolgreich notariell beurkundete Referenzobjekte.
            </p>
          </div>

          {/* Left-aligned / Dedicated CTA button right above filters im edlen Hero-Stil */}
          <div className="flex items-center gap-3">
            <SeremetImmoButton
              size="sm"
              text="Diskreten Suchauftrag anlegen"
              icon={null}
              onClick={() => onOpenInquiry('suchauftrag')}
            />
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => handleFilterChange(f.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeFilter === f.id
                  ? 'bg-weser-900 text-white shadow-xs'
                  : 'bg-[#F2ECE0] text-stone-700 hover:bg-[#EAE3D4] hover:text-weser-950'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-12">
          {displayedProperties.map((prop) => (
            <div
              key={prop.id}
              onClick={() => onSelectProperty(prop)}
              className="group bg-white rounded-3xl border border-[#E5DFD3] overflow-hidden shadow-xs hover:shadow-[0_22px_45px_rgba(26,38,57,0.11)] hover:-translate-y-1.5 hover:border-weser-600/40 transition-all duration-300 ease-out flex flex-col cursor-pointer"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.96]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                      prop.statusColor === 'emerald'
                        ? 'bg-emerald-600 text-white'
                        : prop.statusColor === 'amber'
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-800 text-white'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {prop.status}
                  </span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                    {prop.type}
                  </span>
                </div>

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

                  <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="pt-4 border-t border-[#EAE4D7] flex items-center justify-between text-xs font-medium text-stone-700">
                  <div className="flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5 text-stone-400" />
                    <span>{prop.area}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BedDouble className="w-3.5 h-3.5 text-stone-400" />
                    <span>{prop.rooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400" />
                    <span>{prop.energy}</span>
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="px-6 py-3 bg-[#FAF8F3] border-t border-[#EFE9DC] flex items-center justify-between text-xs font-semibold text-weser-900 group-hover:bg-weser-50 transition-colors">
                <span>Exposé & Details ansehen</span>
                <Eye className="w-3.5 h-3.5 text-weser-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#EAE3D5]">
            <div className="text-xs text-stone-500">
              Zeige {(currentPage - 1) * itemsPerPage + 1} bis{' '}
              {Math.min(currentPage * itemsPerPage, filtered.length)} von {filtered.length} Objekten
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`p-2 rounded-lg border text-xs font-medium transition-all ${
                  currentPage === 1
                    ? 'border-[#EAE3D5] text-stone-300 cursor-not-allowed'
                    : 'border-[#D8D1C2] text-stone-700 hover:bg-[#F2ECE0]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                    currentPage === i + 1
                      ? 'bg-weser-900 text-white'
                      : 'border border-[#D8D1C2] text-stone-700 hover:bg-[#F2ECE0]'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`p-2 rounded-lg border text-xs font-medium transition-all ${
                  currentPage === totalPages
                    ? 'border-[#EAE3D5] text-stone-300 cursor-not-allowed'
                    : 'border-[#D8D1C2] text-stone-700 hover:bg-[#F2ECE0]'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
