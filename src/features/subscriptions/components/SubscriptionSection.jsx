import { useEffect } from 'react';
import { useSubscriptionContext } from '../context/SubscriptionContext';
import SubscriptionForm from './SubscriptionForm';
import SubscriptionList from './SubscriptionList';

export default function SubscriptionSection({ onSubscriptionSelect, metadata }) {
  const { selectedSubscription } = useSubscriptionContext([]);

  useEffect(() => {
    onSubscriptionSelect(selectedSubscription);
  }, [selectedSubscription]);

  return (
    <div className="flex flex-rows-1 gap-20">
      <div className="w-fit">
        <SubscriptionForm />
      </div>
      <div className="flex-1 min-w-0">
        <SubscriptionList metadata={metadata} />
      </div>
    </div>
  );
}
