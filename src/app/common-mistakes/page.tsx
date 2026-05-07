'use client';

import Link from 'next/link';
import Latex from '@/components/Latex';
import { AlertTriangle, XCircle, FileWarning, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function CommonMistakes() {
  const mistakes = [
    { 
      chapter: "2", 
      mistake: "Confusing \\delta(ax) with \\delta(x)", 
      explanation: "Students often ignore the scaling factor. Remember: \\delta(ax) = \\frac{1}{|a|}\\delta(x). The scaling property is crucial!",
      correct: "\\int \\delta(5x) dx = \\frac{1}{5} \\int \\delta(x) dx = \\frac{1}{5}"
    },
    { 
      chapter: "2", 
      mistake: "Forgetting the 2\\pi in the Fourier transform", 
      explanation: "Be consistent with your convention. In medical imaging textbooks, the spatial frequency transform uses e^{-j2\\pi ux}, not e^{-jux}.",
      correct: "F(u) = \\int f(x) e^{-j2\\pi ux} dx"
    },
    { 
      chapter: "3", 
      mistake: "Thinking noise doubles when dose doubles", 
      explanation: "Poisson noise increases as \\sqrt{N}. To double the SNR (reduce relative noise by half), you need 4x more photons!",
      correct: "\\text{SNR} \\propto \\sqrt{N} \\rightarrow \\text{4x Dose = 2x SNR}"
    },
    { 
      chapter: "4", 
      mistake: "Confusing narrow beam and broad beam attenuation", 
      explanation: "Narrow beam assumes no scatter reaches the detector (I=I_0e^{-\\mu x}). Broad beam includes scatter, requiring a buildup factor B.",
      correct: "I = B \\cdot I_0 e^{-\\mu x}"
    },
    { 
      chapter: "6", 
      mistake: "Forgetting to filter before back-projecting", 
      explanation: "Simple back-projection produces severe 1/r blurring. You MUST filter first with a ramp filter (\\omega) in the frequency domain!",
      correct: "\\text{Filtered Backprojection} > \\text{Simple Backprojection}"
    },
    { 
      chapter: "7", 
      mistake: "Confusing half-life with the decay constant (\\lambda)", 
      explanation: "Half-life (T_{1/2}) is the time to halve. \\lambda is the rate of decay per second. They are inversely related.",
      correct: "T_{1/2} = \\frac{0.693}{\\lambda}"
    },
    { 
      chapter: "9", 
      mistake: "Thinking PET uses physical collimators", 
      explanation: "PET relies entirely on ELECTRONIC collimation via coincidence timing windows. This is why PET is 100x more sensitive than SPECT.",
      correct: "\\text{PET = Electronic Collimation, SPECT = Lead Collimators}"
    },
  ];

  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Common Pitfalls</span>
      </div>

      <header className="border-b border-slate-800 pb-8 mb-12 stagger">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-8 h-8 text-rose-500" />
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Common Pitfalls</h1>
        </div>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Where students typically lose marks. Review these traps to ensure you don't make the same mistakes on your final exam.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8 stagger">
        <div className="space-y-6">
          {mistakes.map((m, i) => (
            <div key={i} className="claude-surface border border-rose-900/30 rounded-xl overflow-hidden shadow-lg group hover:border-rose-500/50 transition-all duration-300">
              <div className="bg-rose-950/20 px-6 py-4 border-b border-rose-900/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  <h3 className="text-lg font-bold text-rose-400">Chapter {m.chapter} Mistake</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white font-medium text-lg mb-4">{m.mistake}</p>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-4">
                  <div className="flex gap-3">
                    <FileWarning className="w-5 h-5 text-amber-500 shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed">{m.explanation}</p>
                  </div>
                </div>
                <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-4">
                  <div className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div className="text-emerald-400 text-sm font-semibold">
                      <Latex formula={m.correct} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="claude-panel border border-blue-900/50 rounded-2xl p-8 bg-blue-950/10 sticky top-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <HelpCircle className="w-7 h-7" /> General Exam Tips
            </h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="text-slate-200 font-semibold mb-1">Check units carefully</h4>
                  <p className="text-sm text-slate-400">Always verify if the question uses mGy vs Gy, keV vs MeV, or Bq vs Ci. A unit error will cascade through your entire calculation.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="text-slate-200 font-semibold mb-1">Write the foundation first</h4>
                  <p className="text-sm text-slate-400">Always write down the fundamental formula (e.g., <Latex formula="I = I_0 e^{-\mu x}" />) before substituting any numbers to guarantee partial credit.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="text-slate-200 font-semibold mb-1">Draw geometry diagrams</h4>
                  <p className="text-sm text-slate-400">For magnification and penumbra questions in CT and Radiography, sketching the Source, Object, and Detector distances prevents simple geometry mistakes.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="text-slate-200 font-semibold mb-1">Know standard values</h4>
                  <p className="text-sm text-slate-400">Memorize the constants: Water = 0 HU, Air = -1000 HU, Tc-99m photon energy = 140 keV, Positron annihilation = 511 keV.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}