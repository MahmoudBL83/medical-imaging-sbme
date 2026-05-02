import React from 'react';
import { Lightbulb, Radiation, ArrowUpRight } from 'lucide-react';

export default function Section1_Intro() {
  return (
    <section id="introduction" className="space-y-6 stagger scroll-mt-24">
      <span className="claude-kicker text-orange-400">Section 4.1</span>
      <h2 className="text-3xl font-bold text-white">Introduction</h2>

      <div className="claude-surface p-8 mb-8">
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          This chapter provides an introduction to the physics behind x-ray imaging modalities, specifically projection radiography and computed tomography (CT). <strong>Note:</strong> These modalities do NOT involve radioactivity.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl border-t-2 border-t-orange-500">
              <h3 className="text-orange-400 font-bold text-sm mb-3 flex items-center gap-2">
                 <Lightbulb className="w-4 h-4" /> Discovery of X-Rays
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                 Discovered in 1895 by Wilhelm Röntgen while working with a Crookes tube. He named them "x-rays" because of their unknown origin. The first radiograph was of his wife's hand, marking the birth of medical imaging.
              </p>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl border-t-2 border-t-yellow-500">
              <h3 className="text-yellow-400 font-bold text-sm mb-3 flex items-center gap-2">
                 <Radiation className="w-4 h-4" /> Ionizing Radiation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                 X-rays are electromagnetic (EM) waves whose frequencies are much higher than visible light. They are a form of <strong>ionizing radiation</strong>—meaning they carry enough energy to eject electrons from atoms.
              </p>
           </div>
        </div>

        <div className="mt-8 flex items-start gap-4 p-4 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-400 italic">
           <ArrowUpRight className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
           <p>
             Other forms of ionizing radiation include particulate radiation (e.g., electron beams used to create x-rays) and gamma rays. Gamma rays behave exactly like x-rays when propagating through tissue, so understanding x-rays is critical for understanding nuclear medicine as well.
           </p>
        </div>
      </div>
    </section>
  );
}
