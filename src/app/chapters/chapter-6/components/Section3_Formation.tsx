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
      </div>

      {/* Hounsfield Scale */}
      <div className="claude-panel p-8 bg-slate-900 border border-slate-700 rounded-xl mb-8 overflow-hidden relative">
         <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            The Hounsfield Scale (HU)
         </h3>
         <p className="text-sm text-slate-300 mb-10 leading-relaxed">
            These measurements are normalized to the attenuation of water. This creates a standardized, quantitative scale where Water is exactly 0 HU, and Air is -1000 HU.
         </p>
         <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg inline-block mb-12">
            <Latex formula="h = 1000 \times \frac{\mu - \mu_{water}}{\mu_{water}}" />
         </div>
         
         <div className="relative h-28 mx-8">
            {/* The Gradient Bar */}
            <div className="absolute top-8 left-0 right-0 h-6 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-slate-600" 
                 style={{ background: 'linear-gradient(to right, #000000, #333333, #777777, #bbbbbb, #ffffff)' }}>
            </div>
            
            {/* Markers */}
            <div className="absolute top-4 left-0 flex flex-col items-center transform -translate-x-1/2">
               <div className="text-xs font-bold text-slate-300">-1000</div>
               <div className="h-4 w-px bg-slate-500 my-1"></div>
               <div className="text-xs font-bold text-slate-400 mt-6">Air</div>
            </div>
            
            <div className="absolute top-4 left-[20%] flex flex-col items-center transform -translate-x-1/2">
               <div className="text-xs font-bold text-slate-300">-100</div>
               <div className="h-4 w-px bg-slate-500 my-1"></div>
               <div className="text-xs text-slate-400 mt-6">Fat</div>
            </div>

            <div className="absolute top-4 left-[50%] flex flex-col items-center transform -translate-x-1/2 z-10">
               <div className="text-sm font-bold text-blue-400">0</div>
               <div className="h-6 w-0.5 bg-blue-400 my-1"></div>
               <div className="text-sm font-bold text-blue-400 mt-4">Water</div>
            </div>

            <div className="absolute top-4 left-[65%] flex flex-col items-center transform -translate-x-1/2">
               <div className="text-xs font-bold text-slate-300">+40</div>
               <div className="h-4 w-px bg-slate-500 my-1"></div>
               <div className="text-xs text-slate-400 mt-6">Soft Tissue</div>
            </div>

            <div className="absolute top-4 left-[85%] flex flex-col items-center transform -translate-x-1/2">
               <div className="text-xs font-bold text-slate-300">+1000</div>
               <div className="h-4 w-px bg-slate-500 my-1"></div>
               <div className="text-xs font-bold text-slate-400 mt-6">Bone</div>
            </div>

            <div className="absolute top-4 left-full flex flex-col items-center transform -translate-x-1/2">
               <div className="text-xs font-bold text-slate-300">&gt; +3000</div>
               <div className="h-4 w-px bg-slate-500 my-1"></div>
               <div className="text-xs text-slate-400 mt-6">Metal</div>
            </div>
         </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* The Radon Transform */}
        <div className="space-y-6">
           <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-400" /> The Radon Transform
           </h3>
           <p className="text-sm text-slate-300 mb-4">
             A line in the 2-D plane can be parametrized by its angle <Latex formula="\theta" /> and lateral offset <Latex formula="\ell" />. A projection <Latex formula="g(\ell, \theta)" /> at angle <Latex formula="\theta" /> is simply the line integral of the object <Latex formula="f(x, y)" />. The set of all projections over all angles is the <strong>2-D Radon Transform</strong>.
           </p>

           <svg viewBox="0 0 250 150" className="w-full h-48 mb-4 bg-slate-900 border border-slate-700 rounded-lg p-2 shadow-inner">
              {/* Coordinate System */}
              <line x1="50" y1="100" x2="150" y2="100" className="stroke-slate-500 stroke-1" />
              <line x1="100" y1="150" x2="100" y2="50" className="stroke-slate-500 stroke-1" />
              <text x="145" y="110" className="fill-slate-400 text-[8px]">x</text>
              <text x="90" y="55" className="fill-slate-400 text-[8px]">y</text>
              
              {/* Object f(x,y) */}
              <circle cx="100" cy="100" r="30" className="fill-purple-900/30 stroke-purple-500 stroke-2" />
              <circle cx="110" cy="90" r="10" className="fill-emerald-400/50" />
              <text x="75" y="100" className="fill-purple-300 text-[10px]">f(x,y)</text>
              
              {/* X-ray paths at angle theta */}
              <g transform="rotate(-30 100 100)">
                 <g strokeDasharray="6 4">
                   <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                   {/* Ray 1 */}
                   <line x1="100" y1="180" x2="100" y2="20" className="stroke-yellow-400 stroke-1" />
                   {/* Ray 2 (through dense part) */}
                   <line x1="110" y1="180" x2="110" y2="20" className="stroke-yellow-400 stroke-[1.5]" />
                   {/* Ray 3 */}
                   <line x1="120" y1="180" x2="120" y2="20" className="stroke-yellow-400 stroke-1" />
                 </g>
                 
                 {/* L-axis */}
                 <line x1="50" y1="20" x2="150" y2="20" className="stroke-blue-400 stroke-1" />
                 <text x="145" y="15" className="fill-blue-400 text-[8px]">ℓ</text>
                 
                 {/* Projection profile g(l, theta) */}
                 <path d="M 70,20 Q 80,10, 85,20 T 100,20 Q 110,-10, 115,20 T 130,20" className="fill-none stroke-blue-400 stroke-2" />
                 
                 {/* Theta angle indicator relative to x-axis */}
                 {/* Since we rotated by -30, the x-axis is at +30 relative to this group. */}
                 {/* Let's just draw an arc from x-axis to the perpendicular line */}
              </g>

              {/* Angle theta arc (drawn in unrotated space) */}
              <path d="M 130 100 A 30 30 0 0 0 126 85" className="fill-none stroke-slate-300 stroke-1" />
              <text x="135" y="90" className="fill-slate-300 text-[10px]">θ</text>
              <line x1="100" y1="100" x2="150" y2="71" className="stroke-slate-500 stroke-1 stroke-dashed" />
              
              {/* Labels */}
              <text x="160" y="30" className="fill-blue-400 text-[10px] font-bold">g(ℓ, θ)</text>
              <text x="160" y="42" className="fill-slate-400 text-[8px]">1-D Projection</text>
              <text x="160" y="52" className="fill-slate-400 text-[8px]">at angle θ</text>
           </svg>
           
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
              <p className="text-xs text-slate-300 mb-4">
                The standard for decades. Consists of three steps:
              </p>
              
              <svg viewBox="0 0 300 120" className="w-full h-32 mb-4 bg-slate-950/50 rounded-lg p-2">
                 {/* Step 1: Filtering */}
                 <text x="50" y="15" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">1. Filter</text>
                 <path d="M 20,40 Q 50,20, 80,40" className="fill-none stroke-yellow-400 stroke-1" />
                 <text x="50" y="30" textAnchor="middle" className="fill-yellow-400 text-[6px]">Raw</text>
                 <path d="M 20,60 L 40,40 L 50,70 L 60,40 L 80,60" className="fill-none stroke-emerald-400 stroke-1" />
                 <text x="50" y="80" textAnchor="middle" className="fill-emerald-400 text-[6px]">Filtered (Ramp)</text>
                 
                 {/* Arrow */}
                 <path d="M 90,60 L 110,60" className="stroke-slate-500 stroke-2" />
                 <polygon points="110,60 105,57 105,63" className="fill-slate-500" />
                 
                 {/* Step 2: Backprojection */}
                 <text x="150" y="15" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">2. Smear</text>
                 <rect x="120" y="25" width="60" height="60" className="fill-none stroke-slate-600 stroke-1" />
                 
                 {/* Smearing lines */}
                 <g strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1.5s" repeatCount="indefinite" />
                    <line x1="130" y1="25" x2="130" y2="85" className="stroke-emerald-400/30 stroke-1" />
                    <line x1="140" y1="25" x2="140" y2="85" className="stroke-emerald-400/50 stroke-1" />
                    <line x1="150" y1="25" x2="150" y2="85" className="stroke-emerald-400/80 stroke-2" /> {/* Peak */}
                    <line x1="160" y1="25" x2="160" y2="85" className="stroke-emerald-400/50 stroke-1" />
                    <line x1="170" y1="25" x2="170" y2="85" className="stroke-emerald-400/30 stroke-1" />
                 </g>
                 <text x="150" y="100" textAnchor="middle" className="fill-slate-400 text-[6px]">Across image plane</text>
                 
                 {/* Arrow */}
                 <path d="M 190,60 L 210,60" className="stroke-slate-500 stroke-2" />
                 <polygon points="210,60 205,57 205,63" className="fill-slate-500" />
                 
                 {/* Step 3: Summation */}
                 <text x="250" y="15" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">3. Sum</text>
                 <circle cx="250" cy="55" r="30" className="fill-none stroke-slate-600 stroke-1" />
                 
                 {/* Star artifact/summation */}
                 <g className="stroke-emerald-400/40 stroke-2">
                    <animateTransform attributeName="transform" type="rotate" from="0 250 55" to="180 250 55" dur="15s" repeatCount="indefinite" />
                    <line x1="250" y1="25" x2="250" y2="85" />
                    <line x1="220" y1="55" x2="280" y2="55" />
                    <line x1="228" y1="33" x2="272" y2="77" />
                    <line x1="228" y1="77" x2="272" y2="33" />
                 </g>
                 <circle cx="250" cy="55" r="8" className="fill-emerald-400" />
                 <text x="250" y="100" textAnchor="middle" className="fill-slate-400 text-[6px]">All angles (Star pattern)</text>
              </svg>

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
