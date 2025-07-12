import React from 'react';

import Tag from './../ui/Tag.jsx';
import FieldLabel from './../ui/FieldLabel.jsx';
import { fieldDefinitions, fieldData } from '@/shared/data/fields.js';

function prepareCardFields(values) {
  return Object.entries(fieldData).map(([key, field]) => {
    let items = values[key];

    // If salaryRange (object), format it nicely
    if (key === 'salaryRange' && items && typeof items === 'object') {
      items = `${items.min} - ${items.max} AMD`;
    }

    return {
      label: field.label,
      items,
    };
  });
}

const CardContent = (values) => {

  const fields = prepareCardFields(values);

  return (
    <div className="grid gap-2">
      {fields.map((field, idx) => (
        Array.isArray(field.items) ? (
          <div className="h-20 grid grid-rows-[20px_1fr] gap-1" key={idx}>
            <FieldLabel>{field.label}</FieldLabel>
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
              <FieldLabel>{field.label}</FieldLabel>
              <Tag variant="default">{field.items}</Tag>
            </div>
          )
      ))}
    </div>
  );
};

export default CardContent;
