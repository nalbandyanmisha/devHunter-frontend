import CandidateList from './CandidateList';

export default function CandidateSection({ candidates, selectedSubscription }) {
  if (!candidates || candidates.length === 0) return null;

  return (
    <div className="candidates">
      <section className="flex flex-col w-320 h-fill gap-2">
        <p className="text-[18px] leading-[24px]">Candidates</p>
        <CandidateList
          candidates={candidates}
          selectedSubscription={selectedSubscription}
        />
      </section>
    </div>
  );
}
