import { Logo } from '@/icons/index.jsx';
import Button from '@/components/ui/Button.jsx';
import { useCandidatesContext } from '@/features/candidates/context/CandidatesContext';


const Header = () => {
  const { generateMoreCandidates } = useCandidatesContext();

  return (
    <header className="w-full h-fit">
      <div className="max-w-360 mx-auto h-20 px-20 py-4 flex items-center justify-between">
        <Logo className="w-16 h-auto" />
        <Button onClick={generateMoreCandidates}>
          Generate New Candidates
        </Button>
      </div>
    </header>

  );
}

export default Header;
