import React from 'react';
import { Beaker, ScanEye, Atom } from 'lucide-react';

export default function Section1_Intro() {
  return (
    <section id="introduction" className="space-y-6 stagger scroll-mt-24">
      <span className="claude-kicker text-indigo-400">Section 7.1</span>
      <h2 className="text-3xl font-bold text-white">Introduction to Nuclear Medicine</h2>

      <div className="claude-surface p-8 mb-8">
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Unlike projection radiography or CT, which are transmission imaging modalities that rely on external x-ray beams to produce images based on tissue attenuation, nuclear medicine is an <strong>emission imaging</strong> modality.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:bg-slate-800/80 transition-colors">
              <h3 className="text-indigo-400 font-bold text-sm mb-3 flex items-center gap-2">
                 <Beaker className="w-4 h-4" /> Radiopharmaceuticals
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                 Nuclear medicine relies on radiopharmaceuticals (radiotracers) introduced into the body in trace quantities. They consist of a pharmaceutical component that traces specific physiological or biochemical functions, and a radioactive atom that emits radiation.
              </p>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:bg-slate-800/80 transition-colors">
              <h3 className="text-indigo-400 font-bold text-sm mb-3 flex items-center gap-2">
                 <ScanEye className="w-4 h-4" /> Emission Imaging
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                 When the radioactive atom undergoes spontaneous radioactive decay, radiation is emitted from within the patient. External imaging devices (like scintillation cameras) record these emissions to produce planar or tomographic images of physiological function.
              </p>
           </div>
        </div>

        <div className="mt-8 border-l-4 border-emerald-500 bg-emerald-950/20 p-6 rounded-r-lg">
           <h4 className="text-emerald-400 font-bold flex items-center gap-2 mb-2">
              <Atom className="w-4 h-4" /> Core Principle
           </h4>
           <p className="text-sm text-emerald-200">
             Because each different radiotracer traces a completely different physiological or biochemical function, the fundamental information contained in nuclear medicine images changes completely depending on the specific tracer used, unlike CT or X-ray where the information is always electron density/attenuation.
           </p>
        </div>
      </div>
    </section>
  );
}
