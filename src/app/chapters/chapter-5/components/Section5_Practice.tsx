import React from 'react';
import { HelpCircle, AlertCircle, BookOpen } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section5_Practice() {
  return (
    <section id="practice" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 5.5</span>
        <h2 className="text-3xl font-bold text-white mt-2">Summary & Exam Practice</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Test your understanding of image formation, geometric distortion, and noise in projection radiography.
        </p>
      </header>

      {/* Key Concepts Summary */}
      <div className="border-l-4 border-teal-500 bg-teal-950/20 p-8 rounded-r-xl shadow-lg mb-8">
         <h3 className="text-xl font-bold text-teal-400 flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" /> Core Takeaways
         </h3>
         <ul className="space-y-3 text-sm text-teal-100">
           <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span><strong>Intensity Variation:</strong> The inverse square law, obliquity, and the anode heel effect all cause the beam intensity to vary across the detector plane, independently of the patient.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span><strong>Geometric Blurring:</strong> Because the x-ray focal spot has a finite size (extended source), object edges are blurred. The blurring is minimized by keeping the object close to the detector.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span><strong>Magnification:</strong> Due to beam divergence, objects are magnified by <Latex formula="d/z" />. Thick objects suffer from depth-dependent magnification, warping their borders.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span><strong>DQE vs QE:</strong> Quantum Efficiency measures the raw percentage of photons stopped. Detective Quantum Efficiency measures the true SNR transfer of the entire detection process.</span>
           </li>
         </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Problem 1 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 5.2
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-400" /> Beam Energy and Contrast
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             (a) What determines the highest energy of x-ray photons emitted from an x-ray tube?<br/><br/>
             (b) In radiographic imaging, why are low-energy photons undesired? What measures can be taken to reduce them?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-blue-400" /> <strong>Hint:</strong>
             </div>
             (a) The peak kilovoltage (kVp).<br/>
             (b) They are completely absorbed by the patient without reaching the detector, increasing dose without contributing to the image. We use Aluminum/Copper filtration to remove them.
           </div>
        </div>

        {/* Problem 2 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 5.7
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-400" /> Magnification
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Derive a simple expression for the magnification of a thin object on a projection radiograph. What simple strategy can a technician use to reduce magnification distortion?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-emerald-400" /> <strong>Hint:</strong>
             </div>
             Magnification <Latex formula="M(z) = d/z" />. To minimize it (<Latex formula="M \approx 1" />), the object depth <Latex formula="z" /> should be as close to the detector depth <Latex formula="d" /> as possible. Technicians press the patient tight against the detector!
           </div>
        </div>

      </div>
    </section>
  );
}
