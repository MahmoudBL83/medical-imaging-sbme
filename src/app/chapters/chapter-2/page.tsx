'use client';

import Link from 'next/link';
import { Network, Waves } from 'lucide-react';
import Section1_Signals from './components/Section1_Signals';
import Section2_Systems from './components/Section2_Systems';
import Section3_Fourier from './components/Section3_Fourier';
import Section4_Practice from './components/Section4_Practice';

export default function Chapter2() {
  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <main className="flex-1 min-w-0 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 stagger">
          <span className="claude-kicker text-teal-500">Chapter 2</span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
            Signals and Systems
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Signals are mathematical functions that model physical processes, and systems respond to these signals to create new ones (images). By treating medical imaging instruments as Linear Shift-Invariant (LSI) systems, we can model their behavior entirely using their Point Spread Function (PSF) and Convolution.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="claude-chip">
              <Network className="w-4 h-4 mr-2 inline text-purple-400" /> LSI Systems
            </span>
            <span className="claude-chip">
              <Waves className="w-4 h-4 mr-2 inline text-orange-400" /> Fourier Transforms
            </span>
          </div>
        </header>

        {/* Components */}
        <div className="space-y-24">
          <Section1_Signals />
          <Section2_Systems />
          <Section3_Fourier />
          <Section4_Practice />
        </div>
      </main>
    </div>
  );
}
