import { useState } from 'react'
import devHunterLogo from './assets/logo.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SubscriptionsList from './components/SubscriptionsList.jsx';
import CandidateCard from './components/card/CandidateCard.jsx';

const techLanguages = ['CSS', 'JavaScript', 'Python', 'NodeJS', 'ReactJS', 'NextJS', 'C++']
const experiences = ['Junior', 'Mid Level', 'Senior', 'Principal', 'Architect']
const positions = ['Full Stack', 'Front End', 'Back End', 'DB Engineer']

let uniqueIdCounter = 0;
const generateCandidates = function(count) {
  const candidates = [];
  for (let i = 0; i < count; i++) {
    const techLanguagesList = getRandomElements(techLanguages, Math.floor(Math.random() * techLanguages.length) + 1);
    candidates.push({
      id: `cand-${Date.now()}-${uniqueIdCounter++}`,
      firstName: `Zarzand`,
      lastName: `Zarzandyan`,
      techLanguages: getRandomElements(techLanguages, Math.floor(Math.random() * techLanguages.length) + 1),
      experience: experiences[Math.floor(Math.random() * experiences.length)],
      position: positions[Math.floor(Math.random() * positions.length)],
      salaryRange: {
        min: Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000,
        max: Math.floor(Math.random() * (200000 - 100001 + 1)) + 100001,
      },
      createdAt: new Date(),
    });
  }

  return candidates;

}

const getRandomElements = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function App() {
  const initialCandidates = generateCandidates(10);
  const initialSubscriptions = initialCandidates.slice(0, 2);
  const [formData, setFormData] = useState({
    techLanguages: ['Select'],
    experience: 'Select',
    salaryRange: {
      min: 50000,
      max: 500000
    },
    position: 'Select'
  });
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [candidates, setCandidates] = useState(initialCandidates);
  const [matchingCandidates, setMatchingCandidates] = useState([]);

  const handleCandidatesGeneration = () => {
    const candidates = generateCandidates(10);
    console.log('generated candidates', candidates);
    setCandidates((prev) => ([...prev, ...candidates]));
  }

  const handleSingleSelectionBox = (e) => {
    const { name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleMultipleSelectionBox = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      techLanguages: prev.techLanguages.includes(value)
        ? prev.techLanguages.filter((v) => v !== value)
        : [...prev.techLanguages.filter((v) => v !== 'Select'), value],
    }));
  }

  const handleSalaryRange = (e) => {
    e.preventDefault();
    const { name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      salaryRange: {
        ...prev.salaryRange,
        [name]: value,
      },
    }));
  };

  const handleSubscriptionForm = (e) => {
    e.preventDefault();
    setSubscriptions((prev) => [...prev, {
      ...formData,
      id: `sub-${Date.now()}-${uniqueIdCounter++}`,
    }])
  }

  const handleMatchingCandidates = (subscription) => {
    const filtered = candidates.filter(candidate => {
      const matchesTech = subscription.techLanguages.includes('Select') || subscription.techLanguages.some(lang => candidate.techLanguages.includes(lang));
      const matchesExperience = subscription.experience === 'Select' || candidate.experience === subscription.experience;
      const matchesPosition = subscription.position === 'Select' || candidate.position === subscription.position;
      const matchesSalary = candidate.salaryRange.min >= Number(subscription.salaryRange.min) &&
        candidate.salaryRange.max <= Number(subscription.salaryRange.max);

      return matchesTech && matchesExperience && matchesPosition && matchesSalary;
    });

    setMatchingCandidates(filtered);
  };

   return (
    <>
      <div className="bg-white px-10 lg:px-20 py-4">
        <header className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img
              src={devHunterLogo}
              alt="Dev Hunter Logo"
              className="w-auto"
            />
          </div>

          <button className="flex items-center justify-center bg-[#614EFA] cursor-pointer rounded-[6px] px-4 py-2.5 h-10 text-white text-[16px]/5" onClick={handleCandidatesGeneration}>
            Generate New Candidates
          </button>
        </header>
        <main className="mt-5">
          <section>
            <div className="text-[40px]/12 font-bold">Welcome to Dev Hunter</div>
          </section>
          <section className={`mt-10 flex flex-col ${subscriptions.length === 0 && 'md:flex-row'} lg:flex-row gap-20`}>
            <div className="max-w-82 h-98">
              <form className="flex flex-col gap-6" onSubmit={handleSubscriptionForm}>
                <div>
                  <label htmlFor="techLanguages" className="block text-sm font-medium mb-1">Tech Languages</label>
                  <div className="relative">
                    <select id="techLanguages" value="" className="w-full border rounded px-3 py-2 text-sm" onChange={handleMultipleSelectionBox}>
                      {formData.techLanguages.includes('Select') && (
                        <option value="">Select</option>
                      )}
                      {
                        techLanguages.map((lang) => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Experience</label>
                  <select name="experience" value={formData.experience} className="w-full border rounded px-3 py-2 text-sm" onChange={handleSingleSelectionBox}>
                    {formData.experience === 'Select' && (
                      <option value="select">Select</option>
                    )}
                    {
                      experiences.map((exp, idx) => (
                        <option key={idx} value={exp}>{exp}</option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Salary range</label>
                  <div className="flex gap-2">
                    <input name="min" type="number" placeholder="e.g. 50000" className="w-1/2 border rounded px-3 py-2 text-sm" onChange={handleSalaryRange}/>
                    <input name="max" type="number" placeholder="e.g. 50000" className="w-1/2 border rounded px-3 py-2 text-sm" onChange={handleSalaryRange}/>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Position</label>
                  <select name="position" className="w-full border rounded px-3 py-2 text-sm" onChange={handleSingleSelectionBox}>
                    {formData.position === 'Select' && (
                      <option value="select">Select</option>
                    )}
                    {
                      positions.map((pos, idx) => (
                        <option key={idx} value={pos}>{pos}</option>
                      ))}
                  </select>
                </div>

                <button type="submit" className="flex items-center justify-center bg-[#614EFA] hover:bg-[#614EE0] rounded-[6px] px-4 py-2.5 h-10 text-white text-[16px]/5">
                  Create subscription
                </button>
              </form>
            </div>

            <SubscriptionsList
              data={{ subscriptions, totalCandidates: candidates.length, newCandidates: 0 }}
              onSelect={handleMatchingCandidates}
            />
          </section>

          {matchingCandidates.length !== 0 && (
            <div className="grid grid-row gap-2.25">
              <h1 className="text-[18px] leading-[24px]">Candidates</h1>
              <div className="w-full flex flex-wrap flex-col-3 gap-5.25">
                {matchingCandidates.map((cand, idx) => (
                  <CandidateCard
                    key={idx}
                    data={{
                      data: cand,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}

export default App
