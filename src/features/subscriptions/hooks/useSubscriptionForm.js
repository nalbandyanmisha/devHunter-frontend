import { useReducer, useMemo, useRef } from 'react';
import { fieldDefinitions  } from '@/shared/data/fields.js';

function buildInitialState(initial = {}) {
  return fieldDefinitions.reduce((acc, field) => {
    acc[field.key] = initial[field.key] ?? field.default;
    return acc;
  }, {});
}

function setNestedValue(obj, keyPath, value) {
  const keys = keyPath.split('.');
  const lastKey = keys.pop();

  const nested = keys.reduce((acc, key) => {
    if (!(key in acc)) acc[key] = {};
    return acc[key];
  }, obj);

  nested[lastKey] = value;
  return { ...obj }; // trigger re-render with new reference
}

function formReducer(state, action) {
  switch (action.type) {
    case 'update':
      return setNestedValue({ ...state }, action.key, action.value);
    case 'reset':
      return action.payload;
    default:
      return state;
  }
}



export function useSubscriptionForm(initial = {}) {
  const initialStateRef = useRef(buildInitialState(initial));
  const [state, dispatch] = useReducer(formReducer, initialStateRef.current);

  const updateField = (key, value) => {
    dispatch({ type: 'update', key, value });
  };

  const resetForm = () => {
    dispatch({ type: 'reset', payload: initialStateRef.current });
  };

  const setters = useMemo(() => {
    const result = {};
    for (const { key } of fieldDefinitions) {
      const setterName = `set${key[0].toUpperCase()}${key.slice(1)}`;
      result[setterName] = (value) => updateField(key, value);
    }
    return result;
  }, []);

  const fieldData = useMemo(() => {
    return fieldDefinitions.reduce((acc, field) => {
      acc[field.key] = field;
      return acc;
    }, {});
  }, []);

  return {
    values: state,        // { languages, experiences, salaryRange, ... }
    setters,              // { setLanguages, setExperiences, ... }
    updateField,          // updateField('salaryRange.min', 100000)
    resetForm,            // resets to initial
    fields: fieldDefinitions, // UI rendering config
    fieldData,
  };
}

