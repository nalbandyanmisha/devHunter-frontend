import React from 'react';

const CardLayout = ({ children, type }) => {
  return (
    <section className={`${type === "subscription" && "cursor-pointer"} w-[334px] p-4 grid grid-row border border-[#C3C8CD] rounded-[12px] gap-2`}>
      {children}
    </section>
  );
};

export default CardLayout;
