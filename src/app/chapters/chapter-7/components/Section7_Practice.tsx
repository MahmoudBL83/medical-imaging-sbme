import React from 'react';
import { HelpCircle, BookOpen, AlertCircle } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section7_Practice() {
  return (
    <section id="practice" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-indigo-400">Section 7.7</span>
        <h2 className="text-3xl font-bold text-white mt-2">Summary & Exam Practice</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Test your understanding of radionuclides, decay modes, and Poisson statistics with these selected problems.
        </p>
      </header>

      {/* Key Concepts Summary */}
      <div className="border-l-4 border-indigo-500 bg-indigo-950/20 p-8 rounded-r-xl shadow-lg mb-8">
         <h3 className="text-xl font-bold text-indigo-400 flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6" /> Core Takeaways
         </h3>
         <ul className="space-y-3 text-sm text-indigo-200">
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span>Nuclear medicine images depict physiological function, not structure.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span>Radioactive decay is random but governed by Poisson statistics over short times.</span>
           </li>
           <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span>Ideal radiotracers are monoenergetic gamma emitters with effective half-lives in the hours range (e.g., Tc-99m).</span>
           </li>
         </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Problem 1 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 7.6
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-400" /> Decay Time Calculation
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             How long will it take for a radioactive sample with activity <Latex formula="1 \text{ Ci}" /> to decay to activity <Latex formula="1 \text{ Bq}" /> if the half-life is <Latex formula="\tau" />?
           </p>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-blue-400" /> <strong>Hint:</strong>
             </div>
             Remember the conversion factor: <Latex formula="1 \text{ Ci} = 3.7 \times 10^{10} \text{ Bq}" />. Use the decay law <Latex formula="A_t = A_0 e^{-\lambda t}" /> and substitute <Latex formula="\lambda" /> with <Latex formula="0.693/\tau" />.
           </div>
        </div>

        {/* Problem 2 */}
        <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Problem 7.9
           </div>
           <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-400" /> Radiopharmacy Prep
           </h3>
           <p className="text-slate-300 text-sm mb-4 leading-relaxed">
             A vial containing 99mTc is labeled "2 mCi/ml @ 8 a.m."
           </p>
           <ol className="list-decimal list-inside space-y-2 text-sm text-slate-400 ml-2">
             <li>What is the activity of the sample at 4 p.m. on the same day?</li>
             <li>What volume should be withdrawn at 4 p.m. to prepare an injection of 1.5 mCi for a patient?</li>
           </ol>
           <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded text-sm text-slate-400">
             <div className="flex items-center gap-2 mb-2 text-slate-300">
                <AlertCircle className="w-4 h-4 text-emerald-400" /> <strong>Hint:</strong>
             </div>
             The physical half-life of Tc-99m is 6 hours. Calculate the elapsed time and use the decay formula to find the new concentration.
           </div>
        </div>

      </div>
    </section>
  );
}
