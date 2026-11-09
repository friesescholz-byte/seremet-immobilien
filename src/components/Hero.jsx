import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, ShieldCheck, ArrowRight, MapPin } from 'lucide-react';
import SeremetImmoButton from './SeremetImmoButton';

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ onOpenValuation, onOpenInquiry }) {
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJDcUojv-MsEcRnMy8Mjga69s";

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-weser-950 pt-28 sm:pt-36 pb-16 sm:pb-20">
      
      {/* ============================================================== */}
      {/* 1. FESTSTEHENDES CINEMATISCHES HINTERGRUNDBILD (PARALLAX EFFECT) */}
      {/* ============================================================== */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/nienburg-weser-bruecke-striped.webp")',
          backgroundPosition: 'center 35%'
        }}
      >
        {/* Richtungs-Verlauf: Links dunkel & lesefreundlich, rechts leuchtet die Nienburger Weserbrücke mit Streifen durch */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: 'linear-gradient(90deg, rgba(7, 19, 34, 0.95) 0%, rgba(7, 19, 34, 0.82) 48%, rgba(7, 19, 34, 0.45) 75%, rgba(7, 19, 34, 0.20) 100%)'
          }}
        />

        {/* Vertikaler Verlauf: Weicher Übergang oben & unten */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(7, 19, 34, 0.70) 0%, transparent 40%, rgba(7, 19, 34, 0.90) 100%)'
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* 2. ELEGANTER, MINIMALISTISCHER CONTENT-BEREICH                */}
      {/* ============================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pb-4">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          
          {/* Eyebrow: Trust Pills (Google Reviews) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* Google Reviews Badge */}
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-stone-200 transition-all shadow-sm group"
              title="Google Rezension für Immobilien an der Weser ansehen oder schreiben"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4,9</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-200 font-medium group-hover:text-cyan-300 transition-colors">
                18+ Google Bewertungen
              </span>
            </a>
          </motion.div>

          {/* Subtitle Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease }}
            className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-cyan-400"
          >
            Nienburg (Weser) & Mittelweser • Inh. Erdal Seremet
          </motion.div>

          {/* Monumentale, edle Headline - einheitliche Schriftart wie "Immobilienverkauf" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal text-white tracking-tight leading-[1.08]">
              Immobilienverkauf<br />
              <span className="text-white block mt-1 font-light text-stone-100">
                mit Substanz & Diskretion.
              </span>
            </h1>
          </motion.div>

          {/* Reduzierter, klarer Fließtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="text-base sm:text-lg md:text-xl text-stone-200 font-sans font-light leading-relaxed max-w-2xl"
          >
            Ihr verlässlicher Makler für Nienburg und die gesamte Mittelweser. Erdal Seremet begleitet Sie persönlich von der fundierten Einwertung bis zur sicheren notariellen Beurkundung – ehrlich, diskret und zum besten Marktwert.
          </motion.p>

          {/* Action Row: Symmetrischer 3D Button + Inhaberdraht */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 max-w-[245px] sm:max-w-none relative z-30"
          >
            <SeremetImmoButton
              onClick={() => onOpenInquiry('bewertung')}
              text="Kostenlose Marktwertanalyse"
            />

            <a
              href="tel:050218600021"
              className="inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white transition-all text-xs sm:text-sm group"
            >
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[11px] text-stone-400 font-medium leading-none">Direkter Inhaberdraht</span>
                <span className="font-bold text-white tracking-wide mt-1">05021 / 860 00 21</span>
              </div>
            </a>
          </motion.div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. INHABER-PROFILBILD FREIGESTELLT                             */}
      {/* ============================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25, ease }}
        className="absolute bottom-0 right-0 sm:right-6 md:right-10 lg:right-14 xl:right-20 z-10 pointer-events-none select-none w-[145px] sm:w-[260px] md:w-[330px] lg:w-[390px] xl:w-[430px]"
      >
        <img
          src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/seremet-immobilien/erdal-seremet-hero-cutout.webp"
          alt="Erdal Seremet – Inhaber & zertifizierter Immobilienmakler"
          className="w-full h-auto object-bottom block"
          style={{
            filter: 'drop-shadow(0 14px 28px rgba(7, 19, 34, 0.30)) drop-shadow(0 4px 10px rgba(7, 19, 34, 0.18))'
          }}
          loading="eager"
        />
      </motion.div>

      {/* ============================================================== */}
      {/* 4. ELEGANTE, LEICHT WELLIGE ARCHITEKTUR-LINIE (OHNE VERLAUF)    */}
      {/* ============================================================== */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-30 pointer-events-none">
        <svg 
          viewBox="0 0 1440 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-8 sm:h-12 md:h-16 block"
          preserveAspectRatio="none"
        >
          {/* Wellenförmige Füllfläche im hellen Sandton (#FBF9F5) */}
          <path 
            d="M 0,28 C 340,48 720,10 1080,34 C 1240,44 1360,22 1440,30 L 1440,60 L 0,60 Z" 
            fill="#FBF9F5" 
          />
          {/* Zarte, edle Konturlinie an der Kante */}
          <path 
            d="M 0,28 C 340,48 720,10 1080,34 C 1240,44 1360,22 1440,30" 
            fill="none" 
            stroke="#E6E0D3" 
            strokeWidth="1.2" 
            strokeOpacity="0.8" 
          />
        </svg>
      </div>

    </section>
  );
}
