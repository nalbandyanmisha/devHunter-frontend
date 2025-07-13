import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-[#614EFA] cursor-pointer rounded-[6px] px-4 py-2.5 h-10 text-white text-[16px]/5"
    >
      {children}
    </button>
  );
};

export default Button;
