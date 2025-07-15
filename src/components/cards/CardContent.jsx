import Tag from './../ui/Tag.jsx';
import FieldLabel from './../ui/FieldLabel.jsx';
import { fieldData } from '@/shared/data/fields.js';

function prepareCardFields(fields) {
  return Object.entries(fieldData).map(([key, field]) => {
    let items = fields[key];

    if (key === 'salaryRange' && items && typeof items === 'object') {
      items = `${items.min} - ${items.max} AMD`;
    }

    return {
      key,      // keep the key here for matching
      label: field.label,
      items,
    };
  });
}

export default function CardContent({ items, matchedTags = {} }) {
  const fields = prepareCardFields(items);
  console.log("matchedTags", matchedTags);

  return (
    <div className="grid gap-2">
      {fields.map(({ key, label, items }, idx) => (
        Array.isArray(items) ? (
          <div className="h-20 grid grid-rows-[20px_1fr] gap-1" key={idx}>
            <FieldLabel>{label}</FieldLabel>
            <div className="grid grid-rows-2 gap-2">
              <div className="flex flex-wrap gap-1.5">
                {items.map((tag, tagIdx) => {
                  // matchedTags[key] is expected to be an array of matched tags for this field
                  const isMatched = Array.isArray(matchedTags[key]) && matchedTags[key].includes(tag);
                  return (
                    <Tag variant={isMatched ? 'match' : 'default'} key={tagIdx}>{tag}</Tag>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-1" key={idx}>
            <FieldLabel>{label}</FieldLabel>
            {key === 'salaryRange' && matchedTags[key] === true ? (
              <Tag variant="match">{items}</Tag>
            ) : (
              <Tag variant="default">{items}</Tag>
            )}
          </div>
        )
      ))}
    </div>
  );
}

