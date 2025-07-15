import { Logo } from '@/icons/index.jsx';
import Button from '@/components/ui/Button.jsx';
import { useCandidateContext } from '@/features/candidates/context/CandidateContext';


const Header = () => {
  const { generateMoreCandidates } = useCandidateContext();

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
