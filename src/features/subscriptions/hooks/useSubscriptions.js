import { useState } from 'react';

let uniqueIdCounter = 0;

export function useSubscriptions(initial = []) {
  const [subscriptions, setSubscriptions] = useState(initial);
  const [selectedId, setSelectedId] = useState(null);

  const addSubscription = (newSub) => {
    setSubscriptions((prev) => [
      ...prev,
      {
        ...newSub,
        id: `sub-${Date.now()}-${uniqueIdCounter++}`,
      },
    ]);
  };

  const selectSubscription = (id) => {
    setSelectedId(id);
  };

  const selectedSubscription = subscriptions.find((s) => s.id === selectedId);

  return {
    subscriptions,
    addSubscription,
    selectSubscription,
    selectedId,
    selectedSubscription,
  };
}
