import { useState } from 'react';
import Label from './../Label.jsx';
import CheckboxMenu from './CheckboxMenu.jsx';
import MultiSelectDropDown from './MultiSelectDropdown.jsx';

const techLanguages = ['CSS', 'JavaScript', 'Python', 'NodeJS', 'ReactJS', 'NextJS', 'C++']
const experiences = ['Junior', 'Mid Level', 'Senior', 'Principal', 'Architect']
const positions = ['Full Stack', 'Front End', 'Back End', 'DB Engineer']

const SubscriptionForm = function({ onSubmit }) {
  const [sltTechLanguages, setSltTechLanguages] = useState([]);
  const [sltExperiences, setSltExperiences] = useState([]);
  const [sltPositions, setSltPositions] = useState([]);
  const [salaryRange, setSalaryRange] = useState({ min: 50000, max: 500000 });

  const handleSltTechLanguages = (selectedLanguages) => {
    setSltTechLanguages(selectedLanguages);
  }

  const handleSltExperiences = (selectedExperiences) => {
    setSltExperiences(selectedExperiences);
  }

  const handleSltPositions = (selectedPositions) => {
    setSltPositions(selectedPositions);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      techLanguages: sltTechLanguages,
      experience: sltExperiences,
      position: sltPositions,
      salaryRange,
    };

    onSubmit(formData);

    // Optionally reset form
    setSltTechLanguages([]);
    setSltExperiences([]);
    setSltPositions([]);
    setSalaryRange({ min: 50000, max: 500000 });
  };

  return (
    <form className="size-auto flex flex-col gap-6" onSubmit={handleSubmit}>
      <MultiSelectDropDown label={"Tech languages"}>
        <CheckboxMenu options={techLanguages} selected={sltTechLanguages} onChange={handleSltTechLanguages}/>
      </MultiSelectDropDown>

      <MultiSelectDropDown label={"Experiences"}>
        <CheckboxMenu options={experiences} selected={sltExperiences} onChange={handleSltExperiences} />
      </MultiSelectDropDown>

      <div className="w-81.5 flex flex-col gap-1">
        <Label>Salary Range</Label>
        <div className="flex gap-1 items-center">
          <input name="min" type="number" placeholder="e.g. 50000" className="w-full h-auto border border-[#C3C8CD] rounded-[6px] px-3 py-2.5" />
          <Label>-</Label>
          <input name="max" type="number" placeholder="e.g. 50000" className="w-full h-auto border border-[#C3C8CD] rounded-[6px] px-3 py-2.5" />
        </div>
      </div>

      <MultiSelectDropDown label={"Positions"}>
        <CheckboxMenu options={positions} selected={sltPositions} onChange={handleSltPositions} />
      </MultiSelectDropDown>

      <button className="flex items-center justify-center bg-[#614EFA] hover:bg-[#614EE0] rounded-[6px] px-4 py-2.5 text-white text-[16px] leading-5 w-fit">Create Subscription</button>
      
    </form>
  );

}

export default SubscriptionForm;
