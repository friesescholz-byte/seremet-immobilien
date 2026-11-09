import React from 'react';
import { ShieldCheck, Compass, Home, Clock } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    {
      value: '15+ Jahre',
      label: 'Markterfahrung',
      sub: 'Nienburg & Mittelweser',
      icon: Clock,
      gradient: 'from-white/95 via-white/80 to-sky-50/40',
      hoverGradient: 'group-hover:to-sky-100/35',
      border: 'border-sky-100/70 hover:border-sky-300/60',
      iconBox: 'bg-sky-50/70 border-sky-100/80 text-sky-700 group-hover:bg-weser-900 group-hover:text-white',
      accentLine: 'bg-sky-500',
    },
    {
      value: '100%',
      label: 'Inhaberbetreuung',
      sub: 'Persönlich durch Erdal Seremet',
      icon: Home,
      gradient: 'from-white/95 via-white/80 to-amber-50/40',
      hoverGradient: 'group-hover:to-amber-100/35',
      border: 'border-amber-100/70 hover:border-amber-300/60',
      iconBox: 'bg-amber-50/70 border-amber-100/80 text-amber-700 group-hover:bg-amber-800 group-hover:text-white',
      accentLine: 'bg-amber-500',
    },
    {
      value: '0 €',
      label: 'Kostenfreie Einwertung',
      sub: 'Unverbindlich vor Ort',
      icon: Compass,
      gradient: 'from-white/95 via-white/80 to-emerald-50/40',
      hoverGradient: 'group-hover:to-emerald-100/35',
      border: 'border-emerald-100/70 hover:border-emerald-300/60',
      iconBox: 'bg-emerald-50/70 border-emerald-100/80 text-emerald-700 group-hover:bg-emerald-900 group-hover:text-white',
      accentLine: 'bg-emerald-500',
    },
    {
      value: 'IHK § 34c',
      label: 'Behördlich geprüft',
      sub: 'Zertifizierter Makler',
      icon: ShieldCheck,
      gradient: 'from-white/95 via-white/80 to-blue-50/40',
      hoverGradient: 'group-hover:to-blue-100/35',
      border: 'border-blue-100/70 hover:border-blue-300/60',
      iconBox: 'bg-blue-50/70 border-blue-100/80 text-blue-700 group-hover:bg-weser-950 group-hover:text-white',
      accentLine: 'bg-weser-600',
    },
  ];

  return (
    <section className="relative bg-[#FBF9F5] pt-6 sm:pt-8 pb-14 sm:pb-18 border-b border-[#E6E0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${item.gradient} ${item.hoverGradient} ${item.border} backdrop-blur-md shadow-xs hover:shadow-[0_18px_38px_rgba(26,38,57,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-default flex flex-col justify-between overflow-hidden border`}
              >
                {/* Feine Glas-Glanzkante oben */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-weser-900 group-hover:text-weser-950 transition-colors duration-300">
                      {item.label}
                    </span>
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-2xs ${item.iconBox}`}>
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>

                  <div className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-light text-weser-950 tracking-tight leading-none mb-2.5 group-hover:text-weser-800 transition-colors duration-300">
                    {item.value}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 font-sans font-light group-hover:text-stone-900 transition-colors duration-300">
                    {item.sub}
                  </p>
                </div>

                {/* Subtile Akzentlinie, die beim Hover sanft ausfährt */}
                <div className={`w-0 group-hover:w-10 h-0.5 ${item.accentLine} mt-4 transition-all duration-300 ease-out rounded-full`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

