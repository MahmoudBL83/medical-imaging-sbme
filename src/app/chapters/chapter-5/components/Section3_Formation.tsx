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
              <h4 className="text-purple-400 font-bold text-sm mb-4">Anode Heel Effect</h4>
              
              <svg viewBox="0 0 200 120" className="w-full h-32 mb-4 bg-slate-950/50 rounded-lg p-2">
                 {/* Anode */}
                 <polygon points="120,20 180,20 180,50 100,50" className="fill-slate-600" />
                 <polygon points="100,50 180,50 150,80" className="fill-purple-900/50" />
                 <line x1="100" y1="50" x2="150" y2="80" className="stroke-slate-500 stroke-2" />
                 
                 {/* Incident Electrons */}
                 <path d="M 120,5 L 120,35" className="stroke-blue-400 stroke-2" />
                 <polygon points="120,40 117,33 123,33" className="fill-blue-400" />
                 
                 <path d="M 135,5 L 135,45" className="stroke-blue-400 stroke-2" />
                 <polygon points="135,50 132,43 138,43" className="fill-blue-400" />
                 
                 <text x="145" y="15" className="fill-blue-400 text-[8px]">e- beam</text>
                 
                 {/* X-ray photons emitted downwards */}
                 {/* Cathode side (left) - less attenuation, higher intensity */}
                 <path d="M 120,40 L 90,110" className="stroke-yellow-400 stroke-2" />
                 <path d="M 120,40 L 70,100" className="stroke-yellow-400 stroke-2" />
                 <text x="60" y="115" className="fill-yellow-400 text-[8px] font-bold">Stronger (Cathode side)</text>
                 
                 {/* Anode side (right) - more attenuation, lower intensity */}
                 <path d="M 135,50 L 150,100" className="stroke-yellow-500 stroke-1 stroke-dashed" />
                 <path d="M 135,50 L 170,90" className="stroke-yellow-500 stroke-1 stroke-dashed" />
                 <text x="150" y="115" className="fill-yellow-500 text-[8px]">Weaker (Anode side)</text>
                 
                 {/* Attenuation material path */}
                 <line x1="135" y1="50" x2="142" y2="70" className="stroke-red-400 stroke-2 opacity-50" />
                 <text x="155" y="65" className="fill-red-400 text-[6px]">Attenuated in target</text>
              </svg>

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
              <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                 <Contrast className="w-4 h-4 text-slate-400" /> Film Characteristics (H&D Curve)
              </h4>
              
              <svg viewBox="0 0 200 140" className="w-full h-40 mb-4 bg-slate-950/50 rounded-lg p-3">
                 {/* Axes */}
                 <line x1="30" y1="10" x2="30" y2="110" className="stroke-slate-500 stroke-1" />
                 <line x1="30" y1="110" x2="180" y2="110" className="stroke-slate-500 stroke-1" />
                 
                 {/* Base + Fog Line */}
                 <line x1="25" y1="95" x2="180" y2="95" className="stroke-slate-700 stroke-1 stroke-dashed" />
                 <text x="5" y="98" className="fill-slate-500 text-[6px]">Base+Fog</text>
                 
                 {/* H&D Curve (S-shape) */}
                 <path d="M 40 95 Q 80 95, 105 55 T 170 15" className="fill-none stroke-blue-400 stroke-2" />
                 
                 {/* Labels for regions */}
                 <text x="55" y="105" className="fill-slate-400 text-[8px]">Toe</text>
                 <text x="145" y="25" className="fill-slate-400 text-[8px]">Shoulder</text>
                 
                 {/* Gamma slope line */}
                 <line x1="80" y1="90" x2="115" y2="35" className="stroke-pink-400 stroke-1 stroke-dashed" />
                 <text x="70" y="55" className="fill-pink-400 text-[8px] font-bold">Gamma (γ)</text>
                 
                 {/* Latitude indicator */}
                 <line x1="85" y1="115" x2="125" y2="115" className="stroke-emerald-400 stroke-1" />
                 <line x1="85" y1="112" x2="85" y2="118" className="stroke-emerald-400 stroke-1" />
                 <line x1="125" y1="112" x2="125" y2="118" className="stroke-emerald-400 stroke-1" />
                 <text x="105" y="125" textAnchor="middle" className="fill-emerald-400 text-[6px]">Latitude</text>

                 {/* Axis Labels */}
                 <text x="105" y="135" textAnchor="middle" className="fill-slate-400 text-[8px]">log10(Exposure)</text>
                 <text x="10" y="60" transform="rotate(-90 10 60)" textAnchor="middle" className="fill-slate-400 text-[8px]">Optical Density (D)</text>
              </svg>

              <p className="text-xs text-slate-300 mb-2">
                Film blackening is measured by Optical Density (<Latex formula="D" />). The relationship between <Latex formula="D" /> and the logarithm of exposure <Latex formula="\log_{10}(X)" /> is S-shaped (the H&D curve).
              </p>
              <div className="bg-slate-950 p-2 rounded text-center mb-2">
                <Latex formula="D = \log_{10} \frac{I_i}{I_t} = \gamma \log_{10}(X/X_0)" />
              </div>
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
