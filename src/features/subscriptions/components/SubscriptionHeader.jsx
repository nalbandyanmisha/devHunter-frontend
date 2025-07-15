import { useMatchingContext } from '@/features/matching/context/MatchingContext';
import { SuccessIcon } from '@/icons/index.jsx';

const SubscriptionHeader = ({ isSelected }) => {
  const { totalMatches, newMatches } = useMatchingContext();
  return (
    <header className="flex justify-between items-center">
      <p className="text-[9px] leading-[12px] text-[#6D7883]">
        Total candidates: {totalMatches} | New candidates: {newMatches}
      </p>
      <div className={`w-6 h-6 p-1 flex items-center justify-center ${!isSelected && "invisible"}`}>
        <SuccessIcon className="w-5 h-5" />
      </div>
    </header>
  );
}

export default SubscriptionHeader;
