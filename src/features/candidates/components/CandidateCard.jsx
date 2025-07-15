import { useState } from 'react';
import { useMatchingContext } from '@/features/matching/context/MatchingContext';
import CandidateHeader from './CandidateHeader.jsx';
import CardContent from '@/components/cards/CardContent';
import Card from '@/components/cards/Card';

const CandidateCard = ({ candidate }) => {
  const { matchedTags } = useMatchingContext();
  const isNew = matchedTags[candidate.id]?.isNew;

  return (
    <Card> 
      <CandidateHeader firstName={candidate.firstName} lastName={candidate.lastName} isNew={isNew}></CandidateHeader>
      <CardContent
        items={{
          languages: candidate.languages,
          experiences: candidate.experiences,
          salaryRange: candidate.salaryRange,
          positions: candidate.positions,
        }}
        matchedTags={matchedTags[candidate.id]}
      />
    </Card>
  );
};

export default CandidateCard;
