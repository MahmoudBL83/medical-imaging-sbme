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
    <div className="pb-20 fade-up max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">
      {/* Sticky Navigation Sidebar */}
      <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <div className="text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Chapter 8</span>
          </div>

          <nav className="space-y-3 border-l border-slate-800 pl-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Contents</h4>
            <a href="#introduction" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">8.1 Introduction</a>
            <a href="#instrumentation" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">8.2 Instrumentation</a>
            <a href="#formation" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">8.3 Image Formation</a>
            <a href="#quality" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">8.4 Image Quality</a>
            <a href="#practice" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">8.5 Practice Problems</a>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
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
