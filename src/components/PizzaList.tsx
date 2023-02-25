import { PizzaItem } from './PizzaItem'

export const PizzaList = () => {
  return (
    <div className="container mx-auto px-5 py-24" id="pizza-list">
      <div className="-mx-4 flex flex-wrap">
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
      </div>
    </div>
  )
}
