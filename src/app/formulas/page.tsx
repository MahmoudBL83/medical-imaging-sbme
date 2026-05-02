'use client';

import Link from 'next/link';
import Latex from '@/components/Latex';
import { Sigma, Divide, Activity, Radar, Target } from 'lucide-react';

export default function Formulas() {
  const formulas = [
    { 
      chapter: "Chapter 2: Signals & Systems", 
      icon: <Activity className="w-5 h-5 text-blue-400" />,
      items: [
        { name: "Delta Function", formula: "\\delta(x) = 0 \\text{ for } x \\neq 0, \\quad \\int_{-\\infty}^{\\infty} \\delta(x)dx = 1", desc: "Mathematical impulse. Sifting property: ∫f(x)δ(x-a)dx = f(a)" },
        { name: "Comb Function", formula: "\\text{III}(x) = \\sum_{n=-\\infty}^{\\infty} \\delta(x-n)", desc: "Used for sampling continuous signals into discrete intervals." },
        { name: "1D Convolution", formula: "g(x) = f(x) * h(x) = \\int_{-\\infty}^{\\infty} f(\\tau)h(x-\\tau)d\\tau", desc: "Output of an LSI system given input f(x) and impulse response h(x)." },
        { name: "2D Convolution", formula: "g(x,y) = \\int\\int f(\\alpha,\\beta)h(x-\\alpha, y-\\beta)d\\alpha d\\beta", desc: "Image blurring operation by a Point Spread Function (PSF)." },
        { name: "1D Fourier Transform", formula: "F(u) = \\int_{-\\infty}^{\\infty} f(x)e^{-j2\\pi ux}dx", desc: "Transforms a spatial signal into spatial frequencies." },
        { name: "Transfer Function", formula: "G(u,v) = F(u,v) \\cdot H(u,v)", desc: "Convolution in the spatial domain equals multiplication in the frequency domain." },
      ]
    },
    { 
      chapter: "Chapter 3: Image Quality", 
      icon: <Radar className="w-5 h-5 text-teal-400" />,
      items: [
        { name: "Local Contrast", formula: "C = \\frac{S_1 - S_2}{S_1}", desc: "Difference in signal relative to the background." },
        { name: "Modulation", formula: "M = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}", desc: "Contrast of a periodic (sine wave) signal." },
        { name: "Signal-to-Noise Ratio", formula: "\\text{SNR} = \\frac{\\text{Mean Signal}}{\\text{Standard Deviation (\\sigma)}}", desc: "Fundamental measure of image clarity." },
        { name: "Rose Criterion", formula: "\\text{SNR} \\ge 5", desc: "Minimum SNR required for a human to reliably detect an object." },
        { name: "Poisson Noise", formula: "\\sigma^2 = \\bar{N}, \\quad \\sigma = \\sqrt{\\bar{N}}", desc: "Variance of photon counting statistics equals the mean." },
        { name: "Modulation Transfer Function", formula: "\\text{MTF}(u,v) = \\frac{|H(u,v)|}{|H(0,0)|}", desc: "Normalized frequency response of an imaging system." },
        { name: "Nyquist Theorem", formula: "f_s \\ge 2f_{max}", desc: "Sampling frequency must be twice the maximum frequency to prevent aliasing." },
      ]
    },
    { 
      chapter: "Chapter 4: Physics of Radiography", 
      icon: <Target className="w-5 h-5 text-indigo-400" />,
      items: [
        { name: "Photon Energy", formula: "E = h\\nu = \\frac{hc}{\\lambda}", desc: "Energy of an EM wave. h = Planck's constant." },
        { name: "Beer-Lambert Law", formula: "I = I_0 e^{-\\mu x}", desc: "Exponential attenuation of a monoenergetic narrow photon beam." },
        { name: "Half-Value Layer (HVL)", formula: "\\text{HVL} = \\frac{0.693}{\\mu}", desc: "Thickness of material required to halve the beam intensity." },
        { name: "Photoelectric Probability", formula: "\\text{Prob}_{PE} \\propto \\frac{Z_{\\text{eff}}^4}{(h\\nu)^3}", desc: "Highly dependent on atomic number (Z), provides image contrast." },
        { name: "Compton Scatter Probability", formula: "\\text{Prob}_{CS} \\propto \\rho_{\\text{electron}}", desc: "Dependent on electron density, mostly independent of Z. Degrades contrast." },
      ]
    },
    { 
      chapter: "Chapter 5: Projection Radiography", 
      icon: <Divide className="w-5 h-5 text-orange-400" />,
      items: [
        { name: "Geometric Magnification", formula: "m = \\frac{\\text{SID}}{\\text{SOD}}", desc: "Source-to-Image Distance / Source-to-Object Distance." },
        { name: "Penumbra (Unsharpness)", formula: "P = U_g = f \\times \\frac{\\text{OID}}{\\text{SOD}}", desc: "Geometric blur caused by finite focal spot size (f)." },
        { name: "Inverse Square Law", formula: "I_2 = I_1 \\left( \\frac{d_1}{d_2} \\right)^2", desc: "Radiation intensity is inversely proportional to the square of the distance." },
        { name: "Detective Quantum Efficiency", formula: "\\text{DQE} = \\frac{\\text{SNR}_{out}^2}{\\text{SNR}_{in}^2}", desc: "Efficiency of a detector converting incident SNR to output SNR." },
      ]
    },
    { 
      chapter: "Chapter 6: Computed Tomography", 
      icon: <Sigma className="w-5 h-5 text-purple-400" />,
      items: [
        { name: "Hounsfield Units (CT Number)", formula: "\\text{HU} = 1000 \\times \\frac{\\mu - \\mu_{water}}{\\mu_{water}}", desc: "Standardized attenuation values. Water = 0 HU, Air = -1000 HU." },
        { name: "Radon Transform", formula: "p(\\theta, s) = \\int_{-\\infty}^{\\infty} f(x,y) d\\ell", desc: "1D projection of a 2D object at angle θ." },
        { name: "Filtered Backprojection", formula: "f(x,y) = \\int_0^{\\pi} \\left[ \\int_{-\\infty}^{\\infty} P(\\theta, \\omega) |\\omega| e^{j2\\pi\\omega s} d\\omega \\right] d\\theta", desc: "Reconstruction integral using the ramp filter |ω|." },
        { name: "CT Noise Variance", formula: "\\sigma_{\\mu}^2 \\propto \\frac{1}{M} \\frac{1}{N/T}", desc: "Variance is inversely proportional to projections (M) and photons per detector (N/T)." },
      ]
    },
    { 
      chapter: "Chapter 7: Nuclear Medicine Physics", 
      icon: <Activity className="w-5 h-5 text-red-400" />,
      items: [
        { name: "Radioactive Decay Law", formula: "N_t = N_0 e^{-\\lambda t}", desc: "Number of undecayed atoms remaining at time t." },
        { name: "Activity", formula: "A_t = -\\frac{dN}{dt} = \\lambda N_t", desc: "Decay rate (Becquerels or Curies)." },
        { name: "Physical Half-Life", formula: "T_{1/2} = \\frac{0.693}{\\lambda}", desc: "Time for activity to halve." },
        { name: "Effective Half-Life", formula: "\\frac{1}{T_{eff}} = \\frac{1}{T_{phys}} + \\frac{1}{T_{biol}}", desc: "Combined half-life considering both radioactive decay and biological excretion." },
        { name: "Mass-Energy Equivalence", formula: "E = mc^2", desc: "Energy released in annihilation (e.g., 2 × 511 keV for positron)." },
      ]
    },
    { 
      chapter: "Chapter 8: Planar Scintigraphy", 
      icon: <Radar className="w-5 h-5 text-yellow-400" />,
      items: [
        { name: "System Resolution", formula: "R_{sys} = \\sqrt{R_{col}^2 + R_{int}^2}", desc: "Overall resolution is the quadrature sum of collimator and intrinsic resolution." },
        { name: "Parallel-hole Collimator Resolution", formula: "R_{col} = d \\times \\frac{l + z}{l}", desc: "Depends on hole diameter (d), length (l), and distance to object (z)." },
      ]
    },
    { 
      chapter: "Chapter 9: Emission CT (PET/SPECT)", 
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      items: [
        { name: "Random Coincidence Rate (PET)", formula: "R_{random} = 2 \\tau R_1 R_2", desc: "Rate of accidental coincidences depending on timing window (τ) and single rates." },
        { name: "Noise Equivalent Counts (NEC)", formula: "\\text{NECR} = \\frac{T^2}{T + S + R}", desc: "Metric for PET image quality. T=True, S=Scatter, R=Random coincidences." },
        { name: "PET Sensitivity vs SPECT", formula: "\\text{Sens}_{PET} \\approx 100 \\times \\text{Sens}_{SPECT}", desc: "PET is vastly more sensitive due to electronic collimation instead of lead septa." },
      ]
    },
  ];

  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Formula Sheet</span>
      </div>

      <header className="border-b border-slate-800 pb-8 mb-12 stagger">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Master Formula Sheet</h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The ultimate reference for every equation across all 9 chapters. The math underlying the physics of medical imaging.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8 stagger">
        {formulas.map((ch, i) => (
          <div key={i} className="claude-surface border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full shadow-lg">
            <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800 flex items-center gap-3">
              {ch.icon}
              <h2 className="text-xl font-bold text-white">{ch.chapter}</h2>
            </div>
            <div className="p-6 space-y-6 flex-1 bg-slate-950/50">
              {ch.items.map((item, j) => (
                <div key={j} className="group">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{item.name}</h3>
                    <div className="bg-slate-900 border border-slate-700/50 p-4 rounded-xl text-center group-hover:border-blue-500/50 transition-colors shadow-inner">
                      <Latex formula={item.formula} displayMode />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-slate-800 pl-3">
                      {item.desc}
                    </p>
                  </div>
                  {j !== ch.items.length - 1 && <hr className="border-slate-800/50 mt-6" />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}