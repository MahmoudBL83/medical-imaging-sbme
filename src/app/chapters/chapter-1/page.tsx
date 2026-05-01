'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, History, Zap, Activity, Info, Star, Shield, Search } from 'lucide-react';
import Latex from '@/components/Latex';
import ExamTip from '@/components/ExamTip';
import FormulaBox from '@/components/FormulaBox';

export default function Chapter1() {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 1: Introduction</span>
      </div>

      <header className="border-b border-slate-800 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
          Chapter 1: Introduction
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The dawn of medical imaging: From Roentgen's "mysterious rays" to the modern digital revolution.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="bg-blue-950/40 text-blue-400 border border-blue-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <History className="w-4 h-4" /> Historical Context
          </span>
          <span className="bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Search className="w-4 h-4" /> Modality Overview
          </span>
        </div>
      </header>

      {/* Chapter Overview */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" /> Foundations of Imaging
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Medical imaging is the art and science of visualizing the internal structures and functions of the body without invasive surgery. Every modality relies on a physical signal—X-rays, gamma rays, sound waves, or radiofrequency—to "probe" the body and return information.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'History', icon: <History className="w-5 h-5 text-blue-400" />, desc: '1895 discovery to modern CT/MRI.' },
            { title: 'Physical Signals', icon: <Zap className="w-5 h-5 text-amber-400" />, desc: 'Transmission, Emission, Reflection.' },
            { title: 'Modalities', icon: <Search className="w-5 h-5 text-purple-400" />, desc: 'Choosing the right tool for diagnosis.' },
            { title: 'Digital Revolution', icon: <Activity className="w-5 h-5 text-emerald-400" />, desc: 'Reconstruction and image processing.' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl hover:border-slate-600 transition-colors cursor-default">
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <span className="font-bold text-white">{item.title}</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.1 History */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-900/20">1.1</div>
          <h2 className="text-3xl font-bold text-white">History of Medical Imaging</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6 italic">The Big Bang: 1895</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Wilhelm Röntgen discovered X-rays while working with a Crooke's tube. Within a month, he produced the first human radiograph (his wife's hand). This moment marked the birth of a new era in medicine.
              </p>
              <div className="space-y-4">
                {[
                  { year: '1895', person: 'Wilhelm Röntgen', event: 'Discovered X-rays (1st Nobel in Physics).' },
                  { year: '1923', person: 'George de Hevesy', event: 'Concept of radiotracers (Nuclear Medicine).' },
                  { year: '1952', person: 'Hal Anger', event: 'Invention of the Gamma (Anger) Camera.' },
                  { year: '1973', person: 'Paul Lauterbur', event: 'First MRI image.' },
                  { year: '1979', person: 'Godfrey Hounsfield', event: 'First commercial CT scanner (Nobel Prize).' }
                ].map((m, i) => (
                  <div key={i} className="flex gap-4 p-3 bg-slate-800/40 border border-slate-700 rounded-lg">
                    <span className="text-blue-400 font-black shrink-0">{m.year}</span>
                    <div>
                      <div className="text-white font-bold text-sm">{m.person}</div>
                      <div className="text-slate-400 text-xs">{m.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <ExamTip type="remember" title="Key Dates">
              Expect questions on the <strong>modality timeline</strong>. 
              <br/><br/>
              <ul className="text-xs space-y-1">
                <li>• 1895: X-rays</li>
                <li>• 1973: MRI</li>
                <li>• 1979: CT</li>
              </ul>
            </ExamTip>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" /> Nobel Milestones
              </h4>
              <p className="text-slate-400 text-[10px] leading-relaxed mb-4">
                Imaging breakthroughs have been recognized with multiple Nobel Prizes in Physics and Medicine.
              </p>
              <ul className="space-y-2">
                <li className="text-[10px] text-slate-300"><strong>1901:</strong> Physics (Röntgen)</li>
                <li className="text-[10px] text-slate-300"><strong>1979:</strong> Medicine (Cormack & Hounsfield)</li>
                <li className="text-[10px] text-slate-300"><strong>2003:</strong> Medicine (Lauterbur & Mansfield)</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* 1.2 Physical Signals */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-amber-900/20">1.2</div>
          <h2 className="text-3xl font-bold text-white">Physical Signals</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Modality Signals</h3>
            <div className="space-y-6">
              {[
                { type: 'Transmission', signal: 'X-rays', modalities: 'Radiography, CT', desc: 'Measures attenuation through the body.' },
                { type: 'Emission', signal: 'Gamma Rays', modalities: 'PET, SPECT', desc: 'Measures tracer concentration inside the body.' },
                { type: 'Reflection', signal: 'Sound Waves', modalities: 'Ultrasound', desc: 'Measures echoes from tissue interfaces.' },
                { type: 'Resonance', signal: 'Radiofrequency', modalities: 'MRI', desc: 'Measures signals from hydrogen proton precession.' }
              ].map((s, i) => (
                <div key={i} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-blue-400 font-black text-sm uppercase">{s.type}</span>
                    <span className="bg-slate-900 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400">{s.signal}</span>
                  </div>
                  <div className="text-white font-bold text-sm mb-1">{s.modalities}</div>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">The Spectrum Range</h3>
              <p className="text-slate-300 text-sm mb-4">
                Each modality uses a specific frequency range optimized for tissue penetration and resolution.
              </p>
              <div className="space-y-4">
                <div className="p-3 bg-slate-800/50 rounded border border-slate-700">
                  <div className="text-amber-400 text-xs font-bold uppercase mb-1">Diagnostic X-rays</div>
                  <Latex formula={String.raw`25 - 500 \text{ keV}`} />
                  <p className="text-[10px] text-slate-500 mt-1">Shorter wavelengths allow high-resolution penetration.</p>
                </div>
                <div className="p-3 bg-slate-800/50 rounded border border-slate-700">
                  <div className="text-blue-400 text-xs font-bold uppercase mb-1">Ultrasound Frequency</div>
                  <Latex formula={String.raw`1 - 20 \text{ MHz}`} />
                  <p className="text-[10px] text-slate-500 mt-1">High enough for resolution, low enough for depth.</p>
                </div>
              </div>
              <ExamTip type="trap" title="Why not Radio waves for X-rays?">
                Radio waves have wavelengths far too long to exit or resolve the body's internal structures. Higher frequencies (shorter wavelengths) are required for tomographic imaging.
              </ExamTip>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-slate-700 p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-widest">Chapter 1 Recap</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Key Principles</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Modalities differ by signal and source location.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> History is driven by physics breakthroughs.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Nuclear medicine shows function via radiotracers.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Superposition is the 2D overlay of 3D objects.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-orange-400 font-bold uppercase tracking-widest text-sm">Likely Exam Tasks</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Match modalities to their physical signals.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Identify the "Father of Nuclear Medicine" (de Hevesy).</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Compare Transmission (CT) vs. Emission (PET).</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Explain the significance of Röntgen's wife's hand radiograph.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between pt-10 border-t border-slate-800">
        <div className="text-slate-600 italic text-sm">Start of Guide</div>
        <Link href="/chapters/chapter-2" className="flex items-center gap-3 text-blue-400 hover:text-white text-right group transition-all">
          <div>
            <div className="text-xs uppercase text-slate-500">Next</div>
            <div className="font-bold">Chapter 2: Signals and Systems</div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}