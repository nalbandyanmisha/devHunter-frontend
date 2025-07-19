import { useState } from 'react';

import { SuccessIcon } from '@/icons/index.jsx';
import SubscriptionHeader from './SubscriptionHeader.jsx';
import CardContent from '@/components/cards/CardContent';

const SubscriptionCard = ({ subscription, selected, onClick }) => {
  return (
    <section className={`relative w-[334px] p-4 cursor-pointer box-border ${selected ? "card-selected" : "card-default"}`} onClick={onClick}>
      {selected && (
        <div className="absolute top-3 right-3 flex items-center justify-center">
          <SuccessIcon />
        </div>
      )}
      <div className="w-full h-full">
        <div className="grid grid-row gap-2">
          <SubscriptionHeader />
          <CardContent
            fieldValues={{
              languages: subscription.languages,
              experience: subscription.experience,
              salaryRange: subscription.salaryRange,
              position: subscription.position,
            }}
          />
        </div>
      </div>

    </section>
  );
};

export default SubscriptionCard;
