import './App.css'
import Header from '@/components/headers/Header'
import DevHunterPage from '@/pages/devHunter/DevHunterPage';

function App() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <DevHunterPage />
    </div>
  )
}

export default App
