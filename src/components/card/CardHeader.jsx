import avatar from './../../assets/avatar.svg'

const CardHeader = ({ type, data }) => {
  if (type === 'candidate') {
    return (
      <header className="w-full h-6 flex gap-2">
        <img src={avatar} alt="Avatar" className="w-6 h-6" />
        <div className="font-[Lexend] font-medium">
          {data.firstName} {data.lastName}
        </div>
        <div>
          <span className="tag-new">New</span>
        </div>
      </header>
    );
  }

  if (type === 'subscription') {
    return (
      <header>
        <p className="text-[9px] leading-[12px] text-[#6D7883]">
          Total candidates: {data.totalCandidates} | New candidates: {data.newCandidates}
        </p>
      </header>
    );
  }
};

export default CardHeader;

