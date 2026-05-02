import React from 'react';
import { HelpCircle, AlertCircle, BookOpen } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section4_Practice() {
  return (
    <section id="practice" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-pink-400">Section 9.4</span>
        <h2 className="text-3xl font-bold text-white mt-2">Summary & Exam Practice</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Test your understanding of emission tomography physics, coincidence detection, and attenuation correction.
        </p>
      </header>

      {/* Key Concepts Summary */}
      <div className="border-l-4 border-pink-500 bg-pink-950/20 p-8 rounded-r-xl shadow-lg mb-8">
         <h3 className="text-xl font-bold text-pink-400 flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" /> Core Takeaways
         </h3>
         <ul className="space-y-3 text-sm text-pink-100">
           <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong>SPECT:</strong> Uses a rotating Anger camera with physical lead collimators. Attenuation is highly depth-dependent and difficult to correct analytically.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong>PET:</strong> Uses positron emitters (annihilation into dual 511 keV photons). Eliminates lead collimators in favor of electronic coincidence detection, increasing sensitivity by 100x-1000x over SPECT.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong>PET Attenuation:</strong> The probability of coincidence detection depends only on the total tissue thickness along the LOR, making exact attenuation correction possible via a transmission scan.</span>
           </li>
         </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Problem 1 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 9.3
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-400" /> Radiotracer Decay
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Suppose there are two radiotracers, P and Q. At time 0, there are equal amounts. The half-life of P is 2 hours, and Q is 6 hours. When will the amount of Q be exactly twice the amount of P?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-blue-400" /> <strong>Solution Outline:</strong>
             </div>
             Using the decay law <Latex formula="N(t) = N_0(1/2)^{t/T_{1/2}}" />:<br/>
             Set <Latex formula="N_Q(t) = 2 \cdot N_P(t)" /><br/>
             <Latex formula="(1/2)^{t/6} = 2 \cdot (1/2)^{t/2}" /><br/>
             Taking log base 2: <Latex formula="-t/6 = 1 - t/2" /><br/>
             <Latex formula="t/3 = 1 \rightarrow t = 3 \text{ hours}" />.
           </div>
        </div>

        {/* Problem 2 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 9.7
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-400" /> Detector Materials
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Both NaI(Tl) and BGO can be used as PET detectors. The linear attenuation coefficient of BGO is higher at 511 keV. Why is a higher <Latex formula="\mu" /> desirable for PET?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-purple-400" /> <strong>Solution:</strong>
             </div>
             At 511 keV, photons are highly penetrating. A high attenuation coefficient means the crystal has a higher stopping power, increasing the probability of photoelectric absorption (higher intrinsic detection efficiency). This is crucial for PET because detecting a coincidence requires stopping <em>both</em> high-energy photons simultaneously.
           </div>
        </div>

      </div>
    </section>
  );
}
