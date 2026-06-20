import React from 'react';

const OVERSIGHT_MODELS = [
  {
    model: 'Human-in-the-loop (HITL)',
    beschrijving: 'Een mens keurt elke AI-output goed voordat deze wordt gebruikt. Geschikt voor beoordelings- en evaluatiesystemen.',
    wanneer: 'Bij hoog-risico systemen en bij beoordeling van leerresultaten',
  },
  {
    model: 'Human-on-the-loop (HOTL)',
    beschrijving: 'Een mens monitort het systeem en kan ingrijpen bij afwijkend gedrag. Geschikt voor realtime systemen.',
    wanneer: 'Bij proctoring en adaptieve leersystemen',
  },
  {
    model: 'Human-in-command (HOC)',
    beschrijving: 'Een mens heeft strategische controle en beslist over inzet en uitschakeling. Geschikt voor alle risiconiveaus.',
    wanneer: 'Altijd van toepassing als overkoepelend model',
  },
];

const ROLES = [
  {
    rol: 'AI Officer',
    verantwoordelijk: 'Eindverantwoordelijk voor AI-governance, compliance-coördinatie, rapportage aan directie',
    ideaal: 'Kwaliteitsmanager, informatiemanager of senior beleidsmedewerker',
  },
  {
    rol: 'Functionaris Gegevensbescherming (FG)',
    verantwoordelijk: 'Toezicht op DPIA, AVG-compliance, advisering over gegevensbescherming',
    ideaal: 'Extern benoemd of intern specialist (verplicht voor overheidsinstellingen)',
  },
  {
    rol: 'Privacy Officer (PO)',
    verantwoordelijk: 'Dagelijkse uitvoering privacybeleid, register van verwerkingen, betrokkenenrechten',
    ideaal: 'Beleidsmedewerker met kennis van AVG',
  },
  {
    rol: 'Data Owner',
    verantwoordelijk: 'Datakwaliteit, datagovernance, herkomst en bewaartermijnen',
    ideaal: 'Manager informatievoorziening of afdelingshoofd',
  },
  {
    rol: 'Business Owner',
    verantwoordelijk: 'Gebruikscontext, functionele werking, gebruikersondersteuning',
    ideaal: 'Onderwijsmanager of teamleider',
  },
  {
    rol: 'Security Officer (CISO)',
    verantwoordelijk: 'Informatiebeveiliging, logging, incidentresponse, cybersecurity',
    ideaal: 'CISO of IT-manager',
  },
];

export default function GovernanceSection({ answers }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-4">
        Governance & toezicht
      </h2>

      <div className="mb-6">
        <h3 className="text-sm font-bold text-slate-700 mb-3">Menselijk toezichtmodellen</h3>
        <div className="space-y-3">
          {OVERSIGHT_MODELS.map((m, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-3">
              <div className="flex items-center space-x-2 mb-1">
                <span className={`inline-block w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-amber-500' : 'bg-[#2D5A87]'}`} />
                <span className="font-semibold text-sm text-slate-800">{m.model}</span>
              </div>
              <p className="text-xs text-slate-600 ml-4">{m.beschrijving}</p>
              <p className="text-xs text-slate-400 ml-4 mt-0.5">
                <strong>Geschikt voor:</strong> {m.wanneer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
          <strong>Huidige status:</strong>{' '}
          {answers.humanOversight === 'ja'
            ? 'Er is menselijk toezicht ingesteld. Controleer of het juiste model (HITL/HOTL/HOC) is gekozen voor het specifieke systeem.'
            : 'Geen menselijk toezicht gedetecteerd. Dit is een kritiek aandachtspunt — implementeer HITL of HOTL voor gebruik.'}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-700 mb-3">Rolverdeling & verantwoordelijkheden</h3>
        <p className="text-xs text-slate-500 mb-3">
          Voor een adequate AI-governance worden de volgende rollen aanbevolen binnen de organisatie.
          Bepaal per rol wie deze functie vervult.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left p-2 font-semibold text-slate-600">Rol</th>
                <th className="text-left p-2 font-semibold text-slate-600">Verantwoordelijkheden</th>
                <th className="text-left p-2 font-semibold text-slate-600">Ingvuld door</th>
              </tr>
            </thead>
            <tbody>
              {ROLES.map((r, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="p-2 font-medium text-slate-800">{r.rol}</td>
                  <td className="p-2 text-slate-600">{r.verantwoordelijk}</td>
                  <td className="p-2 text-slate-500">{r.ideaal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 p-3 bg-sky-50 border border-sky-200 rounded-xl text-xs text-sky-800">
        <strong>Escalatielijn bij AI-incidenten:</strong><br />
        1. Gebruiker meldt bij Business Owner → 2. BO beoordeelt en escaleert naar AI Officer →
        3. AI Officer schakelt FG/PO in bij privacy-impact → 4. Directie bij organisatiebrede impact →
        5. Externe melding (AP, SIVON) indien wettelijk vereist.
      </div>
    </div>
  );
}
