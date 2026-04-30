'use client';

import Link from 'next/link';

export default function Chapter9() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 9: Emission Computed Tomography</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Chapter 9: Emission CT</h1>
        <p className="text-xl text-slate-400">SPECT and PET - 3D Nuclear Medicine</p>
      </header>

      <div className="bg-green-900/20 border border-green-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">What is this Chapter About?</h2>
        <p className="text-slate-300">
          Emission CT is 3D nuclear medicine - SPECT and PET. SPECT rotates gamma cameras around the patient.
          PET uses positron annihilation (511 keV gamma pairs) for higher resolution.
        </p>
      </div>

      {/* SPECT */}
      <section className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">9.1 SPECT</h2>
        
        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
          <p className="text-slate-300">SPECT rotates gamma cameras, collecting projections at many angles. Uses filtered back-projection like CT. Tc-99m is the most common tracer.</p>
        </div>

        <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg mb-4">
          <ul className="text-slate-300 text-sm space-y-2">
            <li>Single gamma photon (Tc-99m, 140 keV)</li>
            <li>Requires collimator</li>
            <li>Resolution: ~8-10 mm</li>
            <li>Attenuation correction: challenging</li>
          </ul>
        </div>
      </section>

      {/* PET */}
      <section className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">9.2 PET</h2>
        
        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
          <p className="text-slate-300">PET uses positrons. When positron meets electron, they annihilate - two 511 keV gammas emitted 180 degrees apart. Coincidence detection provides electronic collimation.</p>
        </div>

        <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg mb-4">
          <ul className="text-slate-300 text-sm space-y-2">
            <li>Two 511 keV gammas from annihilation</li>
            <li>Electronic collimation (no physical collimator)</li>
            <li>Higher resolution: ~4-5 mm</li>
            <li>Accurate attenuation correction using coincidence data</li>
          </ul>
        </div>
      </section>

      {/* Image Quality */}
      <section className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">9.3 Image Quality</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800 p-4 rounded-lg">
            <h5 className="text-blue-400 font-medium mb-2">Spatial Resolution</h5>
            <p className="text-slate-400 text-sm">PET: ~4-5 mm, SPECT: ~8-10 mm</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <h5 className="text-purple-400 font-medium mb-2">Sensitivity</h5>
            <p className="text-slate-400 text-sm">PET is ~100x more sensitive than SPECT</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-green-900 to-slate-900 rounded-xl border border-green-800 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Chapter 9 Summary</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">SPECT</h3>
            <ul className="text-slate-300 text-sm">
              <li>Single gamma (Tc-99m)</li>
              <li>Uses collimator</li>
              <li>Lower resolution</li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold mb-2">PET</h3>
            <ul className="text-slate-300 text-sm">
              <li>Positron annihilation (511 keV)</li>
              <li>Coincidence detection</li>
              <li>Higher resolution, better corrections</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between">
        <Link href="/chapters/chapter-8" className="flex items-center gap-2 text-slate-400 hover:text-white">
          &lt;- Chapter 8
        </Link>
        <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-white">
          Back to Home
        </Link>
      </div>
    </div>
  );
}