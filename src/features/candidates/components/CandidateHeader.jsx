import { Avatar } from '@/icons/index.jsx';
import Badge from '@/components/ui/Badge.jsx';

const CandidateHeader = ({ firstName, lastName, isNew }) => {
  return (
    <header className="w-full flex items-center">
      <div className="flex items-center gap-2 flex-grow">
        <Avatar className="w-6 h-6" />
        <span className="text-heading-sm text-[#3C4248]">
          {firstName} {lastName}
        </span>
      </div>
      {isNew && ( <Badge variant="new">New</Badge> )}
    </header>
  );
}

export default CandidateHeader;
