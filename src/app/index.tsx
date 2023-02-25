import clsx from 'clsx'
import { Routing } from 'pages'

import { isDevEnv } from '../shared/api/config'

import { withProviders } from './providers'

import './App.css'
import './i18n'

const App = () => {
  // useEffect(() => {
  //   themeChange(false)
  // }, [])
  return (
    <div className={clsx(isDevEnv && 'debug-screens')}>
      <Routing />
    </div>
  )
}

export default withProviders(App)
