import React from 'react';
import { Target, Activity } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section3_Formation() {
  return (
    <section id="formation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-red-400">Section 8.3</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Formation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Planar scintigraphy produces a 2-D projection of the 3-D radiotracer distribution. The basic imaging equation incorporates both the physical geometry of the detector and the attenuation of gamma rays within the patient's body.
        </p>
      </header>

      {/* The Imaging Equation */}
      <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative">
         <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-red-400" /> The Scintigraphy Imaging Equation
         </h3>
         <p className="text-sm text-slate-300 mb-4">
           Let <Latex formula="f(x, y, z)" /> be the 3-D radiotracer concentration. The camera looks down the <Latex formula="z" />-axis. The total count <Latex formula="g(x,y)" /> recorded at position <Latex formula="(x,y)" /> over time <Latex formula="T" /> is the line integral of the activity, weighted by tissue attenuation.
         </p>
         <div className="bg-slate-950 p-4 border border-slate-800 rounded text-center mb-4">
            <Latex formula="g(x,y) = K \cdot T \int f(x, y, z) \exp\left(-\int_{z}^{D} \mu(x,y,z') dz'\right) dz" displayMode />
         </div>
         <p className="text-xs text-slate-400">
           Where <Latex formula="K" /> represents the overall system sensitivity (collimator efficiency <Latex formula="\times" /> crystal efficiency), and the exponential term represents the probability that a photon survives attenuation from depth <Latex formula="z" /> to the surface <Latex formula="D" />.
         </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
            <h4 className="text-white font-bold text-sm mb-2">The Attenuation Problem</h4>
            <p className="text-sm text-slate-300">
              Unlike CT where attenuation <em>is</em> the signal, in nuclear medicine, attenuation is a severe confounder. Activity deep within the body is heavily attenuated, making deep structures appear artificially cold (less active) compared to superficial structures.
            </p>
         </div>
         <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
            <h4 className="text-white font-bold text-sm mb-2">Collimator Blurring</h4>
            <p className="text-sm text-slate-300">
              The parallel-hole collimator accepts photons within a small acceptance cone. As the source-to-collimator distance increases, the cone spreads out. Therefore, <strong>spatial resolution degrades linearly with depth</strong>.
            </p>
         </div>
      </div>
    </section>
  );
}
