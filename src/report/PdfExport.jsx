import React from 'react';
import { Document, Page, View, Text, StyleSheet, pdf } from '@react-pdf/renderer';
import { TEMPLATES, STEP_ANALYSIS } from './content/classificationTemplates';
import { obligations } from './content/obligationsData';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#1e293b',
  },
  header: {
    backgroundColor: '#2D5A87',
    padding: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSub: {
    color: '#cbd5e1',
    fontSize: 9,
    marginTop: 4,
  },
  headerBadge: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#2D5A87',
    paddingLeft: 8,
  },
  grid2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  field: {
    width: '48%',
    backgroundColor: '#f8fafc',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  fieldLabel: {
    fontSize: 7,
    color: '#64748b',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  fieldValue: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  findingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    fontSize: 9,
  },
  table: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  tableHeader: {
    backgroundColor: '#f1f5f9',
    fontWeight: 'bold',
    fontSize: 8,
    padding: 6,
  },
  tableCell: {
    padding: 6,
    fontSize: 8,
  },
  w40: { width: '40%' },
  w15: { width: '15%' },
  w30: { width: '30%' },
  w20: { width: '20%' },
  w25: { width: '25%' },
  w50: { width: '50%' },
  w33: { width: '33%' },
  w100: { width: '100%' },
  col6: { width: '48%' },
  col4: { width: '31%' },
  col12: { width: '100%' },
  spacing: { height: 8 },
  smallSpacing: { height: 4 },
  paragraph: { fontSize: 9, marginBottom: 6, lineHeight: 1.4 },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    fontSize: 7,
    color: '#94a3b8',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 6,
  },
  checklistItem: {
    flexDirection: 'row',
    padding: 4,
    fontSize: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1.5,
    borderColor: '#94a3b8',
    borderRadius: 2,
    marginRight: 6,
  },
  signoffBox: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
  },
  signoffLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    marginTop: 16,
    marginBottom: 4,
  },
  pageNumber: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    fontSize: 7,
    color: '#94a3b8',
  },
});

function CoverPagePDF({ ctx, classification }) {
  const bLabel =
    classification === 'verboden'
      ? 'Verboden'
      : classification === 'hoog_risico'
      ? 'Hoog risico'
      : classification === 'beperkt'
      ? 'Beperkt / Minimaal'
      : 'Geen AI';

  const bColor =
    classification === 'verboden'
      ? '#fee2e2'
      : classification === 'hoog_risico'
      ? '#fef3c7'
      : classification === 'beperkt'
      ? '#d1fae5'
      : '#f1f5f9';

  const bTextColor =
    classification === 'verboden'
      ? '#dc2626'
      : classification === 'hoog_risico'
      ? '#d97706'
      : classification === 'beperkt'
      ? '#059669'
      : '#64748b';

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Toetsingsrapport</Text>
        <Text style={styles.headerSub}>
          op basis van de AI Act (Verordening 2024/1689) en het SIVON Toetsingskader 2026
        </Text>
        <View style={[styles.headerBadge, { backgroundColor: bColor, color: bTextColor }]}>
          <Text>{bLabel}</Text>
        </View>
      </View>

      <View style={styles.grid2}>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Systeemnaam</Text>
          <Text style={styles.fieldValue}>{ctx.systemName || '—'}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Organisatie</Text>
          <Text style={styles.fieldValue}>{ctx.organisation || '—'}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Rapportdatum</Text>
          <Text style={styles.fieldValue}>{ctx.assessmentDate || '—'}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Versie</Text>
          <Text style={styles.fieldValue}>{ctx.version || '—'}</Text>
        </View>
      </View>

      <View style={{ marginTop: 10, padding: 8, backgroundColor: '#f8fafc', borderRadius: 4, borderWidth: 1, borderColor: '#e2e8f0' }}>
        {[
          ['Contactpersoon', ctx.contactPerson || '—'],
          ['E-mail', ctx.contactEmail || '—'],
          ['Rol', ctx.role === 'school' ? 'Instelling / Bestuur' : ctx.role === 'leverancier' ? 'Leverancier' : '—'],
          ['Rechtsgrond',
            classification === 'verboden' ? 'AI Act Art. 5' :
            classification === 'hoog_risico' ? 'AI Act Art. 6-7' :
            classification === 'beperkt' ? 'AI Act Art. 50' : 'N.v.t.'],
        ].map(([label, value], i) => (
          <View key={i} style={[styles.findingRow, { borderBottomWidth: i < 3 ? 1 : 0 }]}>
            <Text style={{ color: '#64748b' }}>{label}</Text>
            <Text style={{ fontWeight: 'bold' }}>{value}</Text>
          </View>
        ))}
      </View>

      <Text style={{ marginTop: 16, fontSize: 7, color: '#94a3b8', textAlign: 'center' }}>
        Dit rapport is automatisch gegenereerd op basis van het interactieve AI Toetsingskader.{'\n'}
        Het is een hulpmiddel voor compliance en governance en vervangt geen juridisch advies.
      </Text>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>
        AI Toetsingsrapport — {ctx.systemName || 'Systeem'} — {ctx.assessmentDate || ''} — v{ctx.version || '—'}
      </Text>
    </Page>
  );
}

function ExecutiveSummaryPDF({ classification, answers }) {
  const tpl = TEMPLATES[classification] || TEMPLATES.geen_ai;
  const isAISystem =
    answers.isMachine === 'ja' && answers.hasAutonomy === 'ja' && answers.hasInference === 'ja' && answers.generatesOutput === 'ja';
  const isForbidden =
    answers.emotionRecognition === 'ja' || answers.biometricCategorization === 'ja' || answers.socialScoring === 'ja' || answers.subliminalManipulation === 'ja';
  const fitsHighRisk =
    answers.admissionSystem === 'ja' || answers.evaluationSystem === 'ja' || answers.levelAdvancement === 'ja' || answers.proctoringSystem === 'ja';
  const isHighRisk = fitsHighRisk && !answers.isAdministrativeException;

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Management samenvatting</Text>
      <Text style={styles.paragraph}>{tpl.samenvatting}</Text>

      <View style={styles.table}>
        {[
          ['AI-systeem (Art. 3)', isAISystem ? 'Ja' : 'Nee', isAISystem],
          ['Verboden praktijk (Art. 5)', isForbidden ? 'Ja' : 'Nee', !isForbidden],
          ['Hoog risico (Art. 6-7)', isHighRisk ? 'Ja' : 'Nee', !isHighRisk],
          ['Menselijk toezicht (Art. 14)', answers.humanOversight === 'ja' ? 'Ja' : 'Nee', answers.humanOversight === 'ja'],
        ].map(([label, value, ok], i) => (
          <View key={i} style={[styles.tableRow, { backgroundColor: i % 2 === 0 ? '#f8fafc' : '#ffffff' }]}>
            <Text style={[styles.tableCell, styles.w50]}>{label}</Text>
            <Text style={[styles.tableCell, styles.w25, { color: ok ? '#059669' : '#dc2626', fontWeight: 'bold' }]}>{value}</Text>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 8 }}>
        <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 4 }}>Top-3 prioritaire acties</Text>
        {tpl.topActies.slice(0, 3).map((a, i) => (
          <View key={i} style={{ flexDirection: 'row', marginBottom: 3 }}>
            <Text style={{ fontSize: 8, fontWeight: 'bold', color: '#2D5A87', marginRight: 4, width: 12 }}>{i + 1}.</Text>
            <Text style={{ fontSize: 9 }}>{a}</Text>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 8, padding: 8, backgroundColor: '#f0f9ff', borderRadius: 4, borderWidth: 1, borderColor: '#bae6fd' }}>
        <Text style={{ fontSize: 8, fontWeight: 'bold', color: '#0369a1' }}>Volgende stap:</Text>
        <Text style={{ fontSize: 8, color: '#0369a1' }}>{tpl.volgendeStap}</Text>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>AI Toetsingsrapport — Management samenvatting</Text>
    </Page>
  );
}

function ClassificationAnalysisPDF({ answers, classification }) {
  const relevantSteps = [
    'isMachine', 'hasAutonomy', 'hasInference', 'generatesOutput',
    ...(answers.emotionRecognition ? ['emotionRecognition'] : []),
    ...(answers.evaluationSystem ? ['evaluationSystem'] : []),
    'humanOversight', 'biasTested',
  ];

  const bLabel =
    classification === 'verboden' ? 'Verboden' :
    classification === 'hoog_risico' ? 'Hoog risico' :
    classification === 'beperkt' ? 'Beperkt / Minimaal' : 'Geen AI';

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Classificatieanalyse</Text>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.w40]}>Vraag</Text>
          <Text style={[styles.tableCell, styles.w15, { textAlign: 'center' }]}>Antw.</Text>
          <Text style={[styles.tableCell, styles.w30]}>Juridische betekenis</Text>
          <Text style={[styles.tableCell, styles.w15]}>Bron</Text>
        </View>
        {relevantSteps.map((key) => {
          const step = STEP_ANALYSIS[key];
          if (!step) return null;
          const answer = answers[key];
          const isYes = answer === 'ja';
          return (
            <View key={key} style={[styles.tableRow, { backgroundColor: '#f8fafc' }]}>
              <Text style={[styles.tableCell, styles.w40]}>{step.vraag}</Text>
              <Text style={[styles.tableCell, styles.w15, { textAlign: 'center', fontWeight: 'bold', color: isYes ? '#059669' : '#64748b' }]}>
                {isYes ? 'Ja' : answer === 'nee' ? 'Nee' : '—'}
              </Text>
              <Text style={[styles.tableCell, styles.w30, { fontSize: 7 }]}>
                {isYes ? step.toelichtingJa : 'Niet van toepassing'}
              </Text>
              <Text style={[styles.tableCell, styles.w15, { fontSize: 7, color: '#64748b' }]}>{step.bron}</Text>
            </View>
          );
        })}
      </View>

      <View style={{ marginTop: 10, padding: 8, backgroundColor: '#f8fafc', borderRadius: 4, borderWidth: 1, borderColor: '#e2e8f0', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={{ fontSize: 7, color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold' }}>Eindclassificatie</Text>
          <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{bLabel}</Text>
        </View>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>AI Toetsingsrapport — Classificatieanalyse</Text>
    </Page>
  );
}

function ObligationsOverviewPDF({ classification, role }) {
  const filtered = obligations.filter((o) => o.risico === classification && o.voor.includes(role));

  const priorityColor = (p) => {
    if (p === 'Hoogst') return '#fecaca';
    if (p === 'Hoog') return '#fde68a';
    if (p === 'Midden') return '#bae6fd';
    return '#f1f5f9';
  };

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Verplichtingenoverzicht</Text>
      <Text style={{ fontSize: 8, color: '#64748b', marginBottom: 6 }}>
        {filtered.length} verplichting{filtered.length !== 1 ? 'en' : ''} van toepassing.
      </Text>

      {filtered.length === 0 ? (
        <Text style={{ fontSize: 9, color: '#64748b' }}>Geen specifieke verplichtingen voor deze situatie.</Text>
      ) : (
        filtered.map((o) => (
          <View key={o.id} style={{ marginBottom: 4, borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 4 }}>
            <View style={{ flexDirection: 'row', padding: 6 }}>
              <View style={{ width: 3, backgroundColor: '#2D5A87' }} />
              <View style={{ flex: 1, paddingLeft: 8 }}>
                <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{o.verplichting}</Text>
                <View style={{ flexDirection: 'row', gap: 8, marginTop: 2 }}>
                  <Text style={{ fontSize: 7, color: '#64748b' }}>{o.basis}</Text>
                  <Text style={{ fontSize: 7, color: '#64748b' }}>{o.artikel}</Text>
                  <Text style={{ fontSize: 7, color: '#64748b' }}>Deadline: {o.deadline}</Text>
                  <Text style={{ fontSize: 7, fontWeight: 'bold' }}>{o.verantwoordelijke}</Text>
                </View>
              </View>
              <View style={{ backgroundColor: priorityColor(o.prioriteit), paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>
                <Text style={{ fontSize: 7, fontWeight: 'bold' }}>{o.prioriteit}</Text>
              </View>
            </View>
          </View>
        ))
      )}

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>AI Toetsingsrapport — Verplichtingenoverzicht</Text>
    </Page>
  );
}

function ComplianceRoadmapPDF({ classification }) {
  const tpl = TEMPLATES[classification] || TEMPLATES.geen_ai;

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Compliance roadmap</Text>
      <Text style={{ fontSize: 8, color: '#64748b', marginBottom: 8 }}>
        Gefaseerd stappenplan — {tpl.titel.toLowerCase()}
      </Text>

      {tpl.roadmap.map((fase, fi) => (
        <View key={fi} style={{ marginBottom: 8, borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 4 }}>
          <View style={{
            padding: 6,
            backgroundColor: fi === 0 ? '#fecaca' : fi === 1 ? '#fde68a' : fi === 2 ? '#bbf7d0' : '#f1f5f9',
            borderBottomWidth: 1,
            borderBottomColor: '#e2e8f0',
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
          }}>
            <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{fase.fase}</Text>
          </View>
          <View style={{ padding: 6 }}>
            {fase.acties.map((actie, ai) => (
              <View key={ai} style={{ flexDirection: 'row', marginBottom: 2 }}>
                <Text style={{ fontSize: 8, color: '#64748b', marginRight: 4, width: 10 }}>{ai + 1}.</Text>
                <Text style={{ fontSize: 8 }}>{actie}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>AI Toetsingsrapport — Compliance roadmap</Text>
    </Page>
  );
}

function FriaDpiaChecklistPDF({ classification }) {
  if (classification !== 'hoog_risico') return null;

  const FRIA_DPIA_ITEMS = [
    { cat: 'Algemeen', items: [
      'AI-systeem en doel beschreven (naam, versie, beoogde functie)',
      'Gebruikscontext in kaart gebracht (waar, door wie, wanneer)',
      'Betrokkenen geïdentificeerd: leerlingen, docenten, ouders',
      'Rechtmatige grondslag verwerking vastgesteld (AVG Art. 6)',
      'Doelbinding getoetst',
    ]},
    { cat: 'FRIA — Grondrechten', items: [
      'Grondrechtencheck uitgevoerd: non-discriminatie, privacy, autonomie',
      'Risico op bias in kaart gebracht (leeftijd, geslacht, etniciteit, beperking)',
      'Impact op autonomie van de docent beoordeeld',
      'Impact op rechten van minderjarigen (IVRK Art. 3, 12, 16)',
      'Transparantie naar betrokkenen geborgd (AI Act Art. 50)',
      'Recht op uitleg bij geautomatiseerde besluiten',
      'Mogelijkheid tot bezwaar/beroep geregeld',
    ]},
    { cat: 'DPIA — Gegevensbescherming', items: [
      'Dataminimalisatie toegepast',
      'Bewaartermijnen vastgesteld en geïmplementeerd',
      'Toegangsbeheer ingericht',
      'Gegevensversleuteling (encryptie) geregeld',
      'DPIA-risicotabel ingevuld',
      'Mitigerende maatregelen per risico gedefinieerd',
      'Verwerkersovereenkomst met leverancier (AVG Art. 28)',
      'Datalekprocedure geïntegreerd met AI-systeem',
      'Register van verwerkingsactiviteiten bijgewerkt (AVG Art. 30)',
    ]},
    { cat: 'Technisch', items: [
      'Trainingsdata herleidbaar en gedocumenteerd (datasheet)',
      'Bias-test uitgevoerd op trainingsdata en output',
      'Nauwkeurigheid van het systeem vastgesteld',
      'Robuustheid getest',
      'Menselijk toezicht ingericht (HITL/HOTL/HOC)',
      'Logging en traceerbaarheid van besluiten ingericht',
    ]},
    { cat: 'Governance', items: [
      'AI Officer / verantwoordelijke aangewezen',
      'Medezeggenschapsraad geïnformeerd en geraadpleegd',
      'Ouders/verzorgers geïnformeerd over inzet AI-systeem',
      'Klachtenprocedure voor AI-gerelateerde incidenten',
      'SIVON-toetsingscommissie op de hoogte gesteld',
      'EU-databankregistratie uitgevoerd',
    ]},
  ];

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>FRIA / DPIA Checklist</Text>
      <Text style={{ fontSize: 8, color: '#92400e', marginBottom: 8 }}>
        Verplicht voor hoog-risico AI-systemen. Elk punt moet zijn afgevinkt voor ingebruikname.
      </Text>

      {FRIA_DPIA_ITEMS.map((cat, ci) => (
        <View key={ci} style={{ marginBottom: 8 }}>
          <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#475569', marginBottom: 3 }}>{cat.cat}</Text>
          {cat.items.map((item, ii) => (
            <View key={ii} style={styles.checklistItem}>
              <View style={styles.checkbox} />
              <Text style={{ flex: 1, fontSize: 8 }}>{item}</Text>
            </View>
          ))}
        </View>
      ))}

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>AI Toetsingsrapport — FRIA / DPIA Checklist</Text>
    </Page>
  );
}

function GovernancePDF({ answers }) {
  const models = [
    { name: 'Human-in-the-loop (HITL)', desc: 'Een mens keurt elke AI-output goed.' },
    { name: 'Human-on-the-loop (HOTL)', desc: 'Een mens monitort en grijpt in bij afwijkingen.' },
    { name: 'Human-in-command (HOC)', desc: 'Strategische controle over inzet/uitschakeling.' },
  ];

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Governance & toezicht</Text>

      <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 4 }}>Menselijk toezichtmodellen</Text>
      {models.map((m, i) => (
        <View key={i} style={{ marginBottom: 4, padding: 6, backgroundColor: '#f8fafc', borderRadius: 4, borderWidth: 1, borderColor: '#e2e8f0' }}>
          <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{m.name}</Text>
          <Text style={{ fontSize: 8, color: '#64748b' }}>{m.desc}</Text>
        </View>
      ))}

      <View style={{ marginTop: 8, padding: 6, backgroundColor: '#f0f9ff', borderRadius: 4, borderWidth: 1, borderColor: '#bae6fd' }}>
        <Text style={{ fontSize: 8, fontWeight: 'bold', color: '#0369a1' }}>Status menselijk toezicht:</Text>
        <Text style={{ fontSize: 8, color: '#0369a1' }}>
          {answers.humanOversight === 'ja'
            ? 'Ingesteld — controleer of het juiste model is gekozen.'
            : 'Niet gedetecteerd — dit is een kritiek aandachtspunt.'}
        </Text>
      </View>

      <View style={{ marginTop: 8 }}>
        <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 4 }}>Rolverdeling</Text>
        {[
          ['AI Officer', 'Eindverantwoordelijk voor AI-governance'],
          ['FG', 'Toezicht op DPIA, AVG-compliance'],
          ['Privacy Officer (PO)', 'Dagelijkse uitvoering privacybeleid'],
          ['Data Owner', 'Datakwaliteit en datagovernance'],
          ['Business Owner', 'Gebruikscontext en functionele werking'],
          ['CISO', 'Informatiebeveiliging en cybersecurity'],
        ].map(([rol, verantw], i) => (
          <View key={i} style={[styles.tableRow, { backgroundColor: i % 2 === 0 ? '#f8fafc' : '#ffffff' }]}>
            <Text style={[styles.tableCell, styles.w25, { fontWeight: 'bold' }]}>{rol}</Text>
            <Text style={[styles.tableCell, styles.w75, { fontSize: 8 }]}>{verantw}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>AI Toetsingsrapport — Governance & toezicht</Text>
    </Page>
  );
}

function TechnicalDocsPDF({ classification, role }) {
  const DOCS = [
    { doc: 'Modelkaart (doel, werking, beperkingen)', req: 'HR' },
    { doc: 'Datasheet (herkomst, samenstelling trainingsdata)', req: 'HR' },
    { doc: 'Risicobeheerarchief', req: 'HR' },
    { doc: 'Testresultaten (nauwkeurigheid, robuustheid, bias)', req: 'HR' },
    { doc: 'Logboek van systeemactiviteiten', req: 'HR' },
    { doc: 'Gebruikershandleiding voor docenten', req: 'HR' },
    { doc: 'Conformiteitsverklaring (CE-markering)', req: 'HR' },
    { doc: 'Beschrijving menselijk toezicht', req: 'HR' },
    { doc: 'DPIA-document', req: 'HR' },
    { doc: 'FRIA-document', req: 'HR' },
    { doc: 'Verwerkersovereenkomst', req: 'HR' },
    { doc: 'Systeembeschrijving en architectuur', req: 'BR' },
    { doc: 'Basis functionele documentatie', req: 'BR' },
    { doc: 'Transparantieverklaring', req: 'BR' },
    { doc: 'IT-beveiligingsbaseline', req: '—' },
  ];

  const filtered = DOCS.filter((d) => {
    if (classification === 'verboden') return d.req === 'HR' || d.req === 'BR';
    if (d.req === 'HR') return classification === 'hoog_risico';
    if (d.req === 'BR') return classification === 'beperkt' || classification === 'hoog_risico';
    return true;
  });

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Technische documentatie</Text>
      <Text style={{ fontSize: 8, color: '#64748b', marginBottom: 6 }}>
        Checklist — status aan te vinken bij opstellen.
      </Text>

      {filtered.map((d, i) => (
        <View key={i} style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={{ flex: 1, fontSize: 8 }}>{d.doc}</Text>
          <Text style={{ fontSize: 7, color: d.req === 'HR' ? '#d97706' : d.req === 'BR' ? '#059669' : '#64748b', fontWeight: 'bold' }}>
            {d.req === 'HR' ? 'Hoog risico' : d.req === 'BR' ? 'Beperkt' : '—'}
          </Text>
        </View>
      ))}

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>AI Toetsingsrapport — Technische documentatie</Text>
    </Page>
  );
}

function MonitoringSectionPDF() {
  const KPIS = [
    ['Aantal overgenomen AI-adviezen door docent', 'Effectiviteit', 'Maandelijks'],
    ['Foutmarge / afwijkingspercentage', 'Nauwkeurigheid', 'Maandelijks'],
    ['Aantal bias-gerelateerde klachten', 'Bias', 'Per kwartaal'],
    ['Aantal ingrijpmomenten HITL/HOTL', 'Toezicht', 'Per kwartaal'],
    ['Aantal datalekken / beveiligingsincidenten', 'Security', 'Direct melden'],
    ['Naleving bewaartermijnen', 'Compliance', 'Halfjaarlijks'],
  ];

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Monitoring & evaluatie</Text>

      <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 4 }}>KPI's voor AI-monitoring</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.w50]}>KPI</Text>
          <Text style={[styles.tableCell, styles.w25]}>Type</Text>
          <Text style={[styles.tableCell, styles.w25]}>Frequentie</Text>
        </View>
        {KPIS.map((k, i) => (
          <View key={i} style={[styles.tableRow, { backgroundColor: i % 2 === 0 ? '#f8fafc' : '#ffffff' }]}>
            <Text style={[styles.tableCell, styles.w50]}>{k[0]}</Text>
            <Text style={[styles.tableCell, styles.w25, { fontSize: 7 }]}>{k[1]}</Text>
            <Text style={[styles.tableCell, styles.w25, { fontSize: 7 }]}>{k[2]}</Text>
          </View>
        ))}
      </View>

      <Text style={{ fontSize: 9, fontWeight: 'bold', marginTop: 8, marginBottom: 4 }}>Herzieningscyclus</Text>
      {[
        ['Standaard — Halfjaarlijks', 'Volledige herbeoordeling, KPI-analyse, update documentatie'],
        ['Bij wijziging — Ad hoc', 'Herbeoordeling bij modelupdate, incident, of trigger'],
        ['Volledige audit — Jaarlijks', 'Interne/externe audit, inclusief FRIA/DPIA-update'],
      ].map(([fase, actie], i) => (
        <View key={i} style={{ marginBottom: 3, padding: 5, backgroundColor: i === 0 ? '#f0fdf4' : i === 1 ? '#fefce8' : '#f8fafc', borderRadius: 4, borderWidth: 1, borderColor: '#e2e8f0' }}>
          <Text style={{ fontSize: 8, fontWeight: 'bold' }}>{fase}</Text>
          <Text style={{ fontSize: 8, color: '#64748b' }}>{actie}</Text>
        </View>
      ))}

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>AI Toetsingsrapport — Monitoring & evaluatie</Text>
    </Page>
  );
}

function SignOffPDF({ ctx, classification }) {
  const bLabel =
    classification === 'verboden' ? 'Verboden' :
    classification === 'hoog_risico' ? 'Hoog risico' :
    classification === 'beperkt' ? 'Beperkt/minimaal' : 'Geen AI';

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Ondertekening & goedkeuring</Text>
      <Text style={{ fontSize: 8, color: '#64748b', marginBottom: 10 }}>
        Dit rapport dient te worden goedgekeurd door de volgende functionarissen.
      </Text>

      {[
        'AI Officer — Eindverantwoordelijk voor naleving AI Act',
        'Functionaris Gegevensbescherming (FG) — Toezicht op DPIA',
        'Privacy Officer (PO) — Uitvoering privacybeleid',
        'Directie / College van Bestuur — Bestuurlijke eindverantwoordelijkheid',
      ].map((functie, i) => (
        <View key={i} style={styles.signoffBox}>
          <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{functie}</Text>
          <View style={{ flexDirection: 'row', gap: 16, marginTop: 8 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 7, color: '#64748b' }}>Naam</Text>
              <View style={styles.signoffLine} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 7, color: '#64748b' }}>Datum</Text>
              <View style={styles.signoffLine} />
            </View>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ fontSize: 7, color: '#64748b' }}>Handtekening</Text>
            <View style={styles.signoffLine} />
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ fontSize: 7, color: '#64748b' }}>Opmerkingen</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#e2e8f0', borderStyle: 'dashed', marginTop: 12 }} />
          </View>
        </View>
      ))}

      <View style={{ marginTop: 8, padding: 6, backgroundColor: '#f8fafc', borderRadius: 4, borderWidth: 1, borderColor: '#e2e8f0' }}>
        <Text style={{ fontSize: 7, color: '#64748b' }}>
          Systeem: {ctx.systemName || '—'} | Organisatie: {ctx.organisation || '—'} | Classificatie: {bLabel} | Versie: {ctx.version || '—'} | Datum: {ctx.assessmentDate || '—'}
        </Text>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      <Text style={styles.footer}>AI Toetsingsrapport — Ondertekening</Text>
    </Page>
  );
}

// Main PDF Document
function ReportDocument({ ctx, wizardAnswers, role, classification }) {
  return (
    <Document>
      <CoverPagePDF ctx={ctx} classification={classification} />
      <ExecutiveSummaryPDF classification={classification} answers={wizardAnswers} />
      <ClassificationAnalysisPDF answers={wizardAnswers} classification={classification} />
      <ObligationsOverviewPDF classification={classification} role={role} />
      <ComplianceRoadmapPDF classification={classification} />
      {classification === 'hoog_risico' && <FriaDpiaChecklistPDF classification={classification} />}
      <GovernancePDF answers={wizardAnswers} />
      <TechnicalDocsPDF classification={classification} role={role} />
      <MonitoringSectionPDF />
      <SignOffPDF ctx={ctx} classification={classification} />
    </Document>
  );
}

export default function PdfExport({ ctx, wizardAnswers, role, classification }) {
  const handleDownload = async () => {
    const blob = await pdf(<ReportDocument
      ctx={ctx}
      wizardAnswers={wizardAnswers}
      role={role}
      classification={classification}
    />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const filename = `Toetsingsrapport_${ctx.systemName || 'systeem'}_${ctx.assessmentDate || 'datum'}_v${ctx.version || '1'}.pdf`;
    link.download = filename.replace(/[^a-zA-Z0-9_\-\.]/g, '_');
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors shadow-md flex items-center space-x-2"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span>Download PDF</span>
    </button>
  );
}
