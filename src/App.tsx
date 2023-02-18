import './App.css'

import { RegistrationContainer } from './components'
import { ChangeLanguageButtons } from './locales/ChangeLanguageButtons'

function App() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="my-12 flex justify-center">
        <div className="w-full rounded-lg bg-white p-5 shadow-xl lg:w-11/12">
          <RegistrationContainer />
          <ChangeLanguageButtons />
        </div>
      </div>
    </div>
  )
}

export default App
