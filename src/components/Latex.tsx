'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';

interface LatexProps {
  formula: string;
  displayMode?: boolean;
}

export default function Latex({ formula, displayMode = false }: LatexProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(formula, containerRef.current, {
          displayMode,
          throwOnError: false,
        });
      } catch (e) {
        containerRef.current.textContent = formula;
      }
    }
  }, [formula, displayMode]);

  return <span ref={containerRef} />;
}