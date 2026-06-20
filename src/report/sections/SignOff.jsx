import React from 'react';

const SIGNERS = [
  { functie: 'AI Officer', rol: 'Eindverantwoordelijk voor naleving AI Act' },
  { functie: 'Functionaris Gegevensbescherming (FG)', rol: 'Toezicht op gegevensbescherming en DPIA' },
  { functie: 'Privacy Officer (PO)', rol: 'Uitvoering privacybeleid en AVG-compliance' },
  { functie: 'Directie / College van Bestuur', rol: 'Bestuurlijke eindverantwoordelijkheid' },
];

export default function SignOff({ ctx, classification }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-4">
        Ondertekening & goedkeuring
      </h2>
      <p className="text-xs text-slate-500 mb-4">
        Dit rapport dient te worden goedgekeurd door de volgende functionarissen.
        Door ondertekening bevestigen zij dat de inhoud van het rapport is beoordeeld en
        dat de benodigde vervolgstappen worden genomen.
      </p>

      <div className="space-y-4">
        {SIGNERS.map((s, i) => (
          <div key={i} className="border border-slate-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-semibold text-sm text-slate-800">{s.functie}</span>
                <p className="text-xs text-slate-500">{s.rol}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-400 uppercase tracking-wide text-[10px] mb-1">Naam</label>
                <div className="border-b border-slate-300 pb-1 text-slate-700">_________________________</div>
              </div>
              <div>
                <label className="block text-slate-400 uppercase tracking-wide text-[10px] mb-1">Datum</label>
                <div className="border-b border-slate-300 pb-1 text-slate-700">_________________________</div>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <label className="block text-slate-400 uppercase tracking-wide text-[10px] mb-1">Handtekening</label>
              <div className="border-b border-slate-300 pb-1 text-slate-700">_________________________</div>
            </div>
            <div className="mt-2 text-xs">
              <label className="block text-slate-400 uppercase tracking-wide text-[10px] mb-1">Opmerkingen</label>
              <div className="border-b border-slate-300 pb-1 text-slate-400 italic">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
        <strong>Rapportgegevens:</strong><br />
        Systeem: {ctx.systemName || '—'} | Organisatie: {ctx.organisation || '—'} |
        Classificatie: {classification === 'verboden' ? 'Verboden' : classification === 'hoog_risico' ? 'Hoog risico' : classification === 'beperkt' ? 'Beperkt/minimaal' : 'Geen AI'} |
        Versie: {ctx.version || '—'} | Datum: {ctx.assessmentDate || '—'}
      </div>
    </div>
  );
}
