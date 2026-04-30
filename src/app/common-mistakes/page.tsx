import Link from 'next/link';

export default function CommonMistakes() {
  const mistakes = [
    { chapter: "Chapter 2", mistake: "Confusing δ(ax) with δ(x)", explanation: "Remember: δ(ax) = (1/|a|)δ(x), not δ(x)! The scaling property is crucial." },
    { chapter: "Chapter 2", mistake: "Forgetting the 2π in Fourier transform", explanation: "Be consistent with your convention. The textbook uses e^(-j2πux), not e^(-jux)." },
    { chapter: "Chapter 2", mistake: "Confusing convolution with multiplication", explanation: "Convolution in space = multiplication in frequency domain. DON'T mix these up!" },
    { chapter: "Chapter 3", mistake: "Confusing MTF with contrast", explanation: "MTF is frequency-dependent resolution. Contrast is not frequency-dependent." },
    { chapter: "Chapter 3", mistake: "Thinking noise doubles when dose doubles", explanation: "Noise increases as √Dose. To reduce noise by 2x, you need 4x more dose!" },
    { chapter: "Chapter 4", mistake: "Confusing narrow beam and broad beam", explanation: "Narrow beam = no scatter reaches detector (I=I₀e^(-μx)). Broad beam = scatter included (uses buildup factor)." },
    { chapter: "Chapter 6", mistake: "Forgetting to filter before back-projecting", explanation: "Simple back-projection produces blur. You MUST filter first with ramp or Shepp-Logan filter!" },
    { chapter: "Chapter 6", mistake: "Confusing CT number of bone vs air", explanation: "Water = 0 HU. Air = -1000 HU (almost no attenuation). Bone = +300 to +1000 HU (high attenuation)." },
    { chapter: "Chapter 7", mistake: "Confusing half-life with decay constant", explanation: "t½ = 0.693/λ. Half-life is time to halve, λ is rate per second." },
    { chapter: "Chapter 9", mistake: "Thinking PET uses collimators", explanation: "PET uses ELECTRONIC collimation via coincidence detection. No physical collimator needed!" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Common Mistakes</span>
      </div>

      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Common Mistakes & Tricky Points</h1>
        <p className="text-xl text-slate-400">Where students typically lose marks</p>
      </header>

      <div className="space-y-4">
        {mistakes.map((m, i) => (
          <div key={i} className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-amber-600 text-white px-2 py-1 rounded text-sm font-bold">Ch. {m.chapter}</span>
              <h3 className="text-lg font-bold text-red-400">{m.mistake}</h3>
            </div>
            <p className="text-slate-300">{m.explanation}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-4">🎯 General Exam Tips</h2>
        <ul className="text-slate-300 text-sm space-y-2">
          <li>• Check units carefully (mGy vs Gy, keV vs MeV, Bq vs Ci)</li>
          <li>• Write down the formula before substituting numbers</li>
          <li>• Draw diagrams for geometry questions (CT, projections)</li>
          <li>• Don't forget the 2π in Fourier transform questions</li>
          <li>• Know the standard values: water=0 HU, air=-1000, Tc-99m=140keV</li>
        </ul>
      </div>
    </div>
  );
}