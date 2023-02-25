import { CartIcon } from '../../../assets/icons-svg'

interface CartProps {
  count: number
}
export const Cart = ({ count }: CartProps) => {
  return (
    <div className="dropdown-end dropdown">
      <label htmlFor="my-drawer-4" tabIndex={0} className="btn-ghost drawer-button btn-circle btn">
        <div className="indicator">
          <CartIcon />
          <span className="badge badge-sm indicator-item">{count}</span>
        </div>
      </label>
      <div tabIndex={0} className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn-primary btn-block btn">View cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
