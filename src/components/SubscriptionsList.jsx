import { useState} from 'react';
import SubscriptionCard from './card/SubscriptionCard.jsx';


const SubscriptionsList = function({ data: { subscriptions, totalCandidates, newCandidates }, onSelect }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (subscription) => {
    console.log('selectedId type:', typeof selectedId, 'subscription.id type:', typeof subscription.id);
    setSelectedId(subscription.id);
    onSelect(subscription);
  };
  return (
    subscriptions.length === 0 ? (
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-[40px] leading-[48px] font-bold">No Matchings</h1>
          <span className="text-center text-[14px] leading-[20px] font-normal text-[#6D7883]">We will let you know when a match is found</span>
        </div>
      </div>
    ) : (
      <div className="grid grid-row gap-2.25">  
        <h1 className="text-[18px] leading-[24px]">Your subscriptions</h1>
        <div className="w-full flex flex-col-2 gap-5.25">
          {subscriptions.map((subscription) => (
            <SubscriptionCard
              key={subscription.id}
              data={{
                totalCandidates,
                newCandidates,
                subscription,
              }}
              isSelected={selectedId === subscription.id}
              onClick={() => handleSelect(subscription)}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default SubscriptionsList;
