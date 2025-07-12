import { useState } from 'react';
import { generateCandidates } from './../utils/generateCandidates.js';

export function useCandidates(initial = []) {
  const [candidates, setCandidates] = useState(initial);

  const generateMoreCandidates = (count = 10) => {
    const newOnes = generateCandidates(count);
    setCandidates(prev => [...prev, ...newOnes]);
  };

  return {
    candidates,
    generateMoreCandidates,
  };
}
