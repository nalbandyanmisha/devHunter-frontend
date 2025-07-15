import { useState } from 'react';

import SubscriptionHeader from './SubscriptionHeader.jsx';
import CardContent from '@/components/cards/CardContent';
import Card from '@/components/cards/Card';

const SubscriptionCard = ({ subscription, selected, onClick }) => {
  return (
    <Card
      header={'subscription'}
      isSelected={selected}
      onClick={onClick}
    >
      <SubscriptionHeader isSelected={selected}/>
      <CardContent
        items={{
          languages: subscription.languages,
          experiences: subscription.experiences,
          salaryRange: subscription.salaryRange,
          positions: subscription.positions,
        }}
      />
    </Card>
  );
};

export default SubscriptionCard;
