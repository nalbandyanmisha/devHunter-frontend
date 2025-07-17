import { useState } from 'react';

import SubscriptionHeader from './SubscriptionHeader.jsx';
import CardContent from '@/components/cards/CardContent';
import Card from '@/components/cards/Card';

const SubscriptionCard = ({ subscription, selected, onClick }) => {
  return (
    <Card
      isSelected={selected}
      onClick={onClick}
    >
      <div className="grid grid-row gap-2">
        <SubscriptionHeader />
        <CardContent
          fieldValues={{
            languages: subscription.languages,
            experiences: subscription.experiences,
            salaryRange: subscription.salaryRange,
            positions: subscription.positions,
          }}
        />
      </div>
    </Card>
  );
};

export default SubscriptionCard;
