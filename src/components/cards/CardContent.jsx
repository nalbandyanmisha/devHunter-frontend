import { useRef, useLayoutEffect, useState } from 'react';
import Tag from './../ui/Tag.jsx';
import Label from './../ui/Label.jsx';
import { fieldMetadata, fieldOrder } from '@/shared/data/fields.js';



function combineFieldData(metadata, fieldOrder, fieldValues, matchedTags = {}) {
  return fieldOrder.map((key) => {
    const label = metadata[key]?.label ?? key;
    const value = fieldValues[key];
    const match = matchedTags[key];

    // Special case for salary range
    if (key === 'salaryRange') {
      const min = value?.min ?? 0;
      const max = value?.max ?? 0;
      return {
        key,
        label,
        tags: [{ value: `${min} - ${max} AMD`, variant: match === true ? 'match' : 'default' }],
      };
    }

    const valuesArray = Array.isArray(value) ? value : value ? [value] : [];
    const matchedArray = Array.isArray(match) ? match : [];

    return {
      key,
      label,
      tags: valuesArray.map((v) => ({
        value: v,
        variant: matchedArray.includes(v) ? 'match' : 'default',
      })),
    };
  });
}

export default function CardContent({ fieldValues, matchedTags = {} }) {
  console.log(matchedTags);
  const fields = combineFieldData(fieldMetadata, fieldOrder, fieldValues, matchedTags);
  const containerRefs = useRef([]);
  const [maxHeights, setMaxHeights] = useState([]);

  useLayoutEffect(() => {
    const heights = containerRefs.current.map(ref => ref?.offsetHeight || 0);
    const newHeights = heights.map((_, idx) => {
      const all = document.querySelectorAll(`[data-field-idx="${idx}"]`);
      return Math.max(...Array.from(all).map(el => el.offsetHeight));
    });
    setMaxHeights(newHeights);
  }, []);

  return (
    <div className="grid gap-2">
      {fields.map(({ key, label, tags }, idx) => {
        const heightStyle = maxHeights[idx] ? { height: maxHeights[idx] } : {};
        return (
          <div
            className="grid gap-1"
            key={idx}
          >
            <Label>{label}</Label>
            <div
              className="flex flex-wrap gap-2 content-start"
              ref={el => (containerRefs.current[idx] = el)}
              data-field-idx={idx}
              style={heightStyle}
            >
              {tags.map((tag, tagIdx) => (
                <Tag variant={tag.variant} key={tagIdx}>
                  {tag.value}
                </Tag>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

