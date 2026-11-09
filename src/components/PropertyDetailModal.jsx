import React, { useState, useEffect } from 'react';
import { X, MapPin, Maximize2, BedDouble, Tag, Check, Calendar, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SeremetImmoButton from './SeremetImmoButton';

export default function PropertyDetailModal({ property, isOpen, onClose }) {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setInquirySent(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !property) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#E0D8C8] z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        {/* Top Header with Close Button */}
        <div className="px-6 py-4 border-b border-[#EAE3D5] flex items-center justify-between shrink-0 bg-[#FAF7F0]">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                property.statusColor === 'emerald'
                  ? 'bg-emerald-100 text-emerald-800'
                  : property.statusColor === 'amber'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-stone-200 text-stone-800'
              }`}
            >
              {property.status}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              Objekt-ID: WESER-{property.id}0{property.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white border border-[#D8D0C0] text-stone-600 hover:text-weser-950 flex items-center justify-center transition-all"
            aria-label="Modal schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Visual & Key Data Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Image Preview */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E2DDD1] bg-stone-900 aspect-[16/10] relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover filter brightness-[0.98]"
              />
            </div>

            {/* Core Metrics Box */}
            <div className="lg:col-span-5 bg-[#FAF8F3] p-5 sm:p-6 rounded-2xl border border-[#E6DFCFA0] space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  {property.priceNote}
                </span>
                <div className="font-serif text-3xl font-bold text-weser-950">
                  {property.price}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-stone-600">
                <MapPin className="w-4 h-4 text-weser-600 shrink-0" />
                <span className="font-medium">{property.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#EAE3D5] text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-[#E8E1D2]">
                  <div className="text-stone-400 text-[11px]">Wohnfläche</div>
                  <div className="font-bold text-weser-950 text-sm mt-0.5">{property.area}</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-[#E8E1D2]">
                  <div className="text-stone-400 text-[11px]">Zimmer</div>
                  <div className="font-bold text-weser-950 text-sm mt-0.5">{property.rooms}</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-[#E8E1D2]">
                  <div className="text-stone-400 text-[11px]">Grundstück</div>
                  <div className="font-bold text-weser-950 text-sm mt-0.5">{property.lot}</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-[#E8E1D2]">
                  <div className="text-stone-400 text-[11px]">Energieeffizienz</div>
                  <div className="font-bold text-weser-950 text-sm mt-0.5">{property.energy}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-weser-950 mb-3 leading-snug">
              {property.title}
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Features Checklist */}
          {property.features && (
            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-2xl border border-[#E8E1D2]">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-weser-950 mb-3">
                Ausstattungsmerkmale & Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-stone-700">
                {property.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inquiry Form Inside Modal */}
          <div className="bg-white p-6 rounded-2xl border border-[#E4DECFA0] shadow-sm">
            <h4 className="font-serif text-xl font-medium text-weser-950 mb-1">
              Exposé oder Besichtigung anfragen
            </h4>
            <p className="text-xs text-stone-600 mb-4">
              Senden Sie uns Ihre Kontaktdaten. Erdal Seremet stellt Ihnen alle detaillierten Unterlagen zur Verfügung:
            </p>

            {!inquirySent ? (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Ihr vollständiger Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7C8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Telefonnummer *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7C8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                  />
                </div>

                <input
                  type="email"
                  required
                  placeholder="Ihre E-Mail-Adresse *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7C8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                />

                <textarea
                  rows={2}
                  placeholder={`Guten Tag Herr Seremet, bitte senden Sie mir das vollständige Exposé zu "${property.title}"...`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED7C8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-weser-600"
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2 text-[11px] text-stone-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ihre Daten sind geschützt & unverbindlich.</span>
                  </div>

                  <SeremetImmoButton
                    type="submit"
                    size="sm"
                    text="Exposé jetzt anfordern"
                  />
                </div>
              </form>
            ) : (
              <div className="py-6 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h5 className="font-serif text-lg font-bold text-weser-950">
                  Anfrage erfolgreich übermittelt!
                </h5>
                <p className="text-xs text-stone-600 mt-1">
                  Erdal Seremet wird sich mit den vollständigen Unterlagen und Grundrissen bei Ihnen melden.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
