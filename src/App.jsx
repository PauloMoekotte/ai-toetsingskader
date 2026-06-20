import React, { useState } from 'react';
import ReportView from './report/ReportView';

// --- INLINE SVG ICONS ---
const IconShield = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const IconAlert = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);
const IconFileText = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const IconCompass = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);
const IconChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);
const IconCopy = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
  </svg>
);
const IconInfo = () => (
  <svg className="w-5 h-5 inline-block mr-1 text-sky-600 align-text-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
export default function App() {
  const [activeTab, setActiveTab] = useState('wizard');
  const [role, setRole] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [toastMessage, setToastMessage] = useState(null);
  const [wizardAnswers, setWizardAnswers] = useState({
    isMachine: null,
    hasAutonomy: null,
    hasInference: null,
    generatesOutput: null,
    affectsEnvironment: null,
    emotionRecognition: null,
    biometricCategorization: null,
    socialScoring: null,
    subliminalManipulation: null,
    admissionSystem: null,
    evaluationSystem: null,
    levelAdvancement: null,
    proctoringSystem: null,
    isAdministrativeException: false,
    humanOversight: null,
    biasTested: null,
    alignsValues: null,
    transparencyProvided: null
  });
  const [friaForm, setFriaForm] = useState({
    appName: '',
    stakeholders: ['Studenten', 'Docenten', 'Managers onderwijs', 'Instelling/Bestuur'],
    identifiedRisks: ['Privacy van studentgegevens', 'Inbreuk op autonomie van de docent'],
    oversightMethod: 'Human-in-the-loop (HITL): Docent keurt alle AI-concepten goed.',
    mitigationMeasures: '1. Periodieke controle op bias\n2. Duidelijke communicatie\n3. Opt-out mogelijkheid.',
    schoolResponsible: 'Stichting Funderend Onderwijs - IT Bestuur'
  });
  const [complianceChecks, setComplianceChecks] = useState({
    riskSystem: false,
    qualityData: false,
    technicalDoc: false,
    loggingEnabled: false,
    ceMarking: false,
    userInstructions: false,
    friaDone: false,
    notifiedParents: false,
    euDbRegistration: false
  });
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };
  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    try {
      document.execCommand('copy');
      showToast("Gekopieerd naar klembord!");
    } catch (err) {
      showToast("Kopiëren mislukt.");
    }
    textField.remove();
  };
  const isAISystem =
    wizardAnswers.isMachine === 'ja' &&
    wizardAnswers.hasAutonomy === 'ja' &&
    wizardAnswers.hasInference === 'ja' &&
    wizardAnswers.generatesOutput === 'ja';
  const isForbidden =
    wizardAnswers.emotionRecognition === 'ja' ||
    wizardAnswers.biometricCategorization === 'ja' ||
    wizardAnswers.socialScoring === 'ja' ||
    wizardAnswers.subliminalManipulation === 'ja';
  const fitsHighRiskCategory =
    wizardAnswers.admissionSystem === 'ja' ||
    wizardAnswers.evaluationSystem === 'ja' ||
    wizardAnswers.levelAdvancement === 'ja' ||
    wizardAnswers.proctoringSystem === 'ja';

  const isHighRisk = fitsHighRiskCategory && !wizardAnswers.isAdministrativeException;
  const applyCase = (caseType) => {
    if (caseType === 'homework_chatbot') {
      setWizardAnswers({
        isMachine: 'ja',
        hasAutonomy: 'ja',
        hasInference: 'ja',
        generatesOutput: 'ja',
        affectsEnvironment: 'ja',
        emotionRecognition: 'nee',
        biometricCategorization: 'nee',
        socialScoring: 'nee',
        subliminalManipulation: 'nee',
        admissionSystem: 'nee',
        evaluationSystem: 'nee',
        levelAdvancement: 'nee',
        proctoringSystem: 'nee',
        isAdministrativeException: false,
        humanOversight: 'ja',
        biasTested: 'nee',
        alignsValues: 'ja',
        transparencyProvided: 'ja'
      });
      setRole('school');
      setCurrentStep(3);
      showToast("Casus 'Huiswerk Chatbot' geladen!");
    } else if (caseType === 'grading_system') {
      setWizardAnswers({
        isMachine: 'ja',
        hasAutonomy: 'ja',
        hasInference: 'ja',
        generatesOutput: 'ja',
        affectsEnvironment: 'ja',
        emotionRecognition: 'nee',
        biometricCategorization: 'nee',
        socialScoring: 'nee',
        subliminalManipulation: 'nee',
        admissionSystem: 'nee',
        evaluationSystem: 'ja',
        levelAdvancement: 'ja',
        proctoringSystem: 'nee',
        isAdministrativeException: false,
        humanOversight: 'ja',
        biasTested: 'ja',
        alignsValues: 'ja',
        transparencyProvided: 'ja'
      });
      setRole('leverancier');
      setCurrentStep(4);
      showToast("Casus 'Geautomatiseerd Nakijken' geladen!");
    } else if (caseType === 'proctoring_biometrics') {
      setWizardAnswers({
        isMachine: 'ja',
        hasAutonomy: 'ja',
        hasInference: 'ja',
        generatesOutput: 'ja',
        affectsEnvironment: 'ja',
        emotionRecognition: 'ja',
        biometricCategorization: 'nee',
        socialScoring: 'nee',
        subliminalManipulation: 'nee',
        admissionSystem: 'nee',
        evaluationSystem: 'nee',
        levelAdvancement: 'nee',
        proctoringSystem: 'ja',
        isAdministrativeException: false,
        humanOversight: 'nee',
        biasTested: 'nee',
        alignsValues: 'nee',
        transparencyProvided: 'nee'
      });
      setRole('school');
      setCurrentStep(2);
      showToast("Casus 'Proctoring met Emotieherkenning' geladen!");
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 border border-slate-700">
          <span className="text-emerald-400">✔</span>
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}
      <header className="bg-[#2D5A87] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-xl border border-white/20">
              <IconShield />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wide">AI Toetsingskader</h1>
              <p className="text-xs text-slate-200">Gidsinstrument voor vervolgonderwijs</p>
            </div>
          </div>

          <nav className="flex space-x-1 bg-white/10 p-1 rounded-xl border border-white/10 text-sm">
            <button onClick={() => setActiveTab('wizard')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'wizard' ? 'bg-white text-[#2D5A87] shadow-sm' : 'hover:bg-white/5 text-slate-100'}`}>🔍 Toetsing</button>
            <button onClick={() => setActiveTab('fria')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'fria' ? 'bg-white text-[#2D5A87] shadow-sm' : 'hover:bg-white/5 text-slate-100'}`}>📋 FRIA</button>
            <button onClick={() => setActiveTab('cases')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'cases' ? 'bg-white text-[#2D5A87] shadow-sm' : 'hover:bg-white/5 text-slate-100'}`}>💡 Cases</button>
            <button onClick={() => setActiveTab('sources')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'sources' ? 'bg-white text-[#2D5A87] shadow-sm' : 'hover:bg-white/5 text-slate-100'}`}>📚 Bronnen</button>
            <button onClick={() => setActiveTab('report')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'report' ? 'bg-white text-[#2D5A87] shadow-sm' : 'hover:bg-white/5 text-slate-100'}`}>📄 Rapport</button>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        {activeTab === 'wizard' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-600">Selecteer uw rol:</span>
                <div className="flex space-x-2">
                  <button onClick={() => { setRole('school'); showToast("Rol ingesteld: Instelling"); }} className={`px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all ${role === 'school' ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`}>🏫 Instelling / Bestuur</button>
                  <button onClick={() => { setRole('leverancier'); showToast("Rol ingesteld: Leverancier"); }} className={`px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all ${role === 'leverancier' ? 'bg-sky-50 border-sky-500 text-sky-700 shadow-sm' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`}>🚀 Leverancier</button>
                </div>
              </div>
              <div className="grid grid-cols-5 border-b border-slate-200 text-center text-xs font-bold bg-slate-50/50">
                {[{ n: 1, l: 'Definitie' }, { n: 2, l: 'Verboden AI' }, { n: 3, l: 'Hoog Risico' }, { n: 4, l: 'Compliance' }, { n: 5, l: 'Ethiek' }].map((s) => (
                  <button key={s.n} onClick={() => setCurrentStep(s.n)} className={`py-2 transition-colors border-b-2 ${currentStep === s.n ? 'border-[#2D5A87] text-[#2D5A87]' : 'border-transparent text-slate-400'}`}>
                    <div>Stap {s.n}</div>
                    <div className="text-[10px] font-normal opacity-70">{s.l}</div>
                  </button>
                ))}
              </div>
              <div className="p-6 min-h-[400px]">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-sky-500 bg-sky-50/50 p-4 rounded-r-xl">
                      <h3 className="font-bold text-sky-900 flex items-center text-base"><IconInfo /> Stap 1: AI-definitie</h3>
                      <p className="text-sm text-sky-800 mt-1">Valt de software onder de officiële AI-definitie van de AI Act?</p>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <label className="block text-sm font-bold text-slate-700 mb-2">1. Is het een machinegebaseerd systeem?</label>
                        <div className="flex space-x-4">
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, isMachine: 'ja' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.isMachine === 'ja' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Ja</button>
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, isMachine: 'nee' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.isMachine === 'nee' ? 'bg-rose-600 text-white' : 'bg-white'}`}>Nee</button>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <label className="block text-sm font-bold text-slate-700 mb-2">2. Werkt het met een bepaalde mate van autonomie?</label>
                        <div className="flex space-x-4">
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, hasAutonomy: 'ja' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.hasAutonomy === 'ja' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Ja</button>
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, hasAutonomy: 'nee' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.hasAutonomy === 'nee' ? 'bg-rose-600 text-white' : 'bg-white'}`}>Nee</button>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <label className="block text-sm font-bold text-slate-700 mb-2">3. Voert het systeem inferentie uit?</label>
                        <div className="flex space-x-4">
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, hasInference: 'ja' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.hasInference === 'ja' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Ja</button>
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, hasInference: 'nee' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.hasInference === 'nee' ? 'bg-rose-600 text-white' : 'bg-white'}`}>Nee</button>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <label className="block text-sm font-bold text-slate-700 mb-2">4. Genereert het systeem beïnvloedende output?</label>
                        <div className="flex space-x-4">
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, generatesOutput: 'ja' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.generatesOutput === 'ja' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Ja</button>
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, generatesOutput: 'nee' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.generatesOutput === 'nee' ? 'bg-rose-600 text-white' : 'bg-white'}`}>Nee</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end pt-4 border-t border-slate-200">
                      <button onClick={() => setCurrentStep(2)} className="bg-[#2D5A87] text-white px-5 py-2 rounded-xl text-sm font-semibold flex items-center space-x-1">
                        <span>Volgende</span> <IconChevronRight />
                      </button>
                    </div>
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-rose-500 bg-rose-50/50 p-4 rounded-r-xl">
                      <h3 className="font-bold text-rose-950 flex items-center text-base"><IconAlert /> Stap 2: Verboden Praktijken</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <label className="block text-sm font-bold text-slate-700 mb-2">1. Wordt er gebruikgemaakt van emotieherkenning?</label>
                        <div className="flex space-x-4">
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, emotionRecognition: 'ja' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.emotionRecognition === 'ja' ? 'bg-rose-600 text-white' : 'bg-white'}`}>Ja</button>
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, emotionRecognition: 'nee' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.emotionRecognition === 'nee' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Nee</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-slate-200">
                      <button onClick={() => setCurrentStep(1)} className="bg-slate-200 text-slate-700 px-5 py-2 rounded-xl text-sm font-semibold">Vorige</button>
                      <button onClick={() => setCurrentStep(3)} className="bg-[#2D5A87] text-white px-5 py-2 rounded-xl text-sm font-semibold flex items-center space-x-1">
                        <span>Volgende</span> <IconChevronRight />
                      </button>
                    </div>
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl">
                      <h3 className="font-bold text-amber-950 flex items-center text-base"><IconAlert /> Stap 3: Hoog Risico</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                        <label className="flex items-center space-x-3 p-2 bg-white rounded border border-slate-200 cursor-pointer">
                          <input type="checkbox" checked={wizardAnswers.evaluationSystem === 'ja'} onChange={(e) => setWizardAnswers({ ...wizardAnswers, evaluationSystem: e.target.checked ? 'ja' : 'nee' })} className="h-4 w-4" />
                          <span className="text-sm font-medium">Evaluatie van leerresultaten</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-slate-200">
                      <button onClick={() => setCurrentStep(2)} className="bg-slate-200 text-slate-700 px-5 py-2 rounded-xl text-sm font-semibold">Vorige</button>
                      <button onClick={() => setCurrentStep(4)} className="bg-[#2D5A87] text-white px-5 py-2 rounded-xl text-sm font-semibold flex items-center space-x-1">
                        <span>Volgende</span> <IconChevronRight />
                      </button>
                    </div>
                  </div>
                )}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-emerald-500 bg-emerald-50/50 p-4 rounded-r-xl">
                      <h3 className="font-bold text-emerald-950 flex items-center text-base"><IconCheck /> Stap 4: Compliance Maatregelen</h3>
                    </div>
                    <p className="text-sm">Controleer de live-status aan de rechterkant om te zien welke specifieke maatregelen voor uw rol gelden.</p>
                    <div className="flex justify-between pt-4 border-t border-slate-200">
                      <button onClick={() => setCurrentStep(3)} className="bg-slate-200 text-slate-700 px-5 py-2 rounded-xl text-sm font-semibold">Vorige</button>
                      <button onClick={() => setCurrentStep(5)} className="bg-[#2D5A87] text-white px-5 py-2 rounded-xl text-sm font-semibold flex items-center space-x-1">
                        <span>Volgende</span> <IconChevronRight />
                      </button>
                    </div>
                  </div>
                )}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-indigo-500 bg-indigo-50/50 p-4 rounded-r-xl">
                      <h3 className="font-bold text-indigo-950 flex items-center text-base"><IconCompass /> Stap 5: Ethiek & Pedagogiek</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <label className="block text-sm font-bold text-slate-700 mb-2">Is er menselijk toezicht?</label>
                        <div className="flex space-x-4">
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, humanOversight: 'ja' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.humanOversight === 'ja' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Ja</button>
                          <button onClick={() => setWizardAnswers({ ...wizardAnswers, humanOversight: 'nee' })} className={`px-6 py-2 rounded-lg text-sm font-semibold border ${wizardAnswers.humanOversight === 'nee' ? 'bg-rose-600 text-white' : 'bg-white'}`}>Nee</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-slate-200">
                      <button onClick={() => setCurrentStep(4)} className="bg-slate-200 text-slate-700 px-5 py-2 rounded-xl text-sm font-semibold">Vorige</button>
                      <button onClick={() => showToast("Toetsing succesvol doorlopen!")} className="bg-emerald-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow">✓ Voltooid</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-700 mb-4 uppercase tracking-wide text-xs">📊 Live Status</h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between p-2 bg-slate-50 rounded">
                    <span>AI-systeem:</span>
                    <span className="font-bold">{isAISystem ? 'JA' : 'NEE'}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-50 rounded">
                    <span>Verboden:</span>
                    <span className="font-bold text-rose-600">{isForbidden ? 'JA' : 'NEE'}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-50 rounded">
                    <span>Hoog Risico:</span>
                    <span className="font-bold text-amber-600">{isHighRisk ? 'JA' : 'NEE'}</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#2D5A87] text-white p-5 rounded-2xl shadow-sm space-y-3">
                <h3 className="font-bold text-sm flex items-center gap-2"><IconFileText /> Toetsingsrapport</h3>

                <div className="bg-white/10 rounded-xl p-3 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span>AI Act classificatie</span>
                    <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${isForbidden ? 'bg-red-400 text-white' : isHighRisk ? 'bg-amber-400 text-slate-900' : isAISystem ? 'bg-emerald-400 text-slate-900' : 'bg-slate-400 text-white'}`}>
                      {isForbidden ? 'Verboden' : isHighRisk ? 'Hoog risico' : isAISystem ? 'Beperkt/minimaal' : 'Geen AI'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rechtsgrond</span>
                    <span className="font-bold">{isAISystem ? 'Art. 5-6 AI Act' : 'N.v.t.'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SIVON richtlijn</span>
                    <span className="font-bold">{isHighRisk ? '2026-003' : '2026-001'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AVG impact</span>
                    <span className={`font-bold ${isHighRisk ? 'text-amber-300' : 'text-emerald-300'}`}>{isHighRisk ? 'DPIA vereist' : 'Beperkt'}</span>
                  </div>
                </div>

                <div className="text-[11px] space-y-1 bg-white/5 rounded-xl p-3">
                  <p className="font-semibold">📋 Aanbevolen acties</p>
                  <ul className="list-disc list-inside space-y-0.5 text-white/80">
                    {isForbidden && <li className="text-red-300 font-semibold">⚠ Verboden praktijk — onmiddellijk stoppen (AI Act Art. 5)</li>}
                    {isHighRisk && <li>FRIA opstellen (AI Act Art. 9 + SIVON 2026-003)</li>}
                    {isHighRisk && <li>DPIA uitvoeren o.g.v. AVG Art. 35</li>}
                    {isAISystem && <li>Transparantieplicht: leerlingen informeren (AI Act Art. 50)</li>}
                    {wizardAnswers.humanOversight !== 'ja' && isAISystem && <li className="text-amber-300">Menselijk toezicht implementeren (HITL/HOTL)</li>}
                    {wizardAnswers.biasTested !== 'ja' && isHighRisk && <li className="text-amber-300">Bias-test uitvoeren voor ingebruikname</li>}
                    {role === 'leverancier' && isHighRisk && <li>CE-markering + conformiteitsbeoordeling (AI Act Art. 16-17)</li>}
                    {role === 'school' && <li>Ouders/studenten raadplegen (medezeggenschap)</li>}
                    {!isForbidden && !isHighRisk && !isAISystem && <li>Geen bijzondere verplichtingen — blijf monitoren</li>}
                  </ul>
                </div>

                <div className="text-[11px] space-y-1 bg-white/5 rounded-xl p-3">
                  <p className="font-semibold">🔗 Regelgevingskaders</p>
                  <ul className="space-y-0.5 text-white/70">
                    <li>AI Act (Verordening 2024/1689) — Art. 3 (definities), Art. 5 (verboden), Art. 6-7 (hoog risico), Art. 50 (transparantie)</li>
                    <li>AVG (Verordening 2016/679) — Art. 5 (beginselen), Art. 35 (DPIA), Art. 22 (geautomatiseerde besluitvorming)</li>
                    <li>SIVON Kaders 2026 — Toetsingskader AI in het Funderend Onderwijs</li>
                    <li>AP Richtsnoeren — Algoritmes &amp; onderwijs (2025)</li>
                    <li>Kennisnet Ethiekkompas — Waardengedreven inzet van AI</li>
                    <li>IMRA / IMDA — Informatiebeveiliging en privacy</li>
                  </ul>
                </div>

                <button onClick={() => copyToClipboard(
                  `TOETSINGSRAPPORT AI TOETSIINGSKADER\n` +
                  `================================\n\n` +
                  `Classificatie: ${isForbidden ? 'Verboden' : isHighRisk ? 'Hoog risico' : isAISystem ? 'Beperkt/minimaal' : 'Geen AI'}\n` +
                  `AI-systeem: ${isAISystem ? 'JA' : 'NEE'}\n` +
                  `Verboden praktijk: ${isForbidden ? 'JA' : 'NEE'}\n` +
                  `Hoog risico: ${isHighRisk ? 'JA' : 'NEE'}\n` +
                  `Rol: ${role === 'school' ? 'Instelling/Bestuur' : role === 'leverancier' ? 'Leverancier' : 'Niet geselecteerd'}\n\n` +
                  `Regelgeving:\n` +
                  `- AI Act Art. 3: AI-definitie\n` +
                  `- AI Act Art. 5: Verboden praktijken\n` +
                  `- AI Act Art. 6: Hoog-risico criteria\n` +
                  `- AI Act Art. 9: Risicobeheer\n` +
                  `- AI Act Art. 50: Transparantieplicht\n` +
                  `- AVG Art. 5: Beginselen verwerking\n` +
                  `- AVG Art. 22: Geautomatiseerde besluiten\n` +
                  `- AVG Art. 35: DPIA\n` +
                  `- SIVON 2026: Toetsingskader\n\n` +
                  `Aanbevolen acties:\n` +
                  `${isForbidden ? '- STOPPEN (verboden praktijk)\n' : ''}` +
                  `${isHighRisk ? '- FRIA opstellen (AI Act Art. 9)\n- DPIA uitvoeren (AVG Art. 35)\n- Bias-test uitvoeren\n' : ''}` +
                  `${isAISystem ? '- Transparantie richting leerlingen (AI Act Art. 50)\n' : ''}` +
                  `${role === 'leverancier' && isHighRisk ? '- CE-markering + conformiteitsbeoordeling\n' : ''}` +
                  `- Raadpleeg SIVON kaders voor verdere implementatie\n`
                )} className="w-full bg-white text-[#2D5A87] py-2.5 rounded-xl text-xs font-bold transition-all hover:bg-slate-100 flex items-center justify-center space-x-2">
                  <IconCopy /> <span>Kopieer Rapport</span>
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'fria' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 max-w-4xl mx-auto space-y-4">
            <h2 className="text-xl font-bold text-[#2D5A87]">📋 FRIA Concept Generator</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Naam AI-Toepassing</label>
                <input type="text" className="w-full px-3 py-2 border rounded-xl text-sm" value={friaForm.appName} onChange={(e) => setFriaForm({ ...friaForm, appName: e.target.value })} placeholder="Wiskunde chatbot" />
              </div>
              <button onClick={() => copyToClipboard(`FRIA: ${friaForm.appName}`)} className="bg-[#2D5A87] text-white px-4 py-2 rounded-xl text-xs font-bold">Kopieer FRIA</button>
            </div>
          </div>
        )}
        {activeTab === 'cases' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Homework Chatbot</h3>
                <p className="text-xs text-slate-500 mt-2">Laag-risico hulpmiddel voor scholieren.</p>
              </div>
              <button onClick={() => applyCase('homework_chatbot')} className="w-full bg-slate-100 hover:bg-[#2D5A87] hover:text-white text-[#2D5A87] text-xs font-bold py-2 rounded-xl mt-4">Laad Case</button>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Geautomatiseerd Nakijken</h3>
                <p className="text-xs text-slate-500 mt-2">Hoog-risico systeem voor toetsafname.</p>
              </div>
              <button onClick={() => applyCase('grading_system')} className="w-full bg-slate-100 hover:bg-[#2D5A87] hover:text-white text-[#2D5A87] text-xs font-bold py-2 rounded-xl mt-4">Laad Case</button>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Proctoring & Biometrie</h3>
                <p className="text-xs text-slate-500 mt-2">Verboden praktijk (emotieherkenning).</p>
              </div>
              <button onClick={() => applyCase('proctoring_biometrics')} className="w-full bg-slate-100 hover:bg-[#2D5A87] hover:text-white text-[#2D5A87] text-xs font-bold py-2 rounded-xl mt-4">Laad Case</button>
            </div>
          </div>
        )}
        {activeTab === 'sources' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 max-w-4xl mx-auto space-y-4">
            <h2 className="text-xl font-bold text-[#2D5A87]">📚 Referentiekaders</h2>
            <p className="text-sm text-slate-600">Dit platform integreert de richtlijnen van SIVON (2026), AP (2025), Kennisnet en IMDA.</p>
          </div>
        )}
        {activeTab === 'report' && (
          <ReportView wizardAnswers={wizardAnswers} role={role} />
        )}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-4 text-center text-xs mt-12">
        <p>© 2026 AI Toetsingskader Beroepsnderwijs.</p>
      </footer>
    </div>
  );
}