'use client';

import Link from 'next/link';
import Latex from '@/components/Latex';
import { BookOpen } from 'lucide-react';

export default function Glossary() {
  const terms = [
    // Chapter 1 & General
    { term: "Modality", definition: <p>A specific method of acquiring medical images (e.g., X-ray, Ultrasound, MRI, CT, PET).</p>, chapter: "1" },
    { term: "Ionizing Radiation", definition: <p>Radiation carrying enough energy to liberate electrons from atoms or molecules, thereby ionizing them (e.g., X-rays, Gamma rays).</p>, chapter: "1, 4" },
    { term: "Tomography", definition: <p>Imaging by sections or sectioning, through the use of any kind of penetrating wave. Yields 3D cross-sectional images rather than 2D projections.</p>, chapter: "1, 6" },
    
    // Chapter 2
    { term: "Linear Shift-Invariant (LSI) System", definition: <p>A system that satisfies both superposition (linearity) and time/space invariance. Its output is perfectly described by the convolution of the input and the system's impulse response.</p>, chapter: "2" },
    { term: "Convolution", definition: <p>A mathematical operation on two functions producing a third function that expresses how the shape of one is modified by the other. <Latex formula="g(x) = f(x) * h(x)" /></p>, chapter: "2" },
    { term: "Delta Function", definition: <p>A generalized function <Latex formula="\delta(x)" /> that is zero everywhere except at zero, with an integral of one. Represents an idealized point source.</p>, chapter: "2" },
    { term: "Point Spread Function (PSF)", definition: <p>The impulse response of a 2D imaging system. Describes how a perfect point of light or radiation is blurred by the system.</p>, chapter: "2" },
    { term: "Fourier Transform", definition: <p>A mathematical transform that decomposes functions depending on space or time into functions depending on spatial or temporal frequency.</p>, chapter: "2" },
    
    // Chapter 3
    { term: "Contrast", definition: <p>The relative difference in signal between an object of interest and the background. Essential for visibility.</p>, chapter: "3" },
    { term: "Resolution (Spatial)", definition: <p>The ability of an imaging system to accurately depict two distinct, closely spaced objects as separate entities. Often quantified by FWHM.</p>, chapter: "3" },
    { term: "Signal-to-Noise Ratio (SNR)", definition: <p>The ratio of the mean signal amplitude to the standard deviation of the noise (<Latex formula="\sigma" />). <Latex formula="\text{SNR} = S/\sigma" />.</p>, chapter: "3" },
    { term: "Modulation Transfer Function (MTF)", definition: <p>The magnitude of the optical transfer function. It describes the spatial frequency response of an imaging system (how well varying spatial frequencies are preserved).</p>, chapter: "3" },
    { term: "Nyquist Theorem", definition: <p>A principle stating that a continuous signal must be sampled at a frequency <Latex formula="f_s \ge 2f_{max}" /> to perfectly reconstruct it without aliasing.</p>, chapter: "3" },
    { term: "Detective Quantum Efficiency (DQE)", definition: <p>A measure of the combined effects of the signal and noise performance of an imaging system. <Latex formula="\text{DQE} = \text{SNR}_{out}^2 / \text{SNR}_{in}^2" />.</p>, chapter: "3" },
    
    // Chapter 4
    { term: "Attenuation", definition: <p>The gradual loss in intensity of any kind of flux through a medium. In x-rays, it follows the Beer-Lambert law: <Latex formula="I = I_0 e^{-\mu x}" />.</p>, chapter: "4" },
    { term: "Photoelectric Effect", definition: <p>An interaction where an incident photon is completely absorbed by an inner-shell electron, ejecting it. The dominant interaction for producing image contrast.</p>, chapter: "4" },
    { term: "Compton Scatter", definition: <p>An inelastic scattering of a photon by an outer-shell electron. The photon loses energy and changes direction, causing "fog" or noise on the image.</p>, chapter: "4" },
    { term: "Bremsstrahlung", definition: <p>"Braking radiation." X-rays produced when an energetic electron decelerates while passing near an atomic nucleus. Creates a continuous x-ray spectrum.</p>, chapter: "4" },
    { term: "Characteristic X-rays", definition: <p>X-rays emitted when an outer-shell electron fills a vacancy in the inner shell of an atom, releasing a photon with discrete, characteristic energy.</p>, chapter: "4" },
    
    // Chapter 5
    { term: "Anode Heel Effect", definition: <p>A variation in x-ray beam intensity caused by the angle of the anode target. The beam is less intense on the anode side due to self-absorption.</p>, chapter: "5" },
    { term: "Focal Spot", definition: <p>The specific area on the anode target where electrons collide to produce x-rays. A smaller focal spot improves resolution but limits heat dissipation.</p>, chapter: "5" },
    { term: "Anti-scatter Grid", definition: <p>A device composed of parallel lead strips placed between the patient and detector to absorb off-axis Compton scattered photons, improving contrast.</p>, chapter: "5" },
    
    // Chapter 6
    { term: "Hounsfield Unit (HU)", definition: <p>A dimensionless unit used in CT to express linear attenuation coefficients. Water is 0 HU, air is -1000 HU, and dense bone is +1000 HU or higher.</p>, chapter: "6" },
    { term: "Radon Transform", definition: <p>An integral transform whose inverse is used to reconstruct images from medical CT scans. Represents the set of all 1D line integral projections.</p>, chapter: "6" },
    { term: "Filtered Backprojection", definition: <p>The classic analytic algorithm used in CT reconstruction. Projections are filtered in the frequency domain with a ramp filter before being smeared back across the image matrix.</p>, chapter: "6" },
    { term: "Beam Hardening", definition: <p>An artifact in CT where lower-energy photons in a polychromatic beam are absorbed first, making the remaining beam "harder" (higher average energy), causing dark streaks or halos.</p>, chapter: "6" },
    
    // Chapter 7
    { term: "Radioactive Decay Constant (λ)", definition: <p>The probability per unit time that a nucleus will decay. Related to half-life by <Latex formula="t_{1/2} = \ln(2)/\lambda" />.</p>, chapter: "7" },
    { term: "Positron Annihilation", definition: <p>When a positron collides with an electron, converting their combined mass into two 511 keV gamma rays emitted 180° apart.</p>, chapter: "7" },
    { term: "Isomeric Transition", definition: <p>A radioactive decay process where a metastable nucleus (e.g., Tc-99m) transitions to a lower energy state by emitting a gamma ray without changing its atomic or mass number.</p>, chapter: "7" },
    { term: "Radiopharmaceutical", definition: <p>A drug that contains a radioactive isotope, used in nuclear medicine for diagnosis or therapy. It consists of a radionuclide tagged to a biological tracer.</p>, chapter: "7" },
    
    // Chapter 8
    { term: "Anger Camera (Gamma Camera)", definition: <p>A device used to image gamma radiation emitting radioisotopes. Consists of a lead collimator, a NaI(Tl) scintillation crystal, and an array of photomultiplier tubes.</p>, chapter: "8" },
    { term: "Collimator", definition: <p>A heavy lead device with thousands of holes used to filter a stream of rays so that only those traveling parallel to a specified direction are allowed through.</p>, chapter: "8" },
    { term: "Photomultiplier Tube (PMT)", definition: <p>A vacuum tube device that detects extremely weak signals of light (scintillations) and multiplies the electrons produced by the photoelectric effect.</p>, chapter: "8" },
    
    // Chapter 9
    { term: "Line of Response (LOR)", definition: <p>In PET, the imaginary line drawn between two detectors that simultaneously register a 511 keV annihilation photon. The annihilation must have occurred somewhere along this line.</p>, chapter: "9" },
    { term: "Coincidence Detection", definition: <p>The electronic collimation method used in PET. An event is only recorded if two opposite detectors trigger within a tiny time window (e.g., 5 ns).</p>, chapter: "9" },
    { term: "Time-of-Flight (TOF) PET", definition: <p>An advanced PET technique that uses the exact difference in arrival times of the two coincidence photons to localize the annihilation point along the LOR.</p>, chapter: "9" }
  ];

  // Group terms alphabetically for better UX
  const groupedTerms = terms.sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="pb-20 fade-up max-w-[1400px] mx-auto">
      <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Glossary</span>
      </div>

      <header className="border-b border-slate-800 pb-8 mb-12 stagger">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-blue-400" />
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Master Glossary</h1>
        </div>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Comprehensive definitions for over 30 fundamental concepts spanning chapters 1 through 9.
        </p>
      </header>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 stagger">
        {groupedTerms.map((item, i) => (
          <div key={i} className="claude-surface border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors shadow-lg flex flex-col h-full group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">{item.term}</h3>
              <span className="text-xs font-semibold text-slate-500 bg-slate-800/50 px-2 py-1 rounded whitespace-nowrap">
                Ch. {item.chapter}
              </span>
            </div>
            <div className="text-sm text-slate-300 leading-relaxed flex-1">
              {item.definition}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}