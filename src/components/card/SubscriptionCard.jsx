import { useState } from 'react';
import CardContent from './CardContent';
import union from './../../assets/union.svg';

const SubscriptionCard = ({ data: { subscription, totalCandidates, newCandidates }, isSelected, onClick }) => {
  return (
    <section
      className={`w-[334px] p-4 grid grid-row border ${isSelected ? ("border-[#008B6E] bg-[#E8FAF6]") : ("border-[#C3C8CD]")} rounded-[12px] gap-2 cursor-pointer`}
      onClick={() => onClick()}
    >
      <header className="flex justify-between items-center">
        <p className="text-[9px] leading-[12px] text-[#6D7883]">
          Total candidates: {totalCandidates} | New candidates: {newCandidates}
        </p>
        <div className={`w-6 h-6 p-1 flex items-center justify-center ${!isSelected && "invisible"}`}>
          <img src={union} alt="Union Icon" className="w-5 h-5 text-[#008B6E]" />
        </div>
      </header>
      <CardContent data={subscription} />
    </section>
  );
};

export default SubscriptionCard;
