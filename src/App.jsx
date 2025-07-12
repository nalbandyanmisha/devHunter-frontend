import { useState } from 'react'
import './App.css'

import Header from './components/headers/Header';
import CardList from './components/cards/CardList';
import SubscriptionCard from './features/subscriptions/components/SubscriptionCard';
import CandidateCard from './features/candidates/components/CandidateCard';
import SubscriptionForm from './features/subscriptions/components/SubscriptionForm';

const techLanguages = ['CSS', 'JavaScript', 'Python', 'NodeJS', 'ReactJS', 'NextJS', 'C++']
const experiences = ['Junior', 'Mid Level', 'Senior', 'Principal', 'Architect']
const positions = ['Full Stack', 'Front End', 'Back End', 'DB Engineer']

function App() {
  const initialCandidates = [] //generateCandidates(10);
  const initialSubscriptions = [] // initialCandidates.slice(0, 2);

  const [selectedSubId, setSelectedSubId] = useState(null);
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [candidates, setCandidates] = useState(initialCandidates);
  const [matchingCandidates, setMatchingCandidates] = useState([]);

  const handleGeneratedCandidates = (newCandidates) => {
    setCandidates((prev) => ([...prev, ...newCandidates]));
  }

  const handleSubscriptionSubmit = (newSubscription) => {
    console.log('New subscription:', newSubscription);
    setSubscriptions((prev) => ([...prev, newSubscription]));

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
        <Header onGenerateCandidates={handleGeneratedCandidates}></Header>
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
                  <p className="text-[18px] leading-[24px]">Your subscriptions</p>
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
            <section className="flex flex-col w-320 h-fill gap-2">
              <p className="text-[18px] leading-[24px]">Candidates</p>
              <CardList
                items={candidates}
                renderItem={(candidate) => (
                  <CandidateCard key={candidate.id} candidate={candidate} />
                )}
              />
            </section>

          )}
        </main>
      </div>
    </>
  )
}

export default App
