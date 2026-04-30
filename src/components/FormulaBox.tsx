'use client';

import { Calculator } from 'lucide-react';

interface FormulaBoxProps {
  formula: string;
  name?: string;
  symbols?: { symbol: string; meaning: string }[];
  intuition?: string;
  whenToUse?: string;
  assumptions?: string[];
}

export default function FormulaBox({ 
  formula, 
  name, 
  symbols, 
  intuition, 
  whenToUse,
  assumptions 
}: FormulaBoxProps) {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden my-4">
      <div className="bg-slate-700 px-4 py-2 flex items-center gap-2">
        <Calculator className="w-4 h-4 text-blue-400" />
        {name && <span className="font-semibold text-white text-sm">{name}</span>}
      </div>
      <div className="p-4">
        <div className="bg-slate-900 p-4 rounded-lg font-mono text-center text-lg text-blue-300 overflow-x-auto">
          {formula}
        </div>
        
        {symbols && symbols.length > 0 && (
          <div className="mt-4">
            <h5 className="text-xs font-semibold text-slate-400 uppercase mb-2">Symbols:</h5>
            <ul className="space-y-1">
              {symbols.map((s, i) => (
                <li key={i} className="text-sm text-slate-300">
                  <code className="bg-slate-700 px-1.5 py-0.5 rounded text-blue-300 font-mono">{s.symbol}</code> = {s.meaning}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {intuition && (
          <div className="mt-4 bg-blue-900/20 border border-blue-800 rounded p-3">
            <h5 className="text-xs font-semibold text-blue-400 mb-1">💡 Intuition</h5>
            <p className="text-sm text-slate-300">{intuition}</p>
          </div>
        )}
        
        {whenToUse && (
          <div className="mt-4 bg-emerald-900/20 border border-emerald-800 rounded p-3">
            <h5 className="text-xs font-semibold text-emerald-400 mb-1">When to Use</h5>
            <p className="text-sm text-slate-300">{whenToUse}</p>
          </div>
        )}
        
        {assumptions && assumptions.length > 0 && (
          <div className="mt-4 bg-amber-900/20 border border-amber-800 rounded p-3">
            <h5 className="text-xs font-semibold text-amber-400 mb-1">⚠️ Assumptions</h5>
            <ul className="list-disc list-inside text-sm text-slate-300">
              {assumptions.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}