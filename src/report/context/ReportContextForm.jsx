import React from 'react';

export default function ReportContextForm({ ctx, setCtx }) {
  const update = (field, value) => setCtx((prev) => ({ ...prev, [field]: value }));

  const fields = [
    { key: 'systemName', label: 'Systeemnaam', placeholder: 'bv. Wiskunde Chatbot v2.1', type: 'text' },
    { key: 'organisation', label: 'Organisatie', placeholder: 'bv. ROC van Twente', type: 'text' },
    { key: 'contactPerson', label: 'Contactpersoon', placeholder: 'Naam en functie', type: 'text' },
    { key: 'contactEmail', label: 'E-mail contactpersoon', placeholder: 'naam@rocvantwente.nl', type: 'email' },
    { key: 'version', label: 'Rapportversie', placeholder: '1.0', type: 'text' },
    { key: 'assessmentDate', label: 'Rapportdatum', placeholder: '', type: 'date' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
      <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center space-x-2">
        <svg className="w-5 h-5 text-[#2D5A87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Rapportcontext</span>
      </h3>
      <p className="text-xs text-slate-500 mb-4">
        Vul de onderstaande gegevens in om het rapport te personaliseren.
        De antwoorden uit de toetsingswizard worden automatisch overgenomen.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="block text-xs font-semibold text-slate-600 mb-1">{f.label}</label>
            <input
              type={f.type}
              value={ctx[f.key] || ''}
              onChange={(e) => update(f.key, e.target.value)}
              placeholder={f.placeholder}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#2D5A87] focus:border-[#2D5A87] outline-none transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
