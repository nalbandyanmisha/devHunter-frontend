import React, { createContext, useContext, useState, useMemo } from 'react';

const SubscriptionContext = createContext(null);

export function SubscriptionProvider({ children }) {
  const initalSUb = [
    {
      languages: ['CSS', 'JavaScript', 'NextJS', 'C++'],
      position: ['Full Stack'],
      experience: ['Junior'],
      salaryRange: {
        min: 40,
        max: 50000
      },
      id: 'sub-1',
    },
    {
      languages: ['JavaScript', 'NodeJS'],
      position: ['Front End'],
      experience: ['Mid Level'],
      salaryRange: {
        min: 40,
        max: 50000
      },
      id: 'sub-2',
    },
    {
      languages: ['JavaScript', 'NodeJS'],
      position: ['Back End'],
      experience: ['Architect'],
      salaryRange: {
        min: 40,
        max: 50000
      },
      id: 'sub-3',
    },
  ]
  const [subscriptions, setSubscriptions] = useState(initalSUb);
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
