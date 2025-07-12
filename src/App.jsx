import { useEffect } from 'react'
import './App.css'

import Header from './components/headers/Header';
import CardList from './components/cards/CardList';
import SubscriptionCard from './features/subscriptions/components/SubscriptionCard';
import CandidateCard from './features/candidates/components/CandidateCard';
import SubscriptionForm from './features/subscriptions/components/SubscriptionForm';
import { useSubscriptions } from './features/subscriptions/hooks/useSubscriptions';
import { useCandidates } from './features/candidates/hooks/useCandidates';
import { getMatchingCandidates } from './features/matching/utils';

function App() {
  const { candidates, generateMoreCandidates } = useCandidates();
  const {
    subscriptions,
    addSubscription,
    selectedId,
    selectSubscription,
    selectedSubscription,
  } = useSubscriptions();
  const matchingCandidates = getMatchingCandidates(candidates, selectedSubscription);

  useEffect(() => {
    // console.log('All Candidates:', candidates);
  }, [candidates]);

   useEffect(() => {
    console.log('All matchingCandidates:', matchingCandidates);
  }, [matchingCandidates]);

   return (
    <>
      <div className="bg-white px-10 lg:px-20 py-4">
        <Header onGenerateCandidates={generateMoreCandidates} />
        <main className="mt-5">
          <section>
            <div className="text-[40px]/12 font-bold">Welcome to Dev Hunter</div>
          </section>
          <section className={`mt-10 flex flex-col ${subscriptions.length === 0 && 'md:flex-row'} lg:flex-row gap-20`}>
            <SubscriptionForm onSubmit={addSubscription}/>
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
                    selectedId={selectedId}
                    onSelect={selectSubscription}
                    renderItem={(item, props) => (
                      <SubscriptionCard key={item.id} subscription={item} {...props} />
                    )}
                  />
                </div>
              )}

          </section>

          {selectedId && (
            <section className="flex flex-col w-320 h-fill gap-2">
              <p className="text-[18px] leading-[24px]">Candidates</p>
              <CardList
                items={matchingCandidates}
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
