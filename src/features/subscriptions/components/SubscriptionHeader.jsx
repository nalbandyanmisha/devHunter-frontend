import { useMatchingContext } from '@/features/matching/context/MatchingContext';
import { SuccessIcon } from '@/icons/index.jsx';

const SubscriptionHeader = () => {
  const { totalMatches, newMatches } = useMatchingContext();
  return (
    <header className="flex justify-between items-center">
      <span className="text-caption text-[#6D7883]">
        Total candidates: {totalMatches} | New candidates: {newMatches}
      </span>
    </header>
  );
}

export default SubscriptionHeader;
