import { fieldDefinitions } from '@/shared/data/fields.js';

export function useFieldDefinitions() {
  return fieldDefinitions.reduce((acc, field) => {
    acc[field.key] = field;
    return acc;
  }, {});
};
