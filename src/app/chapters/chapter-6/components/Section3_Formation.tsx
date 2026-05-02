import React from 'react';
import { Sigma, Activity, Maximize } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section3_Formation() {
  return (
    <section id="formation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-teal-400">Section 6.3</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Formation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          The basic measurement of a CT scanner is a line integral of the effective linear attenuation coefficient. To reconstruct the 2-D cross section from these 1-D projections, we use the mathematics of the Radon transform.
        </p>
      </header>

      {/* The Basic Measurement */}
      <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl mb-8 relative overflow-hidden">
         <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            The Basic Measurement
         </h3>
         <p className="text-sm text-slate-300 mb-4">
           Using the concept of an effective energy, we can rearrange the projection radiography attenuation equation into a line integral of the linear attenuation coefficient <Latex formula="\mu" /> along path <Latex formula="s" />.
         </p>
         <div className="bg-slate-950 p-4 rounded text-center border border-slate-800 mb-4">
           <Latex formula="g_d = - \ln \left( \frac{I_d}{I_0} \right) = \int_{0}^{d} \mu(s; \bar{E}) ds" displayMode />
         </div>
         <p className="text-xs text-slate-400">
           These measurements are normalized into <strong>Hounsfield Units (HU)</strong> via: <Latex formula="h = 1000 \times \frac{\mu - \mu_{water}}{\mu_{water}}" />. Air is -1000 HU, Water is 0 HU, and Bone is ~+1000 HU.
         </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* The Radon Transform */}
        <div className="space-y-6">
           <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-400" /> The Radon Transform
           </h3>
           <p className="text-sm text-slate-300">
             A line in the 2-D plane can be parametrized by its angle <Latex formula="\theta" /> and lateral offset <Latex formula="\ell" />. A projection <Latex formula="g(\ell, \theta)" /> at angle <Latex formula="\theta" /> is simply the line integral of the object <Latex formula="f(x, y)" />. The set of all projections over all angles is the <strong>2-D Radon Transform</strong>.
           </p>
           
           <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl border-l-2 border-l-teal-500">
              <h4 className="text-teal-400 font-bold text-sm mb-2">Projection-Slice Theorem</h4>
              <p className="text-xs text-slate-300 mb-2">
                The 1-D Fourier transform of a projection at angle <Latex formula="\theta" /> is exactly equal to a slice of the 2-D Fourier transform of the object taken at the exact same angle <Latex formula="\theta" />.
              </p>
              <Latex formula="G(\rho, \theta) = F(\rho \cos \theta, \rho \sin \theta)" displayMode />
           </div>
        </div>

        {/* Reconstruction Algorithms */}
        <div className="space-y-6">
           <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sigma className="w-5 h-5 text-blue-400" /> Reconstruction Methods
           </h3>

           <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl">
              <h4 className="text-white font-bold text-sm mb-2">1. The Fourier Method</h4>
              <p className="text-xs text-slate-300 mb-2">
                Fill out the 2-D Fourier plane using the 1-D transforms of the projections (via the Projection-Slice Theorem), and then take the 2-D Inverse Fourier Transform. Rarely used due to Cartesian interpolation errors.
              </p>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl border-l-2 border-l-blue-500">
              <h4 className="text-blue-400 font-bold text-sm mb-2">2. Filtered Backprojection (FBP)</h4>
              <p className="text-xs text-slate-300 mb-2">
                The standard for decades. Consists of three steps:
              </p>
              <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1 mt-2">
                 <li><strong>Filtering:</strong> Filter each projection with a Ramp filter <Latex formula="|\rho|" /> (accentuates high frequencies).</li>
                 <li><strong>Backprojection:</strong> Smear the filtered projection back across the image plane at angle <Latex formula="\theta" />.</li>
                 <li><strong>Summation:</strong> Accumulate the smeared projections from all angles.</li>
              </ol>
           </div>
           
        </div>

      </div>
    </section>
  );
}
