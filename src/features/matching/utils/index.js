export function getMatchingCandidates(candidates, subscription) {
  return candidates.slice(0, 2);
  
  console.log('Matching candidates with subscription:', subscription);
  console.log('Candidates:', candidates);
  if (!subscription) return [];

  return candidates.filter((candidate) => {
    const matchLanguages = subscription.languages.some((lang) => candidate.languages.includes(lang));
    const matchExperience = candidate.experiences === subscription.experiences;
    const matchPosition = candidate.positions === subscription.positions;
    const matchSalary =
      candidate.salaryRange.min >= subscription.salaryRange.min &&
        candidate.salaryRange.max <= subscription.salaryRange.max;

    return matchLanguages && matchExperience && matchPosition && matchSalary;
  });
}
