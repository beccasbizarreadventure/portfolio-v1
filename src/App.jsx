import React from 'react'
import {Header} from './components/Header'
import {MiniNav} from './components/MiniNav'
import { ThemeProvider } from './context/ThemeProvider'

function App() {

  return (
    <>
    <ThemeProvider>
      <MiniNav />
      <Header />
    </ThemeProvider>
    </>
  )
}

export default App