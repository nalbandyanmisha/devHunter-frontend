const matchKeys = ['languages', 'positions', 'experiences'];

export function getMatchedTags(candidate, subscription) {
  const matchedTagsByField = {};

  for (const key of matchKeys) {
    const candidateValues = Array.isArray(candidate[key]) ? candidate[key] : [];
    const subscriptionValues = Array.isArray(subscription[key]) ? subscription[key] : [];

    matchedTagsByField[key] = candidateValues.filter(value =>
      subscriptionValues.includes(value)
    );
  }

  const candidateRange = candidate.salaryRange;
  const subRange = subscription.salaryRange;

  const isSalaryMatch =
    candidateRange?.min >= subRange?.min &&
    candidateRange?.max <= subRange?.max;

  matchedTagsByField.salaryRange = isSalaryMatch;

  return matchedTagsByField;
}

export function isCandidateMatch(matchedTagsByField) {
  return Object.values(matchedTagsByField).some(val =>
    Array.isArray(val) ? val.length > 0 : val === true
  );
}

export function getMatchingCandidates(candidates, subscription) {
  if (!subscription) return [];

  return candidates
    .map(candidate => {
      const matchedTagsByField = getMatchedTags(candidate, subscription);
      if (!isCandidateMatch(matchedTagsByField)) return null;

      return { ...candidate, matchedTagsByField };
    })
    .filter(Boolean);
}
