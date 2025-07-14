import React, { createContext, useContext, useState, useMemo } from 'react';

const SubscriptionContext = createContext(null);

export function SubscriptionProvider({ children }) {
  const initialSubs = [
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
  ];
  const [subscriptions, setSubscriptions] = useState(initialSubs);
  const [selectedId, setSelectedId] = useState(null);

  const addSubscription = (newSub) => {
    setSubscriptions(prev => [
      ...prev,
      { ...newSub, id: `sub-${Date.now()}` }
    ]);
  };

  const selectSubscription = (id) => {
    setSelectedId(id);
  };

  const selectedSubscription = useMemo(() => {
    return subscriptions.find(sub => sub.id === selectedId) || null;
  }, [subscriptions, selectedId]);

  return (
    <SubscriptionContext.Provider value={{
      subscriptions,
      addSubscription,
      selectedSubscription,
      selectSubscription,
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

// Custom hook for easy context consumption inside subscription feature
export function useSubscriptionContext() {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("useSubscriptionContext must be used within SubscriptionProvider");
  }
  return context;
}
