import React from 'react'
import HeaderSection from './components/HeaderSection'
import FooterSection from './components/FooterSection'
import EduSection from './components/EduSection'
import IntroSection from './components/IntroSection'
import ProjectsSection from './components/ProjectsSection'
import MiniNav from './components/MiniNav'
import {ThemeProvider} from './context/ThemeProvider'

function App() {

  return (
    <>
    <ThemeProvider>
      <MiniNav />
      <HeaderSection />
      <IntroSection />
      <EduSection />
      <ProjectsSection />
      <FooterSection />
    </ThemeProvider>
    </>
  )
}

export default App