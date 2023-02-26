import { CartIcon } from '../../../assets/icons-svg'

interface CartProps {
  count: number
}
export const Cart = ({ count }: CartProps) => {
  return (
    <div className="dropdown-end dropdown">
      <label htmlFor="my-drawer-4" className="btn-ghost drawer-button btn-circle btn">
        <div className="indicator">
          <CartIcon />
          <span className="badge badge-sm indicator-item">{count}</span>
        </div>
      </label>
    </div>
  )
}
