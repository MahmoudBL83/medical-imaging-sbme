import React from 'react';
import { Target, CheckSquare, BarChart } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section8_Accuracy() {
  return (
    <section id="accuracy" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 3.8</span>
        <h2 className="text-3xl font-bold text-white mt-2">Accuracy</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Ultimately, image quality must be judged in the context of a specific clinical application. Accuracy means conformity to truth and clinical utility.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Quantitative Accuracy */}
        <div className="claude-surface p-8">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Target className="w-5 h-5 text-indigo-400" /> Quantitative Accuracy
           </h3>
           <p className="text-slate-300 leading-relaxed mb-6">
             When measuring a numerical value (e.g., tumor dimension or glucose metabolic rate), error arises from two sources:
           </p>
           <ul className="space-y-4">
             <li className="bg-slate-900 border border-slate-800 p-4 rounded">
                <strong className="text-indigo-400 block">Bias</strong>
                <span className="text-sm text-slate-400">Systematic, reproducible difference from the truth. Can often be corrected through calibration.</span>
             </li>
             <li className="bg-slate-900 border border-slate-800 p-4 rounded">
                <strong className="text-indigo-400 block">Imprecision</strong>
                <span className="text-sm text-slate-400">Random, measurement-to-measurement variation.</span>
             </li>
           </ul>
        </div>

        {/* Diagnostic Accuracy */}
        <div className="claude-surface p-8">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <CheckSquare className="w-5 h-5 text-emerald-400" /> Diagnostic Accuracy
           </h3>
           <p className="text-slate-300 leading-relaxed mb-6">
             For diagnostic classification, we define four outcomes in a 2x2 contingency table (Test Result vs. Actual Disease State):
           </p>
           
           <div className="grid grid-cols-2 gap-4 text-center mb-6">
              <div className="bg-emerald-950/20 border border-emerald-900/50 p-3 rounded">
                 <div className="text-emerald-400 font-bold mb-1">True Positive (a)</div>
                 <div className="text-xs text-slate-400">Test +, Disease +</div>
              </div>
              <div className="bg-red-950/20 border border-red-900/50 p-3 rounded">
                 <div className="text-red-400 font-bold mb-1">False Positive (b)</div>
                 <div className="text-xs text-slate-400">Test +, Disease -</div>
              </div>
              <div className="bg-red-950/20 border border-red-900/50 p-3 rounded">
                 <div className="text-red-400 font-bold mb-1">False Negative (c)</div>
                 <div className="text-xs text-slate-400">Test -, Disease +</div>
              </div>
              <div className="bg-emerald-950/20 border border-emerald-900/50 p-3 rounded">
                 <div className="text-emerald-400 font-bold mb-1">True Negative (d)</div>
                 <div className="text-xs text-slate-400">Test -, Disease -</div>
              </div>
           </div>
        </div>
      </div>

      {/* Metrics & ROC */}
      <div className="claude-panel p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl">
         <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
            <BarChart className="w-6 h-6 text-purple-400" /> Statistical Metrics & ROC
         </h3>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-900 p-4 rounded border border-slate-800 text-center">
               <div className="text-purple-400 font-bold mb-2">Sensitivity</div>
               <Latex formula="\frac{a}{a+c}" />
               <div className="text-xs text-slate-400 mt-2">True Positive Fraction</div>
            </div>
            <div className="bg-slate-900 p-4 rounded border border-slate-800 text-center">
               <div className="text-purple-400 font-bold mb-2">Specificity</div>
               <Latex formula="\frac{d}{b+d}" />
               <div className="text-xs text-slate-400 mt-2">True Negative Fraction</div>
            </div>
            <div className="bg-slate-900 p-4 rounded border border-slate-800 text-center">
               <div className="text-purple-400 font-bold mb-2">PPV</div>
               <Latex formula="\frac{a}{a+b}" />
               <div className="text-xs text-slate-400 mt-2">Positive Predictive Value</div>
            </div>
            <div className="bg-slate-900 p-4 rounded border border-slate-800 text-center">
               <div className="text-purple-400 font-bold mb-2">NPV</div>
               <Latex formula="\frac{d}{c+d}" />
               <div className="text-xs text-slate-400 mt-2">Negative Predictive Value</div>
            </div>
         </div>

         <div className="border-l-4 border-purple-500 bg-purple-950/20 p-6 rounded-r-lg">
            <h4 className="text-purple-400 font-bold mb-4">Receiver Operating Characteristic (ROC)</h4>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
               <div className="w-full md:w-1/2">
                 <svg viewBox="0 0 200 200" className="w-full max-w-[200px] mx-auto bg-slate-900 rounded-lg p-4 border border-slate-700">
                   {/* Axes */}
                   <line x1="20" y1="20" x2="20" y2="180" className="stroke-slate-500 stroke-1" />
                   <line x1="20" y1="180" x2="180" y2="180" className="stroke-slate-500 stroke-1" />
                   
                   {/* Diagonal Line (Random Guess) */}
                   <line x1="20" y1="180" x2="180" y2="20" className="stroke-slate-600 stroke-1 stroke-dashed" />
                   <text x="140" y="150" transform="rotate(-45 140 150)" className="fill-slate-500 text-[8px]">Random Guess (AUC = 0.5)</text>
                   
                   {/* Moderate Test Curve */}
                   <path d="M 20 180 Q 40 60, 180 20" className="fill-none stroke-blue-400 stroke-2" />
                   
                   {/* Excellent Test Curve */}
                   <path d="M 20 180 Q 20 20, 180 20" className="fill-none stroke-purple-400 stroke-2" />
                   
                   {/* Labels */}
                   <text x="50" y="195" className="fill-slate-400 text-[8px]">1 - Specificity (FPR)</text>
                   <text x="10" y="120" transform="rotate(-90 10 120)" className="fill-slate-400 text-[8px]">Sensitivity (TPR)</text>
                   
                   <text x="40" y="30" className="fill-purple-400 text-[8px]">Excellent Test</text>
                   <text x="60" y="80" className="fill-blue-400 text-[8px]">Moderate Test</text>
                 </svg>
               </div>
               
               <div className="w-full md:w-1/2 text-sm text-slate-300 leading-relaxed">
                 Because of overlap in the distribution of parameter values between normal and diseased patients, a threshold must be established. A lower threshold increases sensitivity but decreases specificity. 
                 <br/><br/>
                 An ROC curve plots <strong>Sensitivity vs. (1 - Specificity)</strong> to graphically depict this trade-off. The Area Under the Curve (AUC) is the definitive measure of a test's clinical utility.
               </div>
            </div>
         </div>
         
         <div className="mt-6 bg-slate-900 border border-slate-800 p-4 rounded text-center">
            <h4 className="text-white font-bold mb-2">Diagnostic Accuracy (DA)</h4>
            <Latex formula="\text{DA} = \frac{a+d}{a+b+c+d}" displayMode />
            <p className="text-xs text-slate-400 mt-2 italic">
               Note: DA alone can be misleading if disease prevalence is very low.
            </p>
         </div>
      </div>
    </section>
  );
}
