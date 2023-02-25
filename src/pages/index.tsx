import { Routes, Route } from 'react-router-dom'

import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { NotFound } from './NotFound'

import { Home } from './Home'

// const TasksListPage = lazy(() => import('./tasks-list'))
// const TasksDetailsPage = lazy(() => import('./task-details'))

export const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
