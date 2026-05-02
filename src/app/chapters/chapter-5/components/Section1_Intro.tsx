import React from 'react';
import { Camera, SunDim, Layers } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section1_Intro() {
  return (
    <section id="introduction" className="space-y-6 stagger scroll-mt-24">
      <span className="claude-kicker text-orange-400">Section 5.1</span>
      <h2 className="text-3xl font-bold text-white">Introduction to Projection Radiography</h2>

      <div className="claude-surface p-8 mb-8">
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Projection radiography (conventional radiography) is the most commonly used method of medical imaging utilizing x-rays. It represents a projection of the three-dimensional volume of the body onto a two-dimensional imaging surface. 
        </p>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Conceptually, it is useful to think of a projection radiograph as a <strong>shadow cast by a semitransparent body illuminated by x-rays</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                 <Camera className="w-4 h-4 text-orange-400" /> Advantages
              </h3>
              <ul className="text-sm text-slate-400 space-y-2">
                 <li>• Very short exposure time (0.1 seconds)</li>
                 <li>• Large area imaging (e.g., 14 x 17 inches)</li>
                 <li>• High spatial resolution and low cost</li>
              </ul>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                 <SunDim className="w-4 h-4 text-yellow-400" /> Low Dose
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                 A chest x-ray requires about 3-4 mR, which is roughly equivalent to only one-hundredth of the annual background radiation dose.
              </p>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl border-l-4 border-l-red-500">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                 <Layers className="w-4 h-4 text-red-400" /> Major Limitation
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                 Lack of depth resolution. Superimpositions of shadows from overlying and underlying tissues hide details and limit contrast.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
