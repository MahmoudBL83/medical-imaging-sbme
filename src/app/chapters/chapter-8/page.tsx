'use client';

import Link from 'next/link';
import { Target, Activity } from 'lucide-react';
import Section1_Intro from './components/Section1_Intro';
import Section2_Instrumentation from './components/Section2_Instrumentation';
import Section3_Formation from './components/Section3_Formation';
import Section4_Quality from './components/Section4_Quality';
import Section5_Practice from './components/Section5_Practice';

export default function Chapter8() {
  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <main className="flex-1 min-w-0 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 stagger">
          <span className="claude-kicker text-teal-500">Chapter 8</span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
            Planar Scintigraphy
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Unlike conventional X-ray imaging where an external source transmits radiation through the body, nuclear medicine is an emission modality. In Planar Scintigraphy, the patient is injected with a radiotracer and acts as the radiation source. An Anger scintillation camera is then used to map the functional physiology of the patient.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="claude-chip">
              <Target className="w-4 h-4 mr-2 inline text-green-400" /> Emission Modality
            </span>
            <span className="claude-chip">
              <Activity className="w-4 h-4 mr-2 inline text-red-400" /> Functional Physiology
            </span>
          </div>
        </header>

        {/* Components */}
        <div className="space-y-24">
          <Section1_Intro />
          <Section2_Instrumentation />
          <Section3_Formation />
          <Section4_Quality />
          <Section5_Practice />
        </div>
      </main>
    </div>
  );
}
