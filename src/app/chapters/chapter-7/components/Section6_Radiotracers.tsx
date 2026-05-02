import React from 'react';
import { Syringe, ShieldCheck, Timer } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section6_Radiotracers() {
  return (
    <section id="radiotracers" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-emerald-400">Section 7.6</span>
        <h2 className="text-3xl font-bold text-white mt-2">Radiotracers</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Out of 1,500 known radionuclides, only a dozen or so are suitable for nuclear medicine. The ideal radiotracer must be safe, easily detectable, and perfectly match the timeframe of the physiological process being studied.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
        
        {/* Ideal Properties */}
        <div className="space-y-6">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-emerald-400" /> Ideal Properties
           </h3>
           <ul className="space-y-4">
              <li className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                 <strong className="text-emerald-400 block mb-1">Clean Gamma Emitters</strong>
                 <span className="text-sm text-slate-400">Avoid alpha and beta particles. They contribute heavily to patient radiation dose but never exit the body to form an image.</span>
              </li>
              <li className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                 <strong className="text-emerald-400 block mb-1">High Energy (No Attenuation)</strong>
                 <span className="text-sm text-slate-400">Unlike X-ray, we want NO attenuation. Gamma rays should have enough energy (70–511 keV) to leave the body easily, but not so high that detectors can't stop them.</span>
              </li>
              <li className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                 <strong className="text-emerald-400 block mb-1">Monoenergetic Decay</strong>
                 <span className="text-sm text-slate-400">Single-energy emission allows energy-sensitive detectors to discriminate and reject Compton-scattered photons.</span>
              </li>
           </ul>
           
           <div className="claude-surface p-6 mt-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                 <Timer className="w-4 h-4 text-blue-400" /> Effective Half-Life (<Latex formula="T_e" />)
              </h4>
              <p className="text-sm text-slate-300 mb-4">
                The total half-life depends on physical decay (<Latex formula="T_p" />) and biological clearance (<Latex formula="T_b" />). Images must be formed in minutes to hours to avoid patient motion and metabolism changes.
              </p>
              <div className="bg-slate-900 border border-slate-700 p-3 rounded text-center">
                <Latex formula="\frac{1}{T_e} = \frac{1}{T_p} + \frac{1}{T_b}" displayMode />
              </div>
           </div>
        </div>

        {/* Common Radionuclides Table */}
        <div className="claude-panel p-8 bg-slate-900 border border-slate-700 rounded-xl">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Syringe className="w-5 h-5 text-cyan-400" /> Common Radionuclides
           </h3>
           
           <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                 <thead className="text-xs text-slate-400 uppercase bg-slate-950 border-b border-slate-800">
                    <tr>
                       <th className="px-4 py-3 font-medium">Nuclide</th>
                       <th className="px-4 py-3 font-medium">Use Case / Tag</th>
                       <th className="px-4 py-3 font-medium">Half-life</th>
                       <th className="px-4 py-3 font-medium">Energy (keV)</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-800/50">
                    <tr className="bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                       <td className="px-4 py-3 font-bold text-cyan-300">Technetium-99m</td>
                       <td className="px-4 py-3 text-slate-300">Most common. Tags to DTPA (kidneys), phosphates.</td>
                       <td className="px-4 py-3 text-slate-400">6 h</td>
                       <td className="px-4 py-3 text-slate-400">140</td>
                    </tr>
                    <tr className="bg-slate-900 hover:bg-slate-800/50 transition-colors">
                       <td className="px-4 py-3 font-bold text-white">Iodine-123</td>
                       <td className="px-4 py-3 text-slate-300">Thyroid function assessment.</td>
                       <td className="px-4 py-3 text-slate-400">13.3 h</td>
                       <td className="px-4 py-3 text-slate-400">159</td>
                    </tr>
                    <tr className="bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                       <td className="px-4 py-3 font-bold text-white">Fluorine-18 (FDG)</td>
                       <td className="px-4 py-3 text-slate-300">Glucose metabolism (PET scan for brain/cancer).</td>
                       <td className="px-4 py-3 text-slate-400">110 min</td>
                       <td className="px-4 py-3 text-slate-400">202 (<Latex formula="\beta^+" />)</td>
                    </tr>
                    <tr className="bg-slate-900 hover:bg-slate-800/50 transition-colors">
                       <td className="px-4 py-3 font-bold text-white">Oxygen-15</td>
                       <td className="px-4 py-3 text-slate-300">Blood flow / oxygen metabolism (PET).</td>
                       <td className="px-4 py-3 text-slate-400">2.1 min</td>
                       <td className="px-4 py-3 text-slate-400">696 (<Latex formula="\beta^+" />)</td>
                    </tr>
                 </tbody>
              </table>
           </div>
           
           <div className="mt-6 border-l-4 border-cyan-500 bg-cyan-950/20 p-4 text-sm text-cyan-200">
             <strong>Clinical Importance:</strong> Technetium-99m (Tc-99m) is the gold standard for planar scintigraphy and SPECT. It has a nearly perfect 6-hour half-life and a monoenergetic 140 keV gamma ray, balancing detector efficiency and patient safety.
           </div>
        </div>

      </div>
    </section>
  );
}
