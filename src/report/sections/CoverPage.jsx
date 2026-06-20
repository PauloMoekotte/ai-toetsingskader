import React from 'react';
import { BADGE_CLASSES, BADGE_LABELS } from '../styles/reportStyles';

export default function CoverPage({ ctx, classification }) {
  const bClass = BADGE_CLASSES[classification] || BADGE_CLASSES.geen_ai;
  const bLabel = BADGE_LABELS[classification] || 'Onbekend';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden print:break-after-page">
      <div className="bg-[#2D5A87] p-8 text-white text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl border border-white/20 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-wide">AI Toetsingsrapport</h1>
        <p className="text-sm text-slate-200 mt-2">op basis van de AI Act (Verordening 2024/1689) en het SIVON Toetsingskader 2026</p>
      </div>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 uppercase font-semibold">Systeemnaam</span>
            <p className="font-bold text-slate-800 mt-0.5">{ctx.systemName || '—'}</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 uppercase font-semibold">Organisatie</span>
            <p className="font-bold text-slate-800 mt-0.5">{ctx.organisation || '—'}</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 uppercase font-semibold">Rapportdatum</span>
            <p className="font-bold text-slate-800 mt-0.5">{ctx.assessmentDate || '—'}</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 uppercase font-semibold">Versie</span>
            <p className="font-bold text-slate-800 mt-0.5">{ctx.version || '—'}</p>
          </div>
        </div>

        <div className="text-center">
          <span className={`inline-block px-6 py-2 rounded-full text-sm font-bold border-2 ${bClass}`}>
            {bLabel}
          </span>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Contactpersoon</span>
            <span className="font-medium">{ctx.contactPerson || '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">E-mail</span>
            <span className="font-medium">{ctx.contactEmail || '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Rol</span>
            <span className="font-medium">
              {ctx.role === 'school'
                ? 'Instelling / Bestuur'
                : ctx.role === 'leverancier'
                ? 'Leverancier'
                : '—'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Rechtsgrond</span>
            <span className="font-medium">
              {classification === 'verboden'
                ? 'AI Act Art. 5'
                : classification === 'hoog_risico'
                ? 'AI Act Art. 6-7'
                : classification === 'beperkt'
                ? 'AI Act Art. 50'
                : 'N.v.t.'}
            </span>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 text-center leading-relaxed">
          Dit rapport is automatisch gegenereerd op basis van het interactieve AI Toetsingskader.
          Het is een hulpmiddel voor compliance en governance en vervangt geen juridisch advies.
        </div>
      </div>
    </div>
  );
}
