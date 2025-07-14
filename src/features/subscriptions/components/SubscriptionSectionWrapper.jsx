import { SubscriptionProvider } from '../context/SubscriptionContext';
import SubscriptionSection from './SubscriptionSection';

export default function SubscriptionSectionWrapper(props) {
  return (
    <SubscriptionProvider>
      <SubscriptionSection {...props} />
    </SubscriptionProvider>
  );
}
