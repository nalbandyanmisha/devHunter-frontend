import axios from 'axios';
import qs from 'qs';

export async function getCandidatesBySubscription(subscription) {
  const query = qs.stringify(subscription, { arrayFormat: 'repeat' });
  const url = `/api/matching-candidates?${query}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch matching candidates:', err);
    throw err;
  }
}

export async function postCandidates(candidates) {
  try {
    await axios.post('/api/candidates', candidates);
    console.log('Candidates posted successfully');
  } catch (error) {
    console.error('Failed to post candidates:', error);
    throw error; // propagate error if needed
  }
}
