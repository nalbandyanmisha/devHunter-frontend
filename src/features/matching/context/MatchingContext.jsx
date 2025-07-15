import { createContext, useContext } from 'react';

export const MatchingContext = createContext(null);

export function useMatchingContext() {
  const context = useContext(MatchingContext);
  if (!context) {
    throw new Error('useMatchingContext must be used within MatchingProvider');
  }
  return context;
}
