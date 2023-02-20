import './App.css'

import { RegistrationContainer } from './components'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PizzaList } from './components/PizzaList'
import { ChangeLanguageButtons } from './locales/ChangeLanguageButtons'
import { NotFound } from './components/NotFound'

function App() {
  const isDev = import.meta.env.DEV
  return (
    <main className={`bg-neutral-100 ${isDev ? 'debug-screens' : ''}`}>
      <NotFound />
      <Navbar />
      <div className="container m-auto">
        <Hero />
        <RegistrationContainer />
        <ChangeLanguageButtons />
        <PizzaList />
      </div>
      {/* <div className="mx-auto w-full max-w-xl"> */}
      {/*  <div className="my-12 flex justify-center"> */}
      {/*    <div className="w-full rounded-lg bg-white p-5 shadow-xl lg:w-11/12"> */}

      {/*    </div> */}
      {/*  </div> */}
      {/* </div> */}
      <Footer />
    </main>
  )
}

export default App
