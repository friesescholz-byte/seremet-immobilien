import React, { useState } from 'react';
import { Home, Building, Building2, Store, Trees, Check, ArrowRight, ArrowLeft, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import SeremetImmoButton from './SeremetImmoButton';

export default function ValuationCalculator() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('Einfamilienhaus');
  const [area, setArea] = useState(140);
  const [constructionYear, setConstructionYear] = useState('1990 - 2010');
  const [condition, setCondition] = useState('Gepflegt');
  const [location, setLocation] = useState('Nienburg Kernstadt');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const propertyTypes = [
    { id: 'Einfamilienhaus', label: 'Einfamilienhaus', desc: 'Freistehend oder Doppelhaushälfte', icon: Home },
    { id: 'Eigentumswohnung', label: 'Eigentumswohnung', desc: '1 bis 5 Zimmer oder Penthouse', icon: Building },
    { id: 'Mehrfamilienhaus', label: 'Mehrfamilienhaus', desc: 'Kapitalanlage oder Mietshaus', icon: Building2 },
    { id: 'Gewerbeobjekt', label: 'Gewerbeobjekt', desc: 'Ladenlokal, Büro, Lager', icon: Store },
    { id: 'Grundstück', label: 'Baugrundstück', desc: 'Wohn- oder Gewerbebauland', icon: Trees },
  ];

  const locations = [
    'Nienburg Kernstadt',
    'Nienburg-Holtorf',
    'Nienburg-Erichshagen-Wölpe',
    'Nienburg-Langendamm',
    'Marklohe / Lemke',
    'Drakenburg / Rohrsen',
    'Liebenau / Steyerberg',
    'Hoya / Eystrup',
    'Landkreis Nienburg (Weser)',
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="wertermittlung" className="relative py-24 sm:py-32 bg-[#FBF9F5] overflow-hidden border-t border-[#EAE3D5] scroll-mt-20">
      {/* ============================================================== */}
      {/* FESTSTEHENDES, ULTRA-DEZENTES HINTERGRUNDBILD (WESER-VILLA)     */}
      {/* ============================================================== */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/wertermittlung-weser-striped.webp")',
          filter: 'brightness(1.02) saturate(0.80) contrast(0.92)',
          opacity: 0.18
        }}
        aria-hidden="true"
      />

      {/* Sanfter, warmer Schleier für absolute Eleganz & ungestörte Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/95 via-[#FBF9F5]/88 to-[#FBF9F5]/96 backdrop-blur-[1px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header in edlem, leichtem Glas-Panel */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#E8E1D3] shadow-xs">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] text-weser-950 text-xs font-semibold mb-3 border border-[#DFD8CA] shadow-2xs">
            <span>Kostenfreier Service für Eigentümer</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-weser-950 mb-4 leading-tight">
            Was ist Ihre Immobilie in Nienburg heute wert?
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans font-normal max-w-2xl mx-auto">
            Nutzen Sie unsere unverbindliche 3-Schritte-Vor-Ort-Wertermittlung auf Basis der aktuellen Nienburger Bodenrichtwerte. 
            Diskret, fundiert und persönlich ausgewertet durch Erdal Seremet.
          </p>
        </div>

        {/* Interactive Multi-Step Box */}
        <div className="bg-white/95 backdrop-blur-xs rounded-3xl border border-[#E5DFD3] shadow-premium p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Top Step Progress Bar */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-stone-500 mb-3">
              <span className={step >= 1 ? 'text-weser-900 font-bold' : ''}>1. Objektart</span>
              <span className={step >= 2 ? 'text-weser-900 font-bold' : ''}>2. Eckdaten</span>
              <span className={step >= 3 ? 'text-weser-900 font-bold' : ''}>3. Lage & Kontakt</span>
            </div>
            <div className="w-full h-2 bg-[#F2EDE2] rounded-full overflow-hidden">
              <div
                className="h-full bg-weser-600 transition-all duration-300 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {!isSubmitted ? (
            <div>
              {/* STEP 1: Property Type Selection */}
              {step === 1 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-weser-950 mb-3">
                    Schritt 1: Welche Immobilie möchten Sie einwerten lassen?
                  </h3>
                  <p className="text-sm text-stone-600 mb-6">
                    Wählen Sie die passende Kategorie für Ihre Immobilie in der Mittelweser-Region:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
                    {propertyTypes.map((t) => {
                      const Icon = t.icon;
                      const selected = propertyType === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setPropertyType(t.id)}
                          className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
                            selected
                              ? 'border-weser-600 bg-weser-50/70 shadow-sm ring-1 ring-weser-600'
                              : 'border-[#E7E2D7] bg-[#FDFCF9] hover:border-weser-400 hover:bg-white'
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              selected ? 'bg-weser-600 text-white' : 'bg-[#EFE8DA] text-weser-900'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-weser-950 text-sm sm:text-base">
                              {t.label}
                            </div>
                            <div className="text-xs text-stone-500 mt-0.5">{t.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-2">
                    <SeremetImmoButton
                      size="sm"
                      text="Weiter zu Schritt 2"
                      onClick={handleNext}
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Dimensions & Condition */}
              {step === 2 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-weser-950 mb-3">
                    Schritt 2: Eckdaten zu Ihrem Objekt
                  </h3>
                  <p className="text-sm text-stone-600 mb-6">
                    Diese Angaben helfen uns, einen ersten realistischen Marktpreis-Korridor zu kalkulieren:
                  </p>

                  <div className="space-y-6 mb-8">
                    {/* Area Slider / Input */}
                    <div className="bg-[#FAF8F3] p-5 sm:p-6 rounded-2xl border border-[#E7E1D4]">
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-weser-950">
                          Ungefähre Wohn- / Nutzfläche:
                        </label>
                        <span className="text-lg font-bold text-weser-800 bg-white px-3 py-1 rounded-lg border border-[#E0D9CB]">
                          {area} m²
                        </span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="400"
                        step="5"
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        className="w-full accent-weser-600 h-2 bg-[#E2DCCF] rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-stone-500 mt-2 font-medium">
                        <span>30 m²</span>
                        <span>150 m²</span>
                        <span>300 m²</span>
                        <span>400+ m²</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Construction Year */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                          Baujahr-Zeitraum
                        </label>
                        <select
                          value={constructionYear}
                          onChange={(e) => setConstructionYear(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#DED7C8] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                        >
                          <option>Vor 1960 (Altbau)</option>
                          <option>1960 - 1980</option>
                          <option>1981 - 2000</option>
                          <option>2001 - 2015</option>
                          <option>Neubau (ab 2016)</option>
                        </select>
                      </div>

                      {/* Condition */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                          Zustand der Immobilie
                        </label>
                        <select
                          value={condition}
                          onChange={(e) => setCondition(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#DED7C8] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                        >
                          <option>Neuwertig / Erstbezug</option>
                          <option>Umfassend modernisiert</option>
                          <option>Gepflegter Bestand</option>
                          <option>Teilweise renovierungsbedürftig</option>
                          <option>Sanierungsbedürftig</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#D8D1C2] text-stone-700 text-sm font-medium hover:bg-[#F5F0E6] transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Zurück</span>
                    </button>

                    <SeremetImmoButton
                      size="sm"
                      text="Weiter zu Schritt 3"
                      onClick={handleNext}
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Location & Contact */}
              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-weser-950 mb-3">
                    Schritt 3: Wo befindet sich das Objekt und wohin dürfen wir die Auswertung senden?
                  </h3>
                  <p className="text-sm text-stone-600 mb-6">
                    Erdal Seremet prüft die Bodenrichtwerte der Mikrolage und bereitet Ihre fundierte Markteinschätzung vor:
                  </p>

                  <div className="space-y-4 mb-6">
                    {/* Location Select */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Lage im Landkreis Nienburg
                      </label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#DED7C8] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                      >
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Ihr vollständiger Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="z. B. Dr. Sabine Weber"
                          className="w-full px-4 py-3 rounded-xl border border-[#DED7C8] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Telefonnummer für Rückfragen *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="z. B. 05021 / 123456"
                          className="w-full px-4 py-3 rounded-xl border border-[#DED7C8] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        E-Mail-Adresse für den Bericht *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre.adresse@beispiel.de"
                        className="w-full px-4 py-3 rounded-xl border border-[#DED7C8] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Optionale Anmerkungen (z. B. besondere Ausstattung, Garten, Sanierung)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="z. B. Einbauküche 2023, PV-Anlage vorhanden..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#DED7C8] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                      />
                    </div>
                  </div>

                  {/* Trust disclaimer */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-6 bg-[#FAF7F0] p-3 rounded-xl border border-[#E9E3D5]">
                    <ShieldCheck className="w-4 h-4 text-weser-700 shrink-0" />
                    <span>
                      100 % vertraulich & diskret. Keine automatische Weitergabe an Dritte. Sie erhalten eine fundierte persönliche Einschätzung von Erdal Seremet.
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#D8D1C2] text-stone-700 text-sm font-medium hover:bg-[#F5F0E6] transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Zurück</span>
                    </button>

                    <SeremetImmoButton
                      type="submit"
                      size="md"
                      text="Kostenfreie Wertermittlung anfordern"
                      icon={Check}
                    />
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* SUCCESS CONFIRMATION */
            <div className="text-center py-8 sm:py-12 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-5">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-weser-950 font-medium mb-3">
                Vielen Dank für Ihre Anfrage, {formData.name}!
              </h4>

              <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mb-6 leading-relaxed">
                Ihre Eckdaten für das Objekt in <strong className="text-weser-950">{location}</strong> ({propertyType}, ca. {area} m²) wurden erfolgreich übermittelt. 
                Erdal Seremet gleicht Ihre Angaben mit den aktuellen Nienburger Bodenrichtwerten ab und meldet sich zeitnah bei Ihnen.
              </p>

              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 p-4 rounded-2xl bg-[#F6F2EA] border border-[#E4DECFA0] text-xs text-stone-700">
                <span className="font-semibold text-weser-900">Direkter telefonischer Kontakt:</span>
                <a href="tel:050218600021" className="font-bold text-weser-700 hover:underline">
                  05021 / 860 00 21
                </a>
                <span>•</span>
                <span>Verdener Str. 30, 31582 Nienburg</span>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="text-xs text-stone-500 hover:text-weser-900 underline underline-offset-4"
                >
                  Weiteres Objekt bewerten
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
