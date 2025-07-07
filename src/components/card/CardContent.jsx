import React from 'react';
import CardContentLayout from './CardContentLayout.jsx';

const CardContent = ({ data }) => {
  const fields = [
    { label: 'Tech Languages', items: data.techLanguages },
    { label: 'Experience', items: data.experience },
    { label: 'Salary range', items: `${data.salaryRange.min} - ${data.salaryRange.max} AMD` },
    { label: 'Position', items: data.position },
  ];
  return (
    <>
      {fields.map((field, idx) => (
        <CardContentLayout key={idx} label={field.label} items={field.items} />
      ))}
    </>
  );
};

export default CardContent;
