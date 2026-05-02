'use client';

import Link from 'next/link';
import { Rotate3D, ActivitySquare } from 'lucide-react';
import Section1_Instrumentation from './components/Section1_Instrumentation';
import Section2_Formation from './components/Section2_Formation';
import Section3_Quality from './components/Section3_Quality';
import Section4_Practice from './components/Section4_Practice';

export default function Chapter9() {
  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <main className="flex-1 min-w-0 space-y-12">
        {/* Header */}
        <header className="border-b border-slate-800 pb-8 stagger">
          <span className="claude-kicker text-teal-500">Chapter 9</span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
            Emission Computed Tomography
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            By acquiring projections from multiple angles around the patient, Emission Computed Tomography (ECT) reconstructs fully 3-D volumes of radiotracer distribution, eliminating the overlap issues of planar scintigraphy. This chapter covers the physics, instrumentation, and image formation of both SPECT and PET.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="claude-chip">
              <Rotate3D className="w-4 h-4 mr-2 inline text-indigo-400" /> SPECT
            </span>
            <span className="claude-chip">
              <ActivitySquare className="w-4 h-4 mr-2 inline text-purple-400" /> PET (Coincidence)
            </span>
          </div>
        </header>

        {/* Components */}
        <div className="space-y-24">
          <Section1_Instrumentation />
          <Section2_Formation />
          <Section3_Quality />
          <Section4_Practice />
        </div>
      </main>
    </div>
  );
}
