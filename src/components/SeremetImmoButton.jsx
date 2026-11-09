import React, { useId } from 'react';
import { ArrowRight } from 'lucide-react';

export default function SeremetImmoButton({ 
  onClick, 
  text = 'Kostenlose Marktwertanalyse', 
  className = '',
  size = 'default',
  type = 'button',
  icon: Icon = ArrowRight,
  disabled = false,
}) {
  const rawId = useId();
  const clipId = `seremetImmoBtnClip_${rawId.replace(/:/g, '_')}`;

  let containerClasses = 'w-[315px] sm:w-[365px] md:w-[385px] h-[60px] sm:h-[64px]';
  let textSize = 'text-[13.5px] sm:text-[15px] md:text-[16px]';
  let iconSize = 'w-5 h-5 sm:w-5.5 sm:h-5.5';
  let badgeSize = 'w-8 h-8 sm:w-9 sm:h-9';
  let paddingClass = 'px-6 sm:px-8';

  if (size === 'nav') {
    containerClasses = 'w-[180px] sm:w-[195px] h-[40px] sm:h-[42px]';
    textSize = 'text-[11.5px] sm:text-[12.5px]';
    iconSize = 'w-3.5 h-3.5';
    badgeSize = 'w-6 h-6';
    paddingClass = 'px-3.5 sm:px-4';
  } else if (size === 'card') {
    containerClasses = 'w-full max-w-[210px] h-[40px] sm:h-[44px]';
    textSize = 'text-[12px] sm:text-[13px]';
    iconSize = 'w-3.5 h-3.5 sm:w-4 sm:h-4';
    badgeSize = 'w-6 h-6 sm:w-7 sm:h-7';
    paddingClass = 'px-4';
  } else if (size === 'sm') {
    containerClasses = 'w-[240px] sm:w-[275px] h-[46px] sm:h-[50px]';
    textSize = 'text-[12.5px] sm:text-[13.5px]';
    iconSize = 'w-4 h-4';
    badgeSize = 'w-7 h-7 sm:w-8 sm:h-8';
    paddingClass = 'px-5 sm:px-6';
  } else if (size === 'md') {
    containerClasses = 'w-[305px] sm:w-[355px] md:w-[370px] h-[52px] sm:h-[56px]';
    textSize = 'text-[12px] sm:text-[13.5px] md:text-[14px]';
    iconSize = 'w-4 h-4 sm:w-4.5 sm:h-4.5';
    badgeSize = 'w-7 h-7 sm:w-8 sm:h-8';
    paddingClass = 'px-4 sm:px-6';
  } else if (size === 'full') {
    containerClasses = 'w-full h-[52px] sm:h-[56px]';
    textSize = 'text-[13.5px] sm:text-[15px]';
    iconSize = 'w-4.5 h-4.5';
    badgeSize = 'w-8 h-8';
    paddingClass = 'px-6 sm:px-8';
  }

  const isFull = size === 'full';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative inline-flex items-center select-none focus:outline-none filter drop-shadow-[0_10px_20px_rgba(11,30,54,0.18)] active:drop-shadow-[0_4px_8px_rgba(11,30,54,0.28)] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${isFull ? 'w-full' : ''} ${className}`}
    >
      <div className={`relative ${containerClasses} transition-transform duration-200 ease-out group-hover:-translate-y-0.5 active:translate-y-[3px]`}>
        
        {/* ============================================================== */}
        {/* UNIFIED SVG CHASSIS & NATIVE VECTOR MINI-SCENE (0 0 410 68)    */}
        {/* ============================================================== */}
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible" 
          viewBox="0 0 410 68" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Exakter ClipPath für das symmetrische 4-Ecken-Facetten-Chassis mit eindeutiger ID */}
            <clipPath id={clipId}>
              <path d="M 14,2 L 396,2 L 408,14 L 408,50 L 396,62 L 14,62 L 2,50 L 2,14 Z" />
            </clipPath>
          </defs>

          {/* 1. 3D PHYSICAL EXTRUSION SOCKEL (Weser-Navy Sockel mit 4.5px Tiefe) */}
          <path
            d="M 14,6.5 L 396,6.5 L 408,18.5 L 408,54.5 L 396,66.5 L 14,66.5 L 2,54.5 L 2,18.5 Z"
            className="fill-[#071322] group-hover:fill-[#030910] transition-colors duration-500"
          />

          {/* 2. BUTTON-FRONTFLÄCHE MIT SYMMETRISCHER 4-ECKEN-FACETTE */}
          <path
            d="M 14,2 L 396,2 L 408,14 L 408,50 L 396,62 L 14,62 L 2,50 L 2,14 Z"
            className="fill-[#0B1E36] group-hover:fill-[#102A4C] stroke-[#009EE0] group-hover:stroke-[#38BDF8] transition-all duration-500"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />

          {/* 3. 3D LICHTKANTE (Highlight oben) */}
          <path
            d="M 14,3.5 L 396,3.5 L 406,13.5"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="group-hover:opacity-40 transition-opacity duration-500"
          />

          {/* 4. INNENLEBEN (SAUBER GECLIPPED IM CHASSIS) */}
          <g clipPath={`url(#${clipId})`}>
            {/* Feine architektonische Linien & Glanzpunkte */}
            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
              <circle cx="45" cy="18" r="1.3" fill="#38BDF8" opacity="0.9" />
              <circle cx="160" cy="12" r="1.1" fill="#FFFFFF" opacity="0.8" />
              <circle cx="270" cy="15" r="1.4" fill="#FACC15" opacity="0.85" />
              <circle cx="340" cy="13" r="1.2" fill="#38BDF8" opacity="0.9" />
              <circle cx="395" cy="12" r="1.3" fill="#FFFFFF" opacity="0.8" />
            </g>

            {/* Subtile geometrische Grundrisslinie am unteren Rand */}
            <path
              d="M 10,54 L 400,54"
              stroke="#009EE0"
              strokeWidth="1.0"
              strokeOpacity="0.35"
              strokeDasharray="4 4"
            />
          </g>
        </svg>

        {/* ============================================================== */}
        {/* BUTTON INHALT: TEXT & ICON (OPTIONAL)                         */}
        {/* ============================================================== */}
        <div className={`relative z-10 w-full h-full flex items-center ${Icon ? 'justify-between' : 'justify-center'} gap-3 ${paddingClass}`}>
          <span className={`font-semibold tracking-wide text-white group-hover:text-cyan-100 transition-colors ${textSize} whitespace-nowrap text-center`}>
            {text}
          </span>
          {Icon && (
            <div className={`${badgeSize} rounded-full bg-weser-500/20 border border-weser-400/30 group-hover:bg-weser-500/40 group-hover:border-weser-400/60 flex items-center justify-center text-cyan-300 group-hover:text-white transition-all transform group-hover:translate-x-1 shrink-0`}>
              <Icon className={iconSize} />
            </div>
          )}
        </div>

      </div>
    </button>
  );
}
