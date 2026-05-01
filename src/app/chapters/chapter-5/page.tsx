'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, Target, Maximize, Activity, Info, Settings, Shield } from 'lucide-react';
import Latex from '@/components/Latex';
import ExamTip from '@/components/ExamTip';
import FormulaBox from '@/components/FormulaBox';

export default function Chapter5() {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Chapter 5: Projection Radiography</span>
      </div>

      <header className="border-b border-slate-800 pb-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Chapter 5: Projection Radiography
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          The engineering behind X-ray systems, image formation geometry, and the trade-offs between contrast, resolution, and dose.
        </p>
        <div className="flex gap-4 mt-6">
          <span className="bg-orange-950/40 text-orange-400 border border-orange-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Settings className="w-4 h-4" /> Systems Engineering
          </span>
          <span className="bg-blue-950/40 text-blue-400 border border-blue-800/50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
            <Maximize className="w-4 h-4" /> Geometric Optics
          </span>
        </div>
      </header>

      {/* Chapter Intro */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-400" /> Essential Overview
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Projection radiography is the most common medical imaging modality. It relies on the differential attenuation of X-rays as they pass through the body. This chapter connects the hardware (tubes, filters, grids) to the mathematical models of image formation and quality.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Instrumentation', icon: <Settings className="w-5 h-5 text-orange-400" />, desc: 'X-ray tubes, filters, and grids.' },
            { title: 'Geometry', icon: <Maximize className="w-5 h-5 text-blue-400" />, desc: 'Magnification, obliquity, and blur.' },
            { title: 'Detectors', icon: <Target className="w-5 h-5 text-purple-400" />, desc: 'Film, CR, and digital flat panels.' },
            { title: 'Image Quality', icon: <Activity className="w-5 h-5 text-emerald-400" />, desc: 'SNR, DQE, and scatter effects.' },
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

      {/* 5.2 Instrumentation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-orange-900/20">5.2</div>
          <h2 className="text-3xl font-bold text-white">Instrumentation</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">5.2.1 X-Ray Tube Engineering</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  X-rays are produced when high-speed electrons from the <strong>cathode</strong> (filament) strike the <strong>anode</strong> (target).
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Thermionic Emission:</strong> Filament heating (3-5A) releases an electron cloud.</li>
                  <li><strong className="text-white">Tube Current (mA):</strong> Number of electrons flowing to the anode. Controls quantity (flux).</li>
                  <li><strong className="text-white">Tube Voltage (kVp):</strong> Accelerating potential. Controls quality (penetrability/energy).</li>
                  <li><strong className="text-white">Anode Rotation:</strong> Rotates at 3,200–3,600 rpm to dissipate heat (99% of energy is heat).</li>
                </ul>
              </div>
              
              <FormulaBox 
                name="Tube Output Exposure"
                formula={String.raw`mAs = mA \cdot t`}
                symbols={[
                  { symbol: 'mA', meaning: 'Tube current (milliAmperes)' },
                  { symbol: 't', meaning: 'Exposure time (seconds)' }
                ]}
                intuition="The total number of photons produced is directly proportional to the product of current and time."
              />
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">5.2.2 - 5.2.4 Beam Conditioning</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-orange-400 font-bold text-sm uppercase tracking-wider">Filtration</h4>
                  <p className="text-slate-400 text-sm">
                    Filters (usually Aluminum) remove low-energy photons that would be absorbed by the patient without contributing to the image. 
                    <br/><br/>
                    <strong className="text-white">NCRP Requirement:</strong> 2.5 mm Al/Eq for systems &gt; 70 kVp.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider">Collimation</h4>
                  <p className="text-slate-400 text-sm">
                    Restricts the beam to the desired field of view. 
                    <br/><br/>
                    <strong className="text-white">Benefits:</strong> Reduces patient dose and decreases Compton scatter, which improves contrast.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <ExamTip type="remember" title="The 1% Rule">
              Only about <strong>1%</strong> of electron energy is converted to X-rays. The other <strong>99%</strong> is lost as heat. This is why anode cooling and rotation are critical engineering constraints.
            </ExamTip>

            <div className="bg-indigo-900/20 border border-indigo-800/50 rounded-xl p-5">
              <h4 className="text-indigo-400 font-bold text-sm uppercase mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Contrast Agents
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Used to visualize soft tissues with low intrinsic contrast.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white text-xs font-bold font-mono">Iodine (Z=53)</span>
                    <span className="text-blue-400 text-[10px] font-bold">K-edge: 33.2 keV</span>
                  </div>
                  <p className="text-slate-400 text-[10px]">Used in angiography and IV contrast.</p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white text-xs font-bold font-mono">Barium (Z=56)</span>
                    <span className="text-amber-400 text-[10px] font-bold">K-edge: 37.4 keV</span>
                  </div>
                  <p className="text-slate-400 text-[10px]">Used for GI tract studies (Barium swallow).</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 5.3 Image Formation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-900/20">5.3</div>
          <h2 className="text-3xl font-bold text-white">Image Formation Geometry</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">5.3.1 - 5.3.2 Geometric Intensity Variations</h3>
              <p className="text-slate-300 text-sm mb-6">
                Because X-rays diverge from a point source, the intensity follows the inverse square law and angle-dependent variations.
              </p>
              
              <div className="space-y-4">
                <FormulaBox 
                  name="Obliquity (Cos³ θ Law)"
                  formula={String.raw`I_d(x,y) = I_0 \cos^3 \theta`}
                  intuition="Combines the inverse square law (1/r²) and the projection of the detector area (cos θ)."
                />

                <FormulaBox 
                  name="Density Maintenance Formula"
                  formula={String.raw`mAs_{new} = mAs_{old} \left( \frac{d_{new}}{d_{old}} \right)^2`}
                  symbols={[
                    { symbol: 'd', meaning: 'Distance from source to detector' }
                  ]}
                  intuition="To keep the same image density (brightness) at a new distance, adjust mAs by the square of the distance ratio."
                />
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" /> Anode Heel Effect
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The X-ray beam is not perfectly uniform. It is <strong>stronger at the cathode side</strong> and weaker at the anode side because photons exiting toward the anode must travel through more target material (self-attenuation).
              </p>
              <div className="bg-slate-800 p-4 rounded-lg mt-4 border border-slate-700">
                <p className="text-amber-400 text-xs font-bold mb-2 uppercase">Clinical Positioning Tip:</p>
                <p className="text-slate-300 text-xs leading-relaxed italic">
                  "Put the thickest part of the body (e.g., abdomen) toward the cathode side and the thinner part (e.g., chest) toward the anode side to equalize exposure."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">5.3.3 Magnification and Blurring</h3>
              <div className="space-y-4">
                <FormulaBox 
                  name="Object Magnification"
                  formula={String.raw`M(z) = \frac{d}{z}`}
                  symbols={[
                    { symbol: 'd', meaning: 'Source-to-detector distance' },
                    { symbol: 'z', meaning: 'Source-to-object distance' }
                  ]}
                  intuition="Moving the object closer to the source (smaller z) increases magnification."
                />

                <FormulaBox 
                  name="Source Blurring (Penumbra)"
                  formula={String.raw`D' = \frac{d-z}{z} D = |1 - M(z)| D`}
                  symbols={[
                    { symbol: 'D', meaning: 'Actual focal spot diameter' },
                    { symbol: 'D\'', meaning: 'Projected blur diameter on detector' }
                  ]}
                  intuition="The focal spot is not a point. This finite size creates a blur 'penumbra' around objects."
                />
              </div>
              <ExamTip type="trap" title="Resolution vs. Magnification">
                Increasing magnification often <strong>worsens</strong> resolution because it scales up the source blur (penumbra) along with the object.
              </ExamTip>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 Image Quality */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-emerald-900/20">5.4</div>
          <h2 className="text-3xl font-bold text-white">Image Quality & Noise</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">The Impact of Scatter</h3>
            <p className="text-slate-300 mb-6">
              Compton scatter is the enemy of image quality. It adds a uniform "fog" that reduces both contrast and SNR.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormulaBox 
                name="Contrast Reduction"
                formula={String.raw`C' = \frac{C}{1 + I_s/I_b}`}
                intuition="Scatter (Is) in the denominator reduces the observed contrast."
              />
              <FormulaBox 
                name="SNR Reduction"
                formula={String.raw`SNR' = \frac{SNR}{\sqrt{1 + I_s/I_b}}`}
                intuition="Scatter adds noise without signal, degrading the SNR."
              />
            </div>

            <div className="mt-8 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h4 className="text-white font-bold mb-4">How to Fight Scatter:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Collimation', desc: 'Beam size' },
                  { name: 'Grids', desc: 'Ratio h/b' },
                  { name: 'Air Gaps', desc: 'Natural decay' },
                  { name: 'Scanning Slit', desc: 'Max rejection' }
                ].map((m, i) => (
                  <div key={i} className="text-center p-3 bg-slate-900 rounded-lg border border-slate-700">
                    <div className="text-emerald-400 font-bold text-sm">{m.name}</div>
                    <div className="text-slate-500 text-[10px] uppercase mt-1">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Detector Efficiency</h3>
              <FormulaBox 
                name="DQE (Detective Quantum Efficiency)"
                formula={String.raw`DQE = \left( \frac{SNR_{out}}{SNR_{in}} \right)^2`}
                intuition="Measures how much of the input SNR is preserved. DQE=1 is a perfect detector."
              />
              <ExamTip type="tip">
                A higher DQE means you can achieve the same image quality with a <strong>lower patient dose</strong>.
              </ExamTip>
            </div>
          </div>
        </div>
      </section>

      {/* Special Modules */}
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-pink-900/10 border border-pink-900/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-pink-400 mb-4">5.2.8 Mammography</h3>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0"></div>
              <span><strong className="text-white">Low kVp (~30 kVp):</strong> Maximizes photoelectric effect for subtle soft tissue differences.</span>
            </li>
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0"></div>
              <span><strong className="text-white">Molybdenum/Rhodium:</strong> Anode materials that provide ideal characteristic X-ray spikes.</span>
            </li>
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0"></div>
              <span><strong className="text-white">Compression:</strong> Thins the breast to reduce scatter, motion blur, and patient dose.</span>
            </li>
          </ul>
        </section>

        <section className="bg-blue-900/10 border border-blue-900/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Fluoroscopy</h3>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <span><strong className="text-white">Real-time Imaging:</strong> Continuous X-ray beam for viewing dynamic motion.</span>
            </li>
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <span><strong className="text-white">Image Intensifier (XRII):</strong> Converts X-rays to light and intensifies them by 5000x+.</span>
            </li>
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <span><strong className="text-white">Dose Concern:</strong> Exposure times are much longer; requires tight collimation and pulsed beams.</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-slate-700 p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8">Chapter 5 Recap</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Key Principles</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Contrast is driven by Z differences and K-edges.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Resolution is limited by source blur and detectors.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Noise is improved by increasing mA or time (dose).</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Scatter is the primary degrader of contrast/SNR.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-orange-400 font-bold uppercase tracking-widest text-sm">Likely Exam Tasks</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Calculate mAs for density maintenance at a new distance.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Solve for magnification M and source blur D'.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Compare Indirect vs Direct flat panel detectors.</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Explain the Anode Heel Effect and its compensation.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-between pt-10 border-t border-slate-800">
        <Link href="/chapters/chapter-4" className="flex items-center gap-3 text-slate-400 hover:text-white group transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          <div>
            <div className="text-xs uppercase text-slate-500">Previous</div>
            <div className="font-bold">Chapter 4: Physics of Radiography</div>
          </div>
        </Link>
        <Link href="/chapters/chapter-6" className="flex items-center gap-3 text-blue-400 hover:text-white text-right group transition-all">
          <div>
            <div className="text-xs uppercase text-slate-500">Next</div>
            <div className="font-bold">Chapter 6: Computed Tomography</div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}