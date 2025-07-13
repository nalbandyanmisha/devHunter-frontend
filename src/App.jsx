import { useEffect } from 'react'
import './App.css'

import Header from '@/components/headers/Header'
import DevHunterPage from '@/pages/devHunter/DevHunterPage';
import { useSubscriptions } from './features/subscriptions/hooks/useSubscriptions';
import { useCandidates } from './features/candidates/hooks/useCandidates';

function App() {
  const insitialSub = [
    {
      languages: ['JavaScript', 'CSS'],
      positions: ['Frontend Developer'],
      experiences: ['Junior'],
      salaryRange: {
        min: 10,
        max: 30
      },
      id: '1',
    },
    {
      languages: ['JavaScript', 'CSS'],
      positions: ['Frontend Developer'],
      experiences: ['Junior'],
      salaryRange: {
        min: 10,
        max: 30
      },
      id: '2',
    },
    //  {
    //   languages: ['JavaScript', 'CSS'],
    //   positions: ['Frontend Developer'],
    //   experiences: ['Junior'],
    //   salaryRange: {
    //     min: 10,
    //     max: 30
    //   },
    //   id: '3',
    // },

  ];
  const { candidates, generateMoreCandidates } = useCandidates();
  const {
    subscriptions,
    addSubscription,
  } = useSubscriptions(insitialSub);

  useEffect(() => {
  console.log('Component mounted or state/props changed', candidates);
  }, [candidates]);

  return (
    <div className="flex flex-col gap-5">
      <Header onGenerateCandidates={generateMoreCandidates} />
      <DevHunterPage
        subscriptions={subscriptions}
        candidates={candidates}
        onAdd={addSubscription}
      />
    </div>
  )
}

export default App
