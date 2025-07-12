import { useState } from 'react';
import CheckboxMenu from '@/components/form/CheckboxMenu.jsx';
import MultiSelectDropDown from '@/components/form/MultiSelectDropdown.jsx';
import FieldLabel from '@/components/ui/FieldLabel.jsx';

import { useSubscriptionForm } from '@/features/subscriptions/hooks/useSubscriptionForm.js';

let uniqueIdCounter = 0;

const SubscriptionForm = function({ onSubmit }) {
  const {
    values,
    setters,
    updateField,
    resetForm,
    fields,
    fieldData,
  } = useSubscriptionForm();
  const { languages, experiences, positions, salaryRange } = fieldData;

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      languages: values.languages,
      experiences: values.experiences,
      positions: values.positions,
      salaryRange: values.salaryRange,
      id: `sub-${Date.now()}-${uniqueIdCounter++}`,
    });



    resetForm();
  };

  return (
    <form className="size-auto flex flex-col gap-6" onSubmit={handleSubmit}>
      <MultiSelectDropDown label={languages.label}>
        <CheckboxMenu options={languages.options} selected={values.languages} onChange={setters.setLanguages}/>
      </MultiSelectDropDown>

      <MultiSelectDropDown label={experiences.label}>
        <CheckboxMenu options={experiences.options} selected={values.experiences} onChange={setters.setExperiences} />
      </MultiSelectDropDown>

      <div className="w-81.5 flex flex-col gap-1">
        <FieldLabel>{salaryRange.label}</FieldLabel>
        <div className="flex gap-1 items-center">
          <input
            name="min"
            type="number"
            placeholder={fieldData.salaryRange.placeholder.min}
            value={values.salaryRange.min}
            onChange={(e) => updateField('salaryRange.min', Number(e.target.value))}
            className="w-full h-auto border border-[#C3C8CD] rounded-[6px] px-3 py-2.5"
          />
          <FieldLabel>-</FieldLabel>
          <input
            name="max"
            type="number"
            placeholder={fieldData.salaryRange.placeholder.max}
            value={values.salaryRange.max}
            onChange={(e) => updateField('salaryRange.max', Number(e.target.value))}
            className="w-full h-auto border border-[#C3C8CD] rounded-[6px] px-3 py-2.5"
          />
        </div>
      </div>

      <MultiSelectDropDown label={positions.label}>
        <CheckboxMenu options={positions.options} selected={values.positions} onChange={setters.setPositions} />
      </MultiSelectDropDown>

      <button className="flex items-center justify-center bg-[#614EFA] hover:bg-[#614EE0] rounded-[6px] px-4 py-2.5 text-white text-[16px] leading-5 w-fit">Create Subscription</button>
      
    </form>
  );

}

export default SubscriptionForm;
