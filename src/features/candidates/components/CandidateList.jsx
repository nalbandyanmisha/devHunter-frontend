import { useMatchingContext } from '@/features/matching/context/MatchingContext';
import CardList from '@/components/cards/CardList';
import CandidateCard from './CandidateCard';

export default function CandidateList({ candidates, header }) {
  return (
    <CardList
      items={candidates}
      heading={"Candidates"}
      renderItem={(candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
        />
      )}
    />
  );
}
