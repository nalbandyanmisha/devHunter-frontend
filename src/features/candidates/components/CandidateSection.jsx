import CandidateList from './CandidateList';
import { useMatchingContext } from '@/features/matching/context/MatchingContext';


export default function CandidateSection({ candidates }) {
  if (!candidates || candidates.length === 0) return null;

  return (
    <CandidateList
      candidates={candidates}
    />
  );
}
