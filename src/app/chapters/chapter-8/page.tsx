'use client';

import Link from 'next/link';

export default function Chapter8() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 8: Planar Scintigraphy</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 8: Planar Scintigraphy</h1>
        <p className="text-xl text-slate-400">Gamma Camera and 2D Nuclear Medicine</p>
      </header>

      <div className="bg-green-900/20 border border-green-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
        <p className="text-slate-300">
          Planar scintigraphy is the basic 2D imaging in nuclear medicine. The gamma camera detects gamma rays
          from radiotracers. Key components: collimator, NaI crystal, PMTs, and Anger positioning logic.
        </p>
      </div>

      <section className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">8.1 Instrumentation</h2>
        
        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
          <p className="text-slate-300">Gamma camera has: collimator (lead with holes), NaI(Tl) scintillation crystal, photomultiplier tubes (PMTs), and positioning electronics.</p>
        </div>

        <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg mb-4">
          <ul className="text-slate-300 text-sm space-y-2">
            <li>Collimator: allows only parallel gamma rays; trade-off between resolution and sensitivity</li>
            <li>NaI(Tl) crystal: scintillation - flash of light when gamma hits</li>
            <li>PMTs: detect light, amplify signal (10^6-10^7 gain)</li>
            <li>Anger circuit: weighted sums determine X, Y position</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">8.2 Image Formation</h2>
        
        <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg mb-4">
          <ul className="text-slate-300 text-sm space-y-2">
            <li>Pulse Height Analyzer: only accept photons in energy window (e.g., Tc-99m: 140 keV +/- 15%)</li>
            <li>Energy window rejects scattered photons for better contrast</li>
            <li>Anger equation: I(x,y) = S * R * C * TF (source, resolution, collimator, tissue factor)</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">8.3 Image Quality</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800 p-4 rounded-lg">
            <h5 className="text-blue-400 font-medium mb-2">Resolution</h5>
            <p className="text-slate-400 text-sm">Determined by collimator (main factor). Intrinsic vs system resolution.</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <h5 className="text-purple-400 font-medium mb-2">Sensitivity</h5>
            <p className="text-slate-400 text-sm">Trade-off with resolution. Higher sensitivity = lower resolution.</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <h5 className="text-emerald-400 font-medium mb-2">Uniformity</h5>
            <p className="text-slate-400 text-sm">Uniform source should give uniform image. Must be calibrated.</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <h5 className="text-amber-400 font-medium mb-2">Energy Resolution</h5>
            <p className="text-slate-400 text-sm">Delta-E/E ~ 10% for NaI. Determines scatter rejection.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-900 to-slate-900 rounded-xl border border-green-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Chapter 8 Summary</h2>
        <ul className="text-slate-300 text-sm space-y-2">
          <li>Collimator: lead with parallel holes</li>
          <li>NaI(Tl): scintillation crystal</li>
          <li>PMTs: light detection and amplification</li>
          <li>Anger positioning logic</li>
          <li>Energy window rejects scatter</li>
        </ul>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-7" className="text-slate-400 hover:text-white">&lt;- Chapter 7</Link>
        <Link href="/chapters/chapter-9" className="text-blue-400 hover:text-white">Chapter 9 -&gt;</Link>
      </div>
    </div>
  );
}