import Link from 'next/link';

export default function HighYield() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">High-Yield Review</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">High-Yield Exam Review</h1>
        <p className="text-xl text-slate-400">Most important concepts by chapter</p>
      </header>

      {/* Chapter 2 */}
      <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Chapter 2: Signals and Systems - HIGHEST YIELD</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-white font-semibold mb-2">Must Know</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Delta function properties and sifting</li>
              <li>• Rect ↔ Sinc Fourier pair</li>
              <li>• Convolution and its properties</li>
              <li>• Fourier transform properties (convolution theorem!)</li>
              <li>• LSI systems and impulse response</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Doctor's Style</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Calculate transforms of simple functions</li>
              <li>• Sketch signals (rect, sinc, comb)</li>
              <li>• Apply convolution to find output</li>
              <li>• Use properties to simplify calculations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chapter 3 */}
      <div className="bg-purple-900/20 border border-purple-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Chapter 3: Image Quality - HIGH YIELD</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-white font-semibold mb-2">Four Pillars</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• <strong>Contrast:</strong> C = (S₁-S₂)/(S₁+S₂)</li>
              <li>• <strong>Resolution:</strong> FWHM, MTF</li>
              <li>• <strong>Noise:</strong> Poisson σ²=mean</li>
              <li>• <strong>SNR:</strong> S/σ in various forms</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Must Remember</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Nyquist theorem for sampling</li>
              <li>• MTF = FT of LSF</li>
              <li>• Noise ~ √Dose relationship</li>
              <li>• DQE measures detector quality</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chapter 6 */}
      <div className="bg-cyan-900/20 border border-cyan-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Chapter 6: CT - HIGH YIELD</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-white font-semibold mb-2">Key Equations</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• CT# = 1000(μ-μw)/μw</li>
              <li>• Water = 0 HU, Air = -1000 HU</li>
              <li>• Radon transform = line integral</li>
              <li>• Filtered back-projection reconstruction</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Important</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Filter types: ramp, Shepp-Logan</li>
              <li>• Beam hardening artifact</li>
              <li>• CT generations 1-5, helical, MDCT</li>
              <li>• Filter → Back-project → Sum</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chapter 7 */}
      <div className="bg-green-900/20 border border-green-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Chapter 7: Nuclear Medicine Physics</h2>
        <ul className="text-slate-300 text-sm space-y-2">
          <li>• N(t) = N₀e^(-λt) - exponential decay</li>
          <li>• t½ = 0.693/λ</li>
          <li>• A = λN in Bq</li>
          <li>• Decay modes: α, β⁻, β⁺, EC, γ</li>
          <li>• Tc-99m (6hr, 140keV), F-18 (110min, 511keV)</li>
        </ul>
      </div>

      {/* Chapter 9 */}
      <div className="bg-emerald-900/20 border border-emerald-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">Chapter 9: SPECT vs PET</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-white font-semibold mb-2">SPECT</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Single gamma (Tc-99m)</li>
              <li>• Requires collimator</li>
              <li>• Lower resolution (~10mm)</li>
              <li>• Difficult attenuation correction</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">PET</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Positron → 2× 511 keV</li>
              <li>• Coincidence detection</li>
              <li>• Higher resolution (~4-5mm)</li>
              <li>• Accurate attenuation correction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}