import './App.css'

import { RegistrationContainer } from './components'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ChangeLanguageButtons } from './locales/ChangeLanguageButtons'
import { Hero } from './components/Hero'
import {PizzaList} from "./components/PizzaList";

function App() {
  return (
    <main>
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
