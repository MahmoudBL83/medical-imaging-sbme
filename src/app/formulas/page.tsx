import Link from 'next/link';

export default function Formulas() {
  const formulas = [
    { chapter: "Chapter 2", items: [
      { formula: "δ(x)", desc: "Delta function: 0 for x≠0, ∫δ=1" },
      { formula: "Ⅲ(x) = Σₙ δ(x-n)", desc: "Comb function (sampling)" },
      { formula: "g(x) = f(x) * h(x)", desc: "Convolution" },
      { formula: "F(u) = ∫f(x)e^(-j2πux)dx", desc: "Fourier Transform" },
      { formula: "G(u,v) = F(u,v) · H(u,v)", desc: "Transfer function relationship" },
    ]},
    { chapter: "Chapter 3", items: [
      { formula: "C = (S₁-S₂)/(S₁+S₂)", desc: "Contrast" },
      { formula: "M = (Imax-Imin)/(Imax+Imin)", desc: "Modulation" },
      { formula: "SNR = S/σ", desc: "Signal-to-Noise Ratio" },
      { formula: "dB = 20log₁₀(SNR)", desc: "Decibels" },
      { formula: "f_s ≥ 2f_max", desc: "Nyquist sampling theorem" },
      { formula: "σ² = mean (Poisson)", desc: "Noise statistics" },
    ]},
    { chapter: "Chapter 4", items: [
      { formula: "I = I₀e^(-μx)", desc: "Exponential attenuation" },
      { formula: "D = f × X", desc: "Dose from exposure" },
      { formula: "H = Q × D", desc: "Dose equivalent (Sv)" },
    ]},
    { chapter: "Chapter 5", items: [
      { formula: "DQE = (SNR_out/SNR_in)²", desc: "Detective Quantum Efficiency" },
      { formula: "R = focal_spot/object", desc: "Geometric magnification" },
    ]},
    { chapter: "Chapter 6", items: [
      { formula: "CT# = 1000(μ-μ_w)/μ_w", desc: "CT number (Hounsfield Units)" },
      { formula: "p(θ,s) = ∫f(x,y)dl", desc: "Radon transform (line integral)" },
      { formula: "f(x,y) = ∬ Pθ(s)h(s) ds dθ", desc: "Filtered back-projection" },
    ]},
    { chapter: "Chapter 7", items: [
      { formula: "N(t) = N₀e^(-λt)", desc: "Radioactive decay law" },
      { formula: "t½ = 0.693/λ", desc: "Half-life" },
      { formula: "A = λN", desc: "Activity (Bq)" },
    ]},
    { chapter: "Chapter 9", items: [
      { formula: "E = mc² → 2(511 keV)", desc: "Annihilation (PET)" },
      { formula: "Sensitivity_pet/Spect ~ 100x", desc: "PET vs SPECT sensitivity" },
    ]},
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Formula Sheet</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Formula Sheet</h1>
        <p className="text-xl text-slate-400">All important equations by chapter</p>
      </header>

      <div className="space-y-6">
        {formulas.map((ch, i) => (
          <div key={i} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
            <div className="bg-slate-800 px-4 py-2">
              <h2 className="text-lg font-bold text-white">{ch.chapter}</h2>
            </div>
            <div className="p-4 space-y-3">
              {ch.items.map((item, j) => (
                <div key={j} className="flex justify-between items-center bg-slate-800/50 p-3 rounded">
                  <code className="text-blue-400 font-mono">{item.formula}</code>
                  <span className="text-slate-400 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}