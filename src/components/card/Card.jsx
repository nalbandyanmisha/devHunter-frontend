import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

const Card = ({ type, data }) => {
  const { totalCandidates, newCandidates, data: { firstName, lastName, ...contentData } } = data;
  const headerData = {totalCandidates, newCandidates, firstName, lastName};

  const handleClick = () => {
    console.log('Card clicked');
    onSelect(contentData);
  };

  return (
    <section className={`${type === "subscription" ? "cursor-pointer" : ""} w-[334px] p-4 grid grid-row border border-[#C3C8CD] rounded-[12px] gap-2`}
  onClick={type === "subscription" ? handleClick : undefined}
>
      <CardHeader type={type} data={headerData} />
      <CardContent data={contentData} />
    </section>
  );
};

export default Card;
