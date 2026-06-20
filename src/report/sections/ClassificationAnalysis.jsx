import React from 'react';
import { STEP_ANALYSIS, getClassification } from '../content/classificationTemplates';
import { BADGE_CLASSES, BADGE_LABELS } from '../styles/reportStyles';

export default function ClassificationAnalysis({ answers, classification }) {
  const bClass = BADGE_CLASSES[classification] || BADGE_CLASSES.geen_ai;
  const bLabel = BADGE_LABELS[classification] || 'Onbekend';

  const relevantSteps = [
    'isMachine',
    'hasAutonomy',
    'hasInference',
    'generatesOutput',
    ...(answers.emotionRecognition ? ['emotionRecognition'] : []),
    ...(answers.biometricCategorization ? ['biometricCategorization'] : []),
    ...(answers.socialScoring ? ['socialScoring'] : []),
    ...(answers.subliminalManipulation ? ['subliminalManipulation'] : []),
    ...(answers.evaluationSystem ? ['evaluationSystem'] : []),
    ...(answers.admissionSystem ? ['admissionSystem'] : []),
    ...(answers.levelAdvancement ? ['levelAdvancement'] : []),
    ...(answers.proctoringSystem ? ['proctoringSystem'] : []),
    'isAdministrativeException',
    'humanOversight',
    'biasTested',
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-4">
        Classificatieanalyse
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left p-2 font-semibold text-slate-600 w-2/5">Vraag</th>
              <th className="text-center p-2 font-semibold text-slate-600 w-1/6">Antwoord</th>
              <th className="text-left p-2 font-semibold text-slate-600">Juridische betekenis</th>
              <th className="text-left p-2 font-semibold text-slate-600 w-1/6">Bron</th>
            </tr>
          </thead>
          <tbody>
            {relevantSteps.map((key) => {
              const step = STEP_ANALYSIS[key];
              if (!step) return null;
              const answer = answers[key];
              const isYes = answer === 'ja';
              const isNo = answer === 'nee';
              return (
                <tr key={key} className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="p-2 text-slate-700">{step.vraag}</td>
                  <td className="p-2 text-center">
                    {isYes ? (
                      <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold">Ja</span>
                    ) : isNo ? (
                      <span className="inline-block px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-[10px] font-bold">Nee</span>
                    ) : (
                      <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-400 rounded text-[10px]">—</span>
                    )}
                  </td>
                  <td className="p-2 text-slate-600">
                    {isYes ? step.toelichtingJa : isNo ? step.toelichtingNee : 'Niet beantwoord'}
                  </td>
                  <td className="p-2 text-slate-500 font-mono text-[10px]">{step.bron}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 uppercase font-semibold">Eindclassificatie</span>
          <p className="text-sm font-bold text-slate-800 mt-0.5">{bLabel}</p>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${bClass}`}>
          {bLabel}
        </span>
      </div>
    </div>
  );
}
