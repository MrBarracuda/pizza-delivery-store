import { Route, Routes } from 'react-router-dom'

import { Checkout } from './Checkout'
import { Home } from './Home'
import { Layout } from './Layout'
import { NotFound } from './NotFound'
import { PizzaDetails } from './Pizza'
import { Settings } from './Settings'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pizzas/:id" element={<PizzaDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
