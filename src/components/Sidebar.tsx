'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const chapters = [
    { number: 1, title: 'Introduction', path: '/chapters/chapter-1' },
    { number: 2, title: 'Signals and Systems', path: '/chapters/chapter-2' },
    { number: 3, title: 'Image Quality', path: '/chapters/chapter-3' },
    { number: 4, title: 'Physics of Radiography', path: '/chapters/chapter-4' },
    { number: 5, title: 'Projection Radiography', path: '/chapters/chapter-5' },
    { number: 6, title: 'Computed Tomography', path: '/chapters/chapter-6' },
    { number: 7, title: 'Physics of Nuclear Medicine', path: '/chapters/chapter-7' },
    { number: 8, title: 'Planar Scintigraphy', path: '/chapters/chapter-8' },
    { number: 9, title: 'Emission CT', path: '/chapters/chapter-9' },
  ];

  const resources = [
    { title: 'Glossary', path: '/glossary' },
    { title: 'Formula Sheet', path: '/formulas' },
    { title: 'High-Yield Review', path: '/high-yield' },
    { title: 'Common Mistakes', path: '/common-mistakes' },
    { title: 'Practice Questions', path: '/practice-questions' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800 p-2 rounded-lg text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-100 min-h-screen flex flex-col border-r border-slate-700 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 border-b border-slate-700">
          <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-300">
            Medical Imaging
          </Link>
          <p className="text-xs text-slate-400 mt-1">Study Guide - Chapters 1-9</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Chapters</h3>
            <ul className="space-y-1">
              {chapters.map((chapter) => (
                <li key={chapter.number}>
                  <Link
                    href={chapter.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    <span className="font-medium">{chapter.number}.</span> {chapter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Resources</h3>
            <ul className="space-y-1">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link
                    href={resource.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-700">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm text-slate-400 hover:text-white">
            ← Home
          </Link>
        </div>
      </aside>
    </>
  );
}