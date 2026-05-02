import React from 'react';
import { Radio, ScanLine } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section3_Forms() {
  return (
    <section id="forms" className="space-y-8 stagger scroll-mt-24 mt-16 border-t border-slate-800 pt-16">
      <header>
        <span className="claude-kicker text-blue-400">Section 4.3</span>
        <h2 className="text-3xl font-bold text-white mt-2">Forms of Ionizing Radiation</h2>
        <p className="text-slate-400 mt-4 leading-relaxed">
          Ionizing radiation is divided into two broad categories: particulate radiation and electromagnetic (EM) radiation.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Particulate Radiation */}
        <div className="claude-surface p-8">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <ScanLine className="w-5 h-5 text-indigo-400" /> Particulate Radiation
           </h3>
           <p className="text-slate-300 text-sm leading-relaxed mb-6">
             Any subatomic particle (proton, neutron, electron) can be ionizing radiation if it possesses enough kinetic energy. In x-ray imaging, we are primarily concerned with <strong>unbound electrons</strong> accelerated across a potential difference in an x-ray tube.
           </p>
           
           <h4 className="text-indigo-400 font-bold text-sm mb-2">Relativistic Effects</h4>
           <p className="text-slate-400 text-sm leading-relaxed mb-4">
             As an electron approaches the speed of light, its relativistic mass increases. The electrons striking the anode in a 120 kV x-ray tube are traveling at <Latex formula="\approx 2.05 \times 10^8 \text{ m/s}" /> (a significant fraction of the speed of light), so relativistic kinetic energy calculations are required.
           </p>
           <div className="bg-slate-900 border border-slate-800 p-3 rounded text-center text-sm text-slate-300">
             <Latex formula="\text{KE} = mc^2 - m_0 c^2" />
           </div>
        </div>

        {/* Electromagnetic Radiation */}
        <div className="claude-surface p-8">
           <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Radio className="w-5 h-5 text-emerald-400" /> Electromagnetic Radiation
           </h3>
           <p className="text-slate-300 text-sm leading-relaxed mb-6">
             EM radiation consists of oscillating electric and magnetic waves traveling at the speed of light. It has no rest mass and no charge. It can be treated as a wave or as packets of energy called <strong>photons</strong>.
           </p>
           
           <div className="bg-slate-900 border border-slate-800 p-4 rounded text-center mb-6">
             <Latex formula="E = h\nu = \frac{hc}{\lambda}" displayMode />
           </div>
           
           <div className="border-l-4 border-emerald-500 bg-emerald-950/20 p-4 rounded-r text-sm text-emerald-200">
             <strong>X-Rays vs Gamma Rays:</strong> They are NOT distinguished by their energy or frequency, but by their origin. X-rays are created in the electron cloud, whereas gamma rays are created in the atomic nucleus during radioactive decay. Once produced, they behave identically.
           </div>
        </div>

      </div>
    </section>
  );
}
