import { useState } from 'react';
import { useMatchingContext } from '@/features/matching/context/MatchingContext';
import CandidateHeader from './CandidateHeader.jsx';
import CardContent from '@/components/cards/CardContent';

const CandidateCard = ({ candidate }) => {
  const { matchedTags } = useMatchingContext();
  const isNew = matchedTags[candidate.id]?.isNew;

  return (
    <section className="w-[308px] p-4 cursor-pointer box-border card-default">
      <div className="grid grid-row gap-4">
        <CandidateHeader firstName={candidate.firstName} lastName={candidate.lastName} isNew={isNew}></CandidateHeader>
        <CardContent
          fieldValues={{
            languages: candidate.languages,
            experiences: candidate.experiences,
            salaryRange: candidate.salaryRange,
            positions: candidate.positions,
          }}
          matchedTags={matchedTags[candidate.id]}
        />
      </div>
    </section>
  );
};

export default CandidateCard;
