import { useState, useMemo } from 'react';
import { getMatchingCandidates } from '../utils';
import { useCandidatesContext } from '@/features/candidates/context/CandidatesContext';
import SubscriptionSectionWrapper from '@/features/subscriptions/components/SubscriptionSectionWrapper';
import CandidateSection from '@/features/candidates/components/CandidateSection';

export default function MatchSection() {
  const { candidates } = useCandidatesContext();
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const matchingCandidates = useMemo(() => {
    return getMatchingCandidates(candidates, selectedSubscription);
  }, [candidates, selectedSubscription]);

  return (
    <section className="flex flex-col gap-16">
      <SubscriptionSectionWrapper onSubscriptionSelect={setSelectedSubscription} />
      {selectedSubscription && (
        <CandidateSection
          candidates={matchingCandidates}
          selectedSubscription={selectedSubscription}
        />
      )}
    </section>
  );
}

