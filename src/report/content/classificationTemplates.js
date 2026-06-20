export function getClassification(answers) {
  const isAISystem =
    answers.isMachine === 'ja' &&
    answers.hasAutonomy === 'ja' &&
    answers.hasInference === 'ja' &&
    answers.generatesOutput === 'ja';
  const isForbidden =
    answers.emotionRecognition === 'ja' ||
    answers.biometricCategorization === 'ja' ||
    answers.socialScoring === 'ja' ||
    answers.subliminalManipulation === 'ja';
  const fitsHighRiskCategory =
    answers.admissionSystem === 'ja' ||
    answers.evaluationSystem === 'ja' ||
    answers.levelAdvancement === 'ja' ||
    answers.proctoringSystem === 'ja';
  const isHighRisk = fitsHighRiskCategory && !answers.isAdministrativeException;

  if (!isAISystem) return 'geen_ai';
  if (isForbidden) return 'verboden';
  if (isHighRisk) return 'hoog_risico';
  return 'beperkt';
}

export const TEMPLATES = {
  verboden: {
    titel: 'Verboden AI-praktijk',
    kleur: 'rose',
    samenvatting:
      'Dit systeem valt onder een verboden AI-praktijk zoals gedefinieerd in Art. 5 van de AI Act. Het mag niet worden gebruikt of verder worden ontwikkeld binnen de huidige scope. Onmiddellijke stopzetting is vereist.',
    kernBevindingen: [
      'Het systeem maakt gebruik van een of meer verboden technieken (Art. 5 AI Act)',
      'Gebruik leidt tot potentieel hoge boetes (tot 7% wereldwijde jaaromzet of €35M)',
      'Verboden praktijken in onderwijs gelden onverkort, ook voor minderjarigen',
      'Geen enkele uitzondering of mitigatie is mogelijk voor deze categorie',
    ],
    topActies: [
      'STOP onmiddellijk het gebruik van dit systeem',
      'Voer een juridische second opinion uit over de verboden praktijk',
      'Informeer het College van Bestuur en de FG',
      'Documenteer de stopzetting voor het compliance-dossier',
    ],
    volgendeStap:
      'Neem contact op met een juridisch adviseur gespecialiseerd in AI-recht voor beoordeling van alternatieven.',
    roadmap: [
      {
        fase: 'Direct',
        acties: [
          'Systeem onmiddellijk buiten gebruik stellen',
          'Melding aan FG en PO',
          'Communicatie naar betrokken gebruikers (docenten/leerlingen)',
          'Start juridisch onderzoek naar alternatieven',
        ],
      },
      {
        fase: 'Korte termijn (1-3 mnd)',
        acties: [
          'Onderzoek of het systeem aan te passen is naar toegestane vorm',
          'Herontwerp- of vervangingsplan opstellen',
          'Bestaande data veiligstellen en vernietigen (conform AVG)',
        ],
      },
      {
        fase: 'Lange termijn (3-6 mnd)',
        acties: [
          'Implementatie van vervangend compliant systeem',
          'Evaluatie en borging in het inkoop- en implementatiebeleid',
          'Beoordeling door toezichthouder (AP) indien noodzakelijk',
        ],
      },
    ],
  },
  hoog_risico: {
    titel: 'Hoog-risico AI-systeem',
    kleur: 'amber',
    samenvatting:
      'Dit systeem wordt geclassificeerd als een hoog-risico AI-systeem onder de AI Act (Art. 6-7). Er gelden uitgebreide verplichtingen op het gebied van risicobeheer, datakwaliteit, transparantie, menselijk toezicht, logging en conformiteitsbeoordeling.',
    kernBevindingen: [
      'Het systeem valt in een hoog-risicocategorie (toegang tot onderwijs, evaluatie, voortgang)',
      'De uitzondering voor administratieve handelingen is niet van toepassing',
      'Volledige compliance-roadmap is vereist voor ingebruikname',
      'Zowel leverancier als school hebben wettelijke verplichtingen',
      'FRIA en DPIA zijn verplicht voorafgaand aan gebruik',
    ],
    topActies: [
      'Start met FRIA (Fundamental Rights Impact Assessment)',
      'Voer een DPIA uit (AVG Art. 35)',
      'Richt een risicobeheersysteem in (AI Act Art. 9)',
      'Stel technische documentatie op (AI Act Art. 11)',
      'Implementeer menselijk toezicht (AI Act Art. 14)',
    ],
    volgendeStap:
      'Begin met de FRIA en DPIA. Gebruik de checklist in dit rapport als leidraad. Plan een startoverleg met de PO, FG en AI Officer.',
    roadmap: [
      {
        fase: 'Fase 1 — Direct (0-1 maand)',
        acties: [
          'Risicobeheersysteem opzetten (Art. 9)',
          'Technische documentatie starten (Art. 11)',
          'Transparantie-informatie voor gebruikers opstellen (Art. 13)',
          'Menselijk toezicht inrichten: HITL/HOTL (Art. 14)',
          'FRIA-sessie plannen',
          'DPIA starten',
          'Medezeggenschap informeren',
        ],
      },
      {
        fase: 'Fase 2 — Korte termijn (1-3 maanden)',
        acties: [
          'Datakwaliteitsprocedures implementeren (Art. 10)',
          'Logging- en registratiesysteem inrichten (Art. 12)',
          'FRIA voltooien en documenteren',
          'DPIA voltooien en goedkeuren',
          'Bias-test uitvoeren op trainingsdata',
          'Gebruikershandleiding en instructies opstellen',
          'Ouders/leerlingen informeren over verwerking',
        ],
      },
      {
        fase: 'Fase 3 — Voor ingebruikname (3-6 maanden)',
        acties: [
          'Conformiteitsbeoordeling afronden',
          'CE-markering aanbrengen (leverancier)',
          'EU-databank registratie (leverancier)',
          'Interne audit uitvoeren op volledigheid',
          'Laatste validatie door FG/PO',
          'Implementatie in onderwijsomgeving',
        ],
      },
      {
        fase: 'Fase 4 — Jaarlijks onderhoud',
        acties: [
          'Halfjaarlijkse herbeoordeling risicoclassificatie',
          'Monitoren van incidenten en klachten',
          'Logboekanalyse en rapportage',
          'Update technische documentatie bij wijzigingen',
          'Herhaling bias-test bij modelupdates',
        ],
      },
    ],
  },
  beperkt: {
    titel: 'Beperkt / Minimaal risico AI-systeem',
    kleur: 'emerald',
    samenvatting:
      'Dit systeem is geclassificeerd als beperkt of minimaal risico onder de AI Act. De verplichtingen zijn gering, maar transparantie en basis-governance zijn vereist. Dit is de meest voorkomende categorie voor educatieve hulpmiddelen.',
    kernBevindingen: [
      'Het systeem voldoet aan de AI-definitie maar valt niet in een hoog-risicocategorie',
      'Er is sprake van een of meer verboden praktijken (geen hoog risico)',
      'Transparantieplicht (Art. 50) is de belangrijkste verplichting',
      'Geen FRIA, DPIA of conformiteitsbeoordeling vereist',
    ],
    topActies: [
      'Informeer gebruikers over interactie met AI (Art. 50)',
      'Markeer AI-gegenereerde content als zodanig',
      'Documenteer de werking en datastromen in basis',
      'Stel een monitoringsplan op voor bijstelling',
    ],
    volgendeStap:
      'De transparantieverplichtingen zijn eenvoudig te implementeren. Gebruik de communicatietemplates uit de SIVON-richtlijn 2026-001.',
    roadmap: [
      {
        fase: 'Fase 1 — Direct (0-1 maand)',
        acties: [
          'Transparantie-informatie opstellen voor docenten en leerlingen',
          'AI-interactie kenbaar maken in de gebruikersinterface',
          'Synthetische content markeren',
          'PRIVACY- en dataminimalisatie check uitvoeren',
        ],
      },
      {
        fase: 'Fase 2 — Korte termijn (1-3 maanden)',
        acties: [
          'Basis technische documentatie opstellen',
          'Gebruiksbeleid voor docenten formuleren',
          'Medezeggenschap informeren over de inzet',
          'Ouders informeren via de schoolgids of website',
        ],
      },
      {
        fase: 'Fase 3 — Doorlopend',
        acties: [
          'Monitor of het systeem binnen de gestelde scope blijft',
          'Jaarlijkse herbeoordeling van de risicoclassificatie',
          'Incidenten en feedback registreren',
          'Bij significante wijzigingen opnieuw toetsen',
        ],
      },
    ],
  },
  geen_ai: {
    titel: 'Geen AI-systeem (buiten scope)',
    kleur: 'slate',
    samenvatting:
      'Dit systeem voldoet niet aan de AI-definitie van de AI Act (Art. 3(1)) en valt daarmee buiten de werkingssfeer van de verordening. Er zijn geen specifieke AI Act-verplichtingen van toepassing.',
    kernBevindingen: [
      'Het systeem is niet machinegebaseerd, heeft geen autonomie, voert geen inferentie uit, genereert geen beïnvloedende output — of een combinatie daarvan',
      'Bestaande wetgeving (AVG, onderwijswetgeving) blijft onverkort van toepassing',
      'Monitor of het systeem in de toekomst wél onder de AI-definitie kan vallen',
    ],
    topActies: [
      'Bevestig dat de huidige classificatie klopt (herhaal toetsing bij update)',
      'Borg dat reguliere IT-beveiliging en privacy op orde zijn',
      'Documenteer de uitgesloten status voor het compliancedossier',
      'Plan een herbeoordeling over 12 maanden',
    ],
    volgendeStap:
      'Geen directe actie vereist. Blijf op de hoogte van wetswijzigingen en herbeoordeel bij functionele aanpassingen aan het systeem.',
    roadmap: [
      {
        fase: 'Nu',
        acties: [
          'Reden van uitsluiting documenteren',
          'AVG-basis op orde brengen (indien van toepassing)',
        ],
      },
      {
        fase: 'Jaarlijks',
        acties: ['Herbeoordeling van de AI-definitie', 'Check op wetswijzigingen'],
      },
    ],
  },
};

export const STEP_ANALYSIS = {
  isMachine: {
    vraag: 'Is het een machinegebaseerd systeem?',
    toelichtingJa:
      'Het systeem draait op software/hardware en valt daarmee onder de materiële reikwijdte van de AI Act.',
    toelichtingNee:
      'Geen machinegebaseerd systeem — de AI Act is niet van toepassing op zuiver handmatige processen.',
    bron: 'AI Act Art. 3(1)',
  },
  hasAutonomy: {
    vraag: 'Werkt het met een bepaalde mate van autonomie?',
    toelichtingJa:
      'Het systeem handelt (deels) zonder menselijke tussenkomst, wat kenmerkend is voor AI.',
    toelichtingNee:
      'Volledig handmatig gestuurd — geen sprake van AI-autonomie.',
    bron: 'AI Act Art. 3(1)',
  },
  hasInference: {
    vraag: 'Voert het systeem inferentie uit?',
    toelichtingJa:
      'Het systeem genereert voorspellingen, aanbevelingen of beslissingen op basis van invoerdata.',
    toelichtingNee:
      'Geen inferentie — het systeem verwerkt alleen data zonder conclusies te trekken.',
    bron: 'AI Act Art. 3(1)',
  },
  generatesOutput: {
    vraag: 'Genereert het systeem beïnvloedende output?',
    toelichtingJa:
      'De output heeft invloed op de fysieke of virtuele omgeving (bijv. advies aan docent).',
    toelichtingNee:
      'Output heeft geen invloed op de omgeving — geen AI in de zin van de verordening.',
    bron: 'AI Act Art. 3(1)',
  },
  emotionRecognition: {
    vraag: 'Wordt emotieherkenning toegepast?',
    toelichtingJa:
      'Emotieherkenning in onderwijs is een verboden praktijk onder Art. 5(1)(f) AI Act.',
    toelichtingNee: 'Geen emotieherkenning — dit aspect is niet van toepassing.',
    bron: 'AI Act Art. 5(1)(f)',
  },
  biometricCategorization: {
    vraag: 'Wordt biometrische categorisatie toegepast?',
    toelichtingJa:
      'Biometrische categorisatie op basis van gevoelige kenmerken is verboden.',
    toelichtingNee: 'Geen biometrische categorisatie.',
    bron: 'AI Act Art. 5(1)(c)',
  },
  socialScoring: {
    vraag: 'Wordt social scoring toegepast?',
    toelichtingJa:
      'Social scoring door onderwijsinstellingen is verboden onder Art. 5(1)(c).',
    toelichtingNee: 'Geen social scoring.',
    bron: 'AI Act Art. 5(1)(c)',
  },
  subliminalManipulation: {
    vraag: 'Wordt subliminale manipulatie toegepast?',
    toelichtingJa:
      'Subliminale technieken om gedrag te manipuleren zijn verboden onder Art. 5(1)(a).',
    toelichtingNee: 'Geen subliminale manipulatie.',
    bron: 'AI Act Art. 5(1)(a)',
  },
  evaluationSystem: {
    vraag: 'Wordt het systeem gebruikt voor evaluatie van leerresultaten?',
    toelichtingJa:
      'Evaluatie van leerresultaten is een hoog-risicocategorie (Art. 6(2) i.c.m. Bijlage III, punt 3).',
    toelichtingNee:
      'Geen evaluatie van leerresultaten — dit criterium is niet van toepassing.',
    bron: 'AI Act Art. 6(2), Bijlage III punt 3',
  },
  admissionSystem: {
    vraag: 'Wordt het systeem gebruikt voor toelating van studenten?',
    toelichtingJa:
      'Toelatingssystemen voor onderwijs vallen onder hoog-risico (Bijlage III, punt 3(a)).',
    toelichtingNee: 'Geen toelatingssysteem.',
    bron: 'AI Act Bijlage III, punt 3(a)',
  },
  levelAdvancement: {
    vraag: 'Wordt het systeem gebruikt voor niveauplaatsing/voortgang?',
    toelichtingJa:
      'Systemen die niveau of voortgang bepalen vallen onder hoog-risico (Bijlage III, punt 3(b)).',
    toelichtingNee: 'Geen niveauplaatsingssysteem.',
    bron: 'AI Act Bijlage III, punt 3(b)',
  },
  proctoringSystem: {
    vraag: 'Wordt het systeem gebruikt voor proctoring (toezicht op toetsen)?',
    toelichtingJa:
      'Proctoring valt onder hoog-risico (Bijlage III, punt 3(c)).',
    toelichtingNee: 'Geen proctoring.',
    bron: 'AI Act Bijlage III, punt 3(c)',
  },
  isAdministrativeException: {
    vraag: 'Is het een uitzondering voor administratieve handelingen?',
    toelichtingJa:
      'De uitzondering is van toepassing — geen hoog-risico classificatie.',
    toelichtingNee:
      'De uitzondering is niet van toepassing — het systeem blijft hoog-risico.',
    bron: 'AI Act Art. 6(3)',
  },
  humanOversight: {
    vraag: 'Is er menselijk toezicht ingericht?',
    toelichtingJa:
      'Menselijk toezicht (HITL/HOTL/HOC) is aanwezig — dit is een best practice.',
    toelichtingNee:
      'Geen menselijk toezicht — dit is een risico dat gemitigeerd moet worden.',
    bron: 'AI Act Art. 14',
  },
  biasTested: {
    vraag: 'Is er een bias-test uitgevoerd?',
    toelichtingJa:
      'Bias-test is uitgevoerd — risico op discriminatie is in kaart gebracht.',
    toelichtingNee:
      'Geen bias-test — dit is een aandachtspunt, met name bij hoog-risico systemen.',
    bron: 'AI Act Art. 10, SIVON 2026',
  },
};
