import { useState } from 'react';

import SubscriptionHeader from './SubscriptionHeader.jsx';
import CardContent from '@/components/cards/CardContent';
import Card from '@/components/cards/Card';

const SubscriptionCard = ({ subscription, totalCandidates, newCandidates, selected, onClick }) => {
  return (
    <Card
      header={'subscription'}
      totalCandidates={totalCandidates}
      newCandidates={newCandidates}
      isSelected={selected}
      onClick={onClick}
    >
      <SubscriptionHeader totalCandidates={totalCandidates} newCandidates={newCandidates} isSelected={selected}/>
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
