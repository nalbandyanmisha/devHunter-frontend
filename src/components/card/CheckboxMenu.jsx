import { useState } from "react";

const CheckboxMenu = ({ options, selected, onChange }) => {
  // const [selected, setSelected] = useState([]);

  const handleToggle = (option) => {
    onChange(selected.includes(option) ? selected.filter((item) => item !== option) : [...selected, option]);
  };

  return (
    <div className="absolute z-10 top-full left-0 flex flex-col w-81.5 h-auto rounded-[6px] py-2 bg-[#FFFFFF] shadow-[0px_1px_12px_rgba(27,30,33,0.05),_0px_1px_16px_rgba(27,30,33,0.2)]">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => handleToggle(option)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxMenu;

