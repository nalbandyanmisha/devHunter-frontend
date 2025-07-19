const matchKeys = ['languages', 'position', 'experience'];

export function getMatchedTags(candidate, subscription) {
  const matchedTagsByField = {};

  for (const key of matchKeys) {
    const candidateValue = candidate[key];
    const subscriptionValue = subscription[key];

    if (!candidateValue || !subscriptionValue) {
      matchedTagsByField[key] = [];
      continue;
    }

    const candidateTags = Array.isArray(candidateValue) ? candidateValue : [candidateValue];
    const subscriptionTags = Array.isArray(subscriptionValue) ? subscriptionValue : [subscriptionValue];

    matchedTagsByField[key] = candidateTags.filter(tag => subscriptionTags.includes(tag));
  }

  // Handle salaryRange as a boolean match
  const cSalary = candidate.salaryRange;
  const sSalary = subscription.salaryRange;

  const isSalaryMatch =
    cSalary?.min >= sSalary?.min &&
    cSalary?.max <= sSalary?.max;

  matchedTagsByField.salaryRange = isSalaryMatch;

  return matchedTagsByField;
}

export function isCandidateMatch(matchedTagsByField) {
  for (const [key, match] of Object.entries(matchedTagsByField)) {
    if (key === 'salaryRange') {
      if (match === true) return true;
    } else if (Array.isArray(match) && match.length > 0) {
      return true;
    }
  }
  return false;
}
