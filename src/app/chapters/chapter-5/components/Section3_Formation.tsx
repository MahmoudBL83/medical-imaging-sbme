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
              
              <svg viewBox="0 0 200 120" className="w-full h-32 mb-4 bg-slate-950/50 rounded-lg p-2">
                 <style>
                   {`
                     @keyframes pulseBeamArea {
                       0%, 100% { fill-opacity: 0.1; }
                       50% { fill-opacity: 0.4; }
                     }
                   `}
                 </style>
                 <circle cx="10" cy="60" r="3" className="fill-blue-400 animate-pulse" />
                 
                 {/* Rays */}
                 <path d="M 10,60 L 180,20 M 10,60 L 180,100" className="stroke-blue-400/30 stroke-1" strokeDasharray="3 3" />
                 <path d="M 10,60 L 180,40 M 10,60 L 180,80" className="stroke-blue-400/10 stroke-1" />
                 
                 {/* Area 1 at distance r */}
                 <rect x="80" y="41" width="10" height="38" className="fill-blue-400 stroke-blue-300 stroke-1" style={{ animation: 'pulseBeamArea 2s infinite' }} />
                 <text x="85" y="35" textAnchor="middle" className="fill-blue-300 text-[8px]">Area A</text>
                 <line x1="10" y1="110" x2="85" y2="110" className="stroke-slate-500 stroke-1" />
                 <text x="47" y="118" textAnchor="middle" className="fill-slate-400 text-[6px]">Distance r</text>
                 
                 {/* Area 2 at distance 2r */}
                 <rect x="160" y="24" width="10" height="72" className="fill-blue-400 stroke-blue-300 stroke-1" style={{ animation: 'pulseBeamArea 2s infinite 0.5s' }} />
                 <text x="165" y="18" textAnchor="middle" className="fill-blue-300 text-[8px]">Area 4A</text>
                 <line x1="85" y1="110" x2="165" y2="110" className="stroke-slate-500 stroke-1" />
                 <text x="125" y="118" textAnchor="middle" className="fill-slate-400 text-[6px]">Distance 2r</text>
                 
                 <text x="165" y="62" textAnchor="middle" className="fill-blue-900 text-[6px] font-bold">1/4 Intensity</text>
              </svg>

              <p className="text-xs text-slate-300 mb-2">
                Beam intensity decreases away from the central axis. The inverse square law causes a <Latex formula="\cos^2 \theta" /> drop, and obliquity (detector not orthogonal to beam) causes a <Latex formula="\cos \theta" /> drop.
              </p>
              <Latex formula="I_d(x, y) = I_0 \cos^3 \theta" displayMode />
           </div>

           <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl border-l-2 border-l-purple-500">
              <h4 className="text-purple-400 font-bold text-sm mb-4">Anode Heel Effect</h4>
              
              <svg viewBox="0 0 200 120" className="w-full h-32 mb-4 bg-slate-950/50 rounded-lg p-2">
                 <style>
                   {`
                     @keyframes strongPulse {
                       0%, 100% { stroke-width: 2; opacity: 1; }
                       50% { stroke-width: 3; opacity: 0.8; }
                     }
                     @keyframes weakPulse {
                       0%, 100% { opacity: 0.4; }
                       50% { opacity: 0.8; }
                     }
                     @keyframes eBeamPulse {
                       to { stroke-dashoffset: -10; }
                     }
                   `}
                 </style>
                 {/* Anode */}
                 <polygon points="120,20 180,20 180,50 100,50" className="fill-slate-600" />
                 <polygon points="100,50 180,50 150,80" className="fill-purple-900/50" />
                 <line x1="100" y1="50" x2="150" y2="80" className="stroke-slate-500 stroke-2" />
                 
                 {/* Incident Electrons */}
                 <path d="M 120,5 L 120,35" className="stroke-blue-400 stroke-2" strokeDasharray="3 3" style={{ animation: 'eBeamPulse 0.4s linear infinite' }} />
                 <polygon points="120,40 117,33 123,33" className="fill-blue-400" />
                 
                 <path d="M 135,5 L 135,45" className="stroke-blue-400 stroke-2" strokeDasharray="3 3" style={{ animation: 'eBeamPulse 0.4s linear infinite 0.2s' }} />
                 <polygon points="135,50 132,43 138,43" className="fill-blue-400" />
                 
                 <text x="145" y="15" className="fill-blue-400 text-[8px]">e- beam</text>
                 
                 {/* X-ray photons emitted downwards */}
                 {/* Cathode side (left) - less attenuation, higher intensity */}
                 <path d="M 120,40 L 90,110" className="stroke-yellow-400" style={{ animation: 'strongPulse 1s infinite' }} />
                 <path d="M 120,40 L 70,100" className="stroke-yellow-400" style={{ animation: 'strongPulse 1s infinite 0.2s' }} />
                 <text x="60" y="115" className="fill-yellow-400 text-[8px] font-bold">Stronger (Cathode side)</text>
                 
                 {/* Anode side (right) - more attenuation, lower intensity */}
                 <path d="M 135,50 L 150,100" className="stroke-yellow-500 stroke-1 stroke-dashed" style={{ animation: 'weakPulse 1.5s infinite' }} />
                 <path d="M 135,50 L 170,90" className="stroke-yellow-500 stroke-1 stroke-dashed" style={{ animation: 'weakPulse 1.5s infinite 0.3s' }} />
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
              <h4 className="text-emerald-400 font-bold text-sm mb-4">Depth-Dependent Magnification</h4>
              
              <svg viewBox="0 0 200 120" className="w-full h-32 mb-4 bg-slate-950/50 rounded-lg p-2">
                 <style>
                   {`
                     @keyframes rayPulse {
                       from { stroke-dashoffset: 40; }
                       to { stroke-dashoffset: 0; }
                     }
                   `}
                 </style>
                 <circle cx="100" cy="10" r="3" className="fill-emerald-400 animate-pulse" />
                 
                 {/* Rays */}
                 <path d="M 100,10 L 40,110" className="stroke-emerald-400/30 stroke-1" strokeDasharray="4 4" style={{ animation: 'rayPulse 2s linear infinite' }} />
                 <path d="M 100,10 L 160,110" className="stroke-emerald-400/30 stroke-1" strokeDasharray="4 4" style={{ animation: 'rayPulse 2s linear infinite' }} />
                 
                 {/* Closer Object (Magnified more) */}
                 <rect x="80" y="40" width="40" height="10" rx="2" className="fill-purple-500/50 stroke-purple-400 stroke-1" />
                 <text x="100" y="47" textAnchor="middle" className="fill-white text-[6px]">z_1 (Closer)</text>
                 
                 {/* Projected shadow for closer object */}
                 <line x1="70" y1="110" x2="130" y2="110" className="stroke-purple-400 stroke-4" />
                 
                 {/* Further Object (Magnified less) */}
                 <rect x="80" y="70" width="40" height="10" rx="2" className="fill-blue-500/50 stroke-blue-400 stroke-1" />
                 <text x="100" y="77" textAnchor="middle" className="fill-white text-[6px]">z_2 (Further)</text>
                 
                 {/* Projected shadow for further object */}
                 <line x1="78" y1="112" x2="122" y2="112" className="stroke-blue-400 stroke-2" />
                 
                 <text x="30" y="115" className="fill-slate-400 text-[8px]">Detector (d)</text>
              </svg>

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
              <h4 className="text-white font-bold text-sm mb-4">Extended Source Blurring (Penumbra)</h4>
              
              <svg viewBox="0 0 400 160" className="w-full h-40 mb-4 bg-slate-950/50 rounded-lg p-2">
                 {/* Left side: Point Source */}
                 <g transform="translate(50, 0)">
                    <text x="50" y="15" textAnchor="middle" className="fill-slate-300 text-[10px] font-bold">Point Source (Ideal)</text>
                    
                    {/* Point Source */}
                    <circle cx="50" cy="30" r="1.5" className="fill-yellow-400 animate-pulse" />
                    
                    {/* Object */}
                    <rect x="30" y="80" width="40" height="10" rx="2" className="fill-purple-500/80 stroke-purple-400 stroke-1" />
                    
                    {/* Rays */}
                    <path d="M 50,30 L 10,130" className="stroke-yellow-400/50 stroke-1" />
                    <path d="M 50,30 L 90,130" className="stroke-yellow-400/50 stroke-1" />
                    
                    {/* Detector */}
                    <line x1="0" y1="130" x2="100" y2="130" className="stroke-slate-500 stroke-2" />
                    
                    {/* Shadow (Perfectly Sharp) */}
                    <rect x="10" y="130" width="80" height="4" className="fill-black" />
                    <text x="50" y="145" textAnchor="middle" className="fill-emerald-400 text-[8px]">Sharp Edge</text>
                 </g>

                 {/* Divider */}
                 <line x1="200" y1="20" x2="200" y2="140" className="stroke-slate-700 stroke-1 stroke-dashed" />

                 {/* Right side: Extended Source */}
                 <g transform="translate(250, 0)">
                    <text x="50" y="15" textAnchor="middle" className="fill-slate-300 text-[10px] font-bold">Extended Source (Real)</text>
                    
                    {/* Extended Source (Focal spot width D) */}
                    <rect x="35" y="28" width="30" height="4" rx="1" className="fill-yellow-400/80 animate-pulse" />
                    <text x="80" y="32" className="fill-yellow-400 text-[6px]">Width D</text>
                    
                    {/* Object */}
                    <rect x="30" y="80" width="40" height="10" rx="2" className="fill-purple-500/80 stroke-purple-400 stroke-1" />
                    
                    {/* Rays from Left Edge of Source */}
                    <path d="M 35,30 L 0,130" className="stroke-yellow-400/30 stroke-1" />
                    <path d="M 35,30 L 80,130" className="stroke-yellow-400/30 stroke-1" />
                    
                    {/* Rays from Right Edge of Source */}
                    <path d="M 65,30 L 20,130" className="stroke-yellow-500/30 stroke-1" />
                    <path d="M 65,30 L 100,130" className="stroke-yellow-500/30 stroke-1" />
                    
                    {/* Detector */}
                    <line x1="0" y1="130" x2="100" y2="130" className="stroke-slate-500 stroke-2" />
                    
                    {/* Shadows */}
                    {/* Umbra (Complete Shadow) */}
                    <rect x="20" y="130" width="60" height="4" className="fill-black" />
                    <text x="50" y="145" textAnchor="middle" className="fill-slate-300 text-[6px]">Umbra</text>
                    
                    {/* Penumbra (Partial Shadow / Blur) */}
                    <rect x="0" y="130" width="20" height="4" className="fill-slate-800" />
                    <rect x="80" y="130" width="20" height="4" className="fill-slate-800" />
                    <text x="10" y="145" textAnchor="middle" className="fill-red-400 text-[6px]">Penumbra (Blur)</text>
                    <text x="90" y="145" textAnchor="middle" className="fill-red-400 text-[6px]">Penumbra</text>
                 </g>
              </svg>

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
              
              <svg viewBox="0 0 200 140" className="w-full h-40 mb-4 bg-slate-950/50 rounded-lg p-3 group">
                 <style>
                   {`
                     @keyframes drawCurve {
                       from { stroke-dasharray: 200; stroke-dashoffset: 200; }
                       to { stroke-dasharray: 200; stroke-dashoffset: 0; }
                     }
                   `}
                 </style>
                 {/* Axes */}
                 <line x1="30" y1="10" x2="30" y2="110" className="stroke-slate-500 stroke-1" />
                 <line x1="30" y1="110" x2="180" y2="110" className="stroke-slate-500 stroke-1" />
                 
                 {/* Base + Fog Line */}
                 <line x1="25" y1="95" x2="180" y2="95" className="stroke-slate-700 stroke-1 stroke-dashed" />
                 <text x="5" y="98" className="fill-slate-500 text-[6px]">Base+Fog</text>
                 
                 {/* H&D Curve (S-shape) animated on load/hover */}
                 <path d="M 40 95 Q 80 95, 105 55 T 170 15" className="fill-none stroke-blue-400 stroke-2 group-hover:stroke-indigo-400 transition-colors" style={{ animation: 'drawCurve 2s ease-out forwards' }} />
                 
                 {/* Regions highlighting on hover */}
                 <circle cx="55" cy="93" r="10" className="fill-pink-500/0 group-hover:fill-pink-500/20 transition-all duration-300" />
                 <text x="55" y="105" className="fill-slate-400 group-hover:fill-pink-400 transition-colors text-[8px]">Toe</text>
                 
                 <circle cx="145" cy="25" r="15" className="fill-emerald-500/0 group-hover:fill-emerald-500/20 transition-all duration-300" />
                 <text x="145" y="25" className="fill-slate-400 group-hover:fill-emerald-400 transition-colors text-[8px]">Shoulder</text>
                 
                 {/* Gamma slope line */}
                 <line x1="80" y1="90" x2="115" y2="35" className="stroke-pink-400 stroke-1 stroke-dashed opacity-50 group-hover:opacity-100 transition-opacity" />
                 <text x="70" y="55" className="fill-pink-400 text-[8px] font-bold">Gamma (γ)</text>
                 
                 {/* Latitude indicator */}
                 <line x1="85" y1="115" x2="125" y2="115" className="stroke-emerald-400 stroke-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                 <line x1="85" y1="112" x2="85" y2="118" className="stroke-emerald-400 stroke-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                 <line x1="125" y1="112" x2="125" y2="118" className="stroke-emerald-400 stroke-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                 <text x="105" y="125" textAnchor="middle" className="fill-emerald-400 text-[6px] opacity-50 group-hover:opacity-100 transition-opacity">Latitude</text>

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
