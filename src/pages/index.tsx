import { Routes, Route } from 'react-router-dom'

import { RegistrationContainer } from '../components'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { NotFound } from '../components/NotFound'
import { PizzaList } from '../components/PizzaList'

// const TasksListPage = lazy(() => import('./tasks-list'))
// const TasksDetailsPage = lazy(() => import('./task-details'))

export const Routing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RegistrationContainer />
      <PizzaList />
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
