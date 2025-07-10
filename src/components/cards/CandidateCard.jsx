import { useState } from 'react';

import CandidateHeader from './../headers/CandidateHeader.jsx';
import CardContent from './CardContent';
import Card from './Card';

const CandidateCard = ({ candidate}) => {
  return (
    <Card> 
      <CandidateHeader firstName={candidate.firstName} lastName={candidate.lastName}></CandidateHeader>
      <CardContent
        languages={candidate.techLanguages}
        experiences={candidate.experience}
        salaryRange={candidate.salaryRange}
        positions={candidate.position}
      />
    </Card>
  );
};

export default CandidateCard;
