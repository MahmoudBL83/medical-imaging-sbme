'use client';

import { ListChecks } from 'lucide-react';

interface QuickReviewProps {
  items: string[];
}

export default function QuickReview({ items }: QuickReviewProps) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 my-4">
      <h4 className="text-sm font-semibold text-slate-400 mb-3 flex items-center gap-2">
        <ListChecks className="w-4 h-4" />
        Quick Review
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="text-blue-400 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}