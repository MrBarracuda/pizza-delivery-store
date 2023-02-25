import { Route, Routes } from 'react-router-dom'

import { Home } from './Home'
import { Layout } from './Layout'
import { NotFound } from './NotFound'
import { Pizza } from './Pizza'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pizza/2" element={<Pizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
