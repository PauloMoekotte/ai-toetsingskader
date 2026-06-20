import React from 'react';
import { TEMPLATES } from '../content/classificationTemplates';

export default function ComplianceRoadmap({ classification }) {
  const tpl = TEMPLATES[classification] || TEMPLATES.geen_ai;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 print:break-after-page">
      <h2 className="text-lg font-bold text-slate-800 border-l-4 border-[#2D5A87] pl-3 mb-4">
        Compliance roadmap
      </h2>
      <p className="text-xs text-slate-500 mb-4">
        Gefaseerd stappenplan op basis van de classificatie als <strong>{tpl.titel.toLowerCase()}</strong>.
      </p>

      <div className="space-y-4">
        {tpl.roadmap.map((fase, fi) => (
          <div key={fi} className="border border-slate-200 rounded-xl overflow-hidden">
            <div className={`px-4 py-2 font-bold text-sm ${
              fi === 0
                ? 'bg-rose-50 text-rose-800 border-b border-rose-200'
                : fi === 1
                ? 'bg-amber-50 text-amber-800 border-b border-amber-200'
                : fi === 2
                ? 'bg-emerald-50 text-emerald-800 border-b border-emerald-200'
                : 'bg-slate-50 text-slate-700 border-b border-slate-200'
            }`}>
              {fase.fase}
            </div>
            <div className="p-3 space-y-1.5">
              {fase.acties.map((actie, ai) => (
                <div key={ai} className="flex items-start space-x-2 text-sm">
                  <span className="mt-0.5 w-4 h-4 rounded-full border-2 border-slate-300 flex items-center justify-center shrink-0">
                    <span className="text-[8px] text-slate-400 font-bold">{ai + 1}</span>
                  </span>
                  <span className="text-slate-700">{actie}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
        <strong>Tip:</strong> Gebruik dit stappenplan als input voor uw projectplanning.
        Voeg specifieke data en verantwoordelijken toe per actie.
      </div>
    </div>
  );
}
