import React from 'react';

const FRIA_DPIA_ITEMS = [
  // --- Algemene voorbereiding ---
  { id: 'a1', cat: 'Algemeen', item: 'AI-systeem en doel beschreven (naam, versie, beoogde functie)', verantwoordelijke: 'AI Officer' },
  { id: 'a2', cat: 'Algemeen', item: 'Gebruikscontext in kaart gebracht (waar, door wie, wanneer)', verantwoordelijke: 'Projectleider' },
  { id: 'a3', cat: 'Algemeen', item: 'Betrokkenen (data subjects) geïdentificeerd: leerlingen, docenten, ouders', verantwoordelijke: 'PO' },
  { id: 'a4', cat: 'Algemeen', item: 'Rechtmatige grondslag verwerking vastgesteld (AVG Art. 6)', verantwoordelijke: 'FG' },
  { id: 'a5', cat: 'Algemeen', item: 'Doelbinding getoetst: verwerking verenigbaar met oorspronkelijk doel', verantwoordelijke: 'FG' },

  // --- FRIA specifiek ---
  { id: 'f1', cat: 'FRIA — Grondrechten', item: 'Grondrechtencheck uitgevoerd: non-discriminatie, privacy, onderwijs, autonomie', verantwoordelijke: 'FG' },
  { id: 'f2', cat: 'FRIA — Grondrechten', item: 'Risico op discriminatie/bias in kaart gebracht (leeftijd, geslacht, etniciteit, beperking)', verantwoordelijke: 'AI Officer / Ethiekcommissie' },
  { id: 'f3', cat: 'FRIA — Grondrechten', item: 'Impact op autonomie van de docent beoordeeld', verantwoordelijke: 'Onderwijsmanager' },
  { id: 'f4', cat: 'FRIA — Grondrechten', item: 'Impact op rechten van minderjarigen beoordeeld (IVRK Art. 3, 12, 16)', verantwoordelijke: 'FG / PO' },
  { id: 'f5', cat: 'FRIA — Grondrechten', item: 'Transparantie naar betrokkenen geborgd (AI Act Art. 50, AVG Art. 13-14)', verantwoordelijke: 'Communicatie / PO' },
  { id: 'f6', cat: 'FRIA — Grondrechten', item: 'Recht op uitleg (right to explanation) bij geautomatiseerde besluiten', verantwoordelijke: 'AI Officer' },
  { id: 'f7', cat: 'FRIA — Grondrechten', item: 'Mogelijkheid tot bezwaar/beroep voor betrokkenen geregeld', verantwoordelijke: 'Juridische zaken' },

  // --- DPIA specifiek ---
  { id: 'd1', cat: 'DPIA — Gegevensbescherming', item: 'Dataminimalisatie toegepast: alleen noodzakelijke data verzameld', verantwoordelijke: 'PO / FG' },
  { id: 'd2', cat: 'DPIA — Gegevensbescherming', item: 'Bewaartermijnen vastgesteld en geïmplementeerd', verantwoordelijke: 'PO / IT' },
  { id: 'd3', cat: 'DPIA — Gegevensbescherming', item: 'Toegangsbeheer ingericht (wie mag data inzien/wijzigen)', verantwoordelijke: 'IT / Security Officer' },
  { id: 'd4', cat: 'DPIA — Gegevensbescherming', item: 'Gegevensversleuteling (encryptie at rest en in transit) geregeld', verantwoordelijke: 'IT' },
  { id: 'd5', cat: 'DPIA — Gegevensbescherming', item: 'DPIA-risicotabel ingevuld: inherent risico × kans = restrisico', verantwoordelijke: 'FG / PO' },
  { id: 'd6', cat: 'DPIA — Gegevensbescherming', item: 'Mitigerende maatregelen per risico gedefinieerd en gedocumenteerd', verantwoordelijke: 'FG / PO' },
  { id: 'd7', cat: 'DPIA — Gegevensbescherming', item: 'Verwerkersovereenkomst met leverancier afgesloten (AVG Art. 28)', verantwoordelijke: 'Inkoop / Juridische zaken' },
  { id: 'd8', cat: 'DPIA — Gegevensbescherming', item: 'Datalekprocedure geïntegreerd met AI-systeem (detectie + melding)', verantwoordelijke: 'FG / IT' },
  { id: 'd9', cat: 'DPIA — Gegevensbescherming', item: 'Register van verwerkingsactiviteiten (AVG Art. 30) bijgewerkt met AI-toepassing', verantwoordelijke: 'PO / FG' },

  // --- Technisch ---
  { id: 't1', cat: 'Technisch', item: 'Trainingsdata herleidbaar en gedocumenteerd (datasheet)', verantwoordelijke: 'Ontwikkelteam' },
  { id: 't2', cat: 'Technisch', item: 'Bias-test uitgevoerd op trainingsdata en output', verantwoordelijke: 'Data Scientist / AI Officer' },
  { id: 't3', cat: 'Technisch', item: 'Nauwkeurigheid (accuracy) van het systeem vastgesteld', verantwoordelijke: 'Ontwikkelteam' },
  { id: 't4', cat: 'Technisch', item: 'Robuustheid getest (foutieve input, randgevallen)', verantwoordelijke: 'Ontwikkelteam' },
  { id: 't5', cat: 'Technisch', item: 'Menselijk toezicht ingericht: HITL / HOTL / HOC (AI Act Art. 14)', verantwoordelijke: 'Onderwijsmanager' },
  { id: 't6', cat: 'Technisch', item: 'Logging en traceerbaarheid van besluiten ingericht (AI Act Art. 12)', verantwoordelijke: 'IT / Informatiemanager' },

  // --- Governance ---
  { id: 'g1', cat: 'Governance & Organisatie', item: 'AI Officer / verantwoordelijke aangewezen', verantwoordelijke: 'Directie' },
  { id: 'g2', cat: 'Governance & Organisatie', item: 'Medezeggenschapsraad geïnformeerd en geraadpleegd (WMS Art. 6.1)', verantwoordelijke: 'Directie' },
  { id: 'g3', cat: 'Governance & Organisatie', item: 'Ouders/verzorgers geïnformeerd over inzet AI-systeem', verantwoordelijke: 'Communicatie / PO' },
  { id: 'g4', cat: 'Governance & Organisatie', item: 'Klachtenprocedure voor AI-gerelateerde incidenten operationeel', verantwoordelijke: 'Kwaliteitszorg' },
  { id: 'g5', cat: 'Governance & Organisatie', item: 'SIVON-toetsingscommissie op de hoogte gesteld', verantwoordelijke: 'AI Officer' },
  { id: 'g6', cat: 'Governance & Organisatie', item: 'EU-databankregistratie (voor leverancier) uitgevoerd', verantwoordelijke: 'Kwaliteitsmanager' },
];

export default function FriaDpiaChecklist({ classification }) {
  if (classification !== 'hoog_risico') {
    return null;
  }

  const categories = [...new Set(FRIA_DPIA_ITEMS.map((it) => it.cat))];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-amber-500 pl-3 mb-4">
        FRIA / DPIA Checklist
      </h2>

      <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl mb-4 text-xs text-amber-800">
        <strong>Verplicht voor hoog-risico AI-systemen.</strong> Deze checklist bevat 27 controlepunten verspreid over
        de FRIA (Fundamental Rights Impact Assessment) en DPIA (Data Protection Impact Assessment).
        Elk punt moet zijn afgevinkt voordat het systeem in gebruik wordt genomen.
      </div>

      {categories.map((cat) => {
        const items = FRIA_DPIA_ITEMS.filter((it) => it.cat === cat);
        return (
          <div key={cat} className="mb-4">
            <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">{cat}</h3>
            <div className="space-y-1.5">
              {items.map((it) => (
                <div key={it.id} className="flex items-start space-x-2 p-2 bg-slate-50 rounded-lg border border-slate-100 text-xs hover:bg-slate-100 transition-colors">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded border-2 border-slate-300 bg-white shrink-0 mt-0.5 cursor-pointer">
                    <span className="text-[9px] text-slate-400">☐</span>
                  </span>
                  <div className="flex-1">
                    <span className="text-slate-700">{it.item}</span>
                    <br />
                    <span className="text-[10px] text-slate-400">Verantwoordelijke: {it.verantwoordelijke}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-4 p-3 bg-sky-50 border border-sky-200 rounded-xl text-xs text-sky-800">
        <strong>Tip voor de FG/PO:</strong> Plan een startoverleg met de AI Officer om de FRIA en DPIA
        parallel te doorlopen. Gebruik de SIVON-checklist 2026-003 als aanvullend kader.
      </div>
    </div>
  );
}
