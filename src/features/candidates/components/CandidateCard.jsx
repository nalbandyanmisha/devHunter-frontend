import { useState } from 'react';
import { useMatchingContext } from '@/features/matching/context/MatchingContext';
import CandidateHeader from './CandidateHeader.jsx';
import CardContent from '@/components/cards/CardContent';

const CandidateCard = ({ candidate }) => {
  console.log('Rendering CandidateCard for:', candidate);
  return (
    <section className="w-[308px] p-4 cursor-pointer box-border card-default">
      <div className="grid grid-row gap-4">
        <CandidateHeader firstName={candidate.firstName} lastName={candidate.lastName} isNew={candidate.isNew}></CandidateHeader>
        <CardContent
          fieldValues={{
            languages: candidate.languages,
            experience: candidate.experience,
            salaryRange: candidate.salaryRange,
            position: candidate.position,
          }}
          matchedTags={candidate.matchedTagsByField}
        />
      </div>
    </section>
  );
};

export default CandidateCard;
