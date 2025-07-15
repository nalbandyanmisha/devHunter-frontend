import { useRef, useMemo } from 'react';
import { MatchingContext } from './MatchingContext';

export function MatchingProvider({ selectedSubscription, matchedCandidates, children }) {
  // Mutable ref for seen candidate IDs
  const seenCandidateIdsRef = useRef(new Set());

  // Compute tags and track isNew before side-effects
  const matchedTags = useMemo(() => {
    const map = {};

    for (const candidate of matchedCandidates) {
      const id = candidate.id;
      const isNew = !seenCandidateIdsRef.current.has(id);

      map[id] = {
        ...candidate.matchedTagsByField,
        isNew,
      };

      // Mark as seen so it's not new next time
      seenCandidateIdsRef.current.add(id);
    }

    return map;
  }, [matchedCandidates]);

  const totalMatches = matchedCandidates.length;
  const newMatches = matchedCandidates.filter(c => matchedTags[c.id]?.isNew).length;

  const value = {
    totalMatches,
    newMatches,
    matchedTags,
    isNew: (id) => matchedTags[id]?.isNew ?? false,
  };

  return (
    <MatchingContext.Provider value={value}>
      {children}
    </MatchingContext.Provider>
  );
}
