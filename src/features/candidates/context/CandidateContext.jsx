import { createContext, useContext, useState, useCallback } from 'react';
import { generateCandidates } from '@/features/candidates/utils/generateCandidates';

const CandidateContext = createContext();

export function CandidateProvider({ children }) {
  const [candidates, setCandidates] = useState([]);

  const generateMoreCandidates = useCallback(() => {
    const newCandidates = generateCandidates();
    setCandidates((prevCandidates) => [...prevCandidates, ...newCandidates]);
  }, []);

  return (
    <CandidateContext.Provider value={{ candidates, generateMoreCandidates }}>
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidateContext() {
  const context = useContext(CandidateContext);
  if (!context) {
    throw new Error('useCandidateContext must be used within CandidateProvider');
  }
  return context;
}
