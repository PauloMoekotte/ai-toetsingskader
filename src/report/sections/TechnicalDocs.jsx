import React from 'react';

const DOC_ITEMS = [
  { doc: 'Modelkaart (doel, werking, beperkingen)', verplicht: 'hoog_risico', role: ['school', 'leverancier'] },
  { doc: 'Datasheet (herkomst, samenstelling, bewerking van trainingsdata)', verplicht: 'hoog_risico', role: ['leverancier'] },
  { doc: 'Risicobeheerarchief (risico-identificatie, -analyse, -mitigatie)', verplicht: 'hoog_risico', role: ['school', 'leverancier'] },
  { doc: 'Testresultaten (nauwkeurigheid, robuustheid, bias)', verplicht: 'hoog_risico', role: ['leverancier'] },
  { doc: 'Logboek van systeemactiviteiten (AI Act Art. 12)', verplicht: 'hoog_risico', role: ['school', 'leverancier'] },
  { doc: 'Gebruikershandleiding en instructies voor docenten', verplicht: 'hoog_risico', role: ['school', 'leverancier'] },
  { doc: 'Conformiteitsverklaring (CE-markering)', verplicht: 'hoog_risico', role: ['leverancier'] },
  { doc: 'Beschrijving van menselijk toezicht (HITL/HOTL/HOC)', verplicht: 'hoog_risico', role: ['school', 'leverancier'] },
  { doc: 'DPIA-document (AVG Art. 35)', verplicht: 'hoog_risico', role: ['school', 'leverancier'] },
  { doc: 'FRIA-document (grondrechtenimpactanalyse)', verplicht: 'hoog_risico', role: ['school', 'leverancier'] },
  { doc: 'Verwerkersovereenkomst (AVG Art. 28)', verplicht: 'hoog_risico', role: ['school', 'leverancier'] },
  { doc: 'Systeembeschrijving en architectuuroverzicht', verplicht: 'beperkt', role: ['school', 'leverancier'] },
  { doc: 'Basis functionele documentatie (gebruiksdoel, scope)', verplicht: 'beperkt', role: ['school', 'leverancier'] },
  { doc: 'Transparantieverklaring voor eindgebruikers', verplicht: 'beperkt', role: ['school', 'leverancier'] },
  { doc: 'Basis datasheet / datastroomoverzicht', verplicht: 'beperkt', role: ['school', 'leverancier'] },
  { doc: 'IT-beveiligingsbaseline (AVG Art. 32)', verplicht: 'geen_ai', role: ['school', 'leverancier'] },
];

export default function TechnicalDocs({ classification, role }) {
  const filtered = DOC_ITEMS.filter(
    (d) =>
      (d.verplicht === classification ||
        (classification === 'verboden' && d.verplicht === 'hoog_risico')) &&
      d.role.includes(role)
  );

  const isVerboden = classification === 'verboden';
  if (!isVerboden && filtered.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-4">
        Technische documentatie
      </h2>

      {isVerboden ? (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800">
          <strong>Systeem geclassificeerd als verboden.</strong> Technische documentatie is niet langer
          relevant voor ingebruikname. De focus ligt op stopzetting en eventuele herontwikkeling.
          Zie de compliance roadmap voor de aanpak.
        </div>
      ) : (
        <>
          <p className="text-xs text-slate-500 mb-3">
            Onderstaande documenten dienen te worden opgesteld en onderhouden als onderdeel van de
            technische documentatieverplichting (AI Act Art. 11-12). Status: nog te bepalen.
          </p>
          <div className="space-y-1.5">
            {filtered.map((d, i) => (
              <div key={i} className="flex items-start space-x-2 p-2 bg-slate-50 rounded-lg border border-slate-100 text-xs hover:bg-slate-100 transition-colors">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded border-2 border-slate-300 bg-white shrink-0 mt-0.5">
                  <span className="text-[9px] text-slate-400">☐</span>
                </span>
                <div className="flex-1">
                  <span className="text-slate-700">{d.doc}</span>
                  <span className={`ml-2 px-1.5 py-0.5 rounded text-[9px] font-bold ${
                    d.verplicht === 'hoog_risico'
                      ? 'bg-amber-100 text-amber-700'
                      : d.verplicht === 'beperkt'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {d.verplicht === 'hoog_risico' ? 'HR' : d.verplicht === 'beperkt' ? 'BR' : '—'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
