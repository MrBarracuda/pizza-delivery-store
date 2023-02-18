import './App.css'
import { useTranslation } from 'react-i18next'

import { RegistrationContainer } from './components'

function App() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="my-12 flex justify-center">
        <div className="w-full rounded-lg bg-white p-5 shadow-xl lg:w-11/12">
          <RegistrationContainer />
        </div>
      </div>
    </div>
  )
}

export default App
