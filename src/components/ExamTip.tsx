'use client';

import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface ExamTipProps {
  type?: 'trap' | 'remember' | 'common-mistake' | 'tip';
  title?: string;
  children: React.ReactNode;
}

export default function ExamTip({ type = 'tip', title, children }: ExamTipProps) {
  const configs = {
    trap: {
      icon: AlertTriangle,
      bg: 'bg-red-900/20',
      border: 'border-red-600',
      titleColor: 'text-red-400',
      iconColor: 'text-red-400'
    },
    remember: {
      icon: CheckCircle,
      bg: 'bg-blue-900/20',
      border: 'border-blue-600',
      titleColor: 'text-blue-400',
      iconColor: 'text-blue-400'
    },
    'common-mistake': {
      icon: AlertTriangle,
      bg: 'bg-amber-900/20',
      border: 'border-amber-600',
      titleColor: 'text-amber-400',
      iconColor: 'text-amber-400'
    },
    tip: {
      icon: Info,
      bg: 'bg-emerald-900/20',
      border: 'border-emerald-600',
      titleColor: 'text-emerald-400',
      iconColor: 'text-emerald-400'
    }
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className={`${config.bg} border-l-4 ${config.border} p-4 rounded-r-lg my-4`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${config.iconColor}`} />
        <span className={`font-semibold ${config.titleColor}`}>
          {title || (type === 'trap' ? 'Exam Trap' : type === 'remember' ? 'Remember' : type === 'common-mistake' ? 'Common Mistake' : 'Tip')}
        </span>
      </div>
      <div className="text-slate-300 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}