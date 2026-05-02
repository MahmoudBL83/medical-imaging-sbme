import React from 'react';
import { Maximize, Scaling, Contrast } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section3_Formation() {
  return (
    <section id="formation" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-indigo-400">Section 5.3</span>
        <h2 className="text-3xl font-bold text-white mt-2">Image Formation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          The intensity of x-rays incident on the detector depends on both the path integral of attenuation through the object and a variety of geometric effects derived from the diverging nature of the x-ray beam.
        </p>
      </header>

      <div className="claude-panel p-6 bg-slate-900 border border-slate-700 rounded-xl mb-8">
         <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            The Basic Imaging Equation
         </h3>
         <p className="text-sm text-slate-300 mb-4">
           The intensity <Latex formula="I" /> at a point <Latex formula="(x, y)" /> on the detector is the incident spectrum weighted by the integrated loss of beam energy due to attenuation along the path <Latex formula="s" /> through the object.
         </p>
         <div className="bg-slate-950 p-4 rounded text-center border border-slate-800">
           <Latex formula="I(x, y) = \int_{0}^{E_{max}} S_0(E')E' \exp \left\{ - \int_{0}^{r(x,y)} \mu(s; E', x, y) ds \right\} dE'" displayMode />
         </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Geometric Effects */}
        <div className="space-y-6">
           <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Scaling className="w-5 h-5 text-indigo-400" /> Geometric Effects
           </h3>
           
           <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl border-l-2 border-l-blue-500">
              <h4 className="text-blue-400 font-bold text-sm mb-2">Inverse Square Law & Obliquity</h4>
              <p className="text-xs text-slate-300 mb-2">
                Beam intensity decreases away from the central axis. The inverse square law causes a <Latex formula="\cos^2 \theta" /> drop, and obliquity (detector not orthogonal to beam) causes a <Latex formula="\cos \theta" /> drop.
              </p>
              <Latex formula="I_d(x, y) = I_0 \cos^3 \theta" displayMode />
           </div>

           <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl border-l-2 border-l-purple-500">
              <h4 className="text-purple-400 font-bold text-sm mb-2">Anode Heel Effect</h4>
              <p className="text-xs text-slate-300">
                X-rays traveling toward the anode have more anode material to penetrate, so the beam is up to 45% stronger on the cathode side. This is often compensated with specialized filters.
              </p>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl border-l-2 border-l-emerald-500">
              <h4 className="text-emerald-400 font-bold text-sm mb-2">Depth-Dependent Magnification</h4>
              <p className="text-xs text-slate-300 mb-2">
                Because the beam diverges, objects closer to the source cast larger shadows. An object at depth <Latex formula="z" /> (where <Latex formula="d" /> is source-to-detector distance) has magnification:
              </p>
              <Latex formula="M(z) = \frac{d}{z}" displayMode />
           </div>
        </div>

        {/* Blurring & Film Characteristics */}
        <div className="space-y-6">
           <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Maximize className="w-5 h-5 text-indigo-400" /> Blurring & Film Properties
           </h3>

           <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl">
              <h4 className="text-white font-bold text-sm mb-2">Extended Source Blurring (Penumbra)</h4>
              <p className="text-xs text-slate-300 mb-2">
                X-rays don't originate from a perfect point. A focal spot of diameter <Latex formula="D" /> causes blurred object edges. If the object is at depth <Latex formula="z" />, the source magnification <Latex formula="m(z)" /> is:
              </p>
              <Latex formula="m(z) = -\frac{d - z}{z}" displayMode />
              <p className="text-xs text-slate-400 mt-2 italic">
                To minimize this blur, keep the patient as close to the detector as possible (<Latex formula="z \approx d" />, so <Latex formula="m \approx 0" />).
              </p>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl">
              <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                 <Contrast className="w-4 h-4 text-slate-400" /> Film Characteristics (H&D Curve)
              </h4>
              <p className="text-xs text-slate-300 mb-2">
                Film blackening is measured by Optical Density (<Latex formula="D" />). The relationship between <Latex formula="D" /> and the logarithm of exposure <Latex formula="\log_{10}(X)" /> is S-shaped (the H&D curve).
              </p>
              <Latex formula="D = \log_{10} \frac{I_i}{I_t} = \gamma \log_{10}(X/X_0)" displayMode />
              <p className="text-xs text-slate-400 mt-2">
                <strong>Gamma (<Latex formula="\gamma" />):</strong> The slope of the linear region. High gamma = high contrast.<br/>
                <strong>Latitude:</strong> The range of exposures where the curve is linear.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
