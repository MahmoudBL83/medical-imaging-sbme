import React from 'react';
import { BarChart3, Binary, Dice5 } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section5_Statistics() {
  return (
    <section id="statistics" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-indigo-400">Section 7.5</span>
        <h2 className="text-3xl font-bold text-white mt-2">Statistics of Decay</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Radioactive decay is fundamentally a random process. The radioactive decay law (<Latex formula="A_t = A_0 e^{-\lambda t}" />) only describes <strong>average behavior</strong>. For short time periods, the random behavior is governed by Poisson statistics.
        </p>
      </header>

      <div className="claude-panel p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl">
         <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
            <Dice5 className="w-6 h-6 text-indigo-400" /> Poisson Process
         </h3>
         
         <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
               <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  For large numbers of radioactive atoms and periods of time much smaller than their half-lives, the probability of exactly <Latex formula="k" /> disintegrations is given by the Poisson distribution:
               </p>
               <div className="bg-slate-900 border border-indigo-900/50 p-4 rounded text-center">
                 <Latex formula="\text{Pr}[\Delta N = k] = \frac{(\lambda N_0 \Delta t)^k e^{-\lambda N_0 \Delta t}}{k!}" displayMode />
               </div>
            </div>
            
            <div className="space-y-4">
               <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                  <h4 className="text-indigo-400 font-bold mb-1 flex items-center gap-2">
                     <BarChart3 className="w-4 h-4" /> Mean and Variance
                  </h4>
                  <p className="text-sm text-slate-400">
                    For a Poisson random variable, both the mean and the variance equal the parameter <Latex formula="a" /> (where <Latex formula="a = \lambda N_0 \Delta t" />).
                  </p>
               </div>
               <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                  <h4 className="text-indigo-400 font-bold mb-1 flex items-center gap-2">
                     <Binary className="w-4 h-4" /> Poisson Rate
                  </h4>
                  <p className="text-sm text-slate-400">
                    The quantity <Latex formula="\lambda N_0" /> is the Poisson rate (events per second). It acts as the intensity of the counting process and is a measure of the activity <Latex formula="A" />.
                  </p>
               </div>
            </div>
         </div>

         <div className="claude-note border-l-indigo-500 bg-indigo-950/20 text-indigo-200 text-sm">
            <strong>Alternate Definition of Decay Constant:</strong> If we evaluate the probability of zero disintegrations for an extremely small time interval <Latex formula="\Delta t" />, it approximates to <Latex formula="1 - \lambda N_0 \Delta t" />. Because probabilities sum to 1, <Latex formula="\lambda N_0 \Delta t" /> is the probability of having one disintegration. Thus, <Latex formula="\lambda" /> is the <strong>probability of decay per atom per unit time</strong>.
         </div>
      </div>
    </section>
  );
}
