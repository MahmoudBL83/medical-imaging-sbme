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
    <div className="pb-20 fade-up max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">
      {/* Sticky Navigation Sidebar */}
      <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <div className="text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Chapter 7</span>
          </div>

          <nav className="space-y-3 border-l border-slate-800 pl-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Contents</h4>
            <a href="#introduction" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">7.1 Introduction</a>
            <a href="#nomenclature" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">7.2 Nomenclature</a>
            <a href="#decay" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">7.3 Radioactive Decay</a>
            <a href="#modes" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">7.4 Modes of Decay</a>
            <a href="#statistics" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">7.5 Statistics of Decay</a>
            <a href="#radiotracers" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">7.6 Radiotracers</a>
            <a href="#practice" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">7.7 Practice Problems</a>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
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
