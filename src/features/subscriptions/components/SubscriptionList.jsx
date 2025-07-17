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
        <div className="flex flex-col gap-2.25">
          <div className="flex items-center justify-between">
            <p className="text-heading-sm">Your Subscriptions</p>
          </div>
          <div className="w-full overflow-x-auto">
            <div className="flex gap-4 w-fit">
              <CardList
                items={subscriptions}
                renderItem={(sub) => (
                  <SubscriptionCard
                    key={sub.id}
                    subscription={sub}
                    selected={selectedSubscription?.id === sub.id}
                    onClick={() => selectSubscription(sub.id)}
                  />
                )}
              />
            </div>
          </div>
        </div>
      )
  );
}
