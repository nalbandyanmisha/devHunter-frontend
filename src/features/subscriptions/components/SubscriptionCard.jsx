import { useState } from 'react';

import SubscriptionHeader from './SubscriptionHeader.jsx';
import CardContent from '@/components/cards/CardContent';
import Card from '@/components/cards/Card';

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
        languages={subscription.languages}
        experiences={subscription.experiences}
        salaryRange={subscription.salaryRange}
        positions={subscription.positions}
      />
    </Card>
  );
};

export default SubscriptionCard;
