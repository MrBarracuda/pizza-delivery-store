import { ProfileIcon } from '../../assets/icons-svg'

import { RegistrationForm } from './RegistrationForm'

export const RegistrationContainer = () => {
  return (
    <div>
      <label htmlFor="my-modal-4" className="btn-outline btn-info btn">
        <ProfileIcon />
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h2 className="pt-2 text-center text-2xl font-bold leading-tight">Create New Account</h2>
          <RegistrationForm />
        </label>
      </label>
    </div>
  )
}
