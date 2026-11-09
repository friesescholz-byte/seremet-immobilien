import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ArrowUpRight } from 'lucide-react';

const googleReviews = [
  {
    id: 1,
    author: 'Familie B.',
    city: 'Nienburg (Weser)',
    role: 'Verkäufer Einfamilienhaus',
    text: 'Herr Seremet hat unser Elternhaus in Nienburg mit großem Feingefühl und bemerkenswerter Marktkenntnis betreut. Vom ersten Vorgespräch über die Marktwertanalyse bis hin zum Notartermin fühlten wir uns bestens aufgehoben. Innerhalb von nur 6 Wochen wurde der Notarvertrag unterzeichnet – zu einem Preis, der unsere Erwartungen voll erfüllt hat.',
    rating: 5,
    date: 'Vor 3 Monaten auf Google',
  },
  {
    id: 2,
    author: 'Michael & Katrin K.',
    city: 'Nienburg-Holtorf',
    role: 'Käufer Architektenhaus',
    text: 'Wir haben lange nach einem passenden Haus in Holtorf gesucht und viele Makler erlebt. Bei Herrn Seremet war der Unterschied spürbar: keine falschen Versprechungen, transparente Unterlagen und eine Besichtigung, bei der auf jede Frage offen eingegangen wurde. Absolute Empfehlung für jeden in der Region!',
    rating: 5,
    date: 'Vor 2 Monaten auf Google',
  },
  {
    id: 3,
    author: 'Thorsten W.',
    city: 'Landkreis Nienburg',
    role: 'Eigentümer Mehrfamilienhaus (Kapitalanlage)',
    text: 'Als Investor schätze ich verlässliche Zahlen und zügige Kommunikation. Die Marktwertanalyse von Erdal Seremet war fundiert und treffsicher. Die Vermittlung an einen bonitätsgeprüften Käufer lief diskret und geräuschlos ab. Gerne wieder!',
    rating: 5,
    date: 'Vor 4 Monaten auf Google',
  },
  {
    id: 4,
    author: 'Sabine M.',
    city: 'Nienburg Zentrum',
    role: 'Vermieterin 3-Zimmer-Wohnung',
    text: 'Die Vermietung meiner Eigentumswohnung an der Weser hat Herr Seremet komplett übernommen. Innerhalb weniger Tage hatte ich eine vorausgewählte Liste solventer Mietinteressenten. Der Mietvertrag war absolut rechtssicher und die Übergabe vorbildlich protokolliert.',
    rating: 5,
    date: 'Vor 1 Monat auf Google',
  },
  {
    id: 5,
    author: 'Jens & Andrea H.',
    city: 'Marklohe',
    role: 'Verkäufer Doppelhaushälfte',
    text: 'Wir wollten uns verkleinern und hatten Respekt vor dem Verkaufsprozess. Erdal Seremet hat uns jeden Schritt ruhig erklärt, ein wunderschönes Exposé erstellt und uns alle behördlichen Wege abgenommen. Ein Makler mit echter Nienburger Handschlagqualität.',
    rating: 5,
    date: 'Vor 5 Monaten auf Google',
  },
];

export default function TestimonialsRoundel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const count = googleReviews.length;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth Auto-Play (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, count]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  const getCardTransform = (index) => {
    let diff = (index - currentIndex) % count;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;

    const isCenter = diff === 0;
    const isImmediateRight = diff === 1;
    const isImmediateLeft = diff === -1;

    let x = '0%';
    let rotateY = 0;
    let scale = 1;
    let zIndex = 30;
    let opacity = 1;

    if (isMobile) {
      if (isCenter) {
        x = '0%';
        rotateY = 0;
        scale = 1;
        zIndex = 30;
        opacity = 1;
      } else if (isImmediateRight) {
        x = '88%';
        rotateY = -22;
        scale = 0.82;
        zIndex = 20;
        opacity = 0.35;
      } else if (isImmediateLeft) {
        x = '-88%';
        rotateY = 22;
        scale = 0.82;
        zIndex = 20;
        opacity = 0.35;
      } else {
        x = diff > 0 ? '140%' : '-140%';
        rotateY = diff > 0 ? -40 : 40;
        scale = 0.65;
        zIndex = 10;
        opacity = 0;
      }
    } else {
      if (isCenter) {
        x = '0%';
        rotateY = 0;
        scale = 1;
        zIndex = 30;
        opacity = 1;
      } else if (isImmediateRight) {
        x = '66%';
        rotateY = -28;
        scale = 0.86;
        zIndex = 20;
        opacity = 0.65;
      } else if (isImmediateLeft) {
        x = '-66%';
        rotateY = 28;
        scale = 0.86;
        zIndex = 20;
        opacity = 0.65;
      } else if (diff === 2) {
        x = '115%';
        rotateY = -48;
        scale = 0.72;
        zIndex = 10;
        opacity = 0.2;
      } else if (diff === -2) {
        x = '-115%';
        rotateY = 48;
        scale = 0.72;
        zIndex = 10;
        opacity = 0.2;
      }
    }

    return { x, rotateY, scale, zIndex, opacity, isCenter };
  };

  return (
    <section id="bewertungen" className="py-20 sm:py-28 bg-[#FBF9F5] border-t border-[#E6E0D3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Trust Box */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] text-weser-900 text-xs font-semibold mb-3 border border-[#D9D0BD]">
              <span>Echte Kundenerfahrungen</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-weser-950 tracking-tight leading-[1.15]">
              Was Eigentümer & Käufer auf Google schreiben.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 mt-3 font-sans">
              Authentische Rezensionen aus Nienburg und der Mittelweser – über persönliche Betreuung, faire Marktwerte und reibungslose Beurkundungen.
            </p>
          </div>

          {/* Google Review Trust Card */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E0D8C8] shadow-sm flex flex-col sm:flex-row items-center gap-5 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-2xs font-bold text-blue-600 text-2xl">
                G
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black text-weser-950">4,9</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-stone-500 font-medium">
                  18+ verifizierte Rezensionen
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJDcUojv-MsEcRnMy8Mjga69s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-weser-900 hover:bg-weser-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors text-center"
              >
                <span>Google Profil & Rezensionen</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-300" />
              </a>
            </div>
          </div>
        </div>

        {/* 3D PERSPECTIVE ROUNDEL STAGE */}
        <div
          className="relative py-8 sm:py-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 3D Perspective Viewport */}
          <div
            className="relative h-[380px] sm:h-[400px] w-full max-w-5xl mx-auto flex items-center justify-center"
            style={{ perspective: '1200px' }}
          >
            {googleReviews.map((rev, index) => {
              const { x, rotateY, scale, zIndex, opacity, isCenter } = getCardTransform(index);

              return (
                <motion.div
                  key={rev.id}
                  className="absolute top-0 bottom-0 flex items-center justify-center w-full max-w-[320px] sm:max-w-[460px] md:max-w-[500px]"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    x,
                    rotateY,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => {
                    if (!isCenter) setCurrentIndex(index);
                  }}
                >
                  <div
                    className={`w-full h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isCenter
                        ? 'bg-white border-2 border-cyan-600/30 shadow-[0_20px_50px_rgba(11,30,54,0.12),0_10px_25px_rgba(0,0,0,0.06)] ring-1 ring-cyan-500/10'
                        : 'bg-[#FDFCF9] border border-[#E5DFD2] shadow-md cursor-pointer hover:border-cyan-600/40'
                    }`}
                  >
                    <div>
                      {/* Top Row: Stars + Verified Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex text-amber-400 gap-0.5">
                          {[...Array(rev.rating)].map((_, s) => (
                            <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verifizierte Google-Rezension
                        </span>
                      </div>

                      {/* Quote Symbol */}
                      <Quote className="w-8 h-8 text-cyan-600/20 mb-2 transform -scale-x-100" />

                      {/* Review Text */}
                      <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans italic line-clamp-5">
                        „{rev.text}“
                      </p>
                    </div>

                    {/* Author Footer */}
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3 mt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-weser-900 text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs">
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-weser-950">
                            {rev.author}
                          </div>
                          <div className="text-xs text-stone-500">{rev.role} • {rev.city}</div>
                        </div>
                      </div>

                      <span className="text-[11px] text-stone-400 font-medium shrink-0">
                        {rev.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Controls: Left/Right Arrows & Indicators */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Vorherige Bewertung"
              className="w-11 h-11 rounded-2xl bg-white border border-[#DDD5C5] text-weser-900 flex items-center justify-center hover:bg-weser-900 hover:text-white hover:border-weser-900 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {googleReviews.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Zu Bewertung ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIndex
                      ? 'w-8 bg-weser-900'
                      : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Nächste Bewertung"
              className="w-11 h-11 rounded-2xl bg-white border border-[#DDD5C5] text-weser-900 flex items-center justify-center hover:bg-weser-900 hover:text-white hover:border-weser-900 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
