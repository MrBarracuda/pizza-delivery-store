import { Outlet } from 'react-router-dom'

import { Drawer } from '../components/Drawer'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Drawer>
        <Outlet />
        <Footer />
      </Drawer>
    </>
  )
}
