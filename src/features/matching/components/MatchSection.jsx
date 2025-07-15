import { useState, useEffect, useMemo } from 'react';
import { getMatchingCandidates } from '../utils';
import { useMatchingContext } from '@/features/matching/context/MatchingContext';
import { useCandidateContext } from '@/features/candidates/context/CandidateContext';
import { MatchingProvider } from '../context/MatchingProvider';
import SubscriptionSectionWrapper from '@/features/subscriptions/components/SubscriptionSectionWrapper';
import CandidateSection from '@/features/candidates/components/CandidateSection';

export default function MatchSection() {
  const { candidates } = useCandidateContext();
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const matchedCandidates = useMemo(() => {
    return getMatchingCandidates(candidates, selectedSubscription);
  }, [candidates, selectedSubscription]);

  return (
    <MatchingProvider
      selectedSubscription={selectedSubscription}
      matchedCandidates={matchedCandidates}
    >
      <section className="flex flex-col gap-16">
        <SubscriptionSectionWrapper
          onSubscriptionSelect={setSelectedSubscription}
        />

        {matchedCandidates.length !== 0 && (
          <CandidateSection
            candidates={matchedCandidates}
            heading={"Candidates"}
          />
        )}
      </section>
    </MatchingProvider>
  );
}

