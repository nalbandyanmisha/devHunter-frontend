import { Avatar } from '@/icons/index.jsx';

const CandidateHeader = ({ firstName, lastName, isNew }) => {
  return (
    <header className="w-full h-6 flex gap-2">
      <Avatar className="w-6 h-6" />
      <div className="font-[Lexend] font-medium">
        {firstName} {lastName}
      </div>
      {isNew && (
        <div>
          <span className="tag-new">New</span>
        </div>
      )}
    </header>
  );
}

export default CandidateHeader;
