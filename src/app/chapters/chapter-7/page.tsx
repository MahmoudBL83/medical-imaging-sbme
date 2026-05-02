'use client';

import Link from 'next/link';
import { Activity, Beaker } from 'lucide-react';
import Section1_Intro from './components/Section1_Intro';
import Section2_Nomenclature from './components/Section2_Nomenclature';
import Section3_Decay from './components/Section3_Decay';
import Section4_Modes from './components/Section4_Modes';
import Section5_Statistics from './components/Section5_Statistics';
import Section6_Radiotracers from './components/Section6_Radiotracers';
import Section7_Practice from './components/Section7_Practice';

export default function Chapter7() {
  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <main className="flex-1 min-w-0 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 stagger">
          <span className="claude-kicker text-indigo-500">Chapter 7</span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
            The Physics of Nuclear Medicine
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Nuclear medicine relies on radiopharmaceuticals introduced into the body to trace the spatial and temporal distribution of the underlying physiological and biochemical processes. We explore the physics of radioactive decay that make this possible.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="claude-chip">
              <Activity className="w-4 h-4 mr-2 inline text-indigo-400" /> Emission Imaging
            </span>
            <span className="claude-chip">
              <Beaker className="w-4 h-4 mr-2 inline text-emerald-400" /> Radiotracers
            </span>
          </div>
        </header>

        {/* Components */}
        <div className="space-y-24">
          <Section1_Intro />
          <Section2_Nomenclature />
          <Section3_Decay />
          <Section4_Modes />
          <Section5_Statistics />
          <Section6_Radiotracers />
          <Section7_Practice />
        </div>
      </main>
    </div>
  );
}
