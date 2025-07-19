import CandidateList from './CandidateList';


export default function CandidateSection({ candidates }) {
  if (!candidates || candidates.length === 0) return null;

  return (
    <CandidateList
      candidates={candidates}
    />
  );
}
