import { usePizzasQuery } from '../features/pizza-block/usePizzasQuery'

import { PizzaItem } from './PizzaItem'

export const PizzaList = () => {
  const { data, isLoading, isSuccess } = usePizzasQuery()

  const pizzas = isSuccess && data.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)

  return (
    <div className="container mx-auto px-5 py-24" id="pizza-list">
      <div className="-mx-4 flex flex-wrap">{isLoading ? <div>Loading...</div> : pizzas}</div>
    </div>
  )
}
