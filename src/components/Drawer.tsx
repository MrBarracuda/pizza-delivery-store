import { Link } from 'react-router-dom'

import type { ReactNode } from 'react'

interface DrawerProps {
  children: ReactNode
}
export const Drawer = ({ children }: DrawerProps) => (
  <div className="drawer drawer-end mt-[64px]">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">{children}</div>
    <div className="drawer-side">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="my-drawer-4" className="drawer-overlay" />
      <div className="menu w-80 bg-base-100 p-4 pb-6 text-base-content">
        <ul className="flex-1">
          <li>Pizza Item 1</li>
          <li>Pizza Item 2</li>
        </ul>
        <Link to="checkout" className="btn-primary btn-wide btn mx-auto">
          go to checkout page
        </Link>
      </div>
    </div>
  </div>
)
