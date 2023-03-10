import { Suspense } from 'react'

import { Hero } from '../components/Hero'
import { PizzaList } from '../components/PizzaList'

export const Home = () => {
  return (
    <>
      <img src="" alt="" />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <PizzaList />
      </Suspense>
    </>
  )
}
