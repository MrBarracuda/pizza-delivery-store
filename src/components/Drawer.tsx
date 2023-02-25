import type { ReactNode } from 'react'

interface DrawerProps {
  children: ReactNode
}
export const Drawer = ({ children }: DrawerProps) => (
  <div className="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">{children}</div>
    <div className="drawer-side mt-[64px] overflow-y-hidden">
      <label htmlFor="my-drawer-4" className="drawer-overlay" />
      <div className="menu w-80 bg-base-100 p-4 pb-6 text-base-content">
        <ul className="flex-1">
          <li>
            <a>Pizza Item 1</a>
          </li>
          <li>
            <a>Pizza Item 2</a>
          </li>
        </ul>
        <button className="btn-primary btn-wide btn mx-auto">go to checkout page</button>
      </div>
    </div>
  </div>
)
