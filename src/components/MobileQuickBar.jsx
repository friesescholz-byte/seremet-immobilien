import React from 'react';
import { Phone, MessageSquare, Calculator } from 'lucide-react';

export default function MobileQuickBar({ onOpenValuation }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#FBF9F5]/95 backdrop-blur-md border-t border-[#DFD8CA] py-2 px-3 shadow-lg flex items-center justify-between gap-2">
      {/* Phone Call */}
      <a
        href="tel:050218600021"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white border border-[#DDD5C5] text-weser-950 font-semibold text-[11px] active:bg-[#F2ECE0]"
      >
        <Phone className="w-4 h-4 text-weser-700 mb-0.5" />
        <span>Anrufen</span>
      </a>

      {/* WhatsApp Chat */}
      <a
        href="https://wa.me/4915221048936"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-[11px] active:bg-emerald-100"
      >
        <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
        <span>WhatsApp</span>
      </a>

      {/* Valuation Primary Action */}
      <button
        onClick={onOpenValuation}
        className="flex-[1.4] flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-weser-900 text-white font-semibold text-[11px] shadow-xs active:bg-weser-800"
      >
        <Calculator className="w-4 h-4 text-weser-400 mb-0.5" />
        <span>Marktwert-Check</span>
      </button>
    </div>
  );
}
