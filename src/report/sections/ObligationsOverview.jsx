import React from 'react';
import { obligations } from '../content/obligationsData';

export default function ObligationsOverview({ classification, role }) {
  const filtered = obligations.filter(
    (o) => o.risico === classification && o.voor.includes(role)
  );

  if (filtered.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-4">
          Verplichtingenoverzicht
        </h2>
        <p className="text-sm text-slate-500">Geen specifieke verplichtingen voor deze combinatie van classificatie en rol.</p>
      </div>
    );
  }

  const priorityColor = (p) => {
    if (p === 'Hoogst') return 'bg-red-100 text-red-700';
    if (p === 'Hoog') return 'bg-amber-100 text-amber-700';
    if (p === 'Midden') return 'bg-sky-100 text-sky-700';
    return 'bg-slate-100 text-slate-600';
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-4">
        Verplichtingenoverzicht
      </h2>
      <p className="text-xs text-slate-500 mb-3">
        {filtered.length} verplichting{filtered.length !== 1 ? 'en' : ''} van toepassing op uw situatie.
      </p>

      <div className="space-y-2">
        {filtered.map((o) => (
          <div key={o.id} className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="flex items-stretch text-xs">
              <div className="w-2 bg-[#2D5A87]" />
              <div className="flex-1 p-3 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-slate-800">{o.verplichting}</span>
                  <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold ${priorityColor(o.prioriteit)}`}>
                    {o.prioriteit}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-slate-500">
                  <span>{o.basis}</span>
                  <span className="font-mono">{o.artikel}</span>
                  <span>Deadline: <strong>{o.deadline}</strong></span>
                  <span>Verantwoordelijke: <strong>{o.verantwoordelijke}</strong></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
