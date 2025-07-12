import { useState, useRef, useEffect } from 'react';
import FieldLabel from './../ui/FieldLabel.jsx';
import {CaretDown} from './../../icons';

const MultiSelectDropDown = ({ children, onChange, label, placeholder = 'Select' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className="w-81.5 relative flex flex-col gap-1">
      <FieldLabel>{label}</FieldLabel>
      <button
        type="button"
        className="flex items-center justify-between w-full h-auto border border-[#C3C8CD] rounded-[6px] px-3 py-2.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1 text-left">Select</span>
        <div className="flex items-center justify-between w-5 h-5">
          <CaretDown className="text-[#6D7883]"/>
        </div>
      </button>
      {isOpen && children}
    </div>
  );
}

export default MultiSelectDropDown;
