import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Home, 
  Calculator, 
  Search, 
  Key, 
  Building, 
  Clock
} from 'lucide-react';
import SeremetImmoButton from './SeremetImmoButton';

const CATEGORIES = [
  { id: 'verkauf', label: 'Immobilie verkaufen', subtitle: 'Haus, ETW oder Grundstück', icon: Home },
  { id: 'bewertung', label: 'Kostenlose Wertermittlung', subtitle: '0 € Vor-Ort-Analyse', icon: Calculator },
  { id: 'suchauftrag', label: 'Diskreter Suchauftrag', subtitle: 'Kaufinteressent vorgemerkt', icon: Search },
  { id: 'vermietung', label: 'Diskrete Vermietung', subtitle: 'Solvente Mieter finden', icon: Key },
  { id: 'gewerbe', label: 'Gewerbe & Kapitalanlage', subtitle: 'Rendite & Investment', icon: Building },
];

export default function InquiryModal({ isOpen, onClose, initialCategory = '' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'verkauf');
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phoneOrEmail.trim()) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phoneOrEmail: '', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-weser-950/70 backdrop-blur-sm"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E6E0D3] overflow-hidden z-10 my-4"
          >
            {/* Header */}
            <div className="relative p-6 sm:p-7 border-b border-stone-100 bg-gradient-to-b from-[#FBF9F5] to-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-[11px] font-bold text-weser-800 uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-weser-500 animate-pulse" />
                    Schnellanfrage • In 60 Sekunden
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-weser-950 tracking-tight">
                    Persönliches Erstgespräch anfordern
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Wählen Sie kurz Ihr Anliegen – Erdal Seremet meldet sich persönlich bei Ihnen.
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors shrink-0"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Direct Call Shortcut */}
              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-600">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-weser-700" />
                  Eiliges Anliegen?
                </span>
                <a
                  href="tel:050218600021"
                  className="font-bold text-weser-900 hover:text-weser-600 underline underline-offset-2"
                >
                  05021 / 860 00 21 anrufen
                </a>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-7">
              {submitted ? (
                <div className="text-center py-8 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-weser-950">
                    Vielen Dank für Ihre Anfrage!
                  </h4>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Herr Seremet hat Ihre Nachricht erhalten und wird sich zeitnah persönlich mit Ihnen in Verbindung setzen.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-weser-900 text-white text-sm font-semibold hover:bg-weser-800 transition-colors shadow-xs"
                    >
                      Fenster schließen
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Category Selection Chips */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2.5">
                      1. Ihr Anliegen auswählen:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = selectedCategory === cat.id;
                        return (
                          <button
                            type="button"
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                              isSelected
                                ? 'bg-weser-900 text-white border-weser-900 shadow-sm'
                                : 'bg-[#FBF9F5] hover:bg-stone-100 text-stone-800 border-stone-200'
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-weser-800 text-cyan-300' : 'bg-white text-weser-700 border border-stone-200'}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                                {cat.label}
                              </div>
                              <div className={`text-[11px] truncate ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                                {cat.subtitle}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-3 pt-1">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                        2. Ihr Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Vor- und Nachname"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                        3. Telefonnummer oder E-Mail *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="z. B. 0170 1234567 oder name@beispiel.de"
                        value={formData.phoneOrEmail}
                        onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                        4. Details / Objektdaten (optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="z. B. Einfamilienhaus in Nienburg-Holtorf, ca. 140 m², Verkauf zum Sommer geplant..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-weser-600 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 space-y-2.5">
                    <div className="flex justify-center">
                      <SeremetImmoButton
                        type="submit"
                        disabled={loading}
                        size="md"
                        text={loading ? "Wird übermittelt..." : "Anfrage jetzt absenden"}
                      />
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>100% vertraulich • Keine Weitergabe von Daten • DSGVO-konform</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
