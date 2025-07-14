import { useEffect } from 'react';
import { useSubscriptionContext } from '../context/SubscriptionContext';
import SubscriptionForm from './SubscriptionForm';
import SubscriptionList from './SubscriptionList';

export default function SubscriptionSection({ onSubscriptionSelect }) {
  const { selectedSubscription } = useSubscriptionContext([]);

  useEffect(() => {
    onSubscriptionSelect(selectedSubscription);
  }, [selectedSubscription, onSubscriptionSelect]);

  return (
    <div className="flex flex-rows-1 gap-20">
      <div className="w-fit">
        <SubscriptionForm />
      </div>
      <div className="flex flex-grow">
        <SubscriptionList />
      </div>
    </div>
  );
}
