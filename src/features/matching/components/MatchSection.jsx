
import { useState, useMemo } from 'react';
import { getMatchingCandidates } from '../utils';
import SubscriptionSection from '@/features/subscriptions/components/SubscriptionSection';
import CandidateSection from '@/features/candidates/components/CandidateSection';

export default function MatchSection({ subscriptions, candidates, onAdd }) {
  const [selectedId, setSelectedId] = useState(null);

  const selectedSubscription = useMemo(() => {
    return subscriptions.find((sub) => sub.id === selectedId);
  }, [subscriptions, selectedId]);

  const matchingCandidates = useMemo(() => {
    return getMatchingCandidates(candidates, selectedSubscription);
  }, [candidates, selectedSubscription]);

  return (
    <section className="flex flex-col gap-16">
        <SubscriptionSection
          subscriptions={subscriptions}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onAdd={onAdd}
      />
      {selectedId && (
        <CandidateSection candidates={matchingCandidates} />
      )}
    </section>
  );
}

