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
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
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
