import { Modal } from '../../common/Modal'
import { RegistrationForm } from '../Registration/RegistrationForm'

import { Cart, Logo, Profile, ChangeLanguage } from './components'

export const Navbar = () => {
  const count = 3
  return (
    <div className="t-0 navbar fixed z-50 bg-primary text-primary-content">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none">
        <ChangeLanguage />
        <Cart count={count} />
        <div className="dropdown-end dropdown">
          <Modal title="Create New Account" id="create-new-account">
            <Profile userName="Dmytro" isLoggedIn={false} />
            <RegistrationForm />
          </Modal>

          <ul tabIndex={0} className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
