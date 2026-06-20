import React from 'react';

const GLOSSARY = [
  { term: 'AI-systeem', def: 'Een machinegebaseerd systeem dat met autonomie opereert en output genereert zoals voorspellingen, aanbevelingen of beslissingen (AI Act Art. 3(1)).' },
  { term: 'Inferentie', def: 'Het proces waarbij een AI-systeem conclusies trekt uit invoerdata, bijvoorbeeld door patronen te herkennen of voorspellingen te doen.' },
  { term: 'HITL (Human-in-the-Loop)', def: 'Een mens keurt elke output van het AI-systeem goed voordat deze wordt gebruikt of doorgegeven.' },
  { term: 'HOTL (Human-on-the-Loop)', def: 'Een mens monitort het systeem continu en kan ingrijpen wanneer nodig, maar keurt niet elke output vooraf goed.' },
  { term: 'HOC (Human-in-Command)', def: 'Een mens behoudt strategische controle en beslist over de inzet, het stopzetten of wijzigen van het AI-systeem.' },
  { term: 'FRIA', def: 'Fundamental Rights Impact Assessment — een beoordeling van de impact van een AI-systeem op grondrechten, verplicht voor hoog-risico systemen (AI Act Art. 27).' },
  { term: 'DPIA', def: 'Data Protection Impact Assessment — een gegevensbeschermingseffectbeoordeling, verplicht bij verwerkingen met hoog privacyrisico (AVG Art. 35).' },
  { term: 'Bias', def: 'Systematische vertekening in AI-output die kan leiden tot ongelijke of onrechtvaardige behandeling van bepaalde groepen.' },
  { term: 'CE-markering', def: 'Een markering waarmee de fabrikant verklaart dat het product voldoet aan alle toepasselijke EU-vereisten, waaronder de AI Act (voor hoog-risico systemen).' },
  { term: 'Conformiteitsbeoordeling', def: 'Het proces waarmee wordt aangetoond dat een AI-systeem voldoet aan de eisen van de AI Act, inclusief technische documentatie en risicobeheer.' },
  { term: 'SIVON', def: 'Samenwerkingsverband voor Informatiebeleid en IV-dienstverlening in het Onderwijs. Uitgever van het Toetsingskader AI 2026.' },
  { term: 'AP (Autoriteit Persoonsgegevens)', def: 'De Nederlandse toezichthouder voor gegevensbescherming. Ziet toe op naleving van de AVG en adviseert over AI en privacy.' },
  { term: 'LLM (Large Language Model)', def: 'Een AI-model getraind op grote hoeveelheden tekst, dat menselijke taal kan genereren en begrijpen (bv. GPT, Llama).' },
  { term: 'Machine Learning', def: 'Een subset van AI waarbij systemen leren van data zonder expliciet te worden geprogrammeerd voor elke taak.' },
  { term: 'Synthetische content', def: 'Door AI gegenereerde inhoud (tekst, beeld, video, audio) die als zodanig herkenbaar moet zijn onder AI Act Art. 50(2).' },
  { term: 'Regulier onderwijs', def: 'Onderwijs dat wordt bekostigd uit publieke middelen, waaronder het funderend onderwijs (po, vo, (v)so) en het mbo in Nederland.' },
];

const LAWS = [
  {
    naam: 'AI Act (Verordening 2024/1689)',
    beschrijving: 'Europese verordening voor kunstmatige intelligentie. Classificeert AI-systemen op risico (verboden, hoog, beperkt, minimaal) met bijbehorende verplichtingen.',
    kernartikelen: 'Art. 3 (definities), Art. 5 (verboden), Art. 6-7 (hoog risico), Art. 9 (risicobeheer), Art. 10 (datakwaliteit), Art. 11 (technische doc), Art. 12 (logging), Art. 13 (transparantie), Art. 14 (menselijk toezicht), Art. 50 (transparantieplicht)',
  },
  {
    naam: 'AVG (Verordening 2016/679)',
    beschrijving: 'Algemene Verordening Gegevensbescherming. Reguleert de verwerking van persoonsgegevens, onverminderd van toepassing naast de AI Act.',
    kernartikelen: 'Art. 5 (beginselen), Art. 6 (rechtmatigheid), Art. 9 (bijzondere persoonsgegevens), Art. 13-14 (informatieplicht), Art. 22 (geautomatiseerde besluiten), Art. 28 (verwerker), Art. 30 (register), Art. 32 (beveiliging), Art. 35 (DPIA)',
  },
  {
    naam: 'SIVON Toetsingskader AI 2026',
    beschrijving: 'Toetsingskader van SIVON voor het verantwoord inzetten van AI in het funderend onderwijs. Bevat praktische richtlijnen voor scholen en samenwerkingsverbanden.',
    kernartikelen: '2026-001 (laag risico), 2026-003 (hoog risico), 2026-004 (inkoop), 2026-005 (datagovernance)',
  },
  {
    naam: 'AP Richtsnoeren Algoritmes & Onderwijs (2025)',
    beschrijving: 'Richtsnoeren van de Autoriteit Persoonsgegevens over de inzet van algoritmes en AI in het onderwijs. Bevat concrete voorbeelden en aanbevelingen.',
    kernartikelen: 'Richtsnoer 1 (transparantie), Richtsnoer 2 (toetsing), Richtsnoer 3 (menselijke tussenkomst)',
  },
  {
    naam: 'IVRK (Internationaal Verdrag voor de Rechten van het Kind)',
    beschrijving: 'Verenigde Naties-verdrag dat de rechten van kinderen beschermt. Relevant bij AI in onderwijs vanwege recht op onderwijs (Art. 28), privacy (Art. 16) en participatie (Art. 12).',
    kernartikelen: 'Art. 3 (belang van het kind), Art. 12 (recht op gehoord worden), Art. 16 (privacy), Art. 28 (recht op onderwijs)',
  },
  {
    naam: 'IMRA / IMDA',
    beschrijving: 'Informatiebeveiliging Meerjaren Relatie Afspraken / Informatiebeveiliging Meerjaren Doelstellingen Akkoord voor de onderwijssector. Basisnormen voor informatiebeveiliging.',
    kernartikelen: 'IMRA 2025-2027, IMDA baseline',
  },
];

const RESOURCES = [
  { naam: 'SIVON — Toetsingskader AI', url: 'https://www.sivon.nl/ai-toetsingskader' },
  { naam: 'Autoriteit Persoonsgegevens — AI & Algoritmes', url: 'https://autoriteitpersoonsgegevens.nl/ai' },
  { naam: 'Kennisnet — Ethiekkompas AI', url: 'https://www.kennisnet.nl/ethiekkompas' },
  { naam: 'EU AI Act — Volledige tekst (EUR-Lex)', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689' },
  { naam: 'ECCP — AI Compliance & Guidance', url: 'https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence' },
  { naam: 'AP — Richtsnoeren Algoritmes & Onderwijs', url: 'https://autoriteitpersoonsgegevens.nl/themas/algoritmes' },
];

export default function Appendices() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-6">
        Bijlagen
      </h2>

      <div className="space-y-8">
        {/* Glossarium */}
        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3">A. Glossarium</h3>
          <div className="space-y-2">
            {GLOSSARY.map((g, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs p-2 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-bold text-slate-800 whitespace-nowrap min-w-[120px]">{g.term}</span>
                <span className="text-slate-600">{g.def}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wetgeving */}
        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3">B. Overzicht wet- en regelgeving</h3>
          <div className="space-y-3">
            {LAWS.map((law, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-3">
                <h4 className="font-semibold text-sm text-slate-800">{law.naam}</h4>
                <p className="text-xs text-slate-600 mt-1">{law.beschrijving}</p>
                <p className="text-xs text-slate-400 mt-1">
                  <strong>Kernartikelen:</strong> {law.kernartikelen}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bronnen */}
        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3">C. Nuttige bronnen</h3>
          <div className="space-y-1.5">
            {RESOURCES.map((r, i) => (
              <div key={i} className="flex items-center space-x-2 text-xs p-2 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-slate-400">🔗</span>
                <span className="font-medium text-slate-700">{r.naam}</span>
                <span className="text-slate-400 ml-auto">{r.url}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
