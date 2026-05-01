'use client';

import Link from 'next/link';
import { History, Target, Zap, Activity, Info, Layers, BookOpen } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter1() {
  return (
    <div className="space-y-12 pb-20 fade-up">
      {/* Navigation */}
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 1</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 pb-8 stagger">
        <span className="claude-kicker text-orange-500">Section 1.1 - 1.4</span>
        <h1 className="text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
          Introduction to Medical Imaging
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          From Wilhelm Röntgen's accidental discovery of X-rays in 1895 to modern high-field MRI scanners. 
          We survey the historical milestones and fundamental signal modalities that make peering inside the human body possible.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="claude-chip">
            <History className="w-4 h-4 mr-2 inline text-orange-400" /> History
          </span>
          <span className="claude-chip">
            <Layers className="w-4 h-4 mr-2 inline text-blue-400" /> Modalities
          </span>
        </div>
      </header>

      {/* Physical Signals */}
      <section className="space-y-6 stagger">
        <span className="claude-kicker text-orange-400">The Physics of Sight</span>
        <h2 className="text-3xl font-bold text-white">The Four Physical Signals</h2>

        <div className="claude-surface p-8">
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Medical imaging fundamentally relies on injecting energy into the body and capturing the signal that exits. We classify these into four primary physical phenomena:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden border-l-4 border-l-blue-500">
               <h3 className="text-white font-bold mb-2">1. X-Ray Transmission</h3>
               <p className="text-xs text-slate-400 leading-relaxed mb-4">
                 High-energy electromagnetic radiation (<Latex formula="25-500 \text{ keV}" />) is passed directly through the body. Dense structures (bone) absorb more X-rays than soft tissue.
               </p>
               <span className="text-[10px] text-blue-400 font-bold uppercase bg-slate-950 px-2 py-1 rounded">Radiography, CT, Fluoroscopy</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden border-l-4 border-l-red-500">
               <h3 className="text-white font-bold mb-2">2. Gamma Ray Emission</h3>
               <p className="text-xs text-slate-400 leading-relaxed mb-4">
                 Radioactive isotopes decay inside the body, acting as internal lightbulbs emitting Gamma Rays (<Latex formula=">100 \text{ keV}" />) out towards external detectors.
               </p>
               <span className="text-[10px] text-red-400 font-bold uppercase bg-slate-950 px-2 py-1 rounded">Nuclear Medicine (PET, SPECT)</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden border-l-4 border-l-emerald-500">
               <h3 className="text-white font-bold mb-2">3. Acoustic Reflection</h3>
               <p className="text-xs text-slate-400 leading-relaxed mb-4">
                 Mechanical sound waves (<Latex formula="1-20 \text{ MHz}" />) bounce off tissue interfaces. Non-ionizing and safe for obstetrics.
               </p>
               <span className="text-[10px] text-emerald-400 font-bold uppercase bg-slate-950 px-2 py-1 rounded">Medical Ultrasound</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden border-l-4 border-l-purple-500">
               <h3 className="text-white font-bold mb-2">4. Magnetic Resonance</h3>
               <p className="text-xs text-slate-400 leading-relaxed mb-4">
                 Hydrogen protons precess in massive magnetic fields (<Latex formula="\sim 64 \text{ MHz}" />) and emit radio frequency (RF) signals when perturbed by an RF pulse.
               </p>
               <span className="text-[10px] text-purple-400 font-bold uppercase bg-slate-950 px-2 py-1 rounded">MRI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="claude-surface p-10 stagger mt-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
           <BookOpen className="text-orange-400" /> Historical Milestones
        </h2>
        
        <div className="relative border-l border-slate-700 ml-4 space-y-8 pb-4">
           {/* Timeline 1 */}
           <div className="relative pl-8">
              <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[6.5px] top-1 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              <span className="text-orange-400 font-mono text-sm tracking-widest">1895</span>
              <h3 className="text-white font-bold text-lg mt-1">Discovery of X-Rays</h3>
              <p className="text-slate-400 text-sm mt-2">Wilhelm Röntgen discovers "X-radiation" while studying cathode rays, taking the famous radiograph of his wife's hand.</p>
           </div>

           {/* Timeline 2 */}
           <div className="relative pl-8">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1"></div>
              <span className="text-blue-400 font-mono text-sm tracking-widest">1946</span>
              <h3 className="text-white font-bold text-lg mt-1">Nuclear Magnetic Resonance</h3>
              <p className="text-slate-400 text-sm mt-2">Bloch and Purcell independently discover NMR, the fundamental physical phenomenon behind modern MRI scanners.</p>
           </div>

           {/* Timeline 3 */}
           <div className="relative pl-8">
              <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1"></div>
              <span className="text-emerald-400 font-mono text-sm tracking-widest">1972</span>
              <h3 className="text-white font-bold text-lg mt-1">Invention of CT</h3>
              <p className="text-slate-400 text-sm mt-2">Godfrey Hounsfield and Allan Cormack invent Computed Tomography, allowing 3D internal views without surgical intervention.</p>
           </div>
        </div>
      </section>

    </div>
  );
}
