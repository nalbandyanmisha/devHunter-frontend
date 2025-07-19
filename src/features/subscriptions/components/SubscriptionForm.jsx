import { useState } from 'react';
import CheckboxMenu from '@/components/form/CheckboxMenu.jsx';
import MultiSelectDropDown from '@/components/form/MultiSelectDropdown.jsx';
import Label from '@/components/ui/Label.jsx';
import Button from '@/components/ui/Button.jsx';

import { useSubscriptionForm } from '@/features/subscriptions/hooks/useSubscriptionForm.js';
import { useSubscriptionContext } from '../context/SubscriptionContext';

const SubscriptionForm = function() {
  const { addSubscription } = useSubscriptionContext();
  const {
    values,
    setters,
    updateField,
    resetForm,
    fields,
    fieldData,
  } = useSubscriptionForm();
  const { languages, experience, position, salaryRange } = fieldData;

  const handleSubmit = (e) => {
    e.preventDefault();

    addSubscription({
      languages: values.languages,
      experience: values.experience,
      position: values.position,
      salaryRange: values.salaryRange,
    });

    resetForm();
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <MultiSelectDropDown label={languages.label}>
        <CheckboxMenu options={languages.options} selected={values.languages} onChange={setters.setLanguages}/>
      </MultiSelectDropDown>

      <MultiSelectDropDown label={experience.label}>
        <CheckboxMenu options={experience.options} selected={values.experience} onChange={setters.setExperience} />
      </MultiSelectDropDown>

      <div className="w-81.5 flex flex-col gap-1">
        <Label>{salaryRange.label}</Label>
        <div className="flex gap-1 items-center">
          <input
            name="min"
            type="number"
            placeholder={fieldData.salaryRange.placeholder.min}
            value={values.salaryRange.min}
            onChange={(e) => updateField('salaryRange.min', Number(e.target.value))}
            className="w-full h-auto border border-[#C3C8CD] rounded-[6px] px-3 py-2.5"
          />
          <Label>-</Label>
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

      <MultiSelectDropDown label={position.label}>
        <CheckboxMenu options={position.options} selected={values.position} onChange={setters.setPosition} />
      </MultiSelectDropDown>

      <Button >Create Subscription</Button>
    </form>
  );

}

export default SubscriptionForm;
