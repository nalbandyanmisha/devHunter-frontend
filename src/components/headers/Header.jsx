import { Logo } from './../../icons/index.jsx';

let uniqueIdCounter = 0;

const Header = ({ onGenerateCandidates }) => {
  const handleClick = () => {
    const newCandidates = generateCandidates(10, techLanguages, experiences, positions);
    onGenerateCandidates(newCandidates);
  };

  return (
    <header className="flex items-center justify-between h-20">
      <div className="flex items-center space-x-2">
        <Logo className="w-16 h-auto" />
      </div>
      <button className="flex items-center justify-center bg-[#614EFA] cursor-pointer rounded-[6px] px-4 py-2.5 h-10 text-white text-[16px]/5" onClick={handleClick}>
        Generate New Candidates
      </button>
    </header>

  );
}

export default Header;
