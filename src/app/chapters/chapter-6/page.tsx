'use client';

import Link from 'next/link';
import { Target, Sigma } from 'lucide-react';
import Section1_Intro from './components/Section1_Intro';
import Section2_Instrumentation from './components/Section2_Instrumentation';
import Section3_Formation from './components/Section3_Formation';
import Section4_Noise from './components/Section4_Noise';
import Section5_Practice from './components/Section5_Practice';

export default function Chapter6() {
  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <main className="flex-1 min-w-0 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 stagger">
          <span className="claude-kicker text-teal-500">Chapter 6</span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
            Computed Tomography
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            This chapter explores X-ray Computed Tomography (CT). By acquiring 1-D projections from multiple angles and employing the Mathematics of the Radon Transform, CT reconstructs 2-D cross-sectional slices, thereby eliminating the overlapping structure artifacts that plague conventional radiography.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="claude-chip">
              <Target className="w-4 h-4 mr-2 inline text-pink-400" /> Scanner Generations
            </span>
            <span className="claude-chip">
              <Sigma className="w-4 h-4 mr-2 inline text-blue-400" /> Radon Transform
            </span>
          </div>
        </header>

        {/* Components */}
        <div className="space-y-24">
          <Section1_Intro />
          <Section2_Instrumentation />
          <Section3_Formation />
          <Section4_Noise />
          <Section5_Practice />
        </div>
      </main>
    </div>
  );
}
