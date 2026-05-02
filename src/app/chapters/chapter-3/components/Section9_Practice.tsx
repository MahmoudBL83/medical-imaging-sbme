import React from 'react';
import { HelpCircle, BookOpen } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section9_Practice() {
  return (
    <section id="practice" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 3.9</span>
        <h2 className="text-3xl font-bold text-white mt-2">Exam Practice & Problems</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Test your understanding of the key concepts in Chapter 3 with these practice problems.
        </p>
      </header>

      <div className="space-y-6">
        
        {/* Problem 1 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 3.2
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-400" /> MTF Calculation
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Consider an LSI medical imaging system with a Point Spread Function given by:
           </p>
           <div className="bg-slate-950 py-3 border border-slate-800 rounded text-center mb-4">
             <Latex formula="h(x, y) = \frac{1}{2\pi} e^{-(x^2+y^2)/2}" displayMode />
           </div>
           <ol className="list-decimal list-inside space-y-2 text-sm text-slate-400 ml-2">
             <li>Calculate the MTF associated with this system.</li>
             <li>If a sinusoidal object <Latex formula="f(x, y) = 2 + \sin(\pi x)" /> is imaged through the system, what is the percentage change in modulation caused by this system?</li>
           </ol>
        </div>

        {/* Problem 2 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 3.7
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-400" /> Resolution and FWHM
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             A medical imaging system has the following line spread function, where <Latex formula="\alpha = 2 \text{ radians/cm}" />:
           </p>
           <div className="bg-slate-950 py-3 border border-slate-800 rounded text-center mb-4 text-sm">
             <Latex formula="l(x) = \begin{cases} \cos(\alpha x) & |\alpha x| \le \pi/2 \\ 0 & \text{otherwise} \end{cases}" displayMode />
           </div>
           <ol className="list-decimal list-inside space-y-2 text-sm text-slate-400 ml-2">
             <li>Find the Full Width at Half Maximum (FWHM).</li>
             <li>Determine the resolution of this imaging system in lines per cm.</li>
           </ol>
        </div>

        {/* Key Concepts Summary */}
        <div className="mt-12 border-l-4 border-indigo-500 bg-indigo-950/20 p-8 rounded-r-xl shadow-lg">
           <h3 className="text-xl font-bold text-indigo-400 flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" /> Core Takeaways
           </h3>
           <ul className="space-y-3 text-sm text-indigo-200">
             <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span><strong>MTF</strong> tracks how much contrast is preserved at different spatial frequencies. Due to blur, output modulation is always less than input modulation.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span><strong>FWHM</strong> equals the minimum distance that two lines/points must be separated to appear distinct. Subsystem cascades are dominated by the poorest resolution component.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span><strong>Poisson statistics</strong> govern quantum mottle in x-ray. Signal-to-noise ratio <Latex formula="\text{SNR} = \sqrt{\mu}" />, indicating higher dose improves quality but risks safety.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span><strong>Nyquist Sampling Theorem:</strong> <Latex formula="\Delta x \le 1/2U" />. Anti-aliasing filters blur the image slightly but prevent devastating high-frequency artifacts.</span>
             </li>
           </ul>
        </div>

      </div>
    </section>
  );
}
