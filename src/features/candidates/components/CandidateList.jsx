import CardList from '@/components/cards/CardList';
import CandidateCard from './CandidateCard';

export default function CandidateList({ candidates, header, selectedSubscription }) {
  return (
    <CardList
      items={candidates}
      header={"candidates"}
      renderItem={(candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          selectedSubscription={selectedSubscription}
        />
      )}
    />
  );
}
