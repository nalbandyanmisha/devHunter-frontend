import CandidateCard from './CandidateCard';
import CardList from '@/components/cards/CardList';

export default function CandidateSection({ candidates }) {
  if (!candidates || candidates.length === 0) return null;

  return (
    <div className="candidates">
      <section className="flex flex-col w-320 h-fill gap-2">
        <p className="text-[18px] leading-[24px]">Candidates</p>
        <CardList
          items={candidates}
          renderItem={(candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          )}
        />
      </section>
    </div>
  );
}
