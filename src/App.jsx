import { useState } from 'react'
import { Logo } from './icons/index.jsx';
import './App.css'

import CardList from './components/lists/CardList';
import SubscriptionCard from './components/cards/SubscriptionCard';
import CandidateCard from './components/cards/CandidateCard';
import SubscriptionForm from './components/form/SubscriptionForm.jsx';

function App() {
  const initialCandidates = generateCandidates(10);
  const initialSubscriptions = initialCandidates.slice(0, 2);

  const [selectedSubId, setSelectedSubId] = useState(null);
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
            <Logo className="w-16 h-auto" />
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
            {subscriptions.length === 0 ? (
              <div className="flex flex-grow items-center justify-center">
                <div className="flex flex-col gap-4">
                  <h1 className="text-center text-[40px] leading-[48px] font-bold">No Matchings</h1>
                  <span className="text-center text-[14px] leading-[20px] font-normal text-[#6D7883]">We will let you know when a match is found</span>
                </div>
              </div>
            ) : (
                <div className="grid grid-row gap-2.25">
                  <h1 className="text-[18px] leading-[24px]">Your subscriptions</h1>
                  <CardList
                    items={subscriptions}
                    selectable
                    selectedId={selectedSubId}
                    onSelect={setSelectedSubId}
                    renderItem={(item, props) => (
                      <SubscriptionCard key={item.id} subscription={item} {...props} />
                    )}
                  />
                </div>
              )}

          </section>

          {selectedSubId && (
            <CardList
              items={candidates}
              renderItem={(candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              )}
            />
          )}
        </main>
      </div>
    </>
  )
}

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

export default App
