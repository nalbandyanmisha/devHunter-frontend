export const fieldDefinitions = [
  {
    key: 'languages',
    label: 'Tech Languages',
    options: ['CSS', 'JavaScript', 'Python', 'NodeJS', 'ReactJS', 'NextJS', 'C++'],
    default: [],
    placeholder: 'Select one or more languages',
  },
  {
    key: 'experiences',
    label: 'Experience',
    options: ['Junior', 'Mid Level', 'Senior', 'Principal', 'Architect'],
    default: [],
    placeholder: 'Choose desired experience level',
  },
  {
    key: 'positions',
    label: 'Position',
    options: ['Full Stack', 'Front End', 'Back End', 'DB Engineer'],
    default: [],
    placeholder: 'Select desired position',
  },
  {
    key: 'salaryRange',
    label: 'Salary Range',
    default: { min: '', max: '' },
    placeholder: { min: 'e.g. 50000', max: 'e.g. 60000' },
  },
];

export const fieldOrder = ['languages', 'experiences', 'salaryRange', 'positions'];

export const fieldMetadata = fieldDefinitions.reduce((acc, field) => {
  acc[field.key] = field;
  return acc;
}, {});


