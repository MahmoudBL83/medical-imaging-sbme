import React from 'react';
import { Eye, Search, Zap, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

export default function Section1_Intro() {
  return (
    <section id="introduction" className="space-y-6 stagger scroll-mt-24">
      <span className="claude-kicker text-teal-400">Section 3.1</span>
      <h2 className="text-3xl font-bold text-white">Introduction to Image Quality</h2>

      <div className="claude-surface p-8 mb-8">
        <p className="text-slate-300 text-lg leading-relaxed">
          The primary purpose of a medical imaging system is to create images of the internal structures and functions of the human body that can be used by medical professionals to diagnose abnormal conditions, guide therapeutic procedures, and monitor treatment. The ability to successfully accomplish these tasks strongly depends on <strong>image quality</strong>—the degree to which an image allows medical professionals to accomplish their goals.
        </p>
      </div>

      <h3 className="text-xl font-bold text-white mb-4">The Six Pillars of Image Quality</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Contrast */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-white hover:bg-slate-800/80 transition-colors">
          <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
            <Eye className="w-4 h-4 text-slate-400" /> Contrast
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            The difference between image characteristics (e.g., intensities) of an object and its surrounding background. High contrast makes identifying individual objects easier.
          </p>
        </div>
        
        {/* Resolution */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-white hover:bg-slate-800/80 transition-colors">
          <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400" /> Resolution
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            The ability of a system to depict details. High resolution systems create diagnostic quality images, whereas low resolution introduces blurring and loss of fine detail.
          </p>
        </div>
        
        {/* Noise */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-white hover:bg-slate-800/80 transition-colors">
          <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-slate-400" /> Noise
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Random fluctuations in image intensity that obscure real anatomy. Different modalities inherently suffer from varying degrees of noise (e.g., PET has high noise).
          </p>
        </div>

        {/* Artifacts */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-slate-700 hover:bg-slate-800/80 transition-colors">
          <h3 className="text-slate-300 font-bold text-sm mb-2 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-slate-500" /> Artifacts
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Artificial features in the final image that do not represent valid objects within the patient, which can obscure important features or cause false diagnoses.
          </p>
        </div>

        {/* Distortion */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-slate-700 hover:bg-slate-800/80 transition-colors">
          <h3 className="text-slate-300 font-bold text-sm mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-slate-500" /> Distortion
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Geometric misrepresentation of an object's size, shape, or relative position (e.g., magnification). Must be corrected for true anatomical representation.
          </p>
        </div>

        {/* Accuracy */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-slate-700 hover:bg-slate-800/80 transition-colors">
          <h3 className="text-slate-300 font-bold text-sm mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-slate-500" /> Accuracy
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Conformity to truth and clinical utility. An accurate image should yield a high chance of detecting pathologies and distinguishing them from healthy tissue.
          </p>
        </div>
      </div>
    </section>
  );
}
