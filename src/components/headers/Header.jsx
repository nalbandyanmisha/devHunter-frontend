import { Logo } from '@/icons/index.jsx';
import Button from '@/components/ui/Button.jsx';
import { useCandidates } from '@/features/candidates/hooks/useCandidates';


const Header = ({ onGenerateCandidates }) => {

  const handleClick = () => {
    onGenerateCandidates();
  };

  return (
    <header className="w-full h-fit">
      <div className="max-w-360 mx-auto h-20 px-20 py-4 flex items-center justify-between">
        <Logo className="w-16 h-auto" />
        <Button onClick={handleClick}>
          Generate New Candidates
        </Button>
      </div>
    </header>

  );
}

export default Header;
