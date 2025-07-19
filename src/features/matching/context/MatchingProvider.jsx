import { useRef, useMemo } from 'react';
import { MatchingContext } from './MatchingContext';

export function MatchingProvider({ matchedCandidates, children }) {
  const totalMatches = matchedCandidates.length;
  const newMatches = matchedCandidates.filter(c => c.isNew).length;

  const value = {
    totalMatches,
    newMatches,
  };

  return (
    <MatchingContext.Provider value={value}>
      {children}
    </MatchingContext.Provider>
  );
}
