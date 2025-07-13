import SubscriptionForm from './SubscriptionForm';
import SubscriptionCard from './SubscriptionCard';
import CardList from '@/components/cards/CardList';

export default function SubscriptionSection({
  subscriptions,
  selectedId,
  onSelect,
  onAdd,
}) {
  return (
    <div className="flex flex-rows-1 gap-20">
      <div className="w-fit">
        <SubscriptionForm onSubmit={onAdd} />
      </div>
      <div className="flex flex-grow">
        {subscriptions.length === 0 ? (
          <div className="w-full h-full place-content-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-center text-[40px] leading-[48px] font-bold">No Mathings</h1>
              <span className="text-center text-[14px] leading-[20px] font-normal text-[#6D7883]">We will let you know when a match is found</span>
            </div>
          </div>
        ) : (
            <div className="subscriptions">
              <div className="flex flex-col gap-2.25">
                <div className="flex items-center justify-between">
                  <p className="text-[18px] leading-[24px]">Your subscriptions</p>
                </div>
                <div className="grid grid-row gap-2.25">
                  <CardList
                    items={subscriptions}
                    selectable
                    selectedId={selectedId}
                    onSelect={onSelect}
                    renderItem={(item, props) => (
                      <SubscriptionCard key={item.id} subscription={item} {...props} />
                    )}
                  />
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
