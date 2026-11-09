import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Scale, Eye } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, activeTab, setActiveTab }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-[#E0D8C8] z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#EAE3D5] flex items-center justify-between shrink-0 bg-[#FAF7F0] rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-[#EAE2D2] rounded-xl text-xs font-semibold text-stone-700">
              <button
                onClick={() => setActiveTab('impressum')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'impressum' ? 'bg-white text-weser-950 shadow-xs' : 'hover:text-weser-900'
                }`}
              >
                Impressum
              </button>
              <button
                onClick={() => setActiveTab('datenschutz')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'datenschutz' ? 'bg-white text-weser-950 shadow-xs' : 'hover:text-weser-900'
                }`}
              >
                Datenschutz
              </button>
              <button
                onClick={() => setActiveTab('barrierefreiheit')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'barrierefreiheit' ? 'bg-white text-weser-950 shadow-xs' : 'hover:text-weser-900'
                }`}
              >
                Barrierefreiheit
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white border border-[#D8D0C0] text-stone-600 hover:text-weser-950 flex items-center justify-center transition-all"
            aria-label="Modal schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-stone-700 leading-relaxed space-y-6">
          {/* TAB 1: IMPRESSUM */}
          {activeTab === 'impressum' && (
            <div className="space-y-5">
              <h2 className="font-serif text-2xl font-bold text-weser-950">
                Impressum
              </h2>

              <div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[#E7E0D2] space-y-3">
                <h3 className="font-bold text-weser-950 text-sm">Angaben gemäß § 5 DDG</h3>
                <p>
                  <strong>Immobilien an der Weser GmbH</strong><br />
                  Verdener Straße 30<br />
                  31582 Nienburg (Weser)
                </p>
                <p>
                  <strong>Handelsregister:</strong> HRB 208238<br />
                  <strong>Registergericht:</strong> Amtsgericht Walsrode
                </p>
                <p>
                  <strong>Vertreten durch:</strong><br />
                  Erdal Seremet (Geschäftsführer)
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">Kontakt</h3>
                <p>
                  Telefon: <a href="tel:050218600021" className="text-weser-700 underline">05021 / 860 00 21</a><br />
                  Telefax: 05021 / 860 10 27<br />
                  Mobil / WhatsApp: 0152 210 48936<br />
                  E-Mail: <a href="mailto:info@immobilien-weser.de" className="text-weser-700 underline">info@immobilien-weser.de</a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">Umsatzsteuer-Identifikationsnummer</h3>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <strong>DE327342981</strong>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">Aufsichtsbehörde & Zulassung nach § 34c GewO</h3>
                <p>
                  Erlaubnis nach § 34c Abs. 1 der Gewerbeordnung (GewO) erteilt.<br />
                  <strong>Zuständige Kammer & Aufsichtsbehörde:</strong><br />
                  Industrie- und Handelskammer Hannover (IHK Hannover)<br />
                  Schiffgraben 49, 30175 Hannover<br />
                  Webseite: <a href="https://www.hannover.ihk.de" target="_blank" rel="noopener noreferrer" className="text-weser-700 underline">www.hannover.ihk.de</a>
                </p>
                <p>
                  <strong>Berufsbezeichnung:</strong> Zertifizierter Immobilienmakler IHK<br />
                  Verliehen in der Bundesrepublik Deutschland (Niedersachsen).
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#EAE3D5]">
                <h3 className="font-bold text-weser-950 text-sm">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
                <p className="text-stone-500 text-xs">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht verpflichtet oder bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: DATENSCHUTZ */}
          {activeTab === 'datenschutz' && (
            <div className="space-y-5">
              <h2 className="font-serif text-2xl font-bold text-weser-950">
                Datenschutzerklärung
              </h2>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">1. Datenschutz auf einen Blick</h3>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">2. Verantwortliche Stelle</h3>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                  Immobilien an der Weser GmbH<br />
                  Erdal Seremet<br />
                  Verdener Straße 30<br />
                  31582 Nienburg (Weser)<br />
                  Telefon: 05021 / 860 00 21<br />
                  E-Mail: info@immobilien-weser.de
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">3. Datenerfassung auf dieser Website</h3>
                <p>
                  <strong>Kontaktformulare & Wertermittlung:</strong> Wenn Sie uns per Kontaktformular oder über den Online-Wertermittlungsrechner Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der schnellen Bearbeitung von Kundenanfragen).
                </p>
                <p>
                  <strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname, Uhrzeit der Serveranfrage, IP-Adresse). Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">4. SSL- bzw. TLS-Verschlüsselung</h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">5. Ihre Rechte</h3>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: BARRIEREFREIHEIT */}
          {activeTab === 'barrierefreiheit' && (
            <div className="space-y-5">
              <h2 className="font-serif text-2xl font-bold text-weser-950">
                Erklärung zur Barrierefreiheit
              </h2>

              <p>
                Die <strong>Immobilien an der Weser GmbH</strong> ist bestrebt, ihre Website im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung des Barrierefreiheitsstärkungsgesetzes (BFSG) sowie der Richtlinie (EU) 2016/2102 barrierefrei zugänglich zu machen.
              </p>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">Stand der Vereinbarkeit mit den Anforderungen</h3>
                <p>
                  Diese Website ist weitestgehend mit den Web Content Accessibility Guidelines (WCAG) 2.1 auf Konformitätsstufe AA vereinbar.
                </p>
              </div>

              <div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[#E7E0D2] space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">Umgesetzte Maßnahmen zur Barrierefreiheit:</h3>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li>Klare typografische Hierarchien und semantische HTML5-Struktur</li>
                  <li>Hoher Kontrastumfang nach WCAG 2.1 AA Standards</li>
                  <li>Skalierbarkeit von Texten bei Zoom bis 200 % ohne Inhaltsverlust</li>
                  <li>Vollständige Bedienbarkeit interaktiver Formulare per Tastatur</li>
                  <li>Aussagekräftige Alt-Texte für alle wesentlichen Bildinhalte</li>
                  <li>Fokus-Indikatoren für Tastatur-Navigation</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-weser-950 text-sm">Feedback und Kontakt</h3>
                <p>
                  Sollten Ihnen Mängel in Bezug auf die barrierefreie Gestaltung unserer Website auffallen, können Sie uns jederzeit kontaktieren:<br />
                  Telefon: 05021 / 860 00 21<br />
                  E-Mail: <a href="mailto:info@immobilien-weser.de" className="text-weser-700 underline">info@immobilien-weser.de</a>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#FAF7F0] border-t border-[#EAE3D5] rounded-b-3xl flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-weser-900 text-white text-xs sm:text-sm font-semibold hover:bg-weser-800 transition-all"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
