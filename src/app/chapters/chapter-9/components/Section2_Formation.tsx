import React from 'react';
import { Layers, Activity } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section2_Formation() {
  return (
    <section id="formation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-red-400">Section 9.2</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Formation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          In both SPECT and PET, the mathematical goal is to reconstruct the 3-D radiotracer distribution <Latex formula="f(x,y,z)" /> from 1-D or 2-D projections, similar to X-ray CT. However, attenuation plays a much more destructive and mathematically complex role in emission tomography.
        </p>
      </header>

      {/* Attenuation in SPECT vs PET */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative">
            <h3 className="text-white font-bold mb-3 text-lg text-red-400">Attenuation in SPECT</h3>
            <p className="text-sm text-slate-300 mb-4">
               In SPECT, the probability that a photon survives to reach the detector depends on the <strong>depth of the source</strong> within the body.
            </p>
            <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center text-xs mb-4">
               <Latex formula="\text{Prob} = \exp\left(-\int_{z}^{D} \mu(x,y,z') dz'\right)" displayMode />
            </div>
            <p className="text-xs text-slate-400">
               Because the attenuation factor is inside the projection integral along with the unknown activity <Latex formula="f(x,y,z)" />, the Radon transform becomes the <strong>Attenuated Radon Transform</strong>, making exact analytical reconstruction (like FBP) nearly impossible without approximations.
            </p>
         </div>

         <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl relative">
            <h3 className="text-white font-bold mb-3 text-lg text-purple-400">Attenuation in PET</h3>
            <p className="text-sm text-slate-300 mb-4">
               In PET, <em>both</em> 511 keV photons must survive to be recorded as a coincidence. One travels distance <Latex formula="d_1" /> and the other travels <Latex formula="d_2" />. The total survival probability is their product.
            </p>
            <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center text-xs mb-4">
               <Latex formula="\text{Prob} = \exp\left(-\int \mu \cdot d_1\right) \cdot \exp\left(-\int \mu \cdot d_2\right) = \exp\left(-\int_{L} \mu(l) dl\right)" displayMode />
            </div>
            <p className="text-xs text-slate-400">
               Miraculously, the probability depends <strong>only on the total thickness of the body along the LOR</strong>, not on where the annihilation occurred! This means the attenuation factor is a constant for a given LOR and can be easily corrected if a transmission CT scan is acquired first (e.g., in PET/CT).
            </p>
         </div>
      </div>

    </section>
  );
}
