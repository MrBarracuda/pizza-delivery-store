import { Outlet } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar/Navbar'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
