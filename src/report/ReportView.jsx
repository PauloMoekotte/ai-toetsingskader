import React, { useState, useCallback, useMemo } from 'react';
import ReportContextForm from './context/ReportContextForm';
import CoverPage from './sections/CoverPage';
import ExecutiveSummary from './sections/ExecutiveSummary';
import ClassificationAnalysis from './sections/ClassificationAnalysis';
import ObligationsOverview from './sections/ObligationsOverview';
import ComplianceRoadmap from './sections/ComplianceRoadmap';
import FriaDpiaChecklist from './sections/FriaDpiaChecklist';
import GovernanceSection from './sections/GovernanceSection';
import TechnicalDocs from './sections/TechnicalDocs';
import MonitoringSection from './sections/MonitoringSection';
import SignOff from './sections/SignOff';
import Appendices from './sections/Appendices';
import { getClassification } from './content/classificationTemplates';
import PdfExport from './PdfExport';

const DEFAULT_REPORT_CTX = {
  systemName: '',
  organisation: '',
  contactPerson: '',
  contactEmail: '',
  version: '1.0',
  assessmentDate: new Date().toISOString().split('T')[0],
};

export default function ReportView({ wizardAnswers, role }) {
  const [ctx, setCtx] = useState(DEFAULT_REPORT_CTX);
  const [generated, setGenerated] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');

  const classification = useMemo(() => getClassification(wizardAnswers), [wizardAnswers]);

  const handleGenerate = useCallback(() => {
    setGenerated(true);
  }, []);

  const sections = [
    { id: 'cover', label: 'Titelblad', component: CoverPage },
    { id: 'summary', label: 'Samenvatting', component: ExecutiveSummary },
    { id: 'analysis', label: 'Classificatie', component: ClassificationAnalysis },
    { id: 'obligations', label: 'Verplichtingen', component: ObligationsOverview },
    { id: 'roadmap', label: 'Roadmap', component: ComplianceRoadmap },
    ...(classification === 'hoog_risico' ? [{ id: 'fria', label: 'FRIA/DPIA', component: FriaDpiaChecklist }] : []),
    { id: 'governance', label: 'Governance', component: GovernanceSection },
    { id: 'docs', label: 'Documentatie', component: TechnicalDocs },
    { id: 'monitoring', label: 'Monitoring', component: MonitoringSection },
    { id: 'signoff', label: 'Ondertekening', component: SignOff },
    { id: 'appendices', label: 'Bijlagen', component: Appendices },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(`report-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const classificationLabel =
    classification === 'verboden'
      ? 'Verboden'
      : classification === 'hoog_risico'
      ? 'Hoog risico'
      : classification === 'beperkt'
      ? 'Beperkt / Minimaal'
      : 'Geen AI';

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">📄 Toetsingsrapport</h2>
            <p className="text-sm text-slate-500">
              Uitgebreid rapport op basis van uw wizard-antwoorden.
              Classificatie: <strong>{classificationLabel}</strong>
            </p>
          </div>
          <div className="flex space-x-2">
            {generated && (
              <PdfExport
                ctx={ctx}
                wizardAnswers={wizardAnswers}
                role={role}
                classification={classification}
              />
            )}
          </div>
        </div>
      </div>

      {/* Context form */}
      <ReportContextForm ctx={ctx} setCtx={setCtx} />

      {/* Generate button */}
      {!generated && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Het rapport wordt gegenereerd op basis van uw antwoorden in de toetsingswizard en
            de ingevulde contextgegevens hierboven.
          </p>
          <button
            onClick={handleGenerate}
            className="bg-[#2D5A87] text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-[#1e4060] transition-colors shadow-md"
          >
            📄 Rapport genereren
          </button>
        </div>
      )}

      {/* Generated report */}
      {generated && (
        <>
          {/* Section navigation */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3 sticky top-0 z-30">
            <div className="flex flex-wrap gap-1.5">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeSection === s.id
                      ? 'bg-[#2D5A87] text-white shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Report sections */}
          <div className="space-y-6" id="report-content">
            {sections.map((s) => {
              const SectionComponent = s.component;
              return (
                <div key={s.id} id={`report-${s.id}`}>
                  <SectionComponent
                    ctx={ctx}
                    wizardAnswers={wizardAnswers}
                    classification={classification}
                    role={role}
                    answers={wizardAnswers}
                  />
                </div>
              );
            })}
          </div>

          {/* Print hint */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 text-center text-xs text-slate-500">
            Dit rapport kan worden afgedrukt (Ctrl+P) of worden gedownload via de PDF-knop bovenaan.
            <br />
            Het PDF-formaat is geoptimaliseerd voor A4.
          </div>
        </>
      )}
    </div>
  );
}
