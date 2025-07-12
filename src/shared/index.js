const techLanguages = ['CSS', 'JavaScript', 'Python', 'NodeJS', 'ReactJS', 'NextJS', 'C++']
const experiences = ['Junior', 'Mid Level', 'Senior', 'Principal', 'Architect']
const positions = ['Full Stack', 'Front End', 'Back End', 'DB Engineer']

const getRandomElements = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const generateCandidates = function(count, languages, experiences, positions) {
  const candidates = [];
  for (let i = 0; i < count; i++) {
    const techLanguagesList = getRandomElements(languages, Math.floor(Math.random() * languages.length) + 1);
    candidates.push({
      id: `cand-${Date.now()}-${uniqueIdCounter++}`,
      firstName: `Zarzand`,
      lastName: `Zarzandyan`,
      techLanguages: getRandomElements(languages, Math.floor(Math.random() * languages.length) + 1),
      experience: experiences[Math.floor(Math.random() * experiences.length)],
      position: positions[Math.floor(Math.random() * positions.length)],
      salaryRange: {
        min: Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000,
        max: Math.floor(Math.random() * (200000 - 100001 + 1)) + 100001,
      },
      createdAt: new Date(),
    });
  }

  return candidates;

}

export const fieldDefinitions = [
  {
    key: 'techLanguages',
    label: 'Tech Languages',
    options: ['CSS', 'JavaScript', 'Python', 'NodeJS', 'ReactJS', 'NextJS', 'C++'],
  },
  {
    key: 'experiences',
    label: 'Experience',
    options: ['Junior', 'Mid Level', 'Senior', 'Principal', 'Architect'],
  },
  {
    key: 'positions',
    label: 'Position',
    options: ['Full Stack', 'Front End', 'Back End', 'DB Engineer'],
  },
];

