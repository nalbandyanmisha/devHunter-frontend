import { useState } from 'react';
import CardContent from './CardContent';
import avatar from './../../assets/avatar.svg'

const CandidateCard = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <section className={`w-[334px] p-4 grid grid-row border ${isSelected ? ("border-[#008B6E] bg-[#E8FAF6]") : ("border-[#C3C8CD]")} rounded-[12px] gap-2 cursor-pointer`} onClick={handleSelection}>
      <header className="w-full h-6 flex gap-2">
        <img src={avatar} alt="Avatar" className="w-6 h-6" />
        <div className="font-[Lexend] font-medium">
          {data.data.firstName} {data.data.lastName}
        </div>
        <div>
          <span className="tag-new">New</span>
        </div>
      </header>
      <CardContent data={data.data} />
    </section>
  );
};

export default CandidateCard;
