import React from 'react';
import { TEMPLATES } from '../content/classificationTemplates';
import { BADGE_CLASSES, BADGE_LABELS } from '../styles/reportStyles';

export default function ExecutiveSummary({ classification, answers }) {
  const tpl = TEMPLATES[classification] || TEMPLATES.geen_ai;
  const bClass = BADGE_CLASSES[classification] || BADGE_CLASSES.geen_ai;
  const bLabel = BADGE_LABELS[classification] || 'Onbekend';

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
  const fitsHighRisk =
    answers.admissionSystem === 'ja' ||
    answers.evaluationSystem === 'ja' ||
    answers.levelAdvancement === 'ja' ||
    answers.proctoringSystem === 'ja';
  const isHighRisk = fitsHighRisk && !answers.isAdministrativeException;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-4">
        Management samenvatting
      </h2>

      <div className="flex items-center space-x-3 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${bClass}`}>
          {bLabel}
        </span>
        <span className="text-sm text-slate-600">{tpl.titel}</span>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed mb-4">{tpl.samenvatting}</p>

      <div className="space-y-3 mb-4">
        <h3 className="text-sm font-bold text-slate-700">Kernbevindingen</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { label: 'AI-systeem (Art. 3)', value: isAISystem ? 'Ja' : 'Nee', ok: isAISystem },
            { label: 'Verboden praktijk (Art. 5)', value: isForbidden ? 'Ja' : 'Nee', ok: !isForbidden },
            { label: 'Hoog risico (Art. 6-7)', value: isHighRisk ? 'Ja' : 'Nee', ok: !isHighRisk },
            { label: 'Menselijk toezicht (Art. 14)', value: answers.humanOversight === 'ja' ? 'Ja' : 'Nee', ok: answers.humanOversight === 'ja' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-2 bg-white rounded-lg border border-slate-100 text-xs">
              <span className="text-slate-600">{item.label}</span>
              <span className={`font-bold ${item.ok ? 'text-emerald-600' : 'text-rose-600'}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-bold text-slate-700 mb-2">Top-3 prioritaire acties</h3>
        <ol className="space-y-1.5">
          {tpl.topActies.slice(0, 3).map((a, i) => (
            <li key={i} className="flex items-start space-x-2 text-xs">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2D5A87] text-white text-[10px] font-bold shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-slate-700">{a}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl">
        <h4 className="text-xs font-bold text-sky-800 mb-1">Volgende stap</h4>
        <p className="text-xs text-sky-700 leading-relaxed">{tpl.volgendeStap}</p>
      </div>
    </div>
  );
}
