import React from 'react';
import Tag from './../Tag.jsx';
import Label from './../Label.jsx';

const CardContent = ({languages, experiences, salaryRange, positions }) => {
  const fields = [
    { label: 'Tech Languages', items: languages },
    { label: 'Experience', items: experiences },
    { label: 'Salary range', items: `${salaryRange.min} - ${salaryRange.max} AMD` },
    { label: 'Position', items: positions },
  ];
  return (
    <div className="grid gap-2">
      {fields.map((field, idx) => (
        Array.isArray(field.items) ? (
          <div className="h-20 grid grid-rows-[20px_1fr] gap-1" key={idx}>
            <Label>{field.label}</Label>
            <div className="grid grid-rows-2 gap-2">
              <div className="flex flex-wrap gap-1.5">
                {field.items.map((item, itemIdx) => (
                  <Tag variant="default" key={itemIdx}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-1" key={idx}>
            <Label>{field.label}</Label>
            <Tag variant="default">{field.items}</Tag>
          </div>
        )
      ))}
    </div>
  );
};

export default CardContent;
