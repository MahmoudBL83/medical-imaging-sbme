'use client';

import Link from 'next/link';
import { Camera, Layers } from 'lucide-react';
import Section1_Intro from './components/Section1_Intro';
import Section2_Instrumentation from './components/Section2_Instrumentation';
import Section3_Formation from './components/Section3_Formation';
import Section4_Noise from './components/Section4_Noise';
import Section5_Practice from './components/Section5_Practice';

export default function Chapter5() {
  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <main className="flex-1 min-w-0 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 stagger">
          <span className="claude-kicker text-orange-500">Chapter 5</span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
            Projection Radiography
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            This chapter explores conventional radiography, the most commonly used medical imaging modality. We examine the instrumentation, the physics of image formation, geometric artifacts, and the effects of noise and scatter on image quality.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="claude-chip">
              <Camera className="w-4 h-4 mr-2 inline text-orange-400" /> Instrumentation
            </span>
            <span className="claude-chip">
              <Layers className="w-4 h-4 mr-2 inline text-teal-400" /> Image Formation
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
