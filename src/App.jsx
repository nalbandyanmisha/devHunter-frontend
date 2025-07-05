import { useState } from 'react'
import devHunterLogo from './assets/logo.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import SubscriptionForm from './components/SubscriptionForm'
import SubscriptionCard from './components/SubscriptionCard'
import Button from './components/Button'

const techLanguages = ['CSS', 'JavaScript', 'Python', 'NodeJS', 'ReactJS', 'NextJS', 'C++']
const experiences = ['Junior', 'Mid Level', ':width: ,Senior', 'Principal', 'Architect']
const positions = ['Full Stack', 'Front End', 'Back End', 'DB Engineer']

const generateCandidates = function(count) {
  const candidates = [];
  for (let i = 0; i < count; i++) {
    const techLanguagesList = getRandomElements(techLanguages, Math.floor(Math.random() * techLanguages.length) + 1);
    candidates.push({
      "firstName": `Zarzand`,
      "lastName": `Zarzandyan`,
      "techLanguages": getRandomElements(techLanguages, Math.floor(Math.random() * techLanguages.length) + 1),
      "experience": experiences[Math.floor(Math.random() * experiences.length)],
      "position": positions[Math.floor(Math.random() * positions.length)],
      "salaryRange": {
        min: Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000,
        max: Math.floor(Math.random() * (200000 - 100001 + 1)) + 100001,
      },
      "createdAt": new Date(),
    });
  }

  return candidates;

}

const getRandomElements = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const candidates = generateCandidates(10);
const subscriptions = candidates.slice(0,4);

function App() {

  return (
    <>
      <div className="w-full bg-white px-20 py-4">
        <header className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={devHunterLogo}
              alt="Dev Hunter Logo"
              className="h-10 w-auto"
            />
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Generate new Candidates
          </button>
        </header>
        <main className="mt-8 mx-auto">
          <section className="mt-8 mx-auto">
            <h1 className="text-3xl font-bold mb-8">Welcome to Dev Hunter</h1>
          </section>
          <section className="mt-8 mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Form Section */}
              <div className="w-full lg:w-1/3">
                <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Tech Languages</label>
                        <select id="techLanguages"  className="w-full border rounded px-3 py-2 text-sm">
                          {
                            techLanguages.map((lang, idx) => (
                              <option key={idx} value={lang}>{lang}</option>
                          ))}
                          <option>Select</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Experience</label>
                        <select className="w-full border rounded px-3 py-2 text-sm">
                          <option>Select</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Salary range</label>
                        <div className="flex gap-2">
                          <input className="w-1/2 border rounded px-3 py-2 text-sm" placeholder="e.g. 50000" />
                          <input className="w-1/2 border rounded px-3 py-2 text-sm" placeholder="e.g. 50000" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Position</label>
                        <select className="w-full border rounded px-3 py-2 text-sm">
                          <option>Select</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm font-medium mt-2"
                      >
                        Create subscription
                  </button>
                </form>
              </div>

              {/* Subscriptions Section */}
              <div className="w-full lg:w-2/3">
                <h2 className="text-lg font-medium mb-4">Your subscriptions</h2>

                {subscriptions.length === 0 ? (
                  <div className="w-full h-full min-h-[200px] flex items-center justify-center border rounded-lg text-gray-500 bg-gray-50 text-sm p-6">
                    There are no matching candidates yet 😔
                  </div>
                ) : (
                  <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {subscriptions.map((sub, idx) => (
                      <section className="bg-white rounded-lg">
                        <div className="border rounded-lg p-4 text-sm space-y-3">
                          <header className="text-gray-600 text-xs">
                            Total candidates {subscriptions.length} | New candidates 30
                          </header>

                          <div>
                            <p className="font-medium">Tech Languages</p>
                            <div className="grid grid-rows-2 gap-1 mt-1">
                              <div className="flex flex-wrap gap-1 ">
                                {sub.techLanguages.map((lang, idx) => (
                                  <span key={idx} className="bg-gray-100 rounded-full px-2 py-1 text-xs">{lang}</span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className="font-medium">Experience</p>
                            <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">{sub.experience}</span>
                          </div>

                          <div>
                            <p className="font-medium">Salary range</p>
                            <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">{sub.salaryRange.min} - {sub.salaryRange.max} AMD.</span>
                          </div>

                          <div>
                            <p className="font-medium">Position</p>
                            <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">{sub.position}</span>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>
                )}
              </div>
          </div>
          </section>
          <section className="mt-8 mx-auto">
            <h2 className="text-lg font-medium mb-4">Candidates</h2>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid:-cols-4 gap-4">
              {candidates.map((cand, idx) => (
                <section className="bg-white rounded-lg">
                  <div className="border rounded-lg p-4 text-sm space-y-3">
                    <header className="text-gray-600 text-xs">
                      Total candidates {candidates.length} | New candidates 30
                    </header>

                    <div>
                      <p className="font-medium">Tech Languages</p>
                      <div className="grid grid-rows-2 gap-1 mt-1">
                        <div className="flex flex-wrap gap-1 ">
                          {cand.techLanguages.map((lang, idx) => (
                            <span key={idx} className="bg-gray-100 rounded-full px-2 py-1 text-xs">{lang}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium">Experience</p>
                      <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">{cand.experience}</span>
                    </div>

                    <div>
                      <p className="font-medium">Salary range</p>
                      <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">{cand.salaryRange.min} - {cand.salaryRange.max} AMD.</span>
                    </div>

                    <div>
                      <p className="font-medium">Position</p>
                      <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">{cand.position}</span>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
