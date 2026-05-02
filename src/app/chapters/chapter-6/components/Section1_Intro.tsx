import React from 'react';
import { Layers, Cuboid, Disc } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section1_Intro() {
  return (
    <section id="introduction" className="space-y-6 stagger scroll-mt-24">
      <span className="claude-kicker text-blue-400">Section 6.1</span>
      <h2 className="text-3xl font-bold text-white">Introduction to Computed Tomography</h2>

      <div className="claude-surface p-8 mb-8 border-l-4 border-l-blue-500">
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A tomogram is an image of a single slice or plane within the body. X-ray computed tomography (CT) generates images of these slices, <strong>eliminating the artifacts of overlaying structures</strong> that dominate conventional radiographs.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                 <Disc className="w-4 h-4 text-blue-400" /> The Basic Mechanism
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                 Imagine taking a series of conventional x-rays while rotating the patient slightly between each exposure. Each 1-D projection line from these views contains information about an axial cross-section from a different angle.
              </p>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                 <Layers className="w-4 h-4 text-indigo-400" /> The Mathematics
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                 The mathematical transformation that maps a 2-D object to a collection of 1-D projections over many angles is called the <strong>2-D Radon transform</strong>. CT reconstructs the slice by taking the inverse Radon transform.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
