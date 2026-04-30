'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Chapter7() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 7: Physics of Nuclear Medicine</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 7: The Physics of Nuclear Medicine</h1>
        <p className="text-xl text-slate-400">Radioactivity, Decay Modes, Radiotracers</p>
        <div className="flex gap-4 mt-4">
          <span className="bg-green-900 text-green-200 px-3 py-1 rounded-full text-sm">Radionuclides</span>
          <span className="bg-emerald-900 text-emerald-200 px-3 py-1 rounded-full text-sm">Poisson Statistics</span>
        </div>
      </header>

      <div className="claude-surface p-6">
        <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
        <p className="text-slate-300">
          Nuclear medicine images function by tracking radioactive decay. This chapter defines nuclides,
          decay laws, and the physics behind the radiotracers used in SPECT and PET.
        </p>
        <div className="claude-diagram mt-4">
          <div className="claude-kicker">From nucleus to image</div>
          <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
            <span className="claude-chip">Radionuclide</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Decay</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Photons</span>
            <span className="text-slate-400">-&gt;</span>
            <span className="claude-chip">Image</span>
          </div>
        </div>
      </div>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">7.1 Nomenclature and Binding Energy</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Nuclides are defined by proton and neutron counts. Unstable combinations sit off the line
              of stability and decay to increase binding energy per nucleon.
            </p>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Key Definitions</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Nuclide notation</div>
                <Latex formula={String.raw`^{A}_{Z}X`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Mass defect</div>
                <Latex formula={String.raw`\Delta m=Z m_p + N m_n - M_{nucleus}`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Binding energy</div>
                <Latex formula={String.raw`E=\Delta m c^2`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Stability trend</div>
                <Latex formula={String.raw`N \approx Z \ (low\ Z);\ N>Z \ (high\ Z)`} displayMode />
              </div>
            </div>
            <div className="claude-note mt-4">
              <div className="claude-kicker">Nuclear terms</div>
              <p className="text-slate-400 text-sm">Isotopes share Z, isobars share A, isotones share N, isomers share Z and A.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">7.3 Radioactive Decay</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Simple Intuition</h4>
            <p className="text-slate-300">
              Decay is exponential. Activity falls by half every half-life, and the process is random
              (Poisson) at short time scales.
            </p>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4">Decay Law</h4>
            <div className="space-y-3">
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Latex formula={String.raw`N(t)=N_0 e^{-\lambda t}`} displayMode />
                <Latex formula={String.raw`A(t)=\lambda N(t)`} displayMode />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Half-life</div>
                  <Latex formula={String.raw`t_{1/2}=\frac{0.693}{\lambda}`} displayMode />
                </div>
                <div className="claude-panel p-3">
                  <div className="text-slate-300 text-xs">Decay factor</div>
                  <Latex formula={String.raw`DF=e^{-\lambda t}`} displayMode />
                </div>
              </div>
              <div className="claude-panel p-3">
                <div className="text-slate-300 text-xs">Poisson statistics</div>
                <Latex formula={String.raw`P(\Delta N=k)=\frac{(\lambda N_0\Delta t)^k}{k!}e^{-\lambda N_0\Delta t}`} displayMode />
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">Exam Focus</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Know the decay law and half-life relationship.</li>
              <li>Activity is proportional to number of undecayed atoms.</li>
              <li>Short-time counts are Poisson distributed.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="claude-surface overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">7.4 Modes of Radioactive Decay</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-sm font-semibold text-purple-400 mb-4">Decay Modes</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="claude-panel p-3">
                <div className="text-blue-300 font-medium">Alpha</div>
                <p className="text-slate-400 text-xs mt-2">Heavy, short range, not used for imaging.</p>
              </div>
              <div className="claude-panel p-3">
                <div className="text-purple-300 font-medium">Beta minus</div>
                <Latex formula={String.raw`n\rightarrow p + e^- + \bar{\nu}`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-blue-300 font-medium">Beta plus</div>
                <Latex formula={String.raw`p\rightarrow n + e^+ + \nu`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-purple-300 font-medium">Electron capture</div>
                <Latex formula={String.raw`p+e^-\rightarrow n+\nu`} displayMode />
              </div>
              <div className="claude-panel p-3">
                <div className="text-emerald-300 font-medium">Gamma / isomeric</div>
                <p className="text-slate-400 text-xs mt-2">Excited nucleus releases a gamma photon.</p>
              </div>
              <div className="claude-panel p-3">
                <div className="text-amber-300 font-medium">Annihilation</div>
                <Latex formula={String.raw`e^+ + e^- \rightarrow 2\gamma\ (511\ \text{keV})`} displayMode />
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h5 className="text-white font-semibold mb-2">Common Radionuclides</h5>
            <div className="claude-panel p-3">
              <ul className="text-slate-400 text-sm space-y-1">
                <li>Tc-99m: 6 hours, 140 keV gamma (SPECT).</li>
                <li>F-18: 110 minutes, positron (PET).</li>
                <li>I-131: therapy and thyroid imaging.</li>
              </ul>
            </div>
            <div className="claude-note mt-3">
              <div className="claude-kicker">Monoenergetic emissions</div>
              <p className="text-slate-400 text-sm">Single-energy gammas enable energy windowing to reject scatter.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="claude-surface">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">Chapter 7 Summary</h2>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-3">Key Equations</h3>
            <ul className="text-slate-300 text-sm space-y-3">
              <li><Latex formula={String.raw`N(t)=N_0 e^{-\lambda t}`} /></li>
              <li><Latex formula={String.raw`t_{1/2}=0.693/\lambda`} /></li>
              <li><Latex formula={String.raw`A=\lambda N`} /></li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-3">High-Yield Concepts</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>Decay modes determine which modality can image the tracer.</li>
              <li>Half-life must match imaging time and patient safety.</li>
              <li>Poisson statistics govern counting noise.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-6" className="flex items-center gap-2 text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Chapter 6
        </Link>
        <Link href="/chapters/chapter-8" className="flex items-center gap-2 text-blue-400 hover:text-white">
          Chapter 8: Planar Scintigraphy <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}