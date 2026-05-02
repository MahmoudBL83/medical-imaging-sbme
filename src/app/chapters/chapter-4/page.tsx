'use client';

import Link from 'next/link';
import { Radiation, Zap } from 'lucide-react';
import Section1_Intro from './components/Section1_Intro';
import Section2_Ionization from './components/Section2_Ionization';
import Section3_Forms from './components/Section3_Forms';
import Section4_Properties from './components/Section4_Properties';
import Section5_Attenuation from './components/Section5_Attenuation';
import Section6_Dosimetry from './components/Section6_Dosimetry';
import Section7_Practice from './components/Section7_Practice';

export default function Chapter4() {
  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">
      {/* Sticky Navigation Sidebar */}
      <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <div className="text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Chapter 4</span>
          </div>

          <nav className="space-y-3 border-l border-slate-800 pl-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Contents</h4>
            <a href="#introduction" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">4.1 Introduction</a>
            <a href="#ionization" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">4.2 Ionization</a>
            <a href="#forms" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">4.3 Forms of Radiation</a>
            <a href="#properties" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">4.4 Nature & Properties</a>
            <a href="#attenuation" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">4.5 Attenuation of EM</a>
            <a href="#dosimetry" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">4.6 Radiation Dosimetry</a>
            <a href="#practice" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">4.7 Practice Problems</a>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 stagger">
          <span className="claude-kicker text-yellow-500">Chapter 4</span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
            Physics of Radiography
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            This chapter provides the fundamental physics behind x-ray imaging modalities like projection radiography and computed tomography. We explore atomic ionization, electromagnetic interactions, attenuation, and dosimetry.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="claude-chip">
              <Zap className="w-4 h-4 mr-2 inline text-yellow-400" /> Ionization
            </span>
            <span className="claude-chip">
              <Radiation className="w-4 h-4 mr-2 inline text-orange-400" /> Electromagnetic Radiation
            </span>
          </div>
        </header>

        {/* Components */}
        <div className="space-y-24">
          <Section1_Intro />
          <Section2_Ionization />
          <Section3_Forms />
          <Section4_Properties />
          <Section5_Attenuation />
          <Section6_Dosimetry />
          <Section7_Practice />
        </div>
      </main>
    </div>
  );
}
