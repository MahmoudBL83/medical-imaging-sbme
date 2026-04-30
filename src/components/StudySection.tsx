'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb, Eye, Cpu, GraduationCap } from 'lucide-react';

interface StudySectionProps {
  id: string;
  title: string;
  layer1?: string;
  layer2?: React.ReactNode;
  layer3?: React.ReactNode;
  layer4?: React.ReactNode;
}

export default function StudySection({ id, title, layer1, layer2, layer3, layer4 }: StudySectionProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id={id} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/50 transition-colors"
      >
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {expanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>

      {expanded && (
        <div className="p-4 pt-0 space-y-6">
          {/* Layer 1: Simple Intuition */}
          {layer1 && (
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Simple Intuition
              </h4>
              <p className="text-slate-300 leading-relaxed">{layer1}</p>
            </div>
          )}

          {/* Layer 2: Visual Explanation */}
          {layer2 && (
            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Visual Explanation
              </h4>
              <div className="text-slate-300">{layer2}</div>
            </div>
          )}

          {/* Layer 3: Technical Depth */}
          {layer3 && (
            <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
              <h4 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Technical Depth
              </h4>
              <div className="text-slate-300">{layer3}</div>
            </div>
          )}

          {/* Layer 4: Exam Focus */}
          {layer4 && (
            <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <h4 className="text-sm font-semibold text-amber-400 mb-2 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Exam Focus
              </h4>
              <div className="text-slate-300">{layer4}</div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}