import { useState } from 'react';

import SubscriptionHeader from './../headers/SubscriptionHeader.jsx';
import CardContent from './CardContent';
import Card from './Card';

const SubscriptionCard = ({ subscription, totalCandidates, newCandidates, isSelected, onSelect }) => {
  return (
    <Card
      header={'subscription'}
      totalCandidates={totalCandidates}
      newCandidates={newCandidates}
      isSelected={isSelected}
      onClick={onSelect}
    >
      <SubscriptionHeader totalCandidates={totalCandidates} newCandidates={newCandidates} isSelected={isSelected}/>
      <CardContent
        languages={subscription.techLanguages}
        experiences={subscription.experience}
        salaryRange={subscription.salaryRange}
        positions={subscription.position}
      />
    </Card>
  );
};

export default SubscriptionCard;
