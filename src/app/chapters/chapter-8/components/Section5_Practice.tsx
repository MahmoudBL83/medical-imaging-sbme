import React from 'react';
import { HelpCircle, AlertCircle, BookOpen } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section5_Practice() {
  return (
    <section id="practice" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-pink-400">Section 8.5</span>
        <h2 className="text-3xl font-bold text-white mt-2">Summary & Exam Practice</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Test your understanding of Anger camera logic, collimator trade-offs, and image formation.
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
              <span><strong>Anger Camera:</strong> Uses a lead collimator, a NaI(Tl) scintillation crystal to convert gamma rays to light, and an array of PMTs with Anger positioning logic to determine event coordinates.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong>Collimator Trade-off:</strong> You cannot have both high resolution and high sensitivity. Improving one inherently ruins the other.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-pink-400 mt-1">•</span>
              <span><strong>Scatter Rejection:</strong> A Pulse Height Analyzer (PHA) window filters out lower-energy scattered photons by only accepting <Latex formula="Z" /> signals inside the photopeak.</span>
           </li>
         </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Problem 1 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 8.1
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-400" /> Anger Camera Operations
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             Explain with diagrams the design and operation of an Anger gamma camera. Trace the path of a gamma ray from emission to (x,y) coordinate calculation.
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-blue-400" /> <strong>Solution Outline:</strong>
             </div>
             1. Gamma emitted from patient.<br/>
             2. Passes through parallel holes in the lead <strong>collimator</strong> (or gets absorbed if off-axis).<br/>
             3. Strikes the <strong>NaI(Tl) crystal</strong> and flashes visible light (scintillation).<br/>
             4. Light spreads to multiple <strong>PMTs</strong>, converting photons to electrical current.<br/>
             5. <strong>Anger logic</strong> calculates a weighted (x,y) centroid based on PMT current strengths.<br/>
             6. <strong>PHA</strong> checks if the total energy sum (Z) is within the primary photopeak window to reject scatter.
           </div>
        </div>

        {/* Problem 2 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 8.3
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-purple-400" /> Compton Scatter Energy
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             A photon that has undergone Compton scattering has changed direction and lost energy. Why is the loss of energy useful in an Anger camera?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-purple-400" /> <strong>Solution:</strong>
             </div>
             Because scattered photons have changed direction, tracing them back via the collimator assigns them to the wrong origin location, causing severe blurring and loss of contrast. However, because they <em>lose energy</em> during the scatter event, the Pulse Height Analyzer (PHA) can identify them as having an energy lower than the main photopeak and subsequently discard them.
           </div>
        </div>

      </div>
    </section>
  );
}
