import Link from 'next/link';

export default function Glossary() {
  const terms = [
    { term: "Attenuation", definition: "Reduction in intensity of radiation as it passes through matter", chapter: "4,5" },
    { term: "CT Number (HU)", definition: "Hounsfield Unit = 1000 × (μ - μ_water)/μ_water; water = 0, air = -1000", chapter: "6" },
    { term: "Convolution", definition: "Operation: g(x) = f(x) * h(x) = ∫f(τ)h(x-τ)dτ", chapter: "2" },
    { term: "Contrast", definition: "C = (S1 - S2)/(S1 + S2); measures visibility of differences", chapter: "3" },
    { term: "Decay Constant (λ)", definition: "Rate of radioactive decay (s⁻¹); N(t) = N₀e^(-λt)", chapter: "7" },
    { term: "Delta Function δ(x)", definition: "Impulse: 0 for x≠0, integral = 1; sifting property ∫fδ = f(a)", chapter: "2" },
    { term: "DQE", definition: "Detective Quantum Efficiency - overall detector performance", chapter: "3,5" },
    { term: "Effective Dose", definition: "Whole-body equivalent dose in Sieverts (Sv)", chapter: "4" },
    { term: "FWHM", definition: "Full Width at Half Maximum - measure of spatial resolution", chapter: "3" },
    { term: "Fourier Transform", definition: "F(u) = ∫f(x)e^(-j2πux)dx; decomposes signal into frequencies", chapter: "2" },
    { term: "Half-life (t½)", definition: "Time for activity to halve: t½ = 0.693/λ", chapter: "7" },
    { term: "Impulse Response", definition: "System output to delta input; h(x) = T{δ(x)}", chapter: "2" },
    { term: "Ionization", definition: "Removal of electron from atom; creates ion pair", chapter: "4" },
    { term: "Linear Attenuation Coefficient (μ)", definition: "Measure of attenuation probability per unit length (cm⁻¹)", chapter: "4" },
    { term: "LSI System", definition: "Linear Shift-Invariant: superposition + shift invariance", chapter: "2" },
    { term: "Modulation Transfer Function (MTF)", definition: "Frequency response of imaging system; MTF = |FT{LSF}|", chapter: "3" },
    { term: "MTF", definition: "Modulation Transfer Function - measures spatial frequency response", chapter: "3" },
    { term: "Noise", definition: "Random fluctuation in image; usually modeled as Poisson (σ² = mean) or Gaussian", chapter: "3" },
    { term: "Nyquist Theorem", definition: "Sampling frequency must be ≥ 2× max frequency to avoid aliasing", chapter: "3" },
    { term: "PSF", definition: "Point Spread Function - system blur; same as impulse response", chapter: "2,3" },
    { term: "Radon Transform", definition: "Line integral of object at angle θ: p(θ,s) = ∫f(x,y)dl", chapter: "6" },
    { term: "Rect Function", definition: "rect(x)=1 for |x|&lt;1/2; Fourier transform is sinc function", chapter: "2" },
    { term: "Resolution", definition: "Ability to distinguish small details; measured by FWHM", chapter: "3" },
    { term: "Scatter", definition: "Photon deflection from primary direction; reduces contrast", chapter: "4,5" },
    { term: "Sinc Function", definition: "sinc(x)=sin(πx)/(πx); Fourier transform of rect function", chapter: "2" },
    { term: "SNR", definition: "Signal-to-Noise Ratio = mean/σ; higher = better image quality", chapter: "3" },
    { term: "SPECT", definition: "Single Photon Emission CT; uses gamma camera, Tc-99m", chapter: "9" },
    { term: "PET", definition: "Positron Emission Tomography; uses annihilation coincidence", chapter: "9" },
    { term: "Transfer Function", definition: "H(u) = FT{h(x)}; frequency response of LSI system", chapter: "2" },
    { term: "X-ray Tube", definition: "Device that produces X-rays via electron bombardment of tungsten target", chapter: "5" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Glossary</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Glossary of Terms</h1>
        <p className="text-xl text-slate-400">Key definitions from all 9 chapters</p>
      </header>

      <div className="grid gap-4">
        {terms.map((item, i) => (
          <div key={i} className="bg-slate-900 rounded-lg border border-slate-800 p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-blue-400">{item.term}</h3>
              <span className="text-xs text-slate-500">Ch. {item.chapter}</span>
            </div>
            <p className="text-slate-300 mt-2">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}