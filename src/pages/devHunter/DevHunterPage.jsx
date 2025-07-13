import MatchSection from '@/features/matching/components/MatchSection';
import WelcomeSection from './WelcomeSection';

export default function DevHunterPage({ subscriptions, candidates, onAdd }) {
  return (
    <main className="w-auto h-fit">
      <div className="max-w-360 mx-auto px-20">
        <div className="flex flex-col gap-10">
          <WelcomeSection />
          <MatchSection
            subscriptions={subscriptions}
            candidates={candidates}
            onAdd={onAdd}
          />
        </div>
      </div>
    </main>
  );
}
