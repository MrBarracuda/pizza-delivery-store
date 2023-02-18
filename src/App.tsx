import './App.css'

import { RegistrationContainer } from './components'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ChangeLanguageButtons } from './locales/ChangeLanguageButtons'

function App() {
  return (
    <div>
      <Navbar />
      {/* <div className="mx-auto w-full max-w-xl"> */}
      {/*  <div className="my-12 flex justify-center"> */}
      {/*    <div className="w-full rounded-lg bg-white p-5 shadow-xl lg:w-11/12"> */}
      <RegistrationContainer />
      <ChangeLanguageButtons />
      {/*    </div> */}
      {/*  </div> */}
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default App
