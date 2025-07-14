import { useEffect } from 'react'
import './App.css'

import { CandidatesProvider } from '@/features/candidates/context/CandidatesContext';
import Header from '@/components/headers/Header'
import DevHunterPage from '@/pages/devHunter/DevHunterPage';

function App() {
  return (
    <CandidatesProvider>
      <div className="flex flex-col gap-5">
        <Header />
        <DevHunterPage />
      </div>
    </CandidatesProvider>
  )
}

export default App
