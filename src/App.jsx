import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Templates from './components/Templates'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Github from './components/Github'
import Contact from './components/Contact'


function App() {
  return (
    // Mengubah background utama menjadi biru gelap (bg-[#0B132B]) dan teks default menjadi putih/slate-200
    <div className="bg-[#0B132B] text-slate-200 min-h-screen font-sans selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Templates />
        <Certifications />
        <Education />
        <Github />
        <Contact />
      </main>
    </div>
  )
}

export default App