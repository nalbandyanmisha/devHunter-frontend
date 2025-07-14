import { createContext, useContext, useState, useCallback } from 'react';
import { generateCandidates } from '@/features/candidates/utils/generateCandidates';

const CandidatesContext = createContext();

export function CandidatesProvider({ children }) {
  const [candidates, setCandidates] = useState([]);

  const generateMoreCandidates = useCallback(() => {
    const newCandidates = generateCandidates();
    setCandidates(newCandidates);
  }, []);

  return (
    <CandidatesContext.Provider value={{ candidates, generateMoreCandidates }}>
      {children}
    </CandidatesContext.Provider>
  );
}

export function useCandidatesContext() {
  const context = useContext(CandidatesContext);
  if (!context) {
    throw new Error('useCandidatesContext must be used within CandidatesProvider');
  }
  return context;
}
