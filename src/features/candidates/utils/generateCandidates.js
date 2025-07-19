import { fieldMetadata } from '@/shared/data/fields';

const getRandomElements = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const generateCandidates = function(count = 10,
  {
    languages = fieldMetadata.languages.options,
    experiences = fieldMetadata.experience.options,
    positions = fieldMetadata.position.options,
  } = {}) {
    const candidates = [];

    for (let i = 0; i < count; i++) {
      const techLanguages = getRandomElements(languages, Math.floor(Math.random() * languages.length) + 1);
      candidates.push({
        firstName: 'Zarzand',
        lastName: 'Zarzandyan',
        languages: techLanguages,
        experience: experiences[Math.floor(Math.random() * experiences.length)],
        position: positions[Math.floor(Math.random() * positions.length)],
        salaryRange: {
          min: Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000,
          max: Math.floor(Math.random() * (200000 - 100001 + 1)) + 100001,
        },
      });
    }

    return candidates;

  }

