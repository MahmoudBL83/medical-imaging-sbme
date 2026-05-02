'use client';

import Link from 'next/link';
import { AreaChart, Search } from 'lucide-react';
import Section1_Intro from './components/Section1_Intro';
import Section2_Contrast from './components/Section2_Contrast';
import Section3_Resolution from './components/Section3_Resolution';
import Section4_Noise from './components/Section4_Noise';
import Section5_SNR from './components/Section5_SNR';
import Section6_Sampling from './components/Section6_Sampling';
import Section7_Effects from './components/Section7_Effects';
import Section8_Accuracy from './components/Section8_Accuracy';
import Section9_Practice from './components/Section9_Practice';

export default function Chapter3() {
  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">
      {/* Sticky Navigation Sidebar */}
      <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <div className="text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Chapter 3</span>
          </div>

          <nav className="space-y-3 border-l border-slate-800 pl-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Contents</h4>
            <a href="#introduction" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">3.1 Introduction</a>
            <a href="#contrast" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">3.2 Contrast</a>
            <a href="#resolution" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">3.3 Resolution</a>
            <a href="#noise" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">3.4 Noise</a>
            <a href="#snr" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">3.5 Signal-to-Noise Ratio</a>
            <a href="#sampling" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">3.6 Sampling</a>
            <a href="#effects" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">3.7 Other Effects</a>
            <a href="#accuracy" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">3.8 Accuracy</a>
            <a href="#practice" className="block text-sm text-slate-400 hover:text-teal-400 transition-colors">3.9 Practice Problems</a>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 stagger">
          <span className="claude-kicker text-teal-500">Chapter 3</span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
            Image Quality
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            How do we objectively define a "good" image? We explore the mathematical frameworks 
            measuring Contrast, Resolution, Noise, and the clinical tradeoff (ROC Curves) 
            involved in diagnosing truth.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="claude-chip">
              <AreaChart className="w-4 h-4 mr-2 inline text-teal-400" /> Modulation Transfer (MTF)
            </span>
            <span className="claude-chip">
              <Search className="w-4 h-4 mr-2 inline text-emerald-400" /> Signal-to-Noise Ratio (SNR)
            </span>
          </div>
        </header>

        {/* Components */}
        <div className="space-y-24">
          <Section1_Intro />
          <Section2_Contrast />
          <Section3_Resolution />
          <Section4_Noise />
          <Section5_SNR />
          <Section6_Sampling />
          <Section7_Effects />
          <Section8_Accuracy />
          <Section9_Practice />
        </div>
      </main>
    </div>
  );
}
