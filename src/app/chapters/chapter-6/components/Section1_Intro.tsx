import React from 'react';
import { Layers, Cuboid, Disc } from 'lucide-react';
import Latex from '@/components/Latex';

export default function Section1_Intro() {
  return (
    <section id="introduction" className="space-y-6 stagger scroll-mt-24">
      <span className="claude-kicker text-blue-400">Section 6.1</span>
      <h2 className="text-3xl font-bold text-white">Introduction to Computed Tomography</h2>

      <div className="claude-surface p-8 mb-8 border-l-4 border-l-blue-500">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
           <p className="text-slate-300 text-lg leading-relaxed flex-1">
             A tomogram is an image of a single slice or plane within the body. X-ray computed tomography (CT) generates images of these slices, <strong>eliminating the artifacts of overlaying structures</strong> that dominate conventional radiographs.
           </p>
           
           <svg viewBox="0 0 250 150" className="w-full max-w-[250px] h-32 bg-slate-900 border border-slate-700 rounded-lg p-2 shadow-inner">
              {/* 3D Cylinder / Body */}
              <ellipse cx="60" cy="30" rx="30" ry="10" className="fill-slate-800 stroke-slate-500 stroke-1" />
              <path d="M 30,30 L 30,110 A 30 10 0 0 0 90 110 L 90,30" className="fill-slate-800/50 stroke-slate-500 stroke-1" />
              <text x="60" y="130" textAnchor="middle" className="fill-slate-500 text-[8px]">3D Patient Volume</text>
              
              {/* Slice Plane */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 5; 0 -5; 0 5" dur="3s" repeatCount="indefinite" />
                <path d="M 20,70 L 80,50 L 100,70 L 40,90 Z" className="fill-blue-500/30 stroke-blue-400 stroke-1" />
              </g>
              
              {/* Arrow */}
              <path d="M 95,70 L 155,70" className="stroke-slate-400 stroke-1 stroke-dashed" />
              <polygon points="155,70 150,67 150,73" className="fill-slate-400" />
              
              {/* 2D Extracted Slice */}
              <circle cx="200" cy="70" r="30" className="fill-blue-900/50 stroke-blue-400 stroke-2" />
              <circle cx="200" cy="70" r="10" className="fill-slate-600 stroke-white stroke-1" /> {/* Spine/Organ */}
              <ellipse cx="185" cy="65" rx="5" ry="8" className="fill-slate-700" /> {/* Lung/organ */}
              <ellipse cx="215" cy="65" rx="5" ry="8" className="fill-slate-700" />
              <text x="200" y="115" textAnchor="middle" className="fill-blue-400 text-[8px] font-bold">Isolated 2D Slice</text>
              <text x="200" y="125" textAnchor="middle" className="fill-blue-400 text-[6px]">(No Superimposition)</text>
           </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl flex flex-col justify-between">
              <div>
                 <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <Disc className="w-4 h-4 text-blue-400" /> The Basic Mechanism
                 </h3>
                 <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    Imagine taking a series of conventional x-rays while rotating the patient slightly between each exposure. Each 1-D projection line from these views contains information about an axial cross-section from a different angle.
                 </p>
              </div>
              
              <svg viewBox="0 0 200 120" className="w-full h-24 mt-auto bg-slate-950/50 rounded-lg p-2">
                 <g transform="translate(100, 60)">
                    {/* Patient Cross-section */}
                    <circle cx="0" cy="0" r="15" className="fill-purple-900/50 stroke-purple-500 stroke-1" />
                    <circle cx="-5" cy="-5" r="4" className="fill-slate-600" />
                    <circle cx="5" cy="5" r="3" className="fill-slate-500" />
                    
                    {/* Rotating System */}
                    <g>
                       <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
                       
                       {/* Source */}
                       <circle cx="0" cy="-40" r="4" className="fill-yellow-400" />
                       <text x="10" y="-40" className="fill-yellow-400 text-[6px]">Source</text>
                       
                       {/* Beam */}
                       <path d="M 0,-40 L -25,35 L 25,35 Z" className="fill-yellow-400/20 stroke-yellow-400 stroke-1 stroke-dashed" />
                       
                       {/* Detector */}
                       <path d="M -30,40 Q 0,45 30,40" className="fill-none stroke-emerald-400 stroke-4" />
                       <text x="0" y="52" textAnchor="middle" className="fill-emerald-400 text-[6px]">Detector</text>
                       
                       {/* Detected Profile */}
                       <path d="M -25,40 Q -15,35 -5,40 T 15,35 T 25,40" className="fill-none stroke-white stroke-1" />
                    </g>
                 </g>
              </svg>
           </div>

           <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                 <Layers className="w-4 h-4 text-indigo-400" /> The Mathematics
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                 The mathematical transformation that maps a 2-D object to a collection of 1-D projections over many angles is called the <strong>2-D Radon transform</strong>. CT reconstructs the slice by taking the inverse Radon transform.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
