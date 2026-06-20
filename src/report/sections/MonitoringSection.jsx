import React from 'react';

const KPIS = [
  { kpi: 'Aantal AI-gegenereerde adviezen dat wordt overgenomen door docent', type: 'Effectiviteit', frequentie: 'Maandelijks' },
  { kpi: 'Foutmarge / afwijkingspercentage van AI-output', type: 'Nauwkeurigheid', frequentie: 'Maandelijks' },
  { kpi: 'Aantal bias-gerelateerde meldingen of klachten', type: 'Bias', frequentie: 'Per kwartaal' },
  { kpi: 'Aantal ingrijpmomenten door menselijk toezicht (HITL/HOTL)', type: 'Toezicht', frequentie: 'Per kwartaal' },
  { kpi: 'Systeemuptime en responstijd', type: 'Beschikbaarheid', frequentie: 'Wekelijks' },
  { kpi: 'Aantal datalekken / beveiligingsincidenten', type: 'Security', frequentie: 'Direct melden' },
  { kpi: 'Doorlooptijd van incidentafhandeling (detectie tot resolutie)', type: 'Incidentmanagement', frequentie: 'Per kwartaal' },
  { kpi: 'Naleving van bewaartermijnen voor verwerkte data', type: 'Compliance', frequentie: 'Halfjaarlijks' },
];

const TRIGGERS = [
  'Wijziging in wet- of regelgeving (AI Act, AVG, SIVON)',
  'Significante wijziging in het AI-systeem (modelupdate, nieuwe data, andere scope)',
  'Klacht of incident met betrekking tot bias of discriminatie',
  'Datalek waarbij AI-verwerkte persoonsgegevens zijn gecompromitteerd',
  'Nieuwe functionaliteit die de risicoclassificatie kan beïnvloeden',
  'Resultaten uit periodieke monitoring wijken significant af van baseline',
  'Advies van toezichthouder (AP, SIVON-commissie)',
  'Wijziging in het gebruikersbestand (bv. nieuwe doelgroep)',
];

export default function MonitoringSection() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-4">
        Monitoring & evaluatie
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3">KPI's voor AI-monitoring</h3>
          <p className="text-xs text-slate-500 mb-3">
            Definieer meetbare KPI's om de werking en impact van het AI-systeem te monitoren.
            Pas de frequentie aan op basis van het risiconiveau.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-2 font-semibold text-slate-600">KPI</th>
                  <th className="text-left p-2 font-semibold text-slate-600 w-1/6">Type</th>
                  <th className="text-left p-2 font-semibold text-slate-600 w-1/6">Frequentie</th>
                </tr>
              </thead>
              <tbody>
                {KPIS.map((k, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="p-2 text-slate-700">{k.kpi}</td>
                    <td className="p-2">
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                        k.type === 'Effectiviteit' || k.type === 'Nauwkeurigheid'
                          ? 'bg-sky-100 text-sky-700'
                          : k.type === 'Bias' || k.type === 'Compliance'
                          ? 'bg-amber-100 text-amber-700'
                          : k.type === 'Security' || k.type === 'Incidentmanagement'
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {k.type}
                      </span>
                    </td>
                    <td className="p-2 text-slate-500">{k.frequentie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3">Triggers voor herziening</h3>
          <p className="text-xs text-slate-500 mb-3">
            Bij een van onderstaande gebeurtenissen moet de risicoclassificatie en compliance opnieuw
            worden beoordeeld:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {TRIGGERS.map((t, i) => (
              <div key={i} className="flex items-start space-x-2 p-2 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                <span className="text-slate-400 mt-0.5">⚡</span>
                <span className="text-slate-700">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3">Herzieningscyclus</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            {[
              { fase: 'Standaard', cyclus: 'Halfjaarlijks', actie: 'Volledige herbeoordeling van classificatie, KPI-analyse, update documentatie', kleur: 'bg-emerald-100 border-emerald-200 text-emerald-800' },
              { fase: 'Bij wijziging', cyclus: 'Ad hoc', actie: 'Herbeoordeling bij trigger (zie boven), incident, of modelupdate', kleur: 'bg-amber-100 border-amber-200 text-amber-800' },
              { fase: 'Volledige audit', cyclus: 'Jaarlijks', actie: 'Externe of interne audit op volledige compliance, inclusief FRIA/DPIA-update', kleur: 'bg-[#2D5A87]/10 border-[#2D5A87]/20 text-[#2D5A87]' },
            ].map((h, i) => (
              <div key={i} className={`flex-1 p-3 rounded-xl border ${h.kleur}`}>
                <h4 className="font-bold text-sm">{h.fase}</h4>
                <p className="text-xs mt-0.5 opacity-80">{h.cyclus}</p>
                <p className="text-xs mt-1 opacity-70">{h.actie}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
