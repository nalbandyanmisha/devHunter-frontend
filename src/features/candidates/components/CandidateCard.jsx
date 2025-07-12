import { useState } from 'react';

import CandidateHeader from './CandidateHeader.jsx';
import CardContent from './../../../components/cards/CardContent';
import Card from './../../../components/cards/Card';

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
