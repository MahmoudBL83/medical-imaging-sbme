'use client';

import Link from 'next/link';
import { BookOpen, Target, HelpCircle, Calculator, AlertTriangle, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Medical Imaging Study Guide</h1>
        <p className="text-xl text-slate-400">Chapters 1-9 | Prince & Links</p>
        <p className="text-sm text-slate-500 mt-2">Comprehensive exam preparation for 4th-year Systems & Biomedical Engineering</p>
      </header>

      
      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/chapters/chapter-2" className="group">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-600 transition-colors">
            <BookOpen className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Chapter 2</h3>
            <p className="text-slate-400 text-sm">Signals and Systems - The mathematical foundation</p>
            <span className="text-blue-400 text-sm mt-2 inline-block group-hover:underline">Start studying →</span>
          </div>
        </Link>

        <Link href="/chapters/chapter-3" className="group">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-600 transition-colors">
            <Target className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Chapter 3</h3>
            <p className="text-slate-400 text-sm">Image Quality - Contrast, Resolution, Noise, SNR</p>
            <span className="text-purple-400 text-sm mt-2 inline-block group-hover:underline">Start studying →</span>
          </div>
        </Link>

        <Link href="/chapters/chapter-1" className="group">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-green-600 transition-colors">
            <BookOpen className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Chapter 1</h3>
            <p className="text-slate-400 text-sm">Introduction - History and modalities overview</p>
            <span className="text-green-400 text-sm mt-2 inline-block group-hover:underline">Start studying →</span>
          </div>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-400" />
            Quick Reference
          </h3>
          <div className="space-y-2">
            <Link href="/formulas" className="block text-slate-400 hover:text-white text-sm py-1">→ All Formulas by Chapter</Link>
            <Link href="/glossary" className="block text-slate-400 hover:text-white text-sm py-1">→ Key Terms & Definitions</Link>
            <Link href="/high-yield" className="block text-slate-400 hover:text-white text-sm py-1">→ High-Yield Exam Points</Link>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Exam Prep
          </h3>
          <div className="space-y-2">
            <Link href="/common-mistakes" className="block text-slate-400 hover:text-white text-sm py-1">→ Common Mistakes & Traps</Link>
            <Link href="/practice-questions" className="block text-slate-400 hover:text-white text-sm py-1">→ Practice Questions</Link>
          </div>
        </div>
      </div>

      <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-amber-400 mb-2">⚠️ Doctor's Exam Style Alert</h3>
        <p className="text-slate-300 text-sm">
          Based on quiz analysis, expect MATHEMATICAL PROBLEM SOLVING questions involving:
          Radon transforms, Fourier transforms, signal sketching, line integrals, and derivations.
          Focus on understanding the mathematical foundations in Chapters 2 & 3!
        </p>
      </div>
    </div>
  );
}