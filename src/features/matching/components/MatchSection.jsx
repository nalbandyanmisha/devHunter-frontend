import { useState, useEffect, useRef, useMemo } from 'react';
import { useMatchingContext } from '@/features/matching/context/MatchingContext';
import { getCandidatesBySubscription } from '@/shared/api';
import { getMatchedTags, isCandidateMatch } from '@/features/matching/utils';
import { MatchingProvider } from '../context/MatchingProvider';
import SubscriptionSectionWrapper from '@/features/subscriptions/components/SubscriptionSectionWrapper';
import CandidateSection from '@/features/candidates/components/CandidateSection';

export default function MatchSection() {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [matchedCandidates, setMatchedCandidates] = useState([]);
  const seenCandidateIdsRef = useRef(new Set());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedSubscription) return;

    setLoading(true);

    getCandidatesBySubscription(selectedSubscription)
      .then((candidates) => {
        for (const candidate of candidates) {
          candidate.matchedTagsByField = getMatchedTags(candidate, selectedSubscription);
          candidate.isNew = !seenCandidateIdsRef.current.has(candidate._id);
          seenCandidateIdsRef.current.add(candidate._id);
        }
        setMatchedCandidates(candidates);
      })
      .catch((err) => {
        console.error('Failed to fetch matching candidates:', err);
        setMatchedCandidates([]);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [selectedSubscription]);

  const totalMatches = matchedCandidates.length;
  const newMatches = matchedCandidates.filter(c => c.isNew).length;

  return (
    <MatchingProvider
      matchedCandidates={matchedCandidates}
    >
      <section className="flex flex-col gap-16">
        <SubscriptionSectionWrapper
          onSubscriptionSelect={setSelectedSubscription}
          metadata={{ totalMatches, newMatches }}
        />

        {matchedCandidates.length !== 0 && (
          <CandidateSection
            candidates={matchedCandidates}
          />
        )}
      </section>
    </MatchingProvider>
  );
}

