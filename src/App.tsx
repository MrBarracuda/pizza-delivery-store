import './App.css'

import { RegistrationContainer } from './components'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'
import { PizzaList } from './components/PizzaList'
// import { useEffect } from 'react'
// import { themeChange } from 'theme-change'

function App() {
  const isDev = import.meta.env.DEV

  // useEffect(() => {
  //   themeChange(false)
  // }, [])

  return (
    <main className={`${isDev ? 'debug-screens' : ''}`}>
      <Navbar />
      <Hero />
      <RegistrationContainer />
      <PizzaList />
      <NotFound />
      <Footer />
    </main>
  )
}

export default App
