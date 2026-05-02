import React from 'react';
import { EyeOff, AlertTriangle } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section4_Quality() {
  return (
    <section id="quality" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-orange-400">Section 8.4</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Quality & Trade-offs</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Nuclear medicine suffers from notoriously poor spatial resolution and high noise compared to CT or MRI. Designing an Anger camera involves fighting a brutal trade-off between sensitivity and resolution.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
         {/* Resolution */}
         <div className="claude-surface p-6 border-l-4 border-l-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <EyeOff className="w-5 h-5 text-orange-400" /> System Resolution
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Overall system resolution <Latex formula="R_{sys}" /> is the combination of intrinsic resolution <Latex formula="R_{int}" /> (from the crystal/PMTs) and collimator resolution <Latex formula="R_{col}" />:
            </p>
            <div className="bg-slate-900 p-3 rounded border border-slate-800 text-center mb-4">
               <Latex formula="R_{sys} = \sqrt{R_{int}^2 + R_{col}^2}" displayMode />
            </div>
            <p className="text-xs text-slate-400">
              Collimator resolution is the dominant source of blur. Thicker septa or longer holes improve resolution but drastically reduce the number of photons that get through (sensitivity).
            </p>
         </div>

         {/* Sensitivity and Noise */}
         <div className="claude-surface p-6 border-l-4 border-l-yellow-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <AlertTriangle className="w-5 h-5 text-yellow-400" /> Noise and Sensitivity
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Nuclear imaging is extremely <strong>photon-starved</strong>. With so few photons reaching the detector, the image is dominated by Poisson quantum noise.
            </p>
            <p className="text-sm text-slate-300 mb-4">
              To decrease noise, we must increase the number of recorded counts (<Latex formula="N" />). SNR is proportional to <Latex formula="\sqrt{N}" />.
            </p>
            <p className="text-xs text-slate-400">
              If we want to double the resolution by making collimator holes smaller, sensitivity plummets, requiring unacceptably long scan times or dangerous patient doses to recover the SNR.
            </p>
         </div>
      </div>
    </section>
  );
}
