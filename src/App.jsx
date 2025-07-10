import { useState } from 'react'
import devHunterLogo from './assets/logo.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SubscriptionsList from './components/SubscriptionsList.jsx';
import CandidateCard from './components/card/CandidateCard.jsx';
import SubscriptionForm from './components/card/SubscriptionForm.jsx';

const techLanguages = ['CSS', 'JavaScript', 'Python', 'NodeJS', 'ReactJS', 'NextJS', 'C++']
const experiences = ['Junior', 'Mid Level', 'Senior', 'Principal', 'Architect']
const positions = ['Full Stack', 'Front End', 'Back End', 'DB Engineer']

let uniqueIdCounter = 0;
const generateCandidates = function(count) {
  const candidates = [];
  for (let i = 0; i < count; i++) {
    const techLanguagesList = getRandomElements(techLanguages, Math.floor(Math.random() * techLanguages.length) + 1);
    candidates.push({
      id: `cand-${Date.now()}-${uniqueIdCounter++}`,
      firstName: `Zarzand`,
      lastName: `Zarzandyan`,
      techLanguages: getRandomElements(techLanguages, Math.floor(Math.random() * techLanguages.length) + 1),
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

const getRandomElements = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function App() {
  const initialCandidates = generateCandidates(10);
  const initialSubscriptions = [] //initialCandidates.slice(0, 2);
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [candidates, setCandidates] = useState(initialCandidates);
  const [matchingCandidates, setMatchingCandidates] = useState([]);

  const handleCandidatesGeneration = () => {
    const candidates = generateCandidates(10);
    console.log('generated candidates', candidates);
    setCandidates((prev) => ([...prev, ...candidates]));
  }

  const handleSubscriptionSubmit = (data) => {
    setSubscriptions((prev) => [...prev, {
      ...data,
      id: `sub-${Date.now()}-${uniqueIdCounter++}`,
    }])
  }

  const handleMatchingCandidates = (subscription) => {
    const filtered = candidates.filter(candidate => {
      const matchesTech = subscription.techLanguages.includes('Select') || subscription.techLanguages.some(lang => candidate.techLanguages.includes(lang));
      const matchesExperience = subscription.experience === 'Select' || candidate.experience === subscription.experience;
      const matchesPosition = subscription.position === 'Select' || candidate.position === subscription.position;
      const matchesSalary = candidate.salaryRange.min >= Number(subscription.salaryRange.min) &&
        candidate.salaryRange.max <= Number(subscription.salaryRange.max);

      return matchesTech && matchesExperience && matchesPosition && matchesSalary;
    });

    setMatchingCandidates(filtered);
  };

   return (
    <>
      <div className="bg-white px-10 lg:px-20 py-4">
        <header className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img
              src={devHunterLogo}
              alt="Dev Hunter Logo"
              className="w-auto"
            />
          </div>

          <button className="flex items-center justify-center bg-[#614EFA] cursor-pointer rounded-[6px] px-4 py-2.5 h-10 text-white text-[16px]/5" onClick={handleCandidatesGeneration}>
            Generate New Candidates
          </button>
        </header>
        <main className="mt-5">
          <section>
            <div className="text-[40px]/12 font-bold">Welcome to Dev Hunter</div>
          </section>
          <section className={`mt-10 flex flex-col ${subscriptions.length === 0 && 'md:flex-row'} lg:flex-row gap-20`}>
            <SubscriptionForm onSubmit={handleSubscriptionSubmit}/>         
            <SubscriptionsList
              data={{ subscriptions, totalCandidates: candidates.length, newCandidates: 0 }}
              onSelect={handleMatchingCandidates}
            />
          </section>

          {matchingCandidates.length !== 0 && (
            <div className="grid grid-row gap-2.25">
              <h1 className="text-[18px] leading-[24px]">Candidates</h1>
              <div className="w-full flex flex-wrap flex-col-3 gap-5.25">
                {matchingCandidates.map((cand, idx) => (
                  <CandidateCard
                    key={idx}
                    data={{
                      data: cand,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}

export default App
