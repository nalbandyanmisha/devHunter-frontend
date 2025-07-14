import CardList from '@/components/cards/CardList';
import SubscriptionCard from './SubscriptionCard';
import { useSubscriptionContext } from '../context/SubscriptionContext';

export default function SubscriptionList() {
  const { subscriptions, selectedSubscription, selectSubscription } = useSubscriptionContext();

  return (
    subscriptions.length === 0 ? (
      <div className="w-full h-full place-content-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-[40px] leading-[48px] font-bold">No Mathings</h1>
          <span className="text-center text-[14px] leading-[20px] font-normal text-[#6D7883]">We will let you know when a match is found</span>
        </div>
      </div>
    ) : (
        <CardList
          items={subscriptions}
          heading={"Your subscriptions"}
          renderItem={(sub) => (
            <SubscriptionCard
              key={sub.id}
              subscription={sub}
              selected={selectedSubscription?.id === sub.id}
              onClick={() => selectSubscription(sub.id)}
            />
          )}
        />
      )
  );
}
