import { useEffect } from 'react'
import './App.css'

import { CandidateProvider } from '@/features/candidates/context/CandidateContext';
import Header from '@/components/headers/Header'
import DevHunterPage from '@/pages/devHunter/DevHunterPage';

function App() {
  return (
    <CandidateProvider>
      <div className="flex flex-col gap-5">
        <Header />
        <DevHunterPage />
      </div>
    </CandidateProvider>
  )
}

export default App
