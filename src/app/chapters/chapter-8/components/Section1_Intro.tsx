import React from 'react';
import { Target, AlertCircle } from 'lucide-react';

export default function Section1_Intro() {
  return (
    <section id="introduction" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-green-400">Section 8.1</span>
        <h2 className="text-3xl font-bold text-white mt-2">Introduction to Planar Scintigraphy</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Nuclear medicine imaging relies on radiotracers labeled with radioactive atoms that decay and emit gamma photons from within the patient. Planar scintigraphy is the foundational 2-D projection method of nuclear imaging, utilizing the Anger scintillation camera to capture these emissions.
        </p>
      </header>

      <div className="claude-surface p-8 border-l-4 border-l-green-500 relative overflow-hidden">
         <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-400" /> Emission vs. Transmission
         </h3>
         <p className="text-slate-300 text-sm leading-relaxed mb-4">
           Unlike X-ray imaging (which is a <strong>transmission</strong> modality where an external source shines through the patient), nuclear medicine is an <strong>emission</strong> modality. The patient <em>is</em> the source. 
         </p>
         <div className="bg-slate-900 border border-slate-700 p-4 rounded text-sm text-slate-300 mb-4">
            <div className="flex items-center gap-2 mb-2">
               <AlertCircle className="w-4 h-4 text-green-400" /> <strong>Key Distinctions:</strong>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
               <li>There is no external X-ray tube.</li>
               <li>Photons are emitted isotropically (in all directions) from the radiotracer distribution inside the body.</li>
               <li>The imaging system maps functional physiology (where the tracer goes) rather than pure structural anatomy.</li>
            </ul>
         </div>
      </div>
    </section>
  );
}
