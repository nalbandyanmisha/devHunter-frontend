import { useMatchingContext } from '@/features/matching/context/MatchingContext';
import CardList from '@/components/cards/CardList';
import CandidateCard from './CandidateCard';

export default function CandidateList({ candidates, header }) {
  return (
    <div className="flex flex-col gap-2.25">
      <div className="flex items-center justify-between">
        <p className="text-heading-sm">Candidates</p>
      </div>
        <div className="flex flex-wrap gap-4">
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
        </div>
    </div>
  );
}
