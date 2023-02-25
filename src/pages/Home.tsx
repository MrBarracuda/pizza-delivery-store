import { lazy, Suspense } from 'react'

import { Hero } from '../components/Hero'

const PizzaList = lazy(() => import('../components/PizzaList').then((res) => ({ default: res.PizzaList })))

export const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <PizzaList />
      </Suspense>
    </>
  )
}
