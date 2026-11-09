import React, { useState, useMemo, useEffect } from 'react';
import { 
  MapPin, 
  BedDouble, 
  Maximize2, 
  Search, 
  ArrowUpDown, 
  X, 
  Check, 
  SlidersHorizontal,
  Home,
  RotateCcw,
  Zap,
  ArrowRight
} from 'lucide-react';
import { propertiesData } from '../data/properties';

export default function PortfolioPage({ onSelectProperty, onOpenInquiry, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('alle');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'price-asc' | 'price-desc' | 'area-desc' | 'rooms-desc'
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filter & Sort Logic
  const filteredAndSortedProperties = useMemo(() => {
    let result = [...propertiesData];

    // 1. Category Filter
    if (activeCategory !== 'alle') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // 2. Search Query (Title, Location, Features)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // 3. Only Available toggle (exclude Reserviert)
    if (onlyAvailable) {
      result = result.filter((p) => p.status !== 'Reserviert');
    }

    // 4. Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.rawPrice - b.rawPrice);
        break;
      case 'price-desc':
        result.sort((a, b) => b.rawPrice - a.rawPrice);
        break;
      case 'area-desc':
        result.sort((a, b) => b.rawArea - a.rawArea);
        break;
      case 'rooms-desc':
        result.sort((a, b) => b.rawRooms - a.rawRooms);
        break;
      case 'newest':
      default:
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy, onlyAvailable]);

  const categories = [
    { id: 'alle', label: 'Alle Immobilien', count: propertiesData.length },
    { id: 'kauf', label: 'Kaufobjekte', count: propertiesData.filter((p) => p.category === 'kauf').length },
    { id: 'miete', label: 'Mietobjekte', count: propertiesData.filter((p) => p.category === 'miete').length },
    { id: 'gewerbe', label: 'Gewerbe & Anlage', count: propertiesData.filter((p) => p.category === 'gewerbe').length },
  ];

  const handleResetFilters = () => {
    setActiveCategory('alle');
    setSearchQuery('');
    setSortBy('newest');
    setOnlyAvailable(false);
  };

  const isFiltered = activeCategory !== 'alle' || searchQuery !== '' || onlyAvailable || sortBy !== 'newest';

  return (
    <div className="relative min-h-screen bg-[#FBF9F5] pt-28 sm:pt-32 pb-24 overflow-hidden">
      
      {/* ============================================================== */}
      {/* DEZENTES, HOCHWERTIGES ARCHITEKTUR-MUSTER (CAD / BLUEPRINT)     */}
      {/* ============================================================== */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden" 
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
        }}
        aria-hidden="true"
      >
        <svg 
          className="absolute inset-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern 
              id="archHousesPatternPortfolio" 
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

              {/* 1. Modernes Einfamilienhaus */}
              <g stroke="#009EE0" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 25,200 L 95,140 L 165,200" />
                <line x1="18" y1="200" x2="172" y2="200" strokeWidth="1.2" />
                <path d="M 120,165 V 135 H 132 V 176" />
                <rect x="35" y="200" width="120" height="90" />
                <line x1="15" y1="290" x2="185" y2="290" strokeWidth="1.4" />
                <rect x="82" y="240" width="26" height="50" />
                <line x1="75" y1="234" x2="115" y2="234" strokeWidth="1.1" />
                <rect x="48" y="245" width="22" height="28" />
                <line x1="59" y1="245" x2="59" y2="273" />
                <rect x="120" y="245" width="22" height="28" />
                <line x1="131" y1="245" x2="131" y2="273" />
                <rect x="85" y="168" width="20" height="22" rx="1" />
                <line x1="95" y1="168" x2="95" y2="190" />
                <line x1="35" y1="210" x2="155" y2="210" strokeDasharray="1 3" opacity="0.6" />
                <line x1="35" y1="207" x2="35" y2="213" />
                <line x1="155" y1="207" x2="155" y2="213" />
              </g>

              {/* 2. Mehrgeschossiges Mehrfamilienhaus (Wohnanlage) */}
              <g stroke="#009EE0" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="225" y="100" width="150" height="190" />
                <rect x="245" y="65" width="110" height="35" />
                <line x1="225" y1="100" x2="245" y2="100" strokeWidth="1.2" />
                <line x1="355" y1="100" x2="375" y2="100" strokeWidth="1.2" />
                <line x1="225" y1="150" x2="375" y2="150" strokeWidth="0.75" />
                <line x1="225" y1="200" x2="375" y2="200" strokeWidth="0.75" />
                <line x1="225" y1="250" x2="375" y2="250" strokeWidth="0.75" />
                <rect x="212" y="115" width="36" height="26" />
                <line x1="212" y1="125" x2="248" y2="125" strokeDasharray="2 2" />
                <rect x="212" y="165" width="36" height="26" />
                <line x1="212" y1="175" x2="248" y2="175" strokeDasharray="2 2" />
                <rect x="262" y="112" width="30" height="28" />
                <line x1="277" y1="112" x2="277" y2="140" />
                <rect x="312" y="112" width="40" height="28" />
                <line x1="332" y1="112" x2="332" y2="140" />
                <rect x="262" y="162" width="30" height="28" />
                <line x1="277" y1="162" x2="277" y2="190" />
                <rect x="312" y="162" width="40" height="28" />
                <line x1="332" y1="162" x2="332" y2="190" />
                <rect x="280" y="250" width="40" height="40" />
                <line x1="300" y1="250" x2="300" y2="290" />
                <line x1="200" y1="290" x2="395" y2="290" strokeWidth="1.4" />
              </g>

              {/* 3. Moderne Architektenvilla */}
              <g stroke="#009EE0" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="430" y="155" width="160" height="135" />
                <rect x="455" y="105" width="125" height="65" />
                <line x1="450" y1="105" x2="585" y2="105" strokeWidth="1.3" />
                <rect x="470" y="120" width="95" height="32" />
                <line x1="517" y1="120" x2="517" y2="152" />
                <rect x="445" y="210" width="110" height="80" />
                <line x1="500" y1="210" x2="500" y2="290" strokeWidth="1.1" />
                <line x1="472" y1="210" x2="472" y2="290" strokeDasharray="3 2" />
                <line x1="528" y1="210" x2="528" y2="290" strokeDasharray="3 2" />
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
                <polygon points="305,55 309,62 301,62" fill="#009EE0" />
                <line x1="294" y1="62" x2="316" y2="62" />
                <circle cx="765" cy="45" r="14" />
                <path d="M 765,35 L 769,49 L 765,46 L 761,49 Z" fill="#009EE0" />
                <text x="765" y="28" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#009EE0" textAnchor="middle" stroke="none">N</text>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archHousesPatternPortfolio)" opacity="0.06" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* 1. SEITEN-HEADER & BREADCRUMB                                  */}
        {/* ============================================================== */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-3">
            <a 
              href="/" 
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }} 
              className="hover:text-weser-900 transition-colors"
            >
              Startseite
            </a>
            <span>/</span>
            <span className="text-weser-900 font-semibold">Immobilien-Portfolio</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-weser-600 mb-2">
                Aktuelles Portfolio • Nienburg (Weser) & Mittelweser
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-weser-950 tracking-tight leading-[1.1]">
                Ausgewählte Immobilien
              </h1>
              <p className="text-base sm:text-lg text-stone-600 font-light mt-3 max-w-2xl leading-relaxed">
                Entdecken Sie unsere aktuellen Kauf- und Mietangebote in Nienburg und Umgebung. Fundiert eingewertet, vollständig dokumentiert und persönlich begleitet.
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
        </div>

        {/* ============================================================== */}
        {/* 2. SCHICKE & ÜBERSICHTLICHE SORTIER- & FILTER-LEISTE           */}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl border border-[#E6E0D3] p-4 sm:p-6 mb-10 shadow-xs">
          
          {/* Obere Reihe: Kategorie-Tabs + Suche */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-stone-100">
            
            {/* Kategorie Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-weser-900 text-white shadow-xs'
                      : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE3D5] hover:text-weser-950'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Suchfeld */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ort, Stadtteil oder Merkmal..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-[#E2DDD3] bg-[#FCFAF7] text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-weser-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Untere Reihe: Sortierung + Schnellfilter + Zähler */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 text-xs sm:text-sm">
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Sortier-Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-stone-500 flex items-center gap-1.5 font-medium">
                  <ArrowUpDown className="w-3.5 h-3.5 text-weser-600" />
                  Sortieren:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-[#E2DDD3] bg-[#FCFAF7] text-stone-800 font-semibold focus:outline-none focus:ring-2 focus:ring-weser-600 cursor-pointer"
                >
                  <option value="newest">Neueste Angebote zuerst</option>
                  <option value="price-asc">Preis: aufsteigend</option>
                  <option value="price-desc">Preis: absteigend</option>
                  <option value="area-desc">Wohnfläche: größte zuerst</option>
                  <option value="rooms-desc">Zimmer: meiste zuerst</option>
                </select>
              </div>

              {/* Nur Verfügbar Toggle */}
              <label className="flex items-center gap-2 cursor-pointer select-none px-3 py-1.5 rounded-lg hover:bg-stone-50 transition-colors">
                <input
                  type="checkbox"
                  checked={onlyAvailable}
                  onChange={(e) => setOnlyAvailable(e.target.checked)}
                  className="w-4 h-4 rounded text-weser-600 focus:ring-weser-500 border-stone-300"
                />
                <span className="text-stone-700 font-medium text-xs sm:text-sm">Reservierte ausblenden</span>
              </label>
            </div>

            {/* Ergebnis-Zähler & Reset */}
            <div className="flex items-center gap-3">
              <span className="text-stone-500 text-xs">
                <strong className="text-weser-950 font-bold">{filteredAndSortedProperties.length}</strong> {filteredAndSortedProperties.length === 1 ? 'Immobilie' : 'Immobilien'} gefunden
              </span>

              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-weser-600 hover:text-weser-800 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Filter zurücksetzen</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. IMMOBILIEN-GRID (CLEAN: KEINE TAGS AUSSER WENN RESERVIERT!) */}
        {/* ============================================================== */}
        {filteredAndSortedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-16">
            {filteredAndSortedProperties.map((prop) => (
              <div
                key={prop.id}
                onClick={() => onSelectProperty(prop)}
                className="group bg-white rounded-3xl border border-[#E5DFD3] overflow-hidden shadow-xs hover:shadow-[0_22px_45px_rgba(26,38,57,0.11)] hover:-translate-y-1.5 hover:border-weser-600/40 transition-all duration-300 ease-out flex flex-col cursor-pointer"
              >
                {/* Visual Header mit Bild */}
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

                  {/* Preis Overlay unten links */}
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

                    <h2 className="font-serif text-xl font-medium text-weser-950 mb-3 group-hover:text-weser-700 transition-colors line-clamp-2 leading-snug">
                      {prop.title}
                    </h2>

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
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E6E0D3] p-8 mb-16">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4 text-stone-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-weser-950 mb-2">
              Keine passenden Immobilien gefunden
            </h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
              Für Ihre aktuelle Filterauswahl liegen zurzeit keine passenden Objekte vor. Probieren Sie andere Suchbegriffe oder setzen Sie den Filter zurück.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-weser-900 text-white text-xs sm:text-sm font-semibold hover:bg-weser-800 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Alle Filter zurücksetzen</span>
            </button>
          </div>
        )}

        {/* ============================================================== */}
        {/* 4. DISKRETER SUCHAUFTRAG BANNER                                */}
        {/* ============================================================== */}
        <div className="rounded-3xl bg-weser-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2">
              Vormerk-Service • Keine Veröffentlichung nötig
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white mb-3">
              Ihre Wunschimmobilie ist noch nicht dabei?
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-2xl">
              Viele unserer Immobilien vermitteln wir diskret vor dem offiziellen Marktstart an vorgemerkte Suchkunden. 
              Teilen Sie uns Ihre Suchkriterien mit – kostenfrei und vollkommen unverbindlich.
            </p>
            <button
              type="button"
              onClick={() => onOpenInquiry('suchauftrag')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-weser-950 font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <span>Diskreten Suchauftrag hinterlegen</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
